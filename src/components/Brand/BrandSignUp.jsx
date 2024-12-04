




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; // Added the import for Link

const BrandSignUp = () => {
  const [userdata, setuserdata] = useState({
    uname: "", shopName: "", brandType: "", phone: "", email: "", city: "", state: "", country: "",
    address: "", location: "", password: "", instagramUrl: "", facebookUrl: ""
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

    const { uname, shopName, brandType, phone, email, city, state, country,
      address, location, password, facebookUrl, instagramUrl } = userdata;

    if (password === cpass) {
      try {
        const res = await fetch("https://server-side-influencer-1.onrender.com/brand/signup", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uname, shopName, brandType, phone, email, city, state, country,
            address, location, password, facebookUrl, instagramUrl
          }),
        });

        const data = await res.json();

        if (res.status === 200) {
          toast.success(data.message);
          setTimeout(() => {
            navigate("/BrandLogin");
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
              <h4 className="text-white text-2xl font-semibold">Create Your Account</h4> {/* Increased font size */}
              <p className="text-lg text-white mt-2">Welcome to our registration page! Get started by creating your account.</p> {/* Increased font size */}
            </div>
          </div>
        </div>

        <form className="sm:p-8 p-4 w-full overflow-y-auto max-h-[80vh]" onSubmit={postData}>
          <div className="mb-12">
            <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">Register</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm mb-1 block">User Name</label>
              <input 
                name="uname" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter user name" 
                value={userdata.uname} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Shop Name</label>
              <input 
                name="shopName" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter shop name" 
                value={userdata.shopName} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Brand Type</label>
              <input 
                name="brandType" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter brand type" 
                value={userdata.brandType} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Phone Number</label>
              <input 
                name="phone" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter phone number" 
                value={userdata.phone} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Email</label>
              <input 
                name="email" 
                type="email" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter email" 
                value={userdata.email} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">City</label>
              <input 
                name="city" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter city" 
                value={userdata.city} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">State</label>
              <input 
                name="state" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter state" 
                value={userdata.state} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Country</label>
              <input 
                name="country" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter country" 
                value={userdata.country} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Address</label>
              <input 
                name="address" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter address" 
                value={userdata.address} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Location</label>
              <input 
                name="location" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter location" 
                value={userdata.location} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Password</label>
              <input 
                name="password" 
                type={passwordType} 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter password" 
                value={userdata.password} 
                onChange={handleInput} 
              />
              <button type="button" onClick={togglePassword}></button>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Confirm Password</label>
              <input 
                name="cpass" 
                type={passwordConfirmType} 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Confirm password" 
                value={cpass} 
                onChange={handleConfirmPassword} 
              />
              <button type="button" onClick={toggleConfirmPassword}></button>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Instagram URL</label>
              <input 
                name="instagramUrl" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter Instagram URL" 
                value={userdata.instagramUrl} 
                onChange={handleInput} 
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-1 block">Facebook URL</label>
              <input 
                name="facebookUrl" 
                type="text" 
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-2 rounded-md outline-blue-500" 
                placeholder="Enter Facebook URL" 
                value={userdata.facebookUrl} 
                onChange={handleInput} 
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button 
              type="submit" 
              className="py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-blue-600 text-sm">
              Already have an account?{" "}
              <Link to="/BrandLogin" className="font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>

        </form>
      </div>

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </div>
  );
};

export default BrandSignUp;
