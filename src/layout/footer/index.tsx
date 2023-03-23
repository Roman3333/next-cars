import { FC } from 'react';

import styles from './footer.module.scss';

const footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div>Logo</div>
          <div>Copyright by Roman</div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
