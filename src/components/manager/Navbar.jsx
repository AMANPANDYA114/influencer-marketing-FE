


// import React, { useState, useEffect } from "react";
// import { AiTwotoneShop, AiOutlineFileSearch } from 'react-icons/ai';
// import { BiLogOut } from 'react-icons/bi';
// import { BsPersonPlusFill } from 'react-icons/bs';
// import { FaHome, FaUserCircle } from 'react-icons/fa';
// import { HiMenuAlt1 } from 'react-icons/hi';
// import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
    
//     // Check if the token is present in localStorage on initial render
//     useEffect(() => {
//         const token = localStorage.getItem("mangertoken");
//         if (!token) {
//             // Redirect to login page if no token
//             navigate("/ManagerLogin");
//         }
//     }, [navigate]);

//     const menus = [
//         { name: "Home", link: "/ManagerHome", icon: FaHome },
//         { name: "Requests", link: "/request", icon: AiOutlineFileSearch },
//         { name: "Add Brand", link: "/AddNewBrand", icon: AiTwotoneShop },
//         { name: "Add Influencer", link: "/AddNewInfluencer", icon: BsPersonPlusFill },
//         { name: "Profile", link: "/ManagerProfile", icon: FaUserCircle },
//     ];

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
//             navigate('/ManagerLogin');
//         } catch (err) {
//             console.log("Error during logout:", err);
//             // In case of an error, clear all stored data and navigate anyway
//             localStorage.clear();
//             sessionStorage.clear();
//             navigate('/ManagerLogin');
//         }
//     };

//     return (
//         <>
//             <div className="flex fixed w-screen h-14">
//                 <div className="py-3 bg-[#b7b8bb8f] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500">
//                     <HiMenuAlt1
//                         size={26}
//                         className="cursor-pointer mx-auto"
//                         onClick={() => setOpen(!open)}
//                     />
//                 </div>
//             </div>

//             <section className={`max-md:mt-16 max-md:fixed flex gap-6 fixed`}>
//                 <div
//                     className={`bg-black shadow-2xl flex flex-col justify-between max-md:h-full h-screen w-14 max-md:${open && "hidden"} duration-500 rounded-r-2xl text-gray-100 px-4`}
//                 >
//                     <div className="mt-4 flex flex-col gap-4 relative">
//                         {menus?.map((menu, i) => (
//                             <Link
//                                 to={menu?.link}
//                                 key={i}
//                                 className={`${menu?.margin && "mt-5"} group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                             >
//                                 <div>{React.createElement(menu?.icon, { size: "25" })}</div>
//                                 <h2
//                                     style={{
//                                         transitionDelay: `${i + 3}00ms`,
//                                     }}
//                                     className={`whitespace-pre duration-500`}
//                                 />
//                                 <h2
//                                     className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//                                 >
//                                     {menu?.name}
//                                 </h2>
//                             </Link>
//                         ))}
//                     </div>

//                     <div
//                         className={`group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                     >
//                         <div>
//                             <BiLogOut 
//                                 size={25} 
//                                 className="my-10 mx-auto hover:text-blue-700 cursor-pointer" 
//                                 onClick={logout} 
//                             />
//                         </div>
//                         <h2
//                             style={{
//                                 transitionDelay: `${13}00ms`,
//                             }}
//                             className={`whitespace-pre duration-500`}
//                         />
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




// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaHome, FaUserCircle } from 'react-icons/fa';
// import { AiOutlineFileSearch, AiTwotoneShop } from 'react-icons/ai';
// import { BsPersonPlusFill } from 'react-icons/bs';

// const Navbar = () => {
//     const navigate = useNavigate();
    
//     // Check if the token is present in localStorage on initial render
//     useEffect(() => {
//         const token = localStorage.getItem('mangertoken');
//         if (!token) {
//             // Redirect to login page if no token
//             navigate('/ManagerLogin');
//         }
//     }, [navigate]);

//     const menus = [
//         { name: 'Home', link: '/ManagerHome', icon: FaHome },
//         { name: 'Influencers Requirements', link: '/request', icon: AiOutlineFileSearch },
//         { name: 'Add Brand', link: '/AddNewBrand', icon: AiTwotoneShop },
//         { name: 'Add Influencer', link: '/AddNewInfluencer', icon: BsPersonPlusFill },
//         { name: 'Profile', link: '/ManagerProfile', icon: FaUserCircle },
//     ];

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
//             navigate('/ManagerLogin');
//         } catch (err) {
//             console.log("Error during logout:", err);
//             // In case of an error, clear all stored data and navigate anyway
//             localStorage.clear();
//             sessionStorage.clear();
//             navigate('/ManagerLogin');
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





// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaHome, FaUserCircle } from 'react-icons/fa';
// import { AiOutlineFileSearch, AiTwotoneShop } from 'react-icons/ai';
// import { BsPersonPlusFill } from 'react-icons/bs';

// const Sidebar = () => {
//     const navigate = useNavigate();

//     // Check if the token is present in localStorage on initial render
//     useEffect(() => {
//         const token = localStorage.getItem('mangertoken');
//         if (!token) {
//             // Redirect to login page if no token
//             navigate('/ManagerLogin');
//         }
//     }, [navigate]);

//     const menus = [
//         { name: 'Home', link: '/ManagerHome', icon: FaHome },
//         { name: 'Influencers Requirements', link: '/request', icon: AiOutlineFileSearch },
//         { name: 'Add Brand', link: '/AddNewBrand', icon: AiTwotoneShop },
//         { name: 'Add Influencer', link: '/AddNewInfluencer', icon: BsPersonPlusFill },
//         { name: 'Profile', link: '/ManagerProfile', icon: FaUserCircle },
//     ];

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
//             navigate('/ManagerLogin');
//         } catch (err) {
//             console.log("Error during logout:", err);
//             // In case of an error, clear all stored data and navigate anyway
//             localStorage.clear();
//             sessionStorage.clear();
//             navigate('/ManagerLogin');
//         }
//     };

//     return (
//         <div className="flex">
//             <div
//                 className={`bg-black h-screen p-5 pt-8 relative duration-300 ${open ? 'w-72' : 'w-20'}`}
//             >
//                 {/* Hamburger Icon */}
//                 <img
//                     src="/assets/control.png"
//                     className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && 'rotate-180'}`}
//                     onClick={() => setOpen(!open)}
//                 />
//                 <div className="flex gap-x-4 items-center">
//                     <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
//                         HYPBOX
//                     </h1>
//                 </div>

//                 {/* Menu Links */}
//                 <ul className="pt-6">
//                     {menus.map((menu, index) => (
//                         <li
//                             key={index}
//                             className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${index === 0 && 'bg-light-white'} ${menu.gap ? 'mt-9' : 'mt-2'}`}
//                         >
//                             {/* Render the icons for each menu */}
//                             <menu.icon className={`w-6 h-6 ${!open && 'scale-0'}`} />
//                             <Link
//                                 to={menu.link}
//                                 className={`ml-4 ${!open && 'hidden'} origin-left duration-200`}
//                             >
//                                 {menu.name}
//                             </Link>
//                         </li>
//                     ))}
//                     <li>
//                         <button
//                             onClick={logout}
//                             className="flex items-center gap-x-4 p-2 cursor-pointer text-gray-300 text-sm hover:bg-light-white"
//                         >
//                             <svg
//                                 className="w-6 h-6 text-gray-500 hover:text-gray-700"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                             <span className={`${!open && 'hidden'} origin-left duration-200`}>Logout</span>
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaHome, FaUserCircle } from 'react-icons/fa';
// import { AiOutlineFileSearch, AiTwotoneShop } from 'react-icons/ai';
// import { BsPersonPlusFill } from 'react-icons/bs';

// const Sidebar = () => {
//     const navigate = useNavigate();

//     // Check if the token is present in localStorage on initial render
//     useEffect(() => {
//         const token = localStorage.getItem('mangertoken');
//         if (!token) {
//             // Redirect to login page if no token
//             navigate('/ManagerLogin');
//         }
//     }, [navigate]);

//     const menus = [
//         { name: 'Home', link: '/ManagerHome', icon: FaHome },
//         { name: 'Influencers Requirements', link: '/request', icon: AiOutlineFileSearch },
//         { name: 'Add Brand', link: '/AddNewBrand', icon: AiTwotoneShop },
//         { name: 'Add Influencer', link: '/AddNewInfluencer', icon: BsPersonPlusFill },
//         { name: 'Profile', link: '/ManagerProfile', icon: FaUserCircle },
//     ];

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
//             navigate('/ManagerLogin');
//         } catch (err) {
//             console.log("Error during logout:", err);
//             // In case of an error, clear all stored data and navigate anyway
//             localStorage.clear();
//             sessionStorage.clear();
//             navigate('/ManagerLogin');
//         }
//     };

