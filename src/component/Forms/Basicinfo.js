import React, {useContext} from 'react';
import styles from './Forms.module.css';
import { FormContext } from '../FormContext/FormContext';

const Basicinfo = () => {
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

        <h1>Basicinfo</h1>
        <label>
          Name:
          <input type="text" placeholder='Enter your Full Name' name="name" value={formState.name} onChange={handleChange} />
        </label>
        
        <label>
          Address:
          <input type="text" name="address" placeholder='Enter your Address' value={formState.address} onChange={handleChange} />
        </label>
      
        <label>
          Contact No:
          <input type="text" name="phone" placeholder='Enter your Phone Number' value={formState.phone} onChange={handleChange} />
        </label>
      
        <label>
          Email:
          <input type="email" name="email" placeholder='eg. youremail@gmail.com' value={formState.email} onChange={handleChange} />
        </label>

        </form>
      </div>
    </div>
  );
}

export default Basicinfo;
