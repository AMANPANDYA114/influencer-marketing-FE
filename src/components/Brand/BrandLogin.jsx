


// import axios from 'axios';
// import { Formik } from 'formik';
// import React, { useState } from 'react';
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import * as Yup from 'yup';

// const BrandLogin = () => {
//   const navigate = useNavigate();
//   const sleep = ms => new Promise(r => setTimeout(r, ms));

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email!').required('Email is required!'),
//     password: Yup.string().min(8, 'password is too short!').required('password is required!'),
//   })

//   const activebtn = 'flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-white rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none'
//   const deactivebtn = '  hover:bg-blue-400 flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none'
//   const [passwordType, setPasswordType] = useState("password");
//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setPasswordType("text")
//       //return;
//     }
//     else setPasswordType("password")
//   }
//   const [userdata, setUserdata] = useState({
//     email: "",
//     password: ""
//   });

//   let name, value;
//   const handleInput = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     console.log(e.target.value)
//     setUserdata({ ...userdata, [name]: value });
//   }
//   const postdata = async (e) => {
//     e.preventDefault();

//     const { email, password } = userdata;
//     if (
//       !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email
//       )
//     ) {
//       toast.error("Invalid Email");
//       return;
//     }
//     const res = await fetch("https://server-side-influencer-1.onrender.com/brand/brandlogin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         password,
//         email,
//       }),
//     })

//     const data = await res.json()
// console.log("brand id is ",data.brandId)
    
//       console.log("brand id is ", data.brandId);  // Check if brandId exists
//       localStorage.setItem("brandID", data.brandId);
//     console.log(data)
//     if (res.status == 200) {
//       toast.success(data.message);
//       await sleep(1000)
//       navigate("/BrandHome?page=1");
//     } else {
//       toast.error(data.error);
//     }



//   }

//   const signUp = async (values, FormikActions) => {
//     // e.preventDefault()

//     // console.log("Hello");
//     try {
//       const res = await axios.post('https://server-side-influencer-1.onrender.com/brand/brandlogin', {
//         ...values
//       });
//       const data = res.data;
//       console.log("brand id is ", data.brandId);  // Check if brandId exists
//       localStorage.setItem("brandID", data.brandId);
//       console.log(data)
//       if (res.status == 200) {
//         toast.success(data.message);
//         await sleep(1000)
//         navigate("/BrandHome?page=1");
//       }
//       FormikActions.resetForm();
//       FormikActions.setSubmitting(false);
//     } catch (err) {
//       // console.log(err.response.data.error);
//       toast.error(err.response.data.error);
//       //  navigate("/InfluencerHome");
//     }
//   }

//   return (
//     <div className=''>
//       <div>
//         <div class="bg-white  dark:bg-gray-900">
//           <div class="flex justify-center h-screen">
//             {/* <img src="https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"> */}
//             <div class=" bg-cover block h-full w-full bg-[url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&)]">
//               <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
//                 <div className='max-md:hidden'>
//                   <h2 class="text-4xl font-bold text-white">Brand</h2>

//                   <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
//                 </div>

//                 <div class="flex items-center p-5 rounded-lg mx-auto bg-opacity-25 bg-white">
//                   <div class="flex-1">
//                     <div class="text-center item-center ">
//                       <p class="pb-5 text-white text-xl font-bold dark:text-gray-300">Sign in to access your account  as</p>

//                       <div className="mt-3 md:flex md:items-center md:-mx-2">

//                         <NavLink to='/InfluencerLogin'>
//                           <button class={activebtn}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                               <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                             </svg>

//                             <span className="mx-2 text-white">
//                               Influencer
//                             </span>
//                           </button>
//                         </NavLink>
//                         <NavLink to='/BrandLogin' >

//                           <button class={deactivebtn}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                               <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                             </svg>

//                             <span className="mx-2  text-white">
//                               Brand

//                             </span>
//                           </button>
//                         </NavLink>
//                         <NavLink to='/ManagerLogin'>
//                           <button class={activebtn}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                               <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                             </svg>

//                             <span className="mx-2  text-white">
//                               Manager
//                             </span>
//                           </button>
//                         </NavLink>
//                       </div>
//                     </div>

