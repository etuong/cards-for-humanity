const Constant = require("./Constants");

class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.cards = [];
    this.ready = false;
    this.winningCards = [];
  }

  get score() {
    return this.winningCards.length;
  }

  refillWhiteCards(whiteDeck) {
    for (let i = this.cards.length; i < Constant.WHITE_CARDS_IN_HAND; i++) {
      this.cards.push(whiteDeck.pop());
    }
  }
}

module.exports = Player;