/* eslint-disable @typescript-eslint/ban-types */
// import classNames from 'classnames';
import React from 'react';

import styles from '@/components/GameField/index.scss';

const GameField: React.FC = () => (
  <div className={styles['main']}>
    <div className={styles['demo-card-l']} />
    <div className={styles['demo-card-r']} />
    <div className={styles['title']}>UNO</div>
    <div className={styles['subtitle']}>minimal with friends</div>
  </div>
);

export default GameField;
