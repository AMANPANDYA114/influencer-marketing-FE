



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import InfluencerHeader from "./InfluencerHeader";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const InfluencerHistory = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();


//   // skeletal with useffetc withoud loading 
//   // useEffect(() => {
//   //   const getCampaigns = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const response = await axios.get(
//   //         "https://server-side-influencer.onrender.com/brand/getAllCampaigns"
//   //       );
//   //       setCampaigns(response.data.data);
//   //     } catch (err) {
//   //       toast.error("Error fetching campaign data.");
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   getCampaigns();
//   // }, []);


//   // skeletal useffetct with loading animations


//   useEffect(() => {
//     const getCampaigns = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "https://server-side-influencer.onrender.com/brand/getAllCampaigns"
//         );
//         setTimeout(() => {
//           setCampaigns(response.data.data);
//           setLoading(false);
//         }, 4000); // Ensures the loader remains for at least 4 seconds
//       } catch (err) {
//         toast.error("Error fetching campaign data.");
//         setLoading(false);
//       }
//     };

//     getCampaigns();
//   }, []);
//   const filteredCampaigns = campaigns.filter((campaign) =>
//     campaign.tags.some((tag) =>
//       tag.toLowerCase().startsWith(searchQuery.toLowerCase().slice(0, 2))
//     )
//   );

//   const displayedCampaigns = searchQuery ? filteredCampaigns : campaigns;

//   const handleCardClick = (campaign) => {
//     navigate("/campaigndetails", { state: { campaignDetails: campaign } });
//   };

//   const handleMyCampaignClick = () => {
//     navigate("/myapplications");
//   };

//   return (
//     <div className="flex h-screen relative">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <InfluencerHeader page="Profile" />

//         {/* Search bar */}
//         <div className="mx-10 mb-5 mt-2">
//           <form className="flex justify-center items-center space-x-2 w-full">
//             <div className="relative w-[69%] ml-5">
//               <input
//                 type="search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Search Campaigns by Tags..."
//               />
//             </div>
//           </form>

//         </div>

//         {/* Campaigns grid */}
//         <p className="text-center font-bold text-2xl mb-5">Join Campaigns</p>

//         <div
//           style={{ marginTop: "80px" }}
//           className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-10 max-sm:px-5"
//         >
//           {loading
//             ? Array(6)
//                 .fill()
//                 .map((_, index) => (
//                   <div
//                     key={index}
//                     className="cursor-pointer mt-10 items-center justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl overflow-hidden mb-10 ml-5 h-[350px]"
//                   >
//                     <Skeleton height={250} width="100%" />
//                     <div className="p-4 text-center text-sm">
//                       <Skeleton width="60%" height={20} />
//                     </div>
//                     <div className="flex space-x-2.5 items-center px-4">
//                       <Skeleton width="80%" height={15} />
//                     </div>
//                     <div className="mt-2 px-4">
//                       <Skeleton width="40%" height={15} />
//                       <Skeleton width="90%" height={15} />
//                     </div>
//                   </div>
//                 ))
//             : displayedCampaigns.length > 0
//             ? displayedCampaigns.map((campaign) => (
//                 <div
//                   key={campaign._id}
//                   className="cursor-pointer mt-10 items-center justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl overflow-hidden mb-10 ml-5 h-[350px]"
//                   onClick={() => handleCardClick(campaign)}
//                 >
//                   <img
//                     className="w-full object-cover h-[250px]"
//                     src={campaign.backgroundImage}
//                     alt="Campaign Background"
//                   />
//                   <div className="p-4 text-center text-sm">
//                     <h3 className="text-xl font-bold font-dmserif text-neutral-700">
//                       {campaign.brandName}
//                     </h3>
//                   </div>

//                   {campaign.followerRange && (
//                     <div className="flex space-x-2.5 items-center">
//                       <p className="mb-1 text-md">
//                         Follower Range: {campaign.followerRange[0]} -{" "}
//                         {campaign.followerRange[1]}
//                       </p>
//                     </div>
//                   )}

