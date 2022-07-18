const Constant = require("./Constants");

class Player {
  constructor(name, id, roomId) {
    this.name = name;
    this.id = id;
    this.roomId = roomId;
    this.cards = [];
    this.ready = false;
    this.cardSelected = false;
    this.winningCards = [];
  }

  refillWhiteCards(whiteDeck) {
    for (let i = this.cards.length; i < Constant.WHITE_CARDS_IN_HAND; i++) {
      this.cards.push(whiteDeck.pop());
    }
  }
}

module.exports = Player;