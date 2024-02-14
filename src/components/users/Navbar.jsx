import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import JoinNowModal from './JoinNowModal';
import SocialFixed from './SocialFixed';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);
    const handleButtonClick = () => {
        // Redirect to the contact page
        window.location.href = '/contact';
      };
    return (
        <>
              <SocialFixed />

            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-book me-3" />NxtHack</h2>
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
            <JoinNowModal show={showModal} handleClose={handleModalClose} />

        </>
    );
};

export default Navbar;
