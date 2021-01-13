import React, { useState } from 'react';
import type { FC } from 'react';

import XIcon from '@/assets/svg/x.svg';
import styles from '@/components/Authorize/Authorize.scss';

const Authorize: FC = (): JSX.Element => {
  const [option, setOption] = useState<'login' | 'registration'>('login');

  return (
    <div className={styles.authorize}>
      <button className={styles.close} type="button" onClick={() => {}}>
        <XIcon />
      </button>

      {(() => {
        switch (option) {
          case 'login':
            return (
              <form className={styles.form}>
                <div className={styles.title}>Login</div>
                <input className={styles.input} type="email" placeholder="E-mail" />
                <input className={styles.input} type="password" placeholder="Password" />
                <button className={styles.btn} type="button">
                  Sign In
                </button>
                <button
                  className={styles.link}
                  type="button"
                  onClick={() => setOption('registration')}
                >
                  Registration
                </button>
              </form>
            );

          case 'registration':
            return (
              <form className={styles.form}>
                <div className={styles.title}>Registration</div>
                <input className={styles.input} type="text" placeholder="Name" />
                <input className={styles.input} type="email" placeholder="E-mail" />
                <input className={styles.input} type="password" placeholder="Password" />
                <button className={styles.btn} type="button">
                  Sign Up
                </button>
                <button className={styles.link} type="button" onClick={() => setOption('login')}>
                  Login
                </button>
              </form>
            );

          default:
            return {};
        }
      })()}
    </div>
  );
};

export default Authorize;
