import React from 'react';
import resumeSvg from "../assets/resume.webp";
import styles from './Header.module.css';


const Header = () => {
  return (
    <div>
        <div className={styles.container}> 
            <div className={styles.mainheading}>    
                <p className={styles.heading1}>Resume Builder</p>    
                <p className={styles.heading2}>Create Your Resume Online</p>
                <p className={styles.heading2}>No Sign-Up Required</p>
            </div>  
        </div> 

        <div className={styles.container1}>
            <div className={styles.left}>
                <img src={resumeSvg} alt='Resume'/>
            </div> 

            <div className={styles.heading2}>
                <p>Focus on the content, while we take care of the formatting.</p>
                <span>Quick PDF download</span>
            </div>            
        </div>

        <div className={styles.container2}> 
            <div className={styles.mainheading}>    
                <p className={styles.heading2}>Build Your Resume Fast and Easy.</p>    
            </div>  
        </div>
    </div>
  )
}

export default Header;
