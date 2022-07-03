const Player = require("./Player");
const GameRoom = require("./GameRoom");

const gameRoom = new GameRoom(2);
const player1 = new Player("Ethan", 1, 2);
gameRoom.addPlayerToRoom(player1);

module.exports = { player1, gameRoom }