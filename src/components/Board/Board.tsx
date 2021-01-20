import classNames from 'classnames';
import React, { Fragment } from 'react';

import UnoLogo from '@/assets/svg/uno-logo.svg';
import styles from '@/components/Board/Board.scss';
import Card from '@/components/Card/Card';
import Hand from '@/components/Hand';
import { IUser, Position } from '@/types/types';

// import { useSelector } from 'react-redux';
// import { RootState } from '@/store';

const Board: React.FC = (): JSX.Element => {
  // const user = useSelector<RootState, RootState['user']>(state => state.user);
  // const game = useSelector<RootState, RootState['game']>(state => state.game);
  // const { users } = game;

  const player = { name: 'curPlayer', email: 'name@mail.com' }; // ! temp
  const users = [
    // ! temp
    { name: 'Player 1', email: 'name@mail.com' },
    { name: 'curPlayer', email: 'name@mail.com' },
    // { name: 'Player 2', email: 'name@mail.com' },
    // { name: 'Player 3', email: 'name@mail.com' },
  ]; // 2 ... 4

  const makeHand = (user: IUser, position: Position) => (
    <div className={classNames(styles['player'], styles[`player-${position}`])}>
      <div className={styles.name}>{user.name}</div>
      <Hand />
    </div>
  );

  const locatePlayers = () => {
    const otherUsers = users.filter(user => user.name !== player.name);

    return (
      <Fragment>
        {makeHand(player, 'bottom')}
        {otherUsers.map((user, index) => {
          switch (index) {
            case 0:
              return makeHand(user, 'top');

            case 1:
              return makeHand(user, 'left');

            case 2:
              return makeHand(user, 'right');

            default:
              return null;
          }
        })}
      </Fragment>
    );
  };

  // ! dev
  const locateGameBoard = () => (
    <div className={styles.field}>
      <div className={styles.table}>
        <div className={styles.deck}>
          <Card name="red-zero" />
        </div>
        <div className={styles.card}>
          <Card />
        </div>
        <div className={styles.container}>
          <div className={styles.color} style={{ background: 'red' }} />
          <button className={styles.button} type="button">
            <UnoLogo />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.board}>
      {locatePlayers()}
      {locateGameBoard()}
    </div>
  );
};

export default Board;
