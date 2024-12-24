
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const Position = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const ProfileLink = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

// CandidateCard Component
const CandidateCard = ({ candidate }) => {
  if (!candidate) {
    return <div>Candidate data is not available.</div>;
  }

  return (
    <CardContainer>
      {/* Display Profile Picture */}
      <ProfilePic
        src={`http://localhost:8086/uploads/profile_pictures/${candidate.profilePicturePath || 'default.jpg'}`}
        alt="Profile"
      />
      {/* Display Name */}
      <Name>{candidate.firstName} {candidate.lastName}</Name>
      {/* Display JobSeeker ID */}
      <div>Job Seeker ID: {candidate.jobSeekerId}</div>
      {/* Display Email Address */}
      <Position>{candidate.emailAddress || 'Email not available'}</Position>
      {/* Display Profile Link */}
      <ProfileLink
        href={`/candidate/${candidate.jobSeekerId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </ProfileLink>
    </CardContainer>
  );
};


CandidateCard.propTypes = {
  candidate: PropTypes.shape({
    profilePicturePath: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    position: PropTypes.string,
    profileLink: PropTypes.string,
  }).isRequired,
};


const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // Fetch all job seekers from the backend
    axios.get('http://localhost:8086/jobSeeker/getAllJobSeekers')
      .then((response) => {
        setCandidates(response.data);
        console.log("data",response.data)
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching job seekers');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      {candidates.length > 0 ? (
        candidates.map((candidate) => <CandidateCard key={candidate.id} candidate={candidate} />)
      ) : (
        <div>No job seekers found.</div>
      )}
    </div>
  );
};

export default App;
