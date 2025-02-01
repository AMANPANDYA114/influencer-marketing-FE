




// import React, { useEffect, useState } from "react";
// import { FaUserCircle, FaHome, FaEnvelope, FaBell, FaBullhorn, FaFlag } from 'react-icons/fa';  
// import { MdPendingActions } from 'react-icons/md';
// import { BiLogOut } from 'react-icons/bi';
// import { Link, useNavigate } from 'react-router-dom';
// import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material'; // Import MUI arrow icons

// const Navbar = ({ notificationCount }) => {
//     const navigate = useNavigate();
//     const [open, setOpen] = useState(true);
//     const [campaignDropdown, setCampaignDropdown] = useState(false); // State for campaign dropdown

//     useEffect(() => {
//         // Check if the influencer token exists in localStorage
//         const token = localStorage.getItem("influcertoken");
//         if (!token) {
//             navigate('/'); // If no token, redirect to home or login
//         } 
//     }, [navigate]);

//     const handleDropdownToggle = () => {
//         setCampaignDropdown(!campaignDropdown); // Toggle dropdown visibility
//     };

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

//             // Navigate to the login page after clearing everything
//             navigate('/');
//         } catch (err) {
//             console.log("Error during logout:", err);
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
//                     {/* Home */}
//                     <li style={{ marginBottom: '1rem' }}>
//                         <Link
//                             to="/InfluencerHome"
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '0.5rem',
//                                 color: 'white',
//                                 textDecoration: 'none',
//                                 borderRadius: '0.375rem',
//                                 transition: 'background-color 0.3s',
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
//                         >
//                             <FaHome className="w-5 h-5 text-blue-600" />
//                             <span style={{ marginLeft: '1rem' }}>Home</span>
//                         </Link>
//                     </li>

//                     {/* Campaigns Dropdown */}
//                     <li style={{ marginBottom: '1rem' }}>
//                         <button
//                             onClick={handleDropdownToggle}
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
//                             <FaBullhorn className="w-5 h-5 text-blue-600" />
//                             <span style={{ marginLeft: '1rem' }}>Campaigns</span>
//                             {campaignDropdown ? (
//                                 <ArrowDropUp style={{ marginLeft: 'auto', color: 'white' }} />
//                             ) : (
//                                 <ArrowDropDown style={{ marginLeft: 'auto', color: 'white' }} />
//                             )}
//                         </button>

//                         {campaignDropdown && (
//                             <ul style={{ marginTop: '1rem', paddingLeft: '1rem', color: 'white' }}>
//                                 <li>
//                                     <Link
//                                         to="/InfluencerHistory"
//                                         style={{
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             padding: '0.5rem',
//                                             color: 'white',
//                                             textDecoration: 'none',
//                                             borderRadius: '0.375rem',
//                                             transition: 'background-color 0.3s',
//                                         }}
//                                     >
//                                         <FaBullhorn className="w-5 h-5 text-blue-600" />
//                                         <span style={{ marginLeft: '1rem' }}>Live Campaigns</span>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link
//                                         to="/myapplications"
//                                         style={{
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             padding: '0.5rem',
//                                             color: 'white',
//                                             textDecoration: 'none',
//                                             borderRadius: '0.375rem',
//                                             transition: 'background-color 0.3s',
//                                         }}
//                                     >
//                                         <FaBullhorn className="w-5 h-5 text-blue-600" />
//                                         <span style={{ marginLeft: '1rem' }}>My Campaigns</span>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         )}
//                     </li>

//                     {/* Messages */}
//                     <li style={{ marginBottom: '1rem' }}>
//                         <Link
//                             to="/InfluencerMessages"
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '0.5rem',
//                                 color: 'white',
//                                 textDecoration: 'none',
//                                 borderRadius: '0.375rem',
//                                 transition: 'background-color 0.3s',
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
//                         >
//                             <FaEnvelope className="w-5 h-5 text-blue-600" />
//                             <span style={{ marginLeft: '1rem' }}>Messages</span>
//                         </Link>
//                     </li>

