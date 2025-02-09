




// // import React, { useEffect, useState } from "react";
// // import { AiFillTwitterCircle } from "react-icons/ai";
// // import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

// // import { FaUserEdit } from "react-icons/fa";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import InfluencerHeader from "./InfluencerHeader";
// // import { NavLink } from "react-router-dom";
// // import Navbar from "./Navbar";

// // const InfluencerProfile = () => {
// //   const [userdata, setuserdata] = useState({});
// //   const [adrequired, setAdrequired] = useState(userdata.Adsrequired);
// //   const [loading, setLoading] = useState(true);

// //   // State for Instagram stats
// //   const [influencerName, setInfluencerName] = useState("John Doe");
// //   const [followers, setFollowers] = useState("500k");
// //   const [avgLikes, setLikes] = useState("1,500");
// //   const [avgComments, setComments] = useState("350");
// //   const [fakeFollowers, setFakeFollowers] = useState("8.57%");
// //   const [engagementRate, setEngagementRate] = useState("0%");  // New state for engagement rate

// //   // Fetch influencer data using fetch API
// //   const getInfluencerData = () => {
// //     const influencerId = localStorage.getItem("influencerID");

// //     if (!influencerId) {
// //       console.log("No influencer ID found in localStorage.");
// //       return;
// //     }

// //     // API call to fetch influencer data
// //     fetch(`https://server-side-influencer.onrender.com/influencer/getInfluencer/${influencerId}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setuserdata(data.data);
// //         setLoading(false);
// //         console.log("Logged in influencer data is:", data.data);

// //         // Call the fetchInstagramStats function after setting the influencer data
// //         if (data?.data?.instagramURL) {
// //           fetchInstagramStats(data.data.instagramURL);
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching influencer data:", err);
// //         setLoading(false);
// //       });
// //   };

// //   // Fetch Instagram stats using the URL
// //   const fetchInstagramStats = async (url) => {
// //     try {
// //       const res = await fetch(`https://server-side-influencer.vercel.app/influencer/stats?url=${encodeURIComponent(url)}`);
// //       const data = await res.json();

// //       if (res.ok) {
// //         console.log("Instagram Stats API Response:", data);

// //         // Extract data from the API response
// //         setInfluencerName(data?.data?.data?.name || "John Doe");
// //         setFollowers(data?.data?.data?.usersCount || "500k");
// //         setLikes(data?.data?.data?.avgLikes || "1,500");
// //         setComments(data?.data?.data?.avgComments || "350");
// //         console.log("engagement rate in profile", data?.data?.data?.avgER);

// //         // Extract and set the Engagement Rate (ER) and Fake Followers percentage
// //         const engagementRatePercentage = (data?.data?.data?.avgER * 100).toFixed(2); // Format as percentage
// //         setEngagementRate(engagementRatePercentage + "%");

// //         const fakeFollowersPercentage = (data?.data?.data?.pctFakeFollowers * 100).toFixed(2);
// //         setFakeFollowers(fakeFollowersPercentage + "%");

// //         return fakeFollowersPercentage; // Return the percentage for further checks
// //       } else {
// //         console.error("Error fetching Instagram stats:", data.error);
// //         return null;
// //       }
// //     } catch (error) {
// //       console.error("Error in Instagram stats API call:", error);
// //       return null;
// //     }
// //   };

// //   useEffect(() => {
// //     getInfluencerData();
// //   }, []);

