const Player = require("./Player");
const GameRoom = require("./GameRoom");

const roomId = "2";
const gameRoom = new GameRoom(2);
const player1 = new Player("Ethan", 1, roomId);
const player2 = new Player("Tommy", 2, roomId);
const player3 = new Player("Johnny", 3, roomId);
const player4 = new Player("Jenny", 4, roomId);

gameRoom.addPlayerToRoom(player1);
gameRoom.addPlayerToRoom(player2);
gameRoom.addPlayerToRoom(player3);
gameRoom.addPlayerToRoom(player4);

gameRoom.startGame();
module.exports = { player1, gameRoom, roomId }