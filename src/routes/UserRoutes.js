import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/users/Home.jsx';
import '../assets/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '../assets/css/style.css'
import '../assets/js/main.js'
import Error404 from '../pages/users/Error404.jsx';
import ContactUs from '../pages/users/ContactUs.jsx';
import AboutUs from '../pages/users/AboutUs.jsx';
import Certificate from '../pages/users/Certificate.jsx';
import Registration from '../pages/users/Registration.jsx';
import Courses from '../pages/users/Courses.jsx';
import CourseDetail from '../pages/users/CourseDetail.jsx';

const UserRoutes = () => {
    return (
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            {/* Contact Us Page */}
            <Route path="/contact" element={<ContactUs />} />
            {/* About Us Page */}
            <Route path="/about" element={<AboutUs />} />
            {/* Certificate  Page */}
            <Route path="/certificate" element={<Certificate />} />
            {/* Online Registration  Page */}
            <Route path="/registration" element={<Registration />} />
            {/* Courses  Page */}
            <Route path="/courses" element={<Courses />} />
            {/* Courses Details  Page */}
            <Route path="/course-detail/:courseId" element={<CourseDetail />} />
            {/* Error Page */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default UserRoutes