


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const InfluencerSignUp = () => {
  const [userdata, setuserdata] = useState({
    fname: "", lname: "", phone: "", email: "", city: "", state: "", country: "", password: "",
    gender: "", age: "", instagram: "", instagramURL: "", instagramFollowers: "", instagramEngagementRate: "",
    facebook: "", facebookURL: "", facebookFollowers: "", facebookEngagementRate: "",
  });
  const [cpass, setcpass] = useState(""); // Confirm password
  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmType, setPasswordConfirmType] = useState("password");

  const navigate = useNavigate(); // For navigation

  // Toggle password visibility
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  // Toggle confirm password visibility
  const toggleConfirmPassword = () => {
    setPasswordConfirmType(passwordConfirmType === "password" ? "text" : "password");
  };

  // Handle form field change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  // Handle confirm password field change
  const handleConfirmPassword = (e) => {
    setcpass(e.target.value);
  };

  // Post data to the backend
  const postData = async (e) => {
    e.preventDefault();

    const { fname, phone, lname, email, city, state, country, gender, password, age, instagram, instagramURL, instagramFollowers, instagramEngagementRate, facebook, facebookURL, facebookFollowers, facebookEngagementRate } = userdata;

    if (password === cpass) {
      try {
        const res = await fetch("https://server-side-influencer-1.onrender.com/influencer/signup", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname, phone, lname, email, city, state, country, gender, password, age, instagram, instagramURL, instagramFollowers, instagramEngagementRate, facebook, facebookURL, facebookFollowers, facebookEngagementRate
          }),
        });

        const data = await res.json();

        if (res.status === 200) {
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
              <h4 className="text-white text-2xl font-semibold text-cente mb-3 mt-4" style={{ fontSize: "40px" }} >Create Your Account</h4>
              <p className="text-lg text-white text-center mt-2"  style={{ fontSize: "20px" }}>Welcome to our registration page! Get started by creating your account.</p>
            </div>
          </div>
        </div>

        <form className="sm:p-8 p-4 w-full overflow-y-auto max-h-[80vh]" onSubmit={postData}>
          <div className="mb-12">
            <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">Register</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">First Name</label>
              <input name="fname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter first name" value={userdata.fname} onChange={handleInput} />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Last Name</label>
              <input name="lname" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter last name" value={userdata.lname} onChange={handleInput} />
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

            {/* Gender */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Gender</label>
              <div className="flex space-x-4">
                <label>
                  <input type="radio" name="gender" value="Male" checked={userdata.gender === "Male"} onChange={handleInput} />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" checked={userdata.gender === "Female"} onChange={handleInput} />
                  Female
                </label>
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Age</label>
              <input name="age" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter age" value={userdata.age} onChange={handleInput} />
            </div>

            {/* Instagram Handle */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Instagram Handle</label>
              <input name="instagram" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Instagram Handle" value={userdata.instagram} onChange={handleInput} />
            </div>

            {/* Instagram URL */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Instagram URL</label>
              <input name="instagramURL" type="url" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Instagram URL" value={userdata.instagramURL} onChange={handleInput} />
            </div>

            {/* Instagram Followers */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Instagram Followers</label>
              <input name="instagramFollowers" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Instagram Followers Count" value={userdata.instagramFollowers} onChange={handleInput} />
            </div>

            {/* Instagram Engagement Rate */}
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Instagram Engagement Rate</label>
              <input name="instagramEngagementRate" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Instagram Engagement Rate" value={userdata.instagramEngagementRate} onChange={handleInput} />
            </div>

            {/* Submit Button */}
            <div className="col-span-2">
              <button type="submit" className="bg-blue-500 text-white text-sm px-6 py-3 rounded-md w-full">Sign Up</button>
            </div>
          </div>

          <div className="text-center mt-4">
            <p>Already have an account? <Link to="/InfluencerLogin" className="text-blue-500">Log in here</Link></p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InfluencerSignUp;

