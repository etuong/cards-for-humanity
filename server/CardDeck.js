const cards = require('./FriendlyPack.js');
const shuffleArray = require("./Utility.js");

// CardDeck contains all cards, black and white
class CardDeck {
  constructor() {
    shuffleArray(cards.blackCards);
    shuffleArray(cards.whiteCards);
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