


// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2"; // Import SweetAlert2
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

//   const sendMessage = () => {
//     // Show SweetAlert after the request is sent
//     Swal.fire({
//       title: "Request Sent",
//       text: "Your request has been sent. You will be contacted through email for this post.",
//       icon: "success",
//       confirmButtonText: "OK",
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
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

//                 {/* Send Request Button */}
//                 <div className="flex justify-center my-5">
//                   <button
//                     onClick={sendMessage} // Call sendMessage when clicked
//                     className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg transition duration-200 transform hover:scale-105 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   >
//                     Send Request
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





// import React, { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2"; // Import SweetAlert2
// import ManagerHeader from './ManagerHeader';
// import Navbar from "./Navbar";

// const PendingRequest = () => {
//   const [profilecard, setProfilecard] = useState([]);

//   useEffect(() => {
//     // Fetch data from API
//     fetch("https://server-side-influencer-1.onrender.com/brand/messages")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setProfilecard(data.data); // Set the fetched data
//         }
//       });
//   }, []);

//   // Function to send the message (trigger the API call)
//   const sendMessage = async (messageId) => {
//     const managerId = localStorage.getItem('managerID'); // Get manager ID from local storage

//     if (!managerId) {
//       Swal.fire({
//         title: "Error",
//         text: "Manager ID not found. Please login again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//       return;
//     }

//     // Send the GET request to the backend
//     try {
//       const response = await fetch(
//         `https://server-side-influencer-1.onrender.com/manager/send-email/${messageId}/${managerId}`,
//         {
//           method: "GET",
//         }
//       );
//       const data = await response.json();

//       // Check if the email was sent successfully
//       if (data.success) {
//         Swal.fire({
//           title: "Request Sent",
//           text: "Your request has been sent. You will be contacted through email for this post.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//       } else {
//         Swal.fire({
//           title: "Error",
//           text: "There was an error sending your request. Please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       }
//     } catch (error) {
//       console.error("Error sending request:", error);
//       Swal.fire({
//         title: "Error",
//         text: "There was an issue with the server. Please try again later.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
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

//                 {/* Send Request Button */}
//                 <div className="flex justify-center my-5">
//                   <button
//                     onClick={() => sendMessage(item._id)} // Pass messageId to the function
//                     className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg transition duration-200 transform hover:scale-105 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   >
//                     Send Request
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





// import React, { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2"; // Import SweetAlert2
// import { io } from "socket.io-client"; // Import Socket.IO client
// import ManagerHeader from './ManagerHeader';
// import Navbar from "./Navbar";

// const PendingRequest = () => {
//   const [profilecard, setProfilecard] = useState([]);
//   const [notifications, setNotifications] = useState([]);

//   // Function to request notification permission
//   const requestNotificationPermission = () => {
//     if ("Notification" in window) {
//       Notification.requestPermission().then((permission) => {
//         if (permission === "granted") {
//           console.log("Notification permission granted.");
//         } else {
//           console.log("Notification permission denied.");
//         }
//       });
//     } else {
//       console.log("Browser does not support notifications.");
//     }
//   };

//   // Function to show a browser notification
//   const showBrowserNotification = (title, options) => {
//     if ("Notification" in window && Notification.permission === "granted") {
//       new Notification(title, options);
//     }
//   };

//   // Socket.IO setup
//   useEffect(() => {
//     // Request notification permission on component mount
//     requestNotificationPermission();

//     // Connect to the Socket.IO server
//     const socket = io("http://localhost:8000"); // Replace with your server's URL

//     // Listen for the 'newMessage' event
//     socket.on("newMessage", (data) => {
//       console.log("Notification received:", data);

//       // Extract the data
//       const { message, data: notificationData } = data;

//       // Add notification to the state
//       setNotifications((prev) => [
//         ...prev,
//         {
//           message,
//           shopName: notificationData.shopName,
//           platform: notificationData.platform,
//           budget: notificationData.budget,
//         },
//       ]);

//       // Show a browser notification
//       showBrowserNotification(message, {
//         body: `Brand: ${notificationData.shopName}\nPlatform: ${notificationData.platform}\nBudget: ${notificationData.budget}`,
//         icon: "https://via.placeholder.com/100", // Replace with your icon URL
//       });
//     });

//     // Cleanup socket connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     // Fetch data from API
//     fetch("https://server-side-influencer-1.onrender.com/brand/messages")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setProfilecard(data.data); // Set the fetched data
//         }
//       });
//   }, []);

//   // Function to send the message (trigger the API call)
//   const sendMessage = async (messageId) => {
//     const managerId = localStorage.getItem('managerID'); // Get manager ID from local storage

