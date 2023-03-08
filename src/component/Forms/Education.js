import React, { useEffect,useContext } from 'react';
import { FormContext } from '../FormContext/FormContext';
import styles from './Forms.module.css';

const Education = () => {
  const { formState, setFormState } = useContext(FormContext);

  useEffect(() => {
    if (formState.education.length === 0) {
      setFormState({ ...formState, education: [
          {
            institution: '', address: '', degree: '', passDate: '',
          },
        ],
      });
    }
  }, [formState, setFormState]);

  const handleChange = (event, field, index) => {
    const newEducation = [...formState.education];
    newEducation[index][field] = event.target.value;
    setFormState({...formState, education: newEducation});
  };

  const handleAddEducation = () => {
    setFormState({ ...formState, education: 
      [...formState.education,
        {
          institution: '', address: '', degree: '', passDate:'',
        },
      ],
    });
  };

  const handleRemoveEducation = (index) => {
    const newEducation = [...formState.education];
    newEducation.splice(index, 1);
    setFormState({ ...formState, education: newEducation });
  };

  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <form>

        <h1>Education</h1>
        {formState.education.map((ed, index) => (
          <div key={index}>
            <div className={styles.formgridcontainer}>
              <label>
                Institution:
                <input type="text" placeholder='Enter Institution Name' value={ed.institution} onChange={(event) => handleChange(event, 'institution', index)} />
              </label>

              <label>
                Address:
                <input type="text" placeholder='Enter Institution Address' value={ed.address} onChange={(event) => handleChange(event, 'address', index)} />
              </label>
            </div>
              <label>
                Degree:
                <input type="text" placeholder='eg. Bachlor of Computer Application' value={ed.degree} onChange={(event) => handleChange(event, 'degree', index)} />
              </label>
              
              <label >
                Passed Year:
                <input type="text" value={ed.passDate} onChange={(event) => handleChange(event, 'passDate', index)} />
              </label>
              
              
              <button type="button" onClick={() => handleRemoveEducation(index)}>Remove</button>
              <button type="button" onClick={handleAddEducation}>Add Education</button>
              
          </div>
            
        ))}
          
              
          
        </form>
      </div>
    </div>
  );
};

export default Education;
