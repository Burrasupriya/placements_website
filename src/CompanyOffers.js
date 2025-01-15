import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyOffers = () => {
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the student data to extract company offers information
  useEffect(() => {
    const fetchCompanyOffers = async () => {
      try {
        const response = await axios.get('https://your-api-url.com/students');
        const students = response.data;

        // Create an object to hold the company offer counts
        const companyOfferCount = {};

        students.forEach(student => {
          const { uniquePlacements } = student;
          uniquePlacements.forEach(company => {
            // Increment the offer count for each company
            if (companyOfferCount[company]) {
              companyOfferCount[company]++;
            } else {
              companyOfferCount[company] = 1;
            }
          });
        });

        // Convert the companyOfferCount object into an array of company names and their respective offer counts
        const formattedCompanyData = Object.keys(companyOfferCount).map(company => ({
          companyName: company,
          offerCount: companyOfferCount[company],
        }));

        setCompanyData(formattedCompanyData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchCompanyOffers();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-4">Company Offers</h1>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Table to display company offers */}
      {!loading && !error && (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 text-left">Company Name</th>
              <th className="py-2 px-4 text-left">Number of Offers</th>
            </tr>
          </thead>
          <tbody>
            {companyData.map((company, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{company.companyName}</td>
                <td className="py-2 px-4">{company.offerCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CompanyOffers;
