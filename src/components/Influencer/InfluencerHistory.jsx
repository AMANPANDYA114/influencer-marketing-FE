


// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import Navbar from "./Navbar";
// import loader from "../../Images/loader.gif";
// import InfluencerHeader from "./InfluencerHeader";

// const InfluencerHistory = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedCampaignId, setSelectedCampaignId] = useState("");
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     followers: '',
//     following: '',
//     email: '',
//     campaignId: '',
//   });
//   const [searchQuery, setSearchQuery] = useState("");  // search query state

//   useEffect(() => {
//     const getCampaigns = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("https://server-side-influencer.vercel.app/brand/getAllCampaigns");
//         const data = response.data.data;
//         setCampaigns(data);  // Set campaigns data
//         setLoading(false);
//       } catch (err) {
//         toast.error("Error fetching campaign data.");
//         setLoading(false);
//       }
//     };

//     getCampaigns();

//     // Retrieve followers count from localStorage
//     const followersCount = localStorage.getItem('followersCount');
//     console.log("folwre in instsfsa",followersCount)
//     if (followersCount) {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         followers: followersCount,
//       }));
//     }

//   }, []);

//   const filteredCampaigns = campaigns.filter(campaign => {
//     return campaign.tags.some(tag => {
//       return tag.toLowerCase().slice(0, 2) === searchQuery.toLowerCase().slice(0, 2);
//     });
//   });

//   const displayedCampaigns = searchQuery ? filteredCampaigns : campaigns;

//   const handleApplyClick = (campaign) => {
//     setSelectedCampaignId(campaign._id);
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       campaignId: campaign._id,
//     }));
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const { name, age, followers, email } = formData;
//     if (!name || !age || !followers || !email) {
//       toast.error("All fields are required!");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const applicationData = { ...formData, campaignId: selectedCampaignId };

//     try {
//       const response = await axios.post("https://server-side-influencer.vercel.app/brand/applyToCampaign", applicationData);

//       if (response.data.success) {
//         toast.success("Application submitted successfully!");
//         setShowModal(false);
//         setFormData({
//           name: '',
//           age: '',
//           followers: '',
//           following: '',
//           email: '',
//           campaignId: '',
//         });
//       } else {
//         toast.error(response.data.message || "You are not eligible. Please check your email.");
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         toast.error(err.response.data.message);
//       } else {
//         toast.error("There was an error. Please try again.");
//       }
//     }
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
//                 id="search-dropdown"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//                 placeholder="Search Campaigns by Tags..."
//                 required
//               />
//               <button
//                 type="submit"
//                 className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                 </svg>
//                 <span className="sr-only">Search</span>
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Campaigns grid */}
//         <p className="text-center font-bold text-2xl">Join Campaigns</p>

//         {loading ? (
//           <img src={loader} alt="loading" className="h-52 mx-auto" />
//         ) : (
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5 max-md:px-10">
//             {displayedCampaigns.length > 0 ? (
//               displayedCampaigns.map((campaign) => (
//                 <div
//                   key={campaign._id}
//                   className="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl p-4"
//                 >
//                   <div className="text-center text-sm">
//                     <h3 className="text-xl font-bold font-dmserif text-neutral-700">
//                       {campaign.brandName}
//                     </h3>
//                     <p className="text-md text-gray-700 font-dmserif">
//                       Campaign Type: {campaign.campaignType}
//                     </p>
//                   </div>

//                   <div className="border-y-2 py-3 text-sm">
//                     <div className="flex space-x-2.5 items-center">
//                       <p className="mb-1 text-md">Start Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
//                     </div>

//                     <div className="flex space-x-2.5 items-center">
//                       <p className="mb-1 text-md">End Date: {new Date(campaign.endDate).toLocaleDateString()}</p>
//                     </div>

//                     <div className="flex space-x-2.5 items-center">
//                       <p className="mb-1 text-md">Budget: ${campaign.budget}</p>
//                     </div>

//                     <div className="flex space-x-2.5 items-center">
//                       <p className="mb-1 text-md">Description: {campaign.description}</p>
//                     </div>

//                     {campaign.followerRange && (
//                       <div className="flex space-x-2.5 items-center">
//                         <p className="mb-1 text-md">
//                           Follower Range: {campaign.followerRange[0]} - {campaign.followerRange[1]}
//                         </p>
//                       </div>
//                     )}

//                     {campaign.tags?.length > 0 && (
//                       <div className="mt-2">
//                         <p className="text-md">Tags: </p>
//                         <ul className="flex space-x-3">
//                           {campaign.tags.map((tag, index) => (
//                             <li key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">{tag}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                     <div className="mt-4">
//                       <button 
//                         onClick={() => handleApplyClick(campaign)} 
//                         className="w-full py-2 px-4 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
//                       >
//                         Apply to Campaign
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-lg text-gray-600">No campaigns found matching your query.</p>
//             )}
//           </div>
//         )}

//         {/* Modal */}
//         {showModal && (
//           <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg w-96">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Apply to Campaign</h3>
//                 <button
//                   onClick={handleCloseModal}
//                   className="text-xl text-gray-500 hover:text-gray-700"
//                 >
//                   &times; {/* This is the "X" button */}
//                 </button>
//               </div>
//               <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//                 {/* Name Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     className="w-full px-4 py-2 border rounded-md"
//                     required
//                   />
//                 </div>

