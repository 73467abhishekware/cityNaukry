
// import * as React from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Card,
//   Grid,
//   Divider,
//   Input,
//   IconButton,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Person, Email, Lock, Phone, LocationOn, CameraAlt } from '@mui/icons-material';

// const Container = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   minHeight: '100vh',
//   backgroundColor: '#f6faff',
//   padding: '2rem',
//   alignItems: 'center',
//   justifyContent: 'center',
//   [theme.breakpoints.down('sm')]: {
//     padding: '1rem',
//   },
// }));

// const Header = styled(Box)(() => ({
//   textAlign: 'center',
//   padding: '1rem',
//   backgroundColor: '#f6faff',
// }));

// const ColumnsWrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   gap: '2rem',
//   marginTop: '0',
//   [theme.breakpoints.down('sm')]: {
//     flexDirection: 'column',
//     gap: '1rem',
//   },
// }));

// const LeftColumn = styled(Box)(() => ({
//   flex: 1,
//   padding: '2rem',
//   backgroundColor: '#ffffff',
//   borderRadius: '8px',
//   boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
//   textAlign: 'center',
// }));

// const RightColumn = styled(Card)(({ theme }) => ({
//   flex: 1,
//   padding: '2rem',
//   maxWidth: '600px',
//   boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
//   borderRadius: '6px',
//   [theme.breakpoints.down('sm')]: {
//     maxWidth: '100%',
//   },
// }));

// const ProgressText = styled(Typography)(() => ({
//   textAlign: 'right',
//   color: '#777',
//   fontSize: '0.875rem',
// }));

// export default function JobSeekerSignUpPage() {
//   const [step, setStep] = React.useState(1);

//   const handleNext = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <>
//       <Header>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Job Seeker Registration
//         </Typography>
//       </Header>

//       <Container>
//         <ColumnsWrapper>
//           <LeftColumn>
//             <img
//               src="https://img.freepik.com/free-vector/choice-worker-concept-illustrated_52683-44076.jpg"
//               alt="Logo"
//               style={{ marginBottom: '1rem', width: '80%' }}
//             />
//             <Typography variant="h5" gutterBottom>
//               Join Our Platform
//             </Typography>
//             <Typography variant="body1" color="textSecondary" paragraph>
//               Complete your profile to be seen by employers and get job recommendations that suit your skills and interests.
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               No hidden fees. Apply for jobs directly through our portal. For inquiries, contact us at 0800 123456.
//             </Typography>
//           </LeftColumn>

//           <RightColumn>
//             <Typography variant="h6" gutterBottom>
//               {step === 1 && 'Basic Information'}
//               {step === 2 && 'Account Information'}
//               {step === 3 && 'Resume Upload'}
//               {step === 4 && 'Profile Picture'}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" paragraph>
//               {step === 1 && 'Fill in your personal details to get started.'}
//               {step === 2 && 'Set up your account details for login.'}
//               {step === 3 && 'Upload your resume to apply for jobs.'}
//               {step === 4 && 'Upload your profile picture to complete your profile.'}
//             </Typography>

//             <Box component="form">
//               <Grid container spacing={2}>
//                 {step === 1 && (
//                   <>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="First Name"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Person /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="Last Name"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Person /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Email Address"
//                         type="email"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Email /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                  </>
//                 )}

//                 {step === 2 && (
//                   <>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="Password"
//                         type="password"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Lock /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                       <TextField
//                         fullWidth
//                         label="Confirm Password"
//                         type="password"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Lock /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Phone Number"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Phone /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Location"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><LocationOn /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                   </>
//                 )}

//                 {step === 3 && (
//                   <Grid item xs={12}>
//                     <Input type="file" fullWidth id="resume" name="resume" required />
//                     <Typography variant="body2" color="textSecondary">Upload Resume</Typography>
//                   </Grid>
//                 )}

//                 {step === 4 && (
//                   <Grid item xs={12}>
//                     <Input type="file" fullWidth id="profilePicture" name="profilePicture" />
//                     <Typography variant="body2" color="textSecondary">Upload Profile Picture (optional)</Typography>
//                     <IconButton><CameraAlt /></IconButton>
//                   </Grid>
//                 )}
//               </Grid>

//               <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
//                 {step > 1 && (
//                   <Button onClick={handleBack} variant="outlined" color="primary">
//                     Back
//                   </Button>
//                 )}
//                 <Button onClick={handleNext} variant="contained" color="primary">
//                   {step === 4 ? 'Submit' : 'Next'}
//                 </Button>
//               </Box>

//               <Divider sx={{ my: 2 }}>
//                 <Typography sx={{ color: 'text.secondary' }}>or</Typography>
//               </Divider>

//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Button fullWidth variant="outlined" color="primary">
//                   Sign up with Google
//                 </Button>
//                 <Button fullWidth variant="outlined" color="primary">
//                   Sign up with LinkedIn
//                 </Button>
//               </Box>

//               <ProgressText>{step} of 4</ProgressText>
//             </Box>
//           </RightColumn>
//         </ColumnsWrapper>
//       </Container>
//     </>
//   );
// }
import * as React from 'react';
import axios from 'axios'; // Import Axios
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  Grid,
  Divider,
  Input,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Person, Email, Lock, Phone, LocationOn, CameraAlt } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f6faff',
  padding: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
  },
}));

