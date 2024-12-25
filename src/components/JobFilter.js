// import React, { useState } from 'react';

// import { FaBriefcase, FaMapMarkerAlt, FaBuilding, FaDollarSign, FaUserTie, FaClock, FaGraduationCap } from 'react-icons/fa';

// const JobFilter = ({ onSearchResults }) => {
//   const [title, setTitle] = useState('');
//   const [location, setLocation] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [salary, setSalary] = useState('');
//   const [experienceRequired, setExperienceRequired] = useState('');
//   const [employmentType, setEmploymentType] = useState('');
//   const [qualifications, setQualifications] = useState('');
//   const [error, setError] = useState(null);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await axios.get('http://localhost:8085/jobPost/searchAll', {
//         params: {
//           title: title || null,
//           location: location || null,
//           companyName: companyName || null,
//           salary: salary || null,
//           experienceRequired: experienceRequired || null,
//           employmentType: employmentType || null,
//           qualifications: qualifications || null,
//         },
//       });
//       onSearchResults(response.data);
//     } catch (err) {
//       const errorMessage = err.response?.data?.message || "Error fetching job posts";
//       setError(errorMessage);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Job Filter</h2>
//       <form onSubmit={handleSearch} style={styles.form}>
//         {inputField(FaBriefcase, 'Job Title', title, setTitle)}
//         {inputField(FaMapMarkerAlt, 'Location', location, setLocation)}
//         {inputField(FaBuilding, 'Company Name', companyName, setCompanyName)}
//         {inputField(FaDollarSign, 'Salary', salary, setSalary, 'number')}
//         {inputField(FaUserTie, 'Experience Required', experienceRequired, setExperienceRequired)}
//         {inputField(FaClock, 'Employment Type', employmentType, setEmploymentType)}
//         {inputField(FaGraduationCap, 'Qualifications', qualifications, setQualifications)}

//         <button style={styles.button} type="submit">Search</button>
//       </form>

//       {error && <p style={styles.errorMessage}>{error}</p>}
//     </div>
//   );
// };

// // Helper function to create input fields with icons
// const inputField = (IconComponent, placeholder, value, setValue, type = 'text') => (
//   <div style={styles.inputContainer}>
//     <IconComponent style={styles.icon} />
//     <input
//       style={styles.input}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     />
//   </div>
// );

// // Inline styles with unique colors and gradients
// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: '20px auto',
//     padding: '30px',
//     backgroundColor: '#f3f9ff',
//     borderRadius: '10px',
//     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
//     border: '2px solid #8ca0ff',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '26px',
//     color: '#4955e4',
//     fontWeight: '700',
//     marginBottom: '20px',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   inputContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     background: 'linear-gradient(145deg, #e3ecff, #c8d4ff)',
//     borderRadius: '8px',
//     padding: '10px',
//     boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.05), inset -2px -2px 5px rgba(255, 255, 255, 1)',
//     transition: 'transform 0.2s, box-shadow 0.3s',
//   },
//   icon: {
//     color: '#6573f7',
//     marginRight: '10px',
//     fontSize: '1.2em',
//   },
//   input: {
//     flex: 1,
//     padding: '10px',
//     border: 'none',
//     outline: 'none',
//     fontSize: '16px',
//     color: '#4955e4',
//     background: 'transparent',
//   },
//   button: {
//     padding: '12px',
//     backgroundColor: '#6573f7',
//     color: 'white',
//     fontWeight: 'bold',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     boxShadow: '0 6px 15px rgba(101, 115, 247, 0.3)',
//     textTransform: 'uppercase',
//     letterSpacing: '0.5px',
//   },
//   buttonHover: {
//     transform: 'scale(1.05)',
//   },
//   errorMessage: {
//     color: 'red',
//     marginTop: '15px',
//   },
// };

// export default JobFilter;
import React, { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaBuilding,
  FaDollarSign,
  FaUserTie,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";

const JobFilter = ({ onFilterChange }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salary, setSalary] = useState("");
  const [experienceRequired, setExperienceRequired] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [qualifications, setQualifications] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterData = {
      title,
      location,
      companyName,
      salary,
      experienceRequired,
      employmentType,
      qualifications,
    };
    onFilterChange(filterData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Job Filter</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {inputField(FaBriefcase, "Job Title", title, setTitle)}
        {inputField(FaMapMarkerAlt, "Location", location, setLocation)}
        {inputField(FaBuilding, "Company Name", companyName, setCompanyName)}
        {inputField(FaDollarSign, "Salary", salary, setSalary, "number")}
        {inputField(FaUserTie, "Experience Required", experienceRequired, setExperienceRequired)}
        {inputField(FaClock, "Employment Type", employmentType, setEmploymentType)}
        {inputField(FaGraduationCap, "Qualifications", qualifications, setQualifications)}

        <button style={styles.button} type="submit">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

// Helper function to create input fields with icons
const inputField = (IconComponent, placeholder, value, setValue, type = "text") => (
  <div style={styles.inputContainer}>
    <IconComponent style={styles.icon} />
    <input
      style={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
);

// Inline styles with unique colors and gradients
const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "30px",
    backgroundColor: "#f3f9ff",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    border: "2px solid #8ca0ff",
    textAlign: "center",
  },
  title: {
    fontSize: "26px",
    color: "#4955e4",
    fontWeight: "700",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(145deg, #e3ecff, #c8d4ff)",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.05), inset -2px -2px 5px rgba(255, 255, 255, 1)",
    transition: "transform 0.2s, box-shadow 0.3s",
  },
  icon: {
    color: "#6573f7",
    marginRight: "10px",
    fontSize: "1.2em",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: "#4955e4",
    background: "transparent",
  },
  button: {
    padding: "12px",
    backgroundColor: "#6573f7",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0 6px 15px rgba(101, 115, 247, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
};

export default JobFilter;
