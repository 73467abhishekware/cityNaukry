// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import { FaPowerOff } from 'react-icons/fa';

const Logout = () => {
  const navigate = useNavigate(); // Hook to navigate the user after logout

  const handleLogout = () => {
    alert("logging out");
    sessionStorage.clear(); // Clear the user data from sessionStorage
    sessionStorage.setItem("sessionActive", "false");
    navigate('/signin'); 
  };

  return (
    <a href="#!" onClick={handleLogout} className="sidebar-logout-btn">
      <FaPowerOff /> Logout
    </a>
  );
};

export default Logout;
