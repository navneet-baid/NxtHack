import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1500,
            smooth: 'easeInOutExpo',
        });
    };

    return (
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={scrollToTop}>
            <i className="bi bi-arrow-up" />
        </a>
    );
}

export default BackToTop;
