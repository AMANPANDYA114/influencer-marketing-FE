


// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2'; // For showing alerts
// import axios from 'axios'; // For making HTTP requests
// import Navbar from './Navbar'; // Ensure this import exists in your code
// import ManagerHeader from './ManagerHeader'; // Ensure this import exists in your code
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

// const UpdateProfile = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook
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

//   // Token check and redirect if no token
//   useEffect(() => {
//     const token = localStorage.getItem("mangertoken");
//     if (!token) {
//       // Redirect to login page if no token is found
//       navigate("/ManagerLogin");
//     } else {
//       // Fetch manager data if token is present
//       const fetchManagerData = async () => {
//         try {
//           const response = await axios.get(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`);
//           if (response.data.success) {
//             setManager(response.data.data); // Set the manager's profile data
//           } else {
//             setError('Manager not found');
//           }
//         } catch (err) {
//           setError('Error fetching manager data');
//         } finally {
//           setLoading(false); // Set loading state to false after fetching data
//         }
//       };

//       fetchManagerData();
//     }
//   }, [managerId, navigate]);

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
//     <div className="h-screen flex">
//       {/* Navbar positioned on the left */}
//       <div className="w-1/6 bg--800 text-white">
//         <Navbar />
//       </div>
      
//       {/* Main content area */}
//       <div className="flex-1 bg-white flex flex-col justify-center items-center">
//         {/* ManagerHeader with 100% width */}
//         <div className="w-full flex justify-center mb-4">
//           <div className="w-full bg-white-800 text-black p-4">
//             <ManagerHeader page="Update Profile" />
//           </div>
//         </div>

//         {/* Main content (form) */}
//         <div className="flex justify-center items-center w-full h-full px-4">
//           <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
//             <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={manager.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={manager.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   value={manager.phone}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="bio" className="block text-sm font-semibold text-gray-700">Bio</label>
//                 <textarea
//                   id="bio"
//                   name="bio"
//                   value={manager.bio}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   rows="4"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="about" className="block text-sm font-semibold text-gray-700">About</label>
//                 <textarea
//                   id="about"
//                   name="about"
//                   value={manager.about}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   rows="4"
//                 />
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-blue-500 text-white p-2 rounded-md w-full mt-4"
//                 >
//                   {isSubmitting ? 'Updating...' : 'Update Profile'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;







import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ManagerHeader from './ManagerHeader'; // Ensure this import exists in your code
import Navbar from './Navbar'; // Ensure this import exists in your code

const UpdateProfile = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [manager, setManager] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    about: '',
    profilePic: '', // Add a field for the profile picture URL
    backgroundImage: '', // Add a field for the background image URL
  });
  const [loading, setLoading] = useState(true); // Loading state for the initial fetch
  const [error, setError] = useState(null); // Error state for handling errors
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle form submission state
  const [profilePic, setProfilePic] = useState(null); // State for profile picture file
  const [backgroundImage, setBackgroundImage] = useState(null); // State for background image file
  const [uploadStatus, setUploadStatus] = useState(''); // State for upload status

  const managerId = localStorage.getItem('managerID'); // Get manager ID from localStorage

  // Token check and redirect if no token
  useEffect(() => {
    const token = localStorage.getItem("mangertoken");
    if (!token) {
      // Redirect to login page if no token is found
      navigate("/ManagerLogin");
    } else {
      // Fetch manager data if token is present
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
    }
  }, [managerId, navigate]);

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

  // Handle Profile Picture Change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    handleProfilePicUpload(file); // Automatically upload the image when selected
  };

  // Handle Profile Picture Upload
  const handleProfilePicUpload = async (file) => {
    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    setUploadStatus('Uploading... Please wait'); // Set the status to "Uploading..."

    const formData = new FormData();
    formData.append('profilePic', file);

    try {
      const response = await axios.post(
        `https://server-side-influencer.onrender.com/manager/${managerId}/upload-profile-pic`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setUploadStatus('Upload successful!'); // If upload is successful
        // Optionally, update the profile picture URL in the manager's profile
        setManager((prevState) => ({
          ...prevState,
          profilePic: response.data.data.profilePic,
        }));
      } else {
        setUploadStatus('Upload failed.'); // If upload failed
      }
    } catch (error) {
      setUploadStatus('Upload failed.'); // If there is an error
      console.error('Error uploading profile picture:', error);
    }
  };

  // Handle Background Image Change
  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    setBackgroundImage(file);
    handleBackgroundImageUpload(file); // Automatically upload the background image when selected
  };

  // Handle Background Image Upload
  const handleBackgroundImageUpload = async (file) => {
    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    setUploadStatus('Uploading... Please wait'); // Set the status to "Uploading..."

    const formData = new FormData();
    formData.append('backgroundImage', file);

    try {
      const response = await axios.post(
        `https://server-side-influencer.onrender.com/manager/${managerId}/upload-background-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setUploadStatus('Upload successful!'); // If upload is successful
        // Optionally, update the background image URL in the manager's profile
        setManager((prevState) => ({
          ...prevState,
          backgroundImage: response.data.data.backgroundImage,
        }));
      } else {
        setUploadStatus('Upload failed.'); // If upload failed
      }
    } catch (error) {
      setUploadStatus('Upload failed.'); // If there is an error
      console.error('Error uploading background image:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if fetching failsssssss
  }

  return (
    <div className="h-screen flex">
      {/* Navbar positioned on the left */}
      <div className="w-1/6 bg--800 text-white">
        <Navbar />
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center">
        <div className="w-full flex justify-center mb-4">
          <div className="w-full bg-white-800 text-black p-4">
            <ManagerHeader page="Update Profile" />
          </div>
        </div>

        {/* Form to update profile information */}
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
          <form onSubmit={handleSubmit}>
            {/* Name */}
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

            {/* Email */}
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

            {/* Phone */}
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

            {/* Bio */}
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

            {/* About */}
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

            {/* Profile Picture Upload */}
            <div className="mb-4">
              <label htmlFor="profilePic" className="block text-sm font-semibold text-gray-700">Upload Profile Picture</label>
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {uploadStatus && <p className="mt-2 text-sm">{uploadStatus}</p>}
            </div>

            {/* Background Image Upload */}
            <div className="mb-4">
              <label htmlFor="backgroundImage" className="block text-sm font-semibold text-gray-700">Upload Background Image</label>
              <input
                type="file"
                id="backgroundImage"
                name="backgroundImage"
                accept="image/*"
                onChange={handleBackgroundImageChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {uploadStatus && <p className="mt-2 text-sm">{uploadStatus}</p>}
            </div>

            {/* Submit Button */}
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
