import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import StudentsNavigation from './StudentsNavigation';
import DepartmentStudents from './DepartmentStudents';
import StudentDetails from './StudentDetails';
import OffersPage from './OfferPage'; // Import the OffersPage component
import TotalOffers from './TotalOffers'; // Component for displaying total offers
import CompanyOffers from './CompanyOffers'; // Component for displaying company offers
import AddCompany from './AddCompany';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/StudentsNavigation" element={<StudentsNavigation />} />
          <Route path="/department/:department" element={<DepartmentStudents />} />
          <Route path="/student-details/:id" element={<StudentDetails />} />
          <Route path="/offers" element={<OffersPage />} /> {/* New Route for OffersPage */}
          <Route path="/totaloffers" element={<TotalOffers />} /> {/* Route for Total Offers */}
          <Route path="/companyoffers" element={<CompanyOffers />} />
          <Route path="/AddCompany" element={<AddCompany />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
