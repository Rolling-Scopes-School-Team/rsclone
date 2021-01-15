import React, { FC } from 'react';

import styles from '@/components/Wait/index.scss';

const Wait: FC = (): JSX.Element => (
  <div className={styles.waitWrapper}>
    <div className={styles.wait}>
      <h3>Waiting for players in room: Name room</h3>
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <div className={styles.tableRow}>
            <p>Name</p>
          </div>
          <div className={styles.tableRow}>
            <p>Name</p>
          </div>
          <div className={styles.tableRow}>
            <p>Name</p>
          </div>
          <div className={styles.tableRow}>
            <p>Name</p>
          </div>
        </div>
      </div>
      <p>This room can contain max 2 players</p>
      <button className={styles.btn} type="button">
        Back
      </button>
    </div>
  </div>
);

export default Wait;
