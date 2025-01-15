import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

const DepartmentStudents = () => {
    const { department } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Example API call
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => {
                // Filter or transform data based on department if needed
                setStudents(data);
            })
            .catch((error) => console.error('Error fetching student data:', error));
    }, [department]);

    const handleStudentClick = (student) => {
        navigate(`/student-details/${student.id}`, { state: { student } });
    };

    const handleBackClick = () => {
        navigate('/StudentsNavigation');
    };

    return (
        <div className="p-4">
            <div className="flex items-center space-x-2">
                <ArrowLeft
                    className="cursor-pointer text-gray-700"
                    size={24}
                    onClick={handleBackClick}
                />
                <p className="text-lg font-medium text-gray-800">{state?.department || department} Students</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {students.length > 0 ? (
                    students.map((student) => (
                        <div
                            key={student.id}
                            className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
                            onClick={() => handleStudentClick(student)}
                        >
                            <h2 className="text-lg font-semibold">{student.name}</h2>
                            <p>{student.email}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-white">No students found.</p>
                )}
            </div>
        </div>
    );
};

export default DepartmentStudents;
