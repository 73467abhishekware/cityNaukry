// import React, { useState, useEffect } from "react";
// import './JobseekerProfile.css'; // Importing external CSS
// import UpdateJobSeeker from "./UpdateJobSeeker";

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

//   const jobSeekerId = sessionStorage.getItem("jobSeekerId"); // Get Job Seeker ID from session

//   const [newSkill, setNewSkill] = useState({ skillName: "", skillLevel: "" });
//   const [newEducation, setNewEducation] = useState({ institution: "", startDate: "", endDate: "", description: "" });
//   const [newProject, setNewProject] = useState({ title: "", description: "" });

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
//         const errorData = await response.json();
//         setError(errorData.message || "Error adding education.");
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
//         const errorData = await response.json();
//         setError(errorData.message || "Error adding project.");
//       }
//     } catch (error) {
//       setError("Unable to add project. Please try again later.");
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
//                 <div>
//                 <UpdateJobSeeker jobSeekerId={jobSeekerId} />
//                 </div>
//                 <SkillsSection skills={skills} />
//                 <button onClick={() => setShowSkillForm(true)} className="w3-button w3-teal">Add Skill</button>
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

//       {/* Skill Form Popup */}
//       {showSkillForm && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Add Skill</h3>
//             <label>Skill Name:</label>
//             <input
//               type="text"
//               value={newSkill.skillName}
//               onChange={(e) => setNewSkill({ ...newSkill, skillName: e.target.value })}
//             />
//             <label>Skill Level:</label>
//             <input
//               type="text"
//               value={newSkill.skillLevel}
//               onChange={(e) => setNewSkill({ ...newSkill, skillLevel: e.target.value })}
//             />
//             <button onClick={handleAddSkill}>Add Skill</button>
//             <button onClick={() => setShowSkillForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {/* Education Form Popup */}
//       {showEducationForm && (
//   <div className="popup">
//     <div className="popup-content">
//       <h3>Add Education</h3>
//       <label>Institution:</label>
//       <input
//         type="text"
//         value={newEducation.institution}
//         onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
//       />
//       <label>Degree:</label>
//       <input
//         type="text"
//         value={newEducation.degree}
//         onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
//       />
//       <label>Start Date:</label>
//       <input
//         type="text"
//         value={newEducation.startDate}
//         onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
//       />
//       <label>End Date:</label>
//       <input
//         type="text"
//         value={newEducation.endDate}
//         onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
//       />
//       <button onClick={handleAddEducation}>Add Education</button>
//       <button onClick={() => setShowEducationForm(false)}>Cancel</button>
//     </div>
//   </div>
// )}
//       {/* Project Form Popup */}
//       {showProjectForm && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Add Project</h3>
//             <label>Project Title:</label>
//             <input
//               type="text"
//               value={newProject.title}
//               onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
//             />
//             <label>Description:</label>
//             <input
//               type="text"
//               value={newProject.description}
//               onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
//             />
//             <button onClick={handleAddProject}>Add Project</button>
//             <button onClick={() => setShowProjectForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const SkillsSection = ({ skills }) => {
//   return (
//     <>
//       <p className="w3-large">
//         <b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b>
//       </p>
//       {skills.length > 0 ? (
//         skills.map((skill, index) => (
//           <SkillBar key={index} skill={skill.skillName} level={skill.skillLevel || "N/A"} />
//         ))
//       ) : (
//         <p>No skills available</p>
//       )}
//     </>
//   );
// };

// const SkillBar = ({ skill, level }) => {
//   return (
//     <>
//       <p>{skill}</p>
//       <div className="w3-light-grey w3-round-xlarge w3-small">
//         <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: level === "Advanced" ? "100%" : "50%" }}>
//           {level}
//         </div>
//       </div>
//     </>
//   );
// };

// const EducationSection = ({ education }) => {
//   return (
//     <div className="w3-container w3-card w3-white w3-margin-bottom education-card">
//       <h2 className="w3-text-grey w3-padding-16">
//         <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
//         Education
//       </h2>
//       {education.length > 0 ? (
//         education.map((edu, index) => (
//           <EducationItem 
//             key={index} 
//             institution={edu.institution} 
//             startDate={edu.startDate} 
//             endDate={edu.endDate} 
//             degree={edu.degree} 
//           />
//         ))
//       ) : (
//         <p>No education details available</p>
//       )}
//     </div>
//   );
// };

