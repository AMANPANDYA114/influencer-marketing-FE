

// import React from "react";
// import { useLocation } from "react-router-dom";

// const NotificationInfluencer = () => {
//   const location = useLocation();
//   const { notification } = location.state || { notification: "No new notifications" };

//   return (
//     <div className="notification-container">
//       <h1>Notification</h1>
//       <p>{notification}</p> {/* Display the notification message */}
//     </div>
//   );
// };

// export default NotificationInfluencer;






import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Import Navbar component

const NotificationInfluencer = () => {
  const location = useLocation();
  const { notification } = location.state || { notification: "No new notifications" };

  return (
    <div className="flex">
      {/* Navbar positioned on the left side of the screen */}
      <div className="fixed top-0 left-0 h-full text-white p-4">
        <Navbar /> {/* Display the Navbar on the left */}
      </div>

      {/* Notification content with space on the left to avoid overlap with Navbar */}
      <div className="ml-1/4 p-4">
        <h1 className="text-2xl font-bold ml-[70px]">Notification</h1>
        {/* <p className="mt-2">{notification}</p> Display the notification message */}
        <p className="mt-[40px]">{notification}</p>
      </div>
    </div>
  );
};

export default NotificationInfluencer;
