

// import React, { useEffect, useState } from "react";
// import { FaTrashAlt } from "react-icons/fa"; // Import trash icon for delete button
// import { toast, ToastContainer } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
// import Navbar from "./Navbar"; // Import the Navbar component
// const CreateCampaign = () => {
//   const [campaignData, setCampaignData] = useState({
//     brandName: "",
//     campaignType: "",
//     startDate: "",
//     endDate: "",
//     budget: "",
//     description: "",
//     followerRange: ["", ""], // Change to array format
//     tags: [] // Start with an empty array for tags
//   });

//   const [tagInput, setTagInput] = useState(""); // State for the input field of tags
  

//   const [myCampaigns, setMyCampaigns] = useState([]); // State for storing the fetched campaigns
//   const [loading, setLoading] = useState(false); // Loading state for campaigns

  
//   const [brandData, setBrandData] = useState(null);
  

//   const getBrandData = async () => {
//     try {
//       // Retrieve the brandId from localStorage
//       const brandId = localStorage.getItem("brandID");

//       if (!brandId) {
//         console.log("Brand ID not found in localStorage");
//         return;
//       }

//       // Make the API call with the brandId from localStorage
//       const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/getBrandData/${brandId}`);
//       const data = await response.json();
      
//       // Set the response data to the state
//       setBrandData(data.data);
//       console.log("Logged in brand is data:- ", data.data);
//     } catch (err) {
//       console.log(err);
//       if (err.response.status === 422) {
//        alert("eror found ")
//       }
//     }
//   };
  
//   useEffect(() => {
//     getBrandData();
//   }, []);

//   useEffect(() => {
//     const storedBrandId = localStorage.getItem("brandID");

//     console.log("Stored in local storage received at create campaign page:", storedBrandId);

//     const fetchCampaigns = async () => {
//       try {
//         setLoading(true);

//         // If brandID is stored in localStorage, use it to fetch campaigns
//         if (storedBrandId) {
//           const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/getMyCampaigns/${storedBrandId}`, {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json", // Ensure to send JSON data
//             },
//           });

