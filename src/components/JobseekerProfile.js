import React, { useState, useEffect } from "react";
import './JobseekerProfile.css'; // Importing external CSS

const JobSeekerProfile = () => {
  const [jobSeeker, setJobSeeker] = useState(null); // State for job seeker data
  const [skills, setSkills] = useState([]); // State for skills
  const [education, setEducation] = useState([]); // State for education
  const [projects, setProjects] = useState([]); // State for projects
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(true); // Loading state
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const jobSeekerId = sessionStorage.getItem("jobSeekerId"); // Get Job Seeker ID from session

  const [newSkill, setNewSkill] = useState({ skillName: "", skillLevel: "" });
  const [newEducation, setNewEducation] = useState({ institution: "", startDate: "", endDate: "", description: "" });
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  useEffect(() => {
    if (!jobSeekerId) {
      setError("Job Seeker ID not found in session.");
      setLoading(false);
      return;
    }

    const getJobSeekerById = async () => {
      try {
        const response = await fetch(`http://localhost:8086/jobSeeker/getjobseeker/${jobSeekerId}`);
        if (!response.ok) {
          const data = await response.json();
          setError(data.message || "Error fetching job seeker data.");
        } else {
          const data = await response.json();
          setJobSeeker(data);
          setSkills(data.skills || []);
          setEducation(data.education || []);
          setProjects(data.projects || []);
          setError(""); // Clear error if data is fetched successfully
        }
      } catch (error) {
        setError("Unable to fetch job seeker details. Please try again later.");
      } finally {
        setLoading(false); // Stop loading after API call
      }
    };

    getJobSeekerById();
  }, [jobSeekerId]);

  const handleAddSkill = async () => {
    try {
      const response = await fetch(`http://localhost:8086/jobSeeker/addSkill/${jobSeekerId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSkill),
      });
      if (response.ok) {
        const data = await response.json();
        setSkills([...skills, data]);
        setShowSkillForm(false);
      } else {
        setError("Error adding skill.");
      }
    } catch (error) {
      setError("Unable to add skill. Please try again later.");
    }
  };

  const handleAddEducation = async () => {
    try {
      const response = await fetch(`http://localhost:8086/jobSeeker/addEducation/${jobSeekerId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEducation),
      });
      if (response.ok) {
        const data = await response.json();
        setEducation([...education, data]);
        setShowEducationForm(false);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error adding education.");
      }
    } catch (error) {
      setError("Unable to add education. Please try again later.");
    }
  };
  

  const handleAddProject = async () => {
    try {
      const response = await fetch(`http://localhost:8086/jobSeeker/addProject/${jobSeekerId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      if (response.ok) {
        const data = await response.json();
        setProjects([...projects, data]);
        setShowProjectForm(false);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error adding project.");
      }
    } catch (error) {
      setError("Unable to add project. Please try again later.");
    }
  };
  

  // Render loading state, error messages, or job seeker profile
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        <strong>{error}</strong>
      </div>
    );
  }

  return (
    <div className="w3-light-grey">
      {/* Page Container */}
      <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
        {/* The Grid */}
        <div className="w3-row" style={{ display: "flex", gap: "20px" }}>
          {/* Left Column (Smaller for Profile Info) */}
          <div className="w3-col w3-padding-small w3-quarter">
            <div className="w3-white w3-text-grey w3-card-4 profile-card">
              <div className="w3-display-container">
                <img
                  src={`http://localhost:8086/uploads/profile_pictures/${jobSeeker.profilePicturePath}`}
                  alt="Profile"
                  className="profile-img"
                />
              </div>
              <div className="w3-container">
                <h2>{jobSeeker.firstName} {jobSeeker.lastName}</h2>
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.jobTitle}</p>
                <p><i className="fa fa-location-arrow fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.location}</p>
                <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.emailAddress}</p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.phoneNumber}</p>
                <hr />
                <SkillsSection skills={skills} />
                <button onClick={() => setShowSkillForm(true)} className="w3-button w3-teal">Add Skill</button>
              </div>
            </div>
          </div>

          {/* Right Column (Larger for Work Experience & Education) */}
          <div className="w3-col w3-padding-small w3-threequarter">
            <EducationSection education={education} />
            <button onClick={() => setShowEducationForm(true)} className="w3-button w3-teal">Add Education</button>
            <ProjectsSection projects={projects} />
            <button onClick={() => setShowProjectForm(true)} className="w3-button w3-teal">Add Project</button>
          </div>
        </div>
      </div>

      {/* Skill Form Popup */}
      {showSkillForm && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add Skill</h3>
            <label>Skill Name:</label>
            <input
              type="text"
              value={newSkill.skillName}
              onChange={(e) => setNewSkill({ ...newSkill, skillName: e.target.value })}
            />
            <label>Skill Level:</label>
            <input
              type="text"
              value={newSkill.skillLevel}
              onChange={(e) => setNewSkill({ ...newSkill, skillLevel: e.target.value })}
            />
            <button onClick={handleAddSkill}>Add Skill</button>
            <button onClick={() => setShowSkillForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Education Form Popup */}
      {showEducationForm && (
  <div className="popup">
    <div className="popup-content">
      <h3>Add Education</h3>
      <label>Institution:</label>
      <input
        type="text"
        value={newEducation.institution}
        onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
      />
      <label>Degree:</label>
      <input
        type="text"
        value={newEducation.degree}
        onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
      />
      <label>Start Date:</label>
      <input
        type="text"
        value={newEducation.startDate}
        onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
      />
      <label>End Date:</label>
      <input
        type="text"
        value={newEducation.endDate}
        onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
      />
      <button onClick={handleAddEducation}>Add Education</button>
      <button onClick={() => setShowEducationForm(false)}>Cancel</button>
    </div>
  </div>
)}
      {/* Project Form Popup */}
      {showProjectForm && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add Project</h3>
            <label>Project Title:</label>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
            <label>Description:</label>
            <input
              type="text"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
            <button onClick={handleAddProject}>Add Project</button>
            <button onClick={() => setShowProjectForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

const SkillsSection = ({ skills }) => {
  return (
    <>
      <p className="w3-large">
        <b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b>
      </p>
      {skills.length > 0 ? (
        skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.skillName} level={skill.skillLevel || "N/A"} />
        ))
      ) : (
        <p>No skills available</p>
      )}
    </>
  );
};

