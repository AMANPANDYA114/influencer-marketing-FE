
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import ManagerHeader from './ManagerHeader';
// import Navbar from './Navbar';
// import EditIcon from '@mui/icons-material/Edit'; // Import the Edit Icon from MUI

// const ManagerProfile = () => {
//   const [manager, setManager] = useState(null); // Store manager details
//   const [error, setError] = useState(null); // For error handling
//   const navigate = useNavigate(); // Hook to navigate programmatically



//     useEffect(() => {
//         // Check if token exists
//         const token = localStorage.getItem("mangertoken");
      
//         if (!token) {
//           navigate('/ManagerLogin'); // Redirect to login if no token found
//           return; // Exit the useEffect to avoid fetching data if not logged in
//         }
//       }, [navigate]);

//   useEffect(() => {
//     const managerId = localStorage.getItem('managerID'); // Get managerId from localStorage

//     if (!managerId) {
//       Swal.fire({
//         title: "Error",
//         text: "Manager ID not found. Please log in again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//       return;
//     }

//     // Fetch manager data from the API
//     fetch(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setManager(data.data); // Set manager data
//         } else {
//           setError(data.error || 'Manager not found');
//         }
//       })
//       .catch((err) => {
//         setError('Server error. Please try again later.');
//       });
//   }, []);

//   // Dummy profile picture (fallback if manager doesn't have a picture)
//   const profilePic = manager?.profilePic || 'https://i.postimg.cc/rwYFBbkT/agency.jpg'; // Placeholder if no picture

//   if (error) {
//     return <div>Error: {error}</div>; // Error state
//   }

//   // Handle the edit click event
//   const handleEditClick = () => {
//     navigate('/updateagency'); // Navigate to the updateagency page
//   };

//   return (
//     <div className="h-screen flex bg-white-100">
//       <Navbar />
//       <div className="ml-14 w-full p-6">
//         <ManagerHeader page="Profile" />

//         <div className="flex justify-center items-center py-10">
//           <div className="bg-white rounded-lg shadow-xl p-10 max-w-4xl w-full">
//             {/* Profile Image */}
//             <div className="flex justify-center mb-6 relative">
//               <img
//                 src={profilePic}
//                 alt="Manager"
//                 className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
//               />
//               {/* Edit Icon */}
//               <div className="absolute top-0 right-0">
//                 <button 
//                   className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
//                   onClick={handleEditClick} // Attach the onClick handler here
//                 >
//                   <EditIcon />
//                 </button>
//               </div>
//             </div>

//             {/* Profile Information */}
//             <div className="text-center">
//               <h2 className="text-3xl font-semibold text-gray-800">{manager?.name || 'Manager Name'}</h2>
//               <p className="text-lg text-gray-600 mt-2">{manager?.bio || 'No bio available'}</p>

//               <div className="mt-6 space-y-4 text-left text-gray-700">
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Email:</span>
//                   <span>{manager?.email || 'Not provided'}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Phone:</span>
//                   <span>{manager?.phone || 'Not provided'}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">About:</span>
//                   <span>{manager?.about || 'No information available'}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManagerProfile;






import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Swal from 'sweetalert2'; // Import SweetAlert2
import ManagerHeader from './ManagerHeader'; // Import ManagerHeader component
import Navbar from './Navbar'; // Import Navbar component
import EditIcon from '@mui/icons-material/Edit'; // Import the Edit Icon from MUI

const ManagerProfile = () => {
  const [manager, setManager] = useState(null); // Store manager details
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Check if token exists on initial render
  useEffect(() => {
    const token = localStorage.getItem("mangertoken");
    if (!token) {
      navigate('/ManagerLogin'); // Redirect to login if no token found
      return; // Exit the useEffect to avoid fetching data if not logged in
    }
  }, [navigate]);

  // Fetch manager data from API
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
    navigate('/updateagency'); // Navigate to the update agency page
  };

  return (
    <div className="h-screen flex bg-white-100">
      <Navbar /> {/* Navbar on the left */}
      
      <div className="ml-14 w-full p-6">
        {/* Manager Header with "Profile" title */}
        <ManagerHeader page="Profile" />

        <section className="relative pt-40 pb-24">
          {/* Cover Image */}
          <img src="https://pagedone.io/asset/uploads/1705473378.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60 object-cover" />
          
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
            {/* Profile Image */}
            <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
              <img
                src={profilePic}
                alt="Manager"
                className="border-4 border-solid border-white rounded-full object-cover w-32 h-32"
              />
            </div>

            {/* Name, Bio, and Edit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-5">
              <div className="block">
                <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">{manager?.name || 'Manager Name'}</h3>
                <p className="font-normal text-base leading-7 text-gray-500">{manager?.bio || 'No bio available'}</p>
              </div>
              <button
                onClick={handleEditClick}
                className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-indigo-100">
                <EditIcon className="text-gray-700 group-hover:text-indigo-600" />
                <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600">Edit Profile</span>
              </button>
            </div>

            {/* Manager Details (Email, Phone, About) */}
            <div className="flex flex-col lg:flex-row items-center justify-between py-0.5">
              <div className="flex flex-col gap-4 text-left text-gray-700">
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
        </section>
      </div>
    </div>
  );
};

export default ManagerProfile;
