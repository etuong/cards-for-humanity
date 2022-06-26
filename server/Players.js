class PlayerList {
  constructor() {
    this.players = {};
    this.pending = {};
    this.cardCzarIndex = 0;
  }

  get length() {
    return Object.keys(this.players).length;
  }

  allReady() {
    for (let id in this.players) {
      if (!this.players[id].ready) {
        return false;
      }
    }
    return true;
  }

  resetReady() {
    for (let id in this.players) {
      this.players[id].ready = false;
    }
  }

  prepareToSend() {
    let playersPackaged = [];

    for (let id in this.players) {
      playersPackaged.push({
        name: this.players[id].name,
        id: id,
        ready: this.players[id].ready,
        winningCards: this.players[id].winningCards,
        score: this.players[id].score,
      });
    }

    return playersPackaged;
  }

  // iterates cardCzarIndex, loops back to zero if reaches the end of the player list
  nextCardCzar() {
    if (this.cardCzarIndex + 1 === this.length) {
      this.cardCzarIndex = 0;
    } else {
      this.cardCzarIndex += 1;
    }
  }
}

module.export = Players;