

// old navbar with authcheck :------


// import axios from 'axios';
// import React, { useEffect, useState } from "react";
// import { BiHistory, BiLogOut } from 'react-icons/bi';
// import { CgImport } from 'react-icons/cg';
// import { FaHandshake, FaHome, FaUserCircle } from 'react-icons/fa';
// import { HiMenuAlt1 } from 'react-icons/hi';
// import { IoPeople } from 'react-icons/io5'; // Icon for Influencer Consolidation
// import { MdPendingActions } from 'react-icons/md';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [brandData, setBrandData] = useState({});
//     const [isAuthenticated, setIsAuthenticated] = useState(false);  // state to track authentication

//     // Fetch brand data
//     const getBrandData = async () => {
//         try {
//             const { data } = await axios.get("/brand/getBrandData");
//             setBrandData(data.data);
//         } catch (err) {
//             console.log(err.response.status);
//             if (err.response.status === 422) {
//                 navigate('/');
//             }
//         }
//     };

//     // Check if token exists in localStorage
//     const checkAuthToken = () => {
//         const token = localStorage.getItem('Brandtoken');
//         if (token) {
//             setIsAuthenticated(true); // Token exists, set as authenticated
//         } else {
//             setIsAuthenticated(false); // Token does not exist, user is not authenticated
//         }
//     };

//     useEffect(() => {
//         checkAuthToken(); // Perform token check when the component mounts
//         if (isAuthenticated) {
//             getBrandData(); // Fetch brand data if authenticated
//         }
//     }, [isAuthenticated]);

//     const menus = [
//         { name: "Home", link: "/BrandHome", icon: FaHome, data: brandData },
//         { name: "Add requests", link: "/BrandPendingRequest", icon: MdPendingActions, data: brandData },
//         { name: "Influencers Comparison", link: "/compare", icon: CgImport },
//         { name: "Plan and List", link: "/BrandConsignments", icon: FaHandshake, data: brandData },
//         { name: "Campaign Reports", link: "/BrandHistory", icon: BiHistory, data: brandData },
//         { name: "Create campaign", link: "/create", icon: BiHistory, data: brandData },
//         { name: "Influencer Consolidation", link: "/consolidation", icon: IoPeople },
//         { name: "Profile", link: "/BrandProfile", icon: FaUserCircle, data: brandData },
//     ];

//     // Logout function
//     const logout = () => {
//         try {
//             // Clear localStorage and sessionStorage
//             localStorage.clear();
//             sessionStorage.clear();
    
//             // Clear cookies
//             document.cookie.split(";").forEach((cookie) => {
//                 const cookieName = cookie.split("=")[0].trim();
//                 document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//             });
    
//             // Navigate to the homepage or login page after clearing everything
//             navigate('/');
//         } catch (err) {
//             console.log("Error during logout:", err);
//             navigate('/');
//         }
//     };

//     const [open, setOpen] = useState(true);

//     return (
//         <>
//             {/* Top Navbar - Transparent */}
//             <div className="flex fixed w-screen h-14 bg-transparent">
//                 <div className="py-3 bg-[#b7b8bb8f] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500">
//                     <HiMenuAlt1
//                         size={26}
//                         className="cursor-pointer mx-auto"
//                         onClick={() => setOpen(!open)}
//                     />
//                 </div>
//             </div>

//             {/* Left-side Navbar - Black Background */}
//             <section className={`max-md:mt-16 max-md:fixed flex gap-6 fixed`}>
//                 <div
//                     className={`bg-black shadow-2xl flex flex-col justify-between max-md:h-full h-screen w-16 max-md:${open && "hidden"} duration-500 rounded-r-2xl text-gray-100 px-4`}
//                 >
//                     <div className="mt-4 flex flex-col gap-4 relative">
//                         {menus?.map((menu, i) => (
//                             <Link
//                                 to={menu?.link}
//                                 state={menu?.data}
//                                 key={i}
//                                 className={`${menu?.margin && "mt-5"} group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                             >
//                                 <div>{React.createElement(menu?.icon, { size: "25" })}</div>
//                                 <h2
//                                     style={{
//                                         transitionDelay: `${i + 3}00ms`,
//                                     }}
//                                     className={`whitespace-pre duration-500`}
//                                 >
//                                 </h2>
//                                 <h2
//                                     className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//                                 >
//                                     {menu?.name}
//                                 </h2>
//                             </Link>
//                         ))}
//                     </div>

