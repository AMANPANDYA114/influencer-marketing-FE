



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import StoreIcon from "@mui/icons-material/Store";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LogoutIcon from "@mui/icons-material/Logout";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(true);  // State for handling open and close sidebar

//   useEffect(() => {
//     const token = localStorage.getItem("mangertoken");
//     if (!token) {
//       navigate("/ManagerLogin");
//     }
//   }, [navigate]);

//   const menus = [
//     { name: "Home", link: "/ManagerHome", icon: HomeIcon },
//     { name: "Influencers Requirements", link: "/request", icon: SearchIcon },
//     { name: "Add Brand", link: "/AddNewBrand", icon: StoreIcon },
//     { name: "Add Influencer", link: "/AddNewInfluencer", icon: PersonAddIcon },
//     { name: "Profile", link: "/ManagerProfile", icon: AccountCircleIcon },
//   ];

//   const logout = () => {
//     try {
//       localStorage.clear();
//       sessionStorage.clear();
//       document.cookie.split(";").forEach((cookie) => {
//         const cookieName = cookie.split("=")[0].trim();
//         document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//       });
//       navigate("/ManagerLogin");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       sessionStorage.clear();
//       navigate("/ManagerLogin");
//     }
//   };

//   return (
//     <div className="relative flex">
//       <div
//         className={`${
//           open ? "w-72" : "w-20"
//         } bg-black p-5 pt-8 relative duration-300 transition-all`}  // This controls the width of the sidebar
//         style={{ height: "1100px" }}  // Sidebar height
//       >
//         {/* Sidebar Toggle Button */}
//         <img
//           src="https://i.postimg.cc/8P1D6Vq6/left-arrow.jpg"
//           className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full transition-transform duration-300 ${
//             !open && "rotate-180"
//           }`}
//           onClick={() => setOpen(!open)}  // Toggle sidebar state with arrow button
//           alt="Toggle Sidebar"
//         />

//         {/* Logo and Title */}
//         <div className="flex gap-x-4 items-center">
//           <img
//             src="https://i.postimg.cc/d1Kgc2Fy/hyboxlog.jpg"
//             className={`cursor-pointer transition-transform duration-500 ${
//               open && "rotate-[360deg]"
//             }`}
//             style={{ width: "50px", height: "50px" }}  // Adjust logo size
//             alt="Logo"
//           />
//           <h1
//             className={`text-white font-medium text-xl transition-transform duration-200 ${
//               !open && "scale-0"  // Hide title when collapsed
//             }`}
//           >
//             HYPBOX
//           </h1>
//         </div>

//         {/* Menu Items */}
//         <ul className="pt-6">
//           {menus.map((menu, index) => (
//             <li
//               key={index}
//               className="flex rounded-md p-2 cursor-pointer hover:bg-gray-700 text-gray-300 text-sm items-center gap-x-4 group"
//             >
//               <menu.icon className="w-5 h-5 group-hover:scale-125 transition-all duration-200" /> {/* Icon grows on hover */}
//               {/* Display text when sidebar is open */}
//               <Link
//                 to={menu.link}
//                 className={`transition-transform duration-200 ${
//                   !open && "hidden"  // Hide text when collapsed
//                 }`}
//               >
//                 {menu.name}
//               </Link>
//             </li>
//           ))}
//           {/* Logout Button */}
//           <li>
//             <button
//               onClick={logout}
//               className="flex items-center p-2 w-full text-white text-sm gap-x-4 cursor-pointer hover:bg-gray-700"
//             >
//               <LogoutIcon className="w-5 h-5 group-hover:scale-125 transition-all duration-200" />
//               <span className={`transition-transform duration-200 ${!open && "hidden"}`}>
//                 Logout
//               </span>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserCircle, FaHome, FaEnvelope, FaBell, FaBullhorn } from "react-icons/fa";
// import { BiLogOut } from "react-icons/bi";
// import LogoutIcon from "@mui/icons-material/Logout";

// const Sidebar = ({ notificationCount }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(true);  // Sidebar toggle state

//   useEffect(() => {
//     const token = localStorage.getItem("influcertoken");
//     if (!token) {
//       navigate("/"); // Redirect to login if not authenticated
//     }
//   }, [navigate]);

//   const logout = () => {
//     try {
//       localStorage.clear();
//       sessionStorage.clear();
//       document.cookie.split(";").forEach((cookie) => {
//         const cookieName = cookie.split("=")[0].trim();
//         document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//       });
//       navigate("/"); // Redirect to login after logout
//     } catch (err) {
//       console.log("Error during logout:", err);
//       navigate("/"); // Redirect to login on error
//     }
//   };

//   const menus = [
//     { name: "Home", link: "/InfluencerHome", icon: <FaHome className="w-5 h-5 text-blue-600" /> },
//     { name: "Live campaigns", link: "/InfluencerHistory", icon: <FaBullhorn className="w-5 h-5 text-blue-600" /> },
//     { name: "My campaigns", link: "/myapplications", icon: <FaBullhorn className="w-5 h-5 text-blue-600" /> },
//     { name: "Messages", link: "/influenecermessage", icon: <FaEnvelope className="w-5 h-5 text-blue-600" /> },
//     { name: "Notifications", link: "/notifyinflueencers", icon: <FaBell className="w-5 h-5 text-blue-600" /> },
//     { name: "Profile", link: "/InfluencerProfile", icon: <FaUserCircle className="w-5 h-5 text-blue-600" /> },
//   ];

