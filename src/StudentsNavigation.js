import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

const StudentsNavigation = () => {
    const navigate = useNavigate();
    const [searchfield, setSearchField] = useState("");
    const [searchBy, setSearchBy] = useState("RegdNo");

    const handleSearchBar = (e) => {
        setSearchField(e.target.value);
        console.log(e.target.value);
    };

    const handleRadioChange = (e) => {
        setSearchBy(e.target.value);
        console.log(`Search by: ${e.target.value}`);
    };

    const handleBackClick = () => {
        navigate('/');
    };

    const handleDepartmentClick = (department) => {
        navigate(`/department/${department}`, { state: { department } });
    };

    return (
        <div className="p-4">

            <div className="flex items-center space-x-2">
                <ArrowLeft
                    className="cursor-pointer text-gray-700"
                    size={24}
                    onClick={handleBackClick}
                />
                <p className="text-lg font-medium text-gray-800">Departments</p>
            </div>

            <div className="flex items-center space-x-4 mt-4 ml-8">
                <p className="text-gray-700 font-medium">Search By</p>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="searchBy"
                        value="RegdNo"
                        checked={searchBy === "RegdNo"}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">RegdNo</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="searchBy"
                        value="Name"
                        checked={searchBy === "Name"}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Name</span>
                </label>
            </div>

            <div className="mt-4 ml-8">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchfield}
                    onChange={handleSearchBar}
                    className="w-3/4 px-4 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {['AID', 'AIM', 'CIV', 'CSE', 'ECE', 'EEE', 'INF', 'MEC'].map((department) => (
                        <button
                            key={department}
                            onClick={() => handleDepartmentClick(department)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none h-20"
                        >
                            {department}
                        </button>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default StudentsNavigation;