//                     {/* Logout Button */}
//                     <div
//                         className={`group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                     >
//                         <div>
//                             <BiLogOut size={25} className="my-10 mx-auto hover:text-blue-700 cursor-pointer" onClick={logout} />
//                         </div>
//                         <h2
//                             style={{
//                                 transitionDelay: `${13}00ms`,
//                             }}
//                             className={`whitespace-pre duration-500`}
//                         >
//                         </h2>
//                         <h2
//                             className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//                         >
//                             Logout
//                         </h2>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Navbar;







// drawer navbar with authcheck




// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaHome, FaHandshake, FaUserCircle } from "react-icons/fa";
// import { MdPendingActions } from "react-icons/md";
// import { BiHistory, BiLogOut } from "react-icons/bi";
// import { CgImport } from "react-icons/cg";

// import axios from "axios";


// const Navbar = () => {
//     const navigate = useNavigate();
    

//     useEffect(() => {
//           // Check if the influencer token exists in localStorage
//           const token = localStorage.getItem("Brandtoken");
//           if (!token) {
//               // If no token, redirect to login or home page
//               navigate('/');
//           } 
//       }, [navigate]);
  

 
//     const menus = [
//     { name: "Home", link: "/BrandHome", icon: FaHome },
//     { name: "Add requests", link: "/BrandPendingRequest", icon: MdPendingActions },
//     { name: "Influencers Comparison", link: "/compare", icon: CgImport },
//     { name: "Plan and List", link: "/BrandConsignments", icon: FaHandshake },
//     { name: "Campaign Reports", link: "/BrandHistory", icon: BiHistory },
//     { name: "Create campaign", link: "/create", icon: BiHistory },
//     { name: "Profile", link: "/BrandProfile", icon: FaUserCircle },
//   ];

//     const [open, setOpen] = useState(true);

//     const logout = () => {
//         try {
//             // Clear localStorage and sessionStorage
//             localStorage.clear();  
//             sessionStorage.clear(); 

//             // Clear cookies
//             document.cookie.split(";").forEach((cookie) => {
//                 const cookieName = cookie.split("=")[0].trim();
//                 document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//             });

//             // Clear IndexedDB if needed
//             if (window.indexedDB) {
//                 const request = indexedDB.deleteDatabase('your-database-name');
//                 request.onsuccess = function () {
//                     console.log('IndexedDB cleared');
//                 };
//                 request.onerror = function (error) {
//                     console.error('Error clearing IndexedDB:', error);
//                 };
//             }

//             // Clear CacheStorage if needed
//             if (window.caches) {
//                 caches.keys().then((cacheNames) => {
//                     cacheNames.forEach((cacheName) => {
//                         caches.delete(cacheName);
//                     });
//                 });
//             }

//             // Navigate to the login page after clearing everything
//             navigate('/');
//         } catch (err) {
//             console.log("Error during logout:", err);
//             // In case of an error, clear all stored data and navigate anyway
//             localStorage.clear();
//             sessionStorage.clear();
//             navigate('/');
//         }
//     };

//     return (
//         <div className="relative">
//             {/* Drawer Trigger (Hamburger Icon) */}
//             <button
//                 className="fixed top-4 left-4 z-40 text-white bg-black hover:bg-gray-800 p-4 rounded-lg"
//                 onClick={() => setOpen(!open)}
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                 >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//             </button>

