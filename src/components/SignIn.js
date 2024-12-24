// import React, { useState } from 'react';
// import { Box, Button, Checkbox, TextField, Typography, FormControlLabel, Divider, Link, Dialog, DialogTitle, DialogActions } from '@mui/material';
// import { Email, AccountCircle, Lock, VerifiedUser } from '@mui/icons-material';
// import { FaFacebook } from 'react-icons/fa';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom'; // Import navigation hook
// import axios from 'axios'; // Import axios to make API requests

// export default function SignIn() {
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const [openModal, setOpenModal] = useState(false); // State for modal
//   const [apiError, setApiError] = useState(''); // To store API error messages
//   const navigate = useNavigate(); // Navigation hook

//   const validateInputs = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     let emailError = '', passwordError = '';

//     if (!/\S+@\S+\.\S+/.test(email)) emailError = 'Enter a valid email address.';
//     if (password.length < 6) passwordError = 'Password must be at least 6 characters.';

//     setErrors({ email: emailError, password: passwordError });
//     return !emailError && !passwordError;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateInputs()) {
//       const data = new FormData(e.currentTarget);
//       const email = data.get('email');
//       const password = data.get('password');

//       try {
//         // Make the API request to login
//         const response = await axios.get('http://localhost:8086/jobSeeker/login', {
//           params: {
//             emailAddress: email,
//             password: password,
//           },
//         });

//         // If login is successful, navigate to the job list
//         console.log(response.data); // Log the response for debugging
//         navigate('/joblist');
//       } catch (error) {
//         // If there's an error, handle it here
//         if (error.response) {
//           // API returned an error response
//           setApiError(error.response.data.message || 'An error occurred while logging in.');
//         } else {
//           // No response from the server
//           setApiError('Failed to connect to the server.');
//         }
//       }
//     }
//   };

//   const handleSignUpClick = () => {
//     setOpenModal(true); // Open the modal
//   };

//   const handleNavigation = (path) => {
//     setOpenModal(false); // Close the modal
//     navigate(path); // Navigate to the respective page
//   };

//   // Function to handle Google login success
//   const handleGoogleLoginSuccess = (response) => {
//     console.log('Google login successful:', response);
//     // After successful Google login, navigate to JobDetails page
//     navigate('/jobdetails');
//   };

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//         <Box display="flex" maxWidth="900px" width="90%" boxShadow={3} borderRadius={2} overflow="hidden">
//           {/* Left Column */}
//           <Box width="50%" p={4} bgcolor="lightblue" textAlign="center">
//             <img
//               src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1808.jpg"
//               alt="Sign In Illustration"
//               style={{ width: '100%', height: '200px', borderRadius: '8px', objectFit: 'cover' }}
//             />
//             <Typography variant="h6" fontWeight="bold" mt={2}>
//               Why Sign In?
//             </Typography>
//             <Box mt={2}>
//               {[["Access your job applications.", <Email />], 
//                 ["Create and manage your profile.", <AccountCircle />], 
//                 ["Secure access with your credentials.", <Lock />], 
//                 ["Stay connected with recruiters.", <VerifiedUser />]]
//                 .map(([text, icon], i) => (
//                   <Box key={i} display="flex" alignItems="center" mb={1}>
//                     {icon} <Typography ml={1}>{text}</Typography>
//                   </Box>
//               ))}
//             </Box>
//           </Box>

