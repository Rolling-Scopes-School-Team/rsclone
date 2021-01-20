import classNames from 'classnames';
import React, { Fragment } from 'react';

import UnoLogo from '@/assets/svg/uno-logo.svg';
import styles from '@/components/Board/Board.scss';
import Card from '@/components/Card/Card';
import Hand from '@/components/Hand';
import { Position, Color, CardName, IPlayer } from '@/types/types';

// import { useSelector } from 'react-redux';
// import { RootState } from '@/store';

const Board: React.FC = (): JSX.Element => {
  // const user = useSelector<RootState, RootState['user']>(state => state.user);
  // const game = useSelector<RootState, RootState['game']>(state => state.game);
  // const { users: player } = game;

  const player: IPlayer = {
    // ! temp
    name: 'curPlayer',
    cards: [1, 15, 26, 52, 53],
    amount: null,
  };
  const users = [
    // ! temp
    { name: 'Player 1', cards: null, amount: 5 },
    { name: 'curPlayer', cards: null, amount: null },
    // { name: 'Player 2', cards: null, amount: 8},
    // { name: 'Player 3', cards: null, amount: 2 },
  ];

  const color: Color = 'red';
  const activeCard: CardName = 'blue-zero';

  const makeHand = (user: IPlayer, position: Position) => (
    <div className={classNames(styles['player'], styles[`player-${position}`])}>
      <div className={styles.name}>{user.name}</div>
      <Hand cards={user.cards} amount={user.amount} />
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

  return (
    <div className={styles.board}>
      {locatePlayers()}

      <div className={styles.field}>
        <div className={styles.table}>
          <div className={styles.deck}>
            <Card name={activeCard} />
          </div>
          <div className={styles.card}>
            <Card />
          </div>
          <div className={styles.container}>
            <div className={styles.color} style={{ background: color }} />
            <button className={styles.button} type="button">
              <UnoLogo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
