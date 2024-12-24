
import React, { useState } from 'react';
import Companydash from './Companydash';
import DashAsideCompany from './DashAsideCompany';

function CompanyDashboard() {
  // State to control which content to display on the right side
  const [selectedView, setSelectedView] = useState('dashboard'); // Default view is dashboard

  // Function to handle navbar item clicks
  const handleNavClick = (view) => {
    setSelectedView(view);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Side Div (Navbar) */}
      <div style={{ flex: 0.4, backgroundColor: '#91a39a', padding: '20px', textAlign: 'center' }}>
        <DashAsideCompany onNavClick={handleNavClick} />
      </div>

      <div style={{ flex: 2.3, backgroundColor: '#bbc5c7', padding: '20px' }}>
        {selectedView === 'dashboard' && <Companydash />}
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

export default CompanyDashboard;