const SkillBar = ({ skill, level }) => {
  return (
    <>
      <p>{skill}</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: level === "Advanced" ? "100%" : "50%" }}>
          {level}
        </div>
      </div>
    </>
  );
};

const EducationSection = ({ education }) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom education-card">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        Education
      </h2>
      {education.length > 0 ? (
        education.map((edu, index) => (
          <EducationItem 
            key={index} 
            institution={edu.institution} 
            startDate={edu.startDate} 
            endDate={edu.endDate} 
            degree={edu.degree} 
          />
        ))
      ) : (
        <p>No education details available</p>
      )}
    </div>
  );
};

const EducationItem = ({ institution, startDate,endDate, degree }) => {
  return (
    <div className="education-item">
      <h5 className="w3-opacity"><b>{degree}</b></h5>
      <h5 className="w3-opacity"><b>institution: {institution}</b></h5>
      <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>startDate:{startDate}</h6>
      <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>endDate:{endDate}</h6>
    </div>
  );
}

const ProjectsSection = ({ projects }) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom project-card">
      <h2 className="w3-text-grey w3-padding-16">
        <i className="fa fa-tasks fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
        Projects
      </h2>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectItem 
            key={index}  
            title={project.title} 
            description={project.description} 
          />
        ))
      ) : (
        <p>No projects available</p>
      )}
    </div>
  );
};


const ProjectItem = ({ title, description }) => {
  return (
    <div className="project-item">
      <h5 className="w3-opacity"><b>{title}</b></h5>
      <p>{description}</p>
      <p>{title}</p>
    </div>
  );
};

export default JobSeekerProfile;






