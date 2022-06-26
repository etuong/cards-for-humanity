const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();

const server = require('http').createServer(app);

app.use(logger('dev'));
app.use(cors());
// app.use(express.static(`${__dirname}/public`));

app.get("/", (_, res) => {
  res.redirect('https://etuong.github.io/pictionary.io');
});

const io = require('socket.io')(server);
const GameRoom = require("./GameRoom");
const gameRooms = new Map();

io.on('connection', (socket) => {
  socket.emit('connected');

  socket.on('create_room', data => {
    const roomID = data.password.toUpperCase();

    if (gameRooms.has(roomID)) {
      socket.emit('room_existed')
    } else {

      const newGameRoom = new GameRoom(roomID);

      newGameRoom.addPlayerToRoom(data.name);

      socket.join(roomID);

      socket.emit('new_player_joined', {
        joiningPlayer: data.name,
      });

      socket.emit('update_players', {
        players: newGameRoom.players,
        isGameReady: newGameRoom.isGameReady
      });

      gameRooms.set(roomID, newGameRoom);

      console.log(`${data.name} has created a new game with password ${data.password} in room ${roomID}`);
    }
  });

  socket.on('join_room', data => {
    const roomID = data.password.toUpperCase();
    const gameRoom = gameRooms.get(roomID);

    if (!gameRoom) {
      socket.emit('room_does_not_exist')
    } else if (gameRoom.players.length == 10) {
      socket.emit("room_full");
    } else if (gameRoom.isGameInSession) {
      socket.emit("game_in_session");
    } else {
      gameRoom.addPlayerToRoom(data.name);

      socket.join(roomID);

      socket.emit('new_player_joined', {
        joiningPlayer: data.name,
      });

      io.sockets.in(roomID).emit('update_players', {
        players: gameRoom.players,
        isGameReady: gameRoom.isGameReady
      });

      console.log(`${data.name} has joined room ${roomID}`);
    }
  });
});

const port = process.env.PORT || 8081;

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

process.on("exit", function (code) {
  server.close();
  console.log("Server exit", code);
});