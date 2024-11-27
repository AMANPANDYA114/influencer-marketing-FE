



// import React, { useEffect, useState } from "react";
// import InfluencerHeader from "./InfluencerHeader";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import Navbar from "./Navbar";
// import loader from "../../Images/loader.gif";

// const InfluencerHistory = () => {
//   const navigate = useNavigate();

//   const [campaigns, setCampaigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility
//   const [selectedCampaign, setSelectedCampaign] = useState(null); // To store selected campaign details
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     followers: '',
//     following: '',
//     email: ''
//   }); // Form data state

//   useEffect(() => {
//     // Fetch the campaigns from the API
//     const getCampaigns = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:8000/brand/getAllCampaigns");
//         const data = response.data.data; // Assuming the response follows the format { success: true, data: [...] }
        
//         setCampaigns(data); // Set campaign data for rendering
//         setLoading(false);
//       } catch (err) {
//         toast.error("Error fetching campaign data.");
//         setLoading(false);
//       }
//     };

//     getCampaigns();
//   }, []);

//   const handleApplyClick = (campaign) => {
//     setSelectedCampaign(campaign); // Set the selected campaign
//     setShowModal(true); // Open the modal
//   };

//   const handleCloseModal = () => {
//     setShowModal(false); // Close the modal
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make API request to submit the form data
//       const response = await axios.post("http://localhost:8000/brand/apply", { 
//         ...formData, 
//         campaignId: selectedCampaign._id // Add campaign ID to form data
//       });
//       toast.success("Application submitted successfully!");
//       setShowModal(false); // Close the modal after submission
//       setFormData({
//         name: '',
//         age: '',
//         followers: '',
//         following: '',
//         email: ''
//       }); // Clear form fields
//     } catch (err) {
//       toast.error("Error submitting application.");
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         <InfluencerHeader page="History" />
//         {loading ? (
//           <img src={loader} alt="loading" className="h-52 mx-auto" />
//         ) : (
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5 max-md:px-10">
//             {/* Check if there are any campaigns */}
//             {campaigns.length > 0 ? (
//               campaigns.map((campaign) => (
//                 <div
//                   key={campaign._id} // Use the campaign ID for key
//                   className="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl"
//                 >
//                   <div className="px-5">
//                     <div className="text-center">
//                       <h3 className="text-3xl font-bold font-dmserif text-neutral-700">
//                         {campaign.brandName}
//                       </h3>
//                       <p className="text-xl text-gray-700 font-dmserif">
//                         {campaign.campaignType}
//                       </p>
//                     </div>

//                     <div className="border-y-2 py-3">
//                       <div className="flex space-x-2.5 items-center">
//                         <p className="mb-1 text-lg">Start Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
//                       </div>

//                       <div className="flex space-x-2.5 items-center">
//                         <p className="mb-1 text-lg">End Date: {new Date(campaign.endDate).toLocaleDateString()}</p>
//                       </div>

//                       <div className="flex space-x-2.5 items-center">
//                         <p className="mb-1 text-lg">Budget: ${campaign.budget}</p>
//                       </div>

//                       <div className="flex space-x-2.5 items-center">
//                         <p className="mb-1 text-lg">Description: {campaign.description}</p>
//                       </div>
//                     </div>

//                     <div className="mt-3 text-center">
//                       <button 
//                         onClick={() => handleApplyClick(campaign)} 
//                         className="px-6 py-2 bg-blue-500 text-white rounded-full mt-4">
//                         Apply Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <h1 className="text-3xl font-bold">No Campaigns Available</h1>
//             )}
//           </div>
//         )}

//         {/* Modal for Application Form */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-8 rounded-lg w-96">
//               <h2 className="text-2xl mb-4">Apply for {selectedCampaign?.brandName} Campaign</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-lg">Name</label>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border rounded" 
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-lg">Age</label>
//                   <input 
//                     type="number" 
//                     name="age" 
//                     value={formData.age} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border rounded" 
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-lg">Followers</label>
//                   <input 
//                     type="number" 
//                     name="followers" 
//                     value={formData.followers} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border rounded" 
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-lg">Following</label>
//                   <input 
//                     type="number" 
//                     name="following" 
//                     value={formData.following} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border rounded" 
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-lg">Email</label>
//                   <input 
//                     type="email" 
//                     name="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     className="w-full p-2 border rounded" 
//                   />
//                 </div>