// import React, { useState, useEffect } from "react";
// import './JobseekerProfile.css'; // Importing external CSS

// const JobSeekerProfile = () => {
//   const [jobSeeker, setJobSeeker] = useState(null); // State for job seeker data
//   const [skills, setSkills] = useState([]); // State for skills
//   const [education, setEducation] = useState([]); // State for education
//   const [projects, setProjects] = useState([]); // State for projects
//   const [error, setError] = useState(""); // State for error messages
//   const [loading, setLoading] = useState(true); // Loading state
//   const [showSkillForm, setShowSkillForm] = useState(false);
//   const [showEducationForm, setShowEducationForm] = useState(false);
//   const [showProjectForm, setShowProjectForm] = useState(false);
//   const [showEditProfileForm, setShowEditProfileForm] = useState(false); // Show Edit Profile Form state

//   const jobSeekerId = sessionStorage.getItem("jobSeekerId"); // Get Job Seeker ID from session

//   const [newSkill, setNewSkill] = useState({ skillName: "", skillLevel: "" });
//   const [newEducation, setNewEducation] = useState({ institution: "", startDate: "", endDate: "", description: "" });
//   const [newProject, setNewProject] = useState({ title: "", description: "" });

//   // State to manage profile form fields
//   const [updatedJobSeeker, setUpdatedJobSeeker] = useState({
//     firstName: "",
//     lastName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     location: "",
//     jobTitle: "",
//     profilePicturePath: "",
//   });

//   useEffect(() => {
//     if (!jobSeekerId) {
//       setError("Job Seeker ID not found in session.");
//       setLoading(false);
//       return;
//     }

//     const getJobSeekerById = async () => {
//       try {
//         const response = await fetch(`http://localhost:8086/jobSeeker/getjobseeker/${jobSeekerId}`);
//         if (!response.ok) {
//           const data = await response.json();
//           setError(data.message || "Error fetching job seeker data.");
//         } else {
//           const data = await response.json();
//           setJobSeeker(data);
//           setSkills(data.skills || []);
//           setEducation(data.education || []);
//           setProjects(data.projects || []);
//           setUpdatedJobSeeker({
//             firstName: data.firstName,
//             lastName: data.lastName,
//             emailAddress: data.emailAddress,
//             phoneNumber: data.phoneNumber,
//             location: data.location,
//             jobTitle: data.jobTitle,
//             profilePicturePath: data.profilePicturePath,
//           });
//           setError(""); // Clear error if data is fetched successfully
//         }
//       } catch (error) {
//         setError("Unable to fetch job seeker details. Please try again later.");
//       } finally {
//         setLoading(false); // Stop loading after API call
//       }
//     };

//     getJobSeekerById();
//   }, [jobSeekerId]);

//   const handleAddSkill = async () => {
//     try {
//       const response = await fetch(`http://localhost:8086/jobSeeker/addSkill/${jobSeekerId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newSkill),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setSkills([...skills, data]);
//         setShowSkillForm(false);
//       } else {
//         setError("Error adding skill.");
//       }
//     } catch (error) {
//       setError("Unable to add skill. Please try again later.");
//     }
//   };

//   const handleAddEducation = async () => {
//     try {
//       const response = await fetch(`http://localhost:8086/jobSeeker/addEducation/${jobSeekerId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newEducation),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setEducation([...education, data]);
//         setShowEducationForm(false);
//       } else {
//         setError("Error adding education.");
//       }
//     } catch (error) {
//       setError("Unable to add education. Please try again later.");
//     }
//   };

//   const handleAddProject = async () => {
//     try {
//       const response = await fetch(`http://localhost:8086/jobSeeker/addProject/${jobSeekerId}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newProject),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setProjects([...projects, data]);
//         setShowProjectForm(false);
//       } else {
//         setError("Error adding project.");
//       }
//     } catch (error) {
//       setError("Unable to add project. Please try again later.");
//     }
//   };