//                     {/* Notifications */}
//                     <li style={{ marginBottom: '1rem' }}>
//                         <Link
//                             to="/notifyinflueencers"
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '0.5rem',
//                                 color: 'white',
//                                 textDecoration: 'none',
//                                 borderRadius: '0.375rem',
//                                 transition: 'background-color 0.3s',
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
//                         >
//                             <FaBell className="w-5 h-5 text-blue-600" />
//                             <span style={{ marginLeft: '1rem' }}>Notifications</span>

//                                {/* Notification Counter */}
//                                {notificationCount > 0 && (
//                                 <div className="ml-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
//                                     {notificationCount} {/* Show the count */}
//                                 </div>
//                             )}
//                         </Link>
//                     </li>

//                     {/* Profile */}
//                     <li style={{ marginBottom: '1rem' }}>
//                         <Link
//                             to="/InfluencerProfile"
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '0.5rem',
//                                 color: 'white',
//                                 textDecoration: 'none',
//                                 borderRadius: '0.375rem',
//                                 transition: 'background-color 0.3s',
//                             }}
//                             onMouseEnter={(e) => (e.target.style.backgroundColor = '#333')}
//                             onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
//                         >
//                             <FaUserCircle className="w-5 h-5 text-blue-600" />
//                             <span style={{ marginLeft: '1rem' }}>Profile</span>
//                         </Link>
//                     </li>

//                     {/* Logout */}
//                     <li style={{ marginTop: 'auto', marginBottom: '1rem' }}>
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
//                             <BiLogOut className="w-5 h-5 text-blue-600" />
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
// import { FaUserCircle, FaHome, FaEnvelope, FaBell, FaBullhorn, FaFlag } from "react-icons/fa";
// import { MdPendingActions } from "react-icons/md";
// import { BiLogOut } from "react-icons/bi";
// import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

// const Navbar = ({ notificationCount }) => {
//     const navigate = useNavigate();
//     const [open, setOpen] = useState(true);
//     const [campaignDropdown, setCampaignDropdown] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem("influcertoken");
//         if (!token) {
//             navigate("/");
//         }
//     }, [navigate]);

//     const handleDropdownToggle = () => {
//         setCampaignDropdown(!campaignDropdown);
//     };

//     const logout = () => {
//         try {
//             localStorage.clear();  
//             sessionStorage.clear(); 
//             document.cookie.split(";").forEach((cookie) => {
//                 const cookieName = cookie.split("=")[0].trim();
//                 document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
//             });
//             navigate("/");
//         } catch (err) {
//             console.log("Error during logout:", err);
//             navigate("/");
//         }
//     };

//     return (
//         <div className="relative">
//             <button className="fixed top-4 left-4 z-40 text-white bg-black hover:bg-gray-800 p-4 rounded-lg" onClick={() => setOpen(!open)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//             </button>

//             <div className={`fixed top-0 left-0 z-50 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
//                 <div className="flex justify-between items-center p-4 border-b border-gray-300 text-white">
//                     <h5 className="text-xl font-semibold">HYPBOX</h5>
//                     <button onClick={() => setOpen(!open)}>
//                         <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </div>

//                 <ul className="mt-6 px-4">
//                     <li className="mb-4">
//                         <Link to="/InfluencerHome" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
//                             <FaHome className="w-5 h-5 text-blue-600" />
//                             <span className="ml-3">Home</span>
//                         </Link>
//                     </li>

//                     <li className="mb-4">
//                         <button onClick={handleDropdownToggle} className="flex items-center p-2 text-white w-full text-left hover:bg-gray-700 rounded">
//                             <FaBullhorn className="w-5 h-5 text-blue-600" />
//                             <span className="ml-3 flex-grow">Campaigns</span>
//                             {campaignDropdown ? <ArrowDropUp /> : <ArrowDropDown />}
//                         </button>
//                         {campaignDropdown && (
//                             <ul className="ml-6 mt-2 bg-gray-800 rounded p-2">
//                                 <li className="mb-2"><Link to="/InfluencerHistory" className="text-white hover:text-gray-300">Live Campaigns</Link></li>
//                                 <li><Link to="/myapplications" className="text-white hover:text-gray-300">My Campaigns</Link></li>
//                             </ul>
//                         )}
//                     </li>

