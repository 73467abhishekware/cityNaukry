

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import { FaEye } from 'react-icons/fa';

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

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const TableHeader = styled.th`
//   background: #007bff;
//   color: #ffffff;
//   padding: 12px;
//   text-align: left;
//   font-size: 16px;
// `;

// const TableRow = styled.tr`
//   &:nth-child(even) {
//     background: #f9f9f9;
//   }
// `;

// const TableCell = styled.td`
//   padding: 12px;
//   border: 1px solid #ddd;
// `;

// const ModalBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.7);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
//   transition: opacity 0.3s ease;
// `;

// const ModalContainer = styled.div`
//   background: #ffffff;
//   padding: 40px;
//   border-radius: 15px;
//   width: 90%;
//   max-width: 900px;
//   box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
//   overflow-y: auto;
//   max-height: 80vh;
//   animation: fadeIn 0.5s ease;
// `;

// const ModalHeader = styled.h3`
//   margin: 0 0 20px 0;
//   font-size: 26px;
//   color: #007bff;
//   font-weight: bold;
//   text-align: center;
// `;

// const ModalCloseButton = styled.button`
//   background: #ff4d4d;
//   color: white;
//   border: none;
//   padding: 12px 20px;
//   border-radius: 50%;
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   font-size: 20px;
//   transition: background 0.3s;
  
//   &:hover {
//     background: #ff1a1a;
//   }
// `;

// const ModalContent = styled.div`
//   font-size: 18px;
//   line-height: 1.6;
//   color: #333;
// `;

// const JobPosts = () => {
//   const location = useLocation();
//   const { posts } = location.state || { posts: [] };
//   const [selectedPost, setSelectedPost] = useState(null); // state to manage selected post details
//   const [isModalOpen, setIsModalOpen] = useState(false); // state to control modal visibility

//   const handleShowDetails = (post) => {
//     setSelectedPost(post); // set selected post to show details
//     setIsModalOpen(true); // open the modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // close the modal
//   };

//   return (
//     <Container>
//       <h2>Job Posts</h2>
//       {posts.length > 0 ? (
//         <>
//           <Table>
//             <thead>
//               <tr>
//                 <TableHeader>Title</TableHeader>
//                 <TableHeader>Employment Type</TableHeader>
//                 <TableHeader>Experience Required</TableHeader>
//                 <TableHeader>Location</TableHeader>
//                 <TableHeader>Qualifications</TableHeader>
//                 <TableHeader>Responsibilities</TableHeader>
//                 <TableHeader>Salary Range</TableHeader>
//                 <TableHeader>Action</TableHeader>
//               </tr>
//             </thead>
//             <tbody>
//               {posts.map((post, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{post.title}</TableCell>
//                   <TableCell>{post.employmentType}</TableCell>
//                   <TableCell>{post.experienceRequired}</TableCell>
//                   <TableCell>{post.location}</TableCell>
//                   <TableCell>{post.qualifications}</TableCell>
//                   <TableCell>{post.responsibilities}</TableCell>
//                   <TableCell>{post.salaryRange}</TableCell>
//                   <TableCell>
//                     <button onClick={() => handleShowDetails(post)}>
//                       <FaEye style={{ cursor: 'pointer', color: '#007bff', fontSize: '20px' }} />
//                     </button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </tbody>
//           </Table>

//           {/* Modal Popup for Job Post Details */}
//           {isModalOpen && (
//             <ModalBackground onClick={handleCloseModal}>
//               <ModalContainer onClick={(e) => e.stopPropagation()}>
//                 <ModalHeader>Job Post Details</ModalHeader>
//                 <ModalCloseButton onClick={handleCloseModal}>&times;</ModalCloseButton>
//                 <ModalContent>
//                   <p><strong>Title:</strong> {selectedPost.title}</p>
//                   <p><strong>Description:</strong> {selectedPost.description}</p>
//                   <p><strong>Responsibilities:</strong> {selectedPost.responsibilities}</p>
//                   <p><strong>Qualifications:</strong> {selectedPost.qualifications}</p>
//                   <p><strong>Experience Required:</strong> {selectedPost.experienceRequired} years</p>
//                   <p><strong>Location:</strong> {selectedPost.location}</p>
//                   <p><strong>Salary Range:</strong> {selectedPost.salaryRange}</p>
//                   <p><strong>Employment Type:</strong> {selectedPost.employmentType}</p>
//                 </ModalContent>
//               </ModalContainer>
//             </ModalBackground>
//           )}
//         </>
//       ) : (
//         <p>No job posts available.</p>
//       )}
//     </Container>
//   );
// };

