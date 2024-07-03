import React, {useContext} from 'react';
import styles from './Resume.module.css';
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import { FormContext } from '../FormContext/FormContext';

const Resume = () => {
  const { formState } = useContext(FormContext);
  const handleDownload = () => {
    const pdf = new jsPDF();

    // render the component to an HTML string
    const componentAsHtml = componentRef.current.outerHTML;

    // add the HTML to the PDF
    pdf.addHTML(componentAsHtml, () => {

      // save the PDF to the user's downloads folder
      pdf.save("resume.pdf");
    });
  };

  const componentRef = React.useRef(null);
  return (
      
    <div className={styles.container}>
      

      <div className={styles.container2}> 
        <div className={styles.mainheading}>    
           <p className={styles.heading2}>My Resume</p>    
        </div>  
      </div>
      
    <div className={styles.forms1} ref={componentRef}>
      <form className={styles.border}>
          <h1>{formState.name}</h1>
          <i className="fa-solid fa-location-dot"></i> {formState.address} || <i className="fa-solid fa-phone"></i> {formState.phone} || <i className="fa-solid fa-envelope"></i> {formState.email}
          <br/>
          <div className={styles.line}></div>

          <div className={styles.space}></div>

          <h2> Summary</h2>
        <div className={styles.para}>
            <p>{formState.summary}</p>
      </div>
      <div className={styles.space}></div>

      <h2> Skills </h2>
        <div className={styles.para}>
            <div>
              <ul className={styles.skillslist}>
                {formState.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
        </div>

            <div className={styles.space}></div>

      <h2>Work Experience</h2>
        <div className={styles.para}>
          
              {formState.workExperience.map((experience, index) => (
                <div key={index}>
                  <strong>{experience.company}</strong> | {experience.jobTitle}, <i>({experience.startDate} - {experience.endDate})</i>
                    <div>
                      <ul>
                        {experience.jobDuties.split('\n').map((duty, index) => (
                          <li key={index}>{duty}</li>
                        ))}
                      </ul>
                    </div>
                </div>
              ))}
        </div>
        <div className={styles.space}></div>

          <h2> Education </h2>
          <div className={styles.para}>
            <ul>
              {formState.education.map((edu, index) => (
                <li key={index}>
                  <p><strong>{edu.degree}</strong> | {edu.institution},{edu.address} <i>({edu.passDate})</i></p>  
                </li>
              ))}
            </ul>
          </div>

            <div className={styles.space}></div>
        

        {formState.other.map((oth, index) => (
          <div key={index}>
            <h2>{oth.title}</h2>
            <div className={styles.para}>
                <strong>{oth.subtitle}</strong> 
                  <div>
                    <ul>
                      {oth.describe.split('\n').map((duty, index) => (
                        <li key={index}>{duty}</li>
                      ))}
                    </ul>
                    <p><i>{oth.links}</i></p>
                  </div>
            </div>
          </div>
        ))}

        <div className={styles.space}></div>


        

            <div className={styles.space}></div>
      
      </form>
    </div>
      
    <ReactToPrint
      trigger={() => <button>Download PDF</button>}
      content={() => componentRef.current}
      pageStyle="@page { size: A4 portrait }">
      
      <div className={styles.button}>
        <button onClick={handleDownload}>Download as PDF</button>
      </div>
    </ReactToPrint>
    
    </div>
  );
}

export default Resume;
