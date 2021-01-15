import React from 'react';
import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UnoLogo from '@/assets/svg/uno-logo.svg';
import styles from '@/components/Intro/Intro.scss';
import { RootState } from '@/store';
import { NEW_GAME_ROUTE, AUTHORIZE_ROUTE } from '@/utils/consts';

const Intro: FC = (): JSX.Element => {
  const user = useSelector<RootState, RootState['user']>(state => state.user); // ! temp

  return (
    <div className={styles.intro}>
      <UnoLogo className={styles.logo} />
      {user.name ? (
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
