import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalOffersPage = () => {
    const [offersData, setOffersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const allBranches = ['AID', 'AIM', 'CIV', 'CSE', 'ECE', 'EEE', 'INF', 'MEC'];

    useEffect(() => {
        const fetchOffersData = async () => {
            try {
                
                const response = await axios.get('https://your-api-url.com/students');
                const students = response.data;

               
                const branchData = {};

                allBranches.forEach(branch => {
                    branchData[branch] = {
                        uniquePlacementsSet: new Set(), 
                        totalPlacements: 0,
                        eligibleCount: 0
                    };
                });

                students.forEach(student => {
                    const { branch, uniquePlacements, attendance, backlogs } = student;

                    
                    if (branchData[branch]) {
                        
                        uniquePlacements.forEach(company => {
                            branchData[branch].uniquePlacementsSet.add(company);
                        });

                        
                        branchData[branch].totalPlacements += uniquePlacements.length;

                        
                        if (backlogs === 0 && attendance > 60) {
                            branchData[branch].eligibleCount += 1;
                        }
                    }
                });

              
                const formattedData = allBranches.map(branch => {
                    return {
                        branchName: branch,
                        uniquePlacements: branchData[branch].uniquePlacementsSet.size,
                        totalPlacements: branchData[branch].totalPlacements,
                        eligibilityCount: branchData[branch].eligibleCount
                    };
                });

                setOffersData(formattedData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchOffersData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="mt-10 mx-5">
            <h1 className="text-3xl font-bold mb-4">Total Offers</h1>
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="px-6 py-3 border-b">Branch Name</th>
                        <th className="px-6 py-3 border-b">Unique Placements</th>
                        <th className="px-6 py-3 border-b">Total Placements</th>
                        <th className="px-6 py-3 border-b">Eligibility Count</th>
                    </tr>
                </thead>
                <tbody>
                    {offersData.map((offer, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-6 py-4">{offer.branchName}</td>
                            <td className="px-6 py-4">{offer.uniquePlacements}</td>
                            <td className="px-6 py-4">{offer.totalPlacements}</td>
                            <td className="px-6 py-4">{offer.eligibilityCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TotalOffersPage;
