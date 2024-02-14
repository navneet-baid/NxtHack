import React from 'react'
import BackToTop from './BackToTop';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            {/* Footer Start */}
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
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New Delhi, INDIA</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+11 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />help@nxthack.com</p>
                            <div className="d-flex pt-2">
                                <NavLink className="btn btn-outline-light btn-social" to="/"><i className="fab fa-twitter" /></NavLink>
                                <NavLink className="btn btn-outline-light btn-social" to="/"><i className="fab fa-facebook-f" /></NavLink>
                                <NavLink className="btn btn-outline-light btn-social" to="/"><i className="fab fa-youtube" /></NavLink>
                                <NavLink className="btn btn-outline-light btn-social" to="/"><i className="fab fa-linkedin-in" /></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Stay Updated</h4>
                            <p>Sign up for our newsletter to receive the latest updates, news, and exclusive offers directly to your inbox.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="email" placeholder="Your email" />
                                <button type="submit" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Sign Up</button>
                            </div>
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
            </div >
            {/* Footer End */}
            < BackToTop />

        </>
    )
}

export default Footer