//                     <div class="mt-8">
//                       <Formik
//                         initialValues={userdata}
//                         validationSchema={validationSchema}
//                         onSubmit={signUp}
//                       >
//                         {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {

//                           const { email, password } = values;
//                           return <>
//                             <form method='POST'>
//                               <div>
//                                 <label for="email" class="block mb-2 text-lg text-white ">Email Address</label>
//                                 <input type="email" name="email" id="email" placeholder="example@example.com"
//                                   class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-700  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                                   value={email}
//                                   onChange={handleChange('email')}
//                                   onBlur={handleBlur('email')}
//                                 />
//                                 {
//                                   errors.email && touched.email ?
//                                     (<p className='text-red-600'>{errors.email}</p>) : null
//                                 }
//                               </div>

//                               <div class="mt-6">
//                                 <div class="flex justify-between">
//                                   <label for="password" class="text-lg text-white ">Password</label>
//                                   <a href="#" class="text-sm text-white focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
//                                 </div>
//                                 {/* <div className="input-group my-4 mx-4">
//                     <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
//                     <div className="input-group-btn">
//                      <button className="btn btn-outline-primary" onClick={togglePassword}>
//                      { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
//                      </button>
//                     </div>
//                 </div> */}
//                                 <div className='flex flex-row'>

//                                   <input type={passwordType} name="password" id="password" placeholder="Your Password"
//                                     class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                                     value={password}
//                                     onChange={handleChange('password')}
//                                     onBlur={handleBlur('password')}
//                                   />

//                                   <div className='cursor-pointer my-auto mx-1' onClick={togglePassword}>

//                                     {passwordType === "password" ? <AiFillEye className='dark:text-white text-white ' size={25} /> : <AiFillEyeInvisible size={25} className='dark:text-white text-white' />}
//                                   </div>

//                                 </div>
//                                 {
//                                   errors.password && touched.password ?
//                                     (<p className='text-red-600'>{errors.password}</p>) : null
//                                 }
//                               </div>

//                               <div class="mt-10 mx-auto text-center">
//                                 {/* <NavLink to='/InfluencerHome'> */}

//                                 <button
//                                   class="w-1/2 mx-auto px-4 py-2  text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                                   onClick={(errors) ? handleSubmit : null}
//                                 >

//                                   Sign in
//                                 </button>
//                                 {/* </NavLink> */}
//                               </div>

//                             </form>
//                           </>
//                         }}
//                       </Formik>

//                       <p class="mt-6 text-lg text-center text-white">Don&#x27;t have an account yet? <a href="BrandSignUp" class=" font-bold text-blue-300 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
//                     </div>
//                   </div>
//                 </div>


//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//       <ToastContainer autoClose={500} />
//     </div>
//   )
// }

// export default BrandLogin





import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BrandLogin = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [userdata, setUserdata] = useState({
    email: '', // Change 'username' to 'email'
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();

    const { email, password } = userdata; // Use 'email' here instead of 'username'
    const res = await fetch('https://server-side-influencer.vercel.app/brand/brandlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, // Send 'email' in the payload instead of 'username'
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 200) {
      toast.success(data.message);
      localStorage.setItem('brandID', data.brandId);
      navigate('/BrandHome?page=1');
    } else {
      toast.error(data.error);
    }
  };

  // Handle navigation to BrandSignUp page when "Register here" is clicked
  const navigateToSignUp = () => {
    navigate('/BrandSignUp');
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={postdata}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in as brand</h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign in to your account and explore a world of possibilities. Your journey begins here.
                </p>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label> {/* Change 'User name' to 'Email' */}
                <div className="relative flex items-center">
                  <input
                    name="email" // Change 'username' to 'email'
                    type="email" // Change to type 'email' for validation
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter email"
                    value={userdata.email} // Use 'email' here instead of 'username'
                    onChange={handleInput}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
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
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
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
                  <a href="javascript:void(0);" className="text-blue-600 hover:underline font-semibold">
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

              <p className="text-sm !mt-8 text-center text-gray-800">
                Don't have an account?{' '}
                <span
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer"
                  onClick={navigateToSignUp} // Navigate to the signup page
                >
                  Register here
                </span>
              </p>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default BrandLogin;
