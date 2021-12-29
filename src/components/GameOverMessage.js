import React from 'react';

const getWinnerMessage = (playerTotal, dealerTotal) => {
  if (playerTotal > 21) {
    return 'Dealer Wins!';
  }

  if (dealerTotal > 21) {
    return 'You Win!';
  }

  if (dealerTotal > playerTotal) {
    return 'Dealer Wins!';
  }

  if (playerTotal > dealerTotal) {
    return 'You Win!';
  }

  return 'Draw!';
};

const GameOverMessage = ({ playerTotal, dealerTotal }) => {
  const message = getWinnerMessage(playerTotal, dealerTotal);

  return (
    <div className="text-center font-bold text-4xl text-white mb-4">
      <div className="flex space-x-6 mb-4">
        <p>Dealer has: {dealerTotal > 21 ? 'BUST' : dealerTotal}</p>
        <p>You have: {playerTotal > 21 ? 'BUST' : playerTotal}</p>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default GameOverMessage;
