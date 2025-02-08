


// import React, { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2"; 
// import { io } from "socket.io-client"; 
// import ManagerHeader from './ManagerHeader';
// import Navbar from "./Navbar";
// import { useNavigate } from 'react-router-dom';

// const PendingRequest = () => {
//   const [profilecard, setProfilecard] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("mangertoken");
//     if (!token) {
//       navigate('/ManagerLogin');
//       return;
//     }
//   }, [navigate]);

//   useEffect(() => {
//     fetch("https://server-side-influencer-1.onrender.com/brand/messages")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setProfilecard(data.data);
//         }
//       });
//   }, []);

//   const handleCardClick = (brandData) => {
//     navigate('/requestpage', { state: { brandData } }); // Pass brandData to the new page
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <Navbar />
//       <ManagerHeader page="Influencer Requirements" />
//       <div className="flex flex-col w-full flex-grow p-8 items-center">
//         <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 text-shadow">Unlock Exclusive Influencer Requirements from Leading Brands</h2>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center w-full">
//           {profilecard.length === 0 ? (
//             <h1 className="text-2xl font-bold text-center text-gray-600">No Requirements Found</h1>
//           ) : (
//             profilecard.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 w-full max-w-md ml-[13%]"
//                 onClick={() => handleCardClick(item)} // Pass the item to the handler
//               >
//                 <div
//                   className="relative"
//                   style={{
//                     backgroundImage: `url(${item.brandbackgroundimage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     height: "150px",
//                     borderRadius: "1rem 1rem 0 0",
//                   }}
//                 >
//                   <div className="flex justify-center mb-6">
//                     <img
//                       src={item.brandLogo}
//                       alt="Brand Logo"
//                       className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
//                     />
//                   </div>
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
//                   </div>
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




// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import ManagerHeader from "./ManagerHeader";
// import Navbar from "./Navbar";

// const PendingRequest = () => {
//   const [profilecard, setProfilecard] = useState([]);
//   const navigate = useNavigate();

//   // Check if the manager is authenticated
//   useEffect(() => {
//     const token = localStorage.getItem("mangertoken");
//     if (!token) {
//       navigate('/ManagerLogin');
//       return;
//     }
//   }, [navigate]);

//   // Fetch data to display in the profile cards
//   useEffect(() => {
//     fetch("https://server-side-influencer-1.onrender.com/brand/messages")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setProfilecard(data.data);
//         }
//       });
//   }, []);

//   // Handler for clicking on a card
//   const handleCardClick = (brandData) => {
//     navigate('/requestpage', { state: { brandData } }); // Pass brandData to the new page
//   };

//   return (
//     <div className="h-[screen] flex">
//       <Navbar />
//       <div className="ml-14 w-screen max-sm:ml-0">
//         <ManagerHeader page="Influencer Requirements" />
//         <div className="flex flex-col w-full flex-grow p-8 items-center">
//           <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 text-shadow">Unlock Exclusive Influencer Requirements from Leading Brands</h2>
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center w-full">
//             {profilecard.length === 0 ? (
//               <h1 className="text-2xl font-bold text-center text-gray-600">No Requirements Found</h1>
//             ) : (
//               profilecard.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 w-full max-w-md ml-[13%]"
//                   onClick={() => handleCardClick(item)} // Pass the item to the handler
//                 >
//                   <div
//                     className="relative"
//                     style={{
//                       backgroundImage: `url(${item.brandbackgroundimage})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       height: "150px",
//                       borderRadius: "1rem 1rem 0 0",
//                     }}
//                   >
//                     <div className="flex justify-center mb-6">
//                       <img
//                         src={item.brandLogo}
//                         alt="Brand Logo"
//                         className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4 text-center">
//                     <h3 className="text-2xl font-semibold text-gray-800">{item.shopName}</h3>
//                     <p className="text-sm text-gray-500 mt-2">{item.brandType}</p>
//                   </div>
//                   <div className="border-t border-gray-300 py-4">
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-start space-x-2 text-gray-700">
//                         <p className="font-bold text-xs">Requirement:</p>
//                         <p className="text-xs">{item.message}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PendingRequest;



import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ManagerHeader from "./ManagerHeader";
import Navbar from "./Navbar";

const PendingRequest = () => {
  const [profilecard, setProfilecard] = useState([]);
  const navigate = useNavigate();

  // Check if the manager is authenticated
  useEffect(() => {
    const token = localStorage.getItem("mangertoken");
    if (!token) {
      navigate('/ManagerLogin');
      return;
    }
  }, [navigate]);

  // Fetch data to display in the profile cards
  useEffect(() => {
    fetch("https://server-side-influencer.onrender.com/brand/messages")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProfilecard(data.data);
        }
      });
  }, []);

  // Handler for clicking on a card
  const handleCardClick = (brandData) => {
    navigate('/requestpage', { state: { brandData } }); // Pass brandData to the new page
  };

  return (
    <div className="flex h-screen">
      <Navbar /> {/* Sidebar/Navbar component */}
      <div className="ml-14 w-full flex flex-col flex-grow">
        <ManagerHeader page="Influencer Requirements" />
        <div className="flex flex-col w-full flex-grow p-8 items-center">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 text-shadow">
            Unlock Exclusive Influencer Requirements from Leading Brands
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center w-full">
            {profilecard.length === 0 ? (
              <h1 className="text-2xl font-bold text-center text-gray-600">No Requirements Found</h1>
            ) : (
              profilecard.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 w-full max-w-md ml-[13%]"
                  onClick={() => handleCardClick(item)} // Pass the item to the handler
                >
                  <div
                    className="relative"
                    style={{
                      backgroundImage: `url(${item.brandbackgroundimage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "150px",
                      borderRadius: "1rem 1rem 0 0",
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <img
                        src={item.brandLogo}
                        alt="Brand Logo"
                        className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
                      />
                    </div>
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
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingRequest;
