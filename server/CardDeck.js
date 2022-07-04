const cards = require('./FamilyPack.js');
const shuffleArray = require("./Utility.js");

// CardDeck contains all cards, black and white
class CardDeck {
  constructor() {
    shuffleArray(cards.blackCards);
    shuffleArray(cards.whiteCards);
    this.discard = [];
  }

  // dumps discard into cards, shuffles cards
  reshuffle() {
    this.cards.concat(this.discard);
    this.cards = this.shuffle(this.cards);
  }

  get count() {
    return this.cards.length;
  }

  getWhiteCards() {
    return cards.whiteCards;
  }

  getBlackCards() {
    return cards.blackCards;
  }
}

module.exports = CardDeck;