// export default JobPosts;


import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaTimes, FaMapMarkerAlt, FaSuitcase, FaMoneyBillWave, FaUserTie } from 'react-icons/fa';

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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background: #007bff;
  color: #ffffff;
  padding: 12px;
  text-align: left;
  font-size: 16px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: opacity 0.3s ease;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 15px;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: 80vh;
  animation: fadeIn 0.5s ease;
`;

const ModalHeader = styled.h3`
  margin: 0 0 20px 0;
  font-size: 26px;
  color: #007bff;
  font-weight: bold;
  text-align: center;
`;

const ModalCloseButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  transition: background 0.3s;
  
  &:hover {
    background: #ff1a1a;
  }
`;

const ModalContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const InfoIcon = styled.div`
  margin-right: 15px;
  font-size: 24px;
  color: #007bff;
`;

const InfoText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const JobPosts = () => {
  const location = useLocation();
  const { posts } = location.state || { posts: [] };
  const [selectedPost, setSelectedPost] = useState(null); // state to manage selected post details
  const [isModalOpen, setIsModalOpen] = useState(false); // state to control modal visibility

  const handleShowDetails = (post) => {
    setSelectedPost(post); // set selected post to show details
    setIsModalOpen(true); // open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // close the modal
  };

  return (
    <Container>
      <h2>Job Posts</h2>
      {posts.length > 0 ? (
        <>
          <Table>
            <thead>
              <tr>
                <TableHeader>Title</TableHeader>
                <TableHeader>Employment Type</TableHeader>
                <TableHeader>Experience Required</TableHeader>
                <TableHeader>Location</TableHeader>
                <TableHeader>Qualifications</TableHeader>
                <TableHeader>Responsibilities</TableHeader>
                <TableHeader>Salary Range</TableHeader>
                <TableHeader>Action</TableHeader>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <TableRow key={index}>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.employmentType}</TableCell>
                  <TableCell>{post.experienceRequired}</TableCell>
                  <TableCell>{post.location}</TableCell>
                  <TableCell>{post.qualifications}</TableCell>
                  <TableCell>{post.responsibilities}</TableCell>
                  <TableCell>{post.salaryRange}</TableCell>
                  <TableCell>
                    <button onClick={() => handleShowDetails(post)}>
                      <FaEye style={{ cursor: 'pointer', color: '#007bff', fontSize: '20px' }} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

          {/* Modal Popup for Job Post Details */}
          {isModalOpen && (
            <ModalBackground onClick={handleCloseModal}>
              <ModalContainer onClick={(e) => e.stopPropagation()}>
                <ModalHeader>Job Post Details</ModalHeader>
                <ModalCloseButton onClick={handleCloseModal}>
                  <FaTimes />
                </ModalCloseButton>
                <ModalContent>
                  <InfoRow>
                    <InfoIcon>
                      <FaSuitcase />
                    </InfoIcon>
                    <InfoText><strong>Title:</strong> {selectedPost.title}</InfoText>
                  </InfoRow>
                  <InfoRow>
                    <InfoIcon>
                      <FaUserTie />
                    </InfoIcon>
                    <InfoText><strong>Experience:</strong> {selectedPost.experienceRequired} years</InfoText>
                  </InfoRow>
                  <InfoRow>
                    <InfoIcon>
                      <FaMapMarkerAlt />
                    </InfoIcon>
                    <InfoText><strong>Location:</strong> {selectedPost.location}</InfoText>
                  </InfoRow>
                  <InfoRow>
                    <InfoIcon>
                      <FaMoneyBillWave />
                    </InfoIcon>
                    <InfoText><strong>Salary:</strong> {selectedPost.salaryRange}</InfoText>
                  </InfoRow>
                  <InfoRow>
                    <InfoIcon>
                      <FaSuitcase />
                    </InfoIcon>
                    <InfoText><strong>Employment Type:</strong> {selectedPost.employmentType}</InfoText>
                  </InfoRow>
                  <InfoRow>
                    <InfoIcon>
                      <FaEye />
                    </InfoIcon>
                    <InfoText><strong>Responsibilities:</strong> {selectedPost.responsibilities}</InfoText>
                  </InfoRow>
                  <InfoRow>
                    <InfoIcon>
                      <FaUserTie />
                    </InfoIcon>
                    <InfoText><strong>Qualifications:</strong> {selectedPost.qualifications}</InfoText>
                  </InfoRow>
                </ModalContent>
              </ModalContainer>
            </ModalBackground>
          )}
        </>
      ) : (
        <p>No job posts available.</p>
      )}
    </Container>
  );
};

export default JobPosts;
