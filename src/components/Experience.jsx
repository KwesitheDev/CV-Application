import { useState } from "react"

const Experience = ({ onChange }) => {
    const [experience, setExperience] = useState([
        {
            nameOfCompany: '',
            startDate: '',
            endDate: '',
            role: '',
            description: '',
        }
    ])

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target
        const updatedExperience = [...experience]
        updatedExperience[index][name] = value;
        setExperience(updatedEducation)
    }

    const addExperience = () => {
        setExperience([
            ...experience, {
                nameOfCompany: '',
                startDate: '',
                endDate: '',
                role: '',
                description: '',
            }
        ])
    }

    const deleteExperience = (indexToRemove) => {
        const updatedExperience = experience.filter((_, index) => index !== indexToRemove);
        setExperience(updatedExperience.length ? updatedExperience : [{
            nameOfCompany: '',
            startDate: '',
            endDate: '',
            role: '',
            description: '',
        }]);
    };

    const removeAllExperience = () => {
        setExperience([
            {
                nameOfCompany: '',
                startDate: '',
                endDate: '',
                role: '',
                description: '',
            },
        ]);
    };

    return (
        <section className="section">
            <h2 className="section-h2">Experience</h2>

            {experience.map((entry, index) => (
                <div className="mb-6 border-b pb-4 ">
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
                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`nameOfCompany-${index}`}>Name of Company</label>
                        <input
                            className="input"
                            id={`nameOfCompany-${index}`}
                            name="nameOfCompany"
                            type="text"
                            value={entry.nameOfCompany}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`role-${index}`}>Role / Postion</label>
                        <input
                            className="input"
                            id={`role-${index}`}
                            name="role"
                            type="text"
                            value={entry.role}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`description-${index}`}>Description</label>
                        <textarea
                            placeholder="A brief description of your job/position"
                            className="input"
                            id={`description-${index}`}
                            name="description"
                            type="text"
                            value={entry.description}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`startDate-${index}`}>Start Date</label>
                        <input
                            className="input"
                            id={`startDate-${index}`}
                            name="startDate"
                            type="text"
                            value={entry.startDate}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="label" htmlFor={`endDate-${index}`}>End Date</label>
                        <input
                            className="input"
                            id={`endDate-${index}`}
                            name="endDate"
                            type="text"
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
                    onClick={addExperience}
                >
                    Add Education
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
    )

}

export default Experience