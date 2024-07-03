import './App.css';
import React, { useState } from 'react'
import { FormContext } from './component/FormContext/FormContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Header/Navbar';
import About from './component/Header/About';
import Header from './component/Header/Header';
import Nothing from './component/Header/Nothing';
import Basicinfo from './component/Forms/Basicinfo'
import Education from './component/Forms/Education';
import Summary from './component/Forms/Summary';
import WorkExperience from './component/Forms/WorkExperience';
import Skills from './component/Forms/Skills';
import Other from './component/Forms/Other';
import Resume from './component/Resume/Resume';
import Footer from './component/Footer/Footer';

const App = () => {
  const [formState, setFormState] = useState({
    name: '', address: '', phone: '', email: '',
    education: [],
    summary: [],
    workExperience: [],
    skills: [],
    other:[],
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="*" element={<Nothing/>} />
            <Route exact path="/about" element={<About />} />
            
          </Routes>
      </BrowserRouter>

      <Header />
      <FormContext.Provider value={{ formState, setFormState }}>
        <div className="container">
          <div className='gridcontainer'>
          <Basicinfo /> <p>"Make sure to double-check all of the information."</p>
          <Summary /> <p>"You can also use your summary as an objective statement and provide a clear career goal with your summary."</p>
          <WorkExperience /> <p>"Here's Some tips for writing effective Responsibility statements" Use strong action verbs such as 'managed', 'coordinated', 'created', 'designed', 'implemented', etc. Use concise and clear language to describe your responsibilities. </p>
          <Skills /><p>"Make sure to tailor the skills listed to the job you are applying for."</p>
          <Education /><p>"Take the time to review and verify all of the information."</p>
          <Other /><p>"Add other additional Section if required."</p>
          </div>
        </div>
        <Resume />
      </FormContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