//           {/* Right Column */}
//           <Box width="50%" p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//             <Typography variant="h4" mb={2}>Sign In</Typography>
//             <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth="350px">
//               <TextField
//                 id="email"
//                 label="Email"
//                 name="email"
//                 fullWidth
//                 margin="normal"
//                 error={!!errors.email}
//                 helperText={errors.email}
//               />
//               <TextField
//                 id="password"
//                 label="Password"
//                 name="password"
//                 type="password"
//                 fullWidth
//                 margin="normal"
//                 error={!!errors.password}
//                 helperText={errors.password}
//               />
//               <FormControlLabel control={<Checkbox />} label="Remember me" />
//               <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//                 Sign In
//               </Button>
//               {apiError && (
//                 <Typography color="error" align="center" mt={2}>
//                   {apiError}
//                 </Typography>
//               )}
//               <Typography align="center" mt={2}>
//                 Don't have an account?{' '}
//                 <Link component="button" onClick={handleSignUpClick} variant="body2">
//                   Sign up
//                 </Link>
//               </Typography>
//               <Divider sx={{ my: 2 }}>or</Divider>
//               <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={console.log} theme="outline" />
//               <Button
//                 variant="outlined"
//                 fullWidth
//                 startIcon={<FaFacebook color="#3b5998" />}
//                 sx={{ mt: 2 }}
//               >
//                 Sign in with Facebook
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         {/* Modal for Sign Up Options */}
//         <Dialog open={openModal} onClose={() => setOpenModal(false)}>
//           <DialogTitle>Select Sign Up Option</DialogTitle>
//           <DialogActions>
//             <Button onClick={() => handleNavigation('/jobseekersignup')} color="primary">
//                Sign Up For get a job
//             </Button>
//             <Button onClick={() => handleNavigation('/companysignup')} color="secondary">
//               Sign Up for hire a person
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </GoogleOAuthProvider>
//   );
// }


// import React, { useState } from 'react';
// import { Box, Button, Checkbox, TextField, Typography, FormControlLabel, Divider, Link, Dialog, DialogTitle, DialogActions } from '@mui/material';
// import { Email, AccountCircle, Lock, VerifiedUser } from '@mui/icons-material';
// import { FaFacebook } from 'react-icons/fa';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom'; // Import navigation hook
// import axios from 'axios'; // Import axios to make API requests

// export default function SignIn() {
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const [openModal, setOpenModal] = useState(false); // State for modal
//   const [apiError, setApiError] = useState(''); // To store API error messages
//   const navigate = useNavigate(); // Navigation hook

//   const validateInputs = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     let emailError = '', passwordError = '';

//     if (!/\S+@\S+\.\S+/.test(email)) emailError = 'Enter a valid email address.';
//     if (password.length < 6) passwordError = 'Password must be at least 6 characters.';

//     setErrors({ email: emailError, password: passwordError });
//     return !emailError && !passwordError;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateInputs()) {
//       const data = new FormData(e.currentTarget);
//       const email = data.get('email');
//       const password = data.get('password');

//       try {
//         // Make the API request to login
//         const response = await axios.get('http://localhost:8086/jobSeeker/login', {
//           params: {
//             emailAddress: email,
//             password: password,
//           },
//         });

//         // If login is successful, store data in sessionStorage
//         console.log(response.data); // Log the response for debugging
//         sessionStorage.setItem('user', JSON.stringify(response.data)); // Store the user data in sessionStorage
//         // Navigate to the job list
//         navigate('/joblist');
//       } catch (error) {
//         // If there's an error, handle it here
//         if (error.response) {
//           // API returned an error response
//           setApiError(error.response.data.message || 'An error occurred while logging in.');
//         } else {
//           // No response from the server
//           setApiError('Failed to connect to the server.');
//         }
//       }
//     }
//   };

//   const handleSignUpClick = () => {
//     setOpenModal(true); // Open the modal
//   };

//   const handleNavigation = (path) => {
//     setOpenModal(false); // Close the modal
//     navigate(path); // Navigate to the respective page
//   };

