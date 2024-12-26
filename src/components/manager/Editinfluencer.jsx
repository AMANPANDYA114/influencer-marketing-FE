




import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';  // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toast

const EditInfluencer = ({ onSubmit }) => {
  // Access item data passed from navigate using useLocation
  const { state } = useLocation();
  const item = state?.item;

  const navigate = useNavigate();

  // Ensure hashtags is safely initialized as a string
  const initialHashtags = item?.hashtags || '';  // If hashtags are undefined or null, initialize as an empty string

  // Initialize form state with safe defaults, including hashtags as a string
  const [formData, setFormData] = useState({
    name: item?.name || '',
    costing: item?.costingPerSegment || '',
    notes: item?.notes || '',
    instagramProfile: item?.instagramProfile || '',
    location: item?.location || '',
    followers: item?.followers || '',
    subscribers: item?.subscribers || '',
    category: item?.category || '',
    contactNumber: item?.contactNumber || '',
    city: item?.city || '',
    state: item?.state || '',
    commercial: item?.commercial || '',
    email: item?.email || '',
    hashtags: initialHashtags,  // Keep hashtags as a string
    managedBy: item?.managedBy || '',
    lifestyle: item?.lifestyle || ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the updated data in the expected format
    const updatedData = {
      name: formData.name,
      instagramProfile: formData.instagramProfile,
      followers: formData.followers,
      youtubeLink: formData.youtubeLink || '',  // Include YouTube link if available
      subscribers: formData.subscribers,
      category: formData.category,
      contactNumber: formData.contactNumber,
      primaryNiche: formData.primaryNiche || '',  // Add primary niche
      secondaryNiche: formData.secondaryNiche || '',  // Add secondary niche
      location: formData.location,
      state: formData.state,
      city: formData.city,
      commercial: formData.commercial,
      email: formData.email,
      costingPerSegment: formData.costing,  // Map costing to costingPerSegment
      notes: formData.notes,
      hashtags: formData.hashtags, // Convert hashtags into an array
      managedBy: formData.managedBy,
      lifestyle: formData.lifestyle
    };
  
    try {
      // Make the API call to update the influencer data
      const response = await fetch(`https://server-side-influencer.vercel.app/allinfluencer/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Show success toast
        toast.success('Influencer updated successfully!');
        // Optionally, navigate to another page
        // navigate('/ManagerHome');
      } else {
        // Show error toast
        toast.error('Failed to update influencer!');
        console.error('Failed to update influencer', data);
      }
    } catch (error) {
      // Show error toast on exception
      toast.error('Error updating influencer: ' + error.message);
      console.error('Error updating influencer:', error);
    }
  };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare the updated data by merging item (existing) and formData (edited)
//     const updatedData = {
//       ...item,  // Existing data from the "item"
//       ...formData  // Updated data from the form
//     };

//     try {
//       // Update influencer using API call
//       const response = await fetch(`http://localhost:8000/allinfluencer/${item.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Show success toast
//         toast.success('Influencer updated successfully!');
//         // Optionally, navigate to another page
//         // navigate('/ManagerHome');
//       } else {
//         // Show error toast
//         toast.error('Failed to update influencer!');
//         console.error('Failed to update influencer', data);
//       }
//     } catch (error) {
//       // Show error toast on exception
//       toast.error('Error updating influencer: ' + error.message);
//       console.error('Error updating influencer:', error);
//     }
//   };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Update Influencer</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for all influencer data */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="costing" className="block text-sm font-medium text-gray-700">Costing per Segment</label>
          <input
            type="text"
            id="costing"
            name="costing"
            value={formData.costing}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="instagramProfile" className="block text-sm font-medium text-gray-700">Instagram Profile</label>
          <input
            type="text"
            id="instagramProfile"
            name="instagramProfile"
            value={formData.instagramProfile}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="followers" className="block text-sm font-medium text-gray-700">Followers</label>
          <input
            type="number"
            id="followers"
            name="followers"
            value={formData.followers}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subscribers" className="block text-sm font-medium text-gray-700">Subscribers</label>
          <input
            type="number"
            id="subscribers"
            name="subscribers"
            value={formData.subscribers}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="commercial" className="block text-sm font-medium text-gray-700">Commercial</label>
          <input
            type="text"
            id="commercial"
            name="commercial"
            value={formData.commercial}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="hashtags" className="block text-sm font-medium text-gray-700">Hashtags</label>
          <input
            type="text"
            id="hashtags"
            name="hashtags"
            value={formData.hashtags}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter hashtags"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="managedBy" className="block text-sm font-medium text-gray-700">Managed By</label>
          <input
            type="text"
            id="managedBy"
            name="managedBy"
            value={formData.managedBy}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lifestyle" className="block text-sm font-medium text-gray-700">Lifestyle</label>
          <input
            type="text"
            id="lifestyle"
            name="lifestyle"
            value={formData.lifestyle}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Update Influencer
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditInfluencer;
