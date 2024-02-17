import React, { useState, useEffect } from 'react';
import Spinner from '../../components/users/Spinner';
import Navbar from '../../components/users/Navbar';
import BreadcrumbSection from '../../components/users/BreadcrumbSection';
import Footer from '../../components/users/Footer';
import courses from './courses';
import axios from 'axios';

const Registration = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchSubcategories = () => {
            const subs = courses.flatMap(category => category.subcategories.flatMap(subcategory => subcategory.courses));
            setSubcategories(subs);
        };

        fetchSubcategories();
    }, []);

    const sendMessageToTelegram = async (message) => {
        try {
            const response = await axios.post(`https://api.telegram.org/bot6838834920:AAHz5wL-wxGw_bKPG3ex_dsBYywlljWL5F8/sendMessage`, {
                chat_id: 6431471143,
                text: message
            });
            console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Get form data
        const formData = new FormData(event.target);

        // Construct message
        let message = 'New registration:\n';
        for (const [key, value] of formData.entries()) {
            message += `${key}: ${value}\n`;
        }

        // Send message to Telegram bot
        await sendMessageToTelegram(message);

        console.log("Form submitted!");
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <>
            {loading && <Spinner />}
            <Navbar />
            <BreadcrumbSection
                currentPage={{ name: "Online Registration", link: "/registration" }}
                parentPages={[
                    { name: "Home", link: "/" }
                ]}
            />
            <div className="container mt-5">
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <h2>Online Registration</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" className="form-control" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="course">Course:</label>
                            <select className="form-control" id="course" name="course" required>
                                <option value="">Select Course</option>
                                {subcategories && subcategories.map(course => (
                                    <option value={course.id}>{course.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="branch">Branch:</label>
                            <select className="form-control" id="branch" name="branch" required>
                                <option value="">Select Branch</option>
                                <option value="branch1" selected>Default</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea className="form-control" id="address" name="address" rows="3" required></textarea>
                        </div>
                        <div className="form-row row">
                            <div className="form-group col-4">
                                <label htmlFor="city">City:</label>
                                <input type="text" className="form-control" id="city" name="city" required />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="country">Country:</label>
                                <input type="text" className="form-control" id="country" name="country" required />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="zip">Zip Code:</label>
                                <input type="text" className="form-control" id="zip" name="zip" required />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>

                ) : (
                    <div className="alert alert-success mt-3" role="alert">
                        Your registration has been submitted successfully. Our representative will call you back.
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Registration;