//   // Function to handle Google login success
//   const handleGoogleLoginSuccess = (response) => {
//     console.log('Google login successful:', response);
//     // After successful Google login, store data in sessionStorage
//     sessionStorage.setItem('user', JSON.stringify(response));
//     // Navigate to JobDetails page
//     navigate('/jobdetails');
//   };

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//         <Box display="flex" maxWidth="900px" width="90%" boxShadow={3} borderRadius={2} overflow="hidden">
//           {/* Left Column */}
//           <Box width="50%" p={4} bgcolor="lightblue" textAlign="center">
//             <img
//               src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1808.jpg"
//               alt="Sign In Illustration"
//               style={{ width: '100%', height: '200px', borderRadius: '8px', objectFit: 'cover' }}
//             />
//             <Typography variant="h6" fontWeight="bold" mt={2}>
//               Why Sign In?
//             </Typography>
//             <Box mt={2}>
//               {[["Access your job applications.", <Email />], 
//                 ["Create and manage your profile.", <AccountCircle />], 
//                 ["Secure access with your credentials.", <Lock />], 
//                 ["Stay connected with recruiters.", <VerifiedUser />]]
//                 .map(([text, icon], i) => (
//                   <Box key={i} display="flex" alignItems="center" mb={1}>
//                     {icon} <Typography ml={1}>{text}</Typography>
//                   </Box>
//               ))}
//             </Box>
//           </Box>

//           {/* Right Column */}
//           <Box width="50%" p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//             <Typography variant="h4" mb={2}>Sign In</Typography>
//             <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth="350px">
//               <TextField
//                 id="email"
//                 label="Email"
//                 name="email"
//                 fullWidth
//                 margin="normal"
//                 error={!!errors.email}
//                 helperText={errors.email}
//               />
//               <TextField
//                 id="password"
//                 label="Password"
//                 name="password"
//                 type="password"
//                 fullWidth
//                 margin="normal"
//                 error={!!errors.password}
//                 helperText={errors.password}
//               />
//               <FormControlLabel control={<Checkbox />} label="Remember me" />
//               <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//                 Sign In
//               </Button>
//               {apiError && (
//                 <Typography color="error" align="center" mt={2}>
//                   {apiError}
//                 </Typography>
//               )}
//               <Typography align="center" mt={2}>
//                 Don't have an account?{' '}
//                 <Link component="button" onClick={handleSignUpClick} variant="body2">
//                   Sign up
//                 </Link>
//               </Typography>
//               <Divider sx={{ my: 2 }}>or</Divider>
//               <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={console.log} theme="outline" />
//               <Button
//                 variant="outlined"
//                 fullWidth
//                 startIcon={<FaFacebook color="#3b5998" />}
//                 sx={{ mt: 2 }}
//               >
//                 Sign in with Facebook
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         {/* Modal for Sign Up Options */}
//         <Dialog open={openModal} onClose={() => setOpenModal(false)}>
//           <DialogTitle>Select Sign Up Option</DialogTitle>
//           <DialogActions>
//             <Button onClick={() => handleNavigation('/jobseekersignup')} color="primary">
//               Sign Up For get a job
//             </Button>
//             <Button onClick={() => handleNavigation('/companysignup')} color="secondary">
//               Sign Up for hire a person
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </GoogleOAuthProvider>
//   );
// }
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  Divider,
  Link,
  Dialog,
  DialogTitle,
  DialogActions,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material';
import { Email, AccountCircle, Lock, VerifiedUser } from '@mui/icons-material';
import { FaFacebook } from 'react-icons/fa';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Navigation hook
import axios from 'axios'; // API requests

