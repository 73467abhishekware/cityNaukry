// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function CompanyInterview() {
//   const [interviews, setInterviews] = useState([]);
//   const [error, setError] = useState('');

//   const companyId = sessionStorage.getItem("companyId");

//   // Fetch interview details when the component mounts
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8086/jobSeeker/getInterviewsByCompany/${companyId}`)
//       .then((response) => {
//         setInterviews(response.data);
//         setError('');
//       })
//       .catch((error) => {
//         // Handle the error correctly by extracting the message
//         const errorMessage = error.response
//           ? error.response.data.message || error.response.data // Extract error message from response
//           : 'Error fetching interviews'; // Default error message
//         setError(errorMessage);
//       });
//   }, [companyId]);

//   return (
//     <div className="company-interview-container">
//       <h2>Interviews for Company {companyId}</h2>
//       {error && <div className="error-message">{error}</div>}
//       <div className="interview-cards">
//         {interviews.length > 0 ? (
//           interviews.map((interview) => (
//             <div key={interview.interviewId} className="interview-card">
//               <h3>Interview with {interview.jobSeeker.name}</h3>
//               <p><strong>Job Position:</strong> {interview.jobPost.jobTitle}</p>
//               <p><strong>Date:</strong> {new Date(interview.interviewDate).toLocaleDateString()}</p>
//               <p><strong>Time:</strong> {interview.interviewTime}</p>
//               <p><strong>Location:</strong> {interview.interviewLocation}</p>
//               <p><strong>Mode:</strong> {interview.interviewMode}</p>
//               <p><strong>Interviewer:</strong> {interview.interviewer}</p>
//               {interview.interviewMode === 'Online' && interview.interviewLink && (
//                 <p><strong>Link:</strong> <a href={interview.interviewLink} target="_blank" rel="noopener noreferrer">{interview.interviewLink}</a></p>
//               )}
//               <p><strong>Duration:</strong> {interview.interviewDuration} minutes</p>
//             </div>
//           ))
//         ) : (
//           <p>No interviews found for this company.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CompanyInterview;

// // CSS styles included within the same file
// const styles = `
//   .company-interview-container {
//     margin: 20px;
//     font-family: Arial, sans-serif;
//   }

//   h2 {
//     text-align: center;
//     color: #4CAF50;
//     margin-bottom: 20px;
//   }

//   .error-message {
//     color: red;
//     text-align: center;
//     font-size: 18px;
//     margin-bottom: 20px;
//   }

//   .interview-cards {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 20px;
//   }

//   .interview-card {
//     background-color: #f9f9f9;
//     border-radius: 8px;
//     border: 1px solid #ddd;
//     padding: 20px;
//     width: 300px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     transition: transform 0.3s ease-in-out;
//   }

//   .interview-card:hover {
//     transform: scale(1.05);
//   }

//   .interview-card h3 {
//     margin-top: 0;
//     color: #333;
//   }

//   .interview-card p {
//     margin: 5px 0;
//   }

//   .interview-card a {
//     color: #1e90ff;
//     text-decoration: none;
//   }

//   .interview-card a:hover {
//     text-decoration: underline;
//   }
// `;

// // Add the styles to the document
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = styles;
// document.head.appendChild(styleSheet); 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt, FaMapMarkerAlt, FaLink, FaClock, FaUserAlt, FaPaperclip } from 'react-icons/fa';
import { IoMdTimer } from 'react-icons/io';

function CompanyInterview() {
  const [interviews, setInterviews] = useState([]);
  const [error, setError] = useState('');
  const companyId = sessionStorage.getItem("companyId");

  // Fetch interview details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8086/jobSeeker/getInterviewsByCompany/${companyId}`)
      .then((response) => {
        setInterviews(response.data);
        setError('');
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data.message || error.response.data
          : 'Error fetching interviews';
        setError(errorMessage);
      });
  }, [companyId]);

  // Function to check if the interview date has passed
  const isPastDate = (interviewDate) => {
    const today = new Date();
    const interviewDateObj = new Date(interviewDate);
    return today > interviewDateObj;
  };

  return (
    <div className="company-interview-container">
      <h2>Interviews for Company {companyId}</h2>
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      <div className="interview-cards">
        {interviews.length > 0 ? (
          interviews.map((interview) => {
            const interviewDatePassed = isPastDate(interview.interviewDate);
            return (
              <div key={interview.interviewId} className="interview-card">
                <h3>Interview with {interview.jobSeeker.name}</h3>
                <p><FaUserAlt /> <strong>Job Position:</strong> {interview.jobPost.jobTitle}</p>
                <p>
                  <FaCalendarAlt /> <strong>Date:</strong>
                  <span style={{ color: interviewDatePassed ? 'red' : 'inherit' }}>
                    {new Date(interview.interviewDate).toLocaleDateString()}
                  </span>
                </p>
                <p><FaClock /> <strong>Time:</strong> {interview.interviewTime}</p>
                <p><FaMapMarkerAlt /> <strong>Location:</strong> {interview.interviewLocation}</p>
                <p><FaLink /> <strong>Mode:</strong> {interview.interviewMode}</p>
                <p><FaUserAlt /> <strong>Interviewer:</strong> {interview.interviewer}</p>
                {interview.interviewMode === 'Online' && interview.interviewLink && (
                  <p><FaLink /> <strong>Link:</strong> <a href={interview.interviewLink} target="_blank" rel="noopener noreferrer">{interview.interviewLink}</a></p>
                )}
                <p><IoMdTimer /> <strong>Duration:</strong> {interview.interviewDuration} minutes</p>
                {interview.interviewMaterial && (
                  <p><FaPaperclip /> <strong>Materials:</strong> {interview.interviewMaterial}</p>
                )}
              </div>
            );
          })
        ) : (
          <p>No interviews found for this company.</p>
        )}
      </div>
    </div>
  );
}

export default CompanyInterview;

// CSS styles included within the same file
const styles = `
  .company-interview-container {
    margin: 20px;
    font-family: Arial, sans-serif;
  }

  h2 {
    text-align: center;
    color: #4CAF50;
    margin-bottom: 20px;
  }

  .error-message {
    color: red;
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .interview-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .interview-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .interview-card:hover {
    transform: scale(1.05);
  }

  .interview-card h3 {
    margin-top: 0;
    color: #333;
    font-size: 20px;
  }

  .interview-card p {
    margin: 10px 0;
    font-size: 16px;
    color: #555;
  }

  .interview-card a {
    color: #1e90ff;
    text-decoration: none;
  }

  .interview-card a:hover {
    text-decoration: underline;
  }

  .interview-card strong {
    color: #333;
  }

  .interview-card svg {
    margin-right: 8px;
    color: #4CAF50;
  }

  .error-message {
    color: #ff6347;
    font-size: 18px;
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
