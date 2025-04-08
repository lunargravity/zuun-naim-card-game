const SUITS = ['H', 'S', 'C', 'D'];
const VALUES = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export default class Deck {
  constructor(cards = createDeck()) {
    this.cards = cards;
  }

  get length() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }

  show() {
    this.cards.forEach((card) => card.display());
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  display() {
    console.log(`${this.suit}${this.value}`);
  }
}

function createDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
}
