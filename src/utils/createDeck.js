const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

const VALUES = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
};

const createDeck = () =>
  suits.flatMap((suit) =>
    Object.entries(VALUES).map(([name, value]) => ({
      suit,
      value,
      name,
    }))
  );

export default createDeck;
