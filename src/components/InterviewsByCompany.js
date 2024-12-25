// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const InterviewsByCompany = () => {
//   const [companyId, setCompanyId] = useState("");
//   const [interviews, setInterviews] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch companyId from sessionStorage on component mount
//   useEffect(() => {
//     const storedCompanyId = sessionStorage.getItem("companyId");
//     if (storedCompanyId) {
//       setCompanyId(storedCompanyId);
//     } else {
//       setError("Company ID not found in session storage.");
//     }
//   }, []);

//   const fetchInterviews = async () => {
//     if (!companyId) {
//       setError("Invalid company ID. Please check session storage.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setInterviews([]);

//     try {
//       const response = await axios.get(
//         `http://localhost:8086/jobSeeker/getInterviewsByCompany/${companyId}`
//       );
//       setInterviews(response.data);
//     } catch (err) {
//       if (err.response && err.response.status === 404) {
//         setError("No interviews found for this company.");
//       } else {
//         setError("An error occurred while fetching interviews.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (companyId) {
//       fetchInterviews(); // Automatically fetch interviews when companyId is set
//     }
//   }, [companyId]);

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h2>Interviews for Company</h2>

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {interviews.length > 0 && (
//         <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Job Title</th>
//               <th>Job Seeker</th>
//               <th>Date</th>
//               <th>Location</th>
//               <th>Mode</th>
//               <th>Interviewer</th>
//             </tr>
//           </thead>
//           <tbody>
//             {interviews.map((interview) => (
//               <tr key={interview.id}>
//                 <td>{interview.id}</td>
//                 <td>{interview.jobPost.title}</td>
//                 <td>
//                   {interview.jobSeeker.firstName} {interview.jobSeeker.lastName}
//                 </td>
//                 <td>{interview.interviewDate}</td>
//                 <td>{interview.interviewLocation}</td>
//                 <td>{interview.interviewMode}</td>
//                 <td>{interview.interviewer}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default InterviewsByCompany;



import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Box,
  Link,
} from "@mui/material";
import { Business, CalendarToday, LocationOn, Person, Timer } from "@mui/icons-material";

const InterviewsByCompany = () => {
  const [companyId, setCompanyId] = useState("");
  const [interviews, setInterviews] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch companyId from sessionStorage on component mount
  useEffect(() => {
    const storedCompanyId = sessionStorage.getItem("companyId");
    if (storedCompanyId) {
      setCompanyId(storedCompanyId);
    } else {
      setError("Company ID not found in session storage.");
    }
  }, []);

  const fetchInterviews = async () => {
    if (!companyId) {
      setError("Invalid company ID. Please check session storage.");
      return;
    }

    setLoading(true);
    setError("");
    setInterviews([]);

    try {
      const response = await axios.get(
        `http://localhost:8086/jobSeeker/getInterviewsByCompany/${companyId}`
      );
      setInterviews(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("No interviews found for this company.");
      } else {
        setError("An error occurred while fetching interviews.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (companyId) {
      fetchInterviews(); // Automatically fetch interviews when companyId is set
    }
  }, [companyId]);

  return (
    <Box
      sx={{
        padding: "0px",
        maxWidth: "600px", // Slightly wider for a modern look
        margin: "auto",
        backgroundColor: "#f0f4f8", // Light grayish blue background
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)", // Deep shadow for a floating effect
        overflow: "hidden", // Ensure nothing overflows from the container
      }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, fontWeight: "bold", color: "#3f51b5" }}>
        <Business sx={{ fontSize: 50, color: "#3f51b5" }} /> Interviews for Company
      </Typography>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress sx={{ color: "#3f51b5" }} />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3, backgroundColor: "#ffefef", color: "#d32f2f", borderRadius: "8px" }}>
          {error}
        </Alert>
      )}

      {interviews.length > 0 && (
        <TableContainer
          component={Paper}
          elevation={4}
          sx={{
            maxHeight: 300, // Increased table height for better view
            overflowY: "auto",
            backgroundColor: "#ffffff", // Clean white background for the table
            borderRadius: "12px", // Rounded corners for the table
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#3f51b5", color: "#ffffff" }}>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Job Title</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Job Seeker</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Time</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Location</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Mode</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Interviewer</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Duration (min)</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Materials</TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {interviews.map((interview) => (
                <TableRow key={interview.id} sx={{ "&:hover": { backgroundColor: "#f1f8ff" } }}>
                  <TableCell align="center">{interview.id}</TableCell>
                  <TableCell align="center">{interview.jobPost.title}</TableCell>
                  <TableCell align="center">
                    <Person sx={{ mr: 1, verticalAlign: "middle", color: "#3f51b5" }} />
                    {interview.jobSeeker.firstName} {interview.jobSeeker.lastName}
                  </TableCell>
                  <TableCell align="center">
                    <CalendarToday sx={{ mr: 1, verticalAlign: "middle" }} />
                    {interview.interviewDate}
                  </TableCell>
                  <TableCell align="center">
                    <Timer sx={{ mr: 1, verticalAlign: "middle" }} />
                    {interview.interviewTime || "N/A"}
                  </TableCell>
                  <TableCell align="center">
                    <LocationOn sx={{ mr: 1, verticalAlign: "middle" }} />
                    {interview.interviewLocation}
                  </TableCell>
                  <TableCell align="center">{interview.interviewMode}</TableCell>
                  <TableCell align="center">{interview.interviewer}</TableCell>
                  <TableCell align="center">{interview.interviewDuration || "N/A"}</TableCell>
                  <TableCell align="center">{interview.interviewMaterial || "N/A"}</TableCell>
                  <TableCell align="center">
                    {interview.interviewLink ? (
                      <Link href={interview.interviewLink} target="_blank" rel="noopener" color="primary">
                        View Details
                      </Link>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {!loading && !error && interviews.length === 0 && (
        <Typography variant="body1" align="center" sx={{ mt: 4, color: "#757575" }}>
          No interviews found.
        </Typography>
      )}
    </Box>
  );
};

export default InterviewsByCompany;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   CircularProgress,
//   Alert,
//   Box,
//   Link,
// } from "@mui/material";
// import { Business, CalendarToday, LocationOn, Person, Timer } from "@mui/icons-material";

// const InterviewsByCompany = () => {
//   const [companyId, setCompanyId] = useState("");
//   const [interviews, setInterviews] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch companyId from sessionStorage on component mount
//   useEffect(() => {
//     const storedCompanyId = sessionStorage.getItem("companyId");
//     if (storedCompanyId) {
//       setCompanyId(storedCompanyId);
//     } else {
//       setError("Company ID not found in session storage.");
//     }
//   }, []);

//   const fetchInterviews = async () => {
//     if (!companyId) {
//       setError("Invalid company ID. Please check session storage.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setInterviews([]);

//     try {
//       const response = await axios.get(
//         `http://localhost:8086/jobSeeker/getInterviewsByCompany/${companyId}`
//       );
//       setInterviews(response.data);
//     } catch (err) {
//       if (err.response && err.response.status === 404) {
//         setError("No interviews found for this company.");
//       } else {
//         setError("An error occurred while fetching interviews.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (companyId) {
//       fetchInterviews(); // Automatically fetch interviews when companyId is set
//     }
//   }, [companyId]);

//   return (
//     <Box
//       sx={{
//         padding: "20px",
//         maxWidth: "700px", // Reduced width
//         margin: "auto", // Center the content
//         backgroundColor: "#f9f9f9",
//         borderRadius: "8px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Typography variant="h4" gutterBottom align="center" sx={{ mb: 2 }}>
//         <Business sx={{ fontSize: 40, color: "#1976d2" }} /> Interviews for Company
//       </Typography>

//       {loading && (
//         <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
//           <CircularProgress />
//         </Box>
//       )}

//       {error && (
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       )}

//       {interviews.length > 0 && (
//         <TableContainer
//           component={Paper}
//           elevation={3}
//           sx={{
//             maxHeight: 400, // Scrollable table height
//             overflowY: "auto",
//           }}
//         >
//           <Table stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center"><strong>ID</strong></TableCell>
//                 <TableCell align="center"><strong>Job Title</strong></TableCell>
//                 <TableCell align="center"><strong>Job Seeker</strong></TableCell>
//                 <TableCell align="center"><strong>Date</strong></TableCell>
//                 <TableCell align="center"><strong>Time</strong></TableCell>
//                 <TableCell align="center"><strong>Location</strong></TableCell>
//                 <TableCell align="center"><strong>Mode</strong></TableCell>
//                 <TableCell align="center"><strong>Interviewer</strong></TableCell>
//                 <TableCell align="center"><strong>Duration (min)</strong></TableCell>
//                 <TableCell align="center"><strong>Materials</strong></TableCell>
//                 <TableCell align="center"><strong>Link</strong></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {interviews.map((interview) => (
//                 <TableRow key={interview.id}>
//                   <TableCell align="center">{interview.id}</TableCell>
//                   <TableCell align="center">{interview.jobPost.title}</TableCell>
//                   <TableCell align="center">
//                     <Person sx={{ mr: 1, verticalAlign: "middle" }} />
//                     {interview.jobSeeker.firstName} {interview.jobSeeker.lastName}
//                   </TableCell>
//                   <TableCell align="center">
//                     <CalendarToday sx={{ mr: 1, verticalAlign: "middle" }} />
//                     {interview.interviewDate}
//                   </TableCell>
//                   <TableCell align="center">
//                     <Timer sx={{ mr: 1, verticalAlign: "middle" }} />
//                     {interview.interviewTime || "N/A"}
//                   </TableCell>
//                   <TableCell align="center">
//                     <LocationOn sx={{ mr: 1, verticalAlign: "middle" }} />
//                     {interview.interviewLocation}
//                   </TableCell>
//                   <TableCell align="center">{interview.interviewMode}</TableCell>
//                   <TableCell align="center">{interview.interviewer}</TableCell>
//                   <TableCell align="center">{interview.interviewDuration || "N/A"}</TableCell>
//                   <TableCell align="center">{interview.interviewMaterial || "N/A"}</TableCell>
//                   <TableCell align="center">
//                     {interview.interviewLink ? (
//                       <Link href={interview.interviewLink} target="_blank" rel="noopener" color="primary">
//                         View Details
//                       </Link>
//                     ) : (
//                       "N/A"
//                     )}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}

//       {!loading && !error && interviews.length === 0 && (
//         <Typography variant="body1" align="center" sx={{ mt: 4, color: "gray" }}>
//           No interviews found.
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default InterviewsByCompany;
