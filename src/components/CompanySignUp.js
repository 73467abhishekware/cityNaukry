
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
// import { Business, Email, Phone, LocationOn, CameraAlt, Person } from '@mui/icons-material';

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
//   height: 'auto',
//   minHeight: '500px', 
//   overflowY: 'auto', 
//   [theme.breakpoints.down('sm')]: {
//     maxWidth: '100%',
//   },
// }));

// const ProgressText = styled(Typography)(() => ({
//   textAlign: 'right',
//   color: '#777',
//   fontSize: '0.875rem',
// }));

// export default function CompanySignUp() {
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
//           Company Registration
//         </Typography>
//       </Header>

//       <Container>
//         <ColumnsWrapper>
//           <LeftColumn>
//             <img
//               src="https://images.unsplash.com/photo-1549637642-90187f64f420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXBhbnklMjByZWdpc3RyYXRpb258ZW58MHx8MHx8fDA%3D"
//               alt="Logo"
//               style={{ marginBottom: '1rem', width: '80%' }}
//             />
//             <Typography variant="h5" gutterBottom>
//               Join Us Today
//             </Typography>
//             <Typography variant="body1" color="textSecondary" paragraph>
//               Provide your company's details to get started and post jobs on our platform.
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               No hidden fees. Hire the best talent through our platform. For inquiries, contact us at 0800 123456.
//             </Typography>
//           </LeftColumn>

//           <RightColumn>
//             <Typography variant="h6" gutterBottom>
//               {step === 1 && 'Company Information'}
//               {step === 2 && 'Account Information'}
//               {step === 3 && 'Company Logo'}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" paragraph>
//               {step === 1 && 'Fill in your company details to get started.'}
//               {step === 2 && 'Set up your account details for login.'}
//               {step === 3 && 'Upload your company logo to complete your registration.'}
//             </Typography>

//             <Box component="form">
//               <Grid container spacing={2}>
//                 {step === 1 && (
//                   <>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Name"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Business /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Industry Type"
//                         required
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Size"
//                         required
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Website"
//                         placeholder="https://www.techcorp.com"
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Description"
//                         multiline
//                         rows={4}
//                         required
//                       />
//                     </Grid>
//                   </>
//                 )}

//                 {step === 2 && (
//                   <>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Person"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Person /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Person designation"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Person /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Email"
//                         type="email"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Email /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Phone Number"
//                         required
//                         InputProps={{
//                           startAdornment: <IconButton><Phone /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Address"
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
//                     <Input type="file" fullWidth id="companyLogo" name="companyLogo" />
//                     <Typography variant="body2" color="textSecondary">Upload Company Logo</Typography>
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
//                   {step === 3 ? 'Submit' : 'Next'}
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

//               <ProgressText>{step} of 3</ProgressText>
//             </Box>
//           </RightColumn>
//         </ColumnsWrapper>
//       </Container>
//     </>
//   );
// }

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
// import { Business, Email, Phone, LocationOn, CameraAlt, Person } from '@mui/icons-material';
// import axios from 'axios';  // Add axios for making API requests

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
//   height: 'auto',
//   minHeight: '500px',
//   overflowY: 'auto',
//   [theme.breakpoints.down('sm')]: {
//     maxWidth: '100%',
//   },
// }));

// const ProgressText = styled(Typography)(() => ({
//   textAlign: 'right',
//   color: '#777',
//   fontSize: '0.875rem',
// }));

// export default function CompanySignUp() {
//   const [step, setStep] = React.useState(1);
//   const [companyData, setCompanyData] = React.useState({
//     companyName: '',
//     industryType: '',
//     companySize: '',
//     companyWebsite: '',
//     companyDescription: '',
//     contactPerson: '',
//     contactPersonDesignation: '',
//     contactEmail: '',
//     contactPhoneNumber: '',
//     companyAddress: '',
//     companyLogo: null,
//   });

