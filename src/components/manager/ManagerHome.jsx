


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ManagerHeader from './ManagerHeader';
import Navbar from './Navbar';

const ManagerHome = () => {
  const navigate = useNavigate();

  // Load data from the API
  const loadData = async () => {
    // Retrieve the manager token from localStorage
    const token = localStorage.getItem("mangertoken");

    if (!token) {
      // If no token found, redirect to login page
      navigate("/ManagerLogin");
      return;
    }

    try {
      // Fetch data with the token in the Authorization header
      const res = await fetch("https://server-side-influencer.vercel.app/manager/managerhome", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Send the token as Bearer token
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      console.log(data);

      // Check the success flag from the API response
      if (!data.success) {
        navigate("/ManagerLogin"); // Redirect if not authorized or token is invalid
      }

    } catch (err) {
      console.error("Error fetching data:", err);
      navigate("/ManagerLogin"); // Redirect on any error (e.g., network issues)
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen">
        <ManagerHeader page="Home" />
        <h1 className="mx-32 mt-10 text-3xl font-bold">Manager Home Page</h1> 
      </div>
    </div>
  );
};

export default ManagerHome;
