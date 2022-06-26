const CardDeck = require("./CardDeck");
const Player = require("./Player");


class GameRoom {
  constructor(roomID) {
    const deck = new CardDeck();
    this.roomID = roomID;

    this.whiteDeck = deck.getWhiteCards();
    this.blackDeck = deck.getBlackCards();
    this.players= [];
    this.currentBlackCard = null;
    this.currentCardCzar = null;
    this.playerSelections = [];
    this.winningCards = [];
  }

  addPlayerToRoom(name) {
    const newPlayer = new Player(name, this.roomID);
    newPlayer.refillWhiteCards(this.whiteDeck);
    this.players.push(newPlayer);
  }

  isGameReady() {
    return players.length > 3 && players.all(player => player.ready);
  }

  // removes a player from the room
  // long and complicated due to handling of edge cases
  removeFromRoom(id) {
    const { roomID: roomCode, playerList, playerSelections } = this;
    const { players, pending } = playerList;

    // delete player from playerList and let other players know someone left
    let departingPlayer = players[id].name;
    console.log(`${departingPlayer} left room ${roomCode}`);
    delete players[id];
    io.sockets.in(roomCode).emit('update players', { players: playerList.prepareToSend(), departingPlayer })

    if (playerList.length < 3) {
      // IF THE LOSS OF A PLAYER BRINGS THE PLAYER COUNT BELOW 3
      // clear out the player selections (they will get their cards back on the front end)
      this.playerSelections = [];
      console.log('PLAYER COUNT FELL BELOW 3, CHECKING FOR PENDING PLAYERS')
      // if there are pending players waiting to join the game...
      if (Object.keys(pending).length > 0) {
        // ...shove 'em all in and let other players know when each of them joins
        for (let id in pending) {
          console.log(`adding ${pending[id].name} to players`)
          let joiningPlayer = pending[id].name;
          this.addToRoom(pending[id].name, id);
          io.sockets.in(roomCode).emit('update players', { players: playerList.prepareToSend(), joiningPlayer })
          players[id].ready = true;
          let playerSocket = io.sockets.connected[id];
          playerSocket.emit('joined', { cards: [...players[id].cards] })
        }
      }
      // if there still aren't over 3 players...
      if (playerList.length < 3) {
        console.log('STILL LESS THAN THREE PLAYERS, WAITING FOR MORE') // ...tell everyone who's left that they need more players
        io.sockets.in(roomCode).emit('need more players');
        this.stage = 'waiting for ready'
        Object.values(players).forEach(player => { player.ready = true });
      } else {
        // ...even if there are now enough players, still need to reset the game
        this.startGame();
        io.sockets.in(roomCode).emit('start game', {
          cardCzarName: this.currentCardCzar.name,
          blackCard: this.currentBlackCard
        })
      }
    } else {
      // ...IF THERE ARE STILL 3 OR MORE PLAYERS IN GAME...
      // ...if the departing player was the card czar and the game is not between rounds...
      if (id === this.currentCardCzar.id && this.stage !== 'waiting for ready') {
        // reset the game
        this.startGame();
        io.sockets.in(roomCode).emit('start game', {
          cardCzarName: this.currentCardCzar.name,
          blackCard: this.currentBlackCard
        })
      } else {
        // ...if the game is waiting for players to submit their white cards...
        if (this.stage === 'waiting for player submit') {
          console.log(`deleting ${departingPlayer}'s played cards`) // ...remove the departing player's selection(s)...
          let selectionIndex = playerSelections.findIndex((element) => { return element.id === id });
          if (selectionIndex >= 0) { playerSelections.splice(selectionIndex, 1) }
        }
        // ...and send the played cards to the czar if the departing player was the last one
        if (playerSelections.length === playerList.length - 1) {
          let cardCzarSocket = io.sockets.connected[this.currentCardCzar.id];
          let playerSelectionsScrubbed = playerSelections.map((el) => {
            return el.selection;
          });

          this.stage = 'waiting for czar choice';

          if (cardCzarSocket) {
            console.log(`sending card czar: ${playerSelectionsScrubbed}`)
            cardCzarSocket.emit('czar chooses', { playerSelections: playerSelectionsScrubbed })
          }
        }
      }
    }
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

  // sets current black card, card czar, game stage, and resets players' ready status
  startGame() {
    this.currentBlackCard = this.blackDeck.cards.pop();
    this.currentCardCzar = Object.values(this.playerList.players)[this.playerList.cardCzarIndex];
    this.playerList.resetReady();
  }
}

module.exports = GameRoom;