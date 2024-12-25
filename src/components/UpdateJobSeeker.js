import React, { useState } from 'react';
import axios from 'axios';

const UpdateJobSeeker = ({ jobSeekerId }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('emailAddress', emailAddress);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('location', location);
    if (resumeFile) formData.append('file', resumeFile);
    if (profilePictureFile) formData.append('profilePicture', profilePictureFile);

    try {
      const response = await axios.put(`http://localhost:8086/jobSeeker/update/${jobSeekerId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('Job Seeker updated successfully!');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'An error occurred while updating.');
      } else {
        setErrorMessage('An error occurred while updating.');
      }
    }
  };

  return (
    <div>
      <h2>Update Job Seeker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Resume:</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => setResumeFile(e.target.files[0])}
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePictureFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Update</button>
      </form>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
    </div>
  );
};

export default UpdateJobSeeker;