// const EducationItem = ({ institution, startDate,endDate, degree }) => {
//   return (
//     <div className="education-item">
//       <h5 className="w3-opacity"><b>{degree}</b></h5>
//       <h5 className="w3-opacity"><b>institution: {institution}</b></h5>
//       <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>startDate:{startDate}</h6>
//       <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>endDate:{endDate}</h6>
//     </div>
//   );
// }

// const ProjectsSection = ({ projects }) => {
//   return (
//     <div className="w3-container w3-card w3-white w3-margin-bottom project-card">
//       <h2 className="w3-text-grey w3-padding-16">
//         <i className="fa fa-tasks fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>
//         Projects
//       </h2>
//       {projects.length > 0 ? (
//         projects.map((project, index) => (
//           <ProjectItem 
//             key={index}  
//             title={project.title} 
//             description={project.description} 
//           />
//         ))
//       ) : (
//         <p>No projects available</p>
//       )}
//     </div>
//   );
// };


// const ProjectItem = ({ title, description }) => {
//   return (
//     <div className="project-item">
//       <h5 className="w3-opacity"><b>{title}</b></h5>
//       <p>{description}</p>
//       <p>{title}</p>
//     </div>
//   );
// };

// export default JobSeekerProfile;

import React, { useState, useEffect } from "react";
import './JobseekerProfile.css'; // Importing external CSS
import DeleteJobSeeker from "./DeleteJobSeeker";

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
  const [showEditForm, setShowEditForm] = useState(false); // New state for edit popup form

  const jobSeekerId = sessionStorage.getItem("jobSeekerId"); // Get Job Seeker ID from session

  const [newSkill, setNewSkill] = useState({ skillName: "", skillLevel: "" });
  const [newEducation, setNewEducation] = useState({ institution: "", startDate: "", endDate: "", description: "" });
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  // State for editing the profile
  const [editProfile, setEditProfile] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    emailAddress: "",
    phoneNumber: "",
    location: "",
    resume: null,  // State for resume file
    profilePicture: null, // State for profile picture file
  });

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
          setEditProfile({
            firstName: data.firstName,
            lastName: data.lastName,
            jobTitle: data.jobTitle,
            emailAddress: data.emailAddress,
            phoneNumber: data.phoneNumber,
            location: data.location,
            resume: data.resume,
            profilePicture: data.profilePicturePath, // Assuming the image file path
          });
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

  const handleEditProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("firstName", editProfile.firstName || ""); // Ensure it defaults to an empty string if undefined
      formData.append("lastName", editProfile.lastName || "");
      formData.append("jobTitle", editProfile.jobTitle || "");
      formData.append("emailAddress", editProfile.emailAddress || "");
      formData.append("phoneNumber", editProfile.phoneNumber || "");
      formData.append("location", editProfile.location || "");
      
      // If there's a new resume or profile picture, append them to the form data
      if (editProfile.resume) {
        formData.append("resume", editProfile.resume);
      }

      if (editProfile.profilePicture) {
        formData.append("profilePicture", editProfile.profilePicture);
      }

      const response = await fetch(`http://localhost:8086/jobSeeker/update/${jobSeekerId}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setJobSeeker(data);
        setShowEditForm(false); // Close the edit form
      } else {
        setError("Error updating profile.");
      }
    } catch (error) {
      setError("Unable to update profile. Please try again later.");
    }
  };

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
                <button onClick={() => setShowEditForm(true)} className="w3-button w3-teal">Edit</button>
                <DeleteJobSeeker jobSeekerId={jobSeekerId} />
                <hr />
               
              </div>
            </div>
          </div>

          {/* Right Column (Larger for Work Experience & Education) */}
          <div className="w3-col w3-padding-small w3-threequarter">
            <EducationSection education={education} />
            <button onClick={() => setShowEducationForm(true)} className="w3-button w3-teal">Add Education</button>
            <ProjectsSection projects={projects} />
            <button onClick={() => setShowProjectForm(true)} className="w3-button w3-teal">Add Project</button>
            <SkillsSection skills={skills} />
            <button onClick={() => setShowSkillForm(true)} className="w3-button w3-teal">Add Skill</button>
          </div>
        </div>
      </div>

      {/* Edit Profile Form Popup */}
      {showEditForm && (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit Profile</h3>
            <label>First Name:</label>
            <input
              type="text"
              value={editProfile.firstName}
              onChange={(e) => setEditProfile({ ...editProfile, firstName: e.target.value })}
            />
            <label>Last Name:</label>
            <input
              type="text"
              value={editProfile.lastName}
              onChange={(e) => setEditProfile({ ...editProfile, lastName: e.target.value })}
            />
            <label>Job Title:</label>
            <input
              type="text"
              value={editProfile.jobTitle}
              onChange={(e) => setEditProfile({ ...editProfile, jobTitle: e.target.value })}
            />
            <label>Email Address:</label>
            <input
              type="email"
              value={editProfile.emailAddress}
              onChange={(e) => setEditProfile({ ...editProfile, emailAddress: e.target.value })}
            />
            <label>Phone Number:</label>
            <input
              type="text"
              value={editProfile.phoneNumber}
              onChange={(e) => setEditProfile({ ...editProfile, phoneNumber: e.target.value })}
            />
            <label>Location:</label>
            <input
              type="text"
              value={editProfile.location}
              onChange={(e) => setEditProfile({ ...editProfile, location: e.target.value })}
            />
            <label>Resume:</label>
            <input
              type="file"
              onChange={(e) => setEditProfile({ ...editProfile, resume: e.target.files[0] })}
            />
            <label>Profile Picture:</label>
            <input
              type="file"
              onChange={(e) => setEditProfile({ ...editProfile, profilePicture: e.target.files[0] })}
            />
            <button onClick={handleEditProfile}>Save Changes</button>
            <button onClick={() => setShowEditForm(false)}>Cancel</button>
          </div>
        </div>
      )}

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
      <select
        value={newSkill.skillLevel}
        onChange={(e) => setNewSkill({ ...newSkill, skillLevel: e.target.value })}
      >
        <option value="">Select Skill Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>
      
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
        <b><i className="fa fa-cogs"></i> Skills</b>
      </p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.skillName} - {skill.skillLevel}
          </li>
        ))}
      </ul>
    </>
  );
};

const EducationSection = ({ education }) => {
  return (
    <>
      <p className="w3-large">
        <b><i className="fa fa-university"></i> Education</b>
      </p>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.institution} ({edu.startDate} - {edu.endDate}): {edu.degree}
          </li>
        ))}
      </ul>
    </>
  );
};

const ProjectsSection = ({ projects }) => {
  return (
    <>
      <p className="w3-large">
        <b><i className="fa fa-laptop"></i> Projects</b>
      </p>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.title}: {project.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobSeekerProfile;


// import React, { useState, useEffect } from "react";
// import './JobseekerProfile.css'; // Importing external CSS
// import DeleteJobSeeker from "./DeleteJobSeeker";

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
//   const [showEditForm, setShowEditForm] = useState(false); // New state for edit popup form

//   const jobSeekerId = sessionStorage.getItem("jobSeekerId"); // Get Job Seeker ID from session

//   const [newSkill, setNewSkill] = useState({ skillName: "", skillLevel: "" });
//   const [newEducation, setNewEducation] = useState({ institution: "", startDate: "", endDate: "", description: "" });
//   const [newProject, setNewProject] = useState({ title: "", description: "" });

//   // State for editing the profile
//   const [editProfile, setEditProfile] = useState({
//     firstName: "",
//     lastName: "",
//     jobTitle: "",
//     emailAddress: "",
//     phoneNumber: "",
//     location: "",
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
//           setEditProfile({
//             firstName: data.firstName,
//             lastName: data.lastName,
//             jobTitle: data.jobTitle,
//             emailAddress: data.emailAddress,
//             phoneNumber: data.phoneNumber,
//             location: data.location,
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

//   const handleEditProfile = async () => {
//     try {
//       const formData = new FormData();
      
//       formData.append("firstName", editProfile.firstName || ""); // Ensure it defaults to an empty string if undefined
//       formData.append("lastName", editProfile.lastName || "");
//       formData.append("jobTitle", editProfile.jobTitle || "");
//       formData.append("emailAddress", editProfile.emailAddress || "");
//       formData.append("phoneNumber", editProfile.phoneNumber || "");
//       formData.append("location", editProfile.location || "");
    
//       const response = await fetch(`http://localhost:8086/jobSeeker/update/${jobSeekerId}`, {
//         method: "PUT",
//         body: formData,
//       });
    
//       if (response.ok) {
//         const data = await response.json();
//         setJobSeeker(data);
//         setShowEditForm(false); // Close the edit form
//       } else {
//         setError("Error updating profile.");
//       }
//     } catch (error) {
//       setError("Unable to update profile. Please try again later.");
//     }
//   };

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
//         const errorData = await response.json();
//         setError(errorData.message || "Error adding education.");
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
//         const errorData = await response.json();
//         setError(errorData.message || "Error adding project.");
//       }
//     } catch (error) {
//       setError("Unable to add project. Please try again later.");
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
//                 <button onClick={() => setShowEditForm(true)} className="w3-button w3-teal">Edit</button>
//                 <DeleteJobSeeker jobSeekerId={jobSeekerId} />
//                 <hr />
//                 <SkillsSection skills={skills} />
//                 <button onClick={() => setShowSkillForm(true)} className="w3-button w3-teal">Add Skill</button>
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
//       {showEditForm && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Edit Profile</h3>
//             <label>First Name:</label>
//             <input
//               type="text"
//               value={editProfile.firstName}
//               onChange={(e) => setEditProfile({ ...editProfile, firstName: e.target.value })}
//             />
//             <label>Last Name:</label>
//             <input
//               type="text"
//               value={editProfile.lastName}
//               onChange={(e) => setEditProfile({ ...editProfile, lastName: e.target.value })}
//             />
//             <label>Job Title:</label>
//             <input
//               type="text"
//               value={editProfile.jobTitle}
//               onChange={(e) => setEditProfile({ ...editProfile, jobTitle: e.target.value })}
//             />
//             <label>Email Address:</label>
//             <input
//               type="email"
//               value={editProfile.emailAddress}
//               onChange={(e) => setEditProfile({ ...editProfile, emailAddress: e.target.value })}
//             />
//             <label>Phone Number:</label>
//             <input
//               type="text"
//               value={editProfile.phoneNumber}
//               onChange={(e) => setEditProfile({ ...editProfile, phoneNumber: e.target.value })}
//             />
//             <label>Location:</label>
//             <input
//               type="text"
//               value={editProfile.location}
//               onChange={(e) => setEditProfile({ ...editProfile, location: e.target.value })}
//             />
//             <button onClick={handleEditProfile}>Save Changes</button>
//             <button onClick={() => setShowEditForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {/* Skill Form Popup */}
//       {showSkillForm && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Add Skill</h3>
//             <label>Skill Name:</label>
//             <input
//               type="text"
//               value={newSkill.skillName}
//               onChange={(e) => setNewSkill({ ...newSkill, skillName: e.target.value })}
//             />
//             <label>Skill Level:</label>
//             <input
//               type="text"
//               value={newSkill.skillLevel}
//               onChange={(e) => setNewSkill({ ...newSkill, skillLevel: e.target.value })}
//             />
//             <button onClick={handleAddSkill}>Add Skill</button>
//             <button onClick={() => setShowSkillForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {/* Education Form Popup */}
//       {showEducationForm && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Add Education</h3>
//             <label>Institution:</label>
//             <input
//               type="text"
//               value={newEducation.institution}
//               onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
//             />
//             <label>Degree:</label>
//             <input
//               type="text"
//               value={newEducation.degree}
//               onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
//             />
//             <label>Start Date:</label>
//             <input
//               type="text"
//               value={newEducation.startDate}
//               onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
//             />
//             <label>End Date:</label>
//             <input
//               type="text"
//               value={newEducation.endDate}
//               onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
//             />
//             <button onClick={handleAddEducation}>Add Education</button>
//             <button onClick={() => setShowEducationForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {/* Project Form Popup */}
//       {showProjectForm && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Add Project</h3>
//             <label>Project Title:</label>
//             <input
//               type="text"
//               value={newProject.title}
//               onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
//             />
//             <label>Description:</label>
//             <input
//               type="text"
//               value={newProject.description}
//               onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
//             />
//             <button onClick={handleAddProject}>Add Project</button>
//             <button onClick={() => setShowProjectForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const SkillsSection = ({ skills }) => {
//   return (
//     <>
//       <p className="w3-large">
//         <b><i className="fa fa-cogs"></i> Skills</b>
//       </p>
//       <ul>
//         {skills.map((skill, index) => (
//           <li key={index}>
//             {skill.skillName} - {skill.skillLevel}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const EducationSection = ({ education }) => {
//   return (
//     <>
//       <p className="w3-large">
//         <b><i className="fa fa-university"></i> Education</b>
//       </p>
//       <ul>
//         {education.map((edu, index) => (
//           <li key={index}>
//             {edu.institution} ({edu.startDate} - {edu.endDate}): {edu.degree}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const ProjectsSection = ({ projects }) => {
//   return (
//     <>
//       <p className="w3-large">
//         <b><i className="fa fa-laptop"></i> Projects</b>
//       </p>
//       <ul>
//         {projects.map((project, index) => (
//           <li key={index}>
//             {project.title}: {project.description}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default JobSeekerProfile;

