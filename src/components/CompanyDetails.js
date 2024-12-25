

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled Components
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 30px auto;
//   padding: 20px;
//   background: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   font-family: 'Arial', sans-serif;
// `;

// const HeaderSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   background: linear-gradient(135deg, #007bff, rgb(38, 121, 139));
//   color: #ffffff;
//   padding: 30px;
//   border-radius: 12px 12px 0 0;
// `;

// const CompanyLogo = styled.img`
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   border-radius: 50%;
//   border: 4px solid #ffffff;
//   margin-bottom: 15px;
// `;

// const CompanyName = styled.h2`
//   font-size: 32px;
//   margin-bottom: 10px;
// `;

// const ContentSection = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 20px;
//   margin: 30px 0;
// `;

// const DetailsSection = styled.div`
//   background: #f9f9f9;
//   padding: 30px;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
// `;

// const DetailsTitle = styled.h3`
//   font-size: 22px;
//   color: #007bff;
//   margin-bottom: 20px;
//   border-bottom: 2px solid #007bff;
//   padding-bottom: 8px;
// `;

// const DetailsText = styled.p`
//   font-size: 16px;
//   color: #555;
//   line-height: 1.6;
//   margin-bottom: 10px;
// `;

// const WebsiteLink = styled.a`
//   color: #007bff;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const RightColumn = styled.div`
//   background: #f9f9f9;
//   padding: 30px;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `;

// const ShowPostsButton = styled.button`
//   background: #007bff;
//   color: #ffffff;
//   border: none;
//   padding: 12px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 8px;
//    margin-bottom: 20px;
//   width: 100%;
//   transition: background 0.3s;
//   &:hover {
//     background: #0056b3;
//   }
// `;

// const ActionButton = styled.button`
//   background: ${(props) => (props.danger ? '#d9534f' : '#f0ad4e')};
//   color: #ffffff;
//   border: none;
//   padding: 12px 20px;
//   font-size: 16px;
//   cursor: pointer;
//   border-radius: 8px;
//   margin-bottom: 15px;
//   width: 100%;
//   transition: background 0.3s;
//   &:hover {
//     background: ${(props) => (props.danger ? '#c9302c' : '#ec971f')};
//   }
// `;

// const CompanyDetails = () => {
//   const { companyId } = useParams(); // Get companyId from URL params
//   const navigate = useNavigate(); // Hook to navigate to another page
//   const [company, setCompany] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8086/company/getCompany/${companyId}`)
//       .then((response) => {
//         setCompany(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Error fetching company details');
//         setLoading(false);
//       });
//   }, [companyId]);

//   if (loading) {
//     return <Container>Loading...</Container>;
//   }

//   if (error) {
//     return <Container>{error}</Container>;
//   }

//   if (!company) {
//     return <Container>Company not found.</Container>;
//   }

//   const handleShowPosts = () => {
//     navigate(`/company/${companyId}/posts`, { state: { posts: company.jobPosts } });
//   };

//   const handleDeleteCompany = () => {
//     // Add API call to delete company
//     console.log('Deleting company...');
//   };

//   const handleBanCompany = () => {
//     // Add API call to ban company
//     console.log('Banning company...');
//   };

//   return (
//     <Container>
//       {/* Header Section */}
//       <HeaderSection>
//         <CompanyLogo
//           src={`http://localhost:8086${company.companyLogoPath || '/uploads/company_logos/default.jpg'}`}
//           alt={`${company.companyName} Logo`}
//         />
//         <CompanyName>{company.companyName}</CompanyName>
//       </HeaderSection>

//       {/* Two Column Layout */}
//       <ContentSection>
//         {/* Left Column: Details Section */}
//         <DetailsSection>
//           <DetailsTitle>About the Company</DetailsTitle>
//           <DetailsText>{company.companyDescription || 'No description available.'}</DetailsText>

//           <DetailsTitle>Company Information</DetailsTitle>
//           <DetailsText>
//             <strong>Industry Type:</strong> {company.industryType || 'N/A'}
//           </DetailsText>
//           <DetailsText>
//             <strong>Company Size:</strong> {company.companySize || 'N/A'}
//           </DetailsText>

//           <DetailsTitle>Contact Information</DetailsTitle>
//           <DetailsText>
//             <strong>Contact Person:</strong> {company.contactPerson || 'N/A'}
//           </DetailsText>
//           <DetailsText>
//             <strong>Designation:</strong> {company.contactPersonDesignation || 'N/A'}
//           </DetailsText>
//           <DetailsText>
//             <strong>Email:</strong> {company.contactEmail || 'N/A'}
//           </DetailsText>
//           <DetailsText>
//             <strong>Phone:</strong> {company.contactPhoneNumber || 'N/A'}
//           </DetailsText>

//           <DetailsTitle>Address</DetailsTitle>
//           <DetailsText>{company.companyAddress || 'No address available.'}</DetailsText>

//           <DetailsTitle>Website</DetailsTitle>
//           <DetailsText>
//             <WebsiteLink href={`http://${company.companyWebsite}`} target="_blank" rel="noopener noreferrer">
//               {company.companyWebsite}
//             </WebsiteLink>
//           </DetailsText>
//         </DetailsSection>

