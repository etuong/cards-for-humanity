const Constant = require("./Constants");

class Player {
  constructor(name, id, roomId) {
    this.name = name;

    // Player unique ID. This is the Socket ID
    this.id = id;

    // So we know the game room that the player is in.
    // This is the room's password
    this.roomId = roomId;

    this.cards = [];

    // Confirmation from the lobby page
    this.ready = false;

    // Has player selected a white card for the round?
    this.cardSelected = false;

    // Array of objects for the won pairs
    this.winningCards = [];
  }

  // Need to make sure each player has 10 cards in hand
  refillWhiteCards(whiteDeck) {
    for (let i = this.cards.length; i < Constant.WHITE_CARDS_IN_HAND; i++) {
      this.cards.push(whiteDeck.pop());
    }
  }
}

module.exports = Player;