//             {/* Drawer */}
//             <div
//                 style={{
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     zIndex: 50,
//                     height: '100%',
//                     width: '16rem',
//                     backgroundColor: 'black',
//                     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                     transform: open ? 'translateX(0)' : 'translateX(-100%)',
//                     transition: 'transform 0.3s ease',
//                 }}
//             >
//                 <div
//                     style={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         padding: '1rem',
//                         borderBottom: '1px solid #ddd',
//                         color: 'white',
//                     }}
//                 >
//                     <h5 style={{ fontSize: '1.25rem', fontWeight: '600' }}>HYPBOX</h5>
//                     <button onClick={() => setOpen(!open)}>
//                         <svg
//                             className="w-6 h-6 text-gray-500 hover:text-gray-700"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </div>
//                 <ul style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
//                     {menus.map((menu, index) => (
//                         <li key={index} style={{ marginBottom: '1rem' }}>
//                             <Link
//                                 to={menu.link}
//                                 style={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     padding: '0.5rem',
//                                     color: 'white',
//                                     textDecoration: 'none',
//                                     borderRadius: '0.375rem',
//                                     transition: 'background-color 0.3s',
//                                 }}
//                                 onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
//                                 onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
//                             >
//                                 {React.createElement(menu.icon, { className: 'w-5 h-5 text-blue-600' })}
//                                 <span style={{ marginLeft: '1rem' }}>{menu.name}</span>
//                             </Link>
//                         </li>
//                     ))}
//                     <li>
//                         <button
//                             onClick={logout}
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '0.5rem',
//                                 width: '100%',
//                                 color: 'white',
//                                 textAlign: 'left',
//                                 borderRadius: '0.375rem',
//                                 backgroundColor: 'transparent',
//                                 cursor: 'pointer',
//                                 transition: 'background-color 0.3s',
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
//                         >
//                             <svg
//                                 className="w-5 h-5 text-blue-600"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                             <span style={{ marginLeft: '1rem' }}>Logout</span>
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Navbar;






// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaHome, FaHandshake, FaUserCircle ,FaEnvelope} from "react-icons/fa";
// import { MdPendingActions } from "react-icons/md";
// import { BiHistory, BiLogOut } from "react-icons/bi";
// import { CgImport } from "react-icons/cg";
// import { ExpandMore, ExpandLess } from "@mui/icons-material"; // MUI Icons for dropdown
// import axios from "axios";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(true);
//   const [campaignDropdown, setCampaignDropdown] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("Brandtoken");
//     if (!token) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const menus = [
//     { name: "Home", link: "/BrandHome", icon: FaHome },
//     { name: "Add Requirements", link: "/BrandPendingRequest", icon: MdPendingActions },
//     { name: "Influencers Comparison", link: "/compare", icon: CgImport },
//     { name: "Plan and List", link: "/BrandConsignments", icon: FaHandshake },
//   ];

//   const logout = () => {
//     try {
//       localStorage.clear();
//       sessionStorage.clear();
//       document.cookie.split(";").forEach((cookie) => {
//         const cookieName = cookie.split("=")[0].trim();
//         document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//       });

//       if (window.indexedDB) {
//         const request = indexedDB.deleteDatabase("your-database-name");
//         request.onsuccess = () => console.log("IndexedDB cleared");
//         request.onerror = (error) => console.error("Error clearing IndexedDB:", error);
//       }

//       if (window.caches) {
//         caches.keys().then((cacheNames) => {
//           cacheNames.forEach((cacheName) => caches.delete(cacheName));
//         });
//       }

//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       sessionStorage.clear();
//       navigate("/");
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Drawer Trigger */}
//       <button
//         className="fixed top-4 left-4 z-40 text-white bg-black hover:bg-gray-800 p-4 rounded-lg"
//         onClick={() => setOpen(!open)}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>

//       {/* Drawer */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           zIndex: 50,
//           height: "100%",
//           width: "16rem",
//           backgroundColor: "black",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           transform: open ? "translateX(0)" : "translateX(-100%)",
//           transition: "transform 0.3s ease",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "1rem",
//             borderBottom: "1px solid #ddd",
//             color: "white",
//           }}
//         >
//           <h5 style={{ fontSize: "1.25rem", fontWeight: "600" }}>HYPBOX</h5>
//           <button onClick={() => setOpen(!open)}>
//             <svg
//               className="w-6 h-6 text-gray-500 hover:text-gray-700"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <ul style={{ marginTop: "1.5rem", paddingLeft: "1rem" }}>
//           {menus.map((menu, index) => (
//             <li key={index} style={{ marginBottom: "1.5rem" }}>
//               <Link
//                 to={menu.link}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "0.5rem",
//                   color: "white",
//                   textDecoration: "none",
//                   borderRadius: "0.375rem",
//                   transition: "background-color 0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//                 onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//               >
//                 {React.createElement(menu.icon, { className: "w-5 h-5 text-blue-600" })}
//                 <span style={{ marginLeft: "1rem" }}>{menu.name}</span>
//               </Link>
//             </li>
//           ))}

