

import React, { useState } from "react";
import axios from "axios";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DeleteJobSeeker = ({ jobSeekerId }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // New state for confirmation dialog
 
  const navigate =useNavigate();
  // Function to handle the delete action
  const handleDelete = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Make DELETE request to the backend API
      const response = await axios.delete(`http://localhost:8086/jobSeeker/delete/${jobSeekerId}`);

      if (response.status === 200) {
        setSuccessMessage("Job seeker deleted successfully.");
        navigate("/signin")
      }
    } catch (error) {
      if (error.response) {
        // If the error comes from the server, handle it
        setErrorMessage(error.response.data.message || "An error occurred");
      } else {
        // Handle other errors (e.g., network errors)
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel confirmation
  const handleCancel = () => {
    setShowConfirmation(false); // Close confirmation prompt
  };

  return (
    <div>
      
      {/* If confirmation is shown, ask for confirmation */}
      {showConfirmation ? (
        <div>
          <p>Are you sure you want to delete your profile?</p>
          <button onClick={handleDelete} disabled={loading}>
            {loading ? "Deleting..." : "Yes, Delete"}
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        // Show only the delete button initially
        <button  onClick={() => setShowConfirmation(true)}>
          Delete<Delete/>
        </button>
      )}

      {successMessage && <div style={{ color: "green", marginTop: "10px" }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>}
    </div>
  );
};

export default DeleteJobSeeker;
