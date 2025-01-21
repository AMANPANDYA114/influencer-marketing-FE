

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/brand1.jpg"; // Fallback logo
import { FiSettings } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";

const BrandHeader = (props) => {
  const navigate = useNavigate();

  // Set initial state to null instead of an empty array
  const [brandData, setBrandData] = useState(null);




  const getBrandData = async () => {
    try {
      // Retrieve the brandId from localStorage
      const brandId = localStorage.getItem("brandID");
  
      if (!brandId) {
        console.log("Brand ID not found in localStorage");
        return;
      }
  
      // Make the API call with the brandId from localStorage
      const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/getBrandData/${brandId}`);
      const data = await response.json();
  
      // Set the response data to the state
      setBrandData(data.data);
      console.log("Logged in brand is data:- ", data.data);
    } catch (err) {
      console.log(err);
      
      // Check if err.response exists before accessing err.response.status
      if (err.response && err.response.status === 422) {
        navigate('/');
      } else {
        // Handle other types of errors (e.g., network issues)
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  

  // const getBrandData = async () => {
  //   try {
  //     // Retrieve the brandId from localStorage
  //     const brandId = localStorage.getItem("brandID");

  //     if (!brandId) {
  //       console.log("Brand ID not found in localStorage");
  //       return;
  //     }

  //     // Make the API call with the brandId from localStorage
  //     const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/getBrandData/${brandId}`);
  //     const data = await response.json();
      
  //     // Set the response data to the state
  //     setBrandData(data.data);
  //     console.log("Logged in brand is data:- ", data.data);
  //   } catch (err) {
  //     console.log(err);
  //     if (err.response.status === 422) {
  //       navigate('/');
  //     }
  //   }
  // };
  
  useEffect(() => {
    getBrandData();
  }, []);

  // Conditional rendering to avoid errors if brandData is not yet available
  if (!brandData) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }

  return (
    <div className="h-20 flex items-center border-b-2 justify-between mx-20 w-[screen]">
      <nav className="">
        <p className="font-bold">Brand &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/* Use fallback logo if brandData.logo is not available */}
            <img
              className="w-10 h-10 rounded-full group"
              src={brandData.logo || logo} // Use fallback image if logo is missing
              alt="Brand Logo"
            />
            <div className="absolute hidden group-hover:block">hello</div>
          </div>
          <div className="font-medium">
            <div>Hi, {brandData.uname}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;

