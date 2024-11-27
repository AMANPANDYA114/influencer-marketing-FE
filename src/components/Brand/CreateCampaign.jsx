
// import React, { useState } from "react";
// import Navbar from "./Navbar"; // Import the Navbar component

// const CreateCampaign = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [campaignData, setCampaignData] = useState({
//     brandName: "",
//     campaignType: "",
//     startDate: "",
//     endDate: "",
//     budget: "",
//     description: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCampaignData({
//       ...campaignData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic (e.g., API call)
//     console.log("Campaign Created:", campaignData);
//     setShowModal(false); // Close modal after submission
//   };

//   return (
//     <div className="min-h-screen bg-white-100 flex flex-col">
//       {/* Navbar */}
//       <Navbar />

//       <div className="flex-grow flex justify-center items-center">
//         {/* Button to open modal */}
//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-blue-500 text-white px-2 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//         >
//           + Create Campaign
//         </button>

//         {/* Modal for creating campaign */}
//         {showModal && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//               <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
//                 Create Campaign
//               </h2>
//               <form onSubmit={handleSubmit}>
//                 {/* Grid layout for form fields in rows of two */}
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   {/* Brand Name */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Brand Name
//                     </label>
//                     <input
//                       type="text"
//                       name="brandName"
//                       value={campaignData.brandName}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Enter brand name"
//                     />
//                   </div>

//                   {/* Campaign Type */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Campaign Type
//                     </label>
//                     <input
//                       type="text"
//                       name="campaignType"
//                       value={campaignData.campaignType}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Enter campaign type"
//                     />
//                   </div>

//                   {/* Start Date */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Start Date
//                     </label>
//                     <input
//                       type="date"
//                       name="startDate"
//                       value={campaignData.startDate}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* End Date */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       End Date
//                     </label>
//                     <input
//                       type="date"
//                       name="endDate"
//                       value={campaignData.endDate}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* Budget */}
//                   <div>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Budget
//                     </label>
//                     <input
//                       type="number"
//                       name="budget"
//                       value={campaignData.budget}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Enter budget"
//                     />
//                   </div>

//                   {/* Description */}
//                   <div className="col-span-2">
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       Description
//                     </label>
//                     <textarea
//                       name="description"
//                       value={campaignData.description}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="Enter campaign description"
//                       rows="4"
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <button
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                     className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
//                   >
//                     Create Campaign
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateCampaign;



import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

const CreateCampaign = () => {
  const [showModal, setShowModal] = useState(false);
  const [campaignData, setCampaignData] = useState({
    brandName: "",
    campaignType: "",
    startDate: "",
    endDate: "",
    budget: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({
      ...campaignData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation (ensure all required fields are filled)
    if (!campaignData.brandName || !campaignData.campaignType || !campaignData.startDate || !campaignData.endDate || !campaignData.budget) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Prepare the data to send to the backend
    const campaignPayload = {
      brandName: campaignData.brandName,
      campaignType: campaignData.campaignType,
      startDate: campaignData.startDate,
      endDate: campaignData.endDate,
      budget: campaignData.budget,
      description: campaignData.description,
    };

    try {
      // Sending POST request to the backend API
      const response = await fetch("http://localhost:8000/brand/createCampaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure to send JSON data
        },
        body: JSON.stringify(campaignPayload), // Sending campaign data as JSON
      });

      // Handling the response from the backend
      if (response.ok) {
        const data = await response.json(); // Get response data
        toast.success("Campaign created successfully!"); // Success toast
        console.log("Campaign Created:", data); // Optionally log the response data
      } else {
        throw new Error("Failed to create campaign");
      }
    } catch (error) {
      toast.error("There was an error creating the campaign!"); // Error toast
      console.error("Error:", error); // Log the error
    }

    setShowModal(false); // Close modal after submission
  };

  return (
    <div className="min-h-screen bg-white-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex-grow flex justify-center items-center">
        {/* Button to open modal */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-2 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          + Create Campaign
        </button>

        {/* Modal for creating campaign */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
                Create Campaign
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Grid layout for form fields in rows of two */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Brand Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      name="brandName"
                      value={campaignData.brandName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter brand name"
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

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
                  >
                    Create Campaign
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Toast Notifications */}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default CreateCampaign;
