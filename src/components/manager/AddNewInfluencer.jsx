

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import InfCard from "./InfCard";
import ManagerHeader from "./ManagerHeader";
import Navbar from "./Navbar";

const AddNewInfluencer = () => {
  const [profilecard, setprofilecard] = useState([]);
  const navigate = useNavigate();

  // Token validation: check if token exists when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('mangertoken');
    if (!token) {
      navigate('/ManagerLogin'); // Redirect to login if no token found
    }
  }, [navigate]);

  const callgetInfluencerPage = async () => {
    const token = localStorage.getItem("mangertoken"); // Get token from localStorage
    if (!token) {
      console.log("No token found");
      return;
    }

    try {
      const res = await fetch("https://server-side-influencer.onrender.com/manager/getunverifiendInfluencer", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Pass token in Authorization header
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setprofilecard(data.data); // Update state with the fetched data
        console.log(data.data);
      } else {
        console.log("Failed to fetch data:", data);
      }
    } catch (err) {
      console.log("Error fetching data:", err);
      // Optionally, navigate to login page if authorization fails
      // navigate("/login");
    }
  };

  useEffect(() => {
    callgetInfluencerPage();
  }, []); // Empty dependency array means this will run only once when the component mounts

  const removeinf = (id) => {
    const updatedItems = profilecard.filter(item => item._id !== id);
    setprofilecard(updatedItems);
  };

  return (
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen max-sm:ml-0">
        <ManagerHeader page="Add Influencer" />

        <div className="grid mt-10 px-20 max-sm:px-0 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profilecard.length === 0 ? (
            <h1 className="text-center text-3xl font-bold mt-10">No New Request </h1>
          ) : (
            profilecard.map((item, index) => (
              <InfCard key={index} item={item} onData={removeinf} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewInfluencer;

