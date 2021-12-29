import { hit, stand, play, newRound } from '../reducers/game';
import React from 'react';
import Button from './Button';

const GameControls = ({ playing, playerTurn, gameOver, dispatch }) => {
  return (
    <div className="flex items-center justify-center space-x-12">
      {!playing && <Button onClick={() => dispatch(play())}>Play</Button>}
      {gameOver && (
        <Button onClick={() => dispatch(newRound())}>Play Again?</Button>
      )}
      {playerTurn && (
        <>
          <Button onClick={() => dispatch(hit('player'))}>Hit</Button>
          <Button onClick={() => dispatch(stand())}>Stand</Button>
        </>
      )}
    </div>
  );
};

export default GameControls;
