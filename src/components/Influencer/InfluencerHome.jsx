


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import InfluencerHeader from "./InfluencerHeader";
// import { Line } from "react-chartjs-2";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import loader from "../../Images/loader.gif";
// import axios from 'axios';

// // Registering necessary chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const InfluencerHome = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [brandCard, setBrandCard] = useState([]); // Placeholder for brand data
//   const [chartData, setChartData] = useState({}); // Chart data state
//   const [campaignData, setCampaignData] = useState(null); // To store full campaign data
//   const [selectedApplicantCount, setSelectedApplicantCount] = useState(null); // To store selected applicants count

//   // Fetch data from the API
//   const fetchData = async () => {
//     try {



//       const influencerId = localStorage.getItem('influencerID');
    
//     if (!influencerId) {
//       console.error("No influencer ID found in localStorage");
//       return;
//     }

//       const response = await axios.post("http://localhost:8000/influencer/influencersgetCampaignAnalytics", {
//         applicantRealId: influencerId, // Placeholder applicant ID
//         campaignId: "67a5bbfd85c4d2b0b849ebf3" // Placeholder campaign ID
//       });

//       const { dayWiseAnalytics, campaign, applicantStatus } = response.data;

//       if (dayWiseAnalytics && campaign && applicantStatus) {
//         // Extract selected applicants and group by selectedAt date
//         const selectedApplicants = dayWiseAnalytics.Campaigns.selectedApplicants || [];
        
//         // Group by date (ignoring time part)
//         const groupedByDate = selectedApplicants.reduce((acc, applicant) => {
//           const selectedDate = new Date(applicant.selectedAt).toISOString().split('T')[0]; // Get the date (YYYY-MM-DD)
          
//           if (acc[selectedDate]) {
//             acc[selectedDate].count += 1; // Increment count if the date exists
//           } else {
//             acc[selectedDate] = { count: 1 }; // Initialize count for new date
//           }
//           return acc;
//         }, {});

//         // Prepare the chart data
//         const labels = Object.keys(groupedByDate); // Dates
//         const selectedUsersCount = labels.map(date => groupedByDate[date].count); // Count of selected users per date

//         // Set chart data
//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Selected Users',
//               data: selectedUsersCount,
//               borderColor: 'rgba(75,192,192,1)',
//               tension: 0.1,
//               fill: false,
//             },
//           ],
//         });

//         // Prepare brand card data
//         const selectedCount = dayWiseAnalytics["Campaigns"]?.selectedCount || 0;
//         setBrandCard([ 
//           { id: 1, name: "SELECTED APPLICANT", progress: selectedCount },
//           { id: 2, name: "TOTAL VIEW ON THIS CAMPAIGN", progress: response.data.CampaigntotalReach || 0 },
//           { id: 3, name: "TOTAL APPLICANT FOR THIS CAMPAIGN", progress: response.data.totalApplicantsForCampaign || 0 }
//         ]);

//         // Store full campaign data
//         setCampaignData({
//           campaignId: campaign.campaignId,
//           campaignType: campaign.campaignType,
//           budget: campaign.budget,
//           startDate: campaign.startDate,
//           endDate: campaign.endDate,
//           description: campaign.description,
//           followerRange: campaign.followerRange,
//           tags: campaign.tags,
//           task: campaign.task
//         });
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching API data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Call API to fetch data on component mount
//   }, []);

//   // Data for the user's status (added extra details)
//   const userData = {
//     name: "Aman",
//     status: "Selected",
//     followers: 200,
//     email: "amanpandya47@gmail.com",
//     instagramLink: "https://influencer-marketing-hub.vercel.app/apply",
//     taskLink: "https://influencer-marketing-hub.vercel.app/apply",
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar /> {/* Navbar stays fixed on the left */}
//       <div className="ml-14 w-full flex flex-col flex-grow">
//         <InfluencerHeader page="Home" /> {/* InfluencerHeader for page title */}

//         {/* Show loader when fetching data */}
//         {loading ? (
//           <div className="flex justify-center items-center h-full">
//             <img src={loader} alt="loading" className="h-52" />
//           </div>
//         ) : (
//           <>
//             {/* Campaign Analytics Section with Heading Above the Chart */}
//             <div className="mt-8 sm:ml-6 sm:w-2/3 w-full mb-12 flex justify-center flex-col items-center" style={{ marginLeft: '70px' }}>
//               <h3 className="text-xl font-semibold text-center mb-4">Campaign Analytics</h3>

