import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SocialFixed from './SocialFixed';

const Navbar = () => {
    const handleButtonClick = () => {
        // Redirect to the contact page
        window.location.href = '/contact';
    };
    return (
        <>
            <SocialFixed />

            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center p-4 px-lg-5">
                    <img src="logo.png" alt="NxtHack Logo" className="me-3 p-3" style={{ maxWidth: '150px', height: 'auto' }} />
                </Link>
                <button
                    className="navbar-toggler me-4"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/courses" className="nav-item nav-link">Courses</Link>
                        <Link to="/registration" className="nav-item nav-link">Online Registration</Link>
                        <Link to="/certificate" className="nav-item nav-link">Certificate</Link>
                    </div>

                    <Button variant="primary" className="py-4 px-lg-5 d-none d-lg-block" onClick={handleButtonClick}>
                        Contact Now<i className="fa fa-arrow-right ms-3" />
                    </Button>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