//           const data = await response.json();
//           if (data.success) {
//             setMyCampaigns(data.data); // Set fetched campaigns in state
//             console.log("Fetched campaigns:", data.data);
//           } else {
//             toast.error(data.message || "Failed to fetch campaigns");
//           }
//         } else {
//           toast.error("No brand ID found in localStorage!");
//         }
//       } catch (error) {
//         toast.error("Error fetching campaigns");
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCampaigns();
//   }, []); // Empty dependency array to run only on mount

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCampaignData({
//       ...campaignData,
//       [name]: value,
//     });
//   };

//   // Update the follower range to be an array with min and max values
//   const handleFollowerRangeChange = (e) => {
//     const { name, value } = e.target;
//     const newFollowerRange = [...campaignData.followerRange];
//     if (name === "min") {
//       newFollowerRange[0] = value; // Update min value
//     } else if (name === "max") {
//       newFollowerRange[1] = value; // Update max value
//     }
//     setCampaignData({
//       ...campaignData,
//       followerRange: newFollowerRange, // Set the updated array
//     });
//   };

//   const handleTagInputChange = (e) => {
//     setTagInput(e.target.value);
//   };

//   const handleAddTag = () => {
//     const trimmedTag = tagInput.trim(); // Trim whitespace from the tag input
//     if (trimmedTag && !campaignData.tags.includes(trimmedTag)) {
//       setCampaignData({
//         ...campaignData,
//         tags: [...campaignData.tags, trimmedTag], // Add valid tag
//       });
//       setTagInput(""); // Clear the input field after adding the tag
//     } else {
//       toast.error("Tag is empty or already exists!"); // Show error if tag is empty or duplicate
//     }
//   };

//   const handleRemoveTag = (tag) => {
//     setCampaignData({
//       ...campaignData,
//       tags: campaignData.tags.filter((t) => t !== tag),
//     });
//   };

//   const handleDeleteCampaign = async (id) => {
//     try {
//       const brandId = localStorage.getItem("brandID");
//       console.log("brand id at campaign form:", brandId);
  
//       const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/deleteCampaign/${brandId}/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
      

//       if (data.success) {
//         setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id)); // Remove the deleted campaign from the state
//         toast.success("Campaign deleted successfully!");
//       } else {
//         toast.error(data.message || "Failed to delete campaign");
//       }
//     } catch (error) {
//       toast.error("Error deleting campaign");
//       console.error("Error:", error);
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const storedBrandId = localStorage.getItem("brandID");
//     console.log("Stored in local storage received at create campaign page:", storedBrandId);

//     // Ensure tags array is not empty
//     if (campaignData.tags.length === 0) {
//       toast.error("Please add at least one tag!");
//       return;
//     }

//     // Basic validation (ensure all required fields are filled)
//     if (
//       !campaignData.brandName ||
//       !campaignData.campaignType ||
//       !campaignData.startDate ||
//       !campaignData.endDate ||
//       !campaignData.budget ||
//       !campaignData.followerRange[0] || // Check min follower
//       !campaignData.followerRange[1] // Check max follower
//     ) {
//       toast.error("Please fill all required fields!");
//       return;
//     }

//     // Get brandId from URL params or state (you can update this based on your routing setup)

//     // Prepare the data to send to the backend
//     const campaignPayload = {
//       brandName: campaignData.brandName,
//       campaignType: campaignData.campaignType,
//       startDate: campaignData.startDate,
//       endDate: campaignData.endDate,
//       budget: campaignData.budget,
//       description: campaignData.description,
//       followerRange: campaignData.followerRange, // Include follower range in the payload
//       tags: campaignData.tags, // Include tags in the payload
//     };

//     try {
//       // Sending POST request to the backend API with brandId as part of the URL
//       const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/createCampaign/${storedBrandId}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Ensure to send JSON data
//         },
//         body: JSON.stringify(campaignPayload), // Sending campaign data as JSON
//       });

//       // Handling the response from the backend
//       if (response.ok) {
//         const data = await response.json(); // Get response data
//         toast.success("Campaign created successfully!"); // Success toast
//         setMyCampaigns((prevCampaigns) => [...prevCampaigns, data.data]); // Add the new campaign to the list
//         console.log("Campaign Created:", data); // Optionally log the response data
//       } else {
//         throw new Error("Failed to create campaign");
//       }
//     } catch (error) {
//       toast.error("There was an error creating the campaign!"); // Error toast
//       console.error("Error:", error); // Log the error
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white-100 flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       <div className="flex-grow flex justify-center items-center">
//         {/* Form for creating campaign */}
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
//             Create Campaign
//           </h2>
//           <form onSubmit={handleSubmit}>
//             {/* Form Fields */}
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               {/* Brand Name */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Brand Name
//                 </label>
//                 <input
//                   type="text"
//                   name="brandName"
//                   value={campaignData.brandName}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter brand name"
//                 />
//               </div>

//               {/* Campaign Type */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Campaign Type
//                 </label>
//                 <input
//                   type="text"
//                   name="campaignType"
//                   value={campaignData.campaignType}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter campaign type"
//                 />
//               </div>

//               {/* Start Date */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={campaignData.startDate}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* End Date */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={campaignData.endDate}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Budget */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Budget
//                 </label>
//                 <input
//                   type="number"
//                   name="budget"
//                   value={campaignData.budget}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter budget"
//                 />
//               </div>

//               {/* Description */}
//               <div className="col-span-2">
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={campaignData.description}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter campaign description"
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>

//             {/* Follower Range Section */}
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               {/* Minimum Followers */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Min Followers
//                 </label>
//                 <input
//                   type="number"
//                   name="min"
//                   value={campaignData.followerRange[0]} // Access min value from array
//                   onChange={handleFollowerRangeChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter min followers"
//                 />
//               </div>

//               {/* Maximum Followers */}
//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2">
//                   Max Followers
//                 </label>
//                 <input
//                   type="number"
//                   name="max"
//                   value={campaignData.followerRange[1]} // Access max value from array
//                   onChange={handleFollowerRangeChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter max followers"
//                 />
//               </div>
//             </div>

//             {/* Tags Section */}
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">
//                 Tags
//               </label>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={tagInput}
//                   onChange={handleTagInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter tags"
//                 />
//                 <button
//                   type="button"
//                   onClick={handleAddTag}
//                   className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
//                 >
//                   Add
//                 </button>
//               </div>

//               {/* Display Tags */}
//               <div className="mt-2">
//                 {campaignData.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-block px-2 py-1 bg-blue-200 rounded-full mr-2"
//                   >
//                     {tag}
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveTag(tag)}
//                       className="ml-2 text-red-500"
//                     >
//                       x
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg"
//               >
//                 Create Campaign
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

     


//       <div className="flex justify-center items-center mt-8">
//         <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl px-4">

//         {/* <h2 className="text-2xl font-bold mb-4 text-center text-black-600 w-full">
//     My Campaigns
//   </h2> */}

// <h2 className="text-2xl font-bold mb-4 text-center text-black-600 w-full mt-[30px]">
//   My Campaigns
// </h2>

//           {loading ? (
//             <p>Loading campaigns...</p>
//           ) :(
//             myCampaigns.map((campaign) => (
//               <div
//                 key={campaign._id}
//                 className="bg-white p-4 rounded-lg shadow-lg flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//               >
//                 <h3 className="text-xl font-semibold text-blue-600">
//                   {campaign.campaignName}
//                 </h3>
                
//                 <p className="mt-2">Brand Name :{campaign.brandName}</p>
//                      <p className="mt-2">campaign type :{campaign.campaignType}</p>
                

//                 <p className="mt-2">campaign description : {campaign.description}</p>
//                 <p className="mt-2">Budget: {campaign.budget}</p>
//                 <p className="mt-2">Start Date: {campaign.startDate}</p>
//                 <p className="mt-2">End Date: {campaign.endDate}</p>
//                 <div className="mt-4 flex justify-between">
//                   <div className="flex space-x-2">
//                     {campaign.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <button
//                     onClick={() => handleDeleteCampaign(campaign._id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       {/* Toast Notifications */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default CreateCampaign;










import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon for delete button
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
import Navbar from "./Navbar"; // Import the Navbar component
const CreateCampaign = () => {
  


  const [campaignData, setCampaignData] = useState({
    brandName: "",
    campaignType: "",
    startDate: "",
    endDate: "",
    budget: "",
    description: "",
    followerRange: ["", ""], // Array for min and max followers
    tags: [] // Array for tags
  });

  const [tagInput, setTagInput] = useState(""); // Tag input state
  const [myCampaigns, setMyCampaigns] = useState([]); // Store fetched campaigns
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [brandData, setBrandData] = useState(null); // Brand data state

  // Fetch brand data from API
  const getBrandData = async () => {
    try {
      const brandId = localStorage.getItem("brandID");

      if (!brandId) {
        console.log("Brand ID not found in localStorage");
        return;
      }

      const response = await fetch(`https://server-side-influencer.vercel.app/brand/getBrandData/${brandId}`);
      const data = await response.json();

      setBrandData(data.data);
      console.log("Brand data received:", data.data);

      // Set the brand name to the campaign data if available
      if (data.data && data.data.uname) {
        setCampaignData((prevState) => ({
          ...prevState,
          brandName: data.data.uname // Default brand name
        }));
      }
    } catch (err) {
      console.error(err);
      toast.error("Error fetching brand data");
    }
  };


    useEffect(() => {
    const storedBrandId = localStorage.getItem("brandID");

    console.log("Stored in local storage received at create campaign page:", storedBrandId);

    const fetchCampaigns = async () => {
      try {
        setLoading(true);

        // If brandID is stored in localStorage, use it to fetch campaigns
        if (storedBrandId) {
          const response = await fetch(`https://server-side-influencer.vercel.app/brand/getMyCampaigns/${storedBrandId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json", // Ensure to send JSON data
            },
          });

          const data = await response.json();
          if (data.success) {
            setMyCampaigns(data.data); // Set fetched campaigns in state
            console.log("Fetched campaigns:", data.data);
          } else {
            toast.error(data.message || "Failed to fetch campaigns");
          }
        } else {
          toast.error("No brand ID found in localStorage!");
        }
      } catch (error) {
        toast.error("Error fetching campaigns");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []); // Empty dependency array to run only on mount


  useEffect(() => {
    getBrandData();
    // Fetch campaigns when component loads
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({
      ...campaignData,
      [name]: value,
    });
  };

  // Handle follower range changes
  const handleFollowerRangeChange = (e) => {
    const { name, value } = e.target;
    const newFollowerRange = [...campaignData.followerRange];
    if (name === "min") {
      newFollowerRange[0] = value;
    } else if (name === "max") {
      newFollowerRange[1] = value;
    }
    setCampaignData({
      ...campaignData,
      followerRange: newFollowerRange,
    });
  };

  // Handle tag input change
  const handleTagInputChange = (e) => setTagInput(e.target.value);

  // Add new tag
  const handleAddTag = () => {
    const trimmedTag = tagInput.trim();
    if (trimmedTag && !campaignData.tags.includes(trimmedTag)) {
      setCampaignData({
        ...campaignData,
        tags: [...campaignData.tags, trimmedTag],
      });
      setTagInput(""); // Clear input field
    } else {
      toast.error("Tag is empty or already exists!");
    }
  };

  // Remove tag
  const handleRemoveTag = (tag) => {
    setCampaignData({
      ...campaignData,
      tags: campaignData.tags.filter((t) => t !== tag),
    });
  };

  // Delete campaign API call
  const handleDeleteCampaign = async (id) => {
    try {
      const brandId = localStorage.getItem("brandID");
      const response = await fetch(`https://server-side-influencer.vercel.app/brand/deleteCampaign/${brandId}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        setMyCampaigns(myCampaigns.filter((campaign) => campaign._id !== id));
        toast.success("Campaign deleted successfully!");
      } else {
        toast.error(data.message || "Failed to delete campaign");
      }
    } catch (error) {
      toast.error("Error deleting campaign");
      console.error("Error:", error);
    }
  };

  // Submit the new campaign
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!campaignData.brandName) {
      toast.error("Brand name is required!");
      return;
    }
    if (!campaignData.campaignType) {
      toast.error("Campaign type is required!");
      return;
    }
    if (!campaignData.startDate) {
      toast.error("Start date is required!");
      return;
    }
    if (!campaignData.endDate) {
      toast.error("End date is required!");
      return;
    }
    if (!campaignData.budget) {
      toast.error("Budget is required!");
      return;
    }
    if (!campaignData.followerRange[0] || !campaignData.followerRange[1]) {
      toast.error("Follower range is required!");
      return;
    }
    if (campaignData.tags.length === 0) {
      toast.error("At least one tag is required!");
      return;
    }

    const storedBrandId = localStorage.getItem("brandID");

    const campaignPayload = {
      brandName: campaignData.brandName,
      campaignType: campaignData.campaignType,
      startDate: campaignData.startDate,
      endDate: campaignData.endDate,
      budget: campaignData.budget,
      description: campaignData.description,
      followerRange: campaignData.followerRange,
      tags: campaignData.tags,
    };

    try {
      const response = await fetch(`https://server-side-influencer.vercel.app/brand/createCampaign/${storedBrandId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(campaignPayload),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Campaign created successfully!");
        setMyCampaigns((prevCampaigns) => [...prevCampaigns, data.data]);
      } else {
        toast.error("Failed to create campaign");
      }
    } catch (error) {
      toast.error("Error creating campaign");
      console.error("Error:", error);
    }
  };





  
  return (
    <div className="min-h-screen bg-white-100 flex flex-col">
      {/* Navbar */}
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        {/* Form for creating campaign */}
        {/* <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-96 xl:w-1/2"> */}
        <div
    style={{ width: '84%' }} // Inline style to set the width to 99% on all screen sizes
    className="bg-white p-8 rounded-lg shadow-lg"
  >
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Create Campaign
          </h2>
       

          <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Brand Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Brand Name
          </label>
          <input
            type="text"
            name="brandName"
            disabled={true}
            defaultValue={brandData ? brandData.uname : ''} // Default value from brandData.uname
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"  // Add text-sm to reduce the font size
            placeholder="Brand name"
          />
        </div>

        {/* Campaign Type */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Campaign Type
          </label>
          <input
            type="text"
            name="campaignType"
            value={campaignData.campaignType}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter campaign type"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={campaignData.startDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={campaignData.endDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Budget
          </label>
          <input
            type="number"
            name="budget"
            value={campaignData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter budget"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={campaignData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter campaign description"
            rows="4"
          ></textarea>
        </div>
      </div>

      {/* Follower Range Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Minimum Followers */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Min Followers
          </label>
          <input
            type="number"
            name="min"
            value={campaignData.followerRange[0]} // Access min value from array
            onChange={handleFollowerRangeChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter min followers"
          />
        </div>

        {/* Maximum Followers */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Max Followers
          </label>
          <input
            type="number"
            name="max"
            value={campaignData.followerRange[1]} // Access max value from array
            onChange={handleFollowerRangeChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter max followers"
          />
        </div>
      </div>

      {/* Tags Section */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Tags
        </label>
        <div className="flex">
          <input
            type="text"
            value={tagInput}
            onChange={handleTagInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter tags"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add
          </button>
        </div>

        {/* Display Tags */}
        <div className="mt-2">
          {campaignData.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 bg-blue-200 rounded-full mr-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="ml-2 text-red-500"
              >
                x
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Create Campaign
        </button>
      </div>
    </form>
        </div>
      </div>

     


      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl px-4">

        {/* <h2 className="text-2xl font-bold mb-4 text-center text-black-600 w-full">
    My Campaigns
  </h2> */}

<h2 className="text-2xl font-bold mb-4 text-center text-black-600 w-full mt-[30px]">
  My Campaigns
</h2>

          {loading ? (
            <p>Loading campaigns...</p>
          ) :(
            myCampaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {campaign.campaignName}
                </h3>
                
                <p className="mt-2">Brand Name :{campaign.brandName}</p>
                     <p className="mt-2">campaign type :{campaign.campaignType}</p>
                

                <p className="mt-2">campaign description : {campaign.description}</p>
                <p className="mt-2">Budget: {campaign.budget}</p>
                <p className="mt-2">Start Date: {campaign.startDate}</p>
                <p className="mt-2">End Date: {campaign.endDate}</p>
                <div className="mt-4 flex justify-between">
                  <div className="flex space-x-2">
                    {campaign.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleDeleteCampaign(campaign._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default CreateCampaign;





