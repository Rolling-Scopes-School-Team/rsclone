import React from 'react';

import Card from '@/components/Deck/Card/Card';

const Deck = (): JSX.Element => (
  <div className="flex flex-row flex-wrap w-12/12">
    <Card card="one" background="green" />
  </div>
);

export default Deck;
