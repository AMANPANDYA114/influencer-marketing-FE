import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

const BrandEnterEmail = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNextClick = async () => {
    if (!email) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://server-side-influencer.onrender.com/brand/generate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        toast.success('OTP sent successfully for password reset');
        navigate('/brandotp', { state: { email } }); // Navigate to OTP page, passing email
      } else {
        toast.error(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      toast.error(`Error: OTP send failed`);
      navigate('/otpbrand', { state: { email } }); // Pass email to OTP page even if error occurs
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="flex flex-col justify-center items-center w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700" style={{ color: '#1e3a8a' }}>
          Enter Your Email
        </h2>

        {/* Email input field */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-3 border border-gray-300 rounded-md text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            borderRadius: '8px',
            border: '2px solid #b3b3b3',
            padding: '12px',
            fontSize: '16px',
          }}
        />

        {/* Error and Success messages */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="w-full p-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          style={{
            backgroundColor: '#3b82f6',
            padding: '16px',
          }}
          disabled={loading}
        >
          {loading ? 'Sending OTP...' : 'Next'}
        </button>
      </div>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default BrandEnterEmail;
