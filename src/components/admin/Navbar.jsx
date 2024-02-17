import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    const handleLogout = () => {
        // Clear cookie indicating user is logged in
        document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Redirect to admin page
        window.location.href = '/admin';
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/admin" className="navbar-brand d-flex align-items-center p-4 px-lg-5">
                    NxtHack &nbsp;<strong>ADMIN PANEL</strong>
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
                        {/* <Link to="/admin" className="nav-item nav-link active">Home</Link> */}
                    </div>
                    <Button variant="primary" className="py-4 px-lg-5 d-none d-lg-block" onClick={handleLogout}>
                        Logout<i className="fa fa-lock ms-3" />
                    </Button>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
