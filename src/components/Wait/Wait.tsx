import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '@/components/Wait/Wait.scss';
import { NEW_GAME_ROUTE } from '@/utils/consts';

const Wait: FC = (): JSX.Element => (
  <div className={styles.waitWrapper}>
    <div className={styles.wait}>
      <h3>Waiting for players in room: Name room</h3>
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <div className={styles.tableRow}>
            <p>Name</p>
          </div>
        </div>
      </div>
      <p className={styles.waitMaxPlayers}>This room can contain max 2 players</p>
      <NavLink to={NEW_GAME_ROUTE}>
        <button className={styles.btn} type="button">
          Back
        </button>
      </NavLink>
    </div>
  </div>
);

export default Wait;
