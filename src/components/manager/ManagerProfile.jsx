
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Swal from 'sweetalert2'; // Import SweetAlert2
import ManagerHeader from './ManagerHeader';
import Navbar from './Navbar';
import EditIcon from '@mui/icons-material/Edit'; // Import the Edit Icon from MUI

const ManagerProfile = () => {
  const [manager, setManager] = useState(null); // Store manager details
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate(); // Hook to navigate programmatically



    useEffect(() => {
        // Check if token exists
        const token = localStorage.getItem("mangertoken");
      
        if (!token) {
          navigate('/ManagerLogin'); // Redirect to login if no token found
          return; // Exit the useEffect to avoid fetching data if not logged in
        }
      }, [navigate]);

  useEffect(() => {
    const managerId = localStorage.getItem('managerID'); // Get managerId from localStorage

    if (!managerId) {
      Swal.fire({
        title: "Error",
        text: "Manager ID not found. Please log in again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Fetch manager data from the API
    fetch(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setManager(data.data); // Set manager data
        } else {
          setError(data.error || 'Manager not found');
        }
      })
      .catch((err) => {
        setError('Server error. Please try again later.');
      });
  }, []);

  // Dummy profile picture (fallback if manager doesn't have a picture)
  const profilePic = manager?.profilePic || 'https://i.postimg.cc/rwYFBbkT/agency.jpg'; // Placeholder if no picture

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  // Handle the edit click event
  const handleEditClick = () => {
    navigate('/updateagency'); // Navigate to the updateagency page
  };

  return (
    <div className="h-screen flex bg-white-100">
      <Navbar />
      <div className="ml-14 w-full p-6">
        <ManagerHeader page="Profile" />

        <div className="flex justify-center items-center py-10">
          <div className="bg-white rounded-lg shadow-xl p-10 max-w-4xl w-full">
            {/* Profile Image */}
            <div className="flex justify-center mb-6 relative">
              <img
                src={profilePic}
                alt="Manager"
                className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              />
              {/* Edit Icon */}
              <div className="absolute top-0 right-0">
                <button 
                  className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={handleEditClick} // Attach the onClick handler here
                >
                  <EditIcon />
                </button>
              </div>
            </div>

            {/* Profile Information */}
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800">{manager?.name || 'Manager Name'}</h2>
              <p className="text-lg text-gray-600 mt-2">{manager?.bio || 'No bio available'}</p>

              <div className="mt-6 space-y-4 text-left text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span>{manager?.email || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Phone:</span>
                  <span>{manager?.phone || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">About:</span>
                  <span>{manager?.about || 'No information available'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;
