import React, { useEffect, useState } from 'react';

const Spinner = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 1000); // Change the delay time as needed (in milliseconds)

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {/* Spinner Start */}
            {visible && (
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            {/* Spinner End */}
        </>
    );
}

export default Spinner;