//         {/* Right Column: Action Buttons */}
//         <RightColumn>
//           <ShowPostsButton onClick={handleShowPosts}>Show Job Posts</ShowPostsButton>
//           <ActionButton onClick={handleDeleteCompany} danger>
//             Delete Company
//           </ActionButton>
//           <ActionButton onClick={handleBanCompany}>Ban Company</ActionButton>
//         </RightColumn>
//       </ContentSection>
//     </Container>
//   );
// };

// export default CompanyDetails;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #007bff, rgb(38, 121, 139));
  color: #ffffff;
  padding: 30px;
  border-radius: 12px 12px 0 0;
`;

const CompanyLogo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffffff;
  margin-bottom: 15px;
`;

const CompanyName = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin: 30px 0;
`;

const DetailsSection = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const DetailsTitle = styled.h3`
  font-size: 22px;
  color: #007bff;
  margin-bottom: 20px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
`;

const DetailsText = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const WebsiteLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const RightColumn = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ShowPostsButton = styled.button`
  background: #007bff;
  color: #ffffff;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  transition: background 0.3s;
  &:hover {
    background: #0056b3;
  }
`;

const ActionButton = styled.button`
  background: ${(props) => (props.danger ? '#d9534f' : '#f0ad4e')};
  color: #ffffff;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 15px;
  width: 100%;
  transition: background 0.3s;
  &:hover {
    background: ${(props) => (props.danger ? '#c9302c' : '#ec971f')};
  }
`;

const SuccessMessage = styled.div`
  background-color: #28a745;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background-color: #dc3545;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  text-align: center;
`;

const CompanyDetails = () => {
  const { companyId } = useParams(); // Get companyId from URL params
  const navigate = useNavigate(); // Hook to navigate to another page
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8086/company/getCompany/${companyId}`)
      .then((response) => {
        setCompany(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching company details');
        setLoading(false);
      });
  }, [companyId]);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  if (!company) {
    return <Container>Company not found.</Container>;
  }

  const handleShowPosts = () => {
    navigate(`/company/${companyId}/posts`, { state: { posts: company.jobPosts } });
  };

  const handleDeleteCompany = async () => {
    try {
      const response = await axios.delete(`http://localhost:8086/company/delete/${companyId}`);
      if (response.status === 200) {
        setSuccessMessage('Company deleted successfully!');
        setTimeout(() => {
          navigate('/admindashboard'); // Redirect to signin page after success
        }, 2000); // Delay to show success message
      } else {
        setError('Error deleting the company. Please try again.');
      }
    } catch (err) {
      // Handle errors such as network issues
      setError('An error occurred while deleting the company: ' + err.message);
    }
  };

  const handleBanCompany = () => {
    // Add API call to ban company
    console.log('Banning company...');
  };

  return (
    <Container>
      {/* Success/Error Message Display */}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Header Section */}
      <HeaderSection>
        <CompanyLogo
          src={`http://localhost:8086${company.companyLogoPath || '/uploads/company_logos/default.jpg'}`}
          alt={`${company.companyName} Logo`}
        />
        <CompanyName>{company.companyName}</CompanyName>
      </HeaderSection>

      {/* Two Column Layout */}
      <ContentSection>
        {/* Left Column: Details Section */}
        <DetailsSection>
          <DetailsTitle>About the Company</DetailsTitle>
          <DetailsText>{company.companyDescription || 'No description available.'}</DetailsText>

          <DetailsTitle>Company Information</DetailsTitle>
          <DetailsText>
            <strong>Industry Type:</strong> {company.industryType || 'N/A'}
          </DetailsText>
          <DetailsText>
            <strong>Company Size:</strong> {company.companySize || 'N/A'}
          </DetailsText>

          <DetailsTitle>Contact Information</DetailsTitle>
          <DetailsText>
            <strong>Contact Person:</strong> {company.contactPerson || 'N/A'}
          </DetailsText>
          <DetailsText>
            <strong>Designation:</strong> {company.contactPersonDesignation || 'N/A'}
          </DetailsText>
          <DetailsText>
            <strong>Email:</strong> {company.contactEmail || 'N/A'}
          </DetailsText>
          <DetailsText>
            <strong>Phone:</strong> {company.contactPhoneNumber || 'N/A'}
          </DetailsText>

          <DetailsTitle>Address</DetailsTitle>
          <DetailsText>{company.companyAddress || 'No address available.'}</DetailsText>

          <DetailsTitle>Website</DetailsTitle>
          <DetailsText>
            <WebsiteLink href={`http://${company.companyWebsite}`} target="_blank" rel="noopener noreferrer">
              {company.companyWebsite}
            </WebsiteLink>
          </DetailsText>
        </DetailsSection>

        {/* Right Column: Action Buttons */}
        <RightColumn>
          <ShowPostsButton onClick={handleShowPosts}>Show Job Posts</ShowPostsButton>
          <ActionButton onClick={handleDeleteCompany} danger>
            Delete Company
          </ActionButton>
          <ActionButton onClick={handleBanCompany}>Ban Company</ActionButton>
        </RightColumn>
      </ContentSection>
    </Container>
  );
};

export default CompanyDetails;