//                 <div className="flex justify-between mt-4">
//                   <button 
//                     type="button" 
//                     onClick={handleCloseModal} 
//                     className="px-6 py-2 bg-gray-500 text-white rounded-full">
//                     Cancel
//                   </button>
//                   <button 
//                     type="submit" 
//                     className="px-6 py-2 bg-blue-500 text-white rounded-full">
//                     Submit Application
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

// export default InfluencerHistory;





import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

const InfluencerHistory = () => {
  const navigate = useNavigate();

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedCampaign, setSelectedCampaign] = useState(null); // To store selected campaign details
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    followers: '',
    following: '',
    email: ''
  }); // Form data state

  useEffect(() => {
    // Fetch the campaigns from the API
    const getCampaigns = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/brand/getAllCampaigns");
        const data = response.data.data; // Assuming the response follows the format { success: true, data: [...] }
        
        setCampaigns(data); // Set campaign data for rendering
        setLoading(false);
      } catch (err) {
        toast.error("Error fetching campaign data.");
        setLoading(false);
      }
    };

    getCampaigns();
  }, []);

  const handleApplyClick = (campaign) => {
    setSelectedCampaign(campaign); // Set the selected campaign
    setShowModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the backend
    const applicationData = {
      ...formData,
      campaignId: selectedCampaign._id // Add campaign ID to form data
    };

    try {
      // Make the POST request to submit the application
      const response = await axios.post("http://localhost:8000/brand/applyToCampaign", applicationData);

      if (response.data.success) {
        toast.success("Application submitted successfully!"); // Show success message
        setShowModal(false); // Close the modal after successful submission
        setFormData({
          name: '',
          age: '',
          followers: '',
          following: '',
          email: ''
        }); // Clear the form fields
      } else {
        toast.error("you are not eligible check email."); // Show error message if any
      }
    } catch (err) {
      toast.error("you are not  eligible check email"); // Catch any errors during the API call
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
      <p className="text-center font-bold text-2xl">Join Campaigns</p>

        {loading ? (
          <img src={loader} alt="loading" className="h-52 mx-auto" />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5 max-md:px-10">
            {/* Check if there are any campaigns */}
            {campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <div
                  key={campaign._id} // Use the campaign ID for key
                  className="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl"
                >
                  <div className="px-5">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold font-dmserif text-neutral-700">
                        {campaign.brandName}
                      </h3>
                      <p className="text-xl text-gray-700 font-dmserif">
                      campaign type :   {campaign.campaignType}
                      </p>
                    </div>

                    <div className="border-y-2 py-3">
                      <div className="flex space-x-2.5 items-center">
                        <p className="mb-1 text-lg">Start Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <p className="mb-1 text-lg">End Date: {new Date(campaign.endDate).toLocaleDateString()}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <p className="mb-1 text-lg">Budget: ${campaign.budget}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <p className="mb-1 text-lg">Description: {campaign.description}</p>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <button 
                        onClick={() => handleApplyClick(campaign)} 
                        className="px-6 py-2 bg-blue-500 text-white rounded-full mt-4">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-3xl font-bold">No Campaigns Available</h1>
            )}
          </div>
        )}

        {/* Modal for Application Form */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-96">
              <h2 className="text-2xl mb-4">Apply for {selectedCampaign?.brandName} Campaign</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-lg">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg">Age</label>
                  <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg">Followers</label>
                  <input 
                    type="number" 
                    name="followers" 
                    value={formData.followers} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg">Following</label>
                  <input 
                    type="number" 
                    name="following" 
                    value={formData.following} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-lg">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded" 
                  />
                </div>

                <div className="flex justify-between mt-4">
                  <button 
                    type="button" 
                    onClick={handleCloseModal} 
                    className="px-6 py-2 bg-gray-500 text-white rounded-full">
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2 bg-blue-500 text-white rounded-full">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default InfluencerHistory;

