// import { useState } from 'react';
import styles from './Footer.module.css';

import icons from '../../images/icons/sprite.svg';

const Footer = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div>
        <p>
          &copy; 2024 | Developed with
          <span className={styles.icon}>
            <svg width="14px" height="12.88px">
              <use href={`${icons}#icon-heart`}></use>
            </svg>
          </span>
          by
          <span
            className={styles.students}
            // onClick={() => setIsModalOpen(true)}
          >
            GoIT Students
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
