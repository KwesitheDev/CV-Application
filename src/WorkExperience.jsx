import React, { useState } from 'react';

const WorkExperience = ({ onChange }) => {
  const [experiences, setExperiences] = useState([{ 
    company: '', 
    role: '', 
    startDate: '', 
    endDate: '', 
    isCurrentJob: false,
    description: '',
    skills: []
  }]);

  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updatedExperiences = [...experiences];
    
    // Handle checkbox separately
    if (type === 'checkbox') {
      updatedExperiences[index][name] = checked;
      
      // If current job is checked, clear end date
      if (checked) {
        updatedExperiences[index].endDate = '';
      }
    } else {
      updatedExperiences[index][name] = value;
    }
    
    setExperiences(updatedExperiences);
    onChange('experiences', updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { 
      company: '', 
      role: '', 
      startDate: '', 
      endDate: '', 
      isCurrentJob: false,
      description: '',
      skills: []
    }]);
  };

  const deleteExperience = (indexToRemove) => {
    const updatedExperiences = experiences.filter((_, index) => index !== indexToRemove);
    setExperiences(updatedExperiences);
    onChange('experiences', updatedExperiences);
  };

  const addSkillToExperience = (index) => {
    if (newSkill.trim()) {
      const updatedExperiences = [...experiences];
      const currentSkills = updatedExperiences[index].skills || [];
      
      // Prevent duplicate skills
      if (!currentSkills.includes(newSkill.trim())) {
        updatedExperiences[index].skills = [...currentSkills, newSkill.trim()];
        setExperiences(updatedExperiences);
        onChange('experiences', updatedExperiences);
        
        // Reset skill input
        setNewSkill('');
      }
    }
  };

  const deleteSkillFromExperience = (expIndex, skillToRemove) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[expIndex].skills = updatedExperiences[expIndex].skills.filter(
      skill => skill !== skillToRemove
    );
    setExperiences(updatedExperiences);
    onChange('experiences', updatedExperiences);
  };

  const clearAllExperiences = () => {
    setExperiences([{ 
      company: '', 
      role: '', 
      startDate: '', 
      endDate: '', 
      isCurrentJob: false,
      description: '',
      skills: []
    }]);
    onChange('experiences', []);
  };

  return (
    <section className="work-experience-section">
      <h2 className="work-experience-title">Work Experience</h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="experience-input-container">
          <div className="experience-header">
            <h3>Experience {index + 1}</h3>
            {experiences.length > 1 && (
              <button 
                type="button" 
                onClick={() => deleteExperience(index)}
                className="delete-experience-btn"
              >
                ×
              </button>
            )}
          </div>
          
          <input 
            type="text" 
            name="company" 
            placeholder="Company" 
            value={exp.company}
            onChange={(e) => handleInputChange(index, e)} 
            className="form-input"
          />
          
          <input 
            type="text" 
            name="role" 
            placeholder="Role" 
            value={exp.role}
            onChange={(e) => handleInputChange(index, e)} 
            className="form-input"
          />
          
          <div className="date-input-container">
            <input 
              type="date" 
              name="startDate" 
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleInputChange(index, e)} 
              className="form-input"
            />
            
            <input 
              type="date" 
              name="endDate" 
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleInputChange(index, e)} 
              className="form-input"
              disabled={exp.isCurrentJob}
            />
          </div>
          
          <div>
            <label>
              <input 
                type="checkbox" 
                name="isCurrentJob"
                checked={exp.isCurrentJob}
                onChange={(e) => handleInputChange(index, e)}
              />
              Currently Working Here
            </label>
          </div>
          
          <textarea 
            name="description" 
            placeholder="Job Description"
            value={exp.description}
            onChange={(e) => handleInputChange(index, e)} 
            className="about-textarea"
          />
          
          <div>
            <input 
              type="text" 
              placeholder="Add Skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="form-input"
            />
            <button 
              type="button" 
              onClick={() => addSkillToExperience(index)}
              className="add-experience-btn"
            >
              Add Skill
            </button>
          </div>
          
          {exp.skills && exp.skills.length > 0 && (
            <div className="skills-container">
              {exp.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-tag">
                  {skill}
                  <button 
                    type="button" 
                    onClick={() => deleteSkillFromExperience(index, skill)}
                    className="skill-delete-btn"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      <div className="button-container">
        <button 
          type="button" 
          onClick={addExperience}
          className="add-experience-btn"
        >
          Add Another Experience
        </button>
        
        <button 
          type="button" 
          onClick={clearAllExperiences}
          className="clear-btn"
        >
          Clear All Experiences
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;