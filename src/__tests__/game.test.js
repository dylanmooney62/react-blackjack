import createDeck from '../utils/createDeck';
import evaluateCards from '../utils/evaluateCards';

test('Deck contains 52 cards', () => {
  expect(createDeck()).toHaveLength(52);
});

describe('Hand', () => {
  test('King and Ace evaluate to 21', () => {
    const cards = [
      { name: 'King', value: 10 },
      { name: 'Ace', value: 1 },
    ];

    expect(evaluateCards(cards)).toBe(21);
  });

  test('King, Ace and Queen evaluate to 21', () => {
    const cards = [
      { name: 'King', value: 10 },
      { name: 'Ace', value: 1 },
      { name: 'Queen', value: 10 },
    ];

    expect(evaluateCards(cards)).toBe(21);
  });

  test('Nine, Ace and another Ace evaluate to 21', () => {
    const cards = [
      { name: '7', value: 9 },
      { name: 'Ace', value: 1 },
      { name: 'Ace', value: 1 },
    ];

    expect(evaluateCards(cards)).toBe(21);
  });
});
