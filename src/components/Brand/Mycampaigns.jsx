

// import React, { useEffect, useState } from "react";
// import { FaTrashAlt } from "react-icons/fa"; // Trash icon for delete button
// import { toast } from "react-toastify"; // Toastify for notifications
// import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"; // For Swal confirmation dialogs
// import Navbar from "./Navbar"; // Import the Navbar component

// const MyCampaigns = () => {
//   const [myCampaigns, setMyCampaigns] = useState([]); // Store fetched campaigns
//   const [loading, setLoading] = useState(false); // Loading state for API calls
//   const navigate = useNavigate(); // For navigation to other pages

//   // Fetch campaigns when the component is mounted
//   useEffect(() => {
//     const storedBrandId = localStorage.getItem("brandID");

//     if (storedBrandId) {
//       fetchCampaigns(storedBrandId);
//     } else {
//       toast.error("No brand ID found in localStorage!");
//     }
//   }, []);

//   const fetchCampaigns = async (brandId) => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `http://localhost:8000/brand/getMyCampaigns/${brandId}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data.success) {
//         setMyCampaigns(data.data); // Set fetched campaigns in state
//       } else {
//         toast.error(data.message || "Failed to fetch campaigns");
//       }
//     } catch (error) {
//       toast.error("Error fetching campaigns");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

// //   // Handle delete campaign
// //   const handleDeleteCampaign = async (id) => {
// //     try {
// //       const brandId = localStorage.getItem("brandID");
// //       const response = await fetch(
// //         `https://server-side-influencer.vercel.app/brand/deleteCampaign/${brandId}/${id}`,
// //         {
// //           method: "DELETE",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );
// //       const data = await response.json();
// //       if (data.success) {
// //         setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
// //         toast.success("Campaign deleted successfully!");
// //       } else {
// //         toast.error(data.message || "Failed to delete campaign");
// //       }
// //     } catch (error) {
// //       toast.error("Error deleting campaign");
// //       console.error("Error:", error);
// //     }
// //   };


// const handleDeleteCampaign = async (id) => {
//     try {
//       const brandId = localStorage.getItem("brandID");
//       const response = await fetch(
//         `https://server-side-influencer.vercel.app/brand/deleteCampaign/${brandId}/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data.success) {
//         // Remove the deleted campaign from the state
//         setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
//         toast.success("Campaign deleted successfully!");
  
//         // Refetch campaigns to get the updated list
//         fetchCampaigns(brandId);
//       } else {
//         toast.error(data.message || "Failed to delete campaign");
//       }
//     } catch (error) {
//       toast.error("Error deleting campaign");
//       console.error("Error:", error);
//     }
//   };
  

//   // Navigate to applicants page for the selected campaign
//   const handleViewApplicants = (campaignId) => {
//     navigate(`/applicant/${campaignId}`); // Pass campaignId as part of the URL
//   };

//   // Function to format the date without the time
//   const formatDate = (date) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(date).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Navbar */}
//       <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}>
//         <Navbar />
//       </div>

