import React from 'react';

import cardData from '@/components/Card/cardData';
import styles from '@/components/Card/index.scss';
import CardLogo from '@/components/icons/CardLogo';
import Draw2 from '@/components/icons/Draw2';
import Draw4CardsXxl from '@/components/icons/Draw4CardsXxl';
import Reverse from '@/components/icons/Reverse';
import ReverseXxl from '@/components/icons/ReverseXxl';
import Skip from '@/components/icons/Skip';
import SkipXxl from '@/components/icons/SkipXxl';
import Wild from '@/components/icons/Wild';
import WildXxl from '@/components/icons/WildXxl';
import { CardProps } from '@/types/types';

// Usage "front === true" - show front of card, "front === false" - show back of card;
const Card: React.FC<CardProps> = ({ card, background, front }: CardProps): JSX.Element => {
  const visibility = front ? '' : 'showBack';

  const el = cardData[card];
  let smallIcon;
  let bigIcon;

  switch (el.description) {
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
      smallIcon = el.description;
      bigIcon = el.description;
  }

  return (
    <div className={[styles.cardWrapper, styles[visibility]].join(' ')}>
      <div className={[styles.card, styles.front, styles[background]].join(' ')}>
        <div className={styles.cardTop}>{smallIcon}</div>
        <div className={styles.cardCenter}>{bigIcon}</div>
        <div className={styles.cardBottom}>{smallIcon}</div>
      </div>
      <div className={[styles.card, styles.back, styles['dark']].join(' ')}>
        <div className={styles.cardCenter}>
          <CardLogo />
        </div>
      </div>
    </div>
  );
};

export default Card;
