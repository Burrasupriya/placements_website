import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import StudentsNavigation from './StudentsNavigation';
import DepartmentStudents from './DepartmentStudents';
import StudentDetails from './StudentDetails';

const App = () => {
  return (
    <div>
      {/* <Dashboard/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/StudentsNavigation" element={<StudentsNavigation />} />
        <Route path="/department/:department" element={<DepartmentStudents />} />
        <Route path="/student-details/:id" element={<StudentDetails />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;