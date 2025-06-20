import React, { forwardRef } from 'react';

const CVPreview = forwardRef(({ about, education, experience }, ref) => (

    <div ref={ref} className=" preview max-w-3xl  md:w-200 md:h-9/10  mx-4 p-8 bg-white shadow-lg rounded-lg font-sans text-gray-800">

        <header className="border-b pb-4 mb-6">
            <h1 className="text-4xl font-extrabold tracking-tight">{about.firstName} {about.lastName}</h1>
            <p className="text-sm mt-1">{about.email} | {about.phone} | {about.address}</p>
            {about.linkedIn && <p className="text-sm">LinkedIn: <a href={about.linkedIn} className="text-blue-600">{about.linkedIn}</a></p>}
            {about.website && <p className="text-sm">Website: <a href={about.website} className="text-blue-600">{about.website}</a></p>}
            <p className="mt-4 italic">{about.summary}</p>
        </header>

        <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 border-b mb-2">Education</h2>
            {education.map((edu, i) => (
                <div key={i} className="mb-2">
                    <p className="font-bold">{edu.degree} in {edu.fieldOfStudy}</p>
                    <p className="text-sm">{edu.school} ({edu.startDate} - {edu.endDate})</p>
                </div>
            ))}
        </section>

        <section>
            <h2 className="text-xl font-semibold text-gray-700 border-b mb-2">Experience</h2>
            {experience.map((exp, i) => (
                <div key={i} className="mb-4">
                    <p className="font-bold">{exp.role} at {exp.nameOfCompany}</p>
                    <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</p>
                    <p className="text-sm">{exp.description}</p>
                </div>
            ))}
        </section>
    </div>
));


export default CVPreview