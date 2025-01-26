



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
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaUserCircle, FaHome } from 'react-icons/fa';
import { CgImport } from 'react-icons/cg';
import { MdPendingActions } from 'react-icons/md';
import { BiLogOut, BiHistory } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";


const Navbar = () => {
    const navigate = useNavigate();
    

    useEffect(() => {
        // Check if the influencer token exists in localStorage
        const token = localStorage.getItem("influcertoken");
        if (!token) {
            // If no token, redirect to login or home page
            navigate('/');
        } 
    }, [navigate]);

 
    const menus = [
        { name: "Home", link: "/InfluencerHome", search: "?page=1", icon: FaHome },
        { name: "Pending Request", link: "/InfluencerPendingRequest", search: "?page=1", icon: MdPendingActions },
        { name: "Arrival Request", link: "/InfluencerArrivalRequest", search: "?page=1", icon: CgImport },
        { name: "Agreement", link: "/InfluencerConsignments", search: "?page=1", icon: FaHandshake },
        { name: "Campaigns", link: "/InfluencerHistory", search: "?page=1", icon: BiHistory },
        { name: "Profile", link: "/InfluencerProfile", search: "?page=1", icon: FaUserCircle },
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
            navigate('/');
        } catch (err) {
            console.log("Error during logout:", err);
            // In case of an error, clear all stored data and navigate anyway
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
                    <h5 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Menu</h5>
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
                    {menus.map((menu, index) => (
                        <li key={index} style={{ marginBottom: '1rem' }}>
                            <Link
                                to={menu.link}
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
                                {React.createElement(menu.icon, { className: 'w-5 h-5 text-blue-600' })}
                                <span style={{ marginLeft: '1rem' }}>{menu.name}</span>
                            </Link>
                        </li>
                    ))}
                    <li>
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
                            <svg
                                className="w-5 h-5 text-blue-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span style={{ marginLeft: '1rem' }}>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

