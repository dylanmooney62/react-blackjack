import React from 'react';
import Card from './Card';
import CardList from './CardList';

const Player = ({ cards, total }) => {
  return (
    <div className="h-96 text-center">
      <CardList>
        {cards.map((card) => (
          <Card {...card} key={`${card.name}-${card.suit}`} />
        ))}
      </CardList>
      {total > 0 && (
        <p className="font-bold text-white text-3xl mt-12">{total}</p>
      )}
    </div>
  );
};

export default Player;
