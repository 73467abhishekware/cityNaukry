
// import React, { createContext, useState, useContext, useEffect } from "react";

// // Create the context
// const SessionContext = createContext();

// // Context provider component
// export const SessionProvider = ({ children }) => {
//   const [isSessionActive, setIsSessionActive] = useState(false);
//   const [userType, setUserType] = useState(null);
//   const [companyName, setCompanyName] = useState(null);

//   // Initialize session state from sessionStorage
//   useEffect(() => {
//     const savedUserType = sessionStorage.getItem("status");
//     const savedCompanyName = sessionStorage.getItem("companyName");

//     setUserType(savedUserType ? savedUserType.trim().toLowerCase() : null);
//     setCompanyName(savedCompanyName);

//     setIsSessionActive(savedCompanyName !== null); // Check if the session is active
//   }, []); // Only run on initial mount

//   const logOut = () => {
//     // Clear sessionStorage and update state
//     sessionStorage.removeItem("status");
//     sessionStorage.removeItem("companyName");

//     setUserType(null);
//     setCompanyName(null);
//     setIsSessionActive(false);
//   };

//   return (
//     <SessionContext.Provider value={{ isSessionActive, userType, companyName, logOut }}>
//       {children}
//     </SessionContext.Provider>
//   );
// };

// // Custom hook to access session context
// export const useSession = () => useContext(SessionContext);


import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const SessionContext = createContext();

// Context provider component
export const SessionProvider = ({ children }) => {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [userType, setUserType] = useState(null);
  const [companyName, setCompanyName] = useState(null);

  // Initialize session state from sessionStorage
  useEffect(() => {
    const savedUserType = sessionStorage.getItem("status");
    const savedCompanyName = sessionStorage.getItem("companyName");

    setUserType(savedUserType ? savedUserType.trim().toLowerCase() : null);
    setCompanyName(savedCompanyName);

    setIsSessionActive(savedCompanyName !== null || savedUserType !== null);
  }, []);

  const logOut = () => {
    sessionStorage.clear();
    setUserType(null);
    setCompanyName(null);
    setIsSessionActive(false);
  };

  return (
    <SessionContext.Provider value={{ isSessionActive, userType, companyName, logOut }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to access session context
export const useSession = () => useContext(SessionContext);
