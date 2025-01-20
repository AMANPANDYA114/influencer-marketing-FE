

// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import ManagerHeader from './ManagerHeader';
// import Navbar from './Navbar';
// import EditIcon from '@mui/icons-material/Edit'; // Import the Edit Icon from MUI

// const ManagerProfile = () => {
//   const [manager, setManager] = useState(null); // Store manager details
//   const [loading, setLoading] = useState(true); // For loading state
//   const [error, setError] = useState(null); // For error handling

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


//     const handleEditClick = () => {
//       navigate('/updateagency'); // Navigate to the updateagency page
//     };

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
//       })
//       .finally(() => {
//         setLoading(false); // Set loading to false once the fetch is complete
//       });
//   }, []);

//   // Dummy profile picture (fallback if manager doesn't have a picture)
//   const profilePic = manager?.profilePic || 'https://via.placeholder.com/150'; // Placeholder if no picture

//   if (loading) {
//     return <div>Loading...</div>; // Loading state
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Error state
//   }

//   return (
//     <div className="h-screen flex">
//       <Navbar />
//       <div className="ml-14 w-screen">
//         <ManagerHeader page="Profile" />
        
//         <div className="flex justify-center items-center py-10">
//           <div className="bg-white rounded-lg shadow-lg p-8 w-96">
//             {/* Profile Image */}
//             <div className="flex justify-center mb-6 relative">
//               <img
//                 src="https://i.postimg.cc/rwYFBbkT/agency.jpg"
//                 alt="Manager"
//                 className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
//               />
//               {/* Edit Icon */}
//               <div className="absolute top-0 right-0">
//               <button 
//                   className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
//                   onClick={handleEditClick} // Attach the onClick handler here
//                 >
//                   <EditIcon />
//                 </button>
//               </div>
//             </div>

//             {/* Profile Information */}
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-gray-800">{manager.name}</h2>
//               <p className="text-sm text-gray-500 mt-2">{manager.bio || 'No bio available'}</p>

//               <div className="mt-4 text-left">
//                 <div className="flex justify-between text-gray-700">
//                   <span className="font-bold">Email:</span>
//                   <span>{manager.email}</span>
//                 </div>
//                 <div className="flex justify-between text-gray-700 mt-2">
//                   <span className="font-bold">Phone:</span>
//                   <span>{manager.phone || 'Not provided'}</span>
//                 </div>
//                 <div className="flex justify-between text-gray-700 mt-2">
//                   <span className="font-bold">About:</span>
//                   <span>{manager.about || 'No information available'}</span>
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
import ManagerHeader from './ManagerHeader';
import Navbar from './Navbar';
import EditIcon from '@mui/icons-material/Edit'; // Import the Edit Icon from MUI

const ManagerProfile = () => {
  const [manager, setManager] = useState(null); // Store manager details
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate(); // Hook to navigate programmatically

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
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the fetch is complete
      });
  }, []);

  // Dummy profile picture (fallback if manager doesn't have a picture)
  const profilePic = manager?.profilePic || 'https://via.placeholder.com/150'; // Placeholder if no picture

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  // Handle the edit click event
  const handleEditClick = () => {
    navigate('/updateagency'); // Navigate to the updateagency page
  };

  return (
    <div className="h-screen flex">
      <Navbar />
      <div className="ml-14 w-screen">
        <ManagerHeader page="Profile" />
        
        <div className="flex justify-center items-center py-10">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            {/* Profile Image */}
            <div className="flex justify-center mb-6 relative">
              <img
                src="https://i.postimg.cc/rwYFBbkT/agency.jpg"
                alt="Manager"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              />
              {/* Edit Icon */}
              <div className="absolute top-0 right-0">
                <button 
                  className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={handleEditClick} // Attach the onClick handler here
                >
                  <EditIcon />
                </button>
              </div>
            </div>

            {/* Profile Information */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">{manager.name}</h2>
              <p className="text-sm text-gray-500 mt-2">{manager.bio || 'No bio available'}</p>

              <div className="mt-4 text-left">
                <div className="flex justify-between text-gray-700">
                  <span className="font-bold">Email:</span>
                  <span>{manager.email}</span>
                </div>
                <div className="flex justify-between text-gray-700 mt-2">
                  <span className="font-bold">Phone:</span>
                  <span>{manager.phone || 'Not provided'}</span>
                </div>
                <div className="flex justify-between text-gray-700 mt-2">
                  <span className="font-bold">About:</span>
                  <span>{manager.about || 'No information available'}</span>
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