//               {/* Chart Container */}
//               <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
//                 {chartData.labels && chartData.labels.length > 0 ? (
//                   <Line
//                     data={chartData}
//                     options={{
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       plugins: {
//                         tooltip: {
//                           callbacks: {
//                             label: function (context) {
//                               const label = context.dataset.label || '';
//                               const date = context.label;
//                               const value = context.raw;
//                               return `${label}: ${date} - Selected User: ${value}`;
//                             },
//                           },
//                         },
//                       },
//                       interaction: {
//                         mode: 'index',
//                         intersect: false,
//                       },
//                       scales: {
//                         x: {
//                           title: {
//                             display: true,
//                             text: 'Date',
//                           },
//                         },
//                         y: {
//                           title: {
//                             display: true,
//                             text: 'Selected User Count',
//                           },
//                           beginAtZero: true,
//                         },
//                       },
//                     }}
//                     height={400} // Set custom height for the chart
//                   />
//                 ) : (
//                   <p>No data available for the chart</p> // Display message if no chart data
//                 )}
//               </div>
//             </div>

//             {/* User Info Table placed above the progress cards */}
//             {brandCard && brandCard.length > 0 && (
//               <div className="w-full sm:w-1/3 p-4 mb-8 bg-white shadow-lg rounded-lg flex flex-col">
//                 <h3 className="text-xs font-semibold text-left mb-4">Your Status for Campaign</h3>
//                 <div className="flex flex-col space-y-2 text-sm">
//                   {/* Display user information */}
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Name:</span>
//                     <span>{userData.name}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Status:</span>
//                     <span>{userData.status}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Followers:</span>
//                     <span>{userData.followers}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Email:</span>
//                     <span>{userData.email}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Instagram Link:</span>
//                     <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.instagramLink}
//                     </a>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Task Link:</span>
//                     <a href={userData.taskLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.taskLink}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Progress Cards Section placed after the Campaign Analytics */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//               {brandCard && brandCard.length > 0 ? (
//                 brandCard.map((card, index) => (
//                   <div
//                     key={index}
//                     className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center h-64" // Increased height
//                   >
//                     {/* Circular Progress Bar */}
//                     <div className="w-36 h-36 mb-4">
//                       <CircularProgressbar value={card.progress} text={`${card.progress}`} />
//                     </div>
//                     {/* Campaign Information */}
//                     <h3 className="text-lg font-semibold">{card.name}</h3>
//                     <p className="text-gray-500">Campaign Progress</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-xl text-gray-500">No Data Available</p> // Display message if no progress card data
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InfluencerHome;












// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import InfluencerHeader from "./InfluencerHeader";
// import { Line } from "react-chartjs-2";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import loader from "../../Images/loader.gif";
// import axios from 'axios';

// // Registering necessary chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const InfluencerHome = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [brandCard, setBrandCard] = useState([]); // Placeholder for brand data
//   const [chartData, setChartData] = useState({}); // Chart data state
//   const [campaignData, setCampaignData] = useState(null); // To store full campaign data
//   const [selectedApplicantCount, setSelectedApplicantCount] = useState(null); // To store selected applicants count

//   // Fetch data from the API
//   const fetchData = async () => {
//     try {



//       const influencerId = localStorage.getItem('influencerID');
    
//     if (!influencerId) {
//       console.error("No influencer ID found in localStorage");
//       return;
//     }

//       const response = await axios.post("http://localhost:8000/influencer/influencersgetCampaignAnalytics", {
//         applicantRealId: influencerId, // Placeholder applicant ID
//         campaignId: "67a5bbfd85c4d2b0b849ebf3" // Placeholder campaign ID
//       });

//       const { dayWiseAnalytics, campaign, applicantStatus } = response.data;

//       if (dayWiseAnalytics && campaign && applicantStatus) {
//         // Extract selected applicants and group by selectedAt date
//         const selectedApplicants = dayWiseAnalytics.Campaigns.selectedApplicants || [];
        
//         // Group by date (ignoring time part)
//         const groupedByDate = selectedApplicants.reduce((acc, applicant) => {
//           const selectedDate = new Date(applicant.selectedAt).toISOString().split('T')[0]; // Get the date (YYYY-MM-DD)
          
//           if (acc[selectedDate]) {
//             acc[selectedDate].count += 1; // Increment count if the date exists
//           } else {
//             acc[selectedDate] = { count: 1 }; // Initialize count for new date
//           }
//           return acc;
//         }, {});

//         // Prepare the chart data
//         const labels = Object.keys(groupedByDate); // Dates
//         const selectedUsersCount = labels.map(date => groupedByDate[date].count); // Count of selected users per date

//         // Set chart data
//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Selected Users',
//               data: selectedUsersCount,
//               borderColor: 'rgba(75,192,192,1)',
//               tension: 0.1,
//               fill: false,
//             },
//           ],
//         });

//         // Prepare brand card data
//         const selectedCount = dayWiseAnalytics["Campaigns"]?.selectedCount || 0;
//         setBrandCard([ 
//           { id: 1, name: "SELECTED APPLICANT", progress: selectedCount },
//           { id: 2, name: "TOTAL VIEW ON THIS CAMPAIGN", progress: response.data.CampaigntotalReach || 0 },
//           { id: 3, name: "TOTAL APPLICANT FOR THIS CAMPAIGN", progress: response.data.totalApplicantsForCampaign || 0 }
//         ]);

//         // Store full campaign data
//         setCampaignData({
//           campaignId: campaign.campaignId,
//           campaignType: campaign.campaignType,
//           budget: campaign.budget,
//           startDate: campaign.startDate,
//           endDate: campaign.endDate,
//           description: campaign.description,
//           followerRange: campaign.followerRange,
//           tags: campaign.tags,
//           task: campaign.task
//         });
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching API data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Call API to fetch data on component mount
//   }, []);

//   // Data for the user's status (added extra details)
//   const userData = {
//     name: "Aman",
//     status: "Selected",
//     followers: 200,
//     email: "amanpandya47@gmail.com",
//     instagramLink: "https://influencer-marketing-hub.vercel.app/apply",
//     taskLink: "https://influencer-marketing-hub.vercel.app/apply",
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar /> {/* Navbar stays fixed on the left */}
//       <div className="ml-14 w-full flex flex-col flex-grow">
//         <InfluencerHeader page="Home" /> {/* InfluencerHeader for page title */}

//         {/* Show loader when fetching data */}
//         {loading ? (
//           <div className="flex justify-center items-center h-full">
//             <img src={loader} alt="loading" className="h-52" />
//           </div>
//         ) : (
//           <>
//             {/* Campaign Analytics Section with Heading Above the Chart */}
//             <div className="mt-8 sm:ml-6 sm:w-2/3 w-full mb-12 flex justify-center flex-col items-center" style={{ marginLeft: '70px' }}>
//               <h3 className="text-xl font-semibold text-center mb-4">Campaign Analytics</h3>

//               {/* Chart Container */}
//               <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
//                 {chartData.labels && chartData.labels.length > 0 ? (
//                   <Line
//                     data={chartData}
//                     options={{
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       plugins: {
//                         tooltip: {
//                           callbacks: {
//                             label: function (context) {
//                               const label = context.dataset.label || '';
//                               const date = context.label;
//                               const value = context.raw;
//                               return `${label}: ${date} - Selected User: ${value}`;
//                             },
//                           },
//                         },
//                       },
//                       interaction: {
//                         mode: 'index',
//                         intersect: false,
//                       },
//                       scales: {
//                         x: {
//                           title: {
//                             display: true,
//                             text: 'Date',
//                           },
//                         },
//                         y: {
//                           title: {
//                             display: true,
//                             text: 'Selected User Count',
//                           },
//                           beginAtZero: true,
//                         },
//                       },
//                     }}
//                     height={400} // Set custom height for the chart
//                   />
//                 ) : (
//                   <p>No data available for the chart</p> // Display message if no chart data
//                 )}
//               </div>
//             </div>

//             {/* User Info Table placed above the progress cards */}
//             {brandCard && brandCard.length > 0 && (
//               <div className="w-full sm:w-1/3 p-4 mb-8 bg-white shadow-lg rounded-lg flex flex-col">
//                 <h3 className="text-xs font-semibold text-left mb-4">Your Status for Campaign</h3>
//                 <div className="flex flex-col space-y-2 text-sm">
//                   {/* Display user information */}
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Name:</span>
//                     <span>{userData.name}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Status:</span>
//                     <span>{userData.status}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Followers:</span>
//                     <span>{userData.followers}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Email:</span>
//                     <span>{userData.email}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Instagram Link:</span>
//                     <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.instagramLink}
//                     </a>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Task Link:</span>
//                     <a href={userData.taskLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.taskLink}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Progress Cards Section placed after the Campaign Analytics */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//               {brandCard && brandCard.length > 0 ? (
//                 brandCard.map((card, index) => (
//                   <div
//                     key={index}
//                     className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center h-64" // Increased height
//                   >
//                     {/* Circular Progress Bar */}
//                     <div className="w-36 h-36 mb-4">
//                       <CircularProgressbar value={card.progress} text={`${card.progress}`} />
//                     </div>
//                     {/* Campaign Information */}
//                     <h3 className="text-lg font-semibold">{card.name}</h3>
//                     <p className="text-gray-500">Campaign Progress</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-xl text-gray-500">No Data Available</p> // Display message if no progress card data
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InfluencerHome;









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import InfluencerHeader from "./InfluencerHeader";
// import { Line } from "react-chartjs-2";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import loader from "../../Images/loader.gif";
// import axios from 'axios';

// // Registering necessary chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const InfluencerHome = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [brandCard, setBrandCard] = useState([]);
//   const [chartData, setChartData] = useState({});
//   const [campaignData, setCampaignData] = useState(null);
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [selectedCampaignType, setSelectedCampaignType] = useState(null);
//   const [campaigns, setCampaigns] = useState([]);
//   const [influencerId, setInfluencerId] = useState(localStorage.getItem('influencerID'));

//   // Fetch data for campaigns
//   const fetchCampaigns = async () => {
//     try {
//       if (!influencerId) {
//         console.error("No influencer ID found in localStorage");
//         return;
//       }

//       const response = await axios.get(`http://localhost:8000/influencer/${influencerId}/campaigns`);
//       const { campaigns } = response.data;

//       if (campaigns) {
//         setCampaigns(campaigns);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching campaigns:", error);
//       setLoading(false);
//     }
//   };

//   // Fetch analytics data based on selected brand and campaign type
//   const fetchAnalyticsData = async (campaignId) => {
//     try {
//       const response = await axios.post("http://localhost:8000/influencer/influencersgetCampaignAnalytics", {
//         applicantRealId: influencerId,
//         campaignId: campaignId
//       });

//       const { dayWiseAnalytics, campaign, applicantStatus } = response.data;

//       if (dayWiseAnalytics && campaign && applicantStatus) {
//         const selectedApplicants = dayWiseAnalytics.Campaigns.selectedApplicants || [];
//         const groupedByDate = selectedApplicants.reduce((acc, applicant) => {
//           const selectedDate = new Date(applicant.selectedAt).toISOString().split('T')[0];
//           if (acc[selectedDate]) {
//             acc[selectedDate].count += 1;
//           } else {
//             acc[selectedDate] = { count: 1 };
//           }
//           return acc;
//         }, {});

//         const labels = Object.keys(groupedByDate);
//         const selectedUsersCount = labels.map(date => groupedByDate[date].count);

//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Selected Users',
//               data: selectedUsersCount,
//               borderColor: 'rgba(75,192,192,1)',
//               tension: 0.1,
//               fill: false,
//             },
//           ],
//         });

//         setCampaignData({
//           campaignId: campaign.campaignId,
//           campaignType: campaign.campaignType,
//           budget: campaign.budget,
//           startDate: campaign.startDate,
//           endDate: campaign.endDate,
//           description: campaign.description,
//           followerRange: campaign.followerRange,
//           tags: campaign.tags,
//           task: campaign.task
//         });

//         const selectedCount = dayWiseAnalytics["Campaigns"]?.selectedCount || 0;
//         setBrandCard([
//           { id: 1, name: "SELECTED APPLICANT", progress: selectedCount },
//           { id: 2, name: "TOTAL VIEW ON THIS CAMPAIGN", progress: response.data.CampaigntotalReach || 0 },
//           { id: 3, name: "TOTAL APPLICANT FOR THIS CAMPAIGN", progress: response.data.totalApplicantsForCampaign || 0 }
//         ]);
//       }
//     } catch (error) {
//       console.error("Error fetching analytics data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCampaigns();
//   }, [influencerId]);

//   // Handle brand change
//   const handleBrandChange = (event) => {
//     setSelectedBrand(event.target.value);
//     setSelectedCampaignType(null); // Reset campaign type selection
//   };

//   // Handle campaign type change
//   const handleCampaignTypeChange = (event) => {
//     setSelectedCampaignType(event.target.value);
//   };

//   useEffect(() => {
//     if (selectedBrand && selectedCampaignType) {
//       const selectedCampaign = campaigns.find(campaign => campaign.brandId === selectedBrand && campaign.campaignType === selectedCampaignType);
//       if (selectedCampaign) {
//         fetchAnalyticsData(selectedCampaign.campaignId);
//       }
//     }
//   }, [selectedBrand, selectedCampaignType, campaigns]);

//   // Data for the user's status (added extra details)
//   const userData = {
//     name: "Aman",
//     status: "Selected",
//     followers: 200,
//     email: "amanpandya47@gmail.com",
//     instagramLink: "https://influencer-marketing-hub.vercel.app/apply",
//     taskLink: "https://influencer-marketing-hub.vercel.app/apply",
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar /> {/* Navbar stays fixed on the left */}
//       <div className="ml-14 w-full flex flex-col flex-grow">
//         <InfluencerHeader page="Home" /> {/* InfluencerHeader for page title */}

//         {/* Show loader when fetching data */}
//         {loading ? (
//           <div className="flex justify-center items-center h-full">
//             <img src={loader} alt="loading" className="h-52" />
//           </div>
//         ) : (
//           <>
//             {/* Brand Selection Dropdown */}
//             <div className="mb-4">
//               <label htmlFor="brandSelect" className="block text-sm font-semibold">Select Brand</label>
//               <select id="brandSelect" className="w-full p-2 border rounded" onChange={handleBrandChange}>
//                 <option value="">Select a brand</option>
//                 {campaigns.map(campaign => (
//                   <option key={campaign.brandId} value={campaign.brandId}>{campaign.brandName}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Campaign Type Selection Dropdown */}
//             <div className="mb-4">
//               <label htmlFor="campaignTypeSelect" className="block text-sm font-semibold">Select Campaign Type</label>
//               <select id="campaignTypeSelect" className="w-full p-2 border rounded" onChange={handleCampaignTypeChange} disabled={!selectedBrand}>
//                 <option value="">Select a campaign type</option>
//                 {selectedBrand && campaigns
//                   .filter(campaign => campaign.brandId === selectedBrand)
//                   .map(campaign => (
//                     <option key={campaign.campaignId} value={campaign.campaignType}>{campaign.campaignType}</option>
//                   ))}
//               </select>
//             </div>

//             {/* Campaign Analytics Section */}
//             <div className="mt-8 sm:ml-6 sm:w-2/3 w-full mb-12 flex justify-center flex-col items-center" style={{ marginLeft: '70px' }}>
//               <h3 className="text-xl font-semibold text-center mb-4">Campaign Analytics</h3>

//               {/* Chart Container */}
//               <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
//                 {chartData.labels && chartData.labels.length > 0 ? (
//                   <Line
//                     data={chartData}
//                     options={{
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       plugins: {
//                         tooltip: {
//                           callbacks: {
//                             label: function (context) {
//                               const label = context.dataset.label || '';
//                               const date = context.label;
//                               const value = context.raw;
//                               return `${label}: ${date} - Selected User: ${value}`;
//                             },
//                           },
//                         },
//                       },
//                       interaction: {
//                         mode: 'index',
//                         intersect: false,
//                       },
//                       scales: {
//                         x: {
//                           title: {
//                             display: true,
//                             text: 'Date',
//                           },
//                         },
//                         y: {
//                           title: {
//                             display: true,
//                             text: 'Selected User Count',
//                           },
//                           beginAtZero: true,
//                         },
//                       },
//                     }}
//                     height={400} // Set custom height for the chart
//                   />
//                 ) : (
//                   <p>No data available for the chart</p>
//                 )}
//               </div>
//             </div>

//             {/* User Info Table */}
//             {brandCard && brandCard.length > 0 && (
//               <div className="w-full sm:w-1/3 p-4 mb-8 bg-white shadow-lg rounded-lg flex flex-col">
//                 <h3 className="text-xs font-semibold text-left mb-4">Your Status for Campaign</h3>
//                 <div className="flex flex-col space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Name:</span>
//                     <span>{userData.name}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Status:</span>
//                     <span>{userData.status}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Followers:</span>
//                     <span>{userData.followers}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Email:</span>
//                     <span>{userData.email}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Instagram Link:</span>
//                     <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.instagramLink}
//                     </a>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Task Link:</span>
//                     <a href={userData.taskLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.taskLink}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Progress Cards Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//               {brandCard && brandCard.length > 0 ? (
//                 brandCard.map((card, index) => (
//                   <div
//                     key={index}
//                     className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center h-64"
//                   >
//                     <div className="w-36 h-36 mb-4">
//                       <CircularProgressbar value={card.progress} text={`${card.progress}`} />
//                     </div>
//                     <h3 className="text-lg font-semibold">{card.name}</h3>
//                     <p className="text-gray-500">Campaign Progress</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-xl text-gray-500">No Data Available</p>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InfluencerHome;





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import InfluencerHeader from "./InfluencerHeader";
// import { Line } from "react-chartjs-2";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import loader from "../../Images/loader.gif";
// import axios from 'axios';

// // Registering necessary chart components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const InfluencerHome = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [brandCard, setBrandCard] = useState([]);
//   const [chartData, setChartData] = useState({});
//   const [campaignData, setCampaignData] = useState(null);
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [selectedCampaignType, setSelectedCampaignType] = useState(null);
//   const [campaigns, setCampaigns] = useState([]);
//   const [influencerId, setInfluencerId] = useState(localStorage.getItem('influencerID'));

//   // Fetch data for campaigns
//   const fetchCampaigns = async () => {
//     try {
//       if (!influencerId) {
//         console.error("No influencer ID found in localStorage");
//         return;
//       }

//       const response = await axios.get(`http://localhost:8000/influencer/${influencerId}/campaigns`);
//       const { campaigns } = response.data;

//       if (campaigns) {
//         setCampaigns(campaigns);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching campaigns:", error);
//       setLoading(false);
//     }
//   };

//   // Fetch analytics data based on selected brand and campaign type
//   const fetchAnalyticsData = async (campaignId) => {
//     try {
//       const response = await axios.post("http://localhost:8000/influencer/influencersgetCampaignAnalytics", {
//         applicantRealId: influencerId,
//         campaignId: campaignId
//       });

//       const { dayWiseAnalytics, campaign, applicantStatus } = response.data;

//       if (dayWiseAnalytics && campaign && applicantStatus) {
//         const selectedApplicants = dayWiseAnalytics.Campaigns.selectedApplicants || [];
//         const groupedByDate = selectedApplicants.reduce((acc, applicant) => {
//           const selectedDate = new Date(applicant.selectedAt).toISOString().split('T')[0];
//           if (acc[selectedDate]) {
//             acc[selectedDate].count += 1;
//           } else {
//             acc[selectedDate] = { count: 1 };
//           }
//           return acc;
//         }, {});

//         const labels = Object.keys(groupedByDate);
//         const selectedUsersCount = labels.map(date => groupedByDate[date].count);

//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Selected Users',
//               data: selectedUsersCount,
//               borderColor: 'rgba(75,192,192,1)',
//               tension: 0.1,
//               fill: false,
//             },
//           ],
//         });

//         setCampaignData({
//           campaignId: campaign.campaignId,
//           campaignType: campaign.campaignType,
//           budget: campaign.budget,
//           startDate: campaign.startDate,
//           endDate: campaign.endDate,
//           description: campaign.description,
//           followerRange: campaign.followerRange,
//           tags: campaign.tags,
//           task: campaign.task
//         });

//         const selectedCount = dayWiseAnalytics["Campaigns"]?.selectedCount || 0;
//         setBrandCard([ 
//           { id: 1, name: "SELECTED APPLICANT", progress: selectedCount },
//           { id: 2, name: "TOTAL VIEW ON THIS CAMPAIGN", progress: response.data.CampaigntotalReach || 0 },
//           { id: 3, name: "TOTAL APPLICANT FOR THIS CAMPAIGN", progress: response.data.totalApplicantsForCampaign || 0 }
//         ]);
//       }
//     } catch (error) {
//       console.error("Error fetching analytics data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCampaigns();
//   }, [influencerId]);

//   // Handle brand change
//   const handleBrandChange = (event) => {
//     setSelectedBrand(event.target.value);
//     setSelectedCampaignType(null); // Reset campaign type selection
//   };

//   // Handle campaign type change
//   const handleCampaignTypeChange = (event) => {
//     setSelectedCampaignType(event.target.value);
//   };

//   useEffect(() => {
//     if (selectedBrand && selectedCampaignType) {
//       const selectedCampaign = campaigns.find(campaign => campaign.brandId === selectedBrand && campaign.campaignType === selectedCampaignType);
//       if (selectedCampaign) {
//         fetchAnalyticsData(selectedCampaign.campaignId);
//       }
//     }
//   }, [selectedBrand, selectedCampaignType, campaigns]);

//   // Data for the user's status (added extra details)
//   const userData = {
//     name: "Aman",
//     status: "Selected",
//     followers: 200,
//     email: "amanpandya47@gmail.com",
//     instagramLink: "https://influencer-marketing-hub.vercel.app/apply",
//     taskLink: "https://influencer-marketing-hub.vercel.app/apply",
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar /> {/* Navbar stays fixed on the left */}
//       <div className="ml-14 w-full flex flex-col flex-grow">
//         <InfluencerHeader page="Home" /> {/* InfluencerHeader for page title */}

//         {/* Show loader when fetching data */}
//         {loading ? (
//           <div className="flex justify-center items-center h-full">
//             <img src={loader} alt="loading" className="h-52" />
//           </div>
//         ) : (
//           <>
//             {/* Brand Selection and Campaign Type Selection Dropdowns */}
//             <div className="mb-4 flex space-x-4"> {/* Flex container for side-by-side dropdowns */}
//               {/* Brand Selection Dropdown */}
//               <div className="w-48"> {/* Adjust width to make it smaller */}
//                 <label htmlFor="brandSelect" className="block text-sm font-semibold">Select Brand</label>
//                 <select 
//                   id="brandSelect" 
//                   className="w-full p-2 border rounded" 
//                   onChange={handleBrandChange}
//                 >
//                   <option value="">Select a brand</option>
//                   {campaigns.map(campaign => (
//                     <option key={campaign.brandId} value={campaign.brandId}>{campaign.brandName}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Campaign Type Selection Dropdown */}
//               <div className="w-48"> {/* Adjust width to make it smaller */}
//                 <label htmlFor="campaignTypeSelect" className="block text-sm font-semibold">Select Campaign Type</label>
//                 <select 
//                   id="campaignTypeSelect" 
//                   className="w-full p-2 border rounded" 
//                   onChange={handleCampaignTypeChange} 
//                   disabled={!selectedBrand}
//                 >
//                   <option value="">Select a campaign type</option>
//                   {selectedBrand && campaigns
//                     .filter(campaign => campaign.brandId === selectedBrand)
//                     .map(campaign => (
//                       <option key={campaign.campaignId} value={campaign.campaignType}>{campaign.campaignType}</option>
//                     ))}
//                 </select>
//               </div>
//             </div>

//             {/* Campaign Analytics Section */}
//             <div className="mt-8 sm:ml-6 sm:w-2/3 w-full mb-12 flex justify-center flex-col items-center" style={{ marginLeft: '70px' }}>
//               <h3 className="text-xl font-semibold text-center mb-4">Campaign Analytics</h3>

//               {/* Chart Container */}
//               <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
//                 {chartData.labels && chartData.labels.length > 0 ? (
//                   <Line
//                     data={chartData}
//                     options={{
//                       responsive: true,
//                       maintainAspectRatio: false,
//                       plugins: {
//                         tooltip: {
//                           callbacks: {
//                             label: function (context) {
//                               const label = context.dataset.label || '';
//                               const date = context.label;
//                               const value = context.raw;
//                               return `${label}: ${date} - Selected User: ${value}`;
//                             },
//                           },
//                         },
//                       },
//                       interaction: {
//                         mode: 'index',
//                         intersect: false,
//                       },
//                       scales: {
//                         x: {
//                           title: {
//                             display: true,
//                             text: 'Date',
//                           },
//                         },
//                         y: {
//                           title: {
//                             display: true,
//                             text: 'Selected User Count',
//                           },
//                           beginAtZero: true,
//                         },
//                       },
//                     }}
//                     height={400} // Set custom height for the chart
//                   />
//                 ) : (
//                   <p>No data available for the chart</p>
//                 )}
//               </div>
//             </div>

//             {/* User Info Table */}
//             {brandCard && brandCard.length > 0 && (
//               <div className="w-full sm:w-1/3 p-4 mb-8 bg-white shadow-lg rounded-lg flex flex-col">
//                 <h3 className="text-xs font-semibold text-left mb-4">Your Status for Campaign</h3>
//                 <div className="flex flex-col space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Name:</span>
//                     <span>{userData.name}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Status:</span>
//                     <span>{userData.status}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Followers:</span>
//                     <span>{userData.followers}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Email:</span>
//                     <span>{userData.email}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Instagram Link:</span>
//                     <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.instagramLink}
//                     </a>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-semibold">Task Link:</span>
//                     <a href={userData.taskLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                       {userData.taskLink}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Progress Cards Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//               {brandCard && brandCard.length > 0 ? (
//                 brandCard.map((card, index) => (
//                   <div
//                     key={index}
//                     className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center h-64"
//                   >
//                     <div className="w-36 h-36 mb-4">
//                       <CircularProgressbar value={card.progress} text={`${card.progress}`} />
//                     </div>
//                     <h3 className="text-lg font-semibold">{card.name}</h3>
//                     <p className="text-gray-500">Campaign Progress</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-center text-xl text-gray-500">No Data Available</p>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InfluencerHome;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import InfluencerHeader from "./InfluencerHeader";
import { Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import loader from "../../Images/loader.gif";
import axios from 'axios';

// Registering necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InfluencerHome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [brandCard, setBrandCard] = useState([]);
  const [chartData, setChartData] = useState({});
  const [campaignData, setCampaignData] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCampaignType, setSelectedCampaignType] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [influencerId, setInfluencerId] = useState(localStorage.getItem('influencerID'));

  // Fetch data for campaigns
  const fetchCampaigns = async () => {
    try {
      if (!influencerId) {
        console.error("No influencer ID found in localStorage");
        return;
      }

      const response = await axios.get(`http://localhost:8000/influencer/${influencerId}/campaigns`);
      const { campaigns } = response.data;

      if (campaigns) {
        setCampaigns(campaigns);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      setLoading(false);
    }
  };

  // Fetch analytics data based on selected brand and campaign type
  const fetchAnalyticsData = async (campaignId) => {
    try {
      const response = await axios.post("http://localhost:8000/influencer/influencersgetCampaignAnalytics", {
        applicantRealId: influencerId,
        campaignId: campaignId
      });

      const { dayWiseAnalytics, campaign, applicantStatus } = response.data;

      if (dayWiseAnalytics && campaign && applicantStatus) {
        const selectedApplicants = dayWiseAnalytics.Campaigns.selectedApplicants || [];
        const groupedByDate = selectedApplicants.reduce((acc, applicant) => {
          const selectedDate = new Date(applicant.selectedAt).toISOString().split('T')[0];
          if (acc[selectedDate]) {
            acc[selectedDate].count += 1;
          } else {
            acc[selectedDate] = { count: 1 };
          }
          return acc;
        }, {});

        const labels = Object.keys(groupedByDate);
        const selectedUsersCount = labels.map(date => groupedByDate[date].count);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Selected Users',
              data: selectedUsersCount,
              borderColor: 'rgba(75,192,192,1)',
              tension: 0.1,
              fill: false,
            },
          ],
        });

        setCampaignData({
          campaignId: campaign.campaignId,
          campaignType: campaign.campaignType,
          budget: campaign.budget,
          startDate: campaign.startDate,
          endDate: campaign.endDate,
          description: campaign.description,
          followerRange: campaign.followerRange,
          tags: campaign.tags,
          task: campaign.task
        });

        const selectedCount = dayWiseAnalytics["Campaigns"]?.selectedCount || 0;
        setBrandCard([ 
          { id: 1, name: "SELECTED APPLICANT", progress: selectedCount },
          { id: 2, name: "TOTAL VIEW ON THIS CAMPAIGN", progress: response.data.CampaigntotalReach || 0 },
          { id: 3, name: "TOTAL APPLICANT FOR THIS CAMPAIGN", progress: response.data.totalApplicantsForCampaign || 0 }
        ]);
      }
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, [influencerId]);

  // Handle brand change
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedCampaignType(null); // Reset campaign type selection
  };

  // Handle campaign type change
  const handleCampaignTypeChange = (event) => {
    setSelectedCampaignType(event.target.value);
  };

  useEffect(() => {
    if (selectedBrand && selectedCampaignType) {
      const selectedCampaign = campaigns.find(campaign => campaign.brandId === selectedBrand && campaign.campaignType === selectedCampaignType);
      if (selectedCampaign) {
        fetchAnalyticsData(selectedCampaign.campaignId);
      }
    }
  }, [selectedBrand, selectedCampaignType, campaigns]);

  // Data for the user's status (added extra details)
  const userData = {
    name: "Aman",
    status: "Selected",
    followers: 200,
    email: "amanpandya47@gmail.com",
    instagramLink: "https://influencer-marketing-hub.vercel.app/apply",
    taskLink: "https://influencer-marketing-hub.vercel.app/apply",
  };

  return (
    <div className="flex h-screen">
      <Navbar /> {/* Navbar stays fixed on the left */}
      <div className="ml-14 w-full flex flex-col flex-grow">
        <InfluencerHeader page="Home" /> {/* InfluencerHeader for page title */}

        {/* Show loader when fetching data */}
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <img src={loader} alt="loading" className="h-52" />
          </div>
        ) : (
          <>
            {/* Brand Selection and Campaign Type Selection Dropdowns */}
            <div className="mb-4 flex space-x-4 ml-auto" style={{ marginTop: '40px' }}> {/* Flex container with ml-auto to push items to the right */}
              {/* Brand Selection Dropdown */}
              <div className="w-48"> {/* Adjust width to make it smaller */}
                <label htmlFor="brandSelect" className="block text-sm font-semibold">Select Brand</label>
                <select 
                  id="brandSelect" 
                  className="w-full p-2 border rounded" 
                  onChange={handleBrandChange}
                >
                  <option value="">Select a brand</option>
                  {campaigns.map(campaign => (
                    <option key={campaign.brandId} value={campaign.brandId}>{campaign.brandName}</option>
                  ))}
                </select>
              </div>

              {/* Campaign Type Selection Dropdown */}
              <div className="w-48"> {/* Adjust width to make it smaller */}
                <label htmlFor="campaignTypeSelect" className="block text-sm font-semibold">Select Campaign Type</label>
                <select 
                  id="campaignTypeSelect" 
                  className="w-full p-2 border rounded" 
                  onChange={handleCampaignTypeChange} 
                  disabled={!selectedBrand}
                >
                  <option value="">Select a campaign type</option>
                  {selectedBrand && campaigns
                    .filter(campaign => campaign.brandId === selectedBrand)
                    .map(campaign => (
                      <option key={campaign.campaignId} value={campaign.campaignType}>{campaign.campaignType}</option>
                    ))}
                </select>
              </div>
            </div>

            {/* Campaign Analytics Section */}
            <div className="mt-8 sm:ml-6 sm:w-2/3 w-full mb-12 flex justify-center flex-col items-center" style={{ marginLeft: '70px' }}>
              <h3 className="text-xl font-semibold text-center mb-4">Campaign Analytics</h3>

              {/* Chart Container */}
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl">
                {chartData.labels && chartData.labels.length > 0 ? (
                  <Line
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        tooltip: {
                          callbacks: {
                            label: function (context) {
                              const label = context.dataset.label || '';
                              const date = context.label;
                              const value = context.raw;
                              return `${label}: ${date} - Selected User: ${value}`;
                            },
                          },
                        },
                      },
                      interaction: {
                        mode: 'index',
                        intersect: false,
                      },
                      scales: {
                        x: {
                          title: {
                            display: true,
                            text: 'Date',
                          },
                        },
                        y: {
                          title: {
                            display: true,
                            text: 'Selected User Count',
                          },
                          beginAtZero: true,
                        },
                      },
                    }}
                    height={400} // Set custom height for the chart
                  />
                ) : (
                  <p>No data available for the chart</p>
                )}
              </div>
            </div>

            {/* User Info Table */}
            {brandCard && brandCard.length > 0 && (
              <div className="w-full sm:w-1/3 p-4 mb-8 bg-white shadow-lg rounded-lg flex flex-col">
                <h3 className="text-xs font-semibold text-left mb-4">Your Status for Campaign</h3>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Name:</span>
                    <span>{userData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Status:</span>
                    <span>{userData.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Followers:</span>
                    <span>{userData.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Email:</span>
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Instagram Link:</span>
                    <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
                      {userData.instagramLink}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Task Link:</span>
                    <a href={userData.taskLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
                      {userData.taskLink}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {brandCard && brandCard.length > 0 ? (
                brandCard.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center h-64"
                  >
                    <div className="w-36 h-36 mb-4">
                      <CircularProgressbar value={card.progress} text={`${card.progress}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{card.name}</h3>
                    <p className="text-gray-500">Campaign Progress</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-xl text-gray-500">No Data Available</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InfluencerHome;
