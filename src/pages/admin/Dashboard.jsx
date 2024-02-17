import React, { useState, useEffect } from 'react';
import Spinner from '../../components/admin/Spinner';
import Navbar from '../../components/admin/Navbar';
import Footer from '../../components/admin/Footer';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { database } from '../../assets/config/firebase';
import { get, query, ref, orderByChild } from 'firebase/database';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [enquiriesData, setEnquiriesData] = useState(null);
  const [registrationsData, setRegistrationsData] = useState([]);
  const [enrollmentsData, setEnrollmentsData] = useState([]);
  const [subscriptionData, setSubscriptionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch data for Enquiries section from Firebase
        const enquiriesQuery = query(
          ref(database, 'enquiries'),
          orderByChild('date')
        );
        const enquiriesSnapshot = await get(enquiriesQuery);
        const enquiriesList = [];
        enquiriesSnapshot.forEach((childSnapshot) => {
          enquiriesList.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setEnquiriesData(enquiriesList);

        // Fetch data for Course Registrations section from Firebase
        const registrationsQuery = query(
          ref(database, 'registration'),
          orderByChild('date')
        );
        const registrationsSnapshot = await get(registrationsQuery);
        const registrationsList = [];
        registrationsSnapshot.forEach((childSnapshot) => {
          registrationsList.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setRegistrationsData(registrationsList);

        // Fetch data for Enrollments section from Firebase
        const enrollmentsQuery = query(
          ref(database, 'enrollments'),
          orderByChild('date')
        );
        const enrollmentsSnapshot = await get(enrollmentsQuery);
        const enrollmentsList = [];
        enrollmentsSnapshot.forEach((childSnapshot) => {
          enrollmentsList.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setEnrollmentsData(enrollmentsList);

        // Fetch data for Enrollments section from Firebase
        const subscriptionQuery = query(
          ref(database, 'subscribers'),
          orderByChild('date')
        );
        const subscriptionSnapshot = await get(subscriptionQuery);
        const subscriptionList = [];
        subscriptionSnapshot.forEach((childSnapshot) => {
          subscriptionList.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setSubscriptionData(subscriptionList);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const generateColumns = (data) => {
    if (!data || data.length === 0) return [];

    // Get keys from the first object in the data
    const keys = Object.keys(data[0]);

    // Generate column objects
    const columns = keys.map((key) => ({
      field: key,
      headerName: key.charAt(0).toUpperCase() + key.slice(1),
      flex: 1,
      minWidth: 175,
      sortable: true,
    }));

    return columns;
  };

  return (
    <>
      <Spinner show={loading} />
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="row mb-2" style={{ minHeight: '400px' }}>
            {enquiriesData && <><h2>Enquiries</h2>
              <div >
                <DataGrid
                  rows={enquiriesData}
                  columns={generateColumns(enquiriesData)}
                  slots={{ toolbar: GridToolbar }}
                  pageSize={5}
                />
              </div></>}
          </div>
          <div className="row mb-2" style={{ minHeight: '400px' }}>
            <h2>Course Registrations</h2>
            <div >
              <DataGrid
                rows={registrationsData}
                columns={generateColumns(registrationsData)}
                slots={{ toolbar: GridToolbar }}
                pageSize={5}
              />
            </div>
          </div>
          <div className="row mb-2" style={{ minHeight: '400px' }}>
            <h2>Enrollments</h2>
            <div >
              <DataGrid
                rows={enrollmentsData}
                slots={{ toolbar: GridToolbar }}
                columns={generateColumns(enrollmentsData)}
                pageSize={5}
              />
            </div>
          </div>
          <div className="row mb-2" style={{ minHeight: '400px' }}>
            <h2>Subscribers</h2>
            <div >
              <DataGrid
                rows={subscriptionData}
                slots={{ toolbar: GridToolbar }}
                columns={generateColumns(subscriptionData)}
                pageSize={5}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