const Header = styled(Box)(() => ({
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#f6faff',
}));

const ColumnsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  marginTop: '0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
  },
}));

const LeftColumn = styled(Box)(() => ({
  flex: 1,
  padding: '2rem',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.05)',
  textAlign: 'center',
}));

const RightColumn = styled(Card)(({ theme }) => ({
  flex: 1,
  padding: '2rem',
  maxWidth: '600px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const ProgressText = styled(Typography)(() => ({
  textAlign: 'right',
  color: '#777',
  fontSize: '0.875rem',
}));

export default function JobSeekerSignUpPage() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    location: '',
    resumePath: '',
    profilePicturePath: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const navigate = useNavigate(); 

  const handleNext = () => {
    if (step === 4) {
      handleSubmit(); // If it's the last step, submit the form
    } else {
      setStep((prevStep) => prevStep + 1); // Otherwise, go to the next step
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault(); // Prevent default if it's being triggered by form submission

    // Basic validations before submission
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.emailAddress) {
      setError('Please fill in all the required fields.');
      return;
    }

    // Check if resume file is selected (required on step 3)
    if (step === 3 && !formData.resumePath) {
      setError('Please upload your resume.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    // Prepare the form data (in case of file uploads)
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        if (key === 'resumePath') {
          data.append('file', formData[key]);  // For resume
        } else if (key === 'profilePicturePath') {
          data.append('profilePicture', formData[key]);  // For profile picture
        } else {
          data.append(key, formData[key]);
        }
      }
    });

    try {
      const response = await axios.post('http://localhost:8086/jobSeeker/register', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccess('Registration successful!');
      setLoading(false);
      alert("register successfully")
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      console.error(error.response || error); // Log error to get more details
      setError('Something went wrong, please try again.');
    }
    
  };

  return (
    <>
      <Header>
        <Typography variant="h4" component="h1" gutterBottom>
          Job Seeker Registration
        </Typography>
      </Header>

      <Container>
        <ColumnsWrapper>
          <LeftColumn>
            <img
              src="https://img.freepik.com/free-vector/choice-worker-concept-illustrated_52683-44076.jpg"
              alt="Logo"
              style={{ marginBottom: '1rem', width: '80%' }}
            />
            <Typography variant="h5" gutterBottom>
              Join Our Platform
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Complete your profile to be seen by employers and get job recommendations that suit your skills and interests.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              No hidden fees. Apply for jobs directly through our portal. For inquiries, contact us at 0800 123456.
            </Typography>
          </LeftColumn>

          <RightColumn>
            <Typography variant="h6" gutterBottom>
              {step === 1 && 'Basic Information'}
              {step === 2 && 'Account Information'}
              {step === 3 && 'Resume Upload'}
              {step === 4 && 'Profile Picture'}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {step === 1 && 'Fill in your personal details to get started.'}
              {step === 2 && 'Set up your account details for login.'}
              {step === 3 && 'Upload your resume to apply for jobs.'}
              {step === 4 && 'Upload your profile picture to complete your profile.'}
            </Typography>

            <Box component="form">
              <Grid container spacing={2}>
                {step === 1 && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        InputProps={{
                          startAdornment: <IconButton><Person /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        InputProps={{
                          startAdornment: <IconButton><Person /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        required
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        InputProps={{
                          startAdornment: <IconButton><Email /></IconButton>,
                        }}
                      />
                    </Grid>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        required
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        InputProps={{
                          startAdornment: <IconButton><Lock /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        required
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        InputProps={{
                          startAdornment: <IconButton><Lock /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        required
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        InputProps={{
                          startAdornment: <IconButton><Phone /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Location"
                        required
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        InputProps={{
                          startAdornment: <IconButton><LocationOn /></IconButton>,
                        }}
                      />
                    </Grid>
                  </>
                )}

                {step === 3 && (
                  <Grid item xs={12}>
                    <Input
                      type="file"
                      fullWidth
                      name="resumePath"
                      onChange={handleFileChange}
                      required
                    />
                    <Typography variant="body2" color="textSecondary">Upload Resume</Typography>
                  </Grid>
                )}

                {step === 4 && (
                  <Grid item xs={12}>
                    <Input
                      type="file"
                      fullWidth
                      name="profilePicturePath"
                      onChange={handleFileChange}
                    />
                    <Typography variant="body2" color="textSecondary">Upload Profile Picture (optional)</Typography>
                    <IconButton><CameraAlt /></IconButton>
                  </Grid>
                )}
              </Grid>

              {error && (
                <Typography variant="body2" color="error" gutterBottom>
                  {error}
                </Typography>
              )}
              {success && (
                <Typography variant="body2" color="success.main" gutterBottom>
                  {success}
                </Typography>
              )}
              <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBack}
                  disabled={step === 1}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : step === 4 ? 'Submit' : 'Next'}
                </Button>
              </Box>
              <ProgressText>
                Step {step} of 4
              </ProgressText>
            </Box>
          </RightColumn>
        </ColumnsWrapper>
      </Container>
    </>
  );
}
