import React from 'react';

import styles from '@/components/Deck/Card/index.scss';
import { Card } from '@/components/Deck/types/types';
import Draw2 from '@/components/icons/Draw2';
import Draw4CardsXxl from '@/components/icons/Draw4CardsXxl';
import Reverse from '@/components/icons/Reverse';
import ReverseXxl from '@/components/icons/ReverseXxl';
import Skip from '@/components/icons/Skip';
import SkipXxl from '@/components/icons/SkipXxl';
import Wild from '@/components/icons/Wild';
import WildXxl from '@/components/icons/WildXxl';

const CardComponent: React.FC<Card> = ({ card, background }: Card): JSX.Element => {
  let smallIcon;
  let bigIcon;

  switch (card.description) {
    case 'skip':
      smallIcon = <Skip />;
      bigIcon = <SkipXxl />;
      break;
    case 'reverse':
      smallIcon = <Reverse />;
      bigIcon = <ReverseXxl />;
      break;
    case 'draw2':
      smallIcon = '+2';
      bigIcon = <Draw2 />;
      break;
    case 'changeColor':
      smallIcon = <Wild />;
      bigIcon = <WildXxl />;
      break;
    case 'draw4Cards':
      smallIcon = '+4';
      bigIcon = <Draw4CardsXxl />;
      break;
    default:
      smallIcon = card.description;
      bigIcon = card.description;
  }
  return (
    <div className={[styles.card, styles[background]].join(' ')}>
      <div className={styles.cardTop}>{smallIcon}</div>
      <div className={styles.cardCenter}>{bigIcon}</div>
      <div className={styles.cardBottom}>{smallIcon}</div>
    </div>
  );
};

export default CardComponent;
