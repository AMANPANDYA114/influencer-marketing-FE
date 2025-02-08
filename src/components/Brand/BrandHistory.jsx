

import InstagramIcon from '@mui/icons-material/Instagram'; 
import EmailIcon from '@mui/icons-material/Email'; 
import React, { useEffect, useState } from "react";
import 'react-circular-progressbar/dist/styles.css';
import { toast } from "react-toastify"; 
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Navbar from "./Navbar";

const InfluencerHistory = () => {
  const [myCampaigns, setMyCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [campaignData, setCampaignData] = useState(null);
  const [campaignTypes, setCampaignTypes] = useState([]); // No need to filter duplicates here
  const [selectedCampaignType, setSelectedCampaignType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedBrandId = localStorage.getItem("brandID");
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
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
      const data = await response.json();
      if (data.success) {
        setMyCampaigns(data.data);
        setFilteredCampaigns(data.data);
        setCampaignTypes(data.data.map(campaign => campaign.campaignType)); // Keep duplicates here
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

  const fetchCampaignAnalytics = (campaignTypeId) => {
    fetch(`https://server-side-influencer.onrender.com/brand/getCampaignAnalytics/${campaignTypeId}`)
      .then((response) => response.json())
      .then((data) => setCampaignData(data.data))
      .catch((error) => console.error('Error fetching campaign analytics:', error));
  };

  const handleCampaignTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedCampaignType(selectedType);
    const filteredByType = myCampaigns.filter((campaign) => campaign.campaignType === selectedType);
    setFilteredCampaigns(filteredByType);
    const campaignTypeId = myCampaigns.find(campaign => campaign.campaignType === selectedType)?._id;
    if (campaignTypeId) {
      fetchCampaignAnalytics(campaignTypeId);
    }
  };

  const fallbackData = [
    { date: "2025-02-01", totalApplicants: 0, totalReach: 0, selectedUsers: 0 },
    { date: "2025-02-02", totalApplicants: 0, totalReach: 0, selectedUsers: 0 }
  ];

  const dataToRender = campaignData?.dayWiseAnalytics?.map((entry) => ({
    ...entry,
    selectedUsers: entry.usersSelectedForCampaign || 0,
    date: new Date(entry.date).toLocaleDateString(), // Format date
  })) || fallbackData;

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen p-8 bg-white"> {/* Background set to white */}
        <div className="text-center font-bold text-3xl mt-4">Campaign Analytics</div>
        <div className="text-center text-gray-600 mt-2 mb-10">
          View your campaign data in real-time and analyze performance.
        </div>

        {/* Dropdown for Campaign Type */}
        <div className="mb-4">
          <select
            value={selectedCampaignType}
            onChange={handleCampaignTypeChange}
            className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* Animated Line Chart Section */}
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

        {/* Applicant Analytics Cards */}
        <div className="flex flex-wrap justify-center gap-12 mt-8">
          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-purple-500">{campaignData ? campaignData.totalApplicants : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants for this campaign</h5>
          </div>

          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-green-500">{campaignData ? campaignData.activeCampaigns : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
          </div>

          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-orange-500">{campaignData ? campaignData.totalReach : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach on this campaign</h5>
          </div>

          <div className="w-80 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-5xl font-bold text-blue-500">{campaignData ? campaignData.usersSelectedForCampaign : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">
              Users Selected for this Campaign
              <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
            </h5>
          </div>
        </div>

        {/* Applicant Details Table */}
        <div
          style={{
            maxHeight: "400px", // Set maximum height for scrollable area
            overflowY: "auto",  // Enables vertical scrolling
            overflowX: "auto",  // Enables horizontal scrolling
          }}
          className="mt-4 border border-gray-300 shadow-md rounded-lg bg-white"
        >
          <h3 className="text-2xl font-semibold p-4">Applicant Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Age</th>
                  <th className="border px-4 py-2 text-left">Followers</th>
                  <th className="border px-4 py-2 text-left">Email</th>
                  <th className="border px-4 py-2 text-left">Status</th>
                  <th className="border px-4 py-2 text-left">Approved Budget</th>
                  <th className="border px-4 py-2 text-left">Instagram</th>
                  <th className="border px-4 py-2 text-left">Task Link</th>
                </tr>
              </thead>
              <tbody>
                {campaignData?.applicants?.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="border px-4 py-2 text-center text-gray-500">
                      No applications
                    </td>
                  </tr>
                ) : (
                  campaignData?.applicants?.map((applicant) => (
                    <tr key={applicant._id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{applicant.name}</td>
                      <td className="border px-4 py-2">{applicant.age}</td>
                      <td className="border px-4 py-2">{applicant.followers}</td>
                      <td className="border px-4 py-2">
                        <a href={`mailto:${applicant.email}`} className="flex items-center text-blue-500 hover:text-blue-700">
                          <EmailIcon style={{ marginRight: "5px" }} />
                          {applicant.email}
                        </a>
                      </td>
                      <td className="border px-4 py-2">{applicant.status}</td>
                      <td className="border px-4 py-2">₹{applicant.approvedBudget}</td>
                      <td className="border px-4 py-2">
                        <a
                          href={applicant.instagramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-500 hover:text-blue-700"
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
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHistory;


