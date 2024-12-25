// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function JobApplicants() {
//   const { jobId } = useParams();  // Get jobId from URL parameters
//   const [applicants, setApplicants] = useState([]);
//   const [applicantsLoading, setApplicantsLoading] = useState(false);
//   const [applicantsError, setApplicantsError] = useState(null);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       setApplicantsLoading(true);
//       setApplicantsError(null);
//       try {
//         const response = await axios.get(`http://localhost:8086/jobSeeker/applicants?jobPostId=${jobId}`);
//         if (response.status === 200) {
//           setApplicants(response.data);
//           console.log("data",response.data)
//         }
//       } catch (err) {
//         setApplicantsError('Failed to fetch applicants');
//       } finally {
//         setApplicantsLoading(false);
//       }
//     };

//     fetchApplicants();
//   }, [jobId]);

//   // Function to format date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     if (isNaN(date)) {
//       return 'Date not available';  // Fallback for invalid date
//     }
//     return date.toLocaleDateString();  // Format the date
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
//       <header style={{ backgroundColor: '#1e293b', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
//         <h1>Applicants for Job</h1>
//       </header>

//       <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
//         {applicantsLoading ? (
//           <div style={{ textAlign: 'center' }}>
//             <div className="spinner-border text-primary" role="status">
//               <span className="sr-only">Loading...</span>
//             </div>
//             <p>Loading applicants...</p>
//           </div>
//         ) : applicantsError ? (
//           <div style={{ color: 'red', textAlign: 'center' }}>
//             <p>{applicantsError}</p>
//           </div>
//         ) : applicants.length === 0 ? (
//           <div style={{ textAlign: 'center' }}>
//             <p>No applicants found for this job.</p>
//           </div>
//         ) : (
//           <div>
//             <h3 style={{ marginBottom: '1rem' }}>Applicants</h3>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
//               {applicants.map((applicant) => (
//                 <div
//                   key={applicant.id}
//                   style={{
//                     backgroundColor: '#f9fafb',
//                     padding: '1.5rem',
//                     borderRadius: '8px',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                   }}
//                 >
//                   <h4 style={{ marginBottom: '0.5rem' }}>{applicant.name}</h4>
//                   <p>Naae: {applicant.email}</p>
//                   <p>Resume: <a href={applicant.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a></p>
//                   <p>Applied On: {formatDate(applicant.appliedDate)}</p> {/* Use formatDate here */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default JobApplicants;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function JobApplicants() {
  const { jobId } = useParams(); // Get jobId from URL params
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [interviewDetails, setInterviewDetails] = useState({
    interviewDate: "",
    interviewLocation: "",
    interviewMode: "",
    interviewLink: "",
    interviewer: "",
    interviewDuration: "",
  });

  useEffect(() => {
    const fetchApplicants = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8086/jobSeeker/applicants?jobPostId=${jobId}`
        );

        if (response.status === 200) {
          setApplicants(response.data);
          console.log("data is", response.data);
        } else {
          throw new Error("Failed to fetch applicants");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [jobId]);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Date not available";
    return date.toLocaleDateString();
  };

  // Handle Reject Applicant
  const handleReject = async (applicationId) => {
    if (!window.confirm("Are you sure you want to reject this applicant?")) return;

    try {
      const response = await axios.delete(
        `http://localhost:8086/jobSeeker/deleteApplicant?applicationId=${applicationId}`
      );

      if (response.status === 200) {
        alert("Applicant rejected successfully!");
        // Remove the applicant from the UI
        setApplicants(applicants.filter((app) => app.applicationId !== applicationId));
      } else {
        throw new Error("Failed to reject the applicant");
      }
    } catch (error) {
      console.error("Failed to reject applicant", error);
      alert("An error occurred while rejecting the applicant.");
    }
  };

  // Handle Show Interview Modal
  const handleScheduleInterview = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  // Handle Interview Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterviewDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle Submit Interview Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { interviewDate, interviewLocation, interviewMode, interviewer, interviewDuration } = interviewDetails;
    if (!interviewDate || !interviewLocation || !interviewMode || !interviewer || !interviewDuration) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8086/jobSeeker/scheduleInterview", {
        jobSeekerId: selectedApplicant.jobSeeker.jobSeekerId,  // Use jobSeekerId instead of applicationId
        jobPostId: jobId,  // You already have jobId from the URL params
        interviewDate,
        interviewLocation,
        interviewMode,
        interviewLink: interviewMode === "Online" ? interviewDetails.interviewLink : "",
        interviewer,
        interviewMaterial: "Materials needed for the interview",
        interviewDuration,
      });

      if (response.status === 201) {
        alert("Interview scheduled successfully!");
        setShowModal(false); // Close modal after submission
        setInterviewDetails({
          interviewDate: "",
          interviewLocation: "",
          interviewMode: "",
          interviewLink: "",
          interviewer: "",
          interviewDuration: "",
        });
      }
    } catch (error) {
      console.error("Failed to schedule interview", error);
      alert("Failed to schedule interview. " + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#1e293b", color: "#fff", padding: "2rem 0", textAlign: "center" }}>
        <h1>Applicants for Job</h1>
      </header>

      <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <p>Loading applicants...</p>
          </div>
        ) : error ? (
          <div style={{ color: "red", textAlign: "center" }}>
            <p>{error}</p>
          </div>
        ) : applicants.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <p>No applicants found for this job.</p>
          </div>
        ) : (
          <div>
            <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>Job Applicants</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
              {applicants.map((app) => (
                <div
                  key={app.applicationId}
                  style={{
                    backgroundColor: "#f9fafb",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                >
                  {/* Job Seeker Info */}
                  <h4 style={{ marginBottom: "0.5rem" }}>
                    {app.jobSeeker.firstName} {app.jobSeeker.lastName}
                  </h4>
                  <p>applicationId: {app.applicationId}</p>
                  <p>Email: {app.jobSeeker.emailAddress}</p>
                  <p>Phone: {app.jobSeeker.phoneNumber}</p>
                  <p>Location: {app.jobSeeker.location}</p>

                  {/* Resume Link */}
                  <p>
                    Resume:{" "}
                    <a
                      href={`http://localhost:8086/uploads/resumes/${app.jobSeeker.resumePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2563eb", textDecoration: "underline" }}
                    >
                      View Resume
                    </a>
                  </p>

                  {/* Application Date */}
                  <p>Applied On: {formatDate(app.applicationDate)}</p>

                  {/* Application Status */}
                  <p>
                    <strong>Status:</strong> {app.applicationStatus}
                  </p>

                  {/* Action Buttons */}
                  <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "10px" }}>
                    <button
                      onClick={() => handleReject(app.applicationId)}
                      style={{
                        backgroundColor: "#dc2626",
                        color: "#fff",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleScheduleInterview(app)}
                      style={{
                        backgroundColor: "#10b981",
                        color: "#fff",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Schedule Interview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal for scheduling interview */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>Schedule Interview</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="interviewDate">Interview Date & Time:</label>
                <input
                  type="datetime-local"
                  id="interviewDate"
                  name="interviewDate"
                  value={interviewDetails.interviewDate}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="interviewLocation">Location:</label>
                <input
                  type="text"
                  id="interviewLocation"
                  name="interviewLocation"
                  value={interviewDetails.interviewLocation}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="interviewMode">Mode:</label>
                <select
                  id="interviewMode"
                  name="interviewMode"
                  value={interviewDetails.interviewMode}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="In-Person">In-Person</option>
                </select>
              </div>
              {interviewDetails.interviewMode === "Online" && (
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="interviewLink">Interview Link:</label>
                  <input
                    type="url"
                    id="interviewLink"
                    name="interviewLink"
                    value={interviewDetails.interviewLink}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "0.5rem" }}
                  />
                </div>
              )}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="interviewer">Interviewer Name:</label>
                <input
                  type="text"
                  id="interviewer"
                  name="interviewer"
                  value={interviewDetails.interviewer}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="interviewDuration">Duration (minutes):</label>
                <input
                  type="number"
                  id="interviewDuration"
                  name="interviewDuration"
                  value={interviewDetails.interviewDuration}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.5rem" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#10b981",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Schedule Interview
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "1rem",
                backgroundColor: "#e5e7eb",
                color: "#000",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobApplicants;




// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function JobApplicants() {
//   const { jobId } = useParams(); // Get jobId from URL params
//   const [applicants, setApplicants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `http://localhost:8086/jobSeeker/applicants?jobPostId=${jobId}`
//         );

//         if (response.status === 200) {
//           setApplicants(response.data);
//           console.log("data is",response.data)
//         } else {
//           throw new Error("Failed to fetch applicants");
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplicants();
//   }, [jobId]);

//   // Function to format date
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     if (isNaN(date)) return "Date not available";
//     return date.toLocaleDateString();
//   };

//   // Handle Reject Applicant
//  // Handle Reject Applicant
// const handleReject = async (applicationId) => {
//     if (!window.confirm("Are you sure you want to reject this applicant?")) return;
  
//     try {
//       const response = await axios.delete(
//         `http://localhost:8086/jobSeeker/deleteApplicant?applicationId=${applicationId}`
//       );
  
//       if (response.status === 200) {
//         alert("Applicant rejected successfully!");
//         // Remove the applicant from the UI
//         setApplicants(applicants.filter((app) => app.applicationId !== applicationId));
//       } else {
//         throw new Error("Failed to reject the applicant");
//       }
//     } catch (error) {
//       console.error("Failed to reject applicant", error);
//       alert("An error occurred while rejecting the applicant.");
//     }
//   };
  

//   // Handle Schedule Interview
//   const handleScheduleInterview = (applicant) => {
//     const interviewDate = prompt("Enter interview date and time (e.g., YYYY-MM-DD HH:MM):");
//     if (!interviewDate) return;

//     try {
//       axios.post("http://localhost:8086/jobSeeker/scheduleInterview", {
//         applicationId: applicant.applicationId,
//         interviewDate: interviewDate,
//       });

//       alert("Interview scheduled successfully!");
//     } catch (error) {
//       console.error("Failed to schedule interview", error);
//       alert("Failed to schedule interview.");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <header style={{ backgroundColor: "#1e293b", color: "#fff", padding: "2rem 0", textAlign: "center" }}>
//         <h1>Applicants for Job</h1>
//       </header>

//       <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
//         {loading ? (
//           <div style={{ textAlign: "center" }}>
//             <p>Loading applicants...</p>
//           </div>
//         ) : error ? (
//           <div style={{ color: "red", textAlign: "center" }}>
//             <p>{error}</p>
//           </div>
//         ) : applicants.length === 0 ? (
//           <div style={{ textAlign: "center" }}>
//             <p>No applicants found for this job.</p>
//           </div>
//         ) : (
//           <div>
//             <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>Job Applicants</h3>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
//               {applicants.map((app) => (
//                 <div
//                   key={app.applicationId}
//                   style={{
//                     backgroundColor: "#f9fafb",
//                     padding: "1.5rem",
//                     borderRadius: "8px",
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                     textAlign: "center",
//                   }}
//                 >
//                   {/* Job Seeker Info */}
//                   <h4 style={{ marginBottom: "0.5rem" }}>
//                     {app.jobSeeker.firstName} {app.jobSeeker.lastName}
//                   </h4>
//                   <p>applicationId: {app.applicationId}</p>
//                   <p>Email: {app.jobSeeker.emailAddress}</p>
//                   <p>Phone: {app.jobSeeker.phoneNumber}</p>
//                   <p>Location: {app.jobSeeker.location}</p>

//                   {/* Resume Link */}
//                   <p>
//                     Resume:{" "}
//                     <a
//                       href={`http://localhost:8086/uploads/resumes/${app.jobSeeker.resumePath}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       style={{ color: "#2563eb", textDecoration: "underline" }}
//                     >
//                       View Resume
//                     </a>
//                   </p>

//                   {/* Application Date */}
//                   <p>Applied On: {formatDate(app.applicationDate)}</p>

//                   {/* Application Status */}
//                   <p>
//                     <strong>Status:</strong> {app.applicationStatus}
//                   </p>

//                   {/* Action Buttons */}
//                   <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "10px" }}>
//                     <button
//                       onClick={() => handleReject(app.applicationId)}
//                       style={{
//                         backgroundColor: "#dc2626",
//                         color: "#fff",
//                         border: "none",
//                         padding: "0.5rem 1rem",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Reject
//                     </button>
//                     <button
//                       onClick={() => handleScheduleInterview(app)}
//                       style={{
//                         backgroundColor: "#10b981",
//                         color: "#fff",
//                         border: "none",
//                         padding: "0.5rem 1rem",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Schedule Interview
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default JobApplicants;
