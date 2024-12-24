
// //2this is working fine for dashboard and dashboard
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logoImage from "../images/cnlogo-removebg-preview.png";
// import { useSession } from "./SessionContext";

// const Header = () => {
//   const navigate = useNavigate(); // Hook to navigate the user after logout
//   const { isSessionActive } = useSession(); // Access session details from context
//   const [userType, setUserType] = useState(null);
//   const [companyName, setCompanyName] = useState(null);
//   const [jobSeekerId, setJobSeekerId] = useState(null);
//   const userTypeFromStorage = sessionStorage.getItem("status");
//   console.log("user from sessionstorage is",userTypeFromStorage)
//   useEffect(() => {
   
//     const companyNameFromStorage = sessionStorage.getItem("companyName");
//     const JobSeekerId=  sessionStorage.getItem("jobSeekerId");

//     setUserType(userTypeFromStorage);
//     setCompanyName(companyNameFromStorage);
//     setJobSeekerId(JobSeekerId);
//   }, [isSessionActive]);

//   const styles = {
//     header: {
//       background: "rgb(36, 64, 52)",
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//     },
//     innerContent: {
//       margin: "auto",
//       padding: "10px 40px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//     logo: {
//       padding: "0px",
//       height: "70px",
//       backgroundColor: "transparent",
//     },
//     navBar: {
//       display: "flex",
//       alignItems: "center",
//     },
//     navItem: {
//       margin: "0 15px",
//       padding: "2vh",
//     },
//     navLink: {
//       color: "#ffffff",
//       fontWeight: 900,
//       textDecoration: "none",
//       transition: "color 0.3s ease",
//     },
//     navLinkHover: {
//       color: "rgb(210, 243, 76)",
//     },
//     logoutButton: {
//       color: "#ffffff",
//       fontWeight: 900,
//       textDecoration: "none",
//       background: "none",
//       border: "none",
//       cursor: "pointer",
//       transition: "color 0.3s ease",
//     },
//     logoutButtonHover: {
//       color: "rgb(210, 243, 76)",
//     },
//   };

//   const handleLogout = () => {
//     sessionStorage.clear(); // Clear session data
//     sessionStorage.setItem("sessionActive", "false"); // Set session to inactive
//     alert("Log Out!!!!")
//     navigate("/signin"); // Redirect to signin page
//   };

//   return (
//     <header style={styles.header}>
//       <div style={styles.innerContent}>
//         {/* Logo Section */}
//         <div className="logo">
//           <Link to="/home">
//             <img src={logoImage} alt="CityNaukari Logo" style={styles.logo} />
//           </Link>
//         </div>

//         {/* Navigation Menu */}
//         <nav>
//           <ul style={styles.navBar}>
//             <li style={styles.navItem}>
//               <Link
//                 to="/home"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li style={styles.navItem}>
//               <Link
//                 to="/joblist"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Jobs
//               </Link>
//             </li>
//             <li style={styles.navItem}>
//               <Link
//                 to="/contactus"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Contact Us
//               </Link>
//             </li>
//             <li style={styles.navItem}>
//               <Link
//                 to={userType === '"company"' ? "/companydashboard" : "/dashboard"}        
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Dashboard
//               </Link>
//             </li>
//             {companyName || jobSeekerId ? (
//               <li style={styles.navItem}>
//                 <button
//                   onClick={handleLogout}
//                   style={styles.logoutButton}
//                   onMouseEnter={(e) => (e.target.style.color = styles.logoutButtonHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.logoutButton.color)}
//                 >
//                   Log Out
//                 </button>
//               </li>
//             ) : (
//               <li style={styles.navItem}>
//                 <Link
//                   to="/signin"
//                   style={styles.navLink}
//                   onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//                 >
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


// //2this is working fine for dashboard and dashboard
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logoImage from "../images/cnlogo-removebg-preview.png";
// import { useSession } from "./SessionContext";

// const Header = () => {
//   const navigate = useNavigate(); // Hook to navigate the user after logout
//   const { isSessionActive } = useSession(); // Access session details from context
//   const [userType, setUserType] = useState(null);
//   const [companyName, setCompanyName] = useState(null);
//   const [jobSeekerId, setJobSeekerId] = useState(null);
//   const userTypeFromStorage = sessionStorage.getItem("status");
//   console.log("user from sessionstorage is",userTypeFromStorage)
//   useEffect(() => {
   
