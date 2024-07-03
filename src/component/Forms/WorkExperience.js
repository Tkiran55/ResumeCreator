import React, { useEffect, useContext } from 'react';
import { FormContext } from '../FormContext/FormContext';
import styles from './Forms.module.css';

const WorkExperience = () => {
  const { formState, setFormState } = useContext(FormContext);

  useEffect(() => {
    if (formState.workExperience.length === 0) {
      setFormState({ ...formState, workExperience: [
          {
            company: '', jobTitle: '', jobDuties: '', startDate: '', endDate: '',
          },
        ],
      });
    }
  }, [formState, setFormState]);

  const handleChange = (event, field, index) => {
    const newWorkExperience = [...formState.workExperience];
    newWorkExperience[index][field] = event.target.value;
    setFormState({...formState, workExperience: newWorkExperience});
  };

  const handleAddExperience = () => {
    setFormState({ ...formState, 
      workExperience: [ ...formState.workExperience,
        {
          company: '', jobTitle: '', jobDuties: '', startDate: '', endDate: '',
        },
      ],
    });
  };

  const handleRemoveExperience = (index) => {
    const newWorkExperience = [...formState.workExperience];
    newWorkExperience.splice(index, 1);
    setFormState({ ...formState, workExperience: newWorkExperience });
  };

  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <form>
          
          <h1>Work Experience</h1>
          {formState.workExperience.map((experience, index) => (
            <div key={index}>
              
              <div className={styles.formgridcontainer}>
              <label>
                Company:
                <input type="text" placeholder='Enter Company Name' value={experience.company} onChange={(event) => handleChange(event, 'company', index)} />
              </label>

              <label>
                Title:
                <input type="text" placeholder='eg. Frontend Dev' value={experience.jobTitle} onChange={(event) => handleChange(event, 'jobTitle', index)} />
              </label>

              </div>

              <div className={styles.formgridcontainer}>
              <label>
                Start Date:
                <input type="text" value={experience.startDate} onChange={(event) =>handleChange(event, 'startDate', index)} />
              </label>
                  
              <label>
                End Date:
                <input type="text" value={experience.endDate} onChange={(event) => handleChange(event, 'endDate', index)} />
              </label>
              </div>

              <label>
                Responsibilities:
                <textarea value={experience.jobDuties} 
                placeholder='The tasks and duties performed within the company. 
                Example:
                  -Managed a team of 5 customer service representatives
                  -Developed and implemented new customer service training program'
                onChange={(event) => handleChange(event, 'jobDuties', index)} />
              </label>
              
              <button type="button" onClick={() => handleRemoveExperience(index)}>Remove</button>
              <button type="button" onClick={() => handleAddExperience()}>Add Experience</button>
              </div>
          ))}
      
              
      
        </form>
      </div>
    </div>
  );
};

export default WorkExperience;                  