//           {/* Campaign Dropdown */}
//           <li style={{ marginBottom: "1.5rem" }}>
//             <button
//               onClick={() => setCampaignDropdown(!campaignDropdown)}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "0.5rem",
//                 width: "100%",
//                 color: "white",
//                 textAlign: "left",
//                 borderRadius: "0.375rem",
//                 backgroundColor: "transparent",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//             >
//               <BiHistory className="w-5 h-5 text-blue-600" />
//               <span style={{ marginLeft: "1rem", flexGrow: 1 }}>Campaign</span>
//               {campaignDropdown ? <ExpandLess /> : <ExpandMore />}
//             </button>
//             {campaignDropdown && (
//               <ul
//                 style={{
//                   paddingLeft: "1.5rem",
//                   marginTop: "0.5rem",
//                   backgroundColor: "#222",
//                   borderRadius: "0.375rem",
//                 }}
//               >
//                 <li style={{ marginBottom: "0.5rem" }}>
//                   <Link to="/create" style={{ color: "white", textDecoration: "none" }}>
//                     Create Campaign
//                   </Link>
//                 </li>
//                 <li style={{ marginBottom: "0.5rem" }}>
//                   <Link to="/BrandHistory" style={{ color: "white", textDecoration: "none" }}>
//                     Campaign Report
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/MyCampaigns" style={{ color: "white", textDecoration: "none" }}>
//                     My Campaigns
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>




//           {/* messages  */}


//            {/* Profile */}
//            <li style={{ marginBottom: "1.5rem" }}>
//             <Link
//               to="/messagebrand"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "0.5rem",
//                 color: "white",
//                 textDecoration: "none",
//                 borderRadius: "0.375rem",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//             >
//               <FaEnvelope  className="w-5 h-5 text-blue-600" />
//               <span style={{ marginLeft: "1rem" }}>Messages</span>
//             </Link>
//           </li>


//           {/* Profile */}
//           <li style={{ marginBottom: "1.5rem" }}>
//             <Link
//               to="/BrandProfile"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "0.5rem",
//                 color: "white",
//                 textDecoration: "none",
//                 borderRadius: "0.375rem",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//             >
//               <FaUserCircle className="w-5 h-5 text-blue-600" />
//               <span style={{ marginLeft: "1rem" }}>Profile</span>
//             </Link>
//           </li>





//           {/* Logout Button */}
//           <li>
//             <button
//               onClick={logout}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "0.5rem",
//                 width: "100%",
//                 color: "white",
//                 textAlign: "left",
//                 borderRadius: "0.375rem",
//                 backgroundColor: "transparent",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//             >
//               <BiLogOut className="w-5 h-5 text-blue-600" />
//               <span style={{ marginLeft: "1rem" }}>Logout</span>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import HandshakeIcon from "@mui/icons-material/Handshake";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
// import HistoryIcon from "@mui/icons-material/History";
// import LogoutIcon from "@mui/icons-material/Logout";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("Brandtoken");
//     if (!token) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const menus = [
//     { name: "Home", link: "/BrandHome", icon: HomeIcon },
//     { name: "Add Requirements", link: "/BrandPendingRequest", icon: HourglassEmptyIcon },
//     { name: "Influencers Comparison", link: "/compare", icon: ImportExportIcon },
//     { name: "Plan and List", link: "/BrandConsignments", icon: HandshakeIcon },
//     { name: "Create Campaign", link: "/create", icon: HistoryIcon },
//     { name: "My Campaigns", link: "/MyCampaigns", icon: HistoryIcon },
//     { name: "Campaign Reports", link: "/BrandHistory", icon: HistoryIcon },
//     { name: "Messages", link: "/messagebrand", icon: MailIcon },
//     { name: "Profile", link: "/BrandProfile", icon: AccountCircleIcon },
//     { name: "Logout", link: "#", icon: LogoutIcon, action: "logout" },
//   ];

//   const logout = () => {
//     try {
//       localStorage.clear();
//       sessionStorage.clear();
//       document.cookie.split(";").forEach((cookie) => {
//         const cookieName = cookie.split("=")[0].trim();
//         document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//       });

//       if (window.indexedDB) {
//         const request = indexedDB.deleteDatabase("your-database-name");
//         request.onsuccess = () => console.log("IndexedDB cleared");
//         request.onerror = (error) => console.error("Error clearing IndexedDB:", error);
//       }

