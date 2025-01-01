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
<<<<<<< HEAD
    navigate('/signin'); 
=======
    navigate('/signin'); // Redirect to your login page
>>>>>>> 56b4fad0bdd5606d24bd86c1aa0ddd3f7f8ddcd8
  };

  return (
    <a href="#!" onClick={handleLogout} className="sidebar-logout-btn">
      <FaPowerOff /> Logout
    </a>
  );
};

export default Logout;
