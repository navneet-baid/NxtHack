import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes';
import ScrollToTop from './components/ScrollToTop';
import AdminRoutes from './routes/AdminRoutes';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path='/admin/*' element={<AdminRoutes />} />
        <Route exact path='/*' element={<UserRoutes />} />
      </Routes>
    </Router >
  )
}

export default App