import React from 'react';
import { NavLink } from 'react-router-dom';

const BreadcrumbSection = ({ currentPage, parentPages }) => {
    return (
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-3 text-white animated slideInDown">{currentPage.name}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                {parentPages && parentPages.map((parentPage, index) => (
                                    <li key={index} className="breadcrumb-item">
                                        <NavLink className="text-white" to={parentPage.link}>{parentPage.name}</NavLink>
                                    </li>
                                ))}
                                <li className="breadcrumb-item text-white active" aria-current="page">
                                    {currentPage.name}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadcrumbSection;
