

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfluencerSignUp = () => {
  const [userdata, setuserdata] = useState({
    fullname: "", phone: "", email: "", password: "",
    instagramURL: "", facebookURL: "", twitterURL: "", city: "", state: "", country: ""
  });
  const [cpass, setcpass] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmType, setPasswordConfirmType] = useState("password");

  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleConfirmPassword = () => {
    setPasswordConfirmType(passwordConfirmType === "password" ? "text" : "password");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const handleConfirmPassword = (e) => {
    setcpass(e.target.value);
  };

  const postData = async (e) => {
    e.preventDefault();

    const { fullname, phone, email, password, instagramURL, facebookURL, twitterURL, city, state, country } = userdata;

    if (password === cpass) {
      try {
        // Submit signup data
        const res = await fetch("https://server-side-influencer.onrender.com/influencer/signup", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname, phone, email, password, instagramURL, facebookURL, twitterURL, city, state, country
          }),
        });

        const data = await res.json();

        if (res.ok) {
          toast.success(data.message);
          setTimeout(() => {
            navigate("/InfluencerLogin");
          }, 2200);
        } else {
          toast.error(data.error);
        }
      } catch (error) {
        toast.error("An error occurred while submitting your data.");
      }
    } else {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
      <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
        <div className="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
          <div className="max-w-md space-y-12 mx-auto">
            <div>
              <h4 className="text-white text-2xl font-semibold mt-4 text-center " style={{ fontSize: "40px" }}>Create Your Account</h4>
              <p className="text-lg text-white text-center mt-3" style={{ fontSize: "20px" }}>Welcome to our registration page! Get started by creating your account.</p>
            </div>
          </div>
        </div>

        <form className="sm:p-8 p-4 w-full overflow-y-auto max-h-[80vh]" onSubmit={postData}>
          <div className="mb-8">
            <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">Register As Influencer</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Full Name</label>
              <input name="fullname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter full name" value={userdata.fullname} onChange={handleInput} />
            </div>

            {/* Contact Number */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Contact Number</label>
              <input name="phone" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="XXX-XX-XXX-XX" value={userdata.phone} onChange={handleInput} />
            </div>

            {/* Email Address */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Email address</label>
              <input name="email" type="email" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter email" value={userdata.email} onChange={handleInput} />
            </div>

            {/* Instagram URL */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Instagram URL</label>
              <input name="instagramURL" type="url" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Instagram URL" value={userdata.instagramURL} onChange={handleInput} />
            </div>

            {/* Facebook URL */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Facebook URL</label>
              <input name="facebookURL" type="url" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Facebook URL" value={userdata.facebookURL} onChange={handleInput} />
            </div>

            {/* Twitter URL */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Twitter URL</label>
              <input name="twitterURL" type="url" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Twitter URL" value={userdata.twitterURL} onChange={handleInput} />
            </div>

            {/* City */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">City</label>
              <input name="city" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter city" value={userdata.city} onChange={handleInput} />
            </div>

            {/* State */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">State</label>
              <input name="state" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter state" value={userdata.state} onChange={handleInput} />
            </div>

            {/* Country */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Country</label>
              <input name="country" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter country" value={userdata.country} onChange={handleInput} />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Password</label>
              <input name="password" type={passwordType} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter password" value={userdata.password} onChange={handleInput} />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Confirm Password</label>
              <input name="cpass" type={passwordConfirmType} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Confirm password" value={cpass} onChange={handleConfirmPassword} />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto text-white py-3 px-8 sm:px-6 rounded-md bg-blue-600 hover:bg-blue-500 transition-all ease-in-out duration-300"
              style={{ width: '100%', height: '50px' }} >
              Register
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account? <Link to="/InfluencerLogin" className="text-blue-500">Login here</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InfluencerSignUp;
