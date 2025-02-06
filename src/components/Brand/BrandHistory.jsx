



// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import 'react-circular-progressbar/dist/styles.css';

// const InfluencerHistory = () => {
//   const [campaignData, setCampaignData] = useState(null);

//   // Fetch data on component mount
//   useEffect(() => {
//     fetch("https://server-side-influencer.onrender.com/brand/getCampaignAnalytics/67a49891318f14e56795d3f0 ")
//       .then((response) => response.json())
//       .then((data) => setCampaignData(data.data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   if (!campaignData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex h-screen">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <div className="text-center font-bold text-3xl mt-4">
//           Campaign Analytics
//         </div>
//         <div className="text-center text-gray-600 mt-2 mb-10">
//           View your campaign data in real-time and analyze performance.
//         </div>

//         {/* View Detailed Report Button - Positioned to the top-right */}
//         <div className="absolute top-10 right-10 z-10">
//           <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition">
//             View Detailed Report
//           </button>
//         </div>

//         {/* Day-wise Analytics Section - Moved Below the View Detailed Report Button */}
//         <div className="flex flex-wrap justify-start gap-8 mt-16 mb-8 px-8">
//           {campaignData.dayWiseAnalytics.map((dayData, index) => (
//             <div key={index} className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//               <div className="text-2xl font-bold text-gray-800">{`Day ${dayData.day}`}</div>
//               <div className="text-lg font-semibold text-gray-600">{new Date(dayData.date).toLocaleDateString()}</div>

//               {/* Day-wise Data */}
//               <div className="mt-4 text-lg">
//                 <p>Total Applicants: {dayData.totalApplicants}</p>
//                 <p>Total Reach: {dayData.totalReach}</p>
//                 <p>Selected Users: {dayData.selectedUsers}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Animated Line Chart Section */}
//         <div className="flex flex-col items-center mt-8">
//           <div className="w-full h-96">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={campaignData.dayWiseAnalytics}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="totalApplicants"
//                   stroke="#8884d8"
//                   activeDot={{ r: 8 }}
//                   animationDuration={1000} // Animation duration for line
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="totalReach"
//                   stroke="#82ca9d"
//                   animationDuration={1000} // Animation duration for line
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="selectedUsers"
//                   stroke="#ffc658"
//                   animationDuration={1000} // Animation duration for line
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Analytics Cards Section */}
//         <div className="flex flex-wrap justify-center gap-8 mt-8">
//           {/* Total Applicants Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-purple-500">{campaignData.totalApplicants}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants</h5>
//           </div>

//           {/* Active Campaigns Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-green-500">{campaignData.activeCampaigns}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
//           </div>

//           {/* Total Reach Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-orange-500">{campaignData.totalReach}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach</h5>
//           </div>

//           {/* Users Selected for Campaign Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-blue-500">{campaignData.usersSelectedForCampaign}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">
//               Users Selected for Campaign
//               {/* Added "Based on followers criteria" text with proper JSX syntax */}
//               <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfluencerHistory;





// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import 'react-circular-progressbar/dist/styles.css';

// const InfluencerHistory = () => {
//   const [campaigns, setCampaigns] = useState([]);  // All campaigns data
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]);  // Filtered campaigns based on selected type
//   const [campaignData, setCampaignData] = useState(null);
//   const [campaignTypes, setCampaignTypes] = useState([]);  // To hold the unique campaign types
//   const [selectedCampaignType, setSelectedCampaignType] = useState("");  // Selected campaign type ID

//   // Fetch all campaigns data on component mount
//   useEffect(() => {
//     fetch("https://server-side-influencer.onrender.com/brand/getAllCampaigns")
//       .then((response) => response.json())
//       .then((data) => {
//         setCampaigns(data.data);
//         setFilteredCampaigns(data.data);  // Initially show all campaigns

//         // Get unique campaign types from the campaigns data
//         const uniqueCampaignTypes = [...new Set(data.data.map(campaign => campaign.campaignType))];
//         setCampaignTypes(uniqueCampaignTypes);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Fetch campaign analytics for selected campaign type
//   const fetchCampaignAnalytics = (campaignTypeId) => {
//     fetch(`https://server-side-influencer.onrender.com/brand/getCampaignAnalytics/${campaignTypeId}`)
//       .then((response) => response.json())
//       .then((data) => setCampaignData(data.data))
//       .catch((error) => console.error('Error fetching campaign analytics:', error));
//   };

