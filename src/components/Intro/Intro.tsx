import React from 'react';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import UnoLogo from '@/assets/svg/uno-logo.svg';
import styles from '@/components/Intro/Intro.scss';
import { NEW_GAME_ROUTE, AUTHORIZE_ROUTE } from '@/utils/consts';

const Intro: FC = (): JSX.Element => {
  const user = 1; // ! temp

  return (
    <div className={styles.intro}>
      <UnoLogo className={styles.logo} />
      {user ? (
        <NavLink to={NEW_GAME_ROUTE}>
          <button type="button" className={styles.btn}>
            Play
          </button>
        </NavLink>
      ) : (
        <NavLink to={AUTHORIZE_ROUTE}>
          <button type="button" className={styles.btn}>
            Log In
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default Intro;
