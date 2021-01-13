import React from 'react';

import { Card } from '@/components/Deck/types/types';
import Skip from '@/components/icons/Skip';

const CardComponent: React.FC<Card> = ({ card }: Card): JSX.Element => (
  <div
    className="
    max-w-card-w-l
    min-h-card-h-l
    flex
    flex-col
    bg-blue-600
    items-end
    relative
    m-0.5
    text-white
    font-roboto
    border-gray-200
    border
    rounded
    font-normal
    transform
    hover:scale-105 cursor-pointer
    leading-9
    "
  >
    <div className="self-start text-2xl absolute top-1 left-1.5 leading-6">{card.description}</div>
    <div
      className="
      self-center
      text-5xl
      absolute top-2/4
      left-2/4 transform
      -translate-x-2/4
      -translate-y-1/2
      "
    >
      {card.description}
    </div>
    <div
      className="
      self-end
      text-2xl
      transform
      rotate-180
      absolute
      bottom-1
      right-1.5
      leading-6
      "
    >
      {card.description === 'skip' ? <Skip /> : card.description}
    </div>
  </div>
);

export default CardComponent;
