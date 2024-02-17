import React from 'react'
import Spinner from '../../components/users/Spinner'
import Navbar from '../../components/users/Navbar'
import ServicesSection from '../../components/users/ServicesSection'
import BreadcrumbSection from '../../components/users/BreadcrumbSection'
import Footer from '../../components/users/Footer'

const AboutUs = () => {
    return (
        <>
            <Spinner />
            <Navbar />
            <BreadcrumbSection
                currentPage={{ name: "About", link: "/about" }}
                parentPages={[
                    { name: "Home", link: "/" }
                ]}
            />            <div>
                <ServicesSection />
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100">
                                    <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                                <h1 className="mb-4">Welcome to NxtHack</h1>
                                <p className="mb-4">NxtHack IT SOLUTIONS LLP provides online courses to students in various categories. We offer comprehensive learning experiences across a wide range of topics, including programming, web development, data science, cybersecurity, and more.</p>
                                <p className="mb-4">Our mission is to empower learners worldwide to acquire new skills and advance their careers through accessible and high-quality education. At NxtHack, we are committed to fostering a learning community that promotes collaboration, creativity, and innovation.</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Expert Instructors</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Flexible Learning</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Interactive Courses</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Practical Projects</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Continuous Support</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Career Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}

            </div>
            <Footer />
        </>
    )
}

export default AboutUs