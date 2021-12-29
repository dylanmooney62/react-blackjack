import arrayShuffle from 'array-shuffle';
import createDeck from '../utils/createDeck';

// Actions
const PLAY = 'PLAY';
const HIT = 'HIT';
const STAND = 'STAND';
const UPDATE = 'UPDATE';
const NEW_ROUND = 'NEW_ROUND';

const deckOfCards = createDeck();

export const initialState = {
  cards: arrayShuffle(deckOfCards),
  player: [],
  dealer: [],
  play: false,
  playerTurn: false,
  dealerTurn: false,
  gameOver: false,
  round: 1,
};

// Reducer
export const gameReducer = (state, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        play: true,
      };
    case HIT:
      const { to } = action.payload;
      return {
        ...state,
        [to]: [...state[to], state.cards.slice(0, 1)[0]],
        cards: state.cards.slice(1),
      };
    case STAND:
      return {
        ...state,
        playerTurn: false,
        dealerTurn: true,
      };
    case NEW_ROUND:
      return {
        ...initialState,
        cards: arrayShuffle(initialState.cards),
        play: true,
        round: state.round + 1,
      };
    case UPDATE:
      return {
        ...state,
        ...action.payload.state,
      };
    default:
      return {
        ...state,
      };
  }
};

// Action Creators
export const play = () => {
  return { type: PLAY };
};

export const hit = (to) => {
  return { type: HIT, payload: { to } };
};

export const stand = () => {
  return { type: STAND };
};

export const update = (state) => {
  return { type: UPDATE, payload: { state } };
};

export const newRound = () => {
  return { type: NEW_ROUND };
};
