import React, { useState } from 'react';

const AddCompany = () => {
    const [companyName, setCompanyName] = useState('');
    const [message, setMessage] = useState('');

    const handleAddCompany = async () => {
        if (!companyName.trim()) {
            setMessage('Please enter a company name.');
            return;
        }

        try {
            // Replace this URL with your specific database API endpoint
            const response = await fetch('https://your-api-endpoint.com/add-company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: companyName }),
            });

            if (response.ok) {
                setMessage('Company added successfully!');
                setCompanyName(''); // Clear the input box
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message || 'Failed to add company'}`);
            }
        } catch (error) {
            setMessage('Error adding company: ' + error.message);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Add Company</h1>

            {/* Input for Company Name */}
            <div className="flex flex-col items-center space-y-4">
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                    className="border rounded-lg p-2 w-full max-w-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={handleAddCompany}
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Company
                </button>

                {/* Message Display */}
                {message && (
                    <p
                        className={`text-center ${
                            message.startsWith('Error') ? 'text-red-500' : 'text-green-500'
                        }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AddCompany;
