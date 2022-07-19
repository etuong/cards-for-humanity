const CardDeck = require("./CardDeck");

// Acts like a game controller
class GameRoom {
  constructor(roomId) {
    const deck = new CardDeck();
    this.whiteDeck = deck.getWhiteCards();
    this.blackDeck = deck.getBlackCards();

    // This is the unique ID for the room. It's the room's password
    this.roomId = roomId;
    
    // All players in the game room
    this.players = [];

    // Keep track of Czar
    this.currentBlackCard = null;
    this.currentCzarIndex = -1;

    // All the selected white cards for the round
    this.playerSelections = [];

    // So no new players can join once game starts
    this.isGameInSession = false;
  }

  addPlayerToRoom(newPlayer) {
    newPlayer.refillWhiteCards(this.whiteDeck);
    this.players.push(newPlayer);
  }

  // Have to enforce name uniqueness
  isDuplicatePlayerName(name) {
    return this.players.find(player => player.name === name);
  }

  isGameReady() {
    return this.players.length > 2 && this.players.every(player => player.ready);
  }

  getPlayerById(player_id) {
    return this.players.find(({ id }) => id === player_id);
  }

  // When player's socket gets disconnected, remove the player
  removePlayerFromRoom(player) {
    const index = this.players.indexOf(player);
    if (index > -1) {
      this.players.splice(index, 1);
    }

    return this.players.length;
  }

  resetRound() {
    this.players.forEach(player => {
      player.cardSelected = false;
      player.refillWhiteCards(this.whiteDeck);
    });

    this.playerSelections = [];
    this.startGame();
  }

  getNextCzar() {
    if (this.currentCzarIndex + 1 === this.players.length) {
      this.currentCzarIndex = 0;
    } else {
      this.currentCzarIndex += 1;
    }
  }

  get currentCzar() {
    return this.players[this.currentCzarIndex];
  }

  startGame() {
    this.currentBlackCard = this.blackDeck.pop();
    this.getNextCzar();
    this.isGameInSession = true;
  }
}

module.exports = GameRoom;