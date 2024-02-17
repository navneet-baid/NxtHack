import React, { useState } from 'react';
import BackToTop from './BackToTop';
import { NavLink } from 'react-router-dom';
const Footer = () => {

    return (
        <>
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">NxtHack Admin Panel</h4>
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
