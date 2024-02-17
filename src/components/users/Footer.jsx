import React, { useState } from 'react';
import BackToTop from './BackToTop';
import { NavLink } from 'react-router-dom';
import { database } from '../../assets/config/firebase';
import { get, query, ref, orderByChild, equalTo, push } from 'firebase/database';
const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            alert('Invalid email address. Please enter a valid email address.');
            return;
        }

        try {
            // Check if email already exists
            const snapshot = await get(query(ref(database, 'subscribers'), orderByChild('email'), equalTo(email)));
            if (snapshot.exists()) {
                alert('Email already subscribed. Thank you for your interest!');
                return;
            }

            // Get the current date
            const currentDate = new Date().toISOString();

            // Save email along with the current date to Firebase Realtime Database
            await push(ref(database, 'subscribers'), { email, date: currentDate });
            alert('Thank you for subscribing! Your email has been successfully added to our newsletter list.');
            setEmail('');
        } catch (error) {
            console.error('Error saving email:', error);
            alert('Failed to save email. Please try again later.');
        }
    };


    const validateEmail = (email) => {
        // Simple email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Quick Link</h4>
                            <NavLink className="btn btn-link" to="/about">About Us</NavLink>
                            <NavLink className="btn btn-link" to="/contact">Contact Us</NavLink>
                            <NavLink className="btn btn-link" to="/privacy-policy">Privacy Policy</NavLink>
                            <NavLink className="btn btn-link" to="/term-and-conditions">Terms &amp; Condition</NavLink>
                            <NavLink className="btn btn-link" to="/faq">FAQs &amp; Help</NavLink>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />D-2, G/F, Kh No 265, Plot No 180-F, New Ashok Nagar, Ashok Nagar Police Station, East Delhi, East Delhi-110096, Delhi, India</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+91 9205110948</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+91 9205894280</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />info@nxthackitsolutions.com</p>
                            <div className="d-flex pt-2">
                                <NavLink className="btn btn-outline-light btn-social" to="https://www.youtube.com/@hashCodersClub2001"><i className="fab fa-youtube" /></NavLink>
                                <NavLink className="btn btn-outline-light btn-social" to="https://www.instagram.com/nxthack_it?igsh=eDh3azY4OWprdjcx"><i className="fab fa-instagram" /></NavLink>
                                <NavLink className="btn btn-outline-light btn-social" to="https://www.facebook.com/nxthackit"><i className="fab fa-facebook" /></NavLink>
                                <NavLink className="btn btn-outline-light btn-social" to="https://twitter.com/nxthackit"><i className="fab fa-twitter"></i></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6"></div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Stay Updated</h4>
                            <p>Sign up for our newsletter to receive the latest updates, news, and exclusive offers directly to your inbox.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                    <input
                                        className="form-control border-0 w-100 py-3 ps-4 pe-5"
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <button type="submit" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <NavLink className="border-bottom" to="/">NxtHack</NavLink>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <NavLink to="/">Home</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop />
        </>
    );
}

export default Footer;
