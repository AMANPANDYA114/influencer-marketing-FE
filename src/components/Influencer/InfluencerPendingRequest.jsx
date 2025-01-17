


// import React, { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
// import { FiPhoneCall } from "react-icons/fi";
// import { MdEmail } from "react-icons/md";
// import { TiLocation } from "react-icons/ti";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./Navbar";

// const InfluencerPendingRequest = () => {
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
//     <div className="flex">
//       <Navbar />
//       <div className="h-screen w-screen">
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5 max-md:px-10">
//           {profilecard.length === 0 ? (
//             <h1 className="text-3xl font-bold text-center">No Request Found</h1>
//           ) : (
//             profilecard.map((item, index) => (
//               <div key={index} className="mt-10 h-[500px] w-[450px] items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl">
//                 <img src={item.brandLogo} className="h-1/3 w-1/3 m-auto mt-5" alt="logo" />
//                 <div className="px-5">
//                   <div className="text-center">
//                     <h3 className="text-3xl font-bold font-dmserif text-neutral-700">{item.shopName}</h3>
//                   </div>
//                   <div className="border-y-2 py-3">
//                     <div className="flex space-x-2.5 items-center mb-5">
//                       <p>Message: {item.message}</p>
//                     </div>
                    
//                     {/* Key details in a horizontal layout */}
//                     <div className="flex flex-wrap justify-between gap-4">

//                       <div>Key heighlighted </div>
                      
//                       <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-4">
//                         <p className="text-sm bg-sky-400">Category: {item.category}</p>
//                         <p className="text-sm bg-sky-400">Budget: {item.budget}</p>
//                         <p className="text-sm bg-sky-400">Location: {item.location}</p>
//                       </div>
//                       <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-4">
//                         <p className="text-sm bg-sky-400">Required count: {item.influencerCount}</p>
//                         <p className="text-sm bg-sky-400">Instagram followers: {item.influencerCount}</p>
//                         <p className="text-sm bg-sky-400">YouTube followers: {item.youtubeCount}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center my-5">
//                   <button
//                     onClick={() => sendMessage(item.whatsappNumber)}
//                     className="flex space-x-2 items-center px-3 py-2 bg-green-500 hover:bg-green-800 rounded-md drop-shadow-md"
//                   >
//                     <FaWhatsapp size={20} className="fill-white" />
//                     <span className="text-white">Chat on WhatsApp</span>
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

// export default InfluencerPendingRequest;





import React from "react";
import Navbar from "./Navbar";

const InfluencerPendingRequest = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">No Request</h1>
      </div>
    </div>
  );
};

export default InfluencerPendingRequest;

