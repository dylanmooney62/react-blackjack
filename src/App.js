import { useEffect, useReducer, useRef } from 'react';
import './App.css';
import { gameReducer, initialState, hit, stand, update } from './reducers/game';
import evaluateCards from './utils/evaluateCards';
import Dealer from './components/Dealer';
import Player from './components/Player';
import Layout from './components/Layout';
import GameControls from './components/GameControls';
import GameOverMessage from './components/GameOverMessage';

// Assumptions

// The player always chooses the highest valid value. Meaning an ACE equals 11 unless it causes a bust.
// The dealer always hits on a total of 16 or less.
// The dealer will stand on soft 17 (E.g., 6 + Ace).
// The dealer plays out turn even if the player has bust.

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!state.play) return;

    let dealt = 0;

    timerRef.current = setInterval(() => {
      const to = dealt % 2 === 0 ? 'player' : 'dealer';

      dispatch(hit(to));

      dealt += 1;

      if (dealt === 4) {
        clearInterval(timerRef.current);
        dispatch(update({ playerTurn: true }));
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [state.play, state.round]);

  useEffect(() => {
    if (!state.play) return;

    const playerTotal = evaluateCards(state.player);

    if (playerTotal > 21) {
      dispatch(stand());
    }
  }, [state.play, state.player]);

  const dealerTotal = evaluateCards(state.dealer);
  const playerTotal = evaluateCards(state.player);

  return (
    <Layout>
      <Dealer
        cards={state.dealer}
        dealerTurn={state.dealerTurn}
        total={dealerTotal}
        dispatch={dispatch}
      />
      <div className="flex flex-1 justify-center items-center flex-col">
        {state.gameOver && (
          <GameOverMessage
            playerTotal={playerTotal}
            dealerTotal={dealerTotal}
          />
        )}
        <GameControls
          playing={state.play}
          playerTurn={state.playerTurn}
          gameOver={state.gameOver}
          dispatch={dispatch}
        />
      </div>
      <Player cards={state.player} total={playerTotal} />
    </Layout>
  );
};

export default App;
