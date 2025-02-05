


// import React, { useEffect, useState } from "react";
// import { FaTrashAlt } from "react-icons/fa"; // Import trash icon for delete button
// import { toast, ToastContainer } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS
// import Navbar from "./Navbar"; // Import the Navbar component
// import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2';
// const CreateCampaign = () => {
  


//   const [campaignData, setCampaignData] = useState({
//     brandName: "",
//     campaignType: "",
//     startDate: "",
//     endDate: "",
//     budget: "",
//     description: "",
//     followerRange: ["", ""], // Array for min and max followers
//     task: "", // New task field
//     tags: [] // Array for tags
//   });

//   const [tagInput, setTagInput] = useState(""); // Tag input state
//   const [myCampaigns, setMyCampaigns] = useState([]); // Store fetched campaigns
//   const [loading, setLoading] = useState(false); // Loading state for API calls
//   const [brandData, setBrandData] = useState(null); // Brand data state
//   const navigate = useNavigate();
//   // Fetch brand data from API
//   const getBrandData = async () => {
//     try {
//       const brandId = localStorage.getItem("brandID");

//       if (!brandId) {
//         console.log("Brand ID not found in localStorage");
//         return;
//       }

//       const response = await fetch(`https://server-side-influencer.vercel.app/brand/getBrandData/${brandId}`);
//       const data = await response.json();

//       setBrandData(data.data);
//       console.log("Brand data received:", data.data);

//       // Set the brand name to the campaign data if available
//       if (data.data && data.data.shopName) {
//         setCampaignData((prevState) => ({
//           ...prevState,
//           brandName: data.data.shopName     // Default brand name
//         }));
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error fetching brand data");
//     }
//   };

//   const handleViewApplicants = (campaignId) => {
//     navigate(`/applicant/${campaignId}`); // Pass campaignId as part of the URL
//   };
  

//   // const handleViewApplicants = (campaignId) => {
//   //   console.log("Current Campaign ID:", campaignId);
//   // };
  

//   useEffect(() => {
//     getBrandData();
//     // Fetch campaigns when component loads
//   }, []);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCampaignData({
//       ...campaignData,
//       [name]: value,
//     });
//   };

//   // Handle follower range changes
//   const handleFollowerRangeChange = (e) => {
//     const { name, value } = e.target;
//     const newFollowerRange = [...campaignData.followerRange];
//     if (name === "min") {
//       newFollowerRange[0] = value;
//     } else if (name === "max") {
//       newFollowerRange[1] = value;
//     }
//     setCampaignData({
//       ...campaignData,
//       followerRange: newFollowerRange,
//     });
//   };

//   // Handle tag input change
//   const handleTagInputChange = (e) => setTagInput(e.target.value);

//   // Add new tag
//   const handleAddTag = () => {
//     const trimmedTag = tagInput.trim();
//     if (trimmedTag && !campaignData.tags.includes(trimmedTag)) {
//       setCampaignData({
//         ...campaignData,
//         tags: [...campaignData.tags, trimmedTag],
//       });
//       setTagInput(""); // Clear input field
//     } else {
//       toast.error("Tag is empty or already exists!");
//     }
//   };

//   // Remove tag
//   const handleRemoveTag = (tag) => {
//     setCampaignData({
//       ...campaignData,
//       tags: campaignData.tags.filter((t) => t !== tag),
//     });
//   };




//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure the dates are in string format
//     const formattedStartDate = new Date(campaignData.startDate).toISOString();
//     const formattedEndDate = new Date(campaignData.endDate).toISOString();

//     // Validate the other fields
//     if (!campaignData.brandName) {
//       toast.error("Brand name is required!");
//       return;
//     }
//     if (!campaignData.campaignType) {
//       toast.error("Campaign type is required!");
//       return;
//     }
//     if (!campaignData.startDate) {
//       toast.error("Start date is required!");
//       return;
//     }
//     if (!campaignData.endDate) {
//       toast.error("End date is required!");
//       return;
//     }
//     if (!campaignData.budget) {
//       toast.error("Budget is required!");
//       return;
//     }
//     if (!campaignData.followerRange[0] || !campaignData.followerRange[1]) {
//       toast.error("Follower range is required!");
//       return;
//     }
//     if (campaignData.tags.length === 0) {
//       toast.error("At least one tag is required!");
//       return;
//     }
//     if (!campaignData.task) { // Validate task field
//       toast.error("Task is required!");
//       return;
//     }

