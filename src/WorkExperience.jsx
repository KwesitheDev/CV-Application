import React, { useState } from 'react';

const WorkExperience = ({ onSubmit }) => {
  const [experiences, setExperiences] = useState([{
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    responsibilities: '',
    achievements: ''
  }]);

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const newExperiences = [...experiences];
    newExperiences[index] = {
      ...newExperiences[index],
      [name]: type === 'checkbox' ? checked : value
    };
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      responsibilities: '',
      achievements: ''
    }]);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(experiences);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 border rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <button
          type="button"
          onClick={addExperience}
          className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
        >
          + Add Experience
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-end">
              {experiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Position</label>
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={experience.location}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="current"
                    checked={experience.current}
                    onChange={(e) => handleChange(index, e)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Current Position</span>
                </label>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  disabled={experience.current}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Key Responsibilities</label>
                <textarea
                  name="responsibilities"
                  value={experience.responsibilities}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  rows="3"
                  required
                  placeholder="Describe your key responsibilities..."
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Key Achievements</label>
                <textarea
                  name="achievements"
                  value={experience.achievements}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border rounded-md"
                  rows="3"
                  placeholder="List your key achievements..."
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Save Work Experience
        </button>
      </form>
    </div>
  );
};

export default WorkExperience;