//     if (!managerId) {
//       Swal.fire({
//         title: "Error",
//         text: "Manager ID not found. Please login again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//       return;
//     }

//     // Send the GET request to the backend
//     try {
//       const response = await fetch(
//         `https://server-side-influencer-1.onrender.com/manager/send-email/${messageId}/${managerId}`,
//         {
//           method: "GET",
//         }
//       );
//       const data = await response.json();

//       // Check if the email was sent successfully
//       if (data.success) {
//         Swal.fire({
//           title: "Request Sent",
//           text: "Your request has been sent. You will be contacted through email for this post.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//       } else {
//         Swal.fire({
//           title: "Error",
//           text: "There was an error sending your request. Please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       }
//     } catch (error) {
//       console.error("Error sending request:", error);
//       Swal.fire({
//         title: "Error",
//         text: "There was an issue with the server. Please try again later.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
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

//                 {/* Send Request Button */}
//                 <div className="flex justify-center my-5">
//                   <button
//                     onClick={() => sendMessage(item._id)} // Pass messageId to the function
//                     className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg transition duration-200 transform hover:scale-105 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   >
//                     Send Request
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//         <ToastContainer autoClose={500} />
//         {/* Notifications */}
//         <div>
//           <h2 className="text-2xl font-extrabold text-center mb-8 text-gray-800 text-shadow">Notifications</h2>
//           <ul id="notifications">
//             {notifications.map((notif, index) => (
//               <li key={index}>
//                 <strong>{notif.message}</strong> by {notif.shopName} on {notif.platform} 
//                 (Budget: {notif.budget})
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PendingRequest;




import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2"; // Import SweetAlert2
import { io } from "socket.io-client"; // Import Socket.IO client
import ManagerHeader from './ManagerHeader';
import Navbar from "./Navbar";

const PendingRequest = () => {
  const [profilecard, setProfilecard] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Function to request notification permission
  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      });
    } else {
      console.log("Browser does not support notifications.");
    }
  };

  // Function to show a browser notification
  const showBrowserNotification = (title, options) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, options);
    }
  };

  // Socket.IO setup
  useEffect(() => {
    // Request notification permission on component mount
    requestNotificationPermission();

    // Connect to the Socket.IO server
    // const socket = io("http://localhost:8000"); // Ensure this is the correct URL
    const socket = io("https://server-side-influencer-1.onrender.com");
    // Listen for the 'newMessage' event
    socket.on("newMessage", (data) => {
      console.log("Notification received:", data);

      // Extract the data
      const { message, data: notificationData } = data;

      // Add notification to the state
      setNotifications((prev) => [
        ...prev,
        {
          message,
          shopName: notificationData.shopName,
          platform: notificationData.platform,
          budget: notificationData.budget,
        },
      ]);

      // Show a browser notification
      showBrowserNotification(message, {
        body: `Brand: ${notificationData.shopName}\nPlatform: ${notificationData.platform}\nBudget: ${notificationData.budget}`,
        icon: "https://via.placeholder.com/100", // Replace with your icon URL
      });
    });

    // Cleanup socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Fetch data from API
    fetch("https://server-side-influencer-1.onrender.com/brand/messages")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProfilecard(data.data); // Set the fetched data
        }
      });
  }, []);

  // Function to send the message (trigger the API call)
  const sendMessage = async (messageId) => {
    const managerId = localStorage.getItem('managerID'); // Get manager ID from local storage

    if (!managerId) {
      Swal.fire({
        title: "Error",
        text: "Manager ID not found. Please login again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Send the GET request to the backend
    try {
      const response = await fetch(
        `https://server-side-influencer-1.onrender.com/manager/send-email/${messageId}/${managerId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      // Check if the email was sent successfully
      if (data.success) {
        Swal.fire({
          title: "Request Sent",
          text: "Your request has been sent. You will be contacted through email for this post.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "There was an error sending your request. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error sending request:", error);
      Swal.fire({
        title: "Error",
        text: "There was an issue with the server. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
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

                {/* Send Request Button */}
                <div className="flex justify-center my-5">
                  <button
                    onClick={() => sendMessage(item._id)} // Pass messageId to the function
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg transition duration-200 transform hover:scale-105 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Send Request
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <ToastContainer autoClose={500} />
        {/* Notifications */}
        <div>
          <h2 className="text-2xl font-extrabold text-center mb-8 text-gray-800 text-shadow">Notifications</h2>
          <ul id="notifications">
            {notifications.map((notif, index) => (
              <li key={index}>
                <strong>{notif.message}</strong> by {notif.shopName} on {notif.platform} 
                (Budget: {notif.budget})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PendingRequest;
