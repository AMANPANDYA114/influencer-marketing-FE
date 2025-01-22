// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate to the login page
// import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast for notifications
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

// const ChangePasswordManage = () => {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState(''); // Only store the new password
//   const [loading, setLoading] = useState(false); // Loading state for API request
//   const navigate = useNavigate(); // useNavigate hook to navigate after success

//   const handleEmailChange = (e) => setEmail(e.target.value);
//   const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

//   const handleSubmit = async () => {
//     if (!email || !newPassword) {
//       toast.error('Email and New Password are required');
//       return;
//     }

//     setLoading(true); // Start loading state

//     try {
//       // Send the password change request using PUT method
//       const response = await fetch('https://server-side-influencer-1.onrender.com/manager/change-password', {
//         method: 'PUT', // Changed to PUT method
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, newPassword }), // Send email and newPassword to backend
//       });

//       const data = await response.json();

//       if (response.status === 200) {
//         toast.success('Password changed successfully');
//         // Navigate to the Influencer login page after success
//         navigate('/ManagerLogin');
//       } else {
//         toast.error(data.message || 'Failed to change password');
//       }
//     } catch (err) {
//       toast.error('Error: Password change failed');
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-white">
//       <div className="flex flex-col justify-center items-center w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-700" style={{ color: '#1e3a8a' }}>
//           Change Your Password
//         </h2>

//         {/* Email input field */}
//         <form className="max-w-sm w-full mb-4">
//           <label htmlFor="email-input" className="block mb-2 text-sm font-medium text-gray-900">
//             Email:
//           </label>
//           <div className="relative">
//             <input
//               type="email"
//               id="email-input"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
//               value={email}
//               onChange={handleEmailChange}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//         </form>

//         {/* New Password input field */}
//         <form className="max-w-sm w-full">
//           <label htmlFor="new-password-input" className="block mb-2 text-sm font-medium text-gray-900">
//             New Password:
//           </label>
//           <div className="relative">
//             <input
//               type="password"
//               id="new-password-input"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
//               placeholder="Enter your new password"
//               required
//               value={newPassword}
//               onChange={handleNewPasswordChange}
//             />
//           </div>
//         </form>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           className="w-full p-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300 mt-4"
//           disabled={loading}
//         >
//           {loading ? 'Changing Password...' : 'Change Password'}
//         </button>
//       </div>

//       {/* ToastContainer to display toast notifications */}
//       <ToastContainer autoClose={5000} />
//     </div>
//   );
// };

// export default ChangePasswordManage;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate to the login page
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import visibility icons

const ChangePasswordManage = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState(''); // Only store the new password
  const [loading, setLoading] = useState(false); // Loading state for API request
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const navigate = useNavigate(); // useNavigate hook to navigate after success

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };

  const handleSubmit = async () => {
    if (!email || !newPassword) {
      toast.error('Email and New Password are required');
      return;
    }

    setLoading(true); // Start loading state

    try {
      // Send the password change request using PUT method
      const response = await fetch('https://server-side-influencer-1.onrender.com/manager/change-password', {
        method: 'PUT', // Changed to PUT method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }), // Send email and newPassword to backend
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success('Password changed successfully');
        // Navigate to the Influencer login page after success
        navigate('/ManagerLogin');
      } else {
        toast.error(data.message || 'Failed to change password');
      }
    } catch (err) {
      toast.error('Error: Password change failed');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-white">
      <div className="flex flex-col justify-center items-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700" style={{ color: '#1e3a8a' }}>
          Change Your Password
        </h2>

        {/* Email input field */}
        <form className="max-w-sm w-full mb-4">
          <label htmlFor="email-input" className="block mb-2 text-sm font-medium text-gray-900">
            Email:
          </label>
          <div className="relative">
            <input
              type="email"
              id="email-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </form>

        {/* New Password input field with show/hide toggle */}
        <form className="max-w-sm w-full">
          <label htmlFor="new-password-input" className="block mb-2 text-sm font-medium text-gray-900">
            New Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
              id="new-password-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
              placeholder="Enter your new password"
              required
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            {/* Toggle visibility icon */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <VisibilityOff className="text-gray-600" /> : <Visibility className="text-gray-600" />}
            </button>
          </div>
        </form>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300 mt-4"
          disabled={loading}
        >
          {loading ? 'Changing Password...' : 'Change Password'}
        </button>
      </div>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default ChangePasswordManage;

