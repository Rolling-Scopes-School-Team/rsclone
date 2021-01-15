import axios from 'axios';
import React, { useState } from 'react';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import XIcon from '@/assets/svg/x.svg';
import styles from '@/components/Authorize/Authorize.scss';
import { INTRO_ROUTE } from '@/utils/consts';

const Authorize: FC = (): JSX.Element => {
  const [option, setOption] = useState<'login' | 'registration'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registartion = () => {
    const data = {
      email,
      name,
      password,
    };

    // eslint-disable-next-line no-void
    void axios.post('http://localhost:3002/auth/create', data).then(res => {
      // eslint-disable-next-line no-console
      console.log(res);
    });
  };

  const login = () => {
    const data = {
      email,
      password,
    };

    // eslint-disable-next-line no-void
    void axios
      .post('http://localhost:3002/auth/authUser', data, { withCredentials: true })
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
      });
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
          <button onClick={login} className={styles.btn} type="button">
            Sign In
          </button>
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
          <button onClick={registartion} className={styles.btn} type="button">
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
