// import React, { useState } from 'react';
// import axios from 'axios';

// const DeleteCompany = () => {
//     const [error, setError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState(null);

//     // Get companyId from sessionStorage
//     const companyId = sessionStorage.getItem('companyId'); // Ensure companyId is stored in sessionStorage

//     const deleteCompany = async () => {
//         if (!companyId) {
//             setError('No company ID found in session storage.');
//             return;
//         }

//         try {
//             // Send DELETE request to backend API
//             const response = await axios.delete(`http://localhost:8086/company/delete/${companyId}`);
//             if (response.status === 200) {
//                 setSuccessMessage('Company deleted successfully!');
//             } else {
//                 setError('Error deleting the company. Please try again.');
//             }
//         } catch (err) {
//             // Handle errors such as network issues
//             setError('An error occurred while deleting the company: ' + err.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Delete Company</h2>
//             <button onClick={deleteCompany}>Delete Company</button>

//             {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default DeleteCompany;

import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'; // Importing trash icon from react-icons

const DeleteCompany = () => {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // Get companyId from sessionStorage
    const companyId = sessionStorage.getItem('companyId'); // Ensure companyId is stored in sessionStorage

    const deleteCompany = async () => {
        // Check if companyId exists
        if (!companyId) {
            setError('No company ID found in session storage.');
            return;
        }

        // Ask the user for confirmation before proceeding with deletion
        const isConfirmed = window.confirm('Are you sure you want to delete your company account? This action cannot be undone.');

        if (!isConfirmed) {
            return; // If the user cancels, stop the deletion process
        }

        try {
            // Send DELETE request to backend API
            const response = await axios.delete(`http://localhost:8086/company/delete/${companyId}`);
            if (response.status === 200) {
                setSuccessMessage('Company deleted successfully!');
                navigate('/signin');
            } else {
                setError('Error deleting the company. Please try again.');
            }
        } catch (err) {
            // Handle errors such as network issues
            setError('An error occurred while deleting the company: ' + err.message);
        }
    };

    return (
        <div>
            {/* Add the trash icon button for delete */}
            <button onClick={deleteCompany} style={buttonStyle}>
                <FaTrash style={iconStyle} /> Delete Company
            </button>

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

// Styles for button and icon (optional)
const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f44336', // Red background color for delete button
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};

const iconStyle = {
    marginRight: '8px', // Adds space between the icon and the text
    fontSize: '20px', // Adjust the icon size
};

export default DeleteCompany;