//     const companyNameFromStorage = sessionStorage.getItem("companyName");
//     const JobSeekerId=  sessionStorage.getItem("jobSeekerId");

//     setUserType(userTypeFromStorage);
//     setCompanyName(companyNameFromStorage);
//     setJobSeekerId(JobSeekerId);
//   }, [isSessionActive]);

//   const styles = {
//     header: {
//       background: "rgb(36, 64, 52)",
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//     },
//     innerContent: {
//       margin: "auto",
//       padding: "10px 40px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//     logo: {
//       padding: "0px",
//       height: "70px",
//       backgroundColor: "transparent",
//     },
//     navBar: {
//       display: "flex",
//       alignItems: "center",
//     },
//     navItem: {
//       margin: "0 15px",
//       padding: "2vh",
//     },
//     navLink: {
//       color: "#ffffff",
//       fontWeight: 900,
//       textDecoration: "none",
//       transition: "color 0.3s ease",
//     },
//     navLinkHover: {
//       color: "rgb(210, 243, 76)",
//     },
//     logoutButton: {
//       color: "#ffffff",
//       fontWeight: 900,
//       textDecoration: "none",
//       background: "none",
//       border: "none",
//       cursor: "pointer",
//       transition: "color 0.3s ease",
//     },
//     logoutButtonHover: {
//       color: "rgb(210, 243, 76)",
//     },
//   };

//   const handleLogout = () => {
//     sessionStorage.clear(); // Clear session data
//     sessionStorage.setItem("sessionActive", "false"); // Set session to inactive
//     alert("Log Out!!!!")
//     navigate("/signin"); // Redirect to signin page
//   };

//   return (
//     <header style={styles.header}>
//       <div style={styles.innerContent}>
//         {/* Logo Section */}
//         <div className="logo">
//           <Link to="/home">
//             <img src={logoImage} alt="CityNaukari Logo" style={styles.logo} />
//           </Link>
//         </div>

//         {/* Navigation Menu */}
//         <nav>
//           <ul style={styles.navBar}>
//             <li style={styles.navItem}>
//               <Link
//                 to="/home"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Home
//               </Link>
//             </li>
//             {/* <li style={styles.navItem}>
//               <Link
//                 to="/joblist"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Jobs
//               </Link>
//             </li> */}
//              <li style={styles.navItem}>
//           <Link
//             to={userType === '"jobSeeker"' ? '/joblist' : '/postedjobs'}
//             style={styles.navLink}
//             onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//             onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//           >
//             {userType === '"jobSeeker"' ? 'Job Details' : 'Posted Jobs'}
//           </Link>
//         </li>
//             <li style={styles.navItem}>
//               <Link
//                 to="/contactus"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Contact Us
//               </Link>
//             </li>
  
// <li style={styles.navItem}>
//   {userType ? (
//     userType === '"company"' ? (
//       <Link
//         to="/companydashboard"
//         style={styles.navLink}
//         onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//         onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//       >
//         Dashboard
//       </Link>
//     ) : (
//       <Link
//         to="/jobseekerProfile"
//         style={styles.navLink}
//         onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//         onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//       >
//         Profile
//       </Link>
//     )
//   ) : null}
// </li>


//             {companyName || jobSeekerId ? (
//               <li style={styles.navItem}>
//                 <button
//                   onClick={handleLogout}
//                   style={styles.logoutButton}
//                   onMouseEnter={(e) => (e.target.style.color = styles.logoutButtonHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.logoutButton.color)}
//                 >
//                   Log Out
//                 </button>
//               </li>
//             ) : (
//               <li style={styles.navItem}>
//                 <Link
//                   to="/signin"
//                   style={styles.navLink}
//                   onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//                 >
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;





//2this is working fine for dashboard and dashboard
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../images/cnlogo-removebg-preview.png";
import { useSession } from "./SessionContext";

