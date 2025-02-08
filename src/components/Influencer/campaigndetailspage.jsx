

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const CampaignDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { campaignDetails } = location.state || {};

//   if (!campaignDetails) {
//     return <div>No campaign details available</div>;
//   }

//   const handleApplyClick = () => {
//     if (campaignDetails && campaignDetails._id) {
//       navigate('/apply', { state: { campaignId: campaignDetails._id } });
//     } else {
//       console.error("Campaign ID is missing");
//     }
//   };

//   return (
//     <div className="font-sans bg-white-100 min-h-screen">
    

//       {/* Background Section */}
//       <div className="relative h-72 bg-gray-200">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${campaignDetails.backgroundImage})` }}
//         ></div>
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//         <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <img
//             className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
//             src={campaignDetails.profilePic}
//             alt={`${campaignDetails.brandName} Profile`}
//           />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="mt-16 px-8 py-12 bg-white rounded-t-2xl shadow-lg">
//         <h1 className="text-4xl font-bold text-gray-800 mb-6">
//           {campaignDetails.brandName} Campaign
//         </h1>
//         <p className="mb-4 text-gray-600"><strong>Campaign Type:</strong> {campaignDetails.campaignType}</p>
//         <p className="mb-4 text-gray-600"><strong>Description:</strong> {campaignDetails.description}</p>
//         <p className="mb-4 text-gray-600"><strong>Budget:</strong> ₹{campaignDetails.budget}</p>
//         <p className="mb-4 text-gray-600"><strong>Follower Range:</strong> {campaignDetails.followerRange[0]} - {campaignDetails.followerRange[1]}</p>
//         <p className="mb-4 text-gray-600"><strong>Task:</strong> {campaignDetails.task}</p>
//         <p className="mb-4 text-gray-600"><strong>Tags:</strong> {campaignDetails.tags.join(', ')}</p>
//         <p className="mb-4 text-gray-600"><strong>Start Date:</strong> {campaignDetails.startDate}</p>
//         <p className="mb-4 text-gray-600"><strong>End Date:</strong> {campaignDetails.endDate}</p>

//         {/* Apply Button */}
//         <div className="text-center mt-8">
//           <button
//             className="bg-blue-700 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300"
//             onClick={handleApplyClick}
//           >
//             Apply for Campaign
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignDetailsPage;





// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'; // Import your Navbar component

// const CampaignDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { campaignDetails } = location.state || {};

//   if (!campaignDetails) {
//     return <div>No campaign details available</div>;
//   }

//   const handleApplyClick = () => {
//     if (campaignDetails && campaignDetails._id) {
//       navigate('/apply', { state: { campaignId: campaignDetails._id } });
//     } else {
//       console.error("Campaign ID is missing");
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar /> {/* Sidebar or Navbar component */}

    
// <div className="h-screen ml-0 sm:ml-0 w-screen">
//         {/* Background Section */}
//         <div className="relative h-72 bg-gray-200">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${campaignDetails.backgroundImage})` }}
//           ></div>
//           <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//           <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <img
//               className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
//               src={campaignDetails.profilePic}
//               alt={`${campaignDetails.brandName} Profile`}
//             />
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="mt-16 px-8 py-12 bg-white rounded-t-2xl shadow-lg">
//           <h1 className="text-4xl font-bold text-gray-800 mb-6">
//             {campaignDetails.brandName} Campaign
//           </h1>
//           <p className="mb-4 text-gray-600"><strong>Campaign Type:</strong> {campaignDetails.campaignType}</p>
//           <p className="mb-4 text-gray-600"><strong>Description:</strong> {campaignDetails.description}</p>
//           <p className="mb-4 text-gray-600"><strong>Budget:</strong> ₹{campaignDetails.budget}</p>
//           <p className="mb-4 text-gray-600"><strong>Follower Range:</strong> {campaignDetails.followerRange[0]} - {campaignDetails.followerRange[1]}</p>
//           <p className="mb-4 text-gray-600"><strong>Task:</strong> {campaignDetails.task}</p>
//           <p className="mb-4 text-gray-600"><strong>Tags:</strong> {campaignDetails.tags.join(', ')}</p>
//           <p className="mb-4 text-gray-600"><strong>Start Date:</strong> {campaignDetails.startDate}</p>
//           <p className="mb-4 text-gray-600"><strong>End Date:</strong> {campaignDetails.endDate}</p>

//           {/* Apply Button */}
//           <div className="text-center mt-8">
//             <button
//               className="bg-blue-700 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300"
//               onClick={handleApplyClick}
//             >
//               Apply for Campaign
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignDetailsPage;





import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component

const CampaignDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { campaignDetails } = location.state || {};

  if (!campaignDetails) {
    return <div>No campaign details available</div>;
  }

  const handleApplyClick = () => {
    if (campaignDetails && campaignDetails._id) {
      navigate('/apply', { state: { campaignId: campaignDetails._id } });
    } else {
      console.error("Campaign ID is missing");
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar /> {/* Sidebar or Navbar component */}

      <div className="h-screen ml-0 sm:ml-0 w-screen">
        {/* Background Section */}
        <div className="relative h-72 bg-gray-200">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${campaignDetails.backgroundImage})`,
              backgroundSize: '90%', // Slightly larger to adjust the width
              backgroundPosition: 'center', // Keeps it centered
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
              src={campaignDetails.profilePic}
              alt={`${campaignDetails.brandName} Profile`}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-16 px-8 py-12 bg-white rounded-t-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {campaignDetails.brandName} Campaign
          </h1>
          <p className="mb-4 text-gray-600"><strong>Campaign Type:</strong> {campaignDetails.campaignType}</p>
          <p className="mb-4 text-gray-600"><strong>Description:</strong> {campaignDetails.description}</p>
          <p className="mb-4 text-gray-600"><strong>Budget:</strong> ₹{campaignDetails.budget}</p>
          <p className="mb-4 text-gray-600"><strong>Follower Range:</strong> {campaignDetails.followerRange[0]} - {campaignDetails.followerRange[1]}</p>
          <p className="mb-4 text-gray-600"><strong>Task:</strong> {campaignDetails.task}</p>
          <p className="mb-4 text-gray-600"><strong>Tags:</strong> {campaignDetails.tags.join(', ')}</p>
          <p className="mb-4 text-gray-600"><strong>Start Date:</strong> {campaignDetails.startDate}</p>
          <p className="mb-4 text-gray-600"><strong>End Date:</strong> {campaignDetails.endDate}</p>

          {/* Apply Button */}
          <div className="text-center mt-8">
            <button
              className="bg-blue-700 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300"
              onClick={handleApplyClick}
            >
              Apply for Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
