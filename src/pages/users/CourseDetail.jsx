import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/users/Spinner';
import Navbar from '../../components/users/Navbar';
import BreadcrumbSection from '../../components/users/BreadcrumbSection';
import Footer from '../../components/users/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import courses from './courses';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { database } from '../../assets/config/firebase';
import { ref, push } from 'firebase/database';

const CourseDetail = () => {
    const { courseId } = useParams();
    const [loading, setLoading] = useState(true);
    const [categoryName, setCategoryName] = useState('');
    const [subcategoryName, setSubcategoryName] = useState('');
    const [course, setCourse] = useState(null);

    useEffect(() => {
        // Find the course by iterating through all categories and subcategories
        for (const category of courses) {
            for (const subcategory of category.subcategories) {
                const foundCourse = subcategory.courses.find(crs => crs.id === parseInt(courseId));
                if (foundCourse) {
                    setCategoryName(category.name);
                    setSubcategoryName(subcategory.name);
                    setCourse(foundCourse);
                    setLoading(false);
                    return; // Exit the loop if course is found
                }
            }
        }
        // If course is not found, set loading to false
        setLoading(false);
    }, [courseId]);

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const sendMessageToTelegram = async (formData) => {
        try {
            await axios.post(
                'https://api.telegram.org/bot6838834920:AAHz5wL-wxGw_bKPG3ex_dsBYywlljWL5F8/sendMessage',
                {
                    chat_id: 6431471143,
                    text: `
                        New Course Enrollment query:
                        Name: ${formData.get('name')}
                        Email: ${formData.get('email')}
                        Phone: ${formData.get('phone')}
                        Course: ${course.title}
                        Sub Category: ${subcategoryName}
                        Category: ${categoryName}
                        Address: ${formData.get('address')}
                    `
                }
            );
            setSubmitted(true);
            setLoading(false);
        } catch (error) {
            console.error('Error sending message:', error);
            setError('An error occurred while sending your message. Please try again later.');
            setLoading(false);
        }
    };

    const handleEnrollment = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);
        const currentDate = new Date().toISOString();
        // Save enrollment data to Firebase Realtime Database
        await push(ref(database, 'enrollments'), {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            course: course.title,
            subcategory: subcategoryName,
            category: categoryName,
            date: currentDate
        });
        await sendMessageToTelegram(formData);
    };
    return (
        <>
            <Helmet>
                <title>{course && course.title}</title>
                <meta
                    name="description"
                    content={`Learn ${course && course.title} - ${subcategoryName}, ${categoryName}. Enroll now for this course offered by NxtHack IT SOLUTIONS LLP.`}
                />
                <meta
                    property="og:title"
                    content={course && course.title}
                />
                <meta
                    property="og:description"
                    content={`Learn ${course && course.title} - ${subcategoryName}, ${categoryName}. Enroll now for this course offered by NxtHack IT SOLUTIONS LLP.`}
                />
            </Helmet>
            {loading && <Spinner />}
            <Navbar />
            <BreadcrumbSection
                currentPage={{ name: course && course.title, link: '' }}
                parentPages={[
                    { name: "Home", link: "/" },
                    { name: "Courses", link: "/courses" },
                    { name: categoryName && categoryName, link: `/course-detail/${courseId}` },
                ]}
            />
            <Container>
                {course && (
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <h2>{course.title}</h2>
                                    <p className="text-muted">{subcategoryName}, {categoryName}</p>
                                    <p>{course.short_description}</p>
                                    <p>{course.long_description}</p>
                                    <div className="mb-3">
                                        {[...Array(Math.floor(course.rating))].map((_, index) => (
                                            <FontAwesomeIcon icon={faStar} key={index} className="text-primary" />
                                        ))}
                                        <span>({course.rating})</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p><strong>Duration:</strong> {course.duration}</p>
                                            <p><strong>Students Enrolled:</strong> {course.students_enrolled}</p>
                                        </div>
                                        <div>
                                            <Button variant="primary" onClick={() => window.location.href = `/contact`}>Enquire Now</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
                {/* Alert for enrollment success or error */}
                {submitted && (
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                                Our representative will contact you shortly.
                            </Alert>
                        </Col>
                    </Row>
                )}
                {error && (
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Alert variant="danger">
                                {error}
                            </Alert>
                        </Col>
                    </Row>
                )}
                {/* Enrollment Form */}
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <h3>Enrollment Form</h3>
                                <Form onSubmit={handleEnrollment}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" name="name" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" name="email" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter your phone number" name="phone" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your address" name="address" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formCourse">
                                        <Form.Label>Course Name</Form.Label>
                                        <Form.Control type="text" value={course && course.title} disabled name="course" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formSubcategory">
                                        <Form.Label>Subcategory</Form.Label>
                                        <Form.Control type="text" value={subcategoryName} disabled name="subcategory" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="text" value={categoryName} disabled name="category" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default CourseDetail;
