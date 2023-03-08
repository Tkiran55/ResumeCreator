import React, {useContext} from 'react';
import styles from './Forms.module.css';
import { FormContext } from '../FormContext/FormContext';

const Summary = () => {
  const { formState, setFormState } = useContext(FormContext);

  const handleChange = event => {
    setFormState({ ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <form>

          <h1>Summary</h1>
          <label >
            Details:
            <textarea name='summary' placeholder='eg. "A highly motivated individual seeking a challenging role as a project manager in a dynamic organization where I can utilize my skills and experience to drive projects to success."' 
            value={formState.summary} onChange={handleChange} />
          </label>
        
        </form>
      </div>
    </div>
  );
}

export default Summary;