//     const storedBrandId = localStorage.getItem("brandID");

//     const campaignPayload = {
//       brandName: campaignData.brandName,
//       campaignType: campaignData.campaignType,
//       startDate: formattedStartDate,
//       endDate: formattedEndDate,
//       budget: campaignData.budget,
//       description: campaignData.description,
//       task: campaignData.task, // Add task field to the payload
//       followerRange: campaignData.followerRange,
//       tags: campaignData.tags,
//     };

//     // Submit campaign data to the backend
//     try {
//       const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/createCampaign/${storedBrandId}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(campaignPayload),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         Swal.fire({
//           title: "Success",
//           text: "Campaign created successfully!",
//           icon: "success", 
//           confirmButtonText: "OK",
//         });
//         setMyCampaigns((prevCampaigns) => [...prevCampaigns, data.data]);
//       } else {
//         toast.error("please enter all valid fields");
//       }
//     } catch (error) {
//       toast.error("Error creating campaign");
//       console.error("Error:", error);
//     }
//   };



  
//   return (
//     <div className="min-h-screen bg-white-100 flex flex-col">
//       {/* Navbar */}
//       <Navbar />
//       <div className="flex-grow flex justify-center items-center">
//         {/* Form for creating campaign */}
//         {/* <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-96 xl:w-1/2"> */}
//         <div
//     style={{ width: '84%' }} // Inline style to set the width to 99% on all screen sizes
//     className="bg-white p-8 rounded-lg shadow-lg"
//   >
//           <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
//             Create Campaign
//           </h2>
       