//       {/* Main content */}
//       <div className="ml-[250px] p-4"> {/* Adding margin to the left for the navbar */}
//         <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">My Campaigns</h2>
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {myCampaigns.length === 0 ? (
//               <p className="text-center text-gray-500">No campaigns found!</p>
//             ) : (
//               myCampaigns.map((campaign) => (
//                 <div
//                   key={campaign._id}
//                   className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
//                 >

//                   <h3 className="text-xl font-semibold text-blue-600">
//                     {campaign.campaignName}
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-700">
//                     <strong>Brand Name:</strong> {campaign.brandName}
//                   </p>

//                   <div className="mt-4">
//                     <p className="text-sm text-gray-700">
//                       <strong>Campaign Type:</strong> {campaign.campaignType}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Description:</strong> {campaign.description}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Budget:</strong> {campaign.budget}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Start Date:</strong> {formatDate(campaign.startDate)}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>End Date:</strong> {formatDate(campaign.endDate)}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Follower Range:</strong> 
//                       {campaign.followerRange 
//                         ? `${campaign.followerRange[0]} - ${campaign.followerRange[1]}`
//                         : "Not available"}
//                     </p>
//                   </div>

//                   <div className="mt-4 flex justify-between items-center">
//                     <div className="flex space-x-2">
//                       {campaign.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex space-x-4">
//                       <span
//                         className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer text-xs"
//                         onClick={() => handleViewApplicants(campaign._id)}
//                       >
//                         View Applicants
//                       </span>
//                       <button
//                         onClick={() =>
//                           Swal.fire({
//                             title: "Are you sure?",
//                             text: "This campaign will be deleted permanently!",
//                             icon: "warning",
//                             showCancelButton: true,
//                             confirmButtonText: "Yes, delete it!",
//                           }).then((result) => {
//                             if (result.isConfirmed) {
//                               handleDeleteCampaign(campaign._id);
//                             }
//                           })
//                         }
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FaTrashAlt />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyCampaigns;





// import React, { useEffect, useState } from "react";
// import { FaTrashAlt } from "react-icons/fa"; // Trash icon for delete button
// import { toast } from "react-toastify"; // Toastify for notifications
// import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"; // For Swal confirmation dialogs
// import Navbar from "./Navbar"; // Import the Navbar component

// const MyCampaigns = () => {
//   const [myCampaigns, setMyCampaigns] = useState([]); // Store fetched campaigns
//   const [loading, setLoading] = useState(false); // Loading state for API calls
//   const navigate = useNavigate(); // For navigation to other pages

//   // Fetch campaigns when the component is mounted
//   useEffect(() => {
//     const storedBrandId = localStorage.getItem("brandID");

//     if (storedBrandId) {
//       fetchCampaigns(storedBrandId);
//     } else {
//       toast.error("No brand ID found in localStorage!");
//     }
//   }, []);

//   const fetchCampaigns = async (brandId) => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `http://localhost:8000/brand/getMyCampaigns/${brandId}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data.success) {
//         setMyCampaigns(data.data); // Set fetched campaigns in state
//       } else {
//         toast.error(data.message || "Failed to fetch campaigns");
//       }
//     } catch (error) {
//       toast.error("Error fetching campaigns");
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle delete campaign
//   const handleDeleteCampaign = async (id) => {
//     try {
//       const brandId = localStorage.getItem("brandID");
//       const response = await fetch(
//         `https://server-side-influencer.vercel.app/brand/deleteCampaign/${brandId}/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const data = await response.json();
//       if (data.success) {
//         // Remove the deleted campaign from the state
//         setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
//         toast.success("Campaign deleted successfully!");

//         // Refetch campaigns to get the updated list
//         fetchCampaigns(brandId);
//       } else {
//         toast.error(data.message || "Failed to delete campaign");
//       }
//     } catch (error) {
     
//         Swal.fire({
//             title: "Error",
//             text: `Actual Error: ${error.message || "Error deleting campaign"}`,
//             icon: "error",
//             confirmButtonText: "Okay",
//           });
//           console.error("Actual Error:", error);
     
//     }
//   };

//   // Navigate to applicants page for the selected campaign
//   const handleViewApplicants = (campaignId) => {
//     navigate(`/applicant/${campaignId}`); // Pass campaignId as part of the URL
//   };

//   // Function to format the date without the time
//   const formatDate = (date) => {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(date).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Navbar */}
//       <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}>
//         <Navbar />
//       </div>

//       {/* Main content */}
//       <div className="ml-[250px] p-4"> {/* Adding margin to the left for the navbar */}
//         <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">My Campaigns</h2>
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {myCampaigns.length === 0 ? (
//               <p className="text-center text-gray-500">No campaigns found!</p>
//             ) : (
//               myCampaigns.map((campaign) => (
//                 <div
//                   key={campaign._id}
//                   className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden"
//                 >
//                   {/* Container for images */}
//                   <div className="absolute inset-0 z-0"> {/* Set z-index to 0 */}
//                     {/* Background image */}
//                     <img
//                       src={campaign.backgroundImage}
//                       alt="Background"
//                       className="w-full h-32 object-cover rounded-t-lg absolute top-0 left-0" // Adjusts background image
//                     />
//                     {/* Profile image */}
//                     <img
//                       src={campaign.logo}
//                       alt="Profile"
//                       className="w-16 h-16 object-cover rounded-full absolute top-4 left-4 z-10 border-4 border-white" // Profile image above the background
//                     />
//                   </div>

//                   <h3 className="text-xl font-semibold text-blue-600 mt-20"> {/* Adding margin top to account for image */}
//                     {campaign.campaignName}
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-700">
//                     <strong>Brand Name:</strong> {campaign.brandName}
//                   </p>

//                   <div className="mt-4">
//                     <p className="text-sm text-gray-700">
//                       <strong>Campaign Type:</strong> {campaign.campaignType}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Description:</strong> {campaign.description}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Budget:</strong> {campaign.budget}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Start Date:</strong> {formatDate(campaign.startDate)}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>End Date:</strong> {formatDate(campaign.endDate)}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Follower Range:</strong> 
//                       {campaign.followerRange 
//                         ? `${campaign.followerRange[0]} - ${campaign.followerRange[1]}`
//                         : "Not available"}
//                     </p>
//                   </div>

//                   <div className="mt-4 flex justify-between items-center relative z-10"> {/* Set z-index to 10 for buttons */}
//                     <div className="flex space-x-2">
//                       {campaign.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex space-x-4">
//                       <span
//                         className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer text-xs"
//                         onClick={() => handleViewApplicants(campaign._id)}
//                       >
//                         View Applicants
//                       </span>
//                       <button
//                         onClick={() =>
//                           Swal.fire({
//                             title: "Are you sure?",
//                             text: "This campaign will be deleted permanently!",
//                             icon: "warning",
//                             showCancelButton: true,
//                             confirmButtonText: "Yes, delete it!",
//                           }).then((result) => {
//                             if (result.isConfirmed) {
//                               handleDeleteCampaign(campaign._id);
//                             }
//                           })
//                         }
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FaTrashAlt />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyCampaigns;



import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Trash icon for delete button
import { toast, ToastContainer } from "react-toastify"; // Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import Navbar from "./Navbar"; // Import the Navbar component

const MyCampaigns = () => {
  const [myCampaigns, setMyCampaigns] = useState([]); // Store fetched campaigns
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const navigate = useNavigate(); // For navigation to other pages

  // Fetch campaigns when the component is mounted
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
        `http://localhost:8000/brand/getMyCampaigns/${brandId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setMyCampaigns(data.data); // Set fetched campaigns in state
      } else {
        toast.error(data.message || "Failed to fetch campaigns");
      }
    } catch (error) {
      toast.error("Error fetching campaigns");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete campaign with SweetAlert2 confirmation
  const handleDeleteCampaign = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this campaign?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const brandId = localStorage.getItem("brandID");
        const response = await fetch(
          `https://server-side-influencer.vercel.app/brand/deleteCampaign/${brandId}/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          // Remove the deleted campaign from the state
          setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
          toast.success("Campaign deleted successfully!");

          // Refetch campaigns to get the updated list
          fetchCampaigns(brandId);
        } else {
          toast.error(data.message || "Failed to delete campaign");
        }
      } catch (error) {
        toast.error("Error deleting campaign");
        console.error("Error:", error);
      }
    }
  };

  // Navigate to applicants page for the selected campaign
  const handleViewApplicants = (campaignId) => {
    navigate(`/applicant/${campaignId}`); // Pass campaignId as part of the URL
  };

  // Function to format the date without the time
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 10 }}>
        <Navbar />
      </div>

      {/* Main content */}
      <div className="ml-[250px] p-4"> {/* Adding margin to the left for the navbar */}
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">My Campaigns</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCampaigns.length === 0 ? (
              <p className="text-center text-gray-500">No campaigns found!</p>
            ) : (
              myCampaigns.map((campaign) => (
                <div
                  key={campaign._id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden"
                >
                  {/* Container for images */}
                  <div className="absolute inset-0 z-0"> {/* Set z-index to 0 */}
                    {/* Background image */}
                    <img
                      src={campaign.backgroundImage}
                      alt="Background"
                      className="w-full h-32 object-cover rounded-t-lg absolute top-0 left-0" // Adjusts background image
                    />
                    {/* Profile image */}
                    <img
                      src={campaign.logo}
                      alt="Profile"
                      className="w-16 h-16 object-cover rounded-full absolute top-4 left-4 z-10 border-4 border-white" // Profile image above the background
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-blue-600 mt-20"> {/* Adding margin top to account for image */}
                    {campaign.campaignName}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    <strong>Brand Name:</strong> {campaign.brandName}
                  </p>

                  <div className="mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Campaign Type:</strong> {campaign.campaignType}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Description:</strong> {campaign.description}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Budget:</strong> {campaign.budget}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Start Date:</strong> {formatDate(campaign.startDate)}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>End Date:</strong> {formatDate(campaign.endDate)}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Follower Range:</strong> 
                      {campaign.followerRange 
                        ? `${campaign.followerRange[0]} - ${campaign.followerRange[1]}`
                        : "Not available"}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center relative z-10"> {/* Set z-index to 10 for buttons */}
                    <div className="flex space-x-2">
                      {campaign.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <span
                        className="bg-green-500 text-white px-4 py-2 rounded-full cursor-pointer text-xs"
                        onClick={() => handleViewApplicants(campaign._id)}
                      >
                        View Applicants
                      </span>
                      <button
                        onClick={() => handleDeleteCampaign(campaign._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Toast Container for Notifications */}
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default MyCampaigns;
