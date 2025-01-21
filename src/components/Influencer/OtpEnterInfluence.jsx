// import React, { useState } from 'react';

// const OtpEnterInfluencer = () => {
//   const [otp, setOtp] = useState('');

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleNextClick = () => {
//     console.log('OTP Submitted:', otp);
//   };

//   return (
//     <div className="flex flex-col justify-between min-h-screen p-4 bg-blue-50">
//       <div className="flex flex-col justify-center items-center flex-grow">
//         {/* Heading */}
//         <h2 className="text-2xl font-semibold mb-6 text-gray-700" style={{ color: '#1e3a8a' }}>
//           Enter OTP
//         </h2>

//         {/* OTP input field */}
//         <form className="max-w-sm w-full">
//           <label htmlFor="otp-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//             OTP:
//           </label>
//           <div className="relative">
//             <input
//               type="text"
//               id="otp-input"
//               aria-describedby="helper-text-explanation"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               pattern="[0-9]{6}"
//               placeholder="Enter OTP"
//               required
//               value={otp}
//               onChange={handleOtpChange}
//             />
//           </div>
//           <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//             Enter the 6-digit OTP sent to your email.
//           </p>
//         </form>
//       </div>

//       {/* Next Button */}
//       <button
//         onClick={handleNextClick}
//         className="w-full max-w-md p-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300 mt-4"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default OtpEnterInfluencer;



// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
// import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

// const OtpEnterInfluencer = () => {
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation(); // To access the state passed from previous page
//   const email = location.state?.email; // Get email passed from the previous page

//   // If no email is passed, navigate back to the email input page
//   useEffect(() => {
//     if (!email) {
//       navigate('/influenceremail');
//     }
//   }, [email, navigate]);

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleNextClick = async () => {
//     if (!otp || otp.length !== 4) {
//       setError('Please enter a valid 4-digit OTP');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://localhost:8000/influencer/verify-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, otp }), // Pass both email and OTP
//       });

//       const data = await response.json();

//       if (response.status === 200) {
//         toast.success('OTP verified successfully');
//         // Optionally, navigate to the next page after successful verification
//       } else {
//         toast.error(data.message || 'Failed to verify OTP');
//       }
//     } catch (err) {
//       toast.error('Error: OTP verification failed');
//       navigate('/influenceremail'); // Navigate back to email input page if error occurs
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-white">
//       <div className="flex flex-col justify-center items-center w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-700" style={{ color: '#1e3a8a' }}>
//           Enter OTP
//         </h2>

//         {/* OTP input field */}
//         <form className="max-w-sm w-full">
//           <label htmlFor="otp-input" className="block mb-2 text-sm font-medium text-gray-900">
//             OTP:
//           </label>
//           <div className="relative">
//             <input
//               type="text"
//               id="otp-input"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
//               placeholder="Enter OTP"
//               required
//               value={otp}
//               onChange={handleOtpChange}
//               maxLength={4} // Limiting input to 4 digits for OTP
//             />
//           </div>
//           <p className="mt-2 text-sm text-gray-500">
//             Enter the 4-digit OTP sent to your email.
//           </p>
//         </form>

//         {/* Error message */}
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

//         {/* Next Button */}
//         <button
//           onClick={handleNextClick}
//           className="w-full p-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300 mt-4"
//           disabled={loading}
//         >
//           {loading ? 'Verifying OTP...' : 'Next'}
//         </button>
//       </div>

//       {/* ToastContainer to display toast notifications */}
//       <ToastContainer autoClose={5000} />
//     </div>
//   );
// };

// export default OtpEnterInfluencer;





import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

const OtpEnterInfluencer = () => {
  const [otp, setOtp] = useState(''); // State to store the OTP entered by the user
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate();
  const location = useLocation(); // To access the state passed from previous page
  const email = location.state?.email; // Get email passed from the previous page

  // If no email is passed, navigate back to the email input page
  useEffect(() => {
    if (!email) {
      navigate('/influenceremail'); // If no email, redirect back to the email page
    }
  }, [email, navigate]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value); // Update OTP value in state
  };

  const handleNextClick = async () => {
    if (!otp || otp.length !== 4) {
      setError('Please enter a valid 4-digit OTP');
      return; // Validation to ensure OTP is 4 digits
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://server-side-influencer-1.onrender.com/influencer/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otpCode: otp }), // Send otpCode instead of otp
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success('OTP verified successfully'); // Success toast
        // Navigate to the change password page after successful OTP verification
        navigate('/changepassinfluencer');
      } else {
        toast.error(data.message || 'Failed to verify OTP'); // Error toast in case of failure
      }
    } catch (err) {
      toast.error('Error: OTP verification failed');
      navigate('/influenceremail'); // Navigate back to email input page if error occurs
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 bg-white">
      <div className="flex flex-col justify-center items-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700" style={{ color: '#1e3a8a' }}>
          Enter OTP
        </h2>

        {/* Email input field - displayed above OTP input */}
        <form className="max-w-sm w-full mb-4">
          <label htmlFor="email-input" className="block mb-2 text-sm font-medium text-gray-900">
            Email:
          </label>
          <div className="relative">
            <input
              type="text"
              id="email-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
              value={email} // Display the email passed from the previous page
              readOnly // Make the email input read-only to prevent editing
            />
          </div>
        </form>

        {/* OTP input field */}
        <form className="max-w-sm w-full">
          <label htmlFor="otp-input" className="block mb-2 text-sm font-medium text-gray-900">
            OTP:
          </label>
          <div className="relative">
            <input
              type="text"
              id="otp-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4"
              placeholder="Enter OTP"
              required
              value={otp}
              onChange={handleOtpChange}
              maxLength={4} // Limiting input to 4 digits for OTP
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Enter the 4-digit OTP sent to your email.
          </p>
        </form>

        {/* Error message */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="w-full p-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300 mt-4"
          disabled={loading}
        >
          {loading ? 'Verifying OTP...' : 'Next'}
        </button>
      </div>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default OtpEnterInfluencer;
