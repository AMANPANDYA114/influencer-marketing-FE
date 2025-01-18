

// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2'; // For showing alerts
// import axios from 'axios'; // For making HTTP requests
// import Navbar from './Navbar';
// import ManagerHeader from './ManagerHeader'; // Ensure this import exists in your code

// const UpdateProfile = () => {
//   const [manager, setManager] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     bio: '',
//     about: ''
//   });
//   const [loading, setLoading] = useState(true); // Loading state for the initial fetch
//   const [error, setError] = useState(null); // Error state for handling errors
//   const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state

//   const managerId = localStorage.getItem('managerID'); // Get manager ID from localStorage

//   useEffect(() => {
//     // Fetch the current manager data when the component mounts
//     const fetchManagerData = async () => {
//       try {
//         const response = await axios.get(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`);
//         if (response.data.success) {
//           setManager(response.data.data); // Set the manager's profile data
//         } else {
//           setError('Manager not found');
//         }
//       } catch (err) {
//         setError('Error fetching manager data');
//       } finally {
//         setLoading(false); // Set loading state to false after fetching data
//       }
//     };

//     fetchManagerData();
//   }, [managerId]);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setIsSubmitting(true); // Set submitting state to true

//     try {
//       const response = await axios.put(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`, {
//         name: manager.name,
//         email: manager.email,
//         phone: manager.phone,
//         bio: manager.bio,
//         about: manager.about
//       });

//       if (response.data.success) {
//         Swal.fire({
//           title: 'Profile Updated',
//           text: 'Your profile has been updated successfully.',
//           icon: 'success',
//           confirmButtonText: 'OK',
//         });
//       } else {
//         Swal.fire({
//           title: 'Error',
//           text: response.data.error || 'Something went wrong.',
//           icon: 'error',
//           confirmButtonText: 'OK',
//         });
//       }
//     } catch (err) {
//       Swal.fire({
//         title: 'Error',
//         text: 'There was an error updating your profile. Please try again later.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     } finally {
//       setIsSubmitting(false); // Reset the submitting state
//     }
//   };

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setManager((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Show error if fetching fails
//   }

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Full-width header at the top */}
//       <div className="w-full bg-gray-800 text-white p-4">
//         <ManagerHeader page="Update Profile" />
//       </div>
      
//       {/* Main content area */}
//       <div className="flex flex-1 flex-col p-8">
//         <Navbar />
//         <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//           <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={manager.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={manager.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={manager.phone}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="bio" className="block text-sm font-semibold text-gray-700">Bio</label>
//               <textarea
//                 id="bio"
//                 name="bio"
//                 value={manager.bio}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 rows="4"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="about" className="block text-sm font-semibold text-gray-700">About</label>
//               <textarea
//                 id="about"
//                 name="about"
//                 value={manager.about}
//                 onChange={handleChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 rows="4"
//               />
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="bg-blue-500 text-white p-2 rounded-md w-full mt-4"
//               >
//                 {isSubmitting ? 'Updating...' : 'Update Profile'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // For showing alerts
import axios from 'axios'; // For making HTTP requests
import Navbar from './Navbar'; // Ensure this import exists in your code
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
    <div className="h-screen flex">
      {/* Navbar positioned on the left */}
      <div className="w-1/6 bg--800 text-white">
        <Navbar />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 bg-white">
        {/* ManagerHeader with 50% width */}
        <div className="w-full flex justify-center">
          <div className="w-1/2 bg-white-800 text-black p-4">
            <ManagerHeader page="Update Profile" />
          </div>
        </div>

        {/* Main content (form) */}
        <div className="flex justify-center items-center">
          <div className="w-1/2 max-w-lg p-8 bg-white shadow-lg rounded-lg">
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
    </div>
  );
};

export default UpdateProfile;
