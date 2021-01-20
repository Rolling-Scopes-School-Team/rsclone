import React from 'react';

import Card from '@/components/Card';
import styles from '@/components/Hand/Hand.scss';

const Hand: React.FC = (): JSX.Element => (
  <div className={styles.hand}>
    <Card name="red-skip" />
    <Card name="yellow-reverse" />
    <Card name="green-draw2" />
    <Card name="blue-one" />
    <Card name="wild" />
    <Card name="wildDraw4" />
  </div>
);

export default Hand;
