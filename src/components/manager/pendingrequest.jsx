

// import React, { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
// import { FiPhoneCall } from "react-icons/fi";
// import { MdEmail } from "react-icons/md";
// import { TiLocation } from "react-icons/ti";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./Navbar";
// import ManagerHeader from "./ManagerHeader";

// const PendingRequest = () => {
//   const [profilecard, setProfilecard] = useState([]);

//   useEffect(() => {
//     // Fetch data from API
//     fetch("https://server-side-influencer-1.onrender.com/brand/messages")
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setProfilecard(data.data); // Set the fetched data
//         }
//       });
//   }, []);

//   const sendMessage = (phoneNumber) => {
//     const message = `Hi, I need more information about your request which you posted in Hypbox`;
//     // Format the phone number for WhatsApp
//     const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
//     // Open WhatsApp with pre-filled message (navigates to WhatsApp)
//     window.location.href = whatsappLink;
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">


//       <Navbar />
//       <ManagerHeader page="New post" />
//       <div className="flex flex-col w-full flex-grow p-8 items-center">
//         <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 text-shadow">New Post</h2>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center w-full">
//           {profilecard.length === 0 ? (
//             <h1 className="text-2xl font-bold text-center text-gray-600">No Post Found</h1>
//           ) : (
//             profilecard.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 w-full max-w-md ml-[13%]" 
//               >
//                 <div className="flex justify-center mb-6">
//                   <img src={item.brandLogo} alt="Brand Logo" className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-lg" />
//                 </div>
//                 <div className="mt-4 text-center">
//                   <h3 className="text-2xl font-semibold text-gray-800">{item.shopName}</h3>
//                   <p className="text-sm text-gray-500 mt-2">{item.brandType}</p>
//                 </div>
//                 <div className="border-t border-gray-300 py-4">
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">Requirement:</p>
//                       <p className="text-xs">{item.message}</p>
//                     </div>
//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">Location:</p>
//                       <p className="text-xs">{item.location}</p>
//                     </div>

//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">Influencer Followers Count:</p>
//                       <p className="text-xs">{item.influencerFollowersCount}</p>
//                     </div>
//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">YouTube Count:</p>
//                       <p className="text-xs">{item.youtubeCount}</p>
//                     </div>
//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">Language:</p>
//                       <p className="text-xs">{item.language}</p>
//                     </div>
//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">Platform:</p>
//                       <p className="text-xs">{item.platform}</p>
//                     </div>
//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">Category:</p>
//                       <p className="text-xs">{item.category}</p>
//                     </div>
//                     <div className="flex items-center justify-start space-x-2 text-gray-700">
//                       <p className="font-bold text-xs">Required count:</p>
//                       <p className="text-xs">{item.influencerCount}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center my-5">
//                   <button
//                     onClick={() => sendMessage(item.whatsappNumber)}
//                     className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold text-xs rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105"
//                   >
//                     <FaWhatsapp size={18} className="mr-2" />
//                     <span>Chat on WhatsApp</span>
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//         <ToastContainer autoClose={500} />
//       </div>
//     </div>
//   );
// };

// export default PendingRequest;





import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import ManagerHeader from "./ManagerHeader";

const PendingRequest = () => {
  const [profilecard, setProfilecard] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("https://server-side-influencer-1.onrender.com/brand/messages")
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setProfilecard(data.data); // Set the fetched data
        }
      });
  }, []);

  const sendMessage = (phoneNumber) => {
    const message = `Hi, I need more information about your request which you posted in Hypbox`;
    // Format the phone number for WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with pre-filled message (navigates to WhatsApp)
    window.location.href = whatsappLink;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ManagerHeader page="New post" />
      <div className="flex flex-col w-full flex-grow p-8 items-center">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 text-shadow">New Post</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center w-full">
          {profilecard.length === 0 ? (
            <h1 className="text-2xl font-bold text-center text-gray-600">No Post Found</h1>
          ) : (
            profilecard.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 w-full max-w-md ml-[13%]"
              >
                <div className="flex justify-center mb-6">
                  <img src={item.brandLogo} alt="Brand Logo" className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-lg" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.shopName}</h3>
                  <p className="text-sm text-gray-500 mt-2">{item.brandType}</p>
                </div>
                <div className="border-t border-gray-300 py-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">Requirement:</p>
                      <p className="text-xs">{item.message}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">Location:</p>
                      <p className="text-xs">{item.location}</p>
                    </div>

                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">Influencer Followers Count:</p>
                      <p className="text-xs">{item.influencerFollowersCount}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">YouTube Count:</p>
                      <p className="text-xs">{item.youtubeCount}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">Language:</p>
                      <p className="text-xs">{item.language}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">Platform:</p>
                      <p className="text-xs">{item.platform}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">Category:</p>
                      <p className="text-xs">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-start space-x-2 text-gray-700">
                      <p className="font-bold text-xs">Required count:</p>
                      <p className="text-xs">{item.influencerCount}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-5">
                  {/* <button
                    onClick={() => sendMessage(item.whatsappNumber)}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold text-xs rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105"
                  >
                    <FaWhatsapp size={18} className="mr-2" />
                    <span>Chat on WhatsApp</span>
                  </button> */}
                </div>
              </div>
            ))
          )}
        </div>
        <ToastContainer autoClose={500} />
      </div>
    </div>
  );
};

export default PendingRequest;


