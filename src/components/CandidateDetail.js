

// // CandidateDetail.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const CandidateDetail = () => {
//   const { jobSeekerId } = useParams(); // Get the jobSeekerId from the URL
//   const [candidate, setCandidate] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//  console.log("recieved id",jobSeekerId)
//   useEffect(() => {
//     // Fetch the detailed job seeker information
//     axios.get(`http://localhost:8086/jobSeeker/getjobseeker/${jobSeekerId}`)
//       .then((response) => {
//         setCandidate(response.data); // Set the detailed candidate data
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Error fetching job seeker details');
//         setLoading(false);
//       });
//   }, [jobSeekerId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   if (!candidate) return <div>Candidate not found.</div>;

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{candidate.firstName} {candidate.lastName}</h2>
//       <img
//         src={`http://localhost:8086/uploads/profile_pictures/${candidate.profilePicturePath || 'default.jpg'}`}
//         alt="Profile"
//         style={{ width: '200px', height: '200px', borderRadius: '50%' }}
//       />
//       <p>Email: {candidate.emailAddress}</p>
//       <p>Phone: {candidate.phoneNumber}</p>
//       <p>Location: {candidate.location}</p>
//       <h3>Skills</h3>
//       <ul>
//         {candidate.skills?.map((skill) => (
//           <li key={skill.id}>{skill.skillName} - {skill.skillLevel}</li>
//         ))}
//       </ul>
//       <h3>Education</h3>
//       <ul>
//         {candidate.education?.map((edu) => (
//           <li key={edu.id}>
//             {edu.degree} from {edu.institution} ({edu.startDate} - {edu.endDate})
//           </li>
//         ))}
//       </ul>
//       <h3>Projects</h3>
//       <ul>
//         {candidate.projects?.map((project) => (
//           <li key={project.id}>
//             {project.projectName || 'Unnamed Project'}: {project.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CandidateDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaProjectDiagram, FaStar } from 'react-icons/fa';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
  background: linear-gradient(to right,rgb(28, 32, 41),rgb(102, 128, 216)); /* Updated with a professional blue gradient */
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 3px solid #fff;
`;

const BasicInfo = styled.div`
  flex-grow: 1;
`;

const Name = styled.h2`
  font-size: 28px;
  margin: 0;
  color: #fff; /* Keeping the name white for contrast */
`;

const InfoText = styled.p`
  font-size: 16px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  color: #f8f9fa; /* Soft white color for text */
`;

const Icon = styled.span`
  margin-right: 10px;
  color: #ffcc00; /* Gold color for icons */
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Column = styled.div`
  flex: 1;
  margin: 0 10px;
  background: rgba(255, 255, 255, 0.1); /* Slightly off-white background for columns */
  padding: 15px;
  border-radius: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  color: #ffcc00; /* Gold color for section titles */
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background: #f8f9fa;
  color: #333;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: #ff4d4d;
  text-align: center;
  font-size: 18px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: #ddd;
`;

// Education Section Styled Components
const EducationSection = styled(Column)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1); /* Slightly off-white background */
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const EducationCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const EduTitle = styled.h4`
  font-size: 18px;
  color:rgb(12, 12, 11); /* Professional blue for education titles */
  margin-bottom: 10px;
  align-items: center;
`;

const EduDetails = styled.p`
 margin-top:2px;  
font-size: 14px;
  margin-bottom: 8px;
  color: #555; /* Dark gray for details */
`;

const EduDate = styled.p`
  font-size: 13px;
  color: #888; /* Light gray for date */
`;

const EducationIcon = styled.span`
  margin-right: 10px;
  color: #007bff; /* Professional blue for icons */
`;

const EducationTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  color:#ffcc00; /* Professional blue for the title */
  display: flex;
  align-items: center;
`;

const EducationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CandidateDetail = () => {
  const { jobSeekerId } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:8086/jobSeeker/getjobseeker/${jobSeekerId}`)
      .then((response) => {
        setCandidate(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching job seeker details');
        setLoading(false);
      });
  }, [jobSeekerId]);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!candidate) return <ErrorMessage>Candidate not found.</ErrorMessage>;

  return (
    <Container>
      <Header>
        <ProfileImage
          src={`http://localhost:8086/uploads/profile_pictures/${candidate.profilePicturePath || 'default.jpg'}`}
          alt="Profile"
        />
        <BasicInfo>
          <Name>{candidate.firstName} {candidate.lastName}</Name>
          <InfoText><Icon><FaEnvelope /></Icon>{candidate.emailAddress}</InfoText>
          <InfoText><Icon><FaPhone /></Icon>{candidate.phoneNumber}</InfoText>
          <InfoText><Icon><FaMapMarkerAlt /></Icon>{candidate.location}</InfoText>
        </BasicInfo>
      </Header>

      <Section>
        <Column>
          <SectionTitle><FaStar /> Skills</SectionTitle>
          <List>
            {candidate.skills?.map((skill) => (
              <ListItem key={skill.id}>
                <Icon><FaStar /></Icon>{skill.skillName} - {skill.skillLevel}
              </ListItem>
            )) || <p>No skills available.</p>}
          </List>

          <SectionTitle><FaProjectDiagram /> Projects</SectionTitle>
          <List>
            {candidate.projects?.map((project) => (
              <ListItem key={project.id}>
                <strong>{project.projectName || 'Unnamed Project'}:</strong> {project.description}
              </ListItem>
            )) || <p>No projects available.</p>}
          </List>
        </Column>

        <EducationSection>
          <EducationTitle><FaGraduationCap /> Education</EducationTitle>
          <EducationList>
            {candidate.education?.map((edu) => (
              <EducationCard key={edu.id}>
                <EduTitle>
                  <EducationIcon><FaGraduationCap /></EducationIcon>
                  <strong>{edu.degree}</strong> from {edu.institution}
                </EduTitle>
                <EduDetails>{edu.fieldOfStudy}</EduDetails>
                <EduDate>{edu.startDate} - {edu.endDate}</EduDate>
              </EducationCard>
            )) || <p>No education data available.</p>}
          </EducationList>
        </EducationSection>
      </Section>
    </Container>
  );
};

export default CandidateDetail;
