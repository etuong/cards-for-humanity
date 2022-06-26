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
const createID = require("uniqid");
const GameRoom = require("./GameRoom");
const gameRooms = {};

io.on('connection', (socket) => {
  socket.emit('connected');

  // Create a new room code and add the player to it
  socket.on('create_room', data => {
    const roomID = createID();

    const newGameRoom = new GameRoom(roomID);

    newGameRoom.addPlayerToRoom(data.name);

    socket.join(roomID);

    socket.emit('update_players', {
      players: newGameRoom.players,
      joiningPlayer: data.name,
      isGameReady: newGameRoom.isGameReady
    });

    gameRooms[roomID] = newGameRoom;

    console.log(`${data.name} has created a new game with password ${data.password} in room ${roomID}`);
    // gives the player their cards
    // socket.emit('joined', {
    //   cards: [...gameRooms[roomID].playerList.players[socket.id].cards],
    //   roomCode: roomID,
    // });

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