

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiSettings } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/favicon.ico';

const ManagerHeader = (props) => {
  const [managerName, setManagerName] = useState('');
  const navigate = useNavigate();
  let menuitemCommoncss = "rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer";

  // Fetch manager data on component mount
  useEffect(() => {
    const fetchManagerData = async () => {
      try {
        // Get managerID from localStorage
        const managerID = localStorage.getItem('managerID');
        
        if (!managerID) {
          console.error("Manager ID not found in localStorage.");
          return;
        }

        // Fetch manager data using the managerID
        const res = await axios.get(`https://server-side-influencer.onrender.com/manager/managers/${managerID}`);
        console.log("Manager Data Header Response:", res); 
        
        if (res.data && res.data.success === true && res.data.data.name) {
          console.log('Manager Name:', res.data.data.name); // Log the manager's name
          setManagerName(res.data.data.name); // Set the manager's name from the API response
        }
      } catch (err) {
        console.error('Error fetching manager data:', err);
      }
    };
    
    fetchManagerData();
  }, []); // Empty dependency array means this will run once on component mount

  return (
    <div className="h-20 flex items-center justify-between mx-20 w-[screen] border-b-2">
      <nav className="">
        <p className="font-bold">Manager &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        <div className="flex mx-5">
          <FiSettings />
        </div>
        <div className="flex items-center space-x-4">
          <div className="">
            <img className="w-10 h-10 rounded-full group" src={'https://i.postimg.cc/rwYFBbkT/agency.jpg'} alt="DP" />
          </div>
          <div className="font-medium">
            <div>Hi, {managerName || 'Agency'}</div> {/* Display manager's name from API or default 'Agency' */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerHeader;


