

// // import React from "react";
// // import { useLocation } from "react-router-dom";

// // const NotificationInfluencer = () => {
// //   const location = useLocation();
// //   const { notification } = location.state || { notification: "No new notifications" };

// //   return (
// //     <div className="notification-container">
// //       <h1>Notification</h1>
// //       <p>{notification}</p> {/* Display the notification message */}
// //     </div>
// //   );
// // };

// // export default NotificationInfluencer;






// import React from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "./Navbar"; // Import Navbar component

// const NotificationInfluencer = () => {
//   const location = useLocation();
//   const { notification } = location.state || { notification: "No new notifications" };

//   return (
//     <div className="flex">
//       {/* Navbar positioned on the left side of the screen */}
//       <div className="fixed top-0 left-0 h-full text-white p-4">
//         <Navbar /> {/* Display the Navbar on the left */}
//       </div>

//       {/* Notification content with space on the left to avoid overlap with Navbar */}
//       <div className="ml-1/4 p-4">
//         <h1 className="text-2xl font-bold ml-[70px]">Notification</h1>
//         {/* <p className="mt-2">{notification}</p> Display the notification message */}
//         <p className="mt-[40px]">{notification}</p>
//       </div>
//     </div>
//   );
// };

// export default NotificationInfluencer;






import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar component

const NotificationInfluencer = () => {
  const location = useLocation();
  
  // Retrieve stored notifications from localStorage, or use an empty array if none are stored
  const [notifications, setNotifications] = useState(
    JSON.parse(localStorage.getItem("notifications")) || []
  );

  // Clear all notifications from localStorage
  const clearNotifications = () => {
    localStorage.removeItem("notifications");
    setNotifications([]); // Clear notifications from state
  };

  // Store notifications in localStorage whenever the list of notifications changes
  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem("notifications", JSON.stringify(notifications)); // Save notifications in localStorage
    }
  }, [notifications]);

  // Handle new notifications passed via location state
  useEffect(() => {
    const { notification } = location.state || { notification: "No new notifications" };
    
    if (notification) {
      // Check if notification is an array, and add it to the current list
      const newNotifications = Array.isArray(notification) ? notification : [notification];
      
      // Avoid adding duplicate notifications
      setNotifications((prevNotifications) => {
        const updatedNotifications = [...prevNotifications, ...newNotifications];
        // Filter out duplicate notifications
        return updatedNotifications.filter((item, index, self) => 
          index === self.findIndex((t) => t === item)
        );
      });
    }
  }, [location.state]);

  return (
    <div className="flex h-screen">
      <Navbar /> {/* Navbar stays fixed on the left */}

      {/* Notification content with space on the left to avoid overlap with Navbar */}
      <div className="ml-1/4 p-4 w-full">
        {/* Clear All Button */}
        <button
          onClick={clearNotifications}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
        >
          Clear All
        </button>

        <h1 className="text-2xl font-bold ml-[70px]">Notifications</h1>
        <div className="mt-[40px]">
          {/* Render each notification on a new line */}
          {notifications.length === 0 ? (
            <p className="text-xl mb-2">No new notifications</p>
          ) : (
            notifications.map((message, index) => (
              <p key={index} className="text-xl mb-2">{message}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationInfluencer;
