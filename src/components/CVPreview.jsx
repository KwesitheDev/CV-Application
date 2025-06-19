import React, { forwardRef } from 'react';

const CVPreview = forwardRef(({ about, education, experience }, ref) => (

    <div ref={ref} className="preview p-6 bg-white shadow rounded">
        <h1 className="text-3xl font-bold">{about.firstName} {about.lastName}</h1>
        <p>{about.email} | {about.phone} | {about.address}</p>
        {about.linkedIn && <p>LinkedIn: {about.linkedIn}</p>}
        {about.website && <p>Website: {about.website}</p>}
        <p className="mt-4 italic">{about.summary}</p>

        <h2 className="text-xl font-semibold mt-6">Education</h2>
        {education.map((edu, i) => (
            <div key={i}>
                <p className="font-bold">{edu.degree} in {edu.fieldOfStudy}</p>
                <p>{edu.school} ({edu.startDate} - {edu.endDate})</p>
            </div>
        ))}

        <h2 className="text-xl font-semibold mt-6">Experience</h2>
        {experience.map((exp, i) => (
            <div key={i}>
                <p className="font-bold">{exp.role} at {exp.nameOfCompany}</p>
                <p>{exp.startDate} - {exp.endDate}</p>
                <p>{exp.description}</p>
            </div>
        ))}
    </div>
));

export default CVPreview;
