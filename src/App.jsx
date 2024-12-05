import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';
import CVPreview from './CVPreview';
import './App.css';
// import  './styles.css'

const App = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    about: '',
    address: '',
    linkedIn: '',
    website: '',
    education: [],
    experience: [],
  });

  const handleDataChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  return (
    <div className="container">
      <div className="form-container test">
        <PersonalInfo onChange={handleDataChange} />
        <Education onChange={handleDataChange} />
        <WorkExperience onChange={handleDataChange} />
      </div>
      <CVPreview data={data} className="test"/>
    </div>
  );
};

export default App;
