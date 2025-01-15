import React from 'react';
import { useNavigate } from 'react-router-dom';

const OffersPage = () => {
    const navigate = useNavigate();

    const handleTotalOffersClick = () => {
        // Navigate to the page showing total offers
        navigate('/totaloffers');
    };

    const handleCompanyOffersClick = () => {
        // Navigate to the page showing company-specific offers
        navigate('/companyoffers');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">Offers</h1>
            <div className="flex space-x-4 justify-center mt-5 w-full px-4">
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl" onClick={handleTotalOffersClick}>Total Offers</button>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 text-white bg-blue-500 rounded py-3">
                    <button className="w-full px-8 py-4 text-xl" onClick={handleCompanyOffersClick}>Company Offers</button>
                </div>
            </div>
        </div>
    );
};

export default OffersPage;
