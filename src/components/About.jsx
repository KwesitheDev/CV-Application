import { useState } from "react"
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const About = ({ onChange }) => {
    const [about, setAbout] = useState({
        firstame: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        linkedIn: '',
        website: '',
        summary: '',
    })

    const handleAboutChange = (key, value) => setAbout({ ...about, [key]: value })

    return (
        <section className="section" >
            <h2 className="section-h2">About</h2>

            <div className="mb-4">
                <label className="label" htmlFor="firstame">First Name</label>
                <input className="input" type="text" name="firstame" id="firstame" value={about.firstame} onChange={(e) => handleAboutChange('firstame', e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="label" htmlFor="lastName">Last Name</label>
                <input className="input" type="text" name="lastName" id="lastName" value={about.lastName} onChange={(e) => handleAboutChange('lastName', e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="summary" className="label">Summary</label>
                <textarea placeholder="A brief summary/description about yourself" type="text" name="summary" id="summary" className="input h-20" value={about.summary} onChange={(e) => handleAboutChange('summary', e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="label" htmlFor="email">Email</label>
                <input className="input" type="email" name="email" id="email" value={about.email} onChange={(e) => handleAboutChange('email', e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="label" htmlFor="phone">Phone</label>
                <PhoneInput
                    id="phone"
                    defaultCountry="US"
                    className="input"
                    value={about.phone}
                    onChange={(value) => handleAboutChange('phone', value)}
                />
            </div>

            <div className="mb-4">
                <label className="label" htmlFor="address">Address</label>
                <input className="input" type="text" name="address" id="address" value={about.address} onChange={(e) => handleAboutChange('address', e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="label" htmlFor="linkedIn">LinkedIn <span className="italic font-light">(Optional)</span></label>
                <input className="input" type="url" name="linkedIn" id="linkedIn" value={about.linkedIn} onChange={(e) => handleAboutChange('linkedIn', e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="label" htmlFor="website">Website <span className="italic font-light">(Optional)</span></label>
                <input className="input" type="url" name="website" id="website" value={about.website} onChange={(e) => handleAboutChange('website', e.target.value)} />
            </div>

        </section>
    )
}

export default About;