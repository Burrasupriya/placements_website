import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const id = "22B01A1230";
    const name = "Akshaya";

    // Handle Students navigation
    const handleStudents = () => {
        navigate('/StudentsNavigation');
    };

    // Handle Offers navigation
    const handleOffersClick = () => {
        navigate('/offers'); // Navigate to the new OffersPage
    };
    const handleCompany= () => {
        navigate('/AddCompany'); 
    };

    return (
        <div>
            {/* Welcome Section */}
            <div className="bg-blue-500 rounded-lg p-6 w-100 flex flex-col items-start mt-10 ml-5 mr-5">
                <h1 className="text-2xl font-bold text-white mb-2 text-left">{id}</h1>
                <p className="text-2xl font-bold text-white text-left">Welcome Back {name} ..!!</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-4 justify-center mt-5 w-full px-4">
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl" onClick={handleOffersClick}>Offers</button> {/* Button to navigate to OffersPage */}
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl" onClick={handleStudents}>Students</button>
                </div>
            </div>

            {/* Additional Sections */}
            <div className="flex space-x-4 justify-center mt-5 w-full px-4">
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl" onClick={handleCompany}>Add Company</button>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl">Add Offers</button>
                </div>
            </div>

            <div className="flex space-x-4 justify-center mt-5 w-full px-4">
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl">Poll</button>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl">Message</button>
                </div>
            </div>

            <div className="flex space-x-4 justify-center mt-5 w-full px-4">
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl">Attendance</button>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl">Attendance Report</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