//   // Update Job Seeker Profile Handler
//   const handleUpdateProfile = async () => {
//     try {
//       const response = await fetch(`http://localhost:8086/jobSeeker/updateProfile/${jobSeekerId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedJobSeeker),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setJobSeeker(data);
//         setShowEditProfileForm(false);
//       } else {
//         setError("Error updating profile.");
//       }
//     } catch (error) {
//       setError("Unable to update profile. Please try again later.");
//     }
//   };

//   // Render loading state, error messages, or job seeker profile
//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="error-message">
//         <strong>{error}</strong>
//       </div>
//     );
//   }

//   return (
//     <div className="w3-light-grey">
//       {/* Page Container */}
//       <div className="w3-content w3-margin-top" style={{ maxWidth: "1400px" }}>
//         {/* The Grid */}
//         <div className="w3-row" style={{ display: "flex", gap: "20px" }}>
//           {/* Left Column (Smaller for Profile Info) */}
//           <div className="w3-col w3-padding-small w3-quarter">
//             <div className="w3-white w3-text-grey w3-card-4 profile-card">
//               <div className="w3-display-container">
//                 <img
//                   src={`http://localhost:8086/uploads/profile_pictures/${jobSeeker.profilePicturePath}`}
//                   alt="Profile"
//                   className="profile-img"
//                 />
//               </div>
//               <div className="w3-container">
//                 <h2>{jobSeeker.firstName} {jobSeeker.lastName}</h2>
//                 <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.jobTitle}</p>
//                 <p><i className="fa fa-location-arrow fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.location}</p>
//                 <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.emailAddress}</p>
//                 <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{jobSeeker.phoneNumber}</p>
//                 <hr />
//                 <SkillsSection skills={skills} />
//                 <button onClick={() => setShowSkillForm(true)} className="w3-button w3-teal">Add Skill</button>
//                 <button onClick={() => setShowEditProfileForm(true)} className="w3-button w3-teal">Edit Profile</button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column (Larger for Work Experience & Education) */}
//           <div className="w3-col w3-padding-small w3-threequarter">
//             <EducationSection education={education} />
//             <button onClick={() => setShowEducationForm(true)} className="w3-button w3-teal">Add Education</button>
//             <ProjectsSection projects={projects} />
//             <button onClick={() => setShowProjectForm(true)} className="w3-button w3-teal">Add Project</button>
//           </div>
//         </div>
//       </div>

//       {/* Edit Profile Form Popup */}
//       {showEditProfileForm && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Edit Profile</h3>
//             <label>First Name:</label>
//             <input
//               type="text"
//               value={updatedJobSeeker.firstName}
//               onChange={(e) => setUpdatedJobSeeker({ ...updatedJobSeeker, firstName: e.target.value })}
//             />
//             <label>Last Name:</label>
//             <input
//               type="text"
//               value={updatedJobSeeker.lastName}
//               onChange={(e) => setUpdatedJobSeeker({ ...updatedJobSeeker, lastName: e.target.value })}
//             />
//             <label>Email Address:</label>
//             <input
//               type="email"
//               value={updatedJobSeeker.emailAddress}
//               onChange={(e) => setUpdatedJobSeeker({ ...updatedJobSeeker, emailAddress: e.target.value })}
//             />
//             <label>Phone Number:</label>
//             <input
//               type="text"
//               value={updatedJobSeeker.phoneNumber}
//               onChange={(e) => setUpdatedJobSeeker({ ...updatedJobSeeker, phoneNumber: e.target.value })}
//             />
//             <label>Location:</label>
//             <input
//               type="text"
//               value={updatedJobSeeker.location}
//               onChange={(e) => setUpdatedJobSeeker({ ...updatedJobSeeker, location: e.target.value })}
//             />
//             <label>Job Title:</label>
//             <input
//               type="text"
//               value={updatedJobSeeker.jobTitle}
//               onChange={(e) => setUpdatedJobSeeker({ ...updatedJobSeeker, jobTitle: e.target.value })}
//             />
//             <button onClick={handleUpdateProfile}>Save Changes</button>
//             <button onClick={() => setShowEditProfileForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const SkillsSection = ({ skills }) => (
//   <div>
//     <h3>Skills</h3>
//     <ul>
//       {skills.map((skill, index) => (
//         <li key={index}>{skill.skillName} - {skill.skillLevel}</li>
//       ))}
//     </ul>
//   </div>
// );

