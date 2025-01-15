

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import ManagerHeader from "./ManagerHeader";
import Navbar from "./Navbar";

const AddNewBrand = () => {
  const [profilecard, setProfilecard] = useState([]);
  const navigate = useNavigate();

  const callgetInfluencerPage = async () => {
    // Retrieve the manager token from localStorage
    const token = localStorage.getItem("mangertoken");

    if (!token) {
      // If no token found, redirect to login page
      navigate("/ManagerLogin");
      return;
    }

    try {
      // Fetch data with Authorization header containing the token
      const res = await fetch("https://server-side-influencer.onrender.com/manager/getunverifiedbrand", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,  // Send the token as Bearer token
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        // If the response indicates failure (e.g., invalid token), redirect to login
        navigate("/ManagerLogin");
      } else {
        setProfilecard(data.data);  // Update the state with the response data
      }

    } catch (err) {
      console.log("Error fetching data:", err);
      navigate("/ManagerLogin");  // Redirect if there's an error (e.g., network issues)
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    callgetInfluencerPage();
  }, []);

  const removeBrand = (id) => {
    const updatedItems = profilecard.filter(item => item._id !== id);
    setProfilecard(updatedItems);  // Remove the brand from the state
  };

  return (
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen max-sm:ml-0">
        <ManagerHeader page="Add Brand" />
        <div className="grid mt-10 px-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profilecard.length === 0 ? (
            <h1 className="text-center text-3xl font-bold mt-10">No New Request</h1>
          ) : (
            profilecard.map((item) => (
              <Card item={item} onData={removeBrand} key={item._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewBrand;

