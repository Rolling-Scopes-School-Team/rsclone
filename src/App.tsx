import React, { Fragment } from 'react';

import GameField from '@/components/GameField';
import LazyImagesExample from '@/components/LazyImagesExample';
import TableExample from '@/components/TableExample';

const App = (): JSX.Element => (
  <Fragment>
    <TableExample />
    <LazyImagesExample />
    <GameField />
  </Fragment>
);

export default App;
