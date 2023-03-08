import React, { useContext } from 'react';
import { FormContext } from '../FormContext/FormContext';
import styles from './Forms.module.css';

const Other = () => {
  const { formState, setFormState } = useContext(FormContext);

  // useEffect(() => {
  //   if (formState.other.length === 0) {
  //     setFormState({ ...formState, other: [
  //         {
  //           title: '', subtitle: '', describe:'',
  //         },
  //       ],
  //     });
  //   }
  // }, [formState, setFormState]);

  const handleChange = (event, field, index) => {
    const newOther = [...formState.other];
    newOther[index][field] = event.target.value;
    setFormState({...formState, other: newOther});
  };

  const handleAddOther = () => {
    setFormState({ ...formState, other: [
        ...formState.other,
        {
          title: '', subtitle: '', links:'', describe:'',
        },
      ],
    });
  };

  const handleRemoveOther= (index) => {
    const newOther = [...formState.other];
    newOther.splice(index, 1);
    setFormState({ ...formState, other: newOther });
  };

  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <form>

          <h1>Others</h1>
          {formState.other.map((oth, index) => (
            <div key={index}>
              <label>
                Title:
                <input type="text" value={oth.title} onChange={(event) => handleChange(event, 'title', index)} />
              </label>

              <label>
                Sub Title:
                <input type="text" value={oth.subtitle} onChange={(event) => handleChange(event, 'subtitle', index)} />
              </label>

              <label>
                Links:
                <input type="text" value={oth.links} onChange={(event) => handleChange(event, 'links', index)} />
              </label>

              <label>
                Describe:
                <textarea value={oth.describe} onChange={(event) => handleChange(event, 'describe', index)} />
              </label>
              
              <div className="grid-container">
                <button type="button" onClick={() => handleRemoveOther(index)}>Remove</button>
              </div>
            </div>
          ))}

              <div className="grid-container">
                <button type="button" onClick={handleAddOther}>Add Other</button>
              </div>

        </form>
      </div>
    </div>
  );
};

export default Other;
