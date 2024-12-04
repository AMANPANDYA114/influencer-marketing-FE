

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";
import InfluencerHeader from "./InfluencerHeader";
const InfluencerHistory = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedCampaignId, setSelectedCampaignId] = useState(""); // Store only campaignId here
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    followers: '',
    following: '',
    email: '',
    campaignId: '',
  }); // Form data state

  useEffect(() => {
    // Fetch the campaigns from the API
    const getCampaigns = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://server-side-influencer-1.onrender.com/brand/getAllCampaigns");
        const data = response.data.data; // Assuming the response follows the format { success: true, data: [...] }

        setCampaigns(data); // Set campaign data for rendering
        setLoading(false);
      } catch (err) {
        toast.error("Error fetching campaign data.");
        setLoading(false);
      }
    };

    getCampaigns();
  }, []);

  const handleApplyClick = (campaign) => {
    console.log("Selected campaign:", campaign); // Log the full campaign object

    setSelectedCampaignId(campaign._id); // Set the campaignId to the selected campaign
    setFormData(prevFormData => ({
      ...prevFormData,
      campaignId: campaign._id, // Automatically set the campaignId in the formData
    }));

    console.log("Received campaignId:", campaign._id); // Console log the campaignId when selected
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { name, age, followers, following, email } = formData;
    if (!name || !age || !followers || !following || !email) {
      toast.error("All fields are required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Only submit if form is valid

    const applicationData = { ...formData, campaignId: selectedCampaignId }; // Pass only campaignId

    console.log("Submitting application with campaignId:", selectedCampaignId); // Log the selected campaignId

    try {
      // Make the POST request to submit the application
      const response = await axios.post("https://server-side-influencer-1.onrender.com/brand/applyToCampaign", applicationData);

      if (response.data.success) {
        toast.success("Application submitted successfully!"); // Show success message
        setShowModal(false); // Close the modal after successful submission
        setFormData({
          name: '',
          age: '',
          followers: '',
          following: '',
          email: '',
          campaignId: '',
        }); // Clear the form fields
      } else {
        toast.error("You are not eligible. Please check your email."); // Show error message if any
      }
    } catch (err) {
      toast.error("You are not eligible. Please check your email."); // Catch any errors during the API call
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar />
   
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
      <InfluencerHeader page="Profile" />
        <p className="text-center font-bold text-2xl">Join Campaigns</p>

        {loading ? (
          <img src={loader} alt="loading" className="h-52 mx-auto" />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5 max-md:px-10">
            {/* Check if there are any campaigns */}
            {campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <div
                  key={campaign._id} // Use the campaign ID for key
                  className="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl p-4"
                >
                  <div className="text-center text-sm">
                    <h3 className="text-xl font-bold font-dmserif text-neutral-700">
                      {campaign.brandName}
                    </h3>
                    <p className="text-md text-gray-700 font-dmserif">
                      Campaign Type: {campaign.campaignType}
                    </p>
                  </div>

                  <div className="border-y-2 py-3 text-sm">
                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">Start Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
                    </div>

                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">End Date: {new Date(campaign.endDate).toLocaleDateString()}</p>
                    </div>

                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">Budget: ${campaign.budget}</p>
                    </div>

                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">Description: {campaign.description}</p>
                    </div>

                   {/* Display Follower Range */}
{campaign.followerRange && campaign.followerRange.length === 2 && (
  <div className="flex space-x-2.5 items-center mt-2">
    <p className="mb-1 text-md">Follower Range: {campaign.followerRange[0]} - {campaign.followerRange[1]}</p>
  </div>
)}


                    {/* Display Tags */}
                    {campaign.tags?.length > 0 && (
                      <div className="mt-2">
                        <p className="text-md">Tags: </p>
                        <ul className="flex space-x-3">
                          {campaign.tags.map((tag, index) => (
                            <li key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full">{tag}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 text-center">
                    <button 
                      onClick={() => handleApplyClick(campaign)} 
                      className="px-6 py-2 bg-blue-500 text-white rounded-full mt-4">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-3xl font-bold">No Campaigns Available</h1>
            )}
          </div>
        )}

        {/* Modal for Application Form */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h2 className="text-2xl mb-4">Apply for Campaign</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-md">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-md">Age</label>
                  <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-md">Followers</label>
                  <input 
                    type="number" 
                    name="followers" 
                    value={formData.followers} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-md">Following</label>
                  <input 
                    type="number" 
                    name="following" 
                    value={formData.following} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-md">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    onClick={handleCloseModal} 
                    className="px-4 py-2 bg-gray-500 text-white rounded">
                    Close
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-500 text-white rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default InfluencerHistory;
