import React, { useState } from 'react';

const Education = ({ onChange }) => {
  const [education, setEducation] = useState([{ 
    school: '', 
    degree: '', 
    fieldOfStudy: '',
    startDate: '', 
    endDate: '', 
    courses: [],
    activities: ''
  }]);

  const [newCourse, setNewCourse] = useState('');

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
    onChange('education', updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { 
      school: '', 
      degree: '', 
      fieldOfStudy: '',
      startDate: '', 
      endDate: '', 
      courses: [],
      activities: ''
    }]);
  };

  const deleteEducation = (indexToRemove) => {
    const updatedEducation = education.filter((_, index) => index !== indexToRemove);
    setEducation(updatedEducation);
    onChange('education', updatedEducation);
  };

  const addCourse = (index) => {
    if (newCourse.trim()) {
      const updatedEducation = [...education];
      const currentCourses = updatedEducation[index].courses || [];
      
      // Prevent duplicate courses
      if (!currentCourses.includes(newCourse.trim())) {
        updatedEducation[index].courses = [...currentCourses, newCourse.trim()];
        setEducation(updatedEducation);
        onChange('education', updatedEducation);
        
        // Reset course input
        setNewCourse('');
      }
    }
  };

  const deleteCourse = (expIndex, courseToRemove) => {
    const updatedEducation = [...education];
    updatedEducation[expIndex].courses = updatedEducation[expIndex].courses.filter(
      course => course !== courseToRemove
    );
    setEducation(updatedEducation);
    onChange('education', updatedEducation);
  };

  const clearAllEducation = () => {
    setEducation([{ 
      school: '', 
      degree: '', 
      fieldOfStudy: '',
      startDate: '', 
      endDate: '', 
      courses: [],
      activities: ''
    }]);
    onChange('education', []);
  };

  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      
      {education.map((edu, index) => (
        <div key={index} className="education-input-container">
          <div className="education-header">
            <h3>Education {index + 1}</h3>
            {education.length > 1 && (
              <button 
                type="button" 
                onClick={() => deleteEducation(index)}
                className="delete-education-btn"
              >
                ×
              </button>
            )}
          </div>
          
          <input 
            type="text" 
            name="school" 
            placeholder="School" 
            value={edu.school}
            onChange={(e) => handleInputChange(index, e)} 
            className="form-input"
          />
          
          <input 
            type="text" 
            name="degree" 
            placeholder="Degree" 
            value={edu.degree}
            onChange={(e) => handleInputChange(index, e)} 
            className="form-input"
          />
          
          <input 
            type="text" 
            name="fieldOfStudy" 
            placeholder="Field of Study" 
            value={edu.fieldOfStudy}
            onChange={(e) => handleInputChange(index, e)} 
            className="form-input"
          />
          
          <div className="date-input-container">
            <input 
              type="date" 
              name="startDate" 
              placeholder="Start Date"
              value={edu.startDate}
              onChange={(e) => handleInputChange(index, e)} 
              className="form-input"
            />
            
            <input 
              type="date" 
              name="endDate" 
              placeholder="End Date"
              value={edu.endDate}
              onChange={(e) => handleInputChange(index, e)} 
              className="form-input"
            />
          </div>
          
          <textarea 
            name="activities" 
            placeholder="Extracurricular Activities"
            value={edu.activities}
            onChange={(e) => handleInputChange(index, e)} 
            className="about-textarea"
          />
          
          <div>
            <input 
              type="text" 
              placeholder="Add Course"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="form-input"
            />
            <button 
              type="button" 
              onClick={() => addCourse(index)}
              className="add-course-btn"
            >
              Add Course
            </button>
          </div>
          
          {edu.courses && edu.courses.length > 0 && (
            <div className="courses-container">
              {edu.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="course-tag">
                  {course}
                  <button 
                    type="button" 
                    onClick={() => deleteCourse(index, course)}
                    className="delete-course-btn"
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
          onClick={addEducation}
          className="add-education-btn"
        >
          Add Another Education
        </button>
        
        <button 
          type="button" 
          onClick={clearAllEducation}
          className="clear-btn"
        >
          Clear All Education
        </button>
      </div>
    </section>
  );
};

export default Education;