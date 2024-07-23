import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Navbar = () => {
  const location = useLocation();

  const handleLinkClick = () => {
    // Navigate back if the current path is '/About'
    if (location.pathname === '/About') {
      window.history.back();
    }
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <span className={styles.logo}>Resu_me</span>
        <div className={styles.linkContainer}>
          <Link
            className={styles.link}
            to='/About'
            onClick={handleLinkClick}
          >
            <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
