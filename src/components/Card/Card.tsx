import classNames from 'classnames';
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
import { CardProps, ICard } from '@/types/types';

// use name or id prop
// if there is no props => card back
// name?: ICardName, id?: ICardId
const Card: React.FC<CardProps> = ({ name, id }: CardProps): JSX.Element => {
  let cardConfig: ICard;

  if (name) {
    cardConfig = cardData[name];
  } else if (id) {
    cardConfig = Object.values(cardData).find(obj => obj.id === id) || cardData['red-zero'];
  } else {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardCenter}>
            <CardLogo />
          </div>
        </div>
      </div>
    );
  }

  let smallIcon;
  let bigIcon;

  switch (cardConfig.description) {
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
      smallIcon = cardConfig.description;
      bigIcon = cardConfig.description;
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={classNames(styles.card, cardConfig.color ? styles[cardConfig.color] : '')}>
        <div className={styles.cardTop}>{smallIcon}</div>
        <div className={styles.cardCenter}>{bigIcon}</div>
        <div className={styles.cardBottom}>{smallIcon}</div>
      </div>
    </div>
  );
};

export default Card;
