const cards = require('./ClassicPack.js');

// CardDeck contains all cards, black and white
class CardDeck {
  constructor() {
    this.shuffleArray(cards.blackCards);
    this.shuffleArray(cards.whiteCards);
    this.discard = [];
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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