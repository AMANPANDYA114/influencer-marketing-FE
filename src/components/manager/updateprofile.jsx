

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import ManagerHeader from './ManagerHeader';
// import Navbar from './Navbar';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the ArrowBack icon
// import { IconButton, CircularProgress } from '@mui/material'; // Import CircularProgress for the spinner

// const UpdateProfile = () => {
//   const navigate = useNavigate();
//   const [manager, setManager] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     bio: '',
//     about: '',
//     profilePic: '',
//     backgroundImage: '',
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [profilePic, setProfilePic] = useState(null);
//   const [backgroundImage, setBackgroundImage] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const [loadingUpload, setLoadingUpload] = useState(false); // Add loadingUpload state

//   const managerId = localStorage.getItem('managerID');

//   useEffect(() => {
//     const token = localStorage.getItem("mangertoken");
//     if (!token) {
//       navigate("/ManagerLogin");
//     } else {
//       const fetchManagerData = async () => {
//         try {
//           const response = await axios.get(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`);
//           if (response.data.success) {
//             setManager(response.data.data);
//           } else {
//             setError('Manager not found');
//           }
//         } catch (err) {
//           setError('Error fetching manager data');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchManagerData();
//     }
//   }, [managerId, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
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
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setManager((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleProfilePicChange = (e) => {
//     const file = e.target.files[0];
//     setProfilePic(file);
//     handleProfilePicUpload(file); 
//   };

//   const handleProfilePicUpload = async (file) => {
//     if (!file) {
//       setUploadStatus('No file selected');
//       return;
//     }

//     setUploadStatus('Uploading... Please wait');
//     setLoadingUpload(true); // Show loading text

//     const formData = new FormData();
//     formData.append('profilePic', file);

//     try {
//       const response = await axios.post(
//         `https://server-side-influencer.onrender.com/manager/${managerId}/upload-profile-pic`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.success) {
//         setUploadStatus('Upload successful!');
//         setManager((prevState) => ({
//           ...prevState,
//           profilePic: response.data.data.profilePic,
//         }));
//       } else {
//         setUploadStatus('Upload failed.');
//       }
//     } catch (error) {
//       setUploadStatus('Upload failed.');
//       console.error('Error uploading profile picture:', error);
//     } finally {
//       setLoadingUpload(false); // Hide loading text
//     }
//   };

//   const handleBackgroundImageChange = (e) => {
//     const file = e.target.files[0];
//     setBackgroundImage(file);
//     handleBackgroundImageUpload(file); 
//   };

//   const handleBackgroundImageUpload = async (file) => {
//     if (!file) {
//       setUploadStatus('No file selected');
//       return;
//     }

//     setUploadStatus('Uploading... Please wait');
//     setLoadingUpload(true); // Show loading text

//     const formData = new FormData();
//     formData.append('backgroundImage', file);

//     try {
//       const response = await axios.post(
//         `https://server-side-influencer.onrender.com/manager/${managerId}/upload-background-image`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.success) {
//         setUploadStatus('Upload successful!');
//         setManager((prevState) => ({
//           ...prevState,
//           backgroundImage: response.data.data.backgroundImage,
//         }));
//       } else {
//         setUploadStatus('Upload failed.');
//       }
//     } catch (error) {
//       setUploadStatus('Upload failed.');
//       console.error('Error uploading background image:', error);
//     } finally {
//       setLoadingUpload(false); // Hide loading text
//     }
//   };

//   if (loading) {
//     return (
//       <div className="h-screen flex justify-center items-center">
//         {/* Full Screen Spinner */}
//         <CircularProgress size={100} color="primary" />
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>; 
//   }

//   return (
//     <div className="h-screen flex">
//       <div className="flex-1 bg-white flex flex-col justify-center items-center">
//         <div className="w-full flex justify-start mb-4 p-4">
//           {/* Back Button */}
//           <IconButton onClick={() => navigate(-1)} className="absolute left-4 top-4">
//             <ArrowBackIcon style={{ color: 'black' }} />
//           </IconButton>
//           <div className="w-full bg-white-800 text-black p-4">
//             <ManagerHeader page="Update Profile" />
//           </div>
//         </div>

//         <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg mt-6">
//           <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
//           <form onSubmit={handleSubmit}>
//             {/* Name Input */}
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

//             {/* Email Input */}
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

//             {/* Phone Input */}
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

//             {/* Bio Input */}
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

//             {/* About Input */}
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

//             {/* Profile Picture Upload */}
//             <div className="mb-4">
//               <label htmlFor="profilePic" className="block text-sm font-semibold text-gray-700">Upload Profile Picture</label>
//               <input
//                 type="file"
//                 id="profilePic"
//                 name="profilePic"
//                 accept="image/*"
//                 onChange={handleProfilePicChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//               {loadingUpload && <p className="mt-2 text-sm text-blue-500">{uploadStatus}</p>}
//             </div>

//             {/* Background Image Upload */}
//             <div className="mb-4">
//               <label htmlFor="backgroundImage" className="block text-sm font-semibold text-gray-700">Upload Background Image</label>
//               <input
//                 type="file"
//                 id="backgroundImage"
//                 name="backgroundImage"
//                 accept="image/*"
//                 onChange={handleBackgroundImageChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//               {loadingUpload && <p className="mt-2 text-sm text-blue-500">{uploadStatus}</p>}
//             </div>

//             {/* Submit Button */}
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




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ManagerHeader from './ManagerHeader';
import Navbar from './Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the ArrowBack icon
import { IconButton, CircularProgress } from '@mui/material'; // Import CircularProgress for the spinner

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [manager, setManager] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    about: '',
    profilePic: '',
    backgroundImage: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [loadingUpload, setLoadingUpload] = useState(false); // Add loadingUpload state

  const managerId = localStorage.getItem('managerID');

  useEffect(() => {
    const token = localStorage.getItem("mangertoken");
    if (!token) {
      navigate("/ManagerLogin");
    } else {
      const fetchManagerData = async () => {
        try {
          const response = await axios.get(`https://server-side-influencer-1.onrender.com/manager/managers/${managerId}`);
          if (response.data.success) {
            setManager(response.data.data);
          } else {
            setError('Manager not found');
          }
        } catch (err) {
          setError('Error fetching manager data');
        } finally {
          setLoading(false);
        }
      };

      fetchManagerData();
    }
  }, [managerId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setManager((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    handleProfilePicUpload(file); 
  };

  const handleProfilePicUpload = async (file) => {
    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    setUploadStatus('Uploading... Please wait');
    setLoadingUpload(true); // Show loading text

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
        setUploadStatus('Upload successful!');
        setManager((prevState) => ({
          ...prevState,
          profilePic: response.data.data.profilePic,
        }));
      } else {
        setUploadStatus('Upload failed.');
      }
    } catch (error) {
      setUploadStatus('Upload failed.');
      console.error('Error uploading profile picture:', error);
    } finally {
      setLoadingUpload(false); // Hide loading text
    }
  };

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    setBackgroundImage(file);
    handleBackgroundImageUpload(file); 
  };

  const handleBackgroundImageUpload = async (file) => {
    if (!file) {
      setUploadStatus('No file selected');
      return;
    }

    setUploadStatus('Uploading... Please wait');
    setLoadingUpload(true); // Show loading text

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
        setUploadStatus('Upload successful!');
        setManager((prevState) => ({
          ...prevState,
          backgroundImage: response.data.data.backgroundImage,
        }));
      } else {
        setUploadStatus('Upload failed.');
      }
    } catch (error) {
      setUploadStatus('Upload failed.');
      console.error('Error uploading background image:', error);
    } finally {
      setLoadingUpload(false); // Hide loading text
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        {/* Full Screen Spinner */}
        <CircularProgress size={100} color="primary" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="h-screen flex">
      <div className="flex-1 bg-white flex flex-col justify-center items-center">
        <div className="w-full flex justify-start mb-4 p-4 relative">
          {/* Back Button inside a white background button */}
          <button 
            onClick={() => navigate(-1)} 
            className="bg-white border border-gray-300 p-2 rounded-full shadow-md flex items-center justify-center space-x-2"
          >
            <ArrowBackIcon style={{ color: '#003366' }} /> {/* Very Dark Blue Color */}
            <span className="text-black">Back</span>
          </button>
          <div className="w-full bg-white-800 text-black p-4">
            <ManagerHeader page="Update Profile" />
          </div>
        </div>

        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
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

            {/* Email Input */}
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

            {/* Phone Input */}
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

            {/* Bio Input */}
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

            {/* About Input */}
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
              {loadingUpload && <p className="mt-2 text-sm text-blue-500">{uploadStatus}</p>}
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
              {loadingUpload && <p className="mt-2 text-sm text-blue-500">{uploadStatus}</p>}
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
