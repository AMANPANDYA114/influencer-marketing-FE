
import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Edit } from "@mui/icons-material"; // Import the MUI Edit icon
import Navbar from "./Navbar";
import ManagerHeader from "./ManagerHeader";

const ManagerProfile = () => {
  const [manager, setManager] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("mangertoken");
    const managerId = localStorage.getItem("managerID");
    if (!token || !managerId) {
      navigate("/ManagerLogin");
      return;
    }
  }, [navigate]);

  useEffect(() => {
    fetch(`https://server-side-influencer.onrender.com/manager/managers/${localStorage.getItem('managerID')}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setManager(data.data);
        } else {
          setError(data.error || "Manager not found");
        }
      })
      .catch(() => {
        setError("Server error. Please try again later.");
      });
  }, []);

  const handleEditClick = () => {
    navigate("/updateagency"); // Navigate to the update agency page
  };

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* ManagerHeader stays at the top */}
      <ManagerHeader />
      {/* Navbar remains at the top as well */}
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full mt-16">
        {/* Dynamically set background image */}
        <div className="w-full h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${manager?.backgroundImage || 'https://i.postimg.cc/rwYFBbkT/agency.jpg'})` }}>
          {/* Dynamically set profile picture */}
          <img 
            src={manager?.profilePic || "https://i.postimg.cc/rwYFBbkT/agency.jpg"} 
            alt="Profile" 
            className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 bottom-[-40px]" 
          />
          <div 
            onClick={handleEditClick}
            className="bg-black cursor-pointer text-white p-2 rounded-full shadow-lg absolute bottom-[-30px] left-[calc(52%-15px)]"
            title="Edit Profile"
          >
            <Edit />
          </div>
        </div>
        <div className="w-full max-w-3xl bg-white rounded-lg border-2 shadow-xl p-6 mt-16 mx-4">
          <h4 className="text-xl text-gray-900 font-bold mb-4 text-center">Personal Information</h4>
          <ul className="text-gray-700 space-y-2">
            <li className="flex justify-between border-b pb-2">
              <span className="font-semibold">Name:</span>
              <span>{manager?.name}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="font-semibold">Email:</span>
              <span>{manager?.email}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="font-semibold">Phone:</span>
              <span>{manager?.phone}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="font-semibold">Bio:</span>
              <span>{manager?.bio}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="font-semibold">About:</span>
              <span>{manager?.about}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;

