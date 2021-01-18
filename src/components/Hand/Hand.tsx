import React from 'react';

import Card from '@/components/Deck/Card/Card';
import cardData from '@/components/Deck/cardData';
import styles from '@/components/Hand/Hand.scss';

const Hand: React.FC = (): JSX.Element => (
  <div className={styles.hand}>
    <Card card={cardData['zero']} background="red" />
    <Card card={cardData['seven']} background="yellow" />
    <Card card={cardData['zero']} background="green" />
    <Card card={cardData['wildDraw4']} background="dark" />
    <Card card={cardData['zero']} background="blue" />
  </div>
);

export default Hand;