//   const handleNext = () => {
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCompanyData({
//       ...companyData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setCompanyData({
//       ...companyData,
//       companyLogo: file,
//     });
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     // Append text fields
//     Object.keys(companyData).forEach((key) => {
//       if (key !== 'companyLogo') {
//         formData.append(key, companyData[key]);
//       }
//     });
//     // Append the logo file
//     if (companyData.companyLogo) {
//       formData.append('companyLogo', companyData.companyLogo);
//     }

//     try {
//       const response = await axios.post('http://localhost:8086/company/register', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Company registered successfully:', response.data);
//       // Reset the form or redirect the user upon success
//     } catch (error) {
//       console.error('Error registering company:', error);
//       // Handle error appropriately (e.g., show an error message)
//     }
//   };

//   return (
//     <>
//       <Header>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Company Registration
//         </Typography>
//       </Header>

//       <Container>
//         <ColumnsWrapper>
//           <LeftColumn>
//             <img
//               src="https://images.unsplash.com/photo-1549637642-90187f64f420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXBhbnklMjByZWdpc3RyYXRpb258ZW58MHx8MHx8fDA%3D"
//               alt="Logo"
//               style={{ marginBottom: '1rem', width: '80%' }}
//             />
//             <Typography variant="h5" gutterBottom>
//               Join Us Today
//             </Typography>
//             <Typography variant="body1" color="textSecondary" paragraph>
//               Provide your company's details to get started and post jobs on our platform.
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               No hidden fees. Hire the best talent through our platform. For inquiries, contact us at 0800 123456.
//             </Typography>
//           </LeftColumn>

//           <RightColumn>
//             <Typography variant="h6" gutterBottom>
//               {step === 1 && 'Company Information'}
//               {step === 2 && 'Account Information'}
//               {step === 3 && 'Company Logo'}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" paragraph>
//               {step === 1 && 'Fill in your company details to get started.'}
//               {step === 2 && 'Set up your account details for login.'}
//               {step === 3 && 'Upload your company logo to complete your registration.'}
//             </Typography>

//             <Box component="form">
//               <Grid container spacing={2}>
//                 {step === 1 && (
//                   <>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Name"
//                         required
//                         name="companyName"
//                         value={companyData.companyName}
//                         onChange={handleChange}
//                         InputProps={{
//                           startAdornment: <IconButton><Business /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Industry Type"
//                         required
//                         name="industryType"
//                         value={companyData.industryType}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Size"
//                         required
//                         name="companySize"
//                         value={companyData.companySize}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Website"
//                         name="companyWebsite"
//                         value={companyData.companyWebsite}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Description"
//                         multiline
//                         rows={4}
//                         required
//                         name="companyDescription"
//                         value={companyData.companyDescription}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                   </>
//                 )}

//                 {step === 2 && (
//                   <>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Person"
//                         required
//                         name="contactPerson"
//                         value={companyData.contactPerson}
//                         onChange={handleChange}
//                         InputProps={{
//                           startAdornment: <IconButton><Person /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Person Designation"
//                         required
//                         name="contactPersonDesignation"
//                         value={companyData.contactPersonDesignation}
//                         onChange={handleChange}
//                         InputProps={{
//                           startAdornment: <IconButton><Person /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Email"
//                         type="email"
//                         required
//                         name="contactEmail"
//                         value={companyData.contactEmail}
//                         onChange={handleChange}
//                         InputProps={{
//                           startAdornment: <IconButton><Email /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Contact Phone Number"
//                         required
//                         name="contactPhoneNumber"
//                         value={companyData.contactPhoneNumber}
//                         onChange={handleChange}
//                         InputProps={{
//                           startAdornment: <IconButton><Phone /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         fullWidth
//                         label="Company Address"
//                         required
//                         name="companyAddress"
//                         value={companyData.companyAddress}
//                         onChange={handleChange}
//                         InputProps={{
//                           startAdornment: <IconButton><LocationOn /></IconButton>,
//                         }}
//                       />
//                     </Grid>
//                   </>
//                 )}

//                 {step === 3 && (
//                   <Grid item xs={12}>
//                     <Input type="file" fullWidth id="companyLogo" name="companyLogo" onChange={handleFileChange} />
//                     <Typography variant="body2" color="textSecondary">Upload Company Logo</Typography>
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
//                 <Button onClick={step === 3 ? handleSubmit : handleNext} variant="contained" color="primary">
//                   {step === 3 ? 'Submit' : 'Next'}
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

//               <ProgressText>{step} of 3</ProgressText>
//             </Box>
//           </RightColumn>
//         </ColumnsWrapper>
//       </Container>
//     </>
//   );
// }



import * as React from 'react';
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
import { Business, Email, Phone, LocationOn, CameraAlt, Person } from '@mui/icons-material';
import axios from 'axios';  // Add axios for making API requests

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
  height: 'auto',
  minHeight: '500px',
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

const ProgressText = styled(Typography)(() => ({
  textAlign: 'right',
  color: '#777',
  fontSize: '0.875rem',
}));

export default function CompanySignUp() {
  const [step, setStep] = React.useState(1);
  const [companyData, setCompanyData] = React.useState({
    companyName: '',
    industryType: '',
    companySize: '',
    companyWebsite: '',
    companyDescription: '',
    contactPerson: '',
    contactPersonDesignation: '',
    contactEmail: '',
    contactPhoneNumber: '',
    companyAddress: '',
    companyLogo: null,
    companyEmail: '', // Added company email
    password: '', // Added password
    confirmPassword: '', // Added confirm password
  });

  const [errors, setErrors] = React.useState({
    password: '',
    confirmPassword: '',
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCompanyData({
      ...companyData,
      companyLogo: file,
    });
  };

  // Function to validate password and confirm password
  const validatePasswords = () => {
    const { password, confirmPassword } = companyData;
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match.' });
      return false;
    }
    setErrors({ ...errors, confirmPassword: '' });
    return true;
  };

  const handleSubmit = async () => {
    if (!validatePasswords()) return; // Stop form submission if passwords don't match

    const formData = new FormData();
    // Append text fields
    Object.keys(companyData).forEach((key) => {
      if (key !== 'companyLogo' && key !== 'confirmPassword') {
        formData.append(key, companyData[key]);
      }
    });
    // Append the logo file
    if (companyData.companyLogo) {
      formData.append('companyLogo', companyData.companyLogo);
    }

    try {
      const response = await axios.post('http://localhost:8086/company/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
     alert('Company registered successfully');
     navigate('/signin');
      // Reset the form or redirect the user upon success
    } catch (error) {
      console.error('Error registering company:', error);
      // Handle error appropriately (e.g., show an error message)
    }
  };

  return (
    <>
      <Header>
        <Typography variant="h4" component="h1" gutterBottom>
          Company Registration
        </Typography>
      </Header>

      <Container>
        <ColumnsWrapper>
          <LeftColumn>
            <img
              src="https://images.unsplash.com/photo-1549637642-90187f64f420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXBhbnklMjByZWdpc3RyYXRpb258ZW58MHx8MHx8fDA%3D"
              alt="Logo"
              style={{ marginBottom: '1rem', width: '80%' }}
            />
            <Typography variant="h5" gutterBottom>
              Join Us Today
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Provide your company's details to get started and post jobs on our platform.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              No hidden fees. Hire the best talent through our platform. For inquiries, contact us at 0800 123456.
            </Typography>
          </LeftColumn>

          <RightColumn>
            <Typography variant="h6" gutterBottom>
              {step === 1 && 'Company Information'}
              {step === 2 && 'Account Information'}
              {step === 3 && 'Company Logo'}
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {step === 1 && 'Fill in your company details to get started.'}
              {step === 2 && 'Set up your account details for login.'}
              {step === 3 && 'Upload your company logo to complete your registration.'}
            </Typography>

            <Box component="form">
              <Grid container spacing={2}>
                {step === 1 && (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        required
                        name="companyName"
                        value={companyData.companyName}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <IconButton><Business /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Industry Type"
                        required
                        name="industryType"
                        value={companyData.industryType}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Size"
                        required
                        name="companySize"
                        value={companyData.companySize}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Website"
                        name="companyWebsite"
                        value={companyData.companyWebsite}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Description"
                        multiline
                        rows={4}
                        required
                        name="companyDescription"
                        value={companyData.companyDescription}
                        onChange={handleChange}
                      />
                    </Grid>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Email"
                        type="email"
                        required
                        name="companyEmail"
                        value={companyData.companyEmail}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <IconButton><Email /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        required
                        name="password"
                        value={companyData.password}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        required
                        name="confirmPassword"
                        value={companyData.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Contact Person"
                        required
                        name="contactPerson"
                        value={companyData.contactPerson}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <IconButton><Person /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Contact Person Designation"
                        required
                        name="contactPersonDesignation"
                        value={companyData.contactPersonDesignation}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <IconButton><Person /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Contact Email"
                        type="email"
                        required
                        name="contactEmail"
                        value={companyData.contactEmail}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <IconButton><Email /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Contact Phone Number"
                        required
                        name="contactPhoneNumber"
                        value={companyData.contactPhoneNumber}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <IconButton><Phone /></IconButton>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Company Address"
                        required
                        name="companyAddress"
                        value={companyData.companyAddress}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: <IconButton><LocationOn /></IconButton>,
                        }}
                      />
                    </Grid>
                  </>
                )}

                {step === 3 && (
                  <Grid item xs={12}>
                    <Input type="file" fullWidth id="companyLogo" name="companyLogo" onChange={handleFileChange} />
                    <Typography variant="body2" color="textSecondary">Upload Company Logo</Typography>
                    <IconButton><CameraAlt /></IconButton>
                  </Grid>
                )}
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                {step > 1 && (
                  <Button onClick={handleBack} variant="outlined" color="primary">
                    Back
                  </Button>
                )}
                <Button onClick={step === 3 ? handleSubmit : handleNext} variant="contained" color="primary">
                  {step === 3 ? 'Submit' : 'Next'}
                </Button>
              </Box>

              <Divider sx={{ my: 2 }}>
                <Typography sx={{ color: 'text.secondary' }}>or</Typography>
              </Divider>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button fullWidth variant="outlined" color="primary">
                  Sign up with Google
                </Button>
                <Button fullWidth variant="outlined" color="primary">
                  Sign up with LinkedIn
                </Button>
              </Box>

              <ProgressText>{step} of 3</ProgressText>
            </Box>
          </RightColumn>
        </ColumnsWrapper>
      </Container>
    </>
  );
}
