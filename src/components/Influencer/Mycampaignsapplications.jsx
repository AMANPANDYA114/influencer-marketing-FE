


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import loader from "../../Images/loader.gif";
// import InfluencerHeader from "./InfluencerHeader";

// const MyCampaigns = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     // Retrieve influencer ID from localStorage
//     const influencerId = localStorage.getItem('influencerID');

//     if (!influencerId) {
//       toast.error("Influencer ID not found!");
//       setLoading(false);
//       return;
//     }

//     // Fetch campaigns data using the influencer ID
//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get(
//           `https://server-side-influencer.onrender.com/influencer/${influencerId}/campaigns`
//         );

//         if (Array.isArray(response.data.campaigns)) {
//           setCampaigns(response.data.campaigns);
//         } else {
//           toast.error("Campaign data is not in the expected format.");
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//         toast.error("Error fetching campaigns.");
//         setLoading(false);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   // Function to open the modal and set the selected campaign
//   const openModal = (campaign) => {
//     setSelectedCampaign(campaign);
//     setModalVisible(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedCampaign(null);
//   };

//   return (
//     <div className="flex h-screen relative">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <InfluencerHeader page="My Campaigns" />

//         <p className="text-center font-bold text-2xl mb-5">My Campaigns</p>

//         {loading ? (
//           <img src={loader} alt="loading" className="h-52 mx-auto" />
//         ) : (
//           <div className="flex flex-wrap justify-center gap-10 px-10">
//             {campaigns.length > 0 ? (
//               campaigns.map((campaign) => (
//                 <div
//                   key={campaign.campaignId}
//                   className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//                   style={{ width: "50%" }}
//                 >
//                   <a href="#" onClick={() => openModal(campaign)}>
//                     <img
//                       className="rounded-t-lg object-cover w-full h-40"
//                       src={campaign.photo1}
//                       alt="Campaign Background"
//                     />
//                   </a>
//                   <div className="p-5">
//                     <a href="#">
//                       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {campaign.brandName}
//                       </h5>
//                     </a>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center">No campaigns found.</p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {modalVisible && selectedCampaign && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               {selectedCampaign.brandName}
//             </h2>
//             <p><strong>Campaign Type:</strong> {selectedCampaign.campaignType}</p>
//             <p><strong>Start Date:</strong> {new Date(selectedCampaign.startDate).toLocaleDateString()}</p>
//             <p><strong>End Date:</strong> {new Date(selectedCampaign.endDate).toLocaleDateString()}</p>
//             <p><strong>Budget:</strong> {selectedCampaign.budget}</p>
//             <p><strong>Description:</strong> {selectedCampaign.description}</p>
//             <p><strong>Follower Range:</strong> {selectedCampaign.followerRange.join(" - ")}</p>
//             <p><strong>Tags:</strong> {selectedCampaign.tags.join(", ")}</p>
//             <p><strong>Task:</strong> {selectedCampaign.task}</p>

//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default MyCampaigns;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import InfluencerHeader from "./InfluencerHeader";

// const MyCampaigns = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     const influencerId = localStorage.getItem("influencerID");

//     if (!influencerId) {
//       toast.error("Influencer ID not found!");
//       setLoading(false);
//       return;
//     }

//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get(
//           `https://server-side-influencer.onrender.com/influencer/${influencerId}/campaigns`
//         );

//         if (Array.isArray(response.data.campaigns)) {
//           setTimeout(() => {
//             setCampaigns(response.data.campaigns);
//             setLoading(false);
//           }, 4000); // Skeleton loader visible for at least 4 seconds
//         } else {
//           toast.error("Campaign data is not in the expected format.");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//         toast.error("Error fetching campaigns.");
//         setLoading(false);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const openModal = (campaign) => {
//     setSelectedCampaign(campaign);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedCampaign(null);
//   };

//   return (
//     <div className="flex h-screen relative">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <InfluencerHeader page="My Campaigns" />

//         <p className="text-center font-bold text-2xl mb-5">My Campaigns</p>

//         <div className="flex flex-wrap justify-center gap-10 px-10">
//           {loading
//             ? Array(6)
//                 .fill()
//                 .map((_, index) => (
//                   <div
//                     key={index}
//                     className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//                     style={{ width: "50%" }}
//                   >
//                     <Skeleton height={160} width="100%" />
//                     <div className="p-5">
//                       <Skeleton width="70%" height={20} />
//                     </div>
//                   </div>
//                 ))
//             : campaigns.length > 0
//             ? campaigns.map((campaign) => (
//                 <div
//                   key={campaign.campaignId}
//                   className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//                   style={{ width: "50%" }}
//                 >
//                   <a href="#" onClick={() => openModal(campaign)}>
//                     <img
//                       className="rounded-t-lg object-cover w-full h-40"
//                       src={campaign.photo1}
//                       alt="Campaign Background"
//                     />
//                   </a>
//                   <div className="p-5">
//                     <a href="#">
//                       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {campaign.brandName}
//                       </h5>
//                     </a>
//                   </div>
//                 </div>
//               ))
//             : !loading && <p className="text-center">No campaigns found.</p>}
//         </div>
//       </div>