//           <form onSubmit={handleSubmit}>
//       {/* Form Fields */}
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         {/* Brand Name */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Brand Name
//           </label>
//           <input
//             type="text"
//             name="brandName"
//             disabled={true}
//             defaultValue={brandData ? brandData.shopName : ''} // Default value from brandData.uname
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"  // Add text-sm to reduce the font size
//             placeholder="Brand name"
//           />
//         </div>

//         {/* Campaign Type */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Campaign Type
//           </label>
//           <input
//             type="text"
//             name="campaignType"
//             value={campaignData.campaignType}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter campaign type"
//           />
//         </div>

//         {/* Start Date */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Start Date
//           </label>
//           <input
//             type="date"
//             name="startDate"
//             value={campaignData.startDate}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* End Date */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             End Date
//           </label>
//           <input
//             type="date"
//             name="endDate"
//             value={campaignData.endDate}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Budget */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Budget
//           </label>
//           <input
//             type="number"
//             name="budget"
//             value={campaignData.budget}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter budget"
//           />
//         </div>

//         {/* Description */}
//         <div className="col-span-2">
//           <label className="block text-gray-700 font-semibold mb-2">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={campaignData.description}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter campaign description"
//             rows="4"
//           ></textarea>
//         </div>
//       </div>


//          {/* Task */}
//          <div className="col-span-2">
//                 <label className="block text-gray-700 font-semibold mb-2">Task</label>
//                 <textarea
//                   name="task"
//                   value={campaignData.task}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   rows="4"
//                   placeholder="Enter task"
//                 />
//               </div>

//       {/* Follower Range Section */}
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         {/* Minimum Followers */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Min Followers
//           </label>
//           <input
//             type="number"
//             name="min"
//             value={campaignData.followerRange[0]} // Access min value from array
//             onChange={handleFollowerRangeChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter min followers"
//           />
//         </div>

//         {/* Maximum Followers */}
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">
//             Max Followers
//           </label>
//           <input
//             type="number"
//             name="max"
//             value={campaignData.followerRange[1]} // Access max value from array
//             onChange={handleFollowerRangeChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter max followers"
//           />
//         </div>
//       </div>

//       {/* Tags Section */}
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold mb-2">
//           Tags
//         </label>
//         <div className="flex">
//           <input
//             type="text"
//             value={tagInput}
//             onChange={handleTagInputChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter tags"
//           />
//           <button
//             type="button"
//             onClick={handleAddTag}
//             className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
//           >
//             Add
//           </button>
//         </div>

//         {/* Display Tags */}
//         <div className="mt-2">
//           {campaignData.tags.map((tag, index) => (
//             <span
//               key={index}
//               className="inline-block px-2 py-1 bg-blue-200 rounded-full mr-2"
//             >
//               {tag}
//               <button
//                 type="button"
//                 onClick={() => handleRemoveTag(tag)}
//                 className="ml-2 text-red-500"
//               >
//                 x
//               </button>
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="text-center">
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg"
//         >
//           Create Campaign
//         </button>
//       </div>
//     </form>
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
import BrandHeader from "./BrandHeader"; // Import the BrandHeader component
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const CreateCampaign = () => {
  const [campaignData, setCampaignData] = useState({
    brandName: "",
    campaignType: "",
    startDate: "",
    endDate: "",
    budget: "",
    description: "",
    followerRange: ["", ""], // Array for min and max followers
    task: "", // New task field
    tags: [] // Array for tags
  });

  const [tagInput, setTagInput] = useState(""); // Tag input state
  const [myCampaigns, setMyCampaigns] = useState([]); // Store fetched campaigns
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [brandData, setBrandData] = useState(null); // Brand data state
  const navigate = useNavigate();

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
      if (data.data && data.data.shopName) {
        setCampaignData((prevState) => ({
          ...prevState,
          brandName: data.data.shopName     // Default brand name
        }));
      }
    } catch (err) {
      console.error(err);
      toast.error("Error fetching brand data");
    }
  };

  const handleViewApplicants = (campaignId) => {
    navigate(`/applicant/${campaignId}`); // Pass campaignId as part of the URL
  };

  useEffect(() => {
    getBrandData();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the dates are in string format
    const formattedStartDate = new Date(campaignData.startDate).toISOString();
    const formattedEndDate = new Date(campaignData.endDate).toISOString();

    // Validate the other fields
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
    if (!campaignData.task) { // Validate task field
      toast.error("Task is required!");
      return;
    }

    const storedBrandId = localStorage.getItem("brandID");

    const campaignPayload = {
      brandName: campaignData.brandName,
      campaignType: campaignData.campaignType,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      budget: campaignData.budget,
      description: campaignData.description,
      task: campaignData.task, // Add task field to the payload
      followerRange: campaignData.followerRange,
      tags: campaignData.tags,
    };

    // Submit campaign data to the backend
    try {
      const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/createCampaign/${storedBrandId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(campaignPayload),
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          title: "Success",
          text: "Campaign created successfully!",
          icon: "success", 
          confirmButtonText: "OK",
        });
        setMyCampaigns((prevCampaigns) => [...prevCampaigns, data.data]);
      } else {
        toast.error("Please enter all valid fields");
      }
    } catch (error) {
      toast.error("Error creating campaign");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      <div className="ml-14 w-screen max-sm:ml-0 h-screen">
        {/* Brand Header */}
        <BrandHeader page="Create Campaign" />

        <div className="flex-grow flex justify-center items-center">
          {/* Form for creating campaign */}
          <div style={{ width: '84%' }} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Create Campaign</h2>

            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Brand Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Brand Name</label>
                  <input
                    type="text"
                    name="brandName"
                    disabled={true}
                    defaultValue={brandData ? brandData.shopName : ''} // Default value from brandData.uname
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder="Brand name"
                  />
                </div>

                {/* Campaign Type */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Campaign Type</label>
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
                  <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
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
                  <label className="block text-gray-700 font-semibold mb-2">End Date</label>
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
                  <label className="block text-gray-700 font-semibold mb-2">Budget</label>
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
                  <label className="block text-gray-700 font-semibold mb-2">Description</label>
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

              {/* Task */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Task</label>
                <textarea
                  name="task"
                  value={campaignData.task}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Enter task"
                />
              </div>

              {/* Follower Range Section */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Minimum Followers */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Min Followers</label>
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
                  <label className="block text-gray-700 font-semibold mb-2">Max Followers</label>
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
                <label className="block text-gray-700 font-semibold mb-2">Tags</label>
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
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default CreateCampaign;
