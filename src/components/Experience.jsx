import { useState, useEffect } from "react";

const Experience = ({ onChange }) => {
    const [experience, setExperience] = useState([
        {
            nameOfCompany: "",
            startDate: "",
            endDate: "",
            role: "",
            description: "",
        },
    ]);

    useEffect(() => {
        onChange(experience);
    }, [experience]);

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = [...experience];
        updatedExperience[index][name] = value;
        setExperience(updatedExperience);
    };

    const addExperience = () => {
        setExperience([
            ...experience,
            {
                nameOfCompany: "",
                startDate: "",
                endDate: "",
                role: "",
                description: "",
            },
        ]);
    };

    const deleteExperience = (indexToRemove) => {
        const updatedExperience = experience.filter((_, index) => index !== indexToRemove);
        setExperience(
            updatedExperience.length
                ? updatedExperience
                : [
                    {
                        nameOfCompany: "",
                        startDate: "",
                        endDate: "",
                        role: "",
                        description: "",
                    },
                ]
        );
    };

    const removeAllExperience = () => {
        setExperience([
            {
                nameOfCompany: "",
                startDate: "",
                endDate: "",
                role: "",
                description: "",
            },
        ]);
    };

    return (
        <section className="section">
            <h2 className="section-h2">Experience</h2>

            {experience.map((entry, index) => (
                <div key={index} className="mb-6 border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
                        {experience.length > 1 && (
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                onClick={() => deleteExperience(index)}
                            >
                                Delete
                            </button>
                        )}
                    </div>

                    {["nameOfCompany", "role", "description", "startDate", "endDate"].map((field) => (
                        <div className="flex flex-col mb-2" key={field}>
                            <label className="label" htmlFor={`${field}-${index}`}>
                                {field === "nameOfCompany"
                                    ? "Name of Company"
                                    : field === "role"
                                        ? "Role / Position"
                                        : field === "startDate"
                                            ? "Start Date"
                                            : field === "endDate"
                                                ? "End Date"
                                                : "Description"}
                            </label>
                            {field === "description" ? (
                                <textarea
                                    className="input"
                                    id={`${field}-${index}`}
                                    name={field}
                                    placeholder="A brief description of your job/position"
                                    value={entry[field]}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                />
                            ) : (
                                <input
                                    className="input"
                                    id={`${field}-${index}`}
                                    name={field}
                                    type="text"
                                    value={entry[field]}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}

            <div className="flex gap-3 justify-end mt-4">
                <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addExperience}
                >
                    Add Experience
                </button>

                <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4  rounded"
                    onClick={removeAllExperience}
                >
                    Clear All
                </button>
            </div>
        </section>
    );
};

export default Experience;
