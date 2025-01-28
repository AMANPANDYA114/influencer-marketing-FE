

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert
import Navbar from './Navbar'; // Import the Navbar

const ApplyToCampaign = () => {
  const location = useLocation();
  const campaignId = location.state?.campaignId; // Access the campaignId passed via state

  // State hooks for form values
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [followers, setFollowers] = useState('');
  const [email, setEmail] = useState('');
  const [taskLink, setTaskLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [approvedBudget, setApprovedBudget] = useState(''); // State for approved budget
  const [image, setImage] = useState(null);

  if (!campaignId) {
    return (
      <div className="text-center mt-5">
        <p className="text-red-600">Campaign ID is missing! Please make sure it's provided correctly.</p>
      </div>
    );
  }

  // Get influencer ID from localStorage
  const influencerID = localStorage.getItem('influencerID');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Set the image state to the uploaded file
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Create FormData object to handle both text and image data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('followers', followers);
    formData.append('email', email);
    formData.append('campaignId', campaignId);
    formData.append('taskLink', taskLink);
    formData.append('instagramLink', instagramLink);
    formData.append('approvedBudget', approvedBudget); // Append approved budget
    formData.append('applicantRealId', influencerID); // Use influencer ID from localStorage

    // Append the image file if available
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('https://server-side-influencer-1.onrender.com/influencer/apply-to-campaign', {
        method: 'PUT',
        body: formData, // Send formData with image and other data
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Success:', result);
        Swal.fire('Success!', 'Application submitted successfully!', 'success'); // SweetAlert success message
      } else {
        console.error('Error:', result);
        // Show the actual error message from the API in SweetAlert
        Swal.fire('Error', result.message || 'Error submitting application!', 'error'); // SweetAlert error message with API message
      }
    } catch (error) {
      console.error('Request failed:', error);
      Swal.fire('Network Error', 'Please try again later.', 'error'); // SweetAlert network error message
    }
  };

  return (
    <div>
      {/* Include the Navbar above your main content */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 100 }}>
        <Navbar />
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Apply to Campaign</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Age */}
            <div>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Followers */}
            <div>
              <input
                type="number"
                placeholder="Followers"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Task Link */}
            <div>
              <input
                type="url"
                placeholder="Task Link (Optional)"
                value={taskLink}
                onChange={(e) => setTaskLink(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Instagram Link */}
            <div>
              <input
                type="url"
                placeholder="Instagram Link (Optional)"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Approved Budget */}
            <div>
              <input
                type="number"
                placeholder="Approved Budget in ruppees"
                value={approvedBudget}
                onChange={(e) => setApprovedBudget(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Image Upload */}
            <h1>** Submit any related images or screenshots for this campaign</h1>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Display uploaded image as thumbnail */}
            {image && (
              <div className="flex mt-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded"
                  className="w-16 h-16 object-cover border rounded mr-2"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyToCampaign;

