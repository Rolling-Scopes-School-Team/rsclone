import React from 'react';

import Card from '@/components/Card';
import styles from '@/components/Hand/Hand.scss';
import { IHand } from '@/types/types';

const Hand: React.FC<IHand> = ({ amount, cards }): JSX.Element => {
  if (cards) {
    return (
      <div className={styles.hand}>
        {cards?.map(id => (
          <Card id={id} />
        ))}
      </div>
    );
  }

  if (amount) {
    return (
      <div className={styles.hand}>
        {Array(amount)
          .fill('')
          .map(() => (
            <Card />
          ))}
      </div>
    );
  }

  return <div />;
};

export default Hand;
