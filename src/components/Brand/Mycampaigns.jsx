



// import React, { useEffect, useState } from "react";
// import { FaTrashAlt } from "react-icons/fa"; // Trash icon for delete button
// import { toast, ToastContainer } from "react-toastify"; // Toastify for notifications
// import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"; // Import SweetAlert2
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
//         `https://server-side-influencer.onrender.com/brand/getMyCampaigns/${brandId}`,
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

//   // Handle delete campaign with SweetAlert2 confirmation
//   const handleDeleteCampaign = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to delete this campaign?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         const brandId = localStorage.getItem("brandID");
//         const response = await fetch(
//           `https://server-side-influencer.onrender.com/brand/deleteCampaign/${brandId}/${id}`,
//           {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.success) {
//           // Remove the deleted campaign from the state
//           setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
//           toast.success("Campaign deleted successfully!");

//           // Refetch campaigns to get the updated list
//           fetchCampaigns(brandId);
//         } else {
//           toast.error(data.message || "Failed to delete campaign");
//         }
//       } catch (error) {
//         toast.error("Error deleting campaign");
//         console.error("Error:", error);
//       }
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
//     <div className="flex">
//       {/* Navbar */}
//       <Navbar />

//       <div className="ml-14 w-screen max-sm:ml-0 h-screen">
//         <div className="min-h-screen bg-white-100 flex flex-col">
//           {/* Main content */}
//           <div className="ml-[20px] p-4"> {/* Adding margin to the left for the navbar */}
//             <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">My Campaigns</h2>
//             {loading ? (
//               <p className="text-center">Loading...</p>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {myCampaigns.length === 0 ? (
//                   <p className="text-center text-gray-500">No campaigns found!</p>
//                 ) : (
//                   myCampaigns.map((campaign) => (
//                     <div
//                       key={campaign._id}
//                       className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative"
//                     >
//                       {/* Container for images */}
//                       <div className="relative w-full h-32">
//                         {/* Background image */}
//                         <img
//                           src={campaign.backgroundImage}
//                           alt="Background"
//                           className="w-full h-full object-cover rounded-t-lg absolute top-0 left-0 z-0"
//                         />
//                         {/* Profile image */}
//                         <img
//                           src={campaign.logo}
//                           alt="Profile"
//                           className="w-16 h-16 object-cover rounded-full absolute top-4 left-4 z-10 border-4 border-white"
//                         />
//                       </div>

//                       {/* Content */}
//                       <div className="relative z-10 mt-16"> {/* Add margin to move content below the image */}
                 

//                         <div className="mt-4">
//                         <p className="mt-2 text-sm text-gray-700">
//                           <strong>Brand Name:</strong> {campaign.brandName}
//                         </p>
//                           <p className="text-sm text-gray-700">
//                             <strong>Campaign Type:</strong> {campaign.campaignType}
//                           </p>
//                           <p className="text-sm text-gray-700">
//                             <strong>Description:</strong> {campaign.description}
//                           </p>
//                           <p className="text-sm text-gray-700">
//                             <strong>Budget:</strong> {campaign.budget}
//                           </p>
//                           <p className="text-sm text-gray-700">
//                             <strong>Start Date:</strong> {campaign.startDate.slice(0, 10)}
//                           </p>
//                           <p className="text-sm text-gray-700">
//                             <strong>End Date:</strong> {campaign.endDate.slice(0, 10)}
//                           </p>

//                           <p className="text-sm text-gray-700">
//                             <strong>Follower Range:</strong>
//                             {campaign.followerRange
//                               ? `${campaign.followerRange[0]} - ${campaign.followerRange[1]}`
//                               : "Not available"}
//                           </p>

//                           <p className="text-sm text-gray-700">
//                             <strong>Tags:</strong>
//                             <span className="ml-2 text-blue-500">
//                               {campaign.tags && campaign.tags.length > 0 ? (
//                                 campaign.tags.map((tag, index) => (
//                                   <span key={index} className="mr-2">{tag}</span>
//                                 ))
//                               ) : (
//                                 "No tags available"
//                               )}
//                             </span>
//                           </p>
//                         </div>

