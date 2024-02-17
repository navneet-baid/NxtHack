import React, { useState } from 'react';
import Spinner from '../../components/users/Spinner';
import Navbar from '../../components/users/Navbar';
import BreadcrumbSection from '../../components/users/BreadcrumbSection';
import Footer from '../../components/users/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'; // Add the clock icon
import { Helmet } from 'react-helmet';

const Certificate = () => {
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  const [isComingSoon, setIsComingSoon] = useState(true);

  const handleDownload = () => {
    setShowDownloadForm(true);
    setShowVerifyForm(false);
    setIsComingSoon(false);
  };

  const handleVerify = () => {
    setShowDownloadForm(false);
    setShowVerifyForm(true);
    setIsComingSoon(false);
  };

  return (
    <>
      <Helmet>
        <title>NxtHack - Certificate</title>
        <meta
          name="description"
          content="Verify and download your certificates from NxtHack. Stay updated with the latest certificates issued by NxtHack IT SOLUTIONS LLP."
        />
        <meta
          property="og:title"
          content="NxtHack - Certificate"
        />
        <meta
          property="og:description"
          content="Verify and download your certificates from NxtHack. Stay updated with the latest certificates issued by NxtHack IT SOLUTIONS LLP."
        />
        {/* Add more Open Graph (OG) tags as needed */}
      </Helmet>
      <Spinner />
      <Navbar />
      <BreadcrumbSection
        currentPage={{ name: "Certificate", link: "/certificate" }}
        parentPages={[
          { name: "Home", link: "/" }
        ]}
      />
      <div className="container mt-5">
        {isComingSoon ? (
          <>   <h2 className="text-center">
            Coming Soon...
          </h2>
            <h4 className="text-center mb-4">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Exciting new certificates are on their way. Stay tuned for updates!      </h4></>
        ) : (
          <>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <button className="btn btn-primary btn-lg btn-block mb-3" onClick={handleDownload}>
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download Certificate
                </button>
              </div>
              <div className="col-md-6 text-center">
                <button className="btn btn-success btn-lg btn-block mb-3" onClick={handleVerify}>
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  Verify Certificate
                </button>
              </div>
            </div>

            {!isComingSoon && (
              <div className="row mt-3 justify-content-center">
                {showDownloadForm && (
                  <div className="col-md-6">
                    <form>
                      <div className="form-group">
                        <label htmlFor="studentId">Student ID:</label>
                        <div className="input-group">
                          <input type="text" className="form-control" id="studentId" />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">View</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                {showVerifyForm && (
                  <div className="col-md-6">
                    <form>
                      <div className="form-group">
                        <label htmlFor="certificateNumber">Certificate Number:</label>
                        <div className="input-group">
                          <input type="text" className="form-control" id="certificateNumber" />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-success">Verify</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Certificate;
