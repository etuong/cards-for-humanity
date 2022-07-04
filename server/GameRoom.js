const CardDeck = require("./CardDeck");

// Acts like a game controller
class GameRoom {
  constructor(roomId) {
    const deck = new CardDeck();
    this.roomId = roomId;
    this.whiteDeck = deck.getWhiteCards();
    this.blackDeck = deck.getBlackCards();
    this.players = [];
    this.currentBlackCard = null;
    this.currentCzarIndex = -1;
    this.playerSelections = [];
    this.winningCards = [];
    this.isGameInSession = false;
    this.playerSelections = [];
  }

  addPlayerToRoom(newPlayer) {
    newPlayer.refillWhiteCards(this.whiteDeck);
    this.players.push(newPlayer);
  }

  isDuplicatePlayerName(name) {
    return this.players.find(player => player.name === name);
  }

  isGameReady() {
    return this.players.length > 2 && this.players.every(player => player.ready);
  }

  getPlayerById(player_id) {
    return this.players.find(({ id }) => id === player_id);
  }

  removePlayerFromRoom(player) {
    const index = this.players.indexOf(player);
    if (index > -1) {
      this.players.splice(index, 1);
    }

    return this.players.length;
  }

  discardSelections() {
    this.playerSelections.forEach((el) => {
      el.selection.forEach((card) => {
        this.whiteDeck.discard.push(card);
      })
    })
    this.playerSelections = [];
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