//                   {campaign.tags?.length > 0 && (
//                     <div className="mt-2">
//                       <p className="text-md">Tags: </p>
//                       <ul className="flex space-x-3">
//                         {campaign.tags.map((tag, index) => (
//                           <li
//                             key={index}
//                             className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold"
//                           >
//                             {tag}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               ))
//             : !loading && <p className="text-center">No campaigns found.</p>}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default InfluencerHistory;





import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InfluencerHeader from "./InfluencerHeader";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const InfluencerHistory = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://server-side-influencer.onrender.com/brand/getAllCampaigns"
        );
        setTimeout(() => {
          setCampaigns(response.data.data);
          setLoading(false);
        }, 4000); // Ensures the loader remains for at least 4 seconds
      } catch (err) {
        toast.error("Error fetching campaign data.");
        setLoading(false);
      }
    };

    getCampaigns();
  }, []);

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.tags.some((tag) =>
      tag.toLowerCase().startsWith(searchQuery.toLowerCase().slice(0, 2))
    )
  );

  const displayedCampaigns = searchQuery ? filteredCampaigns : campaigns;

  const handleCardClick = (campaign) => {
    navigate("/campaigndetails", { state: { campaignDetails: campaign } });
  };

  const handleMyCampaignClick = () => {
    navigate("/myapplications");
  };

  return (
    <div className="flex h-screen relative">
      {/* <Navbar /> */}
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Profile" />

        {/* Search bar */}
        <div className="mx-10 mb-5 mt-2">
          <form className="flex justify-center items-center space-x-2 w-full">
            <div className="relative w-[69%] ml-5">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Campaigns by Tags..."
              />
            </div>
          </form>
        </div>

        {/* Campaigns grid */}
        <p className="text-center font-bold text-2xl mb-5">Find Your Perfect Brand Partnership in These Campaigns !</p>

        <div
          style={{ marginTop: "80px" }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-10 max-sm:px-5"
        >
          {loading
            ? Array(6)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="cursor-pointer mt-10 items-center justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl overflow-hidden mb-10 ml-5 h-[350px]"
                  >
                    <Skeleton height={250} width="100%" />
                    <div className="p-4 text-center text-sm">
                      <Skeleton width="60%" height={20} />
                    </div>
                    <div className="flex space-x-2.5 items-center px-4">
                      <Skeleton width="80%" height={15} />
                    </div>
                    <div className="mt-2 px-4">
                      <Skeleton width="40%" height={15} />
                      <Skeleton width="90%" height={15} />
                    </div>
                  </div>
                ))
            : displayedCampaigns.length > 0
            ? displayedCampaigns.map((campaign) => (
                <div
                  key={campaign._id}
                  className="cursor-pointer mt-10 items-center justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl overflow-hidden mb-10 ml-5 h-[350px]"
                  onClick={() => handleCardClick(campaign)}
                >
                  <img
                    className="w-full object-cover h-[210px]"
                    src={campaign.backgroundImage}
                    alt="Campaign Background"
                  />
                  <div className="p-4 text-center text-sm">
                    <h3 className="text-xl font-bold font-dmserif text-neutral-700">
                      {campaign.brandName}
                    </h3>
                  </div>
                

                

                  {campaign.followerRange && (
                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">
                        Follower Range: {campaign.followerRange[0]} -{" "}
                        {campaign.followerRange[1]}
                      </p>
                    </div>
                  )}


{campaign.tags && campaign.tags.length > 0 && (
  <div className="flex  flex-wrap space-x-1 mt-1 mb-2 mx-2">
 <h1 className="text-base font-bold text-gray-700 ml-[3px]">Tags</h1>


    {campaign.tags.map((tag, index) => (
      <span
        key={index}
        className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs" // Reduced font size and padding
      >
        {tag}
      </span>
    ))}
  </div>
)}
                 
                </div>
              ))
            : !loading && <p className="text-center">No campaigns found.</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InfluencerHistory;