//   return (
//     <div className={`w-${open ? '72' : '20'} bg-black h-screen p-5 pt-8 relative duration-300 transition-all`}>
//       {/* Sidebar Toggle Button */}
//       <img
//         src="https://i.postimg.cc/8P1D6Vq6/left-arrow.jpg"
//         className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full transition-transform duration-300 ${!open && "rotate-180"}`}
//         onClick={() => setOpen(!open)} // Toggle sidebar state
//         alt="Toggle Sidebar"
//       />

//       {/* Logo and Title */}
//       <div className="flex gap-x-4 items-center">
//         <img
//           src="https://i.postimg.cc/d1Kgc2Fy/hyboxlog.jpg"
//           className={`cursor-pointer transition-transform duration-500 ${open && "rotate-[360deg]"}`}
//           style={{ width: "50px", height: "50px" }}  // Adjust logo size
//           alt="Logo"
//         />
//         <h1 className={`text-white font-medium text-xl transition-transform duration-200 ${!open && "scale-0"}`}>HYPBOX</h1>
//       </div>

//       {/* Menu Items */}
//       <ul className="pt-6">
//         {menus.map((menu, index) => (
//           <li key={index}>
//             <Link to={menu.link} className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
//               {menu.icon} {/* Render the icon */}
//               <span className={`${!open && "hidden"} ml-3`}>{menu.name}</span> {/* Render the name */}
//             </Link>
//           </li>
//         ))}
        
//         {/* Logout Button */}
//         <li>
//           <button onClick={logout} className="flex items-center p-2 text-white w-full text-left hover:bg-gray-700 rounded">
//             <BiLogOut className="w-5 h-5 text-blue-600" />
//             <span className={`${!open && "hidden"} ml-3`}>Logout</span>
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;






import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHome, FaEnvelope, FaBell, FaBullhorn } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const Sidebar = ({ notificationCount }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);  // Sidebar toggle state

  useEffect(() => {
    const token = localStorage.getItem("influcertoken");
    if (!token) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const logout = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach((cookie) => {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });
      navigate("/"); // Redirect to login after logout
    } catch (err) {
      console.log("Error during logout:", err);
      navigate("/"); // Redirect to login on error
    }
  };

  const menus = [
    { name: "Home", link: "/InfluencerHome", icon: <FaHome className="w-5 h-5 text-blue-600" /> },
    { name: "Live campaigns", link: "/InfluencerHistory", icon: <FaBullhorn className="w-5 h-5 text-blue-600" /> },
    { name: "My campaigns", link: "/myapplications", icon: <FaBullhorn className="w-5 h-5 text-blue-600" /> },
    { name: "Messages", link: "/influenecermessage", icon: <FaEnvelope className="w-5 h-5 text-blue-600" /> },
    { name: "Notifications", link: "/notifyinflueencers", icon: <FaBell className="w-5 h-5 text-blue-600" /> },
    { name: "Profile", link: "/InfluencerProfile", icon: <FaUserCircle className="w-5 h-5 text-blue-600" /> },
  ];

  return (
    <div className={`w-${open ? '72' : '20'} bg-black h-[1600px] p-5 pt-8 relative duration-300 transition-all`}>
      {/* Sidebar Toggle Button */}
      <img
        src="https://i.postimg.cc/8P1D6Vq6/left-arrow.jpg"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full transition-transform duration-300 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)} // Toggle sidebar state
        alt="Toggle Sidebar"
      />


      {/* Logo and Title */}
      <div className="flex gap-x-4 items-center">
        <img
          src="https://i.postimg.cc/d1Kgc2Fy/hyboxlog.jpg"
          className={`cursor-pointer transition-transform duration-500 ${open && "rotate-[360deg]"}`}
          style={{ width: "50px", height: "50px" }}  // Adjust logo size
          alt="Logo"
        />
        <h1 className={`text-white font-medium text-xl transition-transform duration-200 ${!open && "scale-0"}`}>HYPBOX</h1>
      </div>

      {/* Menu Items */}
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <li key={index} className="mb-5"> {/* Added margin-bottom for spacing */}
            <Link to={menu.link} className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
              {menu.icon} {/* Render the icon */}
              <span className={`${!open && "hidden"} ml-3`}>{menu.name}</span> {/* Render the name */}
            </Link>
          </li>
        ))}
        
        {/* Logout Button */}
        <li className="mb-5"> {/* Added margin-bottom for spacing */}
          <button onClick={logout} className="flex items-center p-2 text-white w-full text-left hover:bg-gray-700 rounded">
            <BiLogOut className="w-5 h-5 text-blue-600" />
            <span className={`${!open && "hidden"} ml-3`}>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