const Header = () => {
  const navigate = useNavigate();
  const { isSessionActive } = useSession();
  const [userType, setUserType] = useState(sessionStorage.getItem("status"));
  const [companyName, setCompanyName] = useState(sessionStorage.getItem("companyName"));
  const [jobSeekerId, setJobSeekerId] = useState(sessionStorage.getItem("jobSeekerId"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUserType(sessionStorage.getItem("status"));
      setCompanyName(sessionStorage.getItem("companyName"));
      setJobSeekerId(sessionStorage.getItem("jobSeekerId"));
    };

    // Listen for changes in sessionStorage
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    sessionStorage.setItem("sessionActive", "false");

    // Trigger the event to notify other components
    window.dispatchEvent(new Event("storage"));

    alert("Log Out!!!!");
    navigate("/signin");
  };

  const styles = {
    header: {
      background: "rgb(36, 64, 52)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    innerContent: {
      margin: "auto",
      padding: "10px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    logo: {
      padding: "0px",
      height: "70px",
      backgroundColor: "transparent",
    },
    navBar: {
      display: "flex",
      alignItems: "center",
      listStyleType: "none", // Remove black points
      padding: 0,
      margin: 0,
      flexWrap: "wrap",
    },
    navItem: {
      margin: "0 15px",
      padding: "2vh",
    },
    navLink: {
      color: "#ffffff",
      fontWeight: 900,
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: "rgb(210, 243, 76)",
    },
    logoutButton: {
      color: "#ffffff",
      fontWeight: 900,
      textDecoration: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    logoutButtonHover: {
      color: "rgb(210, 243, 76)",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.innerContent}>
        <div className="logo">
          <Link to="/home">
            <img src={logoImage} alt="CityNaukari Logo" style={styles.logo} />
          </Link>
        </div>

        <nav>
          <ul style={styles.navBar}>
            <li style={styles.navItem}>
              <Link
                to="/home"
                style={styles.navLink}
                onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
              >
                Home
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link
                to={userType === '"company"' ? "/postedjobs" : "/joblist"}
                style={styles.navLink}
                onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
              >
                {userType === '"company"' ? "Posted Jobs" : "Job Details"}
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link
                to="/contactus"
                style={styles.navLink}
                onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
              >
                Contact Us
              </Link>
            </li>
            <li style={styles.navItem}>
              {userType ? (
                userType === '"company"' ? (
                  <Link
                    to="/companydashboard"
                    style={styles.navLink}
                    onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    to="/jobseekerProfile"
                    style={styles.navLink}
                    onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                    onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                  >
                    Profile
                  </Link>
                )
              ) : null}
            </li>
            {companyName || jobSeekerId ? (
              <li style={styles.navItem}>
                <button
                  onClick={handleLogout}
                  style={styles.logoutButton}
                  onMouseEnter={(e) => (e.target.style.color = styles.logoutButtonHover.color)}
                  onMouseLeave={(e) => (e.target.style.color = styles.logoutButton.color)}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li style={styles.navItem}>
                <Link
                  to="/signin"
                  style={styles.navLink}
                  onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
                  onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



//1
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import logoImage from "../images/cnlogo-removebg-preview.png";
// import { useSession } from "./SessionContext"; // Context for session management

// const Header = () => {
//   const { isSessionActive, logOut } = useSession(); // Access session details from context
//   const [userType, setUserType] = useState(null); // Local state for user type
  
//   // Fetch userType from sessionStorage once the component is mounted
//   useEffect(() => {
//     const userTypeFromStorage = sessionStorage.getItem("status");
//     setUserType(userTypeFromStorage ? userTypeFromStorage.trim().toLowerCase() : null);
//     console.log("User Type from sessionStorage:", userTypeFromStorage); // Debugging output
//   }, [isSessionActive]); // Re-run when session changes

//   const styles = {
//     header: {
//       background: "rgb(36, 64, 52)", // Dark green theme
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//     },
//     innerContent: {
//       margin: "auto",
//       padding: "10px 40px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//     logo: {
//       padding: "0px",
//       height: "70px",
//       backgroundColor: "transparent",
//     },
//     navBar: {
//       display: "flex",
//       alignItems: "center",
//     },
//     navItem: {
//       margin: "0 15px",
//       padding: "2vh",
//     },
//     navLink: {
//       color: "#ffffff",
//       fontWeight: 900,
//       textDecoration: "none",
//       transition: "color 0.3s ease",
//     },
//     navLinkHover: {
//       color: "rgb(210, 243, 76)", // Light green hover effect
//     },
//     logoutButton: {
//       color: "#ffffff",
//       fontWeight: 900,
//       textDecoration: "none",
//       background: "none",
//       border: "none",
//       cursor: "pointer",
//       transition: "color 0.3s ease",
//     },
//     logoutButtonHover: {
//       color: "rgb(210, 243, 76)",
//     },
//   };

//   // Check if userType exists and properly set the correct dashboard URL
//   const dashboardLink = userType === '"company"' ? "/companydashboard" : "/dashboard";

//   return (
//     <header style={styles.header}>
//       <div style={styles.innerContent}>
//         {/* Logo Section */}
//         <div className="logo">
//           <Link to="/home">
//             <img src={logoImage} alt="CityNaukari Logo" style={styles.logo} />
//           </Link>
//         </div>

//         {/* Navigation Menu */}
//         <nav>
//           <ul style={styles.navBar}>
//             <li style={styles.navItem}>
//               <Link
//                 to="/home"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li style={styles.navItem}>
//               <Link
//                 to="/joblist"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Jobs
//               </Link>
//             </li>
//             <li style={styles.navItem}>
//               <Link
//                 to="/contactus"
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Contact Us
//               </Link>
//             </li>

//             {/* Conditional Dashboard Link */}
//             <li style={styles.navItem}>
//               <Link
//                 to={dashboardLink} // Conditionally set the dashboard link
//                 style={styles.navLink}
//                 onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                 onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//               >
//                 Dashboard
//               </Link>
//             </li>

//             {/* Conditional Login/Logout Button */} 
//              {sessionStorage.getItem("companyName") ? (
//         // If companyName exists in sessionStorage, show logout button
//         <li style={styles.navItem}>
//           <button
//             onClick={logOut} // Log out functionality
//             style={styles.logoutButton}
//             onMouseEnter={(e) => (e.target.style.color = styles.logoutButtonHover.color)}
//             onMouseLeave={(e) => (e.target.style.color = styles.logoutButton.color)}
//           >
//             {sessionStorage.getItem("companyName")}
//           </button>
//         </li>
//       ) : (
//         // If companyName doesn't exist in sessionStorage, show login link
//         <li style={styles.navItem}>
//           <Link
//             to="/signin"
//             style={styles.navLink}
//             onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//             onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//           >
//             Login
//           </Link>
//         </li>
//       )}
            
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logoImage from "../images/cnlogo-removebg-preview.png";

// const Header = () => {
//   const [isSessionActive, setIsSessionActive] = useState(false);
//   const navigate = useNavigate();

//   // Check session state on mount and when session storage changes
//   useEffect(() => {
//     const sessionActive = sessionStorage.getItem("sessionActive") === "true";
//     setIsSessionActive(sessionActive);
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.setItem("sessionActive", "false"); // Update session storage
//     setIsSessionActive(false); // Update state immediately
//     navigate("/signin"); // Redirect to login page
//   };

//   const styles = {
//     header: {
//       background: "rgb(36, 64, 52)",
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//     },
//     innerContent: {
//       margin: "auto",
//       padding: "10px 40px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//     logo: {
//       padding: "0px",
//       height: "70px",
//       backgroundColor: "transparent",
//     },
//     navBar: {
//       display: "flex",
//       alignItems: "center",
//     },
//     navItem: {
//       margin: "0 15px",
//       padding: "2vh",
//     },
//     navLink: {
//       color: "#ffffff",
//       fontWeight: 900,
//       textDecoration: "none",
//     },
//     navLinkHover: {
//       color: "rgb(210, 243, 76)",
//     },
//   };

//   return (
//     <header style={styles.header}>
//       <div style={styles.innerContent}>
//         <div className="logo">
//           <Link to="/index">
//             <img src={logoImage} alt="CityNaukari Logo" style={styles.logo} />
//           </Link>
//         </div>
//         <nav className="navbar navbar-expand-lg">
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul style={styles.navBar}>
//               <li style={styles.navItem}>
//                 <Link
//                   to="/home"
//                   style={styles.navLink}
//                   onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li style={styles.navItem}>
//                 <Link
//                   to="/joblist"
//                   style={styles.navLink}
//                   onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//                 >
//                   Job
//                 </Link>
//               </li>
//               <li style={styles.navItem}>
//                 <Link
//                   to="/contactus"
//                   style={styles.navLink}
//                   onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//               <li style={styles.navItem}>
//                 <Link
//                   to="/companydashboard"
//                   style={styles.navLink}
//                   onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                   onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//                 >
//                   Dashboard
//                 </Link>
//               </li>
//               {!isSessionActive && (
//                 <li style={styles.navItem}>
//                   <Link
//                     to="/signin"
//                     style={styles.navLink}
//                     onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)}
//                     onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
//                   >
//                     Login
//                   </Link>
//                 </li>
//               )}
//               {isSessionActive && (
//                 <li style={styles.navItem}>
//                   <button
//                     onClick={handleLogout}
//                     style={{
//                       ...styles.navLink,
//                       background: "none",
//                       border: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
