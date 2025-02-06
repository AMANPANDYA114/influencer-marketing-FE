



import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import 'react-circular-progressbar/dist/styles.css';

const InfluencerHistory = () => {
  const [campaignData, setCampaignData] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    fetch("https://server-side-influencer.onrender.com/brand/getCampaignAnalytics/67a49891318f14e56795d3f0 ")
      .then((response) => response.json())
      .then((data) => setCampaignData(data.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!campaignData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <div className="text-center font-bold text-3xl mt-4">
          Campaign Analytics
        </div>
        <div className="text-center text-gray-600 mt-2 mb-10">
          View your campaign data in real-time and analyze performance.
        </div>

        {/* View Detailed Report Button - Positioned to the top-right */}
        <div className="absolute top-10 right-10 z-10">
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition">
            View Detailed Report
          </button>
        </div>

        {/* Day-wise Analytics Section - Moved Below the View Detailed Report Button */}
        <div className="flex flex-wrap justify-start gap-8 mt-16 mb-8 px-8">
          {campaignData.dayWiseAnalytics.map((dayData, index) => (
            <div key={index} className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="text-2xl font-bold text-gray-800">{`Day ${dayData.day}`}</div>
              <div className="text-lg font-semibold text-gray-600">{new Date(dayData.date).toLocaleDateString()}</div>

              {/* Day-wise Data */}
              <div className="mt-4 text-lg">
                <p>Total Applicants: {dayData.totalApplicants}</p>
                <p>Total Reach: {dayData.totalReach}</p>
                <p>Selected Users: {dayData.selectedUsers}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Line Chart Section */}
        <div className="flex flex-col items-center mt-8">
          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={campaignData.dayWiseAnalytics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="totalApplicants"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  animationDuration={1000} // Animation duration for line
                />
                <Line
                  type="monotone"
                  dataKey="totalReach"
                  stroke="#82ca9d"
                  animationDuration={1000} // Animation duration for line
                />
                <Line
                  type="monotone"
                  dataKey="selectedUsers"
                  stroke="#ffc658"
                  animationDuration={1000} // Animation duration for line
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analytics Cards Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Total Applicants Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-purple-500">{campaignData.totalApplicants}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants</h5>
          </div>

          {/* Active Campaigns Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-green-500">{campaignData.activeCampaigns}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
          </div>

          {/* Total Reach Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-orange-500">{campaignData.totalReach}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach</h5>
          </div>

          {/* Users Selected for Campaign Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-blue-500">{campaignData.usersSelectedForCampaign}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">
              Users Selected for Campaign
              {/* Added "Based on followers criteria" text with proper JSX syntax */}
              <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHistory;


