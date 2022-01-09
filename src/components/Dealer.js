import React, { useRef } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import CardList from './CardList';

import { hit, update } from '../reducers/game';

const Dealer = ({ cards, dealerTurn, total, dispatch }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    if (!dealerTurn) return;

    if (total < 17) {
      timerRef.current = setTimeout(() => {
        dispatch(hit('dealer'));
      }, 1000);
    } else {
      timerRef.current = setTimeout(() => {
        dispatch(update({ gameOver: true }));
      }, 1000);
    }

    return () => clearTimeout(timerRef.current);

    // dealer makes turn, while under 21 keep drawing cards. Once done determine winner
  }, [dealerTurn, cards, total, dispatch]);

  let cardList;

  // If dealer is playing reveal hidden card
  if (dealerTurn) {
    cardList = cards.map((card) => (
      <Card {...card} key={`${card.name}-${card.suit}`} />
    ));
  } else {
    cardList = cards.map((card, idx) =>
      idx === 1 ? (
        <Card {...card} hidden key={`${card.name}-${card.suit}`} />
      ) : (
        <Card {...card} key={`${card.name}-${card.suit}`} />
      )
    );
  }

  return <CardList>{cardList}</CardList>;
};

export default Dealer;
