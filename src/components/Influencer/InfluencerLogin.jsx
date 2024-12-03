

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const InfluencerLogin = () => {
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    password: Yup.string().min(8, 'password is too short!').required('password is required!'),
  });

  const activebtn = 'flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-white rounded-md md:mt-0 md:w-auto md:mx-2 focus:outline-none';
  const deactivebtn = 'hover:bg-blue-400 flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none';
  
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const signUp = async (values, FormikActions) => {
    try {
      const res = await axios.post('https://server-side-influencer-1.onrender.com/influencer/influencerlogin', {
        ...values
      });
      const data = res.data;
      
      if (res.status === 200) {
        // Store sessionId in sessionStorage after successful login
        sessionStorage.setItem('sessionId', data.sessionId);
        
        toast.success(data.message);
        await sleep(1000);
        navigate("/InfluencerHome?page=1");
      }
      FormikActions.resetForm();
      FormikActions.setSubmitting(false);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div>
      <div className="bg-white">
        <div className="flex justify-center h-screen">
          <div className="bg-cover block h-full w-full bg-[url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Influencer</h2>
                <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
              </div>
              <div className="flex items-center p-5 rounded-lg mx-auto bg-opacity-25 bg-white">
                <div className="flex-1">
                  <div className="text-center item-center">
                    <p className="pb-5 text-white font-bold text-xl dark:text-gray-300">Sign in to access your account as</p>
                    <div className="mt-3 md:flex md:items-center md:-mx-2">
                      <NavLink to='/InfluencerLogin'>
                        <button className={deactivebtn}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="mx-2 text-white">Influencer</span>
                        </button>
                      </NavLink>

                      <NavLink to='/BrandLogin'>
                        <button className={activebtn}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="mx-2 text-white">Brand</span>
                        </button>
                      </NavLink>

                      <NavLink to='/ManagerLogin'>
                        <button className={activebtn}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="mx-2 text-white">Manager</span>
                        </button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      validationSchema={validationSchema}
                      onSubmit={signUp}
                    >
                      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
                        const { email, password } = values;
                        return (
                          <form method="POST">
                            <div>
                              <label htmlFor="email" className="block mb-2 text-lg text-white">Email Address</label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@example.com"
                                className="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={email}
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                              />
                              {errors.email && touched.email ? (<p className='text-red-600'>{errors.email}</p>) : null}
                            </div>

                            <div className="mt-6">
                              <div className="flex justify-between">
                                <label htmlFor="password" className="text-lg text-white">Password</label>
                                <a href="#" className="text-sm text-white focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                              </div>
                              <div className="flex flex-row">
                                <input
                                  type={passwordType}
                                  name="password"
                                  id="password"
                                  placeholder="Your Password"
                                  className="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  value={password}
                                  onChange={handleChange('password')}
                                  onBlur={handleBlur('password')}
                                />
                                <div className="cursor-pointer my-auto mx-1" onClick={togglePassword}>
                                  {passwordType === "password" ? <AiFillEye className="dark:text-white text-white" size={25} /> : <AiFillEyeInvisible size={25} className="dark:text-white text-white" />}
                                </div>
                              </div>
                              {errors.password && touched.password ? (<p className='text-red-600'>{errors.password}</p>) : null}
                            </div>

                            <div className="mt-10 mx-auto text-center">
                              <button
                                className="w-1/2 mx-auto px-4 py-2 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                onClick={(errors) ? handleSubmit : null}
                              >
                                Sign in
                              </button>
                            </div>
                          </form>
                        );
                      }}
                    </Formik>
                    <p className="mt-6 text-lg text-center text-white">Don&#x27;t have an account yet? <a href="/InfluencerSignUp" className="text-blue-300 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default InfluencerLogin;
