
import React, { useState } from 'react';
import JobseekerDashboard from './JobseekerDashboard';
import DashAsideNavbar from './DashAsideNavbar';

function Dashboard() {
 
 const jobseekerid = sessionStorage.getItem("jobSeekerId")
  const profilePath = sessionStorage.getItem("profilePicturePath")
 const status = sessionStorage.getItem("status")
console.log("id profile path and status fro sesson",jobseekerid,profilePath,status)
  const [selectedView, setSelectedView] = useState('dashboard'); // Default view is dashboard

  // Function to handle navbar item clicks
  const handleNavClick = (view) => {
    setSelectedView(view);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Side Div (Navbar) */}
      <div style={{ flex: 0.4, backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        {/* Logo and Navbar */}
        <DashAsideNavbar onNavClick={handleNavClick} />
      </div>

      {/* Right Side Div (Content Area) */}
      <div style={{ flex: 2.3, backgroundColor: '#ffffff', padding: '20px' }}>
        {selectedView === 'dashboard' && <JobseekerDashboard />}
        {/* Add other components here based on the selected view */}
        {/* {selectedView === 'MyProfile' && <JobseekerProfile />} */}
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '5px 0',
  width: '100%',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Dashboard;