//     return (
//         <div className="flex">
//             <div
//                 style={{
//                     backgroundColor: 'black',
//                     height: '2000px', // Set height directly
//                     padding: '20px 20px 20px 20px', // Set padding
//                     position: 'relative',
//                     transition: 'width 0.3s ease', // Smooth transition for width change
//                     width: open ? '18rem' : '5rem', // Dynamic width based on state
//                 }}
//             >
//                 {/* Hamburger Icon */}
//                 <img
//                     src="/assets/control.png"
//                     style={{
//                         position: 'absolute',
//                         cursor: 'pointer',
//                         right: '-12px',
//                         top: '36px',
//                         width: '28px',
//                         border: '2px solid #6b21a8', // Dark Purple Border
//                         borderRadius: '50%',
//                         transform: !open ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate when closed
//                     }}
//                     onClick={() => setOpen(!open)}
//                     alt="Toggle Sidebar"
//                 />
//                 <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
//                     <h1
//                         style={{
//                             color: 'white',
//                             fontSize: '1.25rem',
//                             fontWeight: '500',
//                             transition: 'transform 0.2s ease',
//                             transform: !open ? 'scale(0)' : 'scale(1)', // Hide text when sidebar is closed
//                         }}
//                     >
//                         HYPBOX
//                     </h1>
//                 </div>

//                 {/* Menu Links */}
//                 <ul style={{ paddingTop: '24px' }}>
//                     {menus.map((menu, index) => (
//                         <li
//                             key={index}
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '8px',
//                                 cursor: 'pointer',
//                                 color: '#e5e5e5',
//                                 fontSize: '0.875rem',
//                                 gap: '16px',
//                                 backgroundColor: index === 0 ? '#f3f4f6' : 'transparent', // Highlight first item
//                                 borderRadius: '8px',
//                             }}
//                             className="hover:bg-light-white"
//                         >
//                             {/* Render the icons for each menu */}
//                             <menu.icon style={{ width: '24px', height: '24px', transform: !open ? 'scale(0)' : 'scale(1)' }} />
//                             <Link
//                                 to={menu.link}
//                                 style={{
//                                     marginLeft: '16px',
//                                     display: open ? 'block' : 'none',
//                                     transition: 'transform 0.2s ease',
//                                     transform: !open ? 'scale(0)' : 'scale(1)', // Hide text when sidebar is closed
//                                 }}
//                             >
//                                 {menu.name}
//                             </Link>
//                         </li>
//                     ))}
//                     <li>
//                         <button
//                             onClick={logout}
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: '16px',
//                                 padding: '8px',
//                                 cursor: 'pointer',
//                                 color: '#e5e5e5',
//                                 fontSize: '0.875rem',
//                             }}
//                             className="hover:bg-light-white"
//                         >
//                             <svg
//                                 style={{ width: '24px', height: '24px', color: '#6b7280', transition: 'color 0.3s' }}
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                             <span
//                                 style={{
//                                     transform: !open ? 'scale(0)' : 'scale(1)',
//                                     transition: 'transform 0.2s ease',
//                                 }}
//                             >
//                                 Logout
//                             </span>
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaHome, FaUserCircle } from 'react-icons/fa';
// import { AiOutlineFileSearch, AiTwotoneShop } from 'react-icons/ai';
// import { BsPersonPlusFill } from 'react-icons/bs';

// const Sidebar = () => {
//     const navigate = useNavigate();

//     // Check if the token is present in localStorage on initial render
//     useEffect(() => {
//         const token = localStorage.getItem('mangertoken');
//         if (!token) {
//             // Redirect to login page if no token
//             navigate('/ManagerLogin');
//         }
//     }, [navigate]);

//     const menus = [
//         { name: 'Home', link: '/ManagerHome', icon: FaHome },
//         { name: 'Influencers Requirements', link: '/request', icon: AiOutlineFileSearch },
//         { name: 'Add Brand', link: '/AddNewBrand', icon: AiTwotoneShop },
//         { name: 'Add Influencer', link: '/AddNewInfluencer', icon: BsPersonPlusFill },
//         { name: 'Profile', link: '/ManagerProfile', icon: FaUserCircle },
//     ];

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
//             navigate('/ManagerLogin');
//         } catch (err) {
//             console.log("Error during logout:", err);
//             // In case of an error, clear all stored data and navigate anyway
//             localStorage.clear();
//             sessionStorage.clear();
//             navigate('/ManagerLogin');
//         }
//     };

