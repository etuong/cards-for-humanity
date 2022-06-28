const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);

app.use(logger('dev'));
app.use(cors());
app.get("/", (_, res) => {
  res.redirect('https://etuong.github.io/pictionary.io');
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = process.env.PORT || 8081;

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

const io = require('socket.io')(server, {
  cors: {
    origin:["http://localhost:8080"],
    credentials: true
  },
  transports: ['polling', 'websocket'],
  allowEIO3: true
});

const Player = require("./Player");
const GameRoom = require("./GameRoom");
const gameRooms = new Map();

io.on('connection', (socket) => {
  socket.emit('connected');

  socket.on('create_room', data => {
    const roomId = data.password.toUpperCase();

    if (gameRooms.has(roomId)) {
      socket.emit('room_existed')
      console.log(`${data.name} tries to create room ${roomId} but room exists already`);
    } else {
      const newGameRoom = new GameRoom(roomId);

      const newPlayer = new Player(data.name, socket.id, roomId);

      newGameRoom.addPlayerToRoom(newPlayer);

      socket.join(roomId);

      socket.emit('update_player', newPlayer);

      socket.emit('update_players', {
        players: newGameRoom.players,
        isGameReady: newGameRoom.isGameReady()
      });

      gameRooms.set(roomId, newGameRoom);

      console.log(`${data.name} has created a new game with password ${data.password} in room ${roomId}`);
    }
  });

  socket.on('join_room', data => {
    const roomId = data.password.toUpperCase();
    const gameRoom = gameRooms.get(roomId);

    if (!gameRoom) {
      socket.emit('room_does_not_exist')
      console.log(`${data.name} tries to join room ${roomId} but room does not exist`);
    } else if (gameRoom.players.length == 10) {
      socket.emit("room_full");
      console.log(`${data.name} tries to join room ${roomId} but room is full`);
    } else if (gameRoom.isGameInSession) {
      socket.emit("game_in_session");
      console.log(`${data.name} tries to join room ${roomId} but game is in session`);
    } else {
      const newPlayer = new Player(data.name, socket.id, roomId);

      gameRoom.addPlayerToRoom(newPlayer);

      socket.join(roomId);

      socket.emit('update_player', newPlayer);

      io.sockets.in(roomId).emit('update_players', {
        players: gameRoom.players,
        isGameReady: gameRoom.isGameReady()
      });

      console.log(`${data.name} has joined room ${roomId}`);
    }
  });

  socket.on('player_ready', player => {
    const gameRoom = gameRooms.get(player.roomId);
    const selected_player = gameRoom.getPlayerById(player.id);
    selected_player.ready = true;

    socket.emit('update_player', selected_player);

    io.sockets.in(player.roomId).emit('update_players', {
      players: gameRoom.players,
      isGameReady: gameRoom.isGameReady()
    });

    console.log(`${player.name} is ready to play in room ${player.roomId}!`);
  });

  socket.on('game_ready', roomId=> {
    const gameRoom = gameRooms.get(roomId);
    gameRoom.startGame();
    console.log(`Room ${roomId} is ready to play!`);
  });

  socket.on('disconnect', () => {
    gameRooms.forEach((gameRoom, roomId) => {
      let players = gameRoom.players;
      for (let player of players) {
        if (player.id === socket.id) {
          socket.leave(roomId);
          if (gameRoom.removePlayerFromRoom(player)) {
            gameRooms.delete(roomId);
          }
          io.sockets.in(roomId).emit('update_players', {
            players: gameRoom.players,
            isGameReady: gameRoom.isGameReady()
          });
          console.log(`${player.name} just left room ${roomId}!`);
          socket.emit("test");
          break;
        }
      }
    })
  })
});

process.on("exit", function (code) {
  server.close();
  console.log("Server exit", code);
});