


// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import NotificationsIcon from '@mui/icons-material/Notifications'; 
// import io from 'socket.io-client';

// const InfluencerHeader = ({ page, getCampaigns }) => {  
//   const [userdata, setuserdata] = useState([]);
//   const [notifications, setNotifications] = useState([]); 
//   const [isPermissionGranted, setIsPermissionGranted] = useState(false);
//   const navigate = useNavigate();  

//   const getInfluencerData = () => {
//     const influencerId = localStorage.getItem("influencerID");

//     if (!influencerId) {
//       console.log("No influencer ID found in localStorage.");
//       return;
//     }

//     fetch(`https://server-side-influencer.onrender.com/influencer/getInfluencer/${influencerId}`)
//       .then(response => response.json())
//       .then(data => {
//         setuserdata(data.data);
//       })
//       .catch(err => {
//         console.error("Error fetching influencer data:", err);
//       });
//   };

//   const requestNotificationPermission = () => {
//     if ('Notification' in window) {
//       Notification.requestPermission().then((permission) => {
//         setIsPermissionGranted(permission === 'granted');
//       });
//     } else {
//       console.log('Browser does not support notifications.');
//     }
//   };

//   const showBrowserNotification = (title, options) => {
//     if ('Notification' in window && Notification.permission === 'granted') {
//       new Notification(title, options);
//     }
//   };

//   const handleNotificationClick = () => {
//     navigate('/notifyinflueencers', { state: { notification: notifications } });
//   };

//   useEffect(() => {
//     requestNotificationPermission();
//     const socket = io('https://server-side-influencer-1.onrender.com'); 

//     socket.on('newCampaign', (data) => {
//       setNotifications(prevNotifications => [...prevNotifications, data.message]);  
//       showBrowserNotification('New Campaign Live!', {
//         body: data.message,
//         icon: '/path/to/icon.png',
//       });
//       getCampaigns();  
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [getCampaigns]);

//   useEffect(() => {
//     getInfluencerData(); 
//   }, []);

//   return (
//     <div className="h-20 flex items-center justify-between mx-20 max-sm:mx-2 w-full border-b-2">
//       <nav>
//         <p className="font-bold">Influencer &gt; {page}</p>  
//       </nav>
//       <div className="flex items-center">
//         <NavLink to='/InfluencerProfile'>
//           <div className="flex items-center space-x-4">
//             <div>
//               <img className="w-10 h-10 rounded-full" src={userdata.profilepicinfluet} alt="" />
//             </div>
//             <div className="font-medium hover:text-blue-700 cursor-pointer">
//               <div>Hi, {userdata.fullname}</div>
//             </div>
//           </div>
//         </NavLink>
//         <div className="ml-4 flex items-center relative">
//           <div onClick={handleNotificationClick} className="relative">
//             <NotificationsIcon className="cursor-pointer hover:text-blue-700" />
//             {notifications.length > 0 && (
//               <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
//                 {notifications.length}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfluencerHeader;





import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import io from 'socket.io-client';


const InfluencerHeader = ({ page, getCampaigns }) => {
  const [userdata, setuserdata] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const navigate = useNavigate();

  const getInfluencerData = () => {
    const influencerId = localStorage.getItem("influencerID");

    if (!influencerId) {
      console.log("No influencer ID found in localStorage.");
      return;
    }

    fetch(`https://server-side-influencer.onrender.com/influencer/getInfluencer/${influencerId}`)
      .then(response => response.json())
      .then(data => {
        setuserdata(data.data);
      })
      .catch(err => {
        console.error("Error fetching influencer data:", err);
      });
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        setIsPermissionGranted(permission === 'granted');
      });
    } else {
      console.log('Browser does not support notifications.');
    }
  };

  const showBrowserNotification = (title, options) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, options);
    }
  };

  const handleNotificationClick = () => {
    navigate('/notifyinflueencers', { state: { notification: notifications } });
  };

  useEffect(() => {
    requestNotificationPermission();
    const socket = io('https://server-side-influencer-1.onrender.com'); 

    socket.on('newCampaign', (data) => {
      setNotifications(prevNotifications => [...prevNotifications, data.message]);
      showBrowserNotification('New Campaign Live!', {
        body: data.message,
        icon: '/path/to/icon.png',
      });
      getCampaigns(); 
    });

    return () => {
      socket.disconnect();
    };
  }, [getCampaigns]);

  useEffect(() => {
    getInfluencerData();
  }, []);

  return (
    <div className="h-20 flex items-center justify-between mx-auto w-full px-4 sm:px-10 border-b-2">
      <nav>
        <p className="font-bold text-xl">Influencer &gt; {page}</p>
      </nav>

      <div className="flex items-center space-x-4">
        {/* Profile Section */}
        <NavLink to='/InfluencerProfile'>
          <div className="flex items-center space-x-4">
            {/* <div>
              <img className="w-10 h-10 rounded-full" src={userdata.profilepicinfluet} alt="User Profile" />
            </div> */}

<div>
  <img
    className="w-10 h-10 rounded-full"
    src={userdata.profilepicinfluet || "https://i.postimg.cc/brqZVdrP/dummypic.jpg"} 
    alt="User Profile"
  />
</div>

            <div className="font-medium hover:text-blue-700 cursor-pointer">
              <div>Hi, {userdata.fullname}</div>
            </div>
          </div>
        </NavLink>

        {/* Notification Icon */}
        <div className="ml-4 flex items-center relative">
          <div onClick={handleNotificationClick} className="relative">
            <NotificationsIcon className="cursor-pointer hover:text-blue-700 text-xl" />
            {notifications.length > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                {notifications.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHeader;