//   // Handle campaign type selection from the dropdown
//   const handleCampaignTypeChange = (e) => {
//     const selectedType = e.target.value;
//     setSelectedCampaignType(selectedType);

//     // Filter campaigns based on the selected type
//     const filteredByType = campaigns.filter((campaign) => campaign.campaignType === selectedType);
//     setFilteredCampaigns(filteredByType);  // Update filtered campaigns

//     // Fetch analytics for the selected campaign type
//     const campaignTypeId = campaigns.find(campaign => campaign.campaignType === selectedType)?._id;
//     if (campaignTypeId) {
//       fetchCampaignAnalytics(campaignTypeId);
//     }
//   };

//   // Create fallback data in case campaignData is not available
//   const fallbackData = [
//     {
//       date: "2025-02-01",  // Fallback date
//       totalApplicants: 0,
//       totalReach: 0,
//       selectedUsers: 0,
//     },
//     {
//       date: "2025-02-02",  // Fallback date
//       totalApplicants: 0,
//       totalReach: 0,
//       selectedUsers: 0,
//     },
//   ];

//   // Use fallback data if campaignData is not available
//   const dataToRender = campaignData?.dayWiseAnalytics || fallbackData;

//   return (
//     <div className="flex h-screen">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <div className="text-center font-bold text-3xl mt-4">Campaign Analytics</div>
//         <div className="text-center text-gray-600 mt-2 mb-10">
//           View your campaign data in real-time and analyze performance.
//         </div>

//         {/* Dropdown for Campaign Type */}
//         <div className="px-8 mb-4">
//           <select
//             value={selectedCampaignType}
//             onChange={handleCampaignTypeChange}
//             className="p-2 w-full border border-gray-300 rounded-md"
//           >
//             <option value="">Select Campaign Type</option>
//             {campaignTypes.map((type, index) => (
//               <option key={index} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Campaign Selection */}
//         <div className="mt-4 px-8">
//           <h3 className="text-2xl font-semibold">Select a Campaign</h3>
//           <div className="mt-4">
//             {filteredCampaigns.length > 0 ? (
//               filteredCampaigns.map((campaign) => (
//                 <button
//                   key={campaign._id}
//                   className="bg-gray-200 px-4 py-2 rounded-md m-2"
//                   onClick={() => fetchCampaignAnalytics(campaign._id)}
//                 >
//                   {campaign.brandName} - {campaign.campaignType}
//                 </button>
//               ))
//             ) : (
//               <div>No campaigns found</div>
//             )}
//           </div>
//         </div>

//         {/* Animated Line Chart Section */}
//         <div className="flex flex-col items-center mt-8">
//           <div className="w-full h-96">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={dataToRender}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="totalApplicants" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="totalReach" stroke="#82ca9d" />
//                 <Line type="monotone" dataKey="selectedUsers" stroke="#ffc658" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Analytics Cards Section */}
//         <div className="flex flex-wrap justify-center gap-8 mt-8">
//           {/* Total Applicants Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-purple-500">{campaignData ? campaignData.totalApplicants : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants</h5>
//           </div>

//           {/* Active Campaigns Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-green-500">{campaignData ? campaignData.activeCampaigns : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
//           </div>

//           {/* Total Reach Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-orange-500">{campaignData ? campaignData.totalReach : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach</h5>
//           </div>

//           {/* Users Selected for Campaign Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-blue-500">{campaignData ? campaignData.usersSelectedForCampaign : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">
//               Users Selected for Campaign
//               <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfluencerHistory;







// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import 'react-circular-progressbar/dist/styles.css';
// import { toast } from "react-toastify";  // Assuming you're using react-toastify for error messages

// const InfluencerHistory = () => {
//   const [myCampaigns, setMyCampaigns] = useState([]);  // All campaigns data fetched for the brand
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]);  // Filtered campaigns based on selected type
//   const [campaignData, setCampaignData] = useState(null);
//   const [campaignTypes, setCampaignTypes] = useState([]);  // To hold the unique campaign types
//   const [selectedCampaignType, setSelectedCampaignType] = useState("");  // Selected campaign type ID
//   const [loading, setLoading] = useState(false);  // Loading state