//     return (
//         <div className="flex">
//             <div
//                 style={{
//                     backgroundColor: 'black',
//                     height: '1300px', // Set height directly
//                     padding: '20px', // Set padding
//                     position: 'relative',
//                     transition: 'width 0.3s ease', // Smooth transition for width change
//                     width: open ? '18rem' : '5rem', // Dynamic width based on state
//                 }}
//             >
//                 {/* Hamburger Icon */}
//                 <img
//                     src="/assets/control.png"
//                     style={{
//                         position: 'absolute',
//                         cursor: 'pointer',
//                         right: '-12px',
//                         top: '36px',
//                         width: '28px',
//                         border: '2px solid #6b21a8', // Dark Purple Border
//                         borderRadius: '50%',
//                         transform: !open ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate when closed
//                     }}
//                     onClick={() => setOpen(!open)}
//                     alt="Toggle Sidebar"
//                 />
//                 <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
//                     <h1
//                         style={{
//                             color: 'white',
//                             fontSize: '1.25rem',
//                             fontWeight: '500',
//                             transition: 'transform 0.2s ease',
//                             transform: !open ? 'scale(0)' : 'scale(1)', // Hide text when sidebar is closed
//                         }}
//                     >
//                         HYPBOX
//                     </h1>
//                 </div>

//                 {/* Menu Links */}
//                 <ul style={{ paddingTop: '24px' }}>
//                     {menus.map((menu, index) => (
//                         <li
//                             key={index}
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '12px', // Increased padding for larger click area
//                                 cursor: 'pointer',
//                                 color: '#e5e5e5',
//                                 fontSize: '0.875rem',
//                                 gap: '16px',
//                                 backgroundColor: index === 0 ? '#f3f4f6' : 'transparent', // Highlight first item
//                                 borderRadius: '8px',
//                                 marginTop: '79px', // Added space between items
//                             }}
//                             className="hover:bg-light-white"
//                         >
//                             {/* Render the icons for each menu */}
//                             <menu.icon style={{ width: '24px', height: '24px', transform: !open ? 'scale(0)' : 'scale(1)' }} />
//                             <Link
//                                 to={menu.link}
//                                 style={{
//                                     marginLeft: '16px',
//                                     display: open ? 'block' : 'none',
//                                     transition: 'transform 0.2s ease',
//                                     transform: !open ? 'scale(0)' : 'scale(1)', // Hide text when sidebar is closed
//                                 }}
//                             >
//                                 {menu.name}
//                             </Link>
//                         </li>
//                     ))}
//                     <li>
//                         <button
//                             onClick={logout}
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 gap: '16px',
//                                 padding: '12px', // Increased padding for logout button
//                                 cursor: 'pointer',
//                                 color: '#e5e5e5',
//                                 fontSize: '0.875rem',
//                                 marginTop: '76px', // Added space for logout button
//                             }}
//                             className="hover:bg-light-white"
//                         >
//                             <svg
//                                 style={{ width: '24px', height: '24px', color: '#6b7280', transition: 'color 0.3s' }}
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                             <span
//                                 style={{
//                                     transform: !open ? 'scale(0)' : 'scale(1)',
//                                     transition: 'transform 0.2s ease',
//                                 }}
//                             >
//                                 Logout
//                             </span>
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;




