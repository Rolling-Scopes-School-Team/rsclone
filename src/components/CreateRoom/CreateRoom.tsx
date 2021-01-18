import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Card from '@/components/Card/Card';
import styles from '@/components/CreateRoom/index.scss';
import { NEW_GAME_ROUTE, WAIT_FOR_PLAYERS } from '@/utils/consts';

const CreateRoom: FC = (): JSX.Element => (
  <div className={styles.createRoomWrapper}>
    <Card card="wildDraw4" background="dark" front />
    <div className={styles.createRoom}>
      <form className={styles.form}>
        <h3 className={styles.header}>Create Room</h3>
        <input className={styles.input} required type="text" placeholder="Name Room" />
        <input className={styles.input} type="password" placeholder="Password" />
        <p className={styles.description}>If you dont set a password this room will be public</p>
        <h4>Max Players</h4>
        <p className={styles.maxPlayerDescription}>Choose the maximum number of players in room:</p>
        <div className={styles.radioButtonContainer}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={styles.radioButton}>
            <input type="radio" defaultChecked name="radio" />
            <span className={styles.checkmark} />
            2
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={styles.radioButton}>
            <input type="radio" name="radio" />
            <span className={styles.checkmark} />
            3
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={styles.radioButton}>
            <input type="radio" name="radio" />
            <span className={styles.checkmark} />
            4
          </label>
        </div>
        <div className={styles.btnContainer}>
          <NavLink to={WAIT_FOR_PLAYERS}>
            <button className={styles.btn} type="button">
              Create
            </button>
          </NavLink>
          <NavLink to={NEW_GAME_ROUTE}>
            <button className={styles.btn} type="button">
              Back
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  </div>
);

export default CreateRoom;
