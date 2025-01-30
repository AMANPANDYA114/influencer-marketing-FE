



// import React, { useEffect, useState } from "react";
// import { HiMenuAlt1 } from 'react-icons/hi';
// import { FaUserCircle, FaHome } from 'react-icons/fa';
// import { CgImport } from 'react-icons/cg';
// import { MdPendingActions } from 'react-icons/md';
// import { BiLogOut, BiHistory } from 'react-icons/bi';
// import { FaHandshake } from 'react-icons/fa';
// import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
// import axios from "axios";

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [open, setOpen] = useState(true);
//     const [userdata, setuserdata] = useState({});

//     const menus = [
//         { name: "Home", link: "/InfluencerHome", search: "?page=1", icon: FaHome, data: userdata },
//         { name: "Pending Request", link: "/InfluencerPendingRequest", search: "?page=1", icon: MdPendingActions, data: userdata },
//         { name: "Arrival Request", link: "/InfluencerArrivalRequest", search: "?page=1", icon: CgImport, data: userdata },
//         { name: "Agreement", link: "/InfluencerConsignments", search: "?page=1", icon: FaHandshake, data: userdata },
//         { name: "Campaigns", link: "/InfluencerHistory", search: "?page=1", icon: BiHistory, data: userdata },
//         { name: "Profile", link: "/InfluencerProfile", search: "?page=1", icon: FaUserCircle, data: userdata },
//     ];

//     const getInfluencerData = () => {
//         fetch("https://server-side-influencer.vercel.app/influencer/getInfluencer")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setuserdata(data.data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching influencer data:", error.message);
//             });
//     };

//     useEffect(() => {
//         // Check if the influencer token exists in localStorage
//         const token = localStorage.getItem("influcertoken");
//         if (!token) {
//             // If no token, redirect to login or home page
//             navigate('/');
//         } else {
//             getInfluencerData();
//         }
//     }, [navigate]);

//     const logout = () => {
//         try {
//             // Clear localStorage and sessionStorage
//             localStorage.clear();  // Clears all data stored in localStorage
//             sessionStorage.clear(); // Clears all data stored in sessionStorage
    
//             // Clear cookies by iterating over all cookies and removing them
//             document.cookie.split(";").forEach((cookie) => {
//                 const cookieName = cookie.split("=")[0].trim();
//                 document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//             });
    
//             // Clear IndexedDB if you need to (can be optional)
//             if (window.indexedDB) {
//                 const request = indexedDB.deleteDatabase('your-database-name'); // Replace with your actual DB name
//                 request.onsuccess = function () {
//                     console.log('IndexedDB cleared');
//                 };
//                 request.onerror = function (error) {
//                     console.error('Error clearing IndexedDB:', error);
//                 };
//             }
    
//             // Clear CacheStorage if needed (can be optional)
//             if (window.caches) {
//                 caches.keys().then((cacheNames) => {
//                     cacheNames.forEach((cacheName) => {
//                         caches.delete(cacheName);
//                     });
//                 });
//             }
    
//             // Navigate to the homepage or login page after clearing everything
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
//                     className={`bg-black shadow-2xl flex flex-col justify-between max-md:h-full h-screen w-16 text-center max-md:${open && "hidden"} duration-500 rounded-r-xl text-gray-100 px-4`}
//                 >
//                     <div className="mt-4 flex flex-col gap-4 relative">
//                         {menus?.map((menu, i) => (
//                             <NavLink
//                                 to={{ pathname: `${menu?.link}`, search: `${menu?.search}` }}
//                                 state={menu.data}
//                                 className={`${menu?.margin && "mt-5"} group flex items-center
//                     cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                                 key={i} >
//                                 <div>{React.createElement(menu?.icon, { size: "25" })}</div>
//                                 <h2
//                                     style={{
//                                         transitionDelay: `${i + 3}00ms`,
//                                     }}
//                                     className={`whitespace-pre duration-500 `}
//                                 >
//                                 </h2>
//                                 <h2
//                                     className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//                                 >
//                                     {menu?.name}
//                                 </h2>
//                             </NavLink>
//                         ))}
//                     </div>
//                     <div
//                         className={`group flex items-center
//                     cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                     >
//                         <div><BiLogOut size={25} className="my-10 mx-auto hover:text-blue-700 cursor-pointer" onClick={logout} /></div>
//                         <h2
//                             style={{
//                                 transitionDelay: `${13}00ms`,
//                             }}
//                             className={`whitespace-pre duration-500 `}
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





import React, { useEffect, useState } from "react";
import { FaUserCircle, FaHome, FaEnvelope, FaBell, FaBullhorn, FaFlag } from 'react-icons/fa';  
import { MdPendingActions } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'; // Import MUI arrow icons

