import React, { useEffect, useState } from 'react';
import CandidateCard from './CandidateCard';  // Import the CandidateCard component

const JobApplications = ({ jobPostId }) => {
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the applicants when the component is mounted
    const fetchApplicants = async () => {
      try {
        const response = await fetch(`http://localhost:8086/jobPost/${jobPostId}/applications`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch applicants');
        }
        
        const data = await response.json();
        setApplicants(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplicants();
  }, [jobPostId]);

  if (isLoading) {
    return <div>Loading applicants...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {applicants.length > 0 ? (
        applicants.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))
      ) : (
        <div>No applicants for this job post.</div>
      )}
    </div>
  );
};

export default JobApplications;
