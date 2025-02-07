


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ManagerLogin = () => {
//   const navigate = useNavigate(); // Initialize navigate function
//   const [passwordType, setPasswordType] = useState('password'); // State for password visibility toggle

//   const togglePassword = () => {
//     setPasswordType(passwordType === 'password' ? 'text' : 'password');
//   };

//   const [userdata, setUserdata] = useState({
//     email: '',
//     password: '',
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setUserdata({ ...userdata, [name]: value });
//   };

//   const postdata = async (e) => {
//     e.preventDefault();
//     const { email, password } = userdata;

//     // Email validation regex
//     if (
//       !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email
//       )
//     ) {
//       toast.error("Invalid Email");
//       return;
//     }

//     const res = await fetch('https://server-side-influencer.vercel.app/manager/managerlogin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email, // Send 'email' in the payload
//         password,
//       }),
//     });

//     const data = await res.json();
//     console.log("maber data ", data.token)
//     if (res.status === 200) {
//       toast.success(data.message);
//       localStorage.setItem('mangertoken', data.token);
//       localStorage.setItem('managerID', data.user.managerId); // Store manager ID
//       sessionStorage.setItem('sessionId', data.sessionId); // Store session ID
//       navigate("/ManagerHome");

//     } else {
//       toast.error(data.error);
//     }
//   };

//   // Handle navigation to ManagerSignUp page when "Register here" is clicked
//   const navigateToSignUp = () => {
//     navigate('/ManagerSignUp');
//   };


//   const navigateToForgotPassword = () => {
//     navigate('/manageemail'); // Navigate to the influenceremail page
//   };
//   return (
//     <div className="font-[sans-serif]">
//       <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
//         <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
//           <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
//             <form className="space-y-4" onSubmit={postdata}>
//               <div className="mb-8">
//                 <h3 className="text-gray-800 text-3xl font-extrabold">Sign in As Manager</h3>
//                 <p className="text-gray-500 text-sm mt-4 leading-relaxed">
//                   Sign in to your account and explore a world of possibilities. Your journey begins here.
//                 </p>
//               </div>

//               <div>
//                 <label className="text-gray-800 text-sm mb-2 block">Email</label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="email"
//                     type="email"
//                     required
//                     className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
//                     placeholder="Enter email"
//                     value={userdata.email}
//                     onChange={handleInput}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-gray-800 text-sm mb-2 block">Password</label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="password"
//                     type={passwordType} // Set type dynamically based on the state
//                     required
//                     className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
//                     placeholder="Enter password"
//                     value={userdata.password}
//                     onChange={handleInput}
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="#bbb"
//                     stroke="#bbb"
//                     className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
//                     viewBox="0 0 24 24"
//                     onClick={togglePassword} // Toggle password visibility when clicked
//                   >
//                     {passwordType === 'password' ? (
//                       <path
//                         d="M12 4C8.13 4 5 6.91 5 10s3.13 6 7 6 7-2.91 7-6-3.13-6-7-6zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
//                       />
//                     ) : (
//                       <path
//                         d="M12 4C8.13 4 5 6.91 5 10s3.13 6 7 6 7-2.91 7-6-3.13-6-7-6zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
//                       />
//                     )}
//                   </svg>
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   />
//                   <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm">
//                 <a
//                     href="javascript:void(0);"
//                     className="text-blue-600 hover:underline font-semibold"
//                     onClick={navigateToForgotPassword} // Navigate to forgot password page
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//               </div>

//               <div className="!mt-8">
//                 <button
//                   type="submit"
//                   className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//                 >
//                   Log in
//                 </button>
//               </div>

//               <p className="text-sm !mt-8 text-center text-gray-800">
//                 Don't have an account?{' '}
//                 <span
//                   className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer"
//                   onClick={navigateToSignUp} // Navigate to the signup page
//                 >
//                   Register here
//                 </span>
//               </p>
//             </form>
//           </div>
//           <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
//             <img
//               src="https://readymadeui.com/login-image.webp"
//               className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
//               alt="Manager Login"
//             />
//           </div>
//         </div>
//       </div>
//       <ToastContainer autoClose={500} />
//     </div>
//   );
// };

// export default ManagerLogin;




import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowBack } from '@mui/icons-material'; // Import the MUI arrow icon

const ManagerLogin = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [passwordType, setPasswordType] = useState('password'); // State for password visibility toggle

  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const [userdata, setUserdata] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const { email, password } = userdata;

    // Email validation regex
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      toast.error("Invalid Email");
      return;
    }

    const res = await fetch('https://server-side-influencer-1.onrender.com/manager/managerlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, // Send 'email' in the payload
        password,
      }),
    });

    const data = await res.json();
    console.log("maber data ", data.token)
    if (res.status === 200) {
      toast.success(data.message);
      localStorage.setItem('mangertoken', data.token);
      localStorage.setItem('managerID', data.user.managerId); // Store manager ID
      sessionStorage.setItem('sessionId', data.sessionId); // Store session ID
      navigate("/ManagerHome");
    } else {
      toast.error(data.error);
    }
  };

  // Handle navigation to ManagerSignUp page when "Register here" is clicked
  const navigateToSignUp = () => {
    navigate('/ManagerSignUp');
  };

  const navigateToForgotPassword = () => {
    navigate('/manageemail'); // Navigate to the influenceremail page
  };

  // Handle back to home navigation
  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page (or any other path you want)
  };

  return (
    <div className="font-[sans-serif]">
      {/* Back to Home button with MUI icon */}
      {/* <button
        onClick={handleBackToHome}
        className="absolute top-4 right-4 flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
      >
        <ArrowBack className="mr-2" />
        Back to Home
      </button>

      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4"> */}


<button
        onClick={handleBackToHome}
        className="absolute top-4 right-4 flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 mb-12" // Added margin bottom here
      >
        <ArrowBack className="mr-2" />
        Back to Home
      </button>

      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4" style={{ marginTop: '8%' }}>
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={postdata}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in As Manager</h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign in to your account and explore a world of possibilities. Your journey begins here.
                </p>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter email"
                    value={userdata.email}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={passwordType} // Set type dynamically based on the state
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter password"
                    value={userdata.password}
                    onChange={handleInput}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 24 24"
                    onClick={togglePassword} // Toggle password visibility when clicked
                  >
                    {passwordType === 'password' ? (
                      <path
                        d="M12 4C8.13 4 5 6.91 5 10s3.13 6 7 6 7-2.91 7-6-3.13-6-7-6zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                      />
                    ) : (
                      <path
                        d="M12 4C8.13 4 5 6.91 5 10s3.13 6 7 6 7-2.91 7-6-3.13-6-7-6zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                      />
                    )}
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                <a
                    href="javascript:void(0);"
                    className="text-blue-600 hover:underline font-semibold"
                    onClick={navigateToForgotPassword} // Navigate to forgot password page
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>

              {/* <p className="text-sm !mt-8 text-center text-gray-800">
                Don't have an account?{' '}
                <span
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer"
                  onClick={navigateToSignUp} // Navigate to the signup page
                >
                  Register here
                </span>
              </p> */}
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Manager Login"
            />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default ManagerLogin;