import React, { useEffect, useState } from 'react';
import { AiOutlineFileSearch, AiTwotoneShop } from 'react-icons/ai';
import { BsPersonPlusFill } from 'react-icons/bs';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    // Check if the token is present in localStorage on initial render
    useEffect(() => {
        const token = localStorage.getItem('mangertoken');
        if (!token) {
            // Redirect to login page if no token
            navigate('/ManagerLogin');
        }
    }, [navigate]);

    const menus = [
        { name: 'Home', link: '/ManagerHome', icon: FaHome },
        { name: 'Influencers Requirements', link: '/request', icon: AiOutlineFileSearch },
        { name: 'Add Brand', link: '/AddNewBrand', icon: AiTwotoneShop },
        { name: 'Add Influencer', link: '/AddNewInfluencer', icon: BsPersonPlusFill },
        { name: 'Profile', link: '/ManagerProfile', icon: FaUserCircle },
    ];

    const [open, setOpen] = useState(true);

    const logout = () => {
        try {
            // Clear localStorage and sessionStorage
            localStorage.clear();
            sessionStorage.clear();

            // Clear cookies
            document.cookie.split(";").forEach((cookie) => {
                const cookieName = cookie.split("=")[0].trim();
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            });

            // Clear IndexedDB if needed
            if (window.indexedDB) {
                const request = indexedDB.deleteDatabase('your-database-name');
                request.onsuccess = function () {
                    console.log('IndexedDB cleared');
                };
                request.onerror = function (error) {
                    console.error('Error clearing IndexedDB:', error);
                };
            }

            // Clear CacheStorage if needed
            if (window.caches) {
                caches.keys().then((cacheNames) => {
                    cacheNames.forEach((cacheName) => {
                        caches.delete(cacheName);
                    });
                });
            }

            // Navigate to the login page after clearing everything
            navigate('/ManagerLogin');
        } catch (err) {
            console.log("Error during logout:", err);
            // In case of an error, clear all stored data and navigate anyway
            localStorage.clear();
            sessionStorage.clear();
            navigate('/ManagerLogin');
        }
    };

    return (
        <div className="flex">
            <div
                style={{
                    backgroundColor: 'black',
                    height: '1600px', // Reduced height to 900px (Adjust this value as needed)
                    padding: '20px', // Set padding
                    position: 'relative',
                    transition: 'width 0.3s ease', // Smooth transition for width change
                    width: open ? '18rem' : '5rem', // Dynamic width based on state
                }}
            >
                {/* Hamburger Icon */}
                <img
                    src="https://i.postimg.cc/8P1D6Vq6/left-arrow.jpg"
                    style={{
                        position: 'absolute',
                        cursor: 'pointer',
                        right: '-12px',
                        top: '36px',
                        width: '28px',
                        border: '2px solid black', // Dark Purple Border
                        borderRadius: '50%',
                        transform: !open ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate when closed
                    }}
                    onClick={() => setOpen(!open)}
                    alt="Toggle Sidebar"
                />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Logo Image will only appear when sidebar is closed */}
                    <img 
                        src="https://i.postimg.cc/d1Kgc2Fy/hyboxlog.jpg" // Make sure to use the correct path for the logo
                        alt="Logo"
                        style={{
                            width: '24px', 
                            height: '24px',
                            display: open ? 'none' : 'block', // Logo appears only when sidebar is closed
                        }}
                    />
                    <h1
                        style={{
                            color: 'white',
                            fontSize: '1.25rem',
                            fontWeight: '500',
                            transition: 'transform 0.2s ease',
                            transform: !open ? 'scale(0)' : 'scale(1)', // Hide text when sidebar is closed
                        }}
                    >
                        HYPBOX
                    </h1>
                </div>

                {/* Menu Links */}
                <ul style={{ paddingTop: '24px' }}>
                    {menus.map((menu, index) => (
                        <li
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px', // Increased padding for larger click area
                                cursor: 'pointer',
                                color: '#e5e5e5',
                                fontSize: '0.875rem',
                                gap: '16px',
                                backgroundColor: index === 0 ? 'transparent' : 'transparent', 
                                borderRadius: '8px',
                                marginTop: '16px', // Added space between items
                            }}
                            className="hover:bg-light-white"
                        >
                            {/* Render the icons for each menu */}
                            <menu.icon 
                                style={{ 
                                    width: '24px', 
                                    height: '24px', 
                                    transform: 'scale(1)'  // Ensure icons are always visible, even when sidebar is closed
                                }} 
                            />
                            <Link
                                to={menu.link}
                                style={{
                                    marginLeft: '16px',
                                    display: open ? 'block' : 'none',
                                    transition: 'transform 0.2s ease',
                                    transform: !open ? 'scale(0)' : 'scale(1)', // Hide text when sidebar is closed
                                }}
                            >
                                {menu.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={logout}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '12px', // Increased padding for logout button
                                cursor: 'pointer',
                                color: '#e5e5e5',
                                fontSize: '0.875rem',
                                marginTop: '16px', // Added space for logout button
                            }}
                            className="hover:bg-light-white"
                        >
                            <svg
                                style={{ width: '24px', height: '24px', color: '#6b7280', transition: 'color 0.3s' }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span
                                style={{
                                    transform: !open ? 'scale(0)' : 'scale(1)',
                                    transition: 'transform 0.2s ease',
                                }}
                            >
                                Logout
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