// //   return (
// //     <div className="flex h-[screen]">
// //       <Navbar />
// //       <div className="ml-14 w-screen">
// //         <InfluencerHeader page="Profile" />
// //         <div className="h-full py-8 w-5/6 m-auto">
// //           <div className="bg-white w-5/6 m-auto rounded-lg border-2 shadow-xl pb-8">
// //             <div className="w-full h-[300px]">
// //               <img src={userdata.profilepicinfluet2} className="w-full h-full rounded-tl-lg rounded-tr-lg" />
// //             </div>
// //             <div className="flex flex-col items-center -mt-20">
// //               <img
// //                 src={userdata.profilepicinfluet}
// //                 className="w-40 h-40 border-4 border-white bg-gray-50 rounded-full"
// //               />
// //               <div className="flex items-center space-x-2 mt-2">
// //                 {/* Show Dummy Full Name */}
// //                 <p className="text-2xl">{userdata.fullname}</p>
// //                 <span className="bg-blue-500 rounded-full p-1" title="Verified">
// //                   <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
// //                   </svg>
// //                 </span>
// //               </div>
// //               <p className="text-gray-700">Influencer</p>
// //               <p className="text-sm text-gray-500">{userdata.city + ", " + userdata.country}</p>
// //             </div>
// //             <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
// //               <div className="flex items-center space-x-4 mt-2">
// //                 <NavLink to="/InfluencerProfileEdit" state={userdata}>
// //                   <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
// //                     <FaUserEdit size={17} />
// //                     <span>Edit Profile</span>
// //                   </button>
// //                 </NavLink>
// //                 {adrequired === false ? (
// //                   <button
// //                     onClick={async (e) => {
// //                       e.preventDefault();
// //                       try {
// //                         const res = await fetch("influencer/adsrequired", {
// //                           method: "PUT",
// //                           headers: { "Content-Type": "application/json" },
// //                           body: JSON.stringify({ email: userdata.email }),
// //                         });
// //                         const data = await res.json();
// //                         if (data.success === true) {
// //                           toast.success(data.message);
// //                         }
// //                         setAdrequired(true);
// //                       } catch (err) {
// //                         console.log(err);
// //                       }
// //                     }}
// //                     className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
// //                   >
// //                     <span>Request Ads</span>
// //                   </button>
// //                 ) : (
// //                   <button
// //                     onClick={async (e) => {
// //                       e.preventDefault();
// //                       try {
// //                         const res = await fetch("influencer/adsrequiredremove", {
// //                           method: "PUT",
// //                           headers: { "Content-Type": "application/json" },
// //                           body: JSON.stringify({ email: userdata.email }),
// //                         });
// //                         const data = await res.json();
// //                         if (data.success === true) {
// //                           toast.success(data.message);
// //                         }
// //                         setAdrequired(false);
// //                       } catch (err) {
// //                         console.log(err);
// //                       }
// //                     }}
// //                     className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
// //                   >
// //                     <span>Remove Request</span>
// //                   </button>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Personal Information Section */}
// //           <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
// //             <div className="w-full flex flex-col 2xl:w-1/3">
// //               <div className="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
// //                 <h4 className="text-xl text-gray-900 font-bold">Personal Information</h4>
// //                 <ul className="mt-2 text-gray-700">
// //                   <li className="flex border-y py-2">
// //                     <span className="font-bold w-24">Full name:</span>
// //                     <span className="text-gray-700">{userdata.fullname || "John Doe"}</span> {/* Show Dummy Full Name */}
// //                   </li>

// //                   <li className="flex border-b py-2">
// //                     <span className="font-bold w-24">Mobile:</span>
// //                     <span className="text-gray-700">{userdata.phone}</span>
// //                   </li>
// //                   <li className="flex border-b py-2">
// //                     <span className="font-bold w-24">Email:</span>
// //                     <span className="text-gray-700">{userdata.email}</span>
// //                   </li>
// //                   <li className="flex border-b py-2">
// //                     <span className="font-bold w-24">Location:</span>
// //                     <span className="text-gray-700">
// //                       {userdata.city + ", " + userdata.state + ", " + userdata.country}
// //                     </span>
// //                   </li>
// //                   <li className="flex border-b py-2">
// //                     <span className="font-bold w-24">category:</span>
// //                     <span className="text-gray-700">{userdata.category}</span>
// //                   </li>
                  
// //                   <li className="flex border-b py-2">
// //                     <span className="font-bold w-24">costing:</span>
// //                     <span className="text-gray-700">{userdata.costingPerSegment}</span>
// //                   </li>
// //                   <li className="flex border-b py-2">
// //                     <span className="font-bold w-24">Language:</span>
// //                     <span className="text-gray-700">English, Hindi</span>
// //                   </li>
                 
// //                   <li className="flex items-center border-b py-2 space-x-2">
// //                     <span className="font-bold w-24">Elsewhere:</span>
// //                     <a target="_blank" href={userdata.facebookURL} title="Facebook">
// //                       <BsFacebook size={20} color="#3b5998" />
// //                     </a>
// //                     <a target="_blank" href={userdata.youtubeLink} title="youtube">
// //                     <BsYoutube size={20} color="#3b5998" />
// //                     </a>
// //                     <a target="_blank" href={userdata.instagramURL} title="Instagram">
// //                       <BsInstagram size={20} color="#C13584" />
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default InfluencerProfile;





// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import InfluencerHeader from "./InfluencerHeader";
// import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const InfluencerProfile = () => {
//   const [userdata, setuserdata] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [navbarOpen, setNavbarOpen] = useState(true);

//   useEffect(() => {
//     const influencerId = localStorage.getItem("influencerID");
//     if (!influencerId) return;

