// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// // Styled Components
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 30px auto;
//   padding: 20px;
//   background: #f4f4f9;
//   color: #333;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   font-family: 'Arial', sans-serif;
// `;

// const Header = styled.h2`
//   font-size: 28px;
//   margin-bottom: 30px;
//   text-align: center;
//   color: #007bff;
// `;

// const CompanyList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
// `;

// const CompanyCard = styled.div`
//   background: #ffffff;
//   border-radius: 10px;
//   padding: 20px;
//   width: 300px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const CompanyLogo = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   border-radius: 50%;
//   margin-bottom: 15px;
// `;

// const CompanyName = styled.h3`
//   font-size: 20px;
//   margin: 10px 0;
//   color: #007bff;
// `;

// const CompanyInfo = styled.p`
//   font-size: 14px;
//   color: #555;
//   margin: 5px 0;
// `;

// // Component
// const AllCompanies = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch all companies
//     axios
//       .get('http://localhost:8086/company/getAllCompanies')
//       .then((response) => {
//         setCompanies(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Error fetching companies');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container>
//       <Header>All Companies</Header>
//       <CompanyList>
//         {companies.length > 0 ? (
//           companies.map((company) => (
//             <CompanyCard key={company.companyId}>
//               <CompanyLogo
//                 src={`http://localhost:8086${company.companyLogoPath || 'default.jpg'}`}
//                 alt={`${company.companyName} Logo`}
//               />
//               <CompanyName>{company.companyName}</CompanyName>
//               <CompanyInfo><strong>Industry:</strong> {company.industryType}</CompanyInfo>
//               <CompanyInfo><strong>Size:</strong> {company.companySize}</CompanyInfo>
//               <CompanyInfo><strong>Website:</strong> <a href={company.companyWebsite} target="_blank" rel="noopener noreferrer">{company.companyWebsite}</a></CompanyInfo>
//             </CompanyCard>
//           ))
//         ) : (
//           <p>No companies available.</p>
//         )}
//       </CompanyList>
//     </Container>
//   );
// };

// export default AllCompanies;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { FaEye } from 'react-icons/fa'; // Importing the "eye" icon

// // Styled Components
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 30px auto;
//   padding: 20px;
//   background: #f4f4f9;
//   color: #333;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   font-family: 'Arial', sans-serif;
// `;

// const Header = styled.h2`
//   font-size: 28px;
//   margin-bottom: 30px;
//   text-align: center;
//   color: #007bff;
// `;

// const CompanyList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
// `;

// const CompanyCard = styled.div`
//   background: #ffffff;
//   border-radius: 10px;
//   padding: 20px;
//   width: 300px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const CompanyLogo = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   border-radius: 50%;
//   margin-bottom: 15px;
// `;

// const CompanyName = styled.h3`
//   font-size: 20px;
//   margin: 10px 0;
//   color: #007bff;
// `;

// const CompanyInfo = styled.p`
//   font-size: 14px;
//   color: #555;
//   margin: 5px 0;
// `;

// const ViewButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 10px;
//   cursor: pointer;
//   margin-top: 15px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     background-color: #0056b3;
//   }

//   i {
//     margin-left: 5px;
//   }
// `;

// // Component
// const AllCompanies = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch all companies
//     axios
//       .get('http://localhost:8086/company/getAllCompanies')
//       .then((response) => {
//         setCompanies(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Error fetching companies');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   const handleViewClick = (companyId) => {
//     // You can navigate to a detailed company view or show a modal
//     console.log(`View company with ID: ${companyId}`);
//     // For example, redirecting to a company details page
//     // window.location.href = `/company/${companyId}`;
//   };

//   return (
//     <Container>
//       <Header>All Companies</Header>
//       <CompanyList>
//         {companies.length > 0 ? (
//           companies.map((company) => (
//             <CompanyCard key={company.companyId}>
//               <CompanyLogo
//                 src={`http://localhost:8086${company.companyLogoPath || '/uploads/company_logos/default.jpg'}`}
//                 alt={`${company.companyName} Logo`}
//               />
//               <CompanyName>{company.companyName}</CompanyName>
//               <CompanyInfo><strong>Industry:</strong> {company.industryType}</CompanyInfo>
//               <CompanyInfo><strong>Size:</strong> {company.companySize}</CompanyInfo>
//               <CompanyInfo><strong>Website:</strong> <a href={company.companyWebsite} target="_blank" rel="noopener noreferrer">{company.companyWebsite}</a></CompanyInfo>
              
//               {/* View Button */}
//               <ViewButton onClick={() => handleViewClick(company.companyId)}>
//                 View <FaEye />
//               </ViewButton>
//             </CompanyCard>
//           ))
//         ) : (
//           <p>No companies available.</p>
//         )}
//       </CompanyList>
//     </Container>
//   );
// };

// export default AllCompanies;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FaEye } from 'react-icons/fa'; // Importing the "eye" icon
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background: #f4f4f9;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const Header = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  color: #007bff;
`;

const CompanyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const CompanyCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const CompanyName = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  color: #007bff;
`;

const CompanyInfo = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const ViewButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background: #0056b3;
  }
`;

const AllCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  useEffect(() => {
    // Fetch all companies
    axios
      .get('http://localhost:8086/company/getAllCompanies')
      .then((response) => {
        setCompanies(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching companies');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleViewClick = (companyId) => {
    // Navigate to the company details page with companyId
    navigate(`/company/${companyId}`);
  };

  return (
    <Container>
      <Header>All Companies</Header>
      <CompanyList>
        {companies.length > 0 ? (
          companies.map((company) => (
            <CompanyCard key={company.companyId}>
              <CompanyLogo
                src={`http://localhost:8086${company.companyLogoPath || '/uploads/company_logos/default.jpg'}`}
                alt={`${company.companyName} Logo`}
              />
              <CompanyName>{company.companyName}</CompanyName>
              <CompanyInfo><strong>Industry:</strong> {company.industryType}</CompanyInfo>
              <CompanyInfo><strong>Size:</strong> {company.companySize}</CompanyInfo>
              <CompanyInfo>
                <strong>Website:</strong>{' '}
                <a href={company.companyWebsite} target="_blank" rel="noopener noreferrer">
                  {company.companyWebsite}
                </a>
              </CompanyInfo>

              {/* View Button */}
              <ViewButton onClick={() => handleViewClick(company.companyId)}>
                View <FaEye />
              </ViewButton>
            </CompanyCard>
          ))
        ) : (
          <p>No companies available.</p>
        )}
      </CompanyList>
    </Container>
  );
};

export default AllCompanies;
