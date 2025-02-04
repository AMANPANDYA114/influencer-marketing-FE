


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FiBell } from "react-icons/fi";
// import { useNavigate } from 'react-router-dom';
// import { io } from "socket.io-client";

// const ManagerHeader = (props) => {
//   const [managerName, setManagerName] = useState('');
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0); 
//   const navigate = useNavigate();

//   // Request notification permission
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

//   // Function to show browser notification
//   const showBrowserNotification = (title, options) => {
//     if ("Notification" in window && Notification.permission === "granted") {
//       new Notification(title, options);
//     }
//   };

//   // Navigate to the /notify page with the notification data
//   // const handleNotificationClick = (notification) => {
//   //   navigate('/notify', { state: notification });  // Pass the notification data to /notify page
//   // };



//   const handleNotificationClick = () => {
//     navigate('/notify', { state: notifications });  // Pass all notifications to /notify page
//   };
  
//   useEffect(() => {
//     const fetchManagerData = async () => {
//       try {
//         const managerID = localStorage.getItem('managerID');
//         const token = localStorage.getItem("mangertoken");

//         if (!token) {
//           navigate("/ManagerLogin");
//           return;
//         }
//         if (!managerID) {
//           console.error("Manager ID not found in localStorage.");
//           return;
//         }

//         const res = await axios.get(`https://server-side-influencer.onrender.com/manager/managers/${managerID}`);
//         console.log("Manager Data Header Response:", res); 
        
//         if (res.data && res.data.success === true && res.data.data.name) {
//           setManagerName(res.data.data.name);
//         }
//       } catch (err) {
//         console.error('Error fetching manager data:', err);
//       }
//     };

//     fetchManagerData();

//     requestNotificationPermission();

//     const socket = io("https://server-side-influencer-1.onrender.com");

//     socket.on("newMessage", (data) => {
//       console.log("Notification received:", data);

//       const { message, data: notificationData } = data;

//       setNotifications((prev) => [
//         ...prev,
//         {
//           message,
//           shopName: notificationData.shopName,
//           platform: notificationData.platform,
//           budget: notificationData.budget,
//         },
//       ]);

//       setUnreadCount((prev) => prev + 1);

//       showBrowserNotification(message, {
//         body: `Brand: ${notificationData.shopName}\nPlatform: ${notificationData.platform}\nBudget: ${notificationData.budget}`,
//         icon: "https://via.placeholder.com/100",
//       });
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="h-20 flex items-center justify-between mx-20 w-[screen] border-b-2">
//       <nav className="flex items-center">
//         <p className="font-bold">Manager &gt; {props.page}</p>
//       </nav>

//       <div className="flex items-center space-x-6">
//         <div className="relative">
//           <FiBell className="cursor-pointer" onClick={() => handleNotificationClick(notifications[notifications.length - 1])} />
//           {unreadCount > 0 && (
//             <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center" style={{ marginTop: '-20px',marginLeft: '10px' }}>
//               {unreadCount}
//             </span>
//           )}
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="">
//             <img className="w-10 h-10 rounded-full group" src={'https://i.postimg.cc/rwYFBbkT/agency.jpg'} alt="DP" />
//           </div>
//           <div className="font-medium">
//             <div>Hi, {managerName || 'Agency'}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManagerHeader;





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiBell } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { io } from "socket.io-client";

const ManagerHeader = (props) => {
  const [managerName, setManagerName] = useState('');
  const [managerProfilePic, setManagerProfilePic] = useState(''); // New state for profile picture
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0); 
  const navigate = useNavigate();

  // Request notification permission
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

  // Function to show browser notification
  const showBrowserNotification = (title, options) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, options);
    }
  };

  // Navigate to the /notify page with the notification data
  const handleNotificationClick = () => {
    navigate('/notify', { state: notifications });  // Pass all notifications to /notify page
  };
  
  useEffect(() => {
    const fetchManagerData = async () => {
      try {
        const managerID = localStorage.getItem('managerID');
        const token = localStorage.getItem("mangertoken");

        if (!token) {
          navigate("/ManagerLogin");
          return;
        }
        if (!managerID) {
          console.error("Manager ID not found in localStorage.");
          return;
        }

        const res = await axios.get(`https://server-side-influencer.onrender.com/manager/managers/${managerID}`);
        console.log("Manager Data Header Response:", res); 
        
        if (res.data && res.data.success === true && res.data.data.name) {
          setManagerName(res.data.data.name);
          // Set profile pic if available, else fallback to default
          setManagerProfilePic(res.data.data.profilePic || 'https://via.placeholder.com/150'); // Default dummy image
        }
      } catch (err) {
        console.error('Error fetching manager data:', err);
      }
    };

    fetchManagerData();

    requestNotificationPermission();

    const socket = io("https://server-side-influencer-1.onrender.com");

    socket.on("newMessage", (data) => {
      console.log("Notification received:", data);

      const { message, data: notificationData } = data;

      setNotifications((prev) => [
        ...prev,
        {
          message,
          shopName: notificationData.shopName,
          platform: notificationData.platform,
          budget: notificationData.budget,
        },
      ]);

      setUnreadCount((prev) => prev + 1);

      showBrowserNotification(message, {
        body: `Brand: ${notificationData.shopName}\nPlatform: ${notificationData.platform}\nBudget: ${notificationData.budget}`,
        icon: "https://via.placeholder.com/100",
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="h-20 flex items-center justify-between mx-20 w-[screen] border-b-2">
      <nav className="flex items-center">
        <p className="font-bold">Manager &gt; {props.page}</p>
      </nav>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <FiBell className="cursor-pointer" onClick={() => handleNotificationClick(notifications[notifications.length - 1])} />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center" style={{ marginTop: '-20px', marginLeft: '10px' }}>
              {unreadCount}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="">
            {/* Display profile picture dynamically, with a fallback to a dummy image */}
            <img className="w-10 h-10 rounded-full group" src={managerProfilePic} alt="DP" />
          </div>
          <div className="font-medium">
            <div>Hi, {managerName || 'Agency'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerHeader;