//   // Fetch campaigns based on brand ID from localStorage
//   useEffect(() => {
//     const storedBrandId = localStorage.getItem("brandID");
// console.log("store bra dis ",storedBrandId)
//     if (storedBrandId) {
//       fetchCampaigns(storedBrandId);
//     } else {
//       toast.error("No brand ID found in localStorage!");
//     }
//   }, []);

//   const fetchCampaigns = async (brandId) => {
//     try {
//       setLoading(true);

//       const storedBrandId = localStorage.getItem("brandID");
//       const response = await fetch(
//         `https://server-side-influencer.onrender.com/brand/getMyCampaigns/${storedBrandId}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data.success) {
//         setMyCampaigns(data.data);  // Set fetched campaigns in state
//         setFilteredCampaigns(data.data);  // Initially show all campaigns

//         // Get unique campaign types from the campaigns data
//         const uniqueCampaignTypes = [...new Set(data.data.map(campaign => campaign.campaignType))];
//         setCampaignTypes(uniqueCampaignTypes);
//       } else {
//         toast.error(data.message || "Failed to fetch campaigns");
//       }
//     } catch (error) {
//       console.error('Error fetching campaigns:', error);
//       toast.error("Error fetching campaigns");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch campaign analytics for selected campaign type
//   const fetchCampaignAnalytics = (campaignTypeId) => {
//     fetch(`https://server-side-influencer.onrender.com/brand/getCampaignAnalytics/${campaignTypeId}`)
//       .then((response) => response.json())
//       .then((data) => setCampaignData(data.data))
//       .catch((error) => console.error('Error fetching campaign analytics:', error));
//   };

//   // Handle campaign type selection from the dropdown
//   const handleCampaignTypeChange = (e) => {
//     const selectedType = e.target.value;
//     setSelectedCampaignType(selectedType);

//     // Filter campaigns based on the selected type
//     const filteredByType = myCampaigns.filter((campaign) => campaign.campaignType === selectedType);
//     setFilteredCampaigns(filteredByType);  // Update filtered campaigns

//     // Fetch analytics for the selected campaign type
//     const campaignTypeId = myCampaigns.find(campaign => campaign.campaignType === selectedType)?._id;
//     if (campaignTypeId) {
//       fetchCampaignAnalytics(campaignTypeId);
//     }
//   };

//   // Create fallback data in case campaignData is not available
//   const fallbackData = [
//     {
//       date: "2025-02-01",  // Fallback date
//       totalApplicants: 0,
//       totalReach: 0,
//       selectedUsers: 0,
//     },
//     {
//       date: "2025-02-02",  // Fallback date
//       totalApplicants: 0,
//       totalReach: 0,
//       selectedUsers: 0,
//     },
//   ];

//   // Use fallback data if campaignData is not available
//   const dataToRender = campaignData?.dayWiseAnalytics || fallbackData;

//   return (
//     <div className="flex h-screen">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <div className="text-center font-bold text-3xl mt-4">Campaign Analytics</div>
//         <div className="text-center text-gray-600 mt-2 mb-10">
//           View your campaign data in real-time and analyze performance.
//         </div>

//         {/* Loading Spinner (Optional) */}
//         {loading && <div>Loading...</div>}

//         {/* Dropdown for Campaign Type */}
//         <div className="px-8 mb-4">
//           <select
//             value={selectedCampaignType}
//             onChange={handleCampaignTypeChange}
//             className="p-2 w-full border border-gray-300 rounded-md"
//           >
//             <option value="">Select Campaign Type</option>
//             {campaignTypes.map((type, index) => (
//               <option key={index} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Campaign Selection */}
//         <div className="mt-4 px-8">
//           <h3 className="text-2xl font-semibold">Select a Campaign</h3>
//           <div className="mt-4">
//             {filteredCampaigns.length > 0 ? (
//               filteredCampaigns.map((campaign) => (
//                 <button
//                   key={campaign._id}
//                   className="bg-gray-200 px-4 py-2 rounded-md m-2"
//                   onClick={() => fetchCampaignAnalytics(campaign._id)}
//                 >
//                   {campaign.brandName} - {campaign.campaignType}
//                 </button>
//               ))
//             ) : (
//               <div>No campaigns found</div>
//             )}
//           </div>
//         </div>

