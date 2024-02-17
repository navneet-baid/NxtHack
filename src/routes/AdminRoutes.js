import React from 'react'
import { Routes, Route } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import 'wowjs/css/libs/animate.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import '../assets/css/style.css'
import '../assets/js/main.js'
import Error404 from '../pages/users/Error404.jsx';
import Dashboard from '../pages/admin/Dashboard.jsx';
import Login from '../pages/admin/Login.jsx';

const AdminRoutes = () => {
    return (
        <Routes>
            {/* Dashborad Page */}
            <Route path="/" element={<Login />} />
            {/* Login Page */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Error Page */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}

export default AdminRoutes