//                     <li className="mb-4">
//                         <Link to="/InfluencerMessages" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
//                             <FaEnvelope className="w-5 h-5 text-blue-600" />
//                             <span className="ml-3">Messages</span>
//                         </Link>
//                     </li>

//                     <li className="mb-4">
//                         <Link to="/notifyinflueencers" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
//                             <FaBell className="w-5 h-5 text-blue-600" />
//                             <span className="ml-3">Notifications</span>
//                             {notificationCount > 0 && (
//                                 <div className="ml-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
//                                     {notificationCount}
//                                 </div>
//                             )}
//                         </Link>
//                     </li>

//                     <li className="mb-4">
//                         <Link to="/InfluencerProfile" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
//                             <FaUserCircle className="w-5 h-5 text-blue-600" />
//                             <span className="ml-3">Profile</span>
//                         </Link>
//                     </li>

//                     <li>
//                         <button onClick={logout} className="flex items-center p-2 text-white w-full text-left hover:bg-gray-700 rounded">
//                             <BiLogOut className="w-5 h-5 text-blue-600" />
//                             <span className="ml-3">Logout</span>
//                         </button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHome, FaEnvelope, FaBell, FaBullhorn } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

const Navbar = ({ notificationCount }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const [campaignDropdown, setCampaignDropdown] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("influcertoken");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    const handleDropdownToggle = (e) => {
        e.stopPropagation();
        setCampaignDropdown(!campaignDropdown);
    };

    const logout = () => {
        try {
            localStorage.clear();  
            sessionStorage.clear(); 
            document.cookie.split(";").forEach((cookie) => {
                const cookieName = cookie.split("=")[0].trim();
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            });
            navigate("/");
        } catch (err) {
            console.log("Error during logout:", err);
            navigate("/");
        }
    };

    return (
        <div className="relative">
            <button className="fixed top-4 left-4 z-40 text-white bg-black hover:bg-gray-800 p-4 rounded-lg" onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className={`fixed top-0 left-0 z-50 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-300 text-white">
                    <h5 className="text-xl font-semibold">HYPBOX</h5>
                    <button onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>
                        <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <ul className="mt-6 px-4">
                    <li className="mb-4">
                        <Link to="/InfluencerHome" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
                            <FaHome className="w-5 h-5 text-blue-600" />
                            <span className="ml-3">Home</span>
                        </Link>
                    </li>

                    <li className="mb-4">
                        <button onClick={handleDropdownToggle} className="flex items-center p-2 text-white w-full text-left hover:bg-gray-700 rounded">
                            <FaBullhorn className="w-5 h-5 text-blue-600" />
                            <span className="ml-3 flex-grow">Campaigns</span>
                            {campaignDropdown ? <ArrowDropUp /> : <ArrowDropDown />}
                        </button>
                        {campaignDropdown && (
                            <ul className="ml-6 mt-2 bg-gray-800 rounded p-2">
                                <li className="mb-2">
                                    <Link to="/InfluencerHistory" className="text-white hover:text-gray-300" onClick={(e) => e.stopPropagation()}>
                                        Live Campaigns
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/myapplications" className="text-white hover:text-gray-300" onClick={(e) => e.stopPropagation()}>
                                        My Campaigns
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="mb-4">
                        <Link to="/influenecermessage" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
                            <FaEnvelope className="w-5 h-5 text-blue-600" />
                            <span className="ml-3">Messages</span>
                        </Link>
                    </li>

                    <li className="mb-4">
                        <Link to="/notifyinflueencers" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
                            <FaBell className="w-5 h-5 text-blue-600" />
                            <span className="ml-3">Notifications</span>
                            {notificationCount > 0 && (
                                <div className="ml-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                                    {notificationCount}
                                </div>
                            )}
                        </Link>
                    </li>

                    <li className="mb-4">
                        <Link to="/InfluencerProfile" className="flex items-center p-2 text-white hover:bg-gray-700 rounded">
                            <FaUserCircle className="w-5 h-5 text-blue-600" />
                            <span className="ml-3">Profile</span>
                        </Link>
                    </li>

                    <li>
                        <button onClick={logout} className="flex items-center p-2 text-white w-full text-left hover:bg-gray-700 rounded">
                            <BiLogOut className="w-5 h-5 text-blue-600" />
                            <span className="ml-3">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