//         {/* Animated Line Chart Section */}
//         <div className="flex flex-col items-center mt-8">
//           <div className="w-full h-96">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={dataToRender}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="totalApplicants" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="totalReach" stroke="#82ca9d" />
//                 <Line type="monotone" dataKey="selectedUsers" stroke="#ffc658" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Analytics Cards Section */}
//         <div className="flex flex-wrap justify-center gap-8 mt-8">
//           {/* Total Applicants Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-purple-500">{campaignData ? campaignData.totalApplicants : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants</h5>
//           </div>

//           {/* Active Campaigns Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-green-500">{campaignData ? campaignData.activeCampaigns : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
//           </div>

//           {/* Total Reach Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-orange-500">{campaignData ? campaignData.totalReach : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach</h5>
//           </div>

//           {/* Users Selected for Campaign Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-blue-500">{campaignData ? campaignData.usersSelectedForCampaign : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">
//               Users Selected for Campaign
//               <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfluencerHistory;





// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import 'react-circular-progressbar/dist/styles.css';
// import { toast } from "react-toastify";  // Assuming you're using react-toastify for error messages

// const InfluencerHistory = () => {
//   const [myCampaigns, setMyCampaigns] = useState([]);  // All campaigns data fetched for the brand
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]);  // Filtered campaigns based on selected type
//   const [campaignData, setCampaignData] = useState(null);
//   const [campaignTypes, setCampaignTypes] = useState([]);  // To hold the unique campaign types
//   const [selectedCampaignType, setSelectedCampaignType] = useState("");  // Selected campaign type ID
//   const [loading, setLoading] = useState(false);  // Loading state

//   // Fetch campaigns based on brand ID from localStorage
//   useEffect(() => {
//     const storedBrandId = localStorage.getItem("brandID");
//     console.log("store brand id ",storedBrandId);
//     if (storedBrandId) {
//       fetchCampaigns(storedBrandId);
//     } else {
//       toast.error("No brand ID found in localStorage!");
//     }
//   }, []);

//   const fetchCampaigns = async (brandId) => {
//     try {
//       setLoading(true);

//       const storedBrandId = localStorage.getItem("brandID");
//       const response = await fetch(
//         `https://server-side-influencer.onrender.com/brand/getMyCampaigns/${storedBrandId}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data.success) {
//         setMyCampaigns(data.data);  // Set fetched campaigns in state
//         setFilteredCampaigns(data.data);  // Initially show all campaigns

//         // Get unique campaign types from the campaigns data
//         const uniqueCampaignTypes = [...new Set(data.data.map(campaign => campaign.campaignType))];
//         setCampaignTypes(uniqueCampaignTypes);
//       } else {
//         toast.error(data.message || "Failed to fetch campaigns");
//       }
//     } catch (error) {
//       console.error('Error fetching campaigns:', error);
//       toast.error("Error fetching campaigns");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch campaign analytics for selected campaign type
//   const fetchCampaignAnalytics = (campaignTypeId) => {
//     fetch(`https://server-side-influencer.onrender.com/brand/getCampaignAnalytics/${campaignTypeId}`)
//       .then((response) => response.json())
//       .then((data) => setCampaignData(data.data))
//       .catch((error) => console.error('Error fetching campaign analytics:', error));
//   };

//   // Handle campaign type selection from the dropdown
//   const handleCampaignTypeChange = (e) => {
//     const selectedType = e.target.value;
//     setSelectedCampaignType(selectedType);

//     // Filter campaigns based on the selected type
//     const filteredByType = myCampaigns.filter((campaign) => campaign.campaignType === selectedType);
//     setFilteredCampaigns(filteredByType);  // Update filtered campaigns

//     // Fetch analytics for the selected campaign type
//     const campaignTypeId = myCampaigns.find(campaign => campaign.campaignType === selectedType)?._id;
//     if (campaignTypeId) {
//       fetchCampaignAnalytics(campaignTypeId);
//     }
//   };

//   // Create fallback data in case campaignData is not available
//   const fallbackData = [
//     {
//       date: "2025-02-01",  // Fallback date
//       totalApplicants: 0,
//       totalReach: 0,
//       selectedUsers: 0,
//     },
//     {
//       date: "2025-02-02",  // Fallback date
//       totalApplicants: 0,
//       totalReach: 0,
//       selectedUsers: 0,
//     },
//   ];

//   // Use fallback data if campaignData is not available
//   const dataToRender = campaignData?.dayWiseAnalytics?.map((entry) => ({
//     ...entry,
//     selectedUsers: entry.usersSelectedForCampaign || 0,  // Ensure selectedUsers is mapped from usersSelectedForCampaign
//   })) || fallbackData;