//       if (window.caches) {
//         caches.keys().then((cacheNames) => {
//           cacheNames.forEach((cacheName) => caches.delete(cacheName));
//         });
//       }

//       navigate("/");
//     } catch (err) {
//       console.error("Error during logout:", err);
//       localStorage.clear();
//       sessionStorage.clear();
//       navigate("/");
//     }
//   };

//   return (
//     <div className="relative flex">
//       {/* Sidebar */}
//       <div className={`${open ? "w-72" : "w-20"} bg-black h-screen p-5 pt-8 relative duration-300 transition-all`}>
//         <img
//           src="https://i.postimg.cc/8P1D6Vq6/left-arrow.jpg" 
//           className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
//           onClick={() => setOpen(!open)}
//         />
//         <div className="flex gap-x-4 items-center">
//         <img
//   src="https://i.postimg.cc/d1Kgc2Fy/hyboxlog.jpg"
//   className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
//   style={{ width: "50px", height: "50px" }} // Set width and height as per your requirement
// />

//           <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>HYPBOX</h1>
//         </div>
//         <ul className="pt-6">
//           {menus.map((menu, index) => (
//             <li
//               key={index}
//               className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${index === 0 && "bg-light-white"}`}
//             >
//               {menu.action === "logout" ? (
//                 <button
//                   onClick={logout}
//                   className="flex items-center p-2 w-full text-white text-sm gap-x-4 cursor-pointer hover:bg-light-white"
//                 >
//                   <menu.icon className="w-5 h-5" />
//                   <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.name}</span>
//                 </button>
//               ) : (
//                 <Link
//                   to={menu.link}
//                   className="flex items-center p-2 w-full text-white text-sm gap-x-4 cursor-pointer hover:bg-light-white"
//                 >
//                   <menu.icon className="w-5 h-5" />
//                   <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.name}</span>
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("Brandtoken");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const menus = [
    { name: "Home", link: "/BrandHome", icon: HomeIcon },
    { name: "Add Requirements", link: "/BrandPendingRequest", icon: HourglassEmptyIcon },
    { name: "Influencers Comparison", link: "/compare", icon: ImportExportIcon },
    { name: "Plan and List", link: "/BrandConsignments", icon: HandshakeIcon },
    { name: "Create Campaign", link: "/create", icon: HistoryIcon },
    { name: "My Campaigns", link: "/MyCampaigns", icon: HistoryIcon },
    { name: "Campaign Reports", link: "/BrandHistory", icon: HistoryIcon },
    { name: "Messages", link: "/messagebrand", icon: MailIcon },
    { name: "Profile", link: "/BrandProfile", icon: AccountCircleIcon },
    { name: "Logout", link: "#", icon: LogoutIcon, action: "logout" },
  ];

  const logout = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach((cookie) => {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      });

      if (window.indexedDB) {
        const request = indexedDB.deleteDatabase("your-database-name");
        request.onsuccess = () => console.log("IndexedDB cleared");
        request.onerror = (error) => console.error("Error clearing IndexedDB:", error);
      }

      if (window.caches) {
        caches.keys().then((cacheNames) => {
          cacheNames.forEach((cacheName) => caches.delete(cacheName));
        });
      }

      navigate("/");
    } catch (err) {
      console.error("Error during logout:", err);
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
    }
  };

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <div
        className={`${open ? "w-72" : "w-20"} bg-black p-5 pt-8 relative duration-300 transition-all`}
        style={{ height: "1600px" }} 
      >
        <img
          src="https://i.postimg.cc/8P1D6Vq6/left-arrow.jpg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://i.postimg.cc/d1Kgc2Fy/hyboxlog.jpg"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            style={{ width: "50px", height: "50px" }} // Set width and height as per your requirement
          />
          <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>HYPBOX</h1>
        </div>
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${index === 0 && "bg-light-white"}`}
            >
              {menu.action === "logout" ? (
                <button
                  onClick={logout}
                  className="flex items-center p-2 w-full text-white text-sm gap-x-4 cursor-pointer hover:bg-light-white"
                >
                  <menu.icon className="w-5 h-5" />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.name}</span>
                </button>
              ) : (
                <Link
                  to={menu.link}
                  className="flex items-center p-2 w-full text-white text-sm gap-x-4 cursor-pointer hover:bg-light-white"
                >
                  <menu.icon className="w-5 h-5" />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
