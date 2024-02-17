import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/admin/Spinner';
import Footer from '../../components/admin/Footer';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../assets/config/firebase';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    // Check if user is already logged in
    useEffect(() => {
        const isLoggedIn = document.cookie.includes('loggedIn=true');
        if (isLoggedIn) {
            window.location.href = '/admin/dashboard';
        }
    }, []);
    const handleLogin = async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        setLoading(true);
        setIsButtonDisabled(true);
        try {
            // Authenticate user with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            console.log(userCredential)
            if (userCredential) {
                // Set cookie to indicate user is logged in
                document.cookie = 'loggedIn=true;path=/';
                window.location.href = '/admin/dashboard';
            } else {
                // User does not exist in the database
                setError('Invalid username or password.');
            }
        } catch (error) {
            setError('Invalid username or password.');
        }
        setLoading(false);
        setIsButtonDisabled(false);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const email = document.getElementById('username').value;
        setLoading(true);
        try {
            if (email !== "") {
                // Send password reset email
                await sendPasswordResetEmail(auth, email);
                setError('');
                alert('Password reset email sent. Please check your email inbox.');
            } else {
                setError('Invalid Email ID.')
            }

        } catch (error) {
            setError('Failed to send password reset email.');
        }
        setLoading(false);
    };

    return (
        <>
            <Spinner show={loading} />
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <LoginForm onSubmit={handleLogin} onResetPassword={handleResetPassword} error={error} isButtonDisabled={isButtonDisabled} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/admin" className="navbar-brand d-flex align-items-center p-4 px-lg-5">
                    NxtHack &nbsp;<strong>ADMIN PANEL</strong>
                </Link>
            </nav>
        </>
    );
}

const LoginForm = ({ onSubmit, onResetPassword, error, isButtonDisabled }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Email</label>
                <input type="text" className="form-control" id="username" placeholder="Enter email" required />
            </div>
            <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" required />
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <button type="submit" className="btn btn-primary" disabled={isButtonDisabled}>Login</button>
            <button onClick={onResetPassword} className="btn btn-link">Forgot Password?</button>
        </form>
    );
}

export default Login;
