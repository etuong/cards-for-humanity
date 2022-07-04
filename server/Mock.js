const Player = require("./Player");
const GameRoom = require("./GameRoom");

const roomId = 2;
const gameRoom = new GameRoom(2);
const player1 = new Player("Ethan", 1, roomId);
gameRoom.addPlayerToRoom(player1);
gameRoom.startGame();
module.exports = { player1, gameRoom, roomId }