export default function SignIn() {
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [openModal, setOpenModal] = useState(false); // State for modal
  const [apiError, setApiError] = useState(''); // To store API error messages
  const [userType, setUserType] = useState('jobseeker'); // State to determine user type
  const [loading, setLoading] = useState(false); // Loading state for handling async operations
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    // Retrieve and log session data if available
    const userData = sessionStorage.getItem('user');
    if (userData) {
      console.log('Stored user data:', JSON.parse(userData));
    } else {
      console.log('No user data found in sessionStorage.');
    }
  }, []);

  const validateInputs = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let emailError = '',
      passwordError = '';

    if (!/\S+@\S+\.\S+/.test(email)) emailError = 'Enter a valid email address.';
    if (password.length < 6) passwordError = 'Password must be at least 6 characters.';

    setErrors({ email: emailError, password: passwordError });
    return !emailError && !passwordError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state

    if (validateInputs()) {
      const data = new FormData(e.currentTarget);
      const email = data.get('email');
      const password = data.get('password');

      try {
        let response;

        // Clear previous session data before making a new request
        sessionStorage.clear();

        // Send login request based on user type (JobSeeker or Company)
        if (userType === 'jobseeker') {
          response = await axios.get('http://localhost:8086/jobSeeker/login', {
            params: {
              emailAddress: email,
              password: password,
            },
          });
        } else if (userType === 'company') {
          response = await axios.get('http://localhost:8086/company/login', {
            params: {
              companyEmail: email,
              password: password,
            },
          });
        }

        // Check if the response and response.data exist
        if (response && response.data) {
          console.log(response.data); // Log the response data for debugging
          const userSessionData = {
            userType,
            email,
            ...response.data,
          };

          // Store user data in sessionStorage
          if (userType === 'company') {
            sessionStorage.setItem('companyId', JSON.stringify(response.data.companyId));
            sessionStorage.setItem('companyLogoPath', JSON.stringify(response.data.companyLogoPath));
            sessionStorage.setItem('companyName', JSON.stringify(response.data.companyName));
            sessionStorage.setItem('status', JSON.stringify(response.data.status));
            navigate('/companydashboard');
          } else if (userType === 'jobseeker') {
            sessionStorage.setItem('jobSeekerId', JSON.stringify(response.data.jobSeekerId));
            sessionStorage.setItem('profilePicturePath', JSON.stringify(response.data.profilePicturePath));
            sessionStorage.setItem('status', JSON.stringify(response.data.status));
            navigate('/joblist');
          }
          // setIsSessionActive(true);
        } else {
          setApiError('Unexpected response format. No data found.');
        }
      } catch (error) {
        if (error.response) {
          setApiError(error.response.data.message || 'Login failed. Try again.');
        } else {
          setApiError('Failed to connect to the server.');
        }
      }
    }

    setLoading(false); // End loading state
  };

  const handleSignUpClick = () => {
    setOpenModal(true); // Open the modal
  };

  const handleNavigation = (path) => {
    setOpenModal(false); // Close the modal
    navigate(path); // Navigate to the respective page
  };

  const handleGoogleLoginSuccess = (response) => {
    const googleUserData = {
      ...response,
      userType: 'jobseeker',
    };
    sessionStorage.setItem('user', JSON.stringify(googleUserData));
    console.log('Google login successful:', googleUserData);
    navigate('/jobdetails');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Box display="flex" maxWidth="900px" width="90%" boxShadow={3} borderRadius={2} overflow="hidden">
          {/* Left Column */}
          <Box width="50%" p={4} bgcolor="lightblue" textAlign="center">
            <img
              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1808.jpg"
              alt="Sign In Illustration"
              style={{ width: '100%', height: '200px', borderRadius: '8px', objectFit: 'cover' }}
            />
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Why Sign In?
            </Typography>
            <Box mt={2}>
              {[['Access your job applications.', <Email />],
                ['Create and manage your profile.', <AccountCircle />],
                ['Secure access with your credentials.', <Lock />],
                ['Stay connected with recruiters.', <VerifiedUser />],
              ].map(([text, icon], i) => (
                <Box key={i} display="flex" alignItems="center" mb={1}>
                  {icon} <Typography ml={1}>{text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Column */}
          <Box width="50%" p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h4" mb={2}>Sign In</Typography>
            <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth="350px">
              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">I am a</FormLabel>
                <RadioGroup
                  row
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <FormControlLabel value="jobseeker" control={<Radio />} label="Job Seeker" />
                  <FormControlLabel value="company" control={<Radio />} label="Company" />
                </RadioGroup>
              </FormControl>

              <TextField
                id="email"
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                id="password"
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.password}
                helperText={errors.password}
              />
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
              {apiError && (
                <Typography color="error" align="center" mt={2}>
                  {apiError}
                </Typography>
              )}
              <Typography align="center" mt={2}>
                Don't have an account?{' '}
                <Link component="button" onClick={handleSignUpClick} variant="body2">
                  Sign up
                </Link>
              </Typography>
              {/* <Divider sx={{ my: 2 }}>or</Divider>
              <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={console.log} theme="outline" />
              <Button
                variant="outlined"
                fullWidth
                startIcon={<FaFacebook color="#3b5998" />}
                sx={{ mt: 2 }}
              >
                Sign in with Facebook
              </Button> */}
            </Box>
          </Box>
        </Box>

        {/* Modal for Sign Up Options */}
        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
          <DialogTitle>Select Sign Up Option</DialogTitle>
          <DialogActions>
            <Button onClick={() => handleNavigation('/jobseekersignup')} color="primary">
              Sign Up for Job Seeker
            </Button>
            <Button onClick={() => handleNavigation('/companysignup')} color="secondary">
              Sign Up for Company
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </GoogleOAuthProvider>
  );
}  





// import React, { useState, useEffect } from 'react';
// import { Box, Button, Checkbox, TextField, Typography, FormControlLabel, Divider, Link, Dialog, DialogTitle, DialogActions, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
// import { Email, AccountCircle, Lock, VerifiedUser } from '@mui/icons-material';
// import { FaFacebook } from 'react-icons/fa';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom'; // Import navigation hook
// import axios from 'axios'; // Import axios to make API requests

// export default function SignIn() {
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const [openModal, setOpenModal] = useState(false); // State for modal
//   const [apiError, setApiError] = useState(''); // To store API error messages
//   const [userType, setUserType] = useState('jobseeker'); // State to determine user type
//   const navigate = useNavigate(); // Navigation hook

//   // Log data from sessionStorage when the component mounts
//   useEffect(() => {
//     const userData = sessionStorage.getItem('user');
//     if (userData) {
//       console.log('Stored user data:', JSON.parse(userData)); // Log the data if available
//     } else {
//       console.log('No user data found in sessionStorage.');
//     }
//   }, []);

//   const validateInputs = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     let emailError = '', passwordError = '';

//     if (!/\S+@\S+\.\S+/.test(email)) emailError = 'Enter a valid email address.';
//     if (password.length < 6) passwordError = 'Password must be at least 6 characters.';

//     setErrors({ email: emailError, password: passwordError });
//     return !emailError && !passwordError;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateInputs()) {
//       const data = new FormData(e.currentTarget);
//       const email = data.get('email');
//       const password = data.get('password');

//       try {
//         let response;
//         // Send login request based on user type (JobSeeker or Company)
//         if (userType === 'jobseeker') {
//           response = await axios.get('http://localhost:8086/jobSeeker/login', {
//             params: {
//               emailAddress: email,
//               password: password,
//             },
//           });
//         } else if (userType === 'company') {
//           response = await axios.get('http://localhost:8086/company/login', {
//             params: {
//               companyEmail: email,
//               password: password,
//             },
//           });
//         }

//         // If login is successful, store data in sessionStorage
//         console.log(response.data); // Log the response for debugging
//         sessionStorage.setItem('companyId', JSON.stringify(response.data.companyId)); // Store the user data in sessionStorage
//         console.log('Stored companyId after login:', JSON.parse(sessionStorage.getItem('companyId')));

//         // Navigate to the job list or company dashboard based on user type
//         if (userType === 'jobseeker') {
//           navigate('/joblist');
//         } else if (userType === 'company') {
//           navigate('/companydashboard');
//         }
//       } catch (error) {
//         // If there's an error, handle it here
//         if (error.response) {
//           // API returned an error response
//           setApiError(error.response.data.message || 'An error occurred while logging in.');
//         } else {
//           // No response from the server
//           setApiError('Failed to connect to the server.');
//         }
//       }
//     }
//   };

//   const handleSignUpClick = () => {
//     setOpenModal(true); // Open the modal
//   };

//   const handleNavigation = (path) => {
//     setOpenModal(false); // Close the modal
//     navigate(path); // Navigate to the respective page
//   };

//   // Function to handle Google login success
//   const handleGoogleLoginSuccess = (response) => {
//     console.log('Google login successful:', response);
//     // After successful Google login, store data in sessionStorage
//     sessionStorage.setItem('user', JSON.stringify(response));
    
//     // Log the stored user data after Google login
//     console.log('Stored user data after Google login:', JSON.parse(sessionStorage.getItem('user')));
    
//     // Navigate to JobDetails page
//     navigate('/jobdetails');
//   };

//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//         <Box display="flex" maxWidth="900px" width="90%" boxShadow={3} borderRadius={2} overflow="hidden">
//           {/* Left Column */}
//           <Box width="50%" p={4} bgcolor="lightblue" textAlign="center">
//             <img
//               src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1808.jpg"
//               alt="Sign In Illustration"
//               style={{ width: '100%', height: '200px', borderRadius: '8px', objectFit: 'cover' }}
//             />
//             <Typography variant="h6" fontWeight="bold" mt={2}>
//               Why Sign In?
//             </Typography>
//             <Box mt={2}>
//               {[["Access your job applications.", <Email />], 
//                 ["Create and manage your profile.", <AccountCircle />], 
//                 ["Secure access with your credentials.", <Lock />], 
//                 ["Stay connected with recruiters.", <VerifiedUser />]]
//                 .map(([text, icon], i) => (
//                   <Box key={i} display="flex" alignItems="center" mb={1}>
//                     {icon} <Typography ml={1}>{text}</Typography>
//                   </Box>
//               ))}
//             </Box>
//           </Box>

//           {/* Right Column */}
//           <Box width="50%" p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//             <Typography variant="h4" mb={2}>Sign In</Typography>
//             <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth="350px">
//               {/* Radio buttons to select user type */}
//               <FormControl component="fieldset" margin="normal">
//                 <FormLabel component="legend">I am a</FormLabel>
//                 <RadioGroup
//                   row
//                   value={userType}
//                   onChange={(e) => setUserType(e.target.value)}
//                 >
//                   <FormControlLabel value="jobseeker" control={<Radio />} label="Job Seeker" />
//                   <FormControlLabel value="company" control={<Radio />} label="Company" />
//                 </RadioGroup>
//               </FormControl>

//               <TextField
//                 id="email"
//                 label="Email"
//                 name="email"
//                 fullWidth
//                 margin="normal"
//                 error={!!errors.email}
//                 helperText={errors.email}
//               />
//               <TextField
//                 id="password"
//                 label="Password"
//                 name="password"
//                 type="password"
//                 fullWidth
//                 margin="normal"
//                 error={!!errors.password}
//                 helperText={errors.password}
//               />
//               <FormControlLabel control={<Checkbox />} label="Remember me" />
//               <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//                 Sign In
//               </Button>
//               {apiError && (
//                 <Typography color="error" align="center" mt={2}>
//                   {apiError}
//                 </Typography>
//               )}
//               <Typography align="center" mt={2}>
//                 Don't have an account?{' '}
//                 <Link component="button" onClick={handleSignUpClick} variant="body2">
//                   Sign up
//                 </Link>
//               </Typography>
//               <Divider sx={{ my: 2 }}>or</Divider>
//               <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={console.log} theme="outline" />
//               <Button
//                 variant="outlined"
//                 fullWidth
//                 startIcon={<FaFacebook color="#3b5998" />}
//                 sx={{ mt: 2 }}
//               >
//                 Sign in with Facebook
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         {/* Modal for Sign Up Options */}
//         <Dialog open={openModal} onClose={() => setOpenModal(false)}>
//           <DialogTitle>Select Sign Up Option</DialogTitle>
//           <DialogActions>
//             <Button onClick={() => handleNavigation('/jobseekersignup')} color="primary">
//               Sign Up For get a job
//             </Button>
//             <Button onClick={() => handleNavigation('/companysignup')} color="secondary">
//               Sign Up for hire a person
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </GoogleOAuthProvider>
//   );
// }