//       {modalVisible && selectedCampaign && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               {selectedCampaign.brandName}
//             </h2>
//             <p>
//               <strong>Campaign Type:</strong> {selectedCampaign.campaignType}
//             </p>
//             <p>
//               <strong>Start Date:</strong>{" "}
//               {new Date(selectedCampaign.startDate).toLocaleDateString()}
//             </p>
//             <p>
//               <strong>End Date:</strong>{" "}
//               {new Date(selectedCampaign.endDate).toLocaleDateString()}
//             </p>
//             <p>
//               <strong>Budget:</strong> {selectedCampaign.budget}
//             </p>
//             <p>
//               <strong>Description:</strong> {selectedCampaign.description}
//             </p>
//             <p>
//               <strong>Follower Range:</strong>{" "}
//               {selectedCampaign.followerRange.join(" - ")}
//             </p>
//             <p>
//               <strong>Tags:</strong> {selectedCampaign.tags.join(", ")}
//             </p>
//             <p>
//               <strong>Task:</strong> {selectedCampaign.task}
//             </p>

//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default MyCampaigns;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import InfluencerHeader from "./InfluencerHeader";
// import DeleteIcon from "@mui/icons-material/Delete"; // Material-UI Delete Icon
// import IconButton from "@mui/material/IconButton"; // Material-UI IconButton for the delete icon

// const MyCampaigns = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     const influencerId = localStorage.getItem("influencerID");

//     if (!influencerId) {
//       toast.error("Influencer ID not found!");
//       setLoading(false);
//       return;
//     }

//     const fetchCampaigns = async () => {
//       try {
//         const response = await axios.get(
//           `https://server-side-influencer.onrender.com/influencer/${influencerId}/campaigns`
//         );

//         if (Array.isArray(response.data.campaigns)) {
//           setTimeout(() => {
//             setCampaigns(response.data.campaigns);
//             setLoading(false);
//           }, 4000); // Skeleton loader visible for at least 4 seconds
//         } else {
//           toast.error("Campaign data is not in the expected format.");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching campaigns:", error);
//         toast.error("Error fetching campaigns.");
//         setLoading(false);
//       }
//     };

//     fetchCampaigns();
//   }, []);

//   const openModal = (campaign) => {
//     setSelectedCampaign(campaign);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedCampaign(null);
//   };

//   const handleDeleteCampaign = async (campaignId) => {
//     const influencerId = localStorage.getItem("influencerID");

//     if (!influencerId) {
//       toast.error("Influencer ID not found!");
//       return;
//     }

//     try {
//       // Sending DELETE request to remove the campaign
//       await axios.delete(
//         `http://localhost:8000/influencer/${influencerId}/${campaignId}`
//       );

//       // Remove the deleted campaign from the list
//       setCampaigns(campaigns.filter((item) => item.campaignId !== campaignId));
//       toast.success("Campaign deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting campaign:", error);
//       toast.error("Error deleting the campaign.");
//     }
//   };

//   return (
//     <div className="flex h-screen relative">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <InfluencerHeader page="My Campaigns" />

//         <p className="text-center font-bold text-2xl mb-5">My Campaigns</p>

//         <div className="flex flex-wrap justify-center gap-10 px-10">
//           {loading
//             ? Array(6)
//                 .fill()
//                 .map((_, index) => (
//                   <div
//                     key={index}
//                     className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//                     style={{ width: "50%" }}
//                   >
//                     <Skeleton height={160} width="100%" />
//                     <div className="p-5">
//                       <Skeleton width="70%" height={20} />
//                     </div>
//                   </div>
//                 ))
//             : campaigns.length > 0
//             ? campaigns.map((campaign) => (
//                 <div
//                   key={campaign.campaignId}
//                   className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//                   style={{ width: "50%" }}
//                 >
//                   <a href="#" onClick={() => openModal(campaign)}>
//                     <img
//                       className="rounded-t-lg object-cover w-full h-40"
//                       src={campaign.photo1}
//                       alt="Campaign Background"
//                     />
//                   </a>
//                   <div className="p-5">
//                     <a href="#">
//                       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {campaign.brandName}
//                       </h5>
//                     </a>
//                     {/* Delete Icon at the bottom-right */}
//                     <IconButton
//                       onClick={() => handleDeleteCampaign(campaign.campaignId)}
//                       style={{
//                         position: "absolute",
//                         bottom: 10,
//                         right: 10,
//                         backgroundColor: "rgba(0, 0, 0, 0.2)",
//                       }}
//                     >
//                       <DeleteIcon style={{ color: "white" }} />
//                     </IconButton>
//                   </div>
//                 </div>
//               ))
//             : !loading && <p className="text-center">No campaigns found.</p>}
//         </div>
//       </div>

