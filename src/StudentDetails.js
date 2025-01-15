import React from 'react';
import { useLocation, useParams,useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

const StudentDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();
    const student = state?.student;

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="p-4">
            <div className="flex items-center space-x-2">
                <ArrowLeft
                    className="cursor-pointer text-gray-700"
                    size={24}
                    onClick={handleBackClick}
                />
                <p className="text-lg font-medium text-gray-800">Student Details</p>
            </div>

            {student ? (
                <div className="max-w-md mx-auto p-6 bg-blue-500 text-white rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">{student.name}</h1>
                    <p>
                        <strong>Email:</strong> {student.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {student.phone}
                    </p>
                    <p>
                        <strong>Website:</strong> {student.website}
                    </p>
                    <p>
                        <strong>Company:</strong> {student.company.name}
                    </p>
                    <p>
                        <strong>Address:</strong> {student.address.street}, {student.address.city}
                    </p>
                </div>
            ) : (
                <p className="text-white">No student details found.</p>
            )}
        </div>
    );
};

export default StudentDetails;
