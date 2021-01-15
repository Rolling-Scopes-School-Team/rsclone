import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '@/components/NewGame/NewGame.scss';
import OpenLobby from '@/components/icons/OpenLobby';
import PrivateLobby from '@/components/icons/PrivateLobby';
import { CREATE_ROOM, WAIT_FOR_PLAYERS } from '@/utils/consts';

const NewGame: FC = (): JSX.Element => (
  <div className={styles['newGame']}>
    <div className={styles['burger']}>Burger</div>
    <div className={styles['tableContainer']}>
      <div>
        <h3 className={styles['caption']}>Match list</h3>
      </div>
      <div className={styles['table']}>
        <div className={styles['tableRow']}>
          <div>
            <p>Header</p>
          </div>
          <div className={styles.tableRowRoomInfo}>
            <p className="pr-4">2/3</p>
            <PrivateLobby />
          </div>
        </div>
        <div className={styles['tableRow']}>
          <div>
            <p>Header</p>
          </div>
          <div className={styles.tableRowRoomInfo}>
            <p className="pr-4">2/3</p>
            <OpenLobby />
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <NavLink to={WAIT_FOR_PLAYERS}>
          <button className={styles.btn} type="button">
            Quick match
          </button>
        </NavLink>
        <NavLink to={CREATE_ROOM}>
          <button className={styles.btn} type="button">
            Create match
          </button>
        </NavLink>
        <button className={styles.btn} type="button">
          Back
        </button>
      </div>
    </div>
  </div>
);

export default NewGame;
