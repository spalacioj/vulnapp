import { useState } from "react";
import "../assets/styles/Contact.css"
import Header from "../components/Header";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <>
        <Header/>
        <div className="contact-wrapper">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" onChange={handleChange} />
                    <input name="email" placeholder="Email" onChange={handleChange} />
                    <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Contact;