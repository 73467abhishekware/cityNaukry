
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaMapMarkerAlt, FaClock, FaMoneyBillAlt, FaBuilding } from 'react-icons/fa';
// import { MdDescription } from 'react-icons/md';
// import axios from 'axios';

// function CompanyJobDetail() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     responsibilities: '',
//     location: '',
//     salaryRange: '',
//     qualifications: '',
//     experienceRequired: '',
//     employmentType: '',
//   });
//   const [showApplicants, setShowApplicants] = useState(false); // State for managing applicants view

//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8086/jobPost/getPostById/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch job data");
//         }
//         const data = await response.json();
//         setJob(data);
//         setFormData({
//           title: data.title,
//           description: data.description,
//           responsibilities: data.responsibilities,
//           location: data.location,
//           salaryRange: data.salaryRange,
//           qualifications: data.qualifications,
//           experienceRequired: data.experienceRequired,
//           employmentType: data.employmentType,
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchJobData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8086/jobPost/updatePost/${id}`, formData);
//       if (response.status === 200) {
//         alert('Job post updated successfully');
//         setJob({ ...job, ...formData });
//         setIsEditing(false);
//       }
//     } catch (err) {
//       setError('Failed to update job post');
//     }
//   };

//   const handleShowApplicants = () => {
//     setShowApplicants(true); // Toggle to show applicants
//     // You can also navigate to a new page, e.g.:
//     // history.push(`/job/${id}/applicants`);
//   };

//   if (isLoading) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
//         <h3>Error: {error}</h3>
//       </div>
//     );
//   }

//   if (!job || !job.companyInformation) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
//         <h3>Job or company information not available</h3>
//       </div>
//     );
//   }

//   const logoUrl = `http://localhost:8086${job.companyInformation.logoPath}`;

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
//       <header style={{ backgroundColor: '#1e293b', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
//         <h1 style={{ marginBottom: '1rem' }}>Job Detail</h1>
//         <p style={{ fontSize: '1.1rem', margin: 0 }}>Explore detailed information about the job</p>
//       </header>

//       <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
//           <section style={{ flex: '2 1 60%', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
//               <img
//                 src={logoUrl}
//                 alt="Company Logo"
//                 style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }}
//               />
//               <div>
//                 <h2 style={{ margin: 0 }}>{job.title}</h2>
//                 <p style={{ margin: 0, color: '#4b5563' }}>
//                   <FaBuilding style={{ marginRight: '0.5rem', color: '#2563eb' }} /> {job.companyName}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//                 <MdDescription /> Job Description
//               </h3>
//               <p>{job.description}</p>
//               <h4 style={{ marginTop: '1.5rem' }}>Responsibilities</h4>
//               <p>{job.responsibilities}</p>
//               <h4 style={{ marginTop: '1.5rem' }}>Qualifications</h4>
//               <p>{job.qualifications}</p>
//             </div>
//           </section>

//           <aside style={{ flex: '1 1 35%', backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#2563eb' }}>Job Summary</h3>
//             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                 <FaMapMarkerAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Location: {job.location}
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                 <FaClock style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Employment Type: {job.employmentType}
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center' }}>
//                 <FaMoneyBillAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Salary: {job.salaryRange}
//               </li>
//             </ul>
//             {/* Edit and Show Applicants Buttons */}
//             <button
//               onClick={() => setIsEditing(true)}
//               style={{
//                 marginTop: '1rem',
//                 backgroundColor: '#2563eb',
//                 color: '#fff',
//                 padding: '0.75rem 1.5rem',
//                 border: 'none',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
//               onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
//             >
//               Edit Job Post
//             </button>

//             <button
//               onClick={handleShowApplicants}
//               style={{
//                 marginTop: '1rem',
//                 backgroundColor: '#34d399',
//                 color: '#fff',
//                 padding: '0.75rem 1.5rem',
//                 border: 'none',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseOver={(e) => e.target.style.backgroundColor = '#10b981'}
//               onMouseOut={(e) => e.target.style.backgroundColor = '#34d399'}
//             >
//               Show Applicants
//             </button>
//           </aside>
//         </div>
//       </main>

//       {/* Edit Job Form (Modal) */}
//       {isEditing && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: '#fff',
//               padding: '2rem',
//               borderRadius: '8px',
//               width: '80%',
//               maxWidth: '800px',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//               maxHeight: '80vh',
//               overflowY: 'auto',
//             }}
//           >
//             <h3>Edit Job Post</h3>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//               {/* Form Inputs */}
//               {/* Similar to existing inputs for title, description, etc. */}
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CompanyJobDetail;





// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaMapMarkerAlt, FaClock, FaMoneyBillAlt, FaBuilding } from 'react-icons/fa';
// import { MdDescription } from 'react-icons/md';
// import axios from 'axios';

// function CompanyJobDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();  // For navigation
//   const [job, setJob] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     responsibilities: '',
//     location: '',
//     salaryRange: '',
//     qualifications: '',
//     experienceRequired: '',
//     employmentType: '',
//   });

//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8086/jobPost/getPostById/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch job data');
//         }
//         const data = await response.json();
//         setJob(data);
//         setFormData({
//           title: data.title,
//           description: data.description,
//           responsibilities: data.responsibilities,
//           location: data.location,
//           salaryRange: data.salaryRange,
//           qualifications: data.qualifications,
//           experienceRequired: data.experienceRequired,
//           employmentType: data.employmentType,
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchJobData();
//   }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8086/jobPost/updatePost/${id}`, formData);
//       if (response.status === 200) {
//         alert('Job post updated successfully');
//         setJob({ ...job, ...formData });
//         setIsEditing(false);
//       }
//     } catch (err) {
//       setError('Failed to update job post');
//     }
//   };

//   // Navigate to applicants page
//   const handleShowApplicants = () => {
//     navigate(`/job-applicants/${id}`);
//   };

//   if (isLoading) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
//         <h3>Error: {error}</h3>
//       </div>
//     );
//   }

//   if (!job || !job.companyInformation) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
//         <h3>Job or company information not available</h3>
//       </div>
//     );
//   }

//   const logoUrl = `http://localhost:8086${job.companyInformation.logoPath}`;

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
//       <header style={{ backgroundColor: '#1e293b', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
//         <h1 style={{ marginBottom: '1rem' }}>Job Detail</h1>
//         <p style={{ fontSize: '1.1rem', margin: 0 }}>Explore detailed information about the job</p>
//       </header>

//       <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
//           <section style={{ flex: '2 1 60%', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
//               <img
//                 src={logoUrl}
//                 alt="Company Logo"
//                 style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }}
//               />
//               <div>
//                 <h2 style={{ margin: 0 }}>{job.title}</h2>
//                 <p style={{ margin: 0, color: '#4b5563' }}>
//                   <FaBuilding style={{ marginRight: '0.5rem', color: '#2563eb' }} /> {job.companyName}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//                 <MdDescription /> Job Description
//               </h3>
//               <p>{job.description}</p>
//               <h4 style={{ marginTop: '1.5rem' }}>Responsibilities</h4>
//               <p>{job.responsibilities}</p>
//               <h4 style={{ marginTop: '1.5rem' }}>Qualifications</h4>
//               <p>{job.qualifications}</p>
//             </div>
//           </section>

//           <aside style={{ flex: '1 1 35%', backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#2563eb' }}>Job Summary</h3>
//             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                 <FaMapMarkerAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Location: {job.location}
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                 <FaClock style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Employment Type: {job.employmentType}
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center' }}>
//                 <FaMoneyBillAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Salary: {job.salaryRange}
//               </li>
//             </ul>
//             <button
//               onClick={() => setIsEditing(true)}
//               style={{
//                 marginTop: '1rem',
//                 backgroundColor: '#2563eb',
//                 color: '#fff',
//                 padding: '0.75rem 1.5rem',
//                 border: 'none',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
//               onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
//             >
//               Edit Job Post
//             </button>

//             <button
//               onClick={handleShowApplicants}  // Navigate to applicants page
//               style={{
//                 marginTop: '1rem',
//                 backgroundColor: '#34d399',
//                 color: '#fff',
//                 padding: '0.75rem 1.5rem',
//                 border: 'none',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseOver={(e) => e.target.style.backgroundColor = '#10b981'}
//               onMouseOut={(e) => e.target.style.backgroundColor = '#34d399'}
//             >
//               Show Applicants
//             </button>
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default CompanyJobDetail;





import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaMoneyBillAlt, FaBuilding } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import axios from 'axios';

function CompanyJobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit mode
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    responsibilities: '',
    location: '',
    salaryRange: '',
    qualifications: '',
    experienceRequired: '',
    employmentType: '',
  });

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://localhost:8086/jobPost/getPostById/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await response.json();
        setJob(data);
        setFormData({
          title: data.title,
          description: data.description,
          responsibilities: data.responsibilities,
          location: data.location,
          salaryRange: data.salaryRange,
          qualifications: data.qualifications,
          experienceRequired: data.experienceRequired,
          employmentType: data.employmentType,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobData();
  }, [id]);

  // Handle input change in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission to update the job post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8086/jobPost/updatePost/${id}`, formData);
      if (response.status === 200) {
        alert('Job post updated successfully');
        setJob({ ...job, ...formData });
        setIsEditing(false); // Exit edit mode after successful update
      }
    } catch (err) {
      setError('Failed to update job post');
    }
  };

    const handleShowApplicants = () => {
    navigate(`/job-applicants/${id}`);
  };

  // Show a loader while data is being fetched
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // Show an error message if fetching fails
  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
        <h3>Error: {error}</h3>
      </div>
    );
  }

  // Ensure `job` and `companyInformation` are defined
  if (!job || !job.companyInformation) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
        <h3>Job or company information not available</h3>
      </div>
    );
  }

  const logoUrl = `http://localhost:8086${job.companyInformation.logoPath}`;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* Header Section */}
      <header style={{ backgroundColor: '#1e293b', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '1rem' }}>Job Detail</h1>
        <p style={{ fontSize: '1.1rem', margin: 0 }}>Explore detailed information about the job</p>
      </header>

      {/* Job Detail Section */}
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {/* Job Details */}
          <section style={{ flex: '2 1 60%', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <img
                src={logoUrl}
                alt="Company Logo"
                style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <div>
                <h2 style={{ margin: 0 }}>{job.title}</h2>
                <p style={{ margin: 0, color: '#4b5563' }}>
                  <FaBuilding style={{ marginRight: '0.5rem', color: '#2563eb' }} /> {job.companyName}
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MdDescription /> Job Description
              </h3>
              <p>{job.description}</p>
              <h4 style={{ marginTop: '1.5rem' }}>Responsibilities</h4>
              <p>{job.responsibilities}</p>
              <h4 style={{ marginTop: '1.5rem' }}>Qualifications</h4>
              <p>{job.qualifications}</p>
            </div>
          </section>

          {/* Sidebar */}
          <aside style={{ flex: '1 1 35%', backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#2563eb' }}>Job Summary</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaMapMarkerAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
                Location: {job.location}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaClock style={{ marginRight: '0.75rem', color: '#2563eb' }} />
                Employment Type: {job.employmentType}
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaMoneyBillAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
                Salary: {job.salaryRange}
              </li>
            </ul>
            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(true)}
              style={{
                marginTop: '1rem',
                backgroundColor: '#2563eb',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Edit Job Post
            </button>
            <button
              onClick={handleShowApplicants}  // Navigate to applicants page
              style={{
                marginTop: '1rem',
                backgroundColor: '#34d399',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#10b981'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#34d399'}
            >
              Show Applicants
            </button>
          </aside>
        </div>
      </main>

      {/* Edit Job Form (Modal) */}
      {isEditing && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '800px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              maxHeight: '80vh',
              overflowY: 'auto', // Ensures the modal is scrollable
            }}
          >
            <h3>Edit Job Post</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    minHeight: '120px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Responsibilities</label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    minHeight: '120px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Salary Range</label>
                <input
                  type="text"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Qualifications</label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    minHeight: '120px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Experience Required</label>
                <input
                  type="text"
                  name="experienceRequired"
                  value={formData.experienceRequired}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontWeight: 'bold' }}>Employment Type</label>
                <input
                  type="text"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginTop: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem',
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  style={{
                    backgroundColor: '#f3f4f6',
                    color: '#333',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#e5e7eb'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyJobDetail;





// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaMapMarkerAlt, FaClock, FaMoneyBillAlt, FaBuilding } from 'react-icons/fa';
// import { MdDescription } from 'react-icons/md';
// import axios from 'axios';

// function CompanyJobDetail() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit mode
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     responsibilities: '',
//     location: '',
//     salaryRange: '',
//     qualifications: '',
//     experienceRequired: '',
//     employmentType: '',
//   });

//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8086/jobPost/getPostById/${id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch job data");
//         }
//         const data = await response.json();
//         setJob(data);
//         setFormData({
//           title: data.title,
//           description: data.description,
//           responsibilities: data.responsibilities,
//           location: data.location,
//           salaryRange: data.salaryRange,
//           qualifications: data.qualifications,
//           experienceRequired: data.experienceRequired,
//           employmentType: data.employmentType,
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchJobData();
//   }, [id]);

//   // Handle input change in the form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission to update the job post
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`http://localhost:8086/jobPost/updatePost/${id}`, formData);
//       if (response.status === 200) {
//         alert('Job post updated successfully');
//         setJob({ ...job, ...formData });
//         setIsEditing(false); // Exit edit mode after successful update
//       }
//     } catch (err) {
//       setError('Failed to update job post');
//     }
//   };

//   // Show a loader while data is being fetched
//   if (isLoading) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   // Show an error message if fetching fails
//   if (error) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
//         <h3>Error: {error}</h3>
//       </div>
//     );
//   }

//   // Ensure `job` and `companyInformation` are defined
//   if (!job || !job.companyInformation) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'red' }}>
//         <h3>Job or company information not available</h3>
//       </div>
//     );
//   }

//   const logoUrl = `http://localhost:8086${job.companyInformation.logoPath}`;

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
//       {/* Header Section */}
//       <header style={{ backgroundColor: '#1e293b', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
//         <h1 style={{ marginBottom: '1rem' }}>Job Detail</h1>
//         <p style={{ fontSize: '1.1rem', margin: 0 }}>Explore detailed information about the job</p>
//       </header>

//       {/* Job Detail Section */}
//       <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
//           {/* Job Details */}
//           <section style={{ flex: '2 1 60%', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
//               <img
//                 src={logoUrl}
//                 alt="Company Logo"
//                 style={{ borderRadius: '50%', width: '80px', height: '80px', objectFit: 'cover' }}
//               />
//               <div>
//                 <h2 style={{ margin: 0 }}>{job.title}</h2>
//                 <p style={{ margin: 0, color: '#4b5563' }}>
//                   <FaBuilding style={{ marginRight: '0.5rem', color: '#2563eb' }} /> {job.companyName}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//                 <MdDescription /> Job Description
//               </h3>
//               <p>{job.description}</p>
//               <h4 style={{ marginTop: '1.5rem' }}>Responsibilities</h4>
//               <p>{job.responsibilities}</p>
//               <h4 style={{ marginTop: '1.5rem' }}>Qualifications</h4>
//               <p>{job.qualifications}</p>
//             </div>
//           </section>

//           {/* Sidebar */}
//           <aside style={{ flex: '1 1 35%', backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#2563eb' }}>Job Summary</h3>
//             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                 <FaMapMarkerAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Location: {job.location}
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                 <FaClock style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Employment Type: {job.employmentType}
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center' }}>
//                 <FaMoneyBillAlt style={{ marginRight: '0.75rem', color: '#2563eb' }} />
//                 Salary: {job.salaryRange}
//               </li>
//             </ul>
//             {/* Edit Button */}
//             <button
//               onClick={() => setIsEditing(true)}
//               style={{
//                 marginTop: '1rem',
//                 backgroundColor: '#2563eb',
//                 color: '#fff',
//                 padding: '0.75rem 1.5rem',
//                 border: 'none',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//                 transition: 'background-color 0.3s ease',
//               }}
//               onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
//               onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
//             >
//               Edit Job Post
//             </button>
//           </aside>
//         </div>
//       </main>

//       {/* Edit Job Form (Modal) */}
//       {isEditing && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: '#fff',
//               padding: '2rem',
//               borderRadius: '8px',
//               width: '80%',
//               maxWidth: '800px',
//               boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//               maxHeight: '80vh',
//               overflowY: 'auto', // Ensures the modal is scrollable
//             }}
//           >
//             <h3>Edit Job Post</h3>
//             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                     minHeight: '120px',
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Responsibilities</label>
//                 <textarea
//                   name="responsibilities"
//                   value={formData.responsibilities}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                     minHeight: '120px',
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Salary Range</label>
//                 <input
//                   type="text"
//                   name="salaryRange"
//                   value={formData.salaryRange}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Qualifications</label>
//                 <textarea
//                   name="qualifications"
//                   value={formData.qualifications}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                     minHeight: '120px',
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Experience Required</label>
//                 <input
//                   type="text"
//                   name="experienceRequired"
//                   value={formData.experienceRequired}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                   }}
//                 />
//               </div>
//               <div style={{ marginBottom: '1rem' }}>
//                 <label style={{ fontWeight: 'bold' }}>Employment Type</label>
//                 <input
//                   type="text"
//                   name="employmentType"
//                   value={formData.employmentType}
//                   onChange={handleInputChange}
//                   required
//                   style={{
//                     width: '100%',
//                     padding: '0.75rem',
//                     marginTop: '0.5rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '4px',
//                     fontSize: '1rem',
//                   }}
//                 />
//               </div>

//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <button
//                   type="submit"
//                   style={{
//                     backgroundColor: '#2563eb',
//                     color: '#fff',
//                     padding: '0.75rem 1.5rem',
//                     border: 'none',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     fontSize: '1rem',
//                     transition: 'background-color 0.3s ease',
//                   }}
//                   onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
//                   onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
//                 >
//                   Save Changes
//                 </button>
//                 <button
//                   onClick={() => setIsEditing(false)}
//                   style={{
//                     backgroundColor: '#e5e7eb',
//                     color: '#333',
//                     padding: '0.75rem 1.5rem',
//                     border: 'none',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     fontSize: '1rem',
//                   }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CompanyJobDetail;