//       {modalVisible && selectedCampaign && (
//         <div
//           className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               {selectedCampaign.brandName}
//             </h2>
//             <p>
//               <strong>Campaign Type:</strong> {selectedCampaign.campaignType}
//             </p>
//             <p>
//               <strong>Start Date:</strong>{" "}
//               {new Date(selectedCampaign.startDate).toLocaleDateString()}
//             </p>
//             <p>
//               <strong>End Date:</strong>{" "}
//               {new Date(selectedCampaign.endDate).toLocaleDateString()}
//             </p>
//             <p>
//               <strong>Budget:</strong> {selectedCampaign.budget}
//             </p>
//             <p>
//               <strong>Description:</strong> {selectedCampaign.description}
//             </p>
//             <p>
//               <strong>Follower Range:</strong>{" "}
//               {selectedCampaign.followerRange.join(" - ")}
//             </p>
//             <p>
//               <strong>Tags:</strong> {selectedCampaign.tags.join(", ")}
//             </p>
//             <p>
//               <strong>Task:</strong> {selectedCampaign.task}
//             </p>

//             <button
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </div>
//   );
// };

// export default MyCampaigns;




import DeleteIcon from "@mui/icons-material/Delete"; // Material-UI Delete Icon
import IconButton from "@mui/material/IconButton"; // Material-UI IconButton for the delete icon
import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfluencerHeader from "./InfluencerHeader";

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const influencerId = localStorage.getItem("influencerID");

    if (!influencerId) {
      toast.error("Influencer ID not found!");
      setLoading(false);
      return;
    }

    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(
          `https://server-side-influencer.onrender.com/influencer/${influencerId}/campaigns`
        );

        if (Array.isArray(response.data.campaigns)) {
          setTimeout(() => {
            setCampaigns(response.data.campaigns);
            setLoading(false);
          }, 4000); // Skeleton loader visible for at least 4 seconds
        } else {
          toast.error("Campaign data is not in the expected format.");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        toast.error("Error fetching campaigns.");
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const openModal = (campaign) => {
    setSelectedCampaign(campaign);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCampaign(null);
  };

  const handleDeleteCampaign = async (campaignId) => {
    const influencerId = localStorage.getItem("influencerID");

    if (!influencerId) {
      toast.error("Influencer ID not found!");
      return;
    }

    try {
      // Sending DELETE request to remove the campaign
      await axios.delete(
        `https://server-side-influencer-1.onrender.com/influencer/${influencerId}/${campaignId}`
      );

      // Remove the deleted campaign from the list
      setCampaigns(campaigns.filter((item) => item.campaignId !== campaignId));
      toast.success("Campaign deleted successfully.");
    } catch (error) {
      console.error("Error deleting campaign:", error);
      toast.error("Error deleting the campaign.");
    }
  };

  return (
    <div className="flex h-screen relative">
      {/* <Navbar /> */}
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="My Campaigns" />

        <p className="text-center font-bold text-2xl mb-5">My Campaigns</p>

        <div className="flex flex-wrap justify-center gap-10 px-10">
          {loading
            ? Array(6)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    style={{ width: "50%" }}
                  >
                    <Skeleton height={160} width="100%" />
                    <div className="p-5">
                      <Skeleton width="70%" height={20} />
                    </div>
                  </div>
                ))
            : campaigns.length > 0
            ? campaigns.map((campaign) => (
                <div
                  key={campaign.campaignId}
                  className="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative"
                  style={{ width: "50%" }}
                >
                  <a href="#" onClick={() => openModal(campaign)}>
                    <img
                      className="rounded-t-lg object-cover w-full h-40"
                      src={campaign.photo1}
                      alt="Campaign Background"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {campaign.brandName}
                      </h5>
                    </a>
                    {/* Delete Icon at the bottom-right */}
                    <IconButton
                      onClick={() => handleDeleteCampaign(campaign.campaignId)}
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <DeleteIcon style={{ color: "white" }} />
                    </IconButton>
                  </div>
                </div>
              ))
            : !loading && <p className="text-center">No campaigns found !</p>}
        </div>
      </div>

      {modalVisible && selectedCampaign && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedCampaign.brandName}
            </h2>
            <p>
              <strong>Campaign Type:</strong> {selectedCampaign.campaignType}
            </p>
            <p>
              <strong>Start Date:</strong>{" "}
              {new Date(selectedCampaign.startDate).toLocaleDateString()}
            </p>
            <p>
              <strong>End Date:</strong>{" "}
              {new Date(selectedCampaign.endDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Budget:</strong> {selectedCampaign.budget}
            </p>
            <p>
              <strong>Description:</strong> {selectedCampaign.description}
            </p>
            <p>
              <strong>Follower Range:</strong>{" "}
              {selectedCampaign.followerRange.join(" - ")}
            </p>
            <p>
              <strong>Tags:</strong> {selectedCampaign.tags.join(", ")}
            </p>
            <p>
              <strong>Task:</strong> {selectedCampaign.task}
            </p>

            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default MyCampaigns;


