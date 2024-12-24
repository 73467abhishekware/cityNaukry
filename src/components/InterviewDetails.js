import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, CircularProgress, Alert, Box } from "@mui/material";
import { useParams } from "react-router-dom";

const InterviewDetails = () => {
  const { id } = useParams();  // Extracts the interview ID from the URL
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const fetchInterviewDetails = async () => {
        setLoading(true);
        setError("");

        try {
          const response = await axios.get(
            `http://localhost:8086/jobSeeker/getInterviewDetails/${id}`
          );
          setInterview(response.data);
        } catch (err) {
          setError("An error occurred while fetching interview details.");
        } finally {
          setLoading(false);
        }
      };

      fetchInterviewDetails();
    }
  }, [id]);  // Dependency on id ensures re-fetching when id changes

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    );
  }

  if (!interview) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4, color: "gray" }}>
        No interview details found.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Interview Details
      </Typography>
      <Typography variant="body1" gutterBottom><strong>Job Title:</strong> {interview.jobPost.title}</Typography>
      <Typography variant="body1" gutterBottom><strong>Job Seeker:</strong> {interview.jobSeeker.firstName} {interview.jobSeeker.lastName}</Typography>
      <Typography variant="body1" gutterBottom><strong>Interview Date:</strong> {interview.interviewDate}</Typography>
      <Typography variant="body1" gutterBottom><strong>Location:</strong> {interview.interviewLocation}</Typography>
      <Typography variant="body1" gutterBottom><strong>Mode:</strong> {interview.interviewMode}</Typography>
      <Typography variant="body1" gutterBottom><strong>Interviewer:</strong> {interview.interviewer}</Typography>
      <Typography variant="body1" gutterBottom><strong>Materials:</strong> {interview.interviewMaterial}</Typography>
      <Typography variant="body1" gutterBottom><strong>Duration:</strong> {interview.interviewDuration} minutes</Typography>
    </Box>
  );
};

export default InterviewDetails;
