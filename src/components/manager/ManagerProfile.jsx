

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
//                 <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
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
import Swal from 'sweetalert2'; // For showing alerts
import axios from 'axios'; // For making HTTP requests
import Navbar from './Navbar';
import ManagerHeader from './ManagerHeader'; // Ensure this import exists in your code

const UpdateProfile = () => {
  const [manager, setManager] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    about: ''
  });
  const [loading, setLoading] = useState(true); // Loading state for the initial fetch
  const [error, setError] = useState(null); // Error state for handling errors
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state

  const managerId = localStorage.getItem('managerID'); // Get manager ID from localStorage

  useEffect(() => {
    // Fetch the current manager data when the component mounts
    const fetchManagerData = async () => {
      try {
        const response = await axios.get(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`);
        if (response.data.success) {
          setManager(response.data.data); // Set the manager's profile data
        } else {
          setError('Manager not found');
        }
      } catch (err) {
        setError('Error fetching manager data');
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchManagerData();
  }, [managerId]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await axios.put(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`, {
        name: manager.name,
        email: manager.email,
        phone: manager.phone,
        bio: manager.bio,
        about: manager.about
      });

      if (response.data.success) {
        Swal.fire({
          title: 'Profile Updated',
          text: 'Your profile has been updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: response.data.error || 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: 'There was an error updating your profile. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setManager((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if fetching fails
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar and ManagerHeader positioned at the top */}
      <div className="w-full flex flex-col">
        <Navbar /> {/* Navbar stays at the top-left */}
        <div className="w-full flex justify-center">
          <ManagerHeader page="Update Profile" /> {/* Centered ManagerHeader */}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 justify-center items-center bg-white p-8">
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={manager.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={manager.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={manager.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-semibold text-gray-700">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={manager.bio}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="about" className="block text-sm font-semibold text-gray-700">About</label>
              <textarea
                id="about"
                name="about"
                value={manager.about}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white p-2 rounded-md w-full mt-4"
              >
                {isSubmitting ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
