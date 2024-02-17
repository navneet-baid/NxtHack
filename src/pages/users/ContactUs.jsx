import React, { useState } from 'react';
import Spinner from '../../components/users/Spinner';
import Navbar from '../../components/users/Navbar';
import BreadcrumbSection from '../../components/users/BreadcrumbSection';
import Footer from '../../components/users/Footer';
import axios from 'axios';

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const sendMessageToTelegram = async (formData) => {
        try {
            const response = await axios.post(
                'https://api.telegram.org/bot6838834920:AAHz5wL-wxGw_bKPG3ex_dsBYywlljWL5F8/sendMessage',
                {
                    chat_id: 6431471143,
                    text: `
                        New contact query:
                        Name: ${formData.get('name')}
                        Email: ${formData.get('email')}
                        Subject: ${formData.get('subject')}
                        Message: ${formData.get('message')}
                    `
                }
            );
            console.log('Message sent:', response.data);
            setSubmitted(true);
            setLoading(false);
        } catch (error) {
            console.error('Error sending message:', error);
            setError('An error occurred while sending your message. Please try again later.');
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);

        await sendMessageToTelegram(formData);
    };

    return (
        <>
            {loading && <Spinner />}
            <Navbar />
            <BreadcrumbSection
                currentPage={{ name: "Contact", link: "/contact" }}
                parentPages={[
                    { name: "Home", link: "/" }
                ]}
            />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>Get In Touch</h5>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-map-marker-alt text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Office</h5>
                                    <p className="mb-0">D-2, G/F, Kh No 265, Plot No 180-F, New Ashok Nagar, Ashok Nagar Police Station, East Delhi, East Delhi-110096, Delhi, India</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-phone-alt text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Mobile</h5>
                                    <p className="mb-0">+91 9205110948</p>
                                    <p className="mb-0">+91 9205894280</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-envelope-open text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Email</h5>
                                    <p className="mb-0">info@nxthackitsolutions.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            {/* Google Maps */}
                            <iframe title="Office Location" className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54005857385!2d77.04416968189578!3d28.527252734250645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sbd!4v1707404486591!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 300, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" name="message" id="message" style={{ height: 150 }} defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                                {submitted && !error && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        Your message has been submitted successfully. Our team will get back to you soon.
                                    </div>
                                )}
                                {error && (
                                    <div className="alert alert-danger mt-3" role="alert">
                                        {error}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
