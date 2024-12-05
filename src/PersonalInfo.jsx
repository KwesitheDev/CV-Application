import React, { useState } from 'react';
import './PersonalInfo.css';
import  './index.css'

const PersonalInfo = ({ onChange }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
    website: '',
    about: ''
  });

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    onChange(name, value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updatedSkills = [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      onChange('skills', updatedSkills);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    const updatedSkills = skills.filter(skill => skill !== skillToDelete);
    setSkills(updatedSkills);
    onChange('skills', updatedSkills);
  };

  const handleClear = () => {
    // Reset form data
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedIn: '',
      website: '',
      about: ''
    });

    // Clear skills
    setSkills([]);
    setNewSkill('');

    // Notify parent component
    Object.keys(formData).forEach(name => {
      onChange(name, '');
    });
    onChange('skills', []);
  };

  return (
    <section className="personal-info-section">
      <h2 className="personal-info-title">Personal Information</h2>
      <form className="personal-info-form">
        <div className="input-container">
          <input 
            type="text" 
            name="fullName" 
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleInputChange} 
            className="form-input"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleInputChange} 
            className="form-input"
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={handleInputChange} 
            className="form-input"
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={formData.address}
            onChange={handleInputChange} 
            className="form-input"
          />
          <input 
            type="text" 
            name="linkedIn" 
            placeholder="LinkedIn (Optional)" 
            value={formData.linkedIn}
            onChange={handleInputChange} 
            className="form-input"
          />
          <input 
            type="url" 
            name="website" 
            placeholder="Website (Optional)" 
            value={formData.website}
            onChange={handleInputChange} 
            className="form-input"
          />
        </div>
        
        <textarea 
          name="about" 
          placeholder="About You" 
          value={formData.about}
          onChange={handleInputChange} 
          className="about-textarea"
        />

        <div className="input-container">
          <div className="skills-input">
            <input 
              type="text" 
              placeholder="Add a skill" 
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="form-input"
            />
            <button 
              type="button" 
              onClick={handleAddSkill}
              className="add-skill-btn"
            >
              Add Skill
            </button>
          </div>

          {skills.length > 0 && (
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                  <button 
                    type="button" 
                    onClick={() => handleDeleteSkill(skill)}
                    className="skill-delete-btn"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="button-container">
          <button 
            type="button" 
            onClick={handleClear}
            className="clear-btn"
          >
            Clear All
          </button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInfo;