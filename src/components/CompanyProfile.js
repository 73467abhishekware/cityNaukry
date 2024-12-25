

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';  // Importing the React Edit Icon
import { Margin } from '@mui/icons-material';

const CompanyProfile = () => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({});
    const [logoFile, setLogoFile] = useState(null);
    const [updateMessage, setUpdateMessage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Fetch companyId from sessionStorage
    const companyId = sessionStorage.getItem('companyId');

    useEffect(() => {
        if (!companyId) {
            setError('Company ID not found in session storage.');
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        // Fetch the company data
        axios.get(`http://localhost:8086/company/getCompany/${companyId}`)
            .then(response => {
                setCompany(response.data);
                setFormData(response.data); // Pre-fill the form with existing company data
                setLoading(false);
            })
            .catch(err => {
                setError('There was an issue fetching the company data.');
                setLoading(false);
            });
    }, [companyId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setLogoFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key] !== null) {
                form.append(key, formData[key]);
            }
        });
        if (logoFile) {
            form.append('companyLogo', logoFile);
        }

        try {
            const response = await axios.put(`http://localhost:8086/company/update/${companyId}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUpdateMessage(response.data);
            // Refresh the company data after successful update
            const updatedCompany = await axios.get(`http://localhost:8086/company/getCompany/${companyId}`);
            setCompany(updatedCompany.data);
            setIsEditing(false); // Close the edit form after successful update
        } catch (err) {
            setUpdateMessage('Error updating company. Please try again.');
        }
    };

    // Toggle the edit form visibility
    const toggleEditForm = () => {
        setIsEditing(!isEditing);
    };

    if (loading) {
        return <div style={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div style={styles.error}>{error}</div>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.profileCard}>
                <div style={styles.gridContainer}>
                    {/* Left Column: Company Details */}
                    <div style={styles.leftColumn}>
                        {/* Company Logo and Name */}
                        <div style={styles.logoSection}>
                            <img
                                src={`http://localhost:8086${company.companyLogoPath}`}
                                alt={company.companyName}
                                style={styles.logo}
                            />
                            <h2 style={styles.companyName}>{company.companyName}</h2>
                            <p style={styles.industryText}>{company.industryType} | {company.companySize}</p>
                        </div>

                        {/* Company Description */}
                        <div style={styles.detailsSection}>
                            <h3 style={styles.sectionTitle}>Company Description</h3>
                            <p style={styles.sectionText}>{company.companyDescription}</p>
                        </div>

                        {/* Website and Email */}
                        <div style={styles.detailsSection}>
                            <p style={styles.sectionText}><strong>Website:</strong> <a href={company.companyWebsite} target="_blank" rel="noopener noreferrer" style={styles.link}>{company.companyWebsite}</a></p>
                            <p style={styles.sectionText}><strong>Email:</strong> {company.companyEmail}</p>
                        </div>

                        

                        {/* Edit Button */}
                        <button onClick={toggleEditForm} style={styles.editButton}>
                            <FaEdit style={styles.editIcon} /> {/* Add the Edit Icon here */}
                            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                        </button>
                    </div>

                    {/* Right Column: Job Posts */}
                  
                  {/* Contact Information */}
                  <div style={styles.contactSection}>
                            <h3 style={styles.sectionTitle}>Contact Information</h3>
                            <p style={styles.sectionText}><strong>Contact Person:</strong> {company.contactPerson}</p>
                            <p style={styles.sectionText}><strong>Designation:</strong> {company.contactPersonDesignation}</p>
                            <p style={styles.sectionText}><strong>Email:</strong> {company.contactEmail}</p>
                            <p style={styles.sectionText}><strong>Phone:</strong> {company.contactPhoneNumber}</p>
                            <p style={styles.sectionText}><strong>Address:</strong> {company.companyAddress}</p>
                        </div>

                    
                    {/* <div style={styles.rightColumn}>
                 
                        {company.jobPosts && company.jobPosts.length > 0 && (
                            <div style={styles.jobPostsSection}>
                                <h3 style={styles.sectionTitle}>Job Posts</h3>
                                <ul style={styles.jobList}>
                                    {company.jobPosts.map((job, index) => (
                                        <li key={index} style={styles.jobItem}>
                                            <h4 style={styles.jobTitle}>{job.title}</h4>
                                            <p style={styles.jobDescription}>{job.description}</p>
                                            <p><strong>Location:</strong> {job.location}</p>
                                            <p><strong>Salary Range:</strong> {job.salaryRange}</p>
                                            <p><strong>Qualifications:</strong> {job.qualifications}</p>
                                            <p><strong>Experience Required:</strong> {job.experienceRequired} years</p>
                                            <p><strong>Employment Type:</strong> {job.employmentType}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div> */}
                </div>

                {/* Edit Form Modal */}
                {isEditing && (
                    <>
                        <div style={styles.overlay} onClick={toggleEditForm}></div> {/* Close the modal when clicking outside */}
                        <form onSubmit={handleSubmit} style={styles.modal}>
                            <button type="button" onClick={toggleEditForm} style={styles.closeButton}>
                                &times;
                            </button>

                            <div style={styles.formGroup}>
                                <label htmlFor="companyName">Company Name</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName || ''}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="industryType">Industry Type</label>
                                <input
                                    type="text"
                                    id="industryType"
                                    name="industryType"
                                    value={formData.industryType || ''}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="companySize">Company Size</label>
                                <input
                                    type="text"
                                    id="companySize"
                                    name="companySize"
                                    value={formData.companySize || ''}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="companyWebsite">Company Website</label>
                                <input
                                    type="text"
                                    id="companyWebsite"
                                    name="companyWebsite"
                                    value={formData.companyWebsite || ''}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="companyDescription">Description</label>
                                <textarea
                                    id="companyDescription"
                                    name="companyDescription"
                                    value={formData.companyDescription || ''}
                                    onChange={handleInputChange}
                                    style={styles.textarea}
                                />
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="companyLogo">Company Logo</label>
                                <input type="file" id="companyLogo" name="companyLogo" onChange={handleFileChange} />
                            </div>

                            <button type="submit" style={styles.submitButton}>Update Company</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: '50px 20px',
        backgroundColor: '#f7f7f7',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    profileCard: {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '1200px',
        borderRadius: '15px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        position: 'relative', 
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    rightColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    logoSection: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    logo: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        border: '5px solid #f0f0f0',
    },
    companyName: {
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    industryText: {
        fontSize: '1.2rem',
        color: '#777',
    },
    detailsSection: {
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    sectionText: {
        fontSize: '1rem',
        color: '#555',
    },
    contactSection: {
        marginBottom: '20px',
        marginTop:'250px',
       paddingLeft:'50px'
    },
    editButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
    },
    editIcon: {
        marginRight: '8px',  // Add some space between the icon and text
    },
    jobPostsSection: {
        marginTop: '30px',
    },
    jobList: {
        listStyleType: 'none',
        paddingLeft: 0,
    },
    jobItem: {
        marginBottom: '20px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '20px',
    },
    jobTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    jobDescription: {
        color: '#555',
    },
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        width: '80%',
        maxWidth: '600px',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
    closeButton: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '24px',
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    },
    formGroup: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        height: '150px',
        resize: 'none',
    },
    submitButton: {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '12px 30px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
    },
    link: {
        color: '#007BFF',
        textDecoration: 'none',
    },
    loading: {
        fontSize: '1.5rem',
        color: '#333',
        textAlign: 'center',
    },
    error: {
        fontSize: '1.5rem',
        color: '#ff0000',
        textAlign: 'center',
    },
};

