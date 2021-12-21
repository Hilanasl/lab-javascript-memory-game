class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = [];
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    let remain = this.cards.length, t, i;

    while (remain) {
      i = Math.floor(Math.random() * remain--);

      t = this.cards[remain];
      this.cards[remain] = this.cards[i];
      this.cards[i] = t
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    if (card1 !== undefined && card2 !== undefined) {
      this.pairsClicked++;
    } if (card1 === card2) {
      this.pairsGuessed++;
      return true
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}



// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
