import React from 'react';

import CardComponent from '@/components/Deck/Card/Card';
import cardData from '@/components/Deck/cardData';

const Deck = (): JSX.Element => (
  <div>
    {Object.keys(cardData).map(e => {
      const arr = [];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      for (let i = 0; i < cardData[e].countOfCards; i += 1) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        arr.push(<CardComponent card={cardData[e]} />);
      }
      return arr;
    })}
  </div>
);

export default Deck;
