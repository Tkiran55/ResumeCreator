import React from 'react';
import styles from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




const Footer = () => {
  const handleClick = () => {
    alert("Link not found");
  };

  return (
    <div className={styles.footer}>
        <h2> FOLLOW US ON</h2>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/KiraNgyangj02/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <div onClick={handleClick}>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div onClick={handleClick}>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
    </div>
  )
}



export default Footer;
