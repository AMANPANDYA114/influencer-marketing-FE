


import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toast
import { ArrowBack } from '@mui/icons-material'; // Import ArrowBack icon

const EditInfluencer = () => {
  const { state } = useLocation();
  const item = state?.item;
  const navigate = useNavigate();

  const initialHashtags = item?.hashtags || '';

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
    hashtags: initialHashtags,
    managedBy: item?.managedBy || '',
    lifestyle: item?.lifestyle || '',
    youtubeLink: item?.youtubeLink || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("mangertoken");
    if (!token) {
      navigate('/ManagerLogin');
      return;
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: formData.name,
      instagramProfile: formData.instagramProfile,
      followers: formData.followers,
      youtubeLink: formData.youtubeLink || '',
      subscribers: formData.subscribers,
      category: formData.category,
      contactNumber: formData.contactNumber,
      primaryNiche: formData.primaryNiche || '',
      secondaryNiche: formData.secondaryNiche || '',
      location: formData.location,
      state: formData.state,
      city: formData.city,
      commercial: formData.commercial,
      email: formData.email,
      costingPerSegment: formData.costing,
      notes: formData.notes,
      hashtags: formData.hashtags,
      managedBy: formData.managedBy,
      lifestyle: formData.lifestyle
    };

    try {
      const response = await fetch(`http://localhost:8000/manager/update-influencer/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Influencer updated successfully!');
      } else {
        toast.error('Failed to update influencer!');
        console.error('Failed to update influencer', data);
      }
    } catch (error) {
      toast.error('Error updating influencer: ' + error.message);
      console.error('Error updating influencer:', error);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Navbar on the left corner */}
      <div className="absolute left-0 top-4">
        <Navbar />
      </div>

      {/* Back arrow button in left corner */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-24 text-blue-500"
        style={{ fontSize: '30px' }}
      >
        <ArrowBack />
      </button>

      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Update Influencer</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
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

        {/* Costing */}
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

        {/* Notes */}
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

        {/* Instagram Profile */}
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

        {/* Location */}
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

        {/* Followers */}
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

        {/* Subscribers */}
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

        {/* Category */}
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

        {/* Contact Number */}
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

        {/* City */}
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

        {/* State */}
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

        {/* Commercial */}
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

        {/* Email */}
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

        {/* Hashtags */}
        <div className="mb-4">
          <label htmlFor="hashtags" className="block text-sm font-medium text-gray-700">Hashtags</label>
          <input
            type="text"
            id="hashtags"
            name="hashtags"
            value={formData.hashtags}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Managed By */}
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

        {/* Lifestyle */}
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

        {/* YouTube Link */}
        <div className="mb-4">
          <label htmlFor="youtubeLink" className="block text-sm font-medium text-gray-700">YouTube Link</label>
          <input
            type="text"
            id="youtubeLink"
            name="youtubeLink"
            value={formData.youtubeLink}
            onChange={handleChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Update Influencer
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EditInfluencer;