//     fetch(`https://server-side-influencer.onrender.com/influencer/getInfluencer/${influencerId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setuserdata(data.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching influencer data:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="font-sans bg-white min-h-screen flex flex-col items-center">
//       <Navbar setNavbarOpen={setNavbarOpen} />
//       <div className={`ml-${navbarOpen ? '72' : '20'} w-screen`}> 
//         <InfluencerHeader page="Profile" />

//         <div className="relative h-96 w-full bg-gray-200 flex justify-center items-center">
//           <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${userdata.profilepicinfluet2})` }}></div>
//           <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//           <div className="absolute bottom-[-50px] flex flex-col items-center">
//             <img className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" src={userdata.profilepicinfluet} alt="Profile" />
//           </div>
//         </div>

//         <div className="mt-16 px-8 py-12 bg-white rounded-t-2xl shadow-lg text-center w-3/4 mx-auto">
//           <div className="grid grid-cols-2 gap-4 text-left justify-center mx-auto w-full max-w-lg">
//             <p><strong>Full Name:</strong> {userdata.fullname || "John Doe"}</p>
//             <p><strong>Mobile:</strong> {userdata.phone || "N/A"}</p>
//             <p><strong>Email:</strong> {userdata.email || "N/A"}</p>
//             <p><strong>Location:</strong> {userdata.city}, {userdata.state}, {userdata.country}</p>
//             <p><strong>Category:</strong> {userdata.category || "N/A"}</p>
//             <p><strong>Costing:</strong> {userdata.costingPerSegment || "N/A"}</p>
//             <p><strong>Language:</strong> English, Hindi</p>
//             <p className="flex items-center space-x-2">
//               <strong>Socials:</strong>
//               <a target="_blank" href={userdata.facebookURL} title="Facebook"><BsFacebook size={20} color="#3b5998" /></a>
//               <a target="_blank" href={userdata.youtubeLink} title="YouTube"><BsYoutube size={20} color="#3b5998" /></a>
//               <a target="_blank" href={userdata.instagramURL} title="Instagram"><BsInstagram size={20} color="#C13584" /></a>
//             </p>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default InfluencerProfile;




import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import EditIcon from '@mui/icons-material/Edit';
import InfluencerHeader from "./InfluencerHeader";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfluencerProfile = () => {
  const [userdata, setuserdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [navbarOpen, setNavbarOpen] = useState(true);

  useEffect(() => {
    const influencerId = localStorage.getItem("influencerID");
    if (!influencerId) return;

    fetch(`https://server-side-influencer.onrender.com/influencer/getInfluencer/${influencerId}`)
      .then((response) => response.json())
      .then((data) => {
        setuserdata(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching influencer data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex h-screen">
      <Navbar /> {/* Navbar stays fixed on the left */}
      <div className="w-screen"> 
        <InfluencerHeader page="Profile" />

        <div className="relative h-96 w-full bg-gray-200 flex justify-center items-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${userdata.profilepicinfluet2 || "https://i.postimg.cc/QM0NNSx2/dummyd.png"})` }}></div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-[-50px] flex flex-col items-center relative">
          <img 
      className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" 
      src={userdata.profilepicinfluet || "https://i.postimg.cc/brqZVdrP/dummypic.jpg"} 
      alt="Profile"
    />

          <a href="/InfluencerProfileEdit" className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md cursor-pointer">
            <EditIcon className="text-gray-600" />
          </a>
          </div>
        </div>


   {/*p */}
   <div 
  style={{ marginTop: '80px' }}   
  className="px-8 py-12 bg-white rounded-t-2xl shadow-lg text-center w-3/4 mx-auto"
>
          <div className="grid grid-cols-2 gap-4 text-left justify-center mx-auto w-full max-w-lg">
            <p><strong>Full Name:</strong> {userdata.fullname || "John Doe"}</p>
            <p><strong>Mobile:</strong> {userdata.phone || "N/A"}</p>
            <p><strong>Email:</strong> {userdata.email || "N/A"}</p>
            <p><strong>Location:</strong> {userdata.city}, {userdata.state}, {userdata.country}</p>
            <p><strong>Category:</strong> {userdata.category || "N/A"}</p>
            <p><strong>Costing:</strong> {userdata.costingPerSegment || "N/A"}</p>
            <p><strong>Language:</strong> English, Hindi</p>
            <p className="flex items-center space-x-2">
              <strong>Socials:</strong>
              <a target="_blank" href={userdata.facebookURL} title="Facebook"><BsFacebook size={20} color="#3b5998" /></a>
              <a target="_blank" href={userdata.youtubeLink} title="YouTube"><BsYoutube size={20} color="#3b5998" /></a>
              <a target="_blank" href={userdata.instagramURL} title="Instagram"><BsInstagram size={20} color="#C13584" /></a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InfluencerProfile;
