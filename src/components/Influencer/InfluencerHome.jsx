


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import InfluencerHeader from "./InfluencerHeader";
import { Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Plugin } from 'chart.js';
import loader from "../../Images/loader.gif";

// Registering necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InfluencerHome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [brandCard, setBrandCard] = useState([]); // Placeholder for brand data

  // Generate an array of custom dates (e.g., '1/2/2001', '3/2/2001', etc.)
  const generateDates = () => {
    const startDate = new Date('2001-01-01'); // Start from 1st Jan 2001
    const dates = [];
    for (let i = 0; i < 6; i++) {
      const currentDate = new Date(startDate);
      currentDate.setMonth(startDate.getMonth() + i); // Increase month by i
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
      dates.push(formattedDate);
    }
    return dates;
  };

  const customDates = generateDates(); // Array of custom dates like '1/2/2001', '3/2/2001', etc.

  // Dummy data for the selected user (simulate the selected users for each date)
  const selectedUsers = [2, 3, 1, 4, 5, 3]; // Example data, e.g., 'Selected User: 2', etc.

  // Dummy chart data
  const chartData = {
    labels: customDates,  // Use custom dates for labels
    datasets: [
      {
        label: 'Selected User', // This label will show in the legend and tooltips
        data: [65, 59, 80, 81, 56, 55], // These are the performance values (could be user-related)
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  // Custom tooltip options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          // Customizing tooltip to show selected user value
          label: function (context) {
            const label = context.dataset.label || '';
            const date = context.label; // This will be the custom date (e.g., 1/2/2001)
            const value = context.raw; // This is the value of the point in the chart
            return `${label}: ${date} - Selected User: ${value}`;
          },
        },
      },
    },
    interaction: {
      mode: 'index', // Enable interaction mode for the dataset
      intersect: false, // The tooltip will show when hovering over any point on the line
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
          text: 'Selected User (%)',
        },
        beginAtZero: true,
      },
    },
    // Adding a plugin to render custom labels for each date
    plugins: [
      {
        id: 'selected-user-plugin',
        afterDatasetsDraw: function (chart) {
          const ctx = chart.ctx;
          const xScale = chart.scales.x;

          // Loop through the points and render the "Selected User" status below each date
          chart.data.labels.forEach((label, index) => {
            const x = xScale.getPixelForValue(label);
            const y = chart.scales.y.getPixelForValue(chart.data.datasets[0].data[index]);

            // Draw the "Selected User" below the data point (or x-axis)
            ctx.font = '12px Arial';
            ctx.fillStyle = 'rgba(75,192,192,1)';
            ctx.fillText(`Selected User: ${selectedUsers[index]}`, x - 30, y + 15);  // Adjusted position of status text
          });
        },
      },
    ],
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBrandCard([
        { id: 1, name: " SELECTED APPLICANT ", progress: 70 },
        { id: 2, name: "TOTAL VEIW ON THIS CAMPAIGN", progress: 50 },
        { id: 3, name: "TOTAL APPLICANT FOR THIS CAMPAIGN ", progress: 90 }
      ]); // Simulated brand data
      setLoading(false);
    }, 2000);
  }, []);

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
        <InfluencerHeader page="analytics" /> {/* InfluencerHeader for page title */}

        {/* Show loader when fetching data */}
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <img src={loader} alt="loading" className="h-52" />
          </div>
        ) : (
          <>
            {/* Campaign Analytics Section with Heading Above the Chart */}
            <div className="mt-8 sm:ml-6 sm:w-2/3 w-full mb-12 flex justify-center flex-col items-center" style={{ marginLeft: '70px' }}>
              {/* Campaign Analytics Heading */}
              <h3 className="text-xl font-semibold text-center mb-4">Campaign Analytics</h3>

              {/* Chart Container */}
              <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <Line data={chartData} options={options} />
              </div>
            </div>

            {/* User Info Table placed above the progress cards */}
            <div className="w-full sm:w-1/3 p-4 mb-8 bg-white shadow-lg rounded-lg flex flex-col">
              <h3 className="text-xs font-semibold text-left mb-4">Your Status for Campaign</h3>
              <div className="flex flex-col space-y-2 text-sm">
                {/* Display user information in rows */}
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

            {/* Progress Cards Section placed after the Campaign Analytics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {brandCard.length > 0 ? (
                brandCard.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center h-64" // Increased height
                  >
                    {/* Circular Progress Bar */}
                    <div className="w-36 h-36 mb-4">
                      <CircularProgressbar value={card.progress} text={`${card.progress}`} />
                    </div>
                    {/* Campaign Information */}
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



// data with post api resp




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
//       const response = await axios.post("http://localhost:8000/influencer/influencersgetCampaignAnalytics", {
//         applicantRealId: "67a500ba327eba117285ccb1", // Placeholder applicant ID
//         campaignId: "67a5bbfd85c4d2b0b849ebf3" // Placeholder campaign ID
//       });

//       const { dayWiseAnalytics, campaign, applicantStatus } = response.data;

//       // Ensure data exists and process the API response
//       if (dayWiseAnalytics && campaign && applicantStatus) {
//         // Extract the selectedCount value from "Campaign Not Started"
//         const selectedCount = dayWiseAnalytics["Campaign Not Started"]?.selectedCount || 0; // Default to 0 if undefined
//         setSelectedApplicantCount(selectedCount); // Set the selected applicant count

//         // Process the API data to generate the chart data
//         const labels = Object.keys(dayWiseAnalytics); // e.g., ['Campaign Not Started']
//         const selectedUsers = labels.map(status => dayWiseAnalytics[status].selectedCount); // Get count of selected users for each status

//         // Prepare the chart data
//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Selected Users',
//               data: selectedUsers,
//               borderColor: 'rgba(75,192,192,1)',
//               tension: 0.1,
//               fill: false,
//             },
//           ],
//         });

//         // Set brand card data based on API response
//         setBrandCard([
//           { id: 1, name: "SELECTED APPLICANT", progress: selectedCount },
//           { id: 2, name: "TOTAL VIEW ON THIS CAMPAIGN", progress: response.data.CampaigntotalReach || 0 }, // Ensure default to 0 if undefined
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
//               {/* Campaign Analytics Heading */}
//               <h3 className="text-xl font-semibold text-center mb-4">Campaign Analytics</h3>

//               {/* Chart Container */}
//               <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
//                 {chartData.labels && chartData.labels.length > 0 ? (
//                   <Line data={chartData} options={{
//                     responsive: true,
//                     plugins: {
//                       tooltip: {
//                         callbacks: {
//                           label: function (context) {
//                             const label = context.dataset.label || '';
//                             const date = context.label; // This will be the custom date (e.g., 1/2/2001)
//                             const value = context.raw; // This is the value of the point in the chart
//                             return `${label}: ${date} - Selected User: ${value}`;
//                           },
//                         },
//                       },
//                     },
//                     interaction: {
//                       mode: 'index', // Enable interaction mode for the dataset
//                       intersect: false, // The tooltip will show when hovering over any point on the line
//                     },
//                     scales: {
//                       x: {
//                         title: {
//                           display: true,
//                           text: 'Date',
//                         },
//                       },
//                       y: {
//                         title: {
//                           display: true,
//                           text: 'Selected User (%)',
//                         },
//                         beginAtZero: true,
//                       },
//                     },
//                   }} />
//                 ) : (
//                   <p>No data available for the chart</p>
//                 )}
//               </div>
//             </div>

//             {/* User Info Table placed above the progress cards */}
//             <div className="w-full sm:w-1/3 p-4 mb-8 bg-white shadow-lg rounded-lg flex flex-col">
//               <h3 className="text-xs font-semibold text-left mb-4">Your Status for Campaign</h3>
//               <div className="flex flex-col space-y-2 text-sm">
//                 {/* Display user information in rows */}
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Name:</span>
//                   <span>{userData.name}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Status:</span>
//                   <span>{userData.status}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Followers:</span>
//                   <span>{userData.followers}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Email:</span>
//                   <span>{userData.email}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Instagram Link:</span>
//                   <a href={userData.instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                     {userData.instagramLink}
//                   </a>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="font-semibold">Task Link:</span>
//                   <a href={userData.taskLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
//                     {userData.taskLink}
//                   </a>
//                 </div>
//               </div>
//             </div>

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
