import { useState, useEffect } from "react";

const Education = ({ onChange }) => {
    const [education, setEducation] = useState([
        {
            school: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
        },
    ]);

    // Update parent when education changes
    useEffect(() => {

        onChange(education);

    }, [education]);

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedEducation = [...education];
        updatedEducation[index][name] = value;
        setEducation(updatedEducation);
    };

    const addEducation = () => {
        setEducation([
            ...education,
            {
                school: '',
                degree: '',
                fieldOfStudy: '',
                startDate: '',
                endDate: '',
            },
        ]);
    };

    const deleteEducation = (indexToRemove) => {
        const updatedEducation = education.filter((_, index) => index !== indexToRemove);
        setEducation(updatedEducation.length ? updatedEducation : [{
            school: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
        }]);
    };

    const clearAllEducation = () => {
        setEducation([
            {
                school: '',
                degree: '',
                fieldOfStudy: '',
                startDate: '',
                endDate: '',
            },
        ]);
    };

    return (
        <section className="section">
            <h2 className="section-h2">Education</h2>

            {education.map((entry, index) => (
                <div key={index} className="mb-6 border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">Education {index + 1}</h3>
                        {education.length > 1 && (
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                onClick={() => deleteEducation(index)}
                            >
                                Delete
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`school-${index}`}>School</label>
                        <input
                            className="input"
                            id={`school-${index}`}
                            name="school"
                            type="text"
                            value={entry.school}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`degree-${index}`}>Degree</label>
                        <input
                            className="input"
                            id={`degree-${index}`}
                            name="degree"
                            type="text"
                            value={entry.degree}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`fieldOfStudy-${index}`}>Field Of Study</label>
                        <input
                            className="input"
                            id={`fieldOfStudy-${index}`}
                            name="fieldOfStudy"
                            type="text"
                            value={entry.fieldOfStudy}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`startDate-${index}`}>Start Date</label>
                        <input
                            className="input"
                            id={`startDate-${index}`}
                            name="startDate"
                            type="date"
                            value={entry.startDate}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="label" htmlFor={`endDate-${index}`}>End Date</label>
                        <input
                            className="input"
                            id={`endDate-${index}`}
                            name="endDate"
                            type="date"
                            value={entry.endDate}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>
                </div>
            ))}

            <div className="flex gap-3 justify-end mt-4">
                <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addEducation}
                >
                    Add Education
                </button>

                <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={clearAllEducation}
                >
                    Clear All
                </button>
            </div>
        </section>
    );
};

export default Education;
