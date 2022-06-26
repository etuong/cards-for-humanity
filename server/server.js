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
const cards = require('./cards.js');

const gameRooms = {};

io.on('connection', (socket) => {
  socket.emit('connected');

  // Create a new room
  socket.on("create_room", options => {
    console.log(`Room ${options.name} is created`);
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