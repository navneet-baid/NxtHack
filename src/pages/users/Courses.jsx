import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/users/Spinner';
import Navbar from '../../components/users/Navbar';
import BreadcrumbSection from '../../components/users/BreadcrumbSection';
import Footer from '../../components/users/Footer';
import courses from './courses';

const Courses = () => {
    const [loading, setLoading] = useState(false);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
      const fetchSubcategories = async () => {
        try {
          const subs = courses.flatMap(category =>
            category.subcategories.flatMap(subcategory => subcategory.courses)
          );
          setSubcategories(subs);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      };
      fetchSubcategories();
    }, []);
    return (
        <>
            {loading && <Spinner />}
            <Navbar />
            <BreadcrumbSection
                currentPage={{ name: "Courses", link: "/courses" }}
                parentPages={[
                    { name: "Home", link: "/" }
                ]}
            />
            <div className="container">
                <div className="row g-4 justify-content-center">
                    {subcategories.map(course => (
                        <div key={course.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="course-item bg-light">
                                <div className="text-center p-4 pb-0">
                                    <h5 className="mb-4">{course.title}</h5>
                                    <div className="mb-3">
                                        {Array.from({ length: Math.floor(course.rating) }, (_, index) => (
                                            <small key={index} className="fa fa-star text-primary" />
                                        ))}
                                        {course.rating % 1 !== 0 && <small className="fa fa-star-half-alt text-primary" />}
                                        <small>({course.rating})</small>
                                    </div>
                                    <div className="w-100 d-flex justify-content-center mb-4">
                                        <Link to={`/course-detail/${course.id}`} className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</Link>
                                        <Link to="/registration" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Join Now</Link>
                                    </div>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2" />{course.duration}</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />{course.students_enrolled} Students</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Courses;