//   return (
//     <div className="flex h-screen">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <div className="text-center font-bold text-3xl mt-4">Campaign Analytics</div>
//         <div className="text-center text-gray-600 mt-2 mb-10">
//           View your campaign data in real-time and analyze performance.
//         </div>

//         {/* Loading Spinner (Optional) */}
//         {loading && <div>Loading...</div>}

//         {/* Dropdown for Campaign Type */}
//         <div className="px-8 mb-4">
//           <select
//             value={selectedCampaignType}
//             onChange={handleCampaignTypeChange}
//             className="p-2 w-full border border-gray-300 rounded-md"
//           >
//             <option value="">Select Campaign Type</option>
//             {campaignTypes.map((type, index) => (
//               <option key={index} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Campaign Selection */}
//         <div className="mt-4 px-8">
//           <h3 className="text-2xl font-semibold">Select a Campaign</h3>
//           <div className="mt-4">
//             {filteredCampaigns.length > 0 ? (
//               filteredCampaigns.map((campaign) => (
//                 <button
//                   key={campaign._id}
//                   className="bg-gray-200 px-4 py-2 rounded-md m-2"
//                   onClick={() => fetchCampaignAnalytics(campaign._id)}
//                 >
//                   {campaign.brandName} - {campaign.campaignType}
//                 </button>
//               ))
//             ) : (
//               <div>No campaigns found</div>
//             )}
//           </div>
//         </div>

//         {/* Animated Line Chart Section */}
//         <div className="flex flex-col items-center mt-8">
//           <div className="w-full h-96">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={dataToRender}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="totalApplicants" stroke="#8884d8" />
//                 <Line type="monotone" dataKey="totalReach" stroke="#82ca9d" />
//                 <Line type="monotone" dataKey="selectedUsers" stroke="#ffc658" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Analytics Cards Section */}
//         <div className="flex flex-wrap justify-center gap-8 mt-8">
//           {/* Total Applicants Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-purple-500">{campaignData ? campaignData.totalApplicants : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants</h5>
//           </div>

//           {/* Active Campaigns Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-green-500">{campaignData ? campaignData.activeCampaigns : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
//           </div>

//           {/* Total Reach Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-orange-500">{campaignData ? campaignData.totalReach : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach</h5>
//           </div>

//           {/* Users Selected for Campaign Card */}
//           <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
//             <div className="text-4xl font-bold text-blue-500">{campaignData ? campaignData.usersSelectedForCampaign : 0}</div>
//             <h5 className="mt-2 text-xl font-semibold text-gray-900">
//               Users Selected for Campaign
//               <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
//             </h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfluencerHistory;




import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import 'react-circular-progressbar/dist/styles.css';
import { toast } from "react-toastify";  // Assuming you're using react-toastify for error messages

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

        {/* Loading Spinner (Optional) */}
        {loading && <div>Loading...</div>}

        {/* Dropdown for Campaign Type */}
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

        {/* Campaign Selection */}
        <div className="mt-4 px-8">
          <h3 className="text-2xl font-semibold">Select a Campaign</h3>
          <div className="mt-4">
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <button
                  key={campaign._id}
                  className="bg-gray-200 px-4 py-2 rounded-md m-2"
                  onClick={() => fetchCampaignAnalytics(campaign._id)}
                >
                  {campaign.brandName} - {campaign.campaignType}
                </button>
              ))
            ) : (
              <div>No campaigns found</div>
            )}
          </div>
        </div>

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
                {/* Removed selectedUsers line */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analytics Cards Section */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Total Applicants Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-purple-500">{campaignData ? campaignData.totalApplicants : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Applicants</h5>
          </div>

          {/* Active Campaigns Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-green-500">{campaignData ? campaignData.activeCampaigns : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Active Campaigns</h5>
          </div>

          {/* Total Reach Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-orange-500">{campaignData ? campaignData.totalReach : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">Total Reach</h5>
          </div>

          {/* Users Selected for Campaign Card */}
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-blue-500">{campaignData ? campaignData.usersSelectedForCampaign : 0}</div>
            <h5 className="mt-2 text-xl font-semibold text-gray-900">
              Users Selected for Campaign
              <p className="mt-2 text-sm text-gray-600">Based on followers criteria</p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHistory;

