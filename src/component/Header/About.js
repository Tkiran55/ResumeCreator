import React from 'react';
import styles from './Header.module.css';

const About = () => {
  return (
    <div>
      <div className={styles.content}>
        
        <h3>1. It’s Automated </h3>
          <p>The online creator does the fiddly work for you. All you have to do is enter your information, and the builder takes it all in and formats it for you correctly.</p><br/>
      
        <h3>2. It Saves Time</h3>
          <p>If you’re stressing out about your job hunt, a resume creator can save you oodles of time.  for your next job lead.</p><br/>
      
        <h3>3. No Sign Up </h3>
          <p>You don't have to signup.</p><br/>
      
        <h3>4. Free Download</h3>
          <p>Easy and Free to download your resume as pdf.</p>
          
      </div>
    </div>
  );
}

export default About;