// const EducationSection = ({ education }) => (
//   <div>
//     <h3>Education</h3>
//     <ul>
//       {education.map((edu, index) => (
//         <li key={index}>
//           {edu.institution} ({edu.startDate} - {edu.endDate}): {edu.description}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const ProjectsSection = ({ projects }) => (
//   <div>
//     <h3>Projects</h3>
//     <ul>
//       {projects.map((project, index) => (
//         <li key={index}>{project.title}: {project.description}</li>
//       ))}
//     </ul>
//   </div>
// );

// export default JobSeekerProfile;


// import React, { useState, useEffect } from "react";
// import './JobseekerProfile.css'; // Import CSS file for styling

// const JobSeekerProfile = () => {
//     const [jobSeeker, setJobSeeker] = useState(null); // State to store job seeker data
//     const [error, setError] = useState(""); // State to store error messages
//     const [loading, setLoading] = useState(true); // State to manage loading state

//     // Get job seeker ID from sessionStorage
//     const jobSeekerId = sessionStorage.getItem("jobSeekerId");

//     // Fetch job seeker details based on jobSeekerId
//     useEffect(() => {
//         if (!jobSeekerId) {
//             setError("Job Seeker ID not found in session.");
//             setLoading(false);
//             return;
//         }

//         const getJobSeekerById = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8086/jobSeeker/getjobseeker/${jobSeekerId}`);

//                 if (!response.ok) {
//                     const data = await response.json();
//                     setError(data.message || "Error fetching job seeker data.");
//                 } else {
//                     const data = await response.json();
//                     setJobSeeker(data);
//                     setError(""); // Reset error if data is found
//                 }
//             } catch (error) {
//                 setError("Unable to fetch job seeker details. Please try again later.");
//             } finally {
//                 setLoading(false); // Stop loading after the API call is complete
//             }
//         };

//         getJobSeekerById();
//     }, [jobSeekerId]); // Fetch data when the component mounts or jobSeekerId changes

//     // Render loading state, error messages, or job seeker profile
//     if (loading) {
//         return <div className="loading">Loading...</div>;
//     }

//     if (error) {
//         return (
//             <div className="error-message">
//                 <strong>{error}</strong>
//             </div>
//         );
//     }

//     return (
//         <div className="profile-container">
//             {jobSeeker && (
//                 <div className="profile-card">
//                     <h2 className="profile-title">Job Seeker Profile</h2>
//                     <div className="profile-header">
//                         <div className="profile-picture">
//                             <img
//                                 src={`http://localhost:8086/uploads/profile_pictures/${jobSeeker.profilePicturePath}`}
//                                 alt="Profile"
//                                 className="profile-img"
//                             />
//                         </div>
//                         <div className="profile-details">
//                             <ul className="profile-list">
//                                 <li><strong>ID:</strong> {jobSeeker.jobSeekerId}</li>
//                                 <li><strong>First Name:</strong> {jobSeeker.firstName}</li>
//                                 <li><strong>Last Name:</strong> {jobSeeker.lastName}</li>
//                                 <li><strong>Email Address:</strong> {jobSeeker.emailAddress}</li>
//                                 <li><strong>Phone Number:</strong> {jobSeeker.phoneNumber}</li>
//                                 <li><strong>Location:</strong> {jobSeeker.location}</li>
//                                 <li><strong>Status:</strong> {jobSeeker.status}</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="profile-footer">
//                         <div className="resume-section">
//                             <strong>Resume:</strong>
//                             <a
//                                 href={`http://localhost:8086/uploads/resumes/${jobSeeker.resumePath}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="resume-link"
//                             >
//                                 View Resume
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default JobSeekerProfile;
