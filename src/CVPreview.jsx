import React from 'react';
import './CVPreview.css';

const CVPreview = ({ data }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-container">
      <div className="cv-header">
        <div className="header-content">
          <h1 className="name">{data.fullName}</h1>
          <button 
            onClick={handlePrint} 
            className="print-button"
          >
            Print CV
          </button>
        </div>
        <div className="contact-info">
          <p>{data.email} | {data.phone}</p>
          <p>{data.address}</p>
          {data.linkedIn && (
            <p>LinkedIn: {data.linkedIn}</p>
          )}
          {data.website && (
            <p>Website: {data.website}</p>
          )}
        </div>
      </div>
      
      <div className="cv-section">
        <h2>About</h2>
        <p>{data.about}</p>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        {data.education?.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.school} - {edu.degree}</h3>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2>Work Experience</h2>
        {data.experience?.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role} at {exp.company}</h3>
            <p className="duration">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVPreview;