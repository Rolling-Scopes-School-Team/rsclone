import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from '@/components/CreateRoom/index.scss';
import { createRoomAPI } from '@/store/actionCreators';
import { NEW_GAME_ROUTE, WAIT_FOR_PLAYERS } from '@/utils/consts';

const CreateRoom: FC = (): JSX.Element => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [size, setSize] = useState('2');

  const dispatch = useDispatch();

  const create = () => {
    const data = {
      name,
      password,
      size: +size,
    };

    dispatch(createRoomAPI(data));
  };

  return (
    <div className={styles.createRoomWrapper}>
      <div className={styles.createRoom}>
        <form className={styles.form}>
          <h3 className={styles.header}>Create Room</h3>
          <input
            className={styles.input}
            required
            type="text"
            placeholder="Name Room"
            onChange={e => setName(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <p className={styles.description}>If you dont set a password this room will be public</p>
          <h4>Max Players</h4>
          <p className={styles.maxPlayerDescription}>
            Choose the maximum number of players in room:
          </p>
          <div className={styles.radioButtonContainer}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.radioButton}>
              <input type="radio" name="radio" value="2" onChange={e => setSize(e.target.value)} />
              <span className={styles.checkmark} />
              2
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.radioButton}>
              <input type="radio" name="radio" value="2" onChange={e => setSize(e.target.value)} />
              <span className={styles.checkmark} />
              3
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.radioButton}>
              <input type="radio" name="radio" value="4" onChange={e => setSize(e.target.value)} />
              <span className={styles.checkmark} />
              4
            </label>
          </div>
          <div className={styles.btnContainer}>
            <NavLink to={WAIT_FOR_PLAYERS}>
              <button className={styles.btn} type="button" onClick={create}>
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
};

export default CreateRoom;
