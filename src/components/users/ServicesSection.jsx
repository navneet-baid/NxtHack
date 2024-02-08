import React from 'react'

const ServicesSection = () => {
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container d-flex flex-wrap">
                    <div className="row g-4 w-100">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item text-center pt-3 h-100 d-flex flex-column">
                                <div className="p-4 flex-grow-1">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
                                    <h5 className="mb-3">Skilled Instructors</h5>
                                    <p>Learn from industry experts and experienced professionals who are passionate about sharing their knowledge and helping you succeed in your learning journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item text-center pt-3 h-100 d-flex flex-column">
                                <div className="p-4 flex-grow-1">
                                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                                    <h5 className="mb-3">Online Classes</h5>
                                    <p>Access our comprehensive library of online classes from anywhere, anytime. Whether you're a beginner or an advanced learner, we have courses tailored to meet your needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3 h-100 d-flex flex-column">
                                <div className="p-4 flex-grow-1">
                                    <i className="fa fa-3x fa-laptop-code text-primary mb-4" />
                                    <h5 className="mb-3">Coding Challenges</h5>
                                    <p>Dive into the world of coding with our challenging exercises designed to enhance your problem-solving skills and coding proficiency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3 h-100 d-flex flex-column">
                                <div className="p-4 flex-grow-1">
                                    <i className="fa fa-3x fa-microchip text-primary mb-4" />
                                    <h5 className="mb-3">Tech Workshops</h5>
                                    <p>Stay ahead of the curve by joining our interactive tech workshops covering the latest trends, tools, and technologies in the industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    )
}

export default ServicesSection