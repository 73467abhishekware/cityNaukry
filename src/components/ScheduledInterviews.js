// import React, { useEffect, useState } from "react";

// const ScheduledInterviews = () => {
//   const [interviews, setInterviews] = useState([]);

//   useEffect(() => {
//     // Fetch scheduled interviews by job seeker ID (replace with actual jobSeekerId)
//     const jobSeekerId = 1; // Example job seeker ID
//     fetch(`http://localhost:8085/application/getScheduledInterviews/${jobSeekerId}`)
//       .then((response) => response.json())
//       .then((data) => setInterviews(data))
//       .catch((error) => console.error("Error fetching scheduled interviews:", error));
//   }, []);

//   // Styles
//   const styles = {
//     container: {
//       maxWidth: "1200px",
//       margin: "0 auto",
//       padding: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     title: {
//       textAlign: "center",
//       fontSize: "24px",
//       fontWeight: "bold",
//       marginBottom: "20px",
//       color: "#333",
//     },
//     noInterviews: {
//       textAlign: "center",
//       fontSize: "18px",
//       color: "#555",
//     },
//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     card: {
//       backgroundColor: "#ffffff",
//       padding: "20px",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     },
//     cardHover: {
//       transform: "translateY(-5px)",
//       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//     },
//     jobTitle: {
//       fontSize: "20px",
//       fontWeight: "bold",
//       color: "#0073e6",
//       marginBottom: "10px",
//     },
//     detail: {
//       fontSize: "16px",
//       margin: "5px 0",
//       color: "#444",
//     },
//     status: {
//       fontWeight: "bold",
//       color: "#008000", // Green for confirmed status
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Scheduled Interviews</h2>
//       {interviews.length === 0 ? (
//         <p style={styles.noInterviews}>No interviews scheduled yet.</p>
//       ) : (
//         <div style={styles.grid}>
//           {interviews.map((interview) => (
//             <div
//               key={interview.id}
//               style={styles.card}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform = styles.cardHover.transform)
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = "translateY(0)")
//               }
//             >
//               <h3 style={styles.jobTitle}>{interview.jobTitle}</h3>
//               <p style={styles.detail}>
//                 <strong>Company:</strong> {interview.companyName}
//               </p>
//               <p style={styles.detail}>
//                 <strong>Date:</strong>{" "}
//                 {new Date(interview.scheduledDate).toLocaleDateString()}
//               </p>
//               <p style={styles.detail}>
//                 <strong>Time:</strong> {interview.scheduledTime}
//               </p>
//               <p style={styles.detail}>
//                 <strong>Location:</strong> {interview.location}
//               </p>
//               <p style={{ ...styles.detail, ...styles.status }}>
//                 <strong>Status:</strong> {interview.status}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScheduledInterviews;


import React, { useEffect, useState } from "react";

const ScheduledInterviews = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    // Fetch scheduled interviews by job seeker ID (replace with actual jobSeekerId)
    const jobSeekerId = 1; // Example job seeker ID
    fetch(`http://localhost:8085/application/getScheduledInterviews/${jobSeekerId}`)
      .then((response) => response.json())
      .then((data) => setInterviews(data))
      .catch((error) => console.error("Error fetching scheduled interviews:", error));
  }, []);

  // Styles
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxHeight: "80vh", // You can adjust this value as needed
      overflowY: "auto", // Allows vertical scrolling
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
    noInterviews: {
      textAlign: "center",
      fontSize: "18px",
      color: "#555",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
    jobTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#0073e6",
      marginBottom: "10px",
    },
    detail: {
      fontSize: "16px",
      margin: "5px 0",
      color: "#444",
    },
    status: {
      fontWeight: "bold",
      color: "#008000", // Green for confirmed status
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Scheduled Interviews</h2>
      {interviews.length === 0 ? (
        <p style={styles.noInterviews}>No interviews scheduled yet.</p>
      ) : (
        <div style={styles.grid}>
          {interviews.map((interview) => (
            <div
              key={interview.id}
              style={styles.card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = styles.cardHover.transform)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3 style={styles.jobTitle}>{interview.jobTitle}</h3>
              <p style={styles.detail}>
                <strong>Company:</strong> {interview.companyName}
              </p>
              <p style={styles.detail}>
                <strong>Date:</strong>{" "}
                {new Date(interview.scheduledDate).toLocaleDateString()}
              </p>
              <p style={styles.detail}>
                <strong>Time:</strong> {interview.scheduledTime}
              </p>
              <p style={styles.detail}>
                <strong>Location:</strong> {interview.location}
              </p>
              <p style={{ ...styles.detail, ...styles.status }}>
                <strong>Status:</strong> {interview.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduledInterviews;
