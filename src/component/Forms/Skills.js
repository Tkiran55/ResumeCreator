import React, { useContext, useState } from 'react';
import { FormContext } from '../FormContext/FormContext';
import styles from './Forms.module.css';

const Skills = () => {
  const { formState, setFormState } = useContext(FormContext);
  const [skillName, setSkillName] = useState('');

  const handleChange = (event) => {
    setSkillName(event.target.value);
    if (event.keyCode === 13) {
      event.preventDefault();
      handleAddSkill();
    }
  };

  const handleAddSkill = () => {
    setFormState({ ...formState,
      skills: [...formState.skills, skillName],
    });
    setSkillName('');
  };
  
  const handleRemoveSkill = (index) => {
    const newSkills = [...formState.skills];
    newSkills.splice(index, 1);
    setFormState({ ...formState, skills: newSkills });
  };

  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <form>
          
          <h1>Skills</h1>
          <label>
            <input type="text" value={skillName} onChange={handleChange} onKeyDown={handleChange} />
          </label>

          <div className="grid-container">
            <button type="button"onClick={handleAddSkill}>Add Skill</button>
          </div>

          <ul>
            {formState.skills.map((skill, index) => (
              <li key={index}>{skill} 
                <div className="grid-container">
                  <button type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

        </form>
      </div>
    </div>
  );
};

export default Skills;