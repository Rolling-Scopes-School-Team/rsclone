import React, { Fragment } from 'react';

import Deck from '@/components/Deck/Deck';
import GameField from '@/components/GameField';
// import LazyImagesExample from '@/components/LazyImagesExample';
// import TableExample from '@/components/TableExample';

const App = (): JSX.Element => (
  <Fragment>
    <Deck />
    {/* <TableExample />*/}
    {/* <LazyImagesExample />*/}
    <GameField />
  </Fragment>
);

export default App;
