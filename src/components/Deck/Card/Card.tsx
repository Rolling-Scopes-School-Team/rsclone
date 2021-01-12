import React from 'react';

import { Card } from '@/components/Deck/types/types';

const CardComponent: React.FC<Card> = (card: Card): JSX.Element => (
  <div data-key={card.card.description} />
);

export default CardComponent;
