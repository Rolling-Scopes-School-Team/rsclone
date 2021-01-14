import React from 'react';

import Card from '@/components/Deck/Card/Card';
import cardData from '@/components/Deck/cardData';
import { ICard } from '@/components/Deck/types/types';

const colors: string[] = ['red', 'blue', 'green', 'yellow'];

const Deck = (): JSX.Element => (
  <div className="flex flex-row flex-wrap w-12/12">
    {Object.keys(cardData).map(e => {
      const el = cardData[e] as ICard;
      const arr = [];
      for (let i = 0; i < el.countOfCards; i += 1) {
        if (el.fourColors) {
          for (let k = 0; k < 4; k += 1) {
            arr.push(<Card card={el} background={colors[k]} />);
          }
        } else {
          arr.push(<Card card={el} background="dark" />);
        }
      }
      return arr;
    })}
  </div>
);

export default Deck;
