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
const cards = require('./Cards.js');

const gameRooms = {};

io.on('connection', (socket) => {
  socket.emit('connected');

  // Create a new room code and add the player to it
   socket.on('create_room', data => {
    const roomCode = require("uniqid");;

    console.log(`${data.name} has created a new game with password ${data.password}`);

    // creates new GameRoom instance
    gameRooms[roomCode] = new GameRoom(roomCode);

    // joins the player to the GameRoom they created
    socket.join(roomCode);
    gameRooms[roomCode].addToRoom(data.name, socket.id);

    // updates the players playerList
    socket.emit('update players', {
      players: gameRooms[roomCode].playerList.prepareToSend(),
      joiningPlayer: data.name,
    });

    // gives the player their cards
    socket.emit('joined', {
      cards: [...gameRooms[roomCode].playerList.players[socket.id].cards],
      roomCode,
    });

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