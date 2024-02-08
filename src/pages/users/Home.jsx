import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'animate.css/animate.min.css';
import Spinner from '../../components/users/Spinner';
import Navbar from '../../components/users/Navbar';
import ServicesSection from '../../components/users/ServicesSection';
import Footer from '../../components/users/Footer';
import JoinNowModal from '../../components/users/JoinNowModal';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      <Carousel />
      <ServicesSection />
      <AboutSection />
      <CategorySection />
      <CoursesSection />
      <TeamSection />
      <TestimonialSection />
      <Footer />
    </>
  )
}

const Carousel = () => {
  // Define carousel items
  const carouselItems = [
    {
      imgSrc: 'img/carousel-1.jpg',
      title: 'Discover New Skills with NxtHack',
      subtitle: 'Unlock Your Potential',
      description: 'Expand your knowledge and stay ahead in today\'s fast-paced world. With NxtHack, you can access a diverse range of courses covering the latest technologies, programming languages, and industry trends. Start your learning journey today!',
    },
    {
      imgSrc: 'img/carousel-2.jpg',
      title: 'Master Cutting-Edge Technologies',
      subtitle: 'Stay Relevant in Tech',
      description: 'Stay up-to-date with the latest advancements in technology and innovation. Our expert-led courses provide hands-on experience and practical skills that will help you excel in your field. Join NxtHack and become a tech leader!',
    },
  ];
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);


  return (
    <div className="container-fluid p-0 mb-5">
      <OwlCarousel
        className="owl-theme header-carousel"
        loop
        nav
        dots={false}
        items={1}
        autoplayTimeout={5000} // Adjust the delay time in milliseconds (5000ms = 5 seconds)
        autoplay
      >

        {carouselItems.map((item, index) => (
          <div className="owl-carousel-item position-relative" key={index}>
            <img className="img-fluid" src={item.imgSrc} alt="" />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-sm-10 col-lg-8">
                    <h5 className=" text-uppercase mb-3 animated slideInDown" style={{ color: 'aliceblue' }}>{item.subtitle}</h5>
                    <h1 className="display-3 text-white animated slideInDown">{item.title}</h1>
                    <p className="fs-5 text-white mb-4 pb-2">{item.description}</p>
                    <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                    <a href="#" className="btn btn-light py-md-3 px-md-5 animated slideInRight" onClick={handleModalShow}>Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </OwlCarousel>
      <JoinNowModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
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
              <NavLink className="btn btn-primary py-3 px-5 mt-2" to="/about">Read More</NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  )
}

const CategorySection = () => {
  return (
    <>
      {/* Categories Start */}
      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
            <h1 className="mb-5">Courses Categories</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                  <a className="position-relative d-block overflow-hidden" href>
                    <img className="img-fluid" src="img/cat-1.jpg" alt />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                      <h5 className="m-0">Web Design</h5>
                      <small className="text-primary">49 Courses</small>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                  <a className="position-relative d-block overflow-hidden" href>
                    <img className="img-fluid" src="img/cat-2.jpg" alt />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                      <h5 className="m-0">Graphic Design</h5>
                      <small className="text-primary">49 Courses</small>
                    </div>
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                  <a className="position-relative d-block overflow-hidden" href>
                    <img className="img-fluid" src="img/cat-3.jpg" alt />
                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                      <h5 className="m-0">Video Editing</h5>
                      <small className="text-primary">49 Courses</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
              <a className="position-relative d-block h-100 overflow-hidden" href>
                <img className="img-fluid position-absolute w-100 h-100" src="img/cat-4.jpg" alt style={{ objectFit: 'cover' }} />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: 1 }}>
                  <h5 className="m-0">Online Marketing</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Categories Start */}
    </>
  )
}

const CoursesSection = () => {
  return (
    <>
      {/* Courses Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
            <h1 className="mb-5">Popular Courses</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-1.jpg" alt />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">₹149.00</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small>(123)</small>
                  </div>
                  <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-2.jpg" alt />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">₹149.00</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small>(123)</small>
                  </div>
                  <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-3.jpg" alt />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                    <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">₹149.00</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small>(123)</small>
                  </div>
                  <h5 className="mb-4">Web Design &amp; Development Course for Beginners</h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2" />John Doe</small>
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />1.49 Hrs</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />30 Students</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Courses End */}
    </>
  )
}

const TeamSection = () => {
  return (
    <>
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
            <h1 className="mb-5">Expert Instructors</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-1.jpg" alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-2.jpg" alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-3.jpg" alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/team-4.jpg" alt />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  )
}

const TestimonialSection = () => {
  return (
    <>
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>
          <OwlCarousel
            className="owl-carousel testimonial-carousel position-relative"
            loop
            autoplay
            smartSpeed={1000}
            center
            margin={24}
            dots
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              992: { items: 3 }
            }}
          >
            <div className="testimonial-item text-center">
              <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: 80, height: 80 }} alt="Testimonial 1" />
              <h5 className="mb-0">Student Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: 80, height: 80 }} alt="Testimonial 2" />
              <h5 className="mb-0">Student Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: 80, height: 80 }} alt="Testimonial 3" />
              <h5 className="mb-0">Student Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: 80, height: 80 }} alt="Testimonial 4" />
              <h5 className="mb-0">Student Name</h5>
              <p>Profession</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  )
}
export default Home