const Navbar = ({ notificationCount }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const [campaignDropdown, setCampaignDropdown] = useState(false); // State for campaign dropdown

    useEffect(() => {
        // Check if the influencer token exists in localStorage
        const token = localStorage.getItem("influcertoken");
        if (!token) {
            navigate('/'); // If no token, redirect to home or login
        } 
    }, [navigate]);

    const handleDropdownToggle = () => {
        setCampaignDropdown(!campaignDropdown); // Toggle dropdown visibility
    };

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

            // Navigate to the login page after clearing everything
            navigate('/');
        } catch (err) {
            console.log("Error during logout:", err);
            localStorage.clear();
            sessionStorage.clear();
            navigate('/');
        }
    };

    return (
        <div className="relative">
            {/* Drawer Trigger (Hamburger Icon) */}
            <button
                className="fixed top-4 left-4 z-40 text-white bg-black hover:bg-gray-800 p-4 rounded-lg"
                onClick={() => setOpen(!open)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Drawer */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 50,
                    height: '100%',
                    width: '16rem',
                    backgroundColor: 'black',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transform: open ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem',
                        borderBottom: '1px solid #ddd',
                        color: 'white',
                    }}
                >
                    <h5 style={{ fontSize: '1.25rem', fontWeight: '600' }}>HYPBOX</h5>
                    <button onClick={() => setOpen(!open)}>
                        <svg
                            className="w-6 h-6 text-gray-500 hover:text-gray-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
                    {/* Home */}
                    <li style={{ marginBottom: '1rem' }}>
                        <Link
                            to="/InfluencerHome"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '0.375rem',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            <FaHome className="w-5 h-5 text-blue-600" />
                            <span style={{ marginLeft: '1rem' }}>Home</span>
                        </Link>
                    </li>

                    {/* Campaigns Dropdown */}
                    <li style={{ marginBottom: '1rem' }}>
                        <button
                            onClick={handleDropdownToggle}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem',
                                width: '100%',
                                color: 'white',
                                textAlign: 'left',
                                borderRadius: '0.375rem',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            <FaBullhorn className="w-5 h-5 text-blue-600" />
                            <span style={{ marginLeft: '1rem' }}>Campaigns</span>
                            {campaignDropdown ? (
                                <ArrowDropUp style={{ marginLeft: 'auto', color: 'white' }} />
                            ) : (
                                <ArrowDropDown style={{ marginLeft: 'auto', color: 'white' }} />
                            )}
                        </button>

                        {campaignDropdown && (
                            <ul style={{ marginTop: '1rem', paddingLeft: '1rem', color: 'white' }}>
                                <li>
                                    <Link
                                        to="/InfluencerHistory"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0.5rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '0.375rem',
                                            transition: 'background-color 0.3s',
                                        }}
                                    >
                                        <FaBullhorn className="w-5 h-5 text-blue-600" />
                                        <span style={{ marginLeft: '1rem' }}>Live Campaigns</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/myapplications"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0.5rem',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '0.375rem',
                                            transition: 'background-color 0.3s',
                                        }}
                                    >
                                        <FaBullhorn className="w-5 h-5 text-blue-600" />
                                        <span style={{ marginLeft: '1rem' }}>My Campaigns</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Messages */}
                    <li style={{ marginBottom: '1rem' }}>
                        <Link
                            to="/InfluencerMessages"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '0.375rem',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            <FaEnvelope className="w-5 h-5 text-blue-600" />
                            <span style={{ marginLeft: '1rem' }}>Messages</span>
                        </Link>
                    </li>

                    {/* Notifications */}
                    <li style={{ marginBottom: '1rem' }}>
                        <Link
                            to="/notifyinflueencers"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '0.375rem',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            <FaBell className="w-5 h-5 text-blue-600" />
                            <span style={{ marginLeft: '1rem' }}>Notifications</span>

                               {/* Notification Counter */}
                               {notificationCount > 0 && (
                                <div className="ml-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                                    {notificationCount} {/* Show the count */}
                                </div>
                            )}
                        </Link>
                    </li>

                    {/* Profile */}
                    <li style={{ marginBottom: '1rem' }}>
                        <Link
                            to="/InfluencerProfile"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '0.375rem',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            <FaUserCircle className="w-5 h-5 text-blue-600" />
                            <span style={{ marginLeft: '1rem' }}>Profile</span>
                        </Link>
                    </li>

                    {/* Logout */}
                    <li style={{ marginTop: 'auto', marginBottom: '1rem' }}>
                        <button
                            onClick={logout}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5rem',
                                width: '100%',
                                color: 'white',
                                textAlign: 'left',
                                borderRadius: '0.375rem',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                        >
                            <BiLogOut className="w-5 h-5 text-blue-600" />
                            <span style={{ marginLeft: '1rem' }}>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