//                 {/* Age Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Age</label>
//                   <input
//                     type="number"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleChange}
//                     placeholder="Enter your age"
//                     className="w-full px-4 py-2 border rounded-md"
//                     required
//                   />
//                 </div>

//                 {/* Followers Field (read-only) */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Followers</label>
//                   <input
//                     type="number"
//                     name="followers"
//                     value={formData.followers}
//                     onChange={handleChange}
//                     placeholder="Followers count"
//                     className="w-full px-4 py-2 border rounded-md"
//                     readOnly
//                   />
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className="w-full px-4 py-2 border rounded-md"
//                     required
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <div>
//                   <button
//                     type="submit"
//                     className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
//                   >
//                     Submit Application
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default InfluencerHistory;




import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";
import InfluencerHeader from "./InfluencerHeader";

const InfluencerHistory = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState("");
  const [formData, setFormData] = useState({
    name: '',  // The name will be set from localStorage
    age: '',
    followers: '',
    email: '',
    campaignId: '',
  });
  const [searchQuery, setSearchQuery] = useState("");  // search query state

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://server-side-influencer.vercel.app/brand/getAllCampaigns");
        const data = response.data.data;
        setCampaigns(data);  // Set campaigns data
        setLoading(false);
      } catch (err) {
        toast.error("Error fetching campaign data.");
        setLoading(false);
      }
    };

    getCampaigns();

    // Retrieve the name (fullname) and followers count from localStorage
    const fullname = localStorage.getItem('fullname');
    const followersCount = localStorage.getItem('followersCount');
    
    if (fullname) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: fullname,  // Pre-fill the 'name' field with fullname from localStorage
      }));
    }
    
    if (followersCount) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        followers: followersCount,  // Pre-fill the 'followers' field
      }));
    }
  }, []);

  const filteredCampaigns = campaigns.filter(campaign => {
    return campaign.tags.some(tag => {
      return tag.toLowerCase().slice(0, 2) === searchQuery.toLowerCase().slice(0, 2);
    });
  });

  const displayedCampaigns = searchQuery ? filteredCampaigns : campaigns;

  const handleApplyClick = (campaign) => {
    setSelectedCampaignId(campaign._id);
    setFormData(prevFormData => ({
      ...prevFormData,
      campaignId: campaign._id,
    }));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { name, age, followers, email } = formData;
    if (!name || !age || !followers || !email) {
      toast.error("All fields are required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const applicationData = { ...formData, campaignId: selectedCampaignId };

    try {
      const response = await axios.post("https://server-side-influencer.vercel.app/brand/applyToCampaign", applicationData);

      if (response.data.success) {
        toast.success("Application submitted successfully!");
        setShowModal(false);
        setFormData({
          name: '',
          age: '',
          followers: '',
          email: '',
          campaignId: '',
        });
      } else {
        toast.error(response.data.message || "You are not eligible. Please check your email.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("There was an error. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen relative">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Profile" />

        {/* Search bar */}
        <div className="mx-10 mb-5 mt-2">
          <form className="flex justify-center items-center space-x-2 w-full">
            <div className="relative w-[69%] ml-5">
              <input
                type="search"
                id="search-dropdown"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Campaigns by Tags..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>

        {/* Campaigns grid */}
        <p className="text-center font-bold text-2xl">Join Campaigns</p>

        {loading ? (
          <img src={loader} alt="loading" className="h-52 mx-auto" />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5 max-md:px-10">
            {displayedCampaigns.length > 0 ? (
              displayedCampaigns.map((campaign) => (
                <div
                  key={campaign._id}
                  className="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl p-4"
                >
                  <div className="text-center text-sm">
                    <h3 className="text-xl font-bold font-dmserif text-neutral-700">
                      {campaign.brandName}
                    </h3>
                    <p className="text-md text-gray-700 font-dmserif">
                      Campaign Type: {campaign.campaignType}
                    </p>
                  </div>

                  <div className="border-y-2 py-3 text-sm">
                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">Start Date: {new Date(campaign.startDate).toLocaleDateString()}</p>
                    </div>

                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">End Date: {new Date(campaign.endDate).toLocaleDateString()}</p>
                    </div>

                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">Budget: ${campaign.budget}</p>
                    </div>

                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">Description: {campaign.description}</p>
                    </div>

                    {campaign.followerRange && (
                      <div className="flex space-x-2.5 items-center">
                        <p className="mb-1 text-md">
                          Follower Range: {campaign.followerRange[0]} - {campaign.followerRange[1]}
                        </p>
                      </div>
                    )}

                    {campaign.tags?.length > 0 && (
                      <div className="mt-2">
                        <p className="text-md">Tags: </p>
                        <ul className="flex space-x-3">
                          {campaign.tags.map((tag, index) => (
                            <li key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">{tag}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mt-4">
                      <button 
                        onClick={() => handleApplyClick(campaign)} 
                        className="w-full py-2 px-4 text-center font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
                      >
                        Apply to Campaign
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-lg text-gray-600">No campaigns found matching your query.</p>
            )}
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Apply to Campaign</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-xl text-gray-500 hover:text-gray-700"
                >
                  &times; {/* This is the "X" button */}
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Age Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Followers Field (read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Followers</label>
                  <input
                    type="number"
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    placeholder="Followers count"
                    className="w-full px-4 py-2 border rounded-md"
                    readOnly
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default InfluencerHistory;



