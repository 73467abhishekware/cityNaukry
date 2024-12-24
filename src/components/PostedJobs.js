
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const PostedJobs = () => {
//   const [jobs, setJobs] = useState([]); // State to store jobs
//   const [activeJobId, setActiveJobId] = useState(null); // State to track active job dropdown
//   const dropdownRef = useRef(null); // Ref to handle click outside dropdown

//   const rawCompanyLogoPath = sessionStorage.getItem("companyLogoPath");

//   // Sanitize and correct companyLogoPath
//   const companyLogoPath = rawCompanyLogoPath
//     ? rawCompanyLogoPath.replace(/&quot;/g, "").replace(/"/g, "").replace(/^\//, "") // Remove leading slash
//     : "";

//     const navigate = useNavigate();
//   // Fetch jobs from the API
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const companyId = sessionStorage.getItem("companyId");
//         const response = await axios.get(`http://localhost:8086/jobPost/getPostsByCompany`, {
//           params: { companyId }
//         });
//         setJobs(response.data);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//         alert('Failed to fetch jobs. Please try again later.');
//       }
//     };

//     fetchJobs();
//   }, []);

//   // Handle "View Post" action
//   const handleViewPost = (jobId) => {
//     alert(`Viewing details for job ID: ${jobId}`);
//     navigate(`/companyJobDetail/${jobId}`);
//     // Add navigation or modal display logic here
//   };

//   // Handle "Delete Post" action
//   const handleDeletePost = async (jobId) => {
//     if (window.confirm("Are you sure you want to delete this job post?")) {
//       try {
//         await axios.delete(`http://localhost:8086/jobPost/deletePost/${jobId}`);
//         alert('Job post deleted successfully!');
//         // Refresh job list
//         const companyId = sessionStorage.getItem("companyId");
//         const response = await axios.get(`http://localhost:8086/jobPost/getPostsByCompany`, {
//           params: { companyId }
//         });
//         setJobs(response.data);
//       } catch (error) {
//         console.error('Error deleting job:', error);
//         alert('Failed to delete the job post. Please try again.');
//       }
//     }
//   };

//   // Toggle the dropdown menu visibility
//   const toggleDropdown = (jobId) => {
//     setActiveJobId(activeJobId === jobId ? null : jobId); // Toggle visibility
//   };

//   // Close the dropdown if clicked outside
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setActiveJobId(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div style={{ backgroundColor: '#fff', borderRadius: '20px', marginTop: '0px', width: '100%', height: "100%" }} className="recent-job-tab">
//       <h4 className="dash-title-two" style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px' }}>Posted Jobs</h4>

//       <div className="wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//         {
//           jobs.length > 0 ? (
//             jobs.map((job) => (
//               <div key={job.jobPostId} className="job-item-list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                 <div>
//                   <img 
//                     src={companyLogoPath ? `http://localhost:8086/${companyLogoPath}` : "https://via.placeholder.com/50"}
//                     alt="company logo" 
//                     className="lazy-img logo" 
//                     style={{ width: '50px', height: '50px', borderRadius: '5px' }} 
//                   />
//                 </div>
//                 <div className="job-title" style={{ marginLeft: '15px' }}>
//                   <h6 className="mb-5" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
//                     <a href="#!" style={{ color: '#0d6efd', textDecoration: 'none' }}>{job.title}</a>
//                   </h6>
//                   <div className="meta" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
//                     <span>{job.employmentType}</span> . <span>{job.location}</span>
//                   </div>
//                 </div>

//                 {/* Icon Button for Dropdown */}
//                 <div style={{ position: 'relative' }}>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent click from closing the dropdown
//                       toggleDropdown(job.jobPostId);
//                     }}
//                     style={{
//                       background: 'none',
//                       border: 'none',
//                       cursor: 'pointer',
//                       fontSize: '1.5rem',
//                       color: '#6c757d'
//                     }}
//                     aria-haspopup="menu"
//                     aria-expanded={activeJobId === job.jobPostId}
//                   >
//                     &#x22EE; {/* Ellipsis icon */}
//                   </button>

//                   {/* Dropdown Menu */}
//                   {activeJobId === job.jobPostId && (
//                     <div ref={dropdownRef} style={{
//                       position: 'absolute',
//                       top: '100%', // Position below the button
//                       right: '0',
//                       backgroundColor: '#fff',
//                       border: '1px solid #ddd',
//                       borderRadius: '5px',
//                       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                       padding: '5px 0',
//                       zIndex: '10',
//                       width: '150px',
//                       fontSize: '1rem',
//                     }} role="menu">
//                       <div 
//                         onClick={() => handleViewPost(job.jobPostId)}
//                         style={{
//                           padding: '8px 15px', 
//                           cursor: 'pointer', 
//                           color: '#007bff', 
//                           transition: 'background-color 0.2s',
//                         }}
//                         onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f1f1'}
//                         onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
//                         role="menuitem"
//                       >
//                         View Post
//                       </div>
//                       <div 
//                         onClick={() => handleDeletePost(job.jobPostId)}
//                         style={{
//                           padding: '8px 15px', 
//                           cursor: 'pointer', 
//                           color: '#dc3545', 
//                           transition: 'background-color 0.2s',
//                         }}
//                         onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f1f1'}
//                         onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
//                         role="menuitem"
//                       >
//                         Delete Post
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p style={{ textAlign: 'center', color: '#6c757d', fontSize: '1rem' }}>No jobs posted yet.</p>
//           )
//         }
//       </div>
//     </div>
//   );
// };

// export default PostedJobs;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaEye } from 'react-icons/fa'; // Import Font Awesome icons

const PostedJobs = () => {
  const [jobs, setJobs] = useState([]); // State to store jobs
  const [activeJobId, setActiveJobId] = useState(null); // State to track active job dropdown
  const dropdownRef = useRef(null); // Ref to handle click outside dropdown

  const rawCompanyLogoPath = sessionStorage.getItem("companyLogoPath");

  // Sanitize and correct companyLogoPath
  const companyLogoPath = rawCompanyLogoPath
    ? rawCompanyLogoPath.replace(/&quot;/g, "").replace(/"/g, "").replace(/^\//, "") // Remove leading slash
    : "";

  const navigate = useNavigate();
  // Fetch jobs from the API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const companyId = sessionStorage.getItem("companyId");
        const response = await axios.get(`http://localhost:8086/jobPost/getPostsByCompany`, {
          params: { companyId }
        });
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        alert('Failed to fetch jobs. Please try again later.');
      }
    };

    fetchJobs();
  }, []);

  // Handle "View Post" action
  const handleViewPost = (jobId) => {
    alert(`Viewing details for job ID: ${jobId}`);
    navigate(`/companyJobDetail/${jobId}`);
    // Add navigation or modal display logic here
  };

  // Handle "Delete Post" action
  const handleDeletePost = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job post?")) {
      try {
        await axios.delete(`http://localhost:8086/jobPost/deletePost/${jobId}`);
        alert('Job post deleted successfully!');
        // Refresh job list
        const companyId = sessionStorage.getItem("companyId");
        const response = await axios.get(`http://localhost:8086/jobPost/getPostsByCompany`, {
          params: { companyId }
        });
        setJobs(response.data);
      } catch (error) {
        console.error('Error deleting job:', error);
        alert('Failed to delete the job post. Please try again.');
      }
    }
  };

  // Toggle the dropdown menu visibility
  const toggleDropdown = (jobId) => {
    setActiveJobId(activeJobId === jobId ? null : jobId); // Toggle visibility
  };

  // Close the dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveJobId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#f8f9fa', borderRadius: '20px', marginTop: '20px', width: '100%', height: "100%", padding: '20px' }} className="recent-job-tab">
      <h4 className="dash-title-two" style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', color: '#343a40' }}>Posted Jobs</h4>

      <div className="wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {
          jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.jobPostId} className="job-item-list" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease' }}>
                <div>
                  <img 
                    src={companyLogoPath ? `http://localhost:8086/${companyLogoPath}` : "https://via.placeholder.com/50"} 
                    alt="company logo" 
                    className="lazy-img logo" 
                    style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} 
                  />
                </div>
                <div className="job-title" style={{ marginLeft: '15px', flex: 1 }}>
                  <h6 className="mb-5" style={{ fontSize: '1.2rem', fontWeight: '500', color: '#343a40' }}>
                    <a href="#!" style={{ color: '#0d6efd', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#0056b3'} onMouseLeave={(e) => e.target.style.color = '#0d6efd'}>{job.title}</a>
                  </h6>
                  <div className="meta" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                    <span>{job.employmentType}</span> . <span>{job.location}</span>
                  </div>
                </div>

                {/* Icon Button for Dropdown */}
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click from closing the dropdown
                      toggleDropdown(job.jobPostId);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1.5rem',
                      color: '#6c757d',
                      transition: 'color 0.2s'
                    }}
                    aria-haspopup="menu"
                    aria-expanded={activeJobId === job.jobPostId}
                    onMouseEnter={(e) => e.target.style.color = '#007bff'}
                    onMouseLeave={(e) => e.target.style.color = '#6c757d'}
                  >
                    &#x22EE; {/* Ellipsis icon */}
                  </button>

                  {/* Dropdown Menu */}
                  {activeJobId === job.jobPostId && (
                    <div ref={dropdownRef} style={{
                      position: 'absolute',
                      top: '100%', // Position below the button
                      right: '0',
                      backgroundColor: '#ffffff',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      padding: '5px 0',
                      zIndex: '10',
                      width: '150px',
                      fontSize: '1rem',
                    }} role="menu">
                      <div 
                        onClick={() => handleViewPost(job.jobPostId)}
                        style={{
                          padding: '8px 15px', 
                          cursor: 'pointer', 
                          color: '#007bff', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '10px',
                          transition: 'background-color 0.2s',
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f1f1'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        role="menuitem"
                      >
                        <FaEye style={{ fontSize: '1.2rem' }} />
                        View Post
                      </div>
                      <div 
                        onClick={() => handleDeletePost(job.jobPostId)}
                        style={{
                          padding: '8px 15px', 
                          cursor: 'pointer', 
                          color: '#dc3545', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '10px',
                          transition: 'background-color 0.2s',
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f1f1f1'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        role="menuitem"
                      >
                        <FaTrashAlt style={{ fontSize: '1.2rem' }} />
                        Delete Post
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#6c757d', fontSize: '1rem' }}>No jobs posted yet.</p>
          )
        }
      </div>
    </div>
  );
};

export default PostedJobs;
