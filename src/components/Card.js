import React from 'react';

const Card = ({ suit, name, hidden = false }) => {
  const src = hidden ? 'img/cards/BACK.svg' : `img/cards/${suit}/${name}.svg`;

  return (
    <div className="card">
      <div
        className={`relative w-full h-72 card__inner ${hidden ? 'active' : ''}`}
        style={{ width: 212 }}
      >
        <img
          src={src}
          alt={`${suit} of ${name}`}
          className="h-full absolute inset-0 card__front mx-auto p-2"
        />
        <img
          src="img/cards/BACK.svg"
          alt="Back of card"
          className="h-full absolute inset-0 card__back mx-auto p-2"
        />
      </div>
    </div>
  );
};

export default Card;