export default CompanyProfile;




























//  this is working finee
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CompanyProfile = () => {
//     const [company, setCompany] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [formData, setFormData] = useState({});
//     const [logoFile, setLogoFile] = useState(null);
//     const [updateMessage, setUpdateMessage] = useState(null);
//     const [isEditing, setIsEditing] = useState(false);

//     // Fetch companyId from sessionStorage
//     const companyId = sessionStorage.getItem('companyId');

//     useEffect(() => {
//         if (!companyId) {
//             setError('Company ID not found in session storage.');
//             setLoading(false);
//             return;
//         }

//         setLoading(true);
//         setError(null);

//         // Fetch the company data
//         axios.get(`http://localhost:8086/company/getCompany/${companyId}`)
//             .then(response => {
//                 setCompany(response.data);
//                 setFormData(response.data); // Pre-fill the form with existing company data
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError('There was an issue fetching the company data.');
//                 setLoading(false);
//             });
//     }, [companyId]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setLogoFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const form = new FormData();
//         Object.keys(formData).forEach((key) => {
//             if (formData[key] !== null) {
//                 form.append(key, formData[key]);
//             }
//         });
//         if (logoFile) {
//             form.append('companyLogo', logoFile);
//         }

//         try {
//             const response = await axios.put(`http://localhost:8086/company/update/${companyId}`, form, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setUpdateMessage(response.data);
//             // Refresh the company data after successful update
//             const updatedCompany = await axios.get(`http://localhost:8086/company/getCompany/${companyId}`);
//             setCompany(updatedCompany.data);
//             setIsEditing(false); // Close the edit form after successful update
//         } catch (err) {
//             setUpdateMessage('Error updating company. Please try again.');
//         }
//     };

//     // Toggle the edit form visibility
//     const toggleEditForm = () => {
//         setIsEditing(!isEditing);
//     };

//     if (loading) {
//         return <div style={styles.loading}>Loading...</div>;
//     }

//     if (error) {
//         return <div style={styles.error}>{error}</div>;
//     }

//     return (
//         <div style={styles.container}>
//             <div style={styles.profileCard}>
//                 <div style={styles.gridContainer}>
//                     {/* Left Column: Company Details */}
//                     <div style={styles.leftColumn}>
//                         {/* Company Logo and Name */}
//                         <div style={styles.logoSection}>
//                             <img src={`http://localhost:8086${company.companyLogoPath}`} alt={company.companyName} style={styles.logo} />
//                             <h2 style={styles.companyName}>{company.companyName}</h2>
//                             <p style={styles.industryText}>{company.industryType} | {company.companySize}</p>
//                         </div>

//                         {/* Company Description */}
//                         <div style={styles.detailsSection}>
//                             <h3 style={styles.sectionTitle}>Company Description</h3>
//                             <p style={styles.sectionText}>{company.companyDescription}</p>
//                         </div>

//                         {/* Website and Email */}
//                         <div style={styles.detailsSection}>
//                             <p style={styles.sectionText}><strong>Website:</strong> <a href={company.companyWebsite} target="_blank" rel="noopener noreferrer" style={styles.link}>{company.companyWebsite}</a></p>
//                             <p style={styles.sectionText}><strong>Email:</strong> {company.companyEmail}</p>
//                         </div>

//                         {/* Contact Information */}
//                         <div style={styles.contactSection}>
//                             <h3 style={styles.sectionTitle}>Contact Information</h3>
//                             <p style={styles.sectionText}><strong>Contact Person:</strong> {company.contactPerson}</p>
//                             <p style={styles.sectionText}><strong>Designation:</strong> {company.contactPersonDesignation}</p>
//                             <p style={styles.sectionText}><strong>Email:</strong> {company.contactEmail}</p>
//                             <p style={styles.sectionText}><strong>Phone:</strong> {company.contactPhoneNumber}</p>
//                             <p style={styles.sectionText}><strong>Address:</strong> {company.companyAddress}</p>
//                         </div>

//                         {/* Edit Button */}
//                         <button onClick={toggleEditForm} style={styles.editButton}>
//                             {isEditing ? 'Cancel Edit' : 'Edit Profile'}
//                         </button>
//                     </div>

//                     {/* Right Column: Job Posts */}
//                     <div style={styles.rightColumn}>
//                         {/* Job Posts */}
//                         {company.jobPosts && company.jobPosts.length > 0 && (
//                             <div style={styles.jobPostsSection}>
//                                 <h3 style={styles.sectionTitle}>Job Posts</h3>
//                                 <ul style={styles.jobList}>
//                                     {company.jobPosts.map((job, index) => (
//                                         <li key={index} style={styles.jobItem}>
//                                             <h4 style={styles.jobTitle}>{job.title}</h4>
//                                             <p style={styles.jobDescription}>{job.description}</p>
//                                             <p><strong>Location:</strong> {job.location}</p>
//                                             <p><strong>Salary Range:</strong> {job.salaryRange}</p>
//                                             <p><strong>Qualifications:</strong> {job.qualifications}</p>
//                                             <p><strong>Experience Required:</strong> {job.experienceRequired} years</p>
//                                             <p><strong>Employment Type:</strong> {job.employmentType}</p>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {/* Edit Form */}
//                 {isEditing && (
//                     <form onSubmit={handleSubmit} style={styles.form}>
//                         <div style={styles.formGroup}>
//                             <label htmlFor="companyName">Company Name</label>
//                             <input
//                                 type="text"
//                                 id="companyName"
//                                 name="companyName"
//                                 value={formData.companyName || ''}
//                                 onChange={handleInputChange}
//                                 style={styles.input}
//                             />
//                         </div>

//                         <div style={styles.formGroup}>
//                             <label htmlFor="industryType">Industry Type</label>
//                             <input
//                                 type="text"
//                                 id="industryType"
//                                 name="industryType"
//                                 value={formData.industryType || ''}
//                                 onChange={handleInputChange}
//                                 style={styles.input}
//                             />
//                         </div>

//                         <div style={styles.formGroup}>
//                             <label htmlFor="companySize">Company Size</label>
//                             <input
//                                 type="text"
//                                 id="companySize"
//                                 name="companySize"
//                                 value={formData.companySize || ''}
//                                 onChange={handleInputChange}
//                                 style={styles.input}
//                             />
//                         </div>

//                         <div style={styles.formGroup}>
//                             <label htmlFor="companyWebsite">Company Website</label>
//                             <input
//                                 type="text"
//                                 id="companyWebsite"
//                                 name="companyWebsite"
//                                 value={formData.companyWebsite || ''}
//                                 onChange={handleInputChange}
//                                 style={styles.input}
//                             />
//                         </div>

//                         <div style={styles.formGroup}>
//                             <label htmlFor="companyDescription">Description</label>
//                             <textarea
//                                 id="companyDescription"
//                                 name="companyDescription"
//                                 value={formData.companyDescription || ''}
//                                 onChange={handleInputChange}
//                                 style={styles.textarea}
//                             />
//                         </div>

//                         <div style={styles.formGroup}>
//                             <label htmlFor="companyLogo">Company Logo</label>
//                             <input type="file" id="companyLogo" name="companyLogo" onChange={handleFileChange} />
//                         </div>

//                         <button type="submit" style={styles.submitButton}>Update Company</button>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '50px 20px',
//         backgroundColor: '#f7f7f7',
//         fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
//     },
//     profileCard: {
//         backgroundColor: 'white',
//         width: '100%',
//         maxWidth: '1200px',
//         borderRadius: '15px',
//         boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
//         padding: '40px',
//     },
//     gridContainer: {
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         gap: '40px',
//     },
//     leftColumn: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//     },
//     rightColumn: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//     },
//     logoSection: {
//         textAlign: 'center',
//         marginBottom: '30px',
//     },
//     logo: {
//         width: '150px',
//         height: '150px',
//         borderRadius: '50%',
//         objectFit: 'cover',
//         marginBottom: '20px',
//         border: '5px solid #f0f0f0',
//     },
//     companyName: {
//         fontSize: '36px',
//         fontWeight: '600',
//         color: '#333',
//         margin: 0,
//     },
//     industryText: {
//         fontSize: '18px',
//         color: '#888',
//     },
//     detailsSection: {
//         width: '100%',
//         marginBottom: '30px',
//     },
//     sectionTitle: {
//         fontSize: '26px',
//         fontWeight: '600',
//         color: '#333',
//         marginBottom: '15px',
//     },
//     sectionText: {
//         fontSize: '16px',
//         lineHeight: '1.8',
//         color: '#555',
//     },
//     contactSection: {
//         width: '100%',
//         borderTop: '1px solid #ddd',
//         paddingTop: '20px',
//         marginTop: '20px',
//     },
//     jobPostsSection: {
//         width: '100%',
//         marginTop: '20px',
//     },
//     jobList: {
//         listStyleType: 'none',
//         padding: 0,
//     },
//     jobItem: {
//         backgroundColor: '#f9f9f9',
//         padding: '20px',
//         borderRadius: '10px',
//         marginBottom: '20px',
//         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     },
//     jobItemHover: {
//         transform: 'scale(1.03)',
//         boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
//     },
//     jobTitle: {
//         fontSize: '22px',
//         fontWeight: '600',
//         color: '#333',
//     },
//     jobDescription: {
//         fontSize: '15px',
//         color: '#555',
//         marginBottom: '10px',
//     },
//     link: {
//         color: '#1E90FF',
//         textDecoration: 'none',
//         transition: 'color 0.3s ease',
//     },
//     editButton: {
//         padding: '10px 20px',
//         backgroundColor: '#007bff',
//         color: 'white',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         marginTop: '20px',
//     },
//     submitButton: {
//         padding: '10px 20px',
//         backgroundColor: '#007bff',
//         color: 'white',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//     },
//     loading: {
//         textAlign: 'center',
//         fontSize: '20px',
//         color: '#888',
//     },
//     error: {
//         textAlign: 'center',
//         fontSize: '20px',
//         color: '#d9534f',
//     },
//     form: {
//         marginTop: '20px',
//     },
//     formGroup: {
//         marginBottom: '20px',
//     },
//     input: {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//     },
//     textarea: {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//         minHeight: '100px',
//     },
// };

// export default CompanyProfile;









// //this is working update form
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CompanyProfile = () => {
//     const [company, setCompany] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [formData, setFormData] = useState({});
//     const [logoFile, setLogoFile] = useState(null);
//     const [updateMessage, setUpdateMessage] = useState(null);

//     // Fetch companyId from sessionStorage
//     const companyId = sessionStorage.getItem('companyId');

//     useEffect(() => {
//         if (!companyId) {
//             setError('Company ID not found in session storage.');
//             setLoading(false);
//             return;
//         }

//         setLoading(true);
//         setError(null);

//         // Fetch the company data
//         axios.get(`http://localhost:8086/company/getCompany/${companyId}`)
//             .then(response => {
//                 setCompany(response.data);
//                 setFormData(response.data); // Pre-fill the form with existing company data
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError('There was an issue fetching the company data.');
//                 setLoading(false);
//             });
//     }, [companyId]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setLogoFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const form = new FormData();
//         Object.keys(formData).forEach((key) => {
//             if (formData[key] !== null) {
//                 form.append(key, formData[key]);
//             }
//         });
//         if (logoFile) {
//             form.append('companyLogo', logoFile);
//         }

//         try {
//             const response = await axios.put(`http://localhost:8086/company/update/${companyId}`, form, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setUpdateMessage(response.data);
//             // Refresh the company data after successful update
//             const updatedCompany = await axios.get(`http://localhost:8086/company/getCompany/${companyId}`);
//             setCompany(updatedCompany.data);
//         } catch (err) {
//             setUpdateMessage('Error updating company. Please try again.');
//         }
//     };

//     if (loading) {
//         return <div style={styles.loading}>Loading...</div>;
//     }

//     if (error) {
//         return <div style={styles.error}>{error}</div>;
//     }

//     return (
//         <div style={styles.container}>
//             <div style={styles.profileCard}>
//                 <h1 style={styles.companyName}>Edit Company Profile</h1>

//                 {updateMessage && (
//                     <div style={updateMessage.includes('Error') ? styles.error : styles.success}>{updateMessage}</div>
//                 )}

//                 <form onSubmit={handleSubmit} style={styles.form}>
//                     <div style={styles.formGroup}>
//                         <label htmlFor="companyName">Company Name</label>
//                         <input
//                             type="text"
//                             id="companyName"
//                             name="companyName"
//                             value={formData.companyName || ''}
//                             onChange={handleInputChange}
//                             style={styles.input}
//                         />
//                     </div>

//                     <div style={styles.formGroup}>
//                         <label htmlFor="industryType">Industry Type</label>
//                         <input
//                             type="text"
//                             id="industryType"
//                             name="industryType"
//                             value={formData.industryType || ''}
//                             onChange={handleInputChange}
//                             style={styles.input}
//                         />
//                     </div>

//                     <div style={styles.formGroup}>
//                         <label htmlFor="companySize">Company Size</label>
//                         <input
//                             type="text"
//                             id="companySize"
//                             name="companySize"
//                             value={formData.companySize || ''}
//                             onChange={handleInputChange}
//                             style={styles.input}
//                         />
//                     </div>

//                     <div style={styles.formGroup}>
//                         <label htmlFor="companyWebsite">Company Website</label>
//                         <input
//                             type="text"
//                             id="companyWebsite"
//                             name="companyWebsite"
//                             value={formData.companyWebsite || ''}
//                             onChange={handleInputChange}
//                             style={styles.input}
//                         />
//                     </div>

//                     <div style={styles.formGroup}>
//                         <label htmlFor="companyDescription">Description</label>
//                         <textarea
//                             id="companyDescription"
//                             name="companyDescription"
//                             value={formData.companyDescription || ''}
//                             onChange={handleInputChange}
//                             style={styles.textarea}
//                         />
//                     </div>

//                     <div style={styles.formGroup}>
//                         <label htmlFor="companyLogo">Company Logo</label>
//                         <input type="file" id="companyLogo" name="companyLogo" onChange={handleFileChange} />
//                     </div>

//                     <button type="submit" style={styles.submitButton}>Update Company</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         padding: '50px',
//     },
//     profileCard: {
//         backgroundColor: '#fff',
//         borderRadius: '8px',
//         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//         padding: '30px',
//         width: '100%',
//         maxWidth: '600px',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     formGroup: {
//         marginBottom: '20px',
//     },
//     input: {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//     },
//     textarea: {
//         width: '100%',
//         padding: '10px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//         minHeight: '100px',
//     },
//     submitButton: {
//         padding: '10px 20px',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//     },
//     loading: {
//         textAlign: 'center',
//     },
//     error: {
//         color: 'red',
//         marginBottom: '20px',
//     },
//     success: {
//         color: 'green',
//         marginBottom: '20px',
//     },
// };

// export default CompanyProfile;
