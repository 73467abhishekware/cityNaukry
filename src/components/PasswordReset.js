// import React, { useState } from 'react';
// import axios from 'axios';

// const PasswordReset = () => {
//   const [email, setEmail] = useState('');
//   const [resetToken, setResetToken] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [isResetting, setIsResetting] = useState(false);
//   const [isSendingEmail, setIsSendingEmail] = useState(false);

//   // Handle forgot password request
//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     setIsSendingEmail(true);
//     setMessage('');

//     try {
//       const response = await axios.post('http://localhost:8086/jobSeeker/forgotPassword', null, {
//         params: {
//           emailAddress: email
//         }
//       });

//       setMessage(response.data.message || 'Password reset link has been sent.');
//       setIsSendingEmail(false);
//     } catch (error) {
//       setMessage('Failed to send reset email. Please try again later.');
//       setIsSendingEmail(false);
//     }
//   };

//   // Handle reset password request
//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setIsResetting(true);
//     setMessage('');

//     if (newPassword !== confirmPassword) {
//       setMessage('Passwords do not match.');
//       setIsResetting(false);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8086/jobSeeker/resetPassword', null, {
//         params: {
//           token: resetToken,
//           newPassword: newPassword,
//           confirmPassword: confirmPassword
//         }
//       });

//       setMessage('Password reset successfully.');
//       setIsResetting(false);
//     } catch (error) {
//       setMessage('Failed to reset password. Please check your token and try again.');
//       setIsResetting(false);
//     }
//   };

//   return (
//     <div className="password-reset-container">
//       <h2>Reset Your Password</h2>

//       {/* Forgot Password Form */}
//       {!resetToken ? (
//         <div className="forgot-password-form">
//           <h3>Forgot Password</h3>
//           <form onSubmit={handleForgotPassword}>
//             <label>Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button type="submit" disabled={isSendingEmail}>
//               {isSendingEmail ? 'Sending...' : 'Send Password Reset Link'}
//             </button>
//           </form>
//         </div>
//       ) : (
//         // Reset Password Form
//         <div className="reset-password-form">
//           <h3>Reset Password</h3>
//           <form onSubmit={handleResetPassword}>
//             <label>Reset Token</label>
//             <input
//               type="text"
//               placeholder="Enter the reset token"
//               value={resetToken}
//               onChange={(e) => setResetToken(e.target.value)}
//               required
//             />
//             <label>New Password</label>
//             <input
//               type="password"
//               placeholder="Enter new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Confirm new password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <button type="submit" disabled={isResetting}>
//               {isResetting ? 'Resetting...' : 'Reset Password'}
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Message */}
//       {message && <div className="message">{message}</div>}

//       <style jsx>{`
//         .password-reset-container {
//           max-width: 400px;
//           margin: 50px auto;
//           padding: 20px;
//           border-radius: 8px;
//           background-color: #f9f9f9;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }

//         h2 {
//           text-align: center;
//           font-size: 28px;
//           color: #333;
//         }

//         .forgot-password-form,
//         .reset-password-form {
//           margin-bottom: 20px;
//         }

//         label {
//           display: block;
//           font-size: 14px;
//           margin-bottom: 5px;
//           color: #555;
//         }

//         input {
//           width: 100%;
//           padding: 10px;
//           margin: 10px 0;
//           border: 1px solid #ccc;
//           border-radius: 4px;
//         }

//         button {
//           width: 100%;
//           padding: 12px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           font-size: 16px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         button:disabled {
//           background-color: #cccccc;
//         }

//         button:hover {
//           background-color: #0056b3;
//         }

//         .message {
//           text-align: center;
//           margin-top: 20px;
//           padding: 10px;
//           background-color: #f0f8ff;
//           color: #007bff;
//           border-radius: 5px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PasswordReset;
import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  // Handle forgot password request
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:8086/jobSeeker/forgotPassword', null, {
        params: {
          emailAddress: email
        }
      });

      setMessage(response.data.message || 'Password reset link has been sent.');
      setIsSendingEmail(false);
    } catch (error) {
      setMessage('Failed to send reset email. Please try again later.');
      setIsSendingEmail(false);
    }
  };

  // Handle reset password request
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsResetting(true);
    setMessage('');

    // Check if the passwords match
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      setIsResetting(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8086/jobSeeker/resetPassword', null, {
        params: {
          token: resetToken,
          newPassword: newPassword,
          confirmPassword: confirmPassword
        }
      });

      setMessage('Password reset successfully.');
      setIsResetting(false);
    } catch (error) {
      // Display error details if the token is invalid or expired
      if (error.response && error.response.data) {
        setMessage(error.response.data.errorDetails || 'Failed to reset password. Please check your token and try again.');
      } else {
        setMessage('Failed to reset password. Please try again later.');
      }
      setIsResetting(false);
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Reset Your Password</h2>

      {/* Forgot Password Form */}
      {!resetToken ? (
        <div className="forgot-password-form">
          <h3>Forgot Password</h3>
          <form onSubmit={handleForgotPassword}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={isSendingEmail}>
              {isSendingEmail ? 'Sending...' : 'Send Password Reset Link'}
            </button>
          </form>
        </div>
      ) : (
        // Reset Password Form
        <div className="reset-password-form">
          <h3>Reset Password</h3>
          <form onSubmit={handleResetPassword}>
            <label>Reset Token</label>
            <input
              type="text"
              placeholder="Enter the reset token"
              value={resetToken}
              onChange={(e) => setResetToken(e.target.value)}
              required
            />
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={isResetting}>
              {isResetting ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      )}

      {/* Message */}
      {message && <div className="message">{message}</div>}

      <style jsx>{`
        .password-reset-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          font-size: 28px;
          color: #333;
        }

        .forgot-password-form,
        .reset-password-form {
          margin-bottom: 20px;
        }

        label {
          display: block;
          font-size: 14px;
          margin-bottom: 5px;
          color: #555;
        }

        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:disabled {
          background-color: #cccccc;
        }

        button:hover {
          background-color: #0056b3;
        }

        .message {
          text-align: center;
          margin-top: 20px;
          padding: 10px;
          background-color: #f0f8ff;
          color: #007bff;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default PasswordReset;