//                         {/* Buttons in bottom-right corner of the card */}
//                         <div className="absolute bottom-4 right-4 flex space-x-4 z-10">
//                           <span
//                             className="bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer text-xs"
//                             onClick={() => handleViewApplicants(campaign._id)}
//                           >
//                             View Applicants
//                           </span>
//                           <button
//                             onClick={() => handleDeleteCampaign(campaign._id)}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             <FaTrashAlt />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Toast Container for Notifications */}
//           <ToastContainer position="bottom-center" autoClose={3000} />
//         </div>
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
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [itemsPerPage, setItemsPerPage] = useState(6); // Number of items per page
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
          `https://server-side-influencer.onrender.com/brand/deleteCampaign/${brandId}/${id}`,
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

  // Get current campaigns for the current page
  const indexOfLastCampaign = currentPage * itemsPerPage;
  const indexOfFirstCampaign = indexOfLastCampaign - itemsPerPage;
  const currentCampaigns = myCampaigns.slice(indexOfFirstCampaign, indexOfLastCampaign);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination controls
  const totalPages = Math.ceil(myCampaigns.length / itemsPerPage);

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      <div className="ml-14 w-screen max-sm:ml-0 h-screen">
        <div className="min-h-screen bg-white-100 flex flex-col">
          {/* Main content */}
          <div className="ml-[20px] p-4"> {/* Adding margin to the left for the navbar */}
            <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">My Campaigns</h2>
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCampaigns.length === 0 ? (
                  <p className="text-center text-gray-500">No campaigns found!</p>
                ) : (
                  currentCampaigns.map((campaign) => (
                    <div
                      key={campaign._id}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative"
                    >
                      {/* Container for images */}
                      <div className="relative w-full h-32">
                        {/* Background image */}
                        <img
                          src={campaign.backgroundImage}
                          alt="Background"
                          className="w-full h-full object-cover rounded-t-lg absolute top-0 left-0 z-0"
                        />
                        {/* Profile image */}
                        <img
                          src={campaign.logo}
                          alt="Profile"
                          className="w-16 h-16 object-cover rounded-full absolute top-4 left-4 z-10 border-4 border-white"
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 mt-16"> {/* Add margin to move content below the image */}
                       
                        <div className="mt-4">
                        <p className="text-sm text-gray-700">
                            <strong>Brand Name:</strong> {campaign.brandName}
                          </p>
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
                            <strong>Start Date:</strong> {campaign.startDate.slice(0, 10)}
                          </p>
                          <p className="text-sm text-gray-700">
                            <strong>End Date:</strong> {campaign.endDate.slice(0, 10)}
                          </p>

                          <p className="text-sm text-gray-700">
                            <strong>Follower Range:</strong>
                            {campaign.followerRange
                              ? `${campaign.followerRange[0]} - ${campaign.followerRange[1]}`
                              : "Not available"}
                          </p>

                          <p className="text-sm text-gray-700">
                            <strong>Tags:</strong>
                            <span className="ml-2 text-blue-500">
                              {campaign.tags && campaign.tags.length > 0 ? (
                                campaign.tags.map((tag, index) => (
                                  <span key={index} className="mr-2">{tag}</span>
                                ))
                              ) : (
                                "No tags available"
                              )}
                            </span>
                          </p>
                        </div>

                        {/* Buttons in bottom-right corner of the card */}
                        <div className="absolute bottom-4 right-4 flex space-x-4 z-10">
                          <span
                            className="bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer text-xs"
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

            {/* Pagination Controls */}
            {myCampaigns.length > itemsPerPage && (
              <div className="flex justify-center mt-6 space-x-2">
                {/* Show page numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                {/* Show "Next" button if there are more pages */}
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 border rounded-md bg-blue-500 text-white"
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Toast Container for Notifications */}
          <ToastContainer position="bottom-center" autoClose={3000} />
        </div>
      </div>
    </div>
  );
};

export default MyCampaigns;
