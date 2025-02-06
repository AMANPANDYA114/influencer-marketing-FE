

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import 'react-circular-progressbar/dist/styles.css';
import { toast } from "react-toastify";  // Assuming you're using react-toastify for error messages
import { Link } from "react-router-dom";  // Import Link for routing
import InstagramIcon from '@mui/icons-material/Instagram';  // Import MUI Instagram icon

const InfluencerHistory = () => {
  const [myCampaigns, setMyCampaigns] = useState([]);  // All campaigns data fetched for the brand
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);  // Filtered campaigns based on selected type
  const [campaignData, setCampaignData] = useState(null);
  const [campaignTypes, setCampaignTypes] = useState([]);  // To hold the unique campaign types
  const [selectedCampaignType, setSelectedCampaignType] = useState("");  // Selected campaign type ID
  const [loading, setLoading] = useState(false);  // Loading state

  // Fetch campaigns based on brand ID from localStorage
  useEffect(() => {
    const storedBrandId = localStorage.getItem("brandID");
    console.log("Stored Brand ID:", storedBrandId);
    if (storedBrandId) {
      fetchCampaigns(storedBrandId);
    } else {
      toast.error("No brand ID found in localStorage!");
    }
  }, []);

  const fetchCampaigns = async (brandId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://server-side-influencer.onrender.com/brand/getMyCampaigns/${brandId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setMyCampaigns(data.data);  // Set fetched campaigns in state
        setFilteredCampaigns(data.data);  // Initially show all campaigns

        // Get unique campaign types from the campaigns data
        const uniqueCampaignTypes = [...new Set(data.data.map(campaign => campaign.campaignType))];
        setCampaignTypes(uniqueCampaignTypes);
      } else {
        toast.error(data.message || "Failed to fetch campaigns");
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      toast.error("Error fetching campaigns");
    } finally {
      setLoading(false);
    }
  };

  // Fetch campaign analytics for selected campaign type
  const fetchCampaignAnalytics = (campaignTypeId) => {
    fetch(`https://server-side-influencer.onrender.com/brand/getCampaignAnalytics/${campaignTypeId}`)
      .then((response) => response.json())
      .then((data) => setCampaignData(data.data))
      .catch((error) => console.error('Error fetching campaign analytics:', error));
  };

  // Handle campaign type selection from the dropdown
  const handleCampaignTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedCampaignType(selectedType);

    // Filter campaigns based on the selected type
    const filteredByType = myCampaigns.filter((campaign) => campaign.campaignType === selectedType);
    setFilteredCampaigns(filteredByType);  // Update filtered campaigns

    // Fetch analytics for the selected campaign type
    const campaignTypeId = myCampaigns.find(campaign => campaign.campaignType === selectedType)?._id;
    if (campaignTypeId) {
      fetchCampaignAnalytics(campaignTypeId);
    }
  };

  // Create fallback data in case campaignData is not available
  const fallbackData = [
    {
      date: "2025-02-01",  // Fallback date
      totalApplicants: 0,
      totalReach: 0,
      selectedUsers: 0,
    },
    {
      date: "2025-02-02",  // Fallback date
      totalApplicants: 0,
      totalReach: 0,
      selectedUsers: 0,
    },
  ];

  // Use fallback data if campaignData is not available
  const dataToRender = campaignData?.dayWiseAnalytics?.map((entry) => ({
    ...entry,
    selectedUsers: entry.usersSelectedForCampaign || 0,  // Ensure selectedUsers is mapped from usersSelectedForCampaign
  })) || fallbackData;

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <div className="text-center font-bold text-3xl mt-4">Campaign Analytics</div>
        <div className="text-center text-gray-600 mt-2 mb-10">
          View your campaign data in real-time and analyze performance.
        </div>

        {/* Dropdown for Campaign Type (replacing the search bar) */}
        <div className="px-8 mb-4">
          <select
            value={selectedCampaignType}
            onChange={handleCampaignTypeChange}
            className="p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Campaign Type</option>
            {campaignTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Loading Spinner (Optional) */}
        {loading && <div>Loading...</div>}

        {/* Animated Line Chart Section (Top) */}
        <div className="flex flex-col items-center mt-8">
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataToRender}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalApplicants" stroke="#8884d8" />
                <Line type="monotone" dataKey="totalReach" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analytics Cards Section (Below Line Chart) */}
        <div className="flex flex-wrap justify-center gap-12 mt-8">
          {/* Total Applicants Card */}
          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-purple-500">{campaignData ? campaignData.totalApplicants : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants for this campaign</h5>
          </div>

          {/* Active Campaigns Card */}
          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-green-500">{campaignData ? campaignData.activeCampaigns : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
          </div>

          {/* Total Reach Card */}
          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-orange-500">{campaignData ? campaignData.totalReach : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach on this campaign</h5>
          </div>

          {/* Users Selected for Campaign Card */}
          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-blue-500">{campaignData ? campaignData.usersSelectedForCampaign : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">
              Users Selected for this Campaign
              <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
            </h5>
          </div>
        </div>

        {/* Applicant Details Table (Below Analytics Cards) */}
        <div className="mt-4 px-8">
          <h3 className="text-2xl font-semibold">Applicant Details</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Age</th>
                  <th className="border px-4 py-2">Followers</th>
                  <th className="border px-4 py-2">Email</th> {/* Email Column */}
                  <th className="border px-4 py-2">Status</th> {/* Status Column */}
                  <th className="border px-4 py-2">Approved Budget</th> {/* Approved Budget Column */}
                  <th className="border px-4 py-2">Instagram</th>
                  <th className="border px-4 py-2">Task Link</th>
                </tr>
              </thead>
              <tbody>
                {campaignData?.applicants?.map((applicant) => (
                  <tr key={applicant._id}>
                    <td className="border px-4 py-2">{applicant.name}</td>
                    <td className="border px-4 py-2">{applicant.age}</td>
                    <td className="border px-4 py-2">{applicant.followers}</td>
                    <td className="border px-4 py-2">{applicant.email}</td> {/* Displaying Email */}
                    <td className="border px-4 py-2">{applicant.status}</td> {/* Displaying Status */}
                    <td className="border px-4 py-2">₹{applicant.approvedBudget}</td> {/* Displaying Approved Budget */}
                    <td className="border px-4 py-2">
                      <a
                        href={applicant.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 flex items-center"
                      >
                        <InstagramIcon className="mr-2" />
                        Instagram
                      </a>
                    </td>
                    <td className="border px-4 py-2">
                      <a
                        href={applicant.taskLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        View Task
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfluencerHistory;

