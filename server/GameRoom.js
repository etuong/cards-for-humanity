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
    this.currentCzar = null;
    this.playerSelections = [];
    this.winningCards = [];
    this.isGameInSession = false;
  }

  addPlayerToRoom(newPlayer) {
    newPlayer.refillWhiteCards(this.whiteDeck);
    this.players.push(newPlayer);
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

    return this.players.length == 0 ? true : false;
  }

  // takes player selections and puts them into the discard
  // this is important because discard must be emptied back into whiteDeck for reshuffle
  discardSelections() {
    this.playerSelections.forEach((el) => {
      el.selection.forEach((card) => {
        this.whiteDeck.discard.push(card);
      })
    })
    this.playerSelections = [];
  }

  getNextCzar() {
    if (this.cardCzarIndex + 1 === this.length) {
      this.cardCzarIndex = 0;
    } else {
      this.cardCzarIndex += 1;
    }
  }

  startGame() {
    this.currentBlackCard = this.blackDeck.pop();
    this.currentCardCzar = Object.values(this.playerList.players)[this.playerList.cardCzarIndex];
    this.playerList.resetReady();
    this.isGameInSession = true;
  }
}

module.exports = GameRoom;