import React, { useState } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import XIcon from '@/assets/svg/x.svg';
import styles from '@/components/Authorize/Authorize.scss';
import { INTRO_ROUTE, NEW_GAME_ROUTE } from '@/utils/consts';

import { Auth, Registration } from '../../store/actionCreators';

const Authorize: FC = (): JSX.Element => {
  const [option, setOption] = useState<'login' | 'registration'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const registration = () => {
    const data = {
      email,
      name,
      password,
    };

    dispatch(Registration(data));
  };

  const login = () => {
    const data = {
      email,
      password,
    };

    dispatch(Auth(data));
  };

  return (
    <div className={styles.authorize}>
      <NavLink to={INTRO_ROUTE}>
        <button className={styles.close} type="button">
          <XIcon />
        </button>
      </NavLink>

      {option === 'login' ? (
        <form className={styles.form}>
          <div className={styles.title}>Login</div>
          <input
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="E-mail"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <NavLink to={NEW_GAME_ROUTE}>
            <button onClick={login} className={styles.btn} type="button">
              Sign In
            </button>
          </NavLink>
          <button className={styles.link} type="button" onClick={() => setOption('registration')}>
            Registration
          </button>
        </form>
      ) : (
        <form className={styles.form}>
          <div className={styles.title}>Registration</div>
          <input
            onChange={e => setName(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={e => setEmail(e.target.value)}
            className={styles.input}
            type="email"
            placeholder="E-mail"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <button onClick={registration} className={styles.btn} type="button">
            Sign Up
          </button>
          <button className={styles.link} type="button" onClick={() => setOption('login')}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Authorize;
