



import axios from 'axios';
import React, { useEffect, useState } from "react";
import { BiHistory, BiLogOut } from 'react-icons/bi';
import { CgImport } from 'react-icons/cg';
import { FaHandshake, FaHome, FaUserCircle } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoPeople } from 'react-icons/io5'; // Icon for Influencer Consolidation
import { MdPendingActions } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [brandData, setbrandData] = useState({});

    // Fetch brand data
    const getBrandData = async () => {
        try {
            const { data } = await axios.get("/brand/getBrandData");
            setbrandData(data.data);
        } catch (err) {
            console.log(err.response.status);
            if (err.response.status === 422) {
                navigate('/');
            }
        }
    };

    useEffect(() => {
        getBrandData();
    }, []);

    const menus = [
        { name: "Home", link: "/BrandHome", icon: FaHome, data: brandData },
        { name: "Add requests", link: "/BrandPendingRequest", icon: MdPendingActions, data: brandData },
        { name: "Influencers Comparison", link: "/compare", icon: CgImport }, // Changed route to /compare
        { name: "Plan and List", link: "/BrandConsignments", icon: FaHandshake, data: brandData },
        { name: "Campaign Reports", link: "/BrandHistory", icon: BiHistory, data: brandData },
        { name: "Create campaign", link: "/create", icon: BiHistory, data: brandData },
        { name: "Influencer Consolidation", link: "/consolidation", icon: IoPeople }, // New Item
        { name: "Profile", link: "/BrandProfile", icon: FaUserCircle, data: brandData },
    ];

    // Logout function
    // const logout = async () => {
    //     try {
    //         const res = await axios.get('https://server-side-influencer-1.onrender.com/logout');
    //         console.log(res.data);
    //         if (res.data.success === true) {
    //             navigate('/');
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };



    const logout = () => {
        try {
            // Clear localStorage and sessionStorage
            localStorage.clear();  // Clears all data stored in localStorage
            sessionStorage.clear(); // Clears all data stored in sessionStorage
    
            // Clear cookies by iterating over all cookies and removing them
            document.cookie.split(";").forEach((cookie) => {
                const cookieName = cookie.split("=")[0].trim();
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            });
    
            // Clear IndexedDB if you need to (can be optional)
            if (window.indexedDB) {
                const request = indexedDB.deleteDatabase('your-database-name'); // Replace with your actual DB name
                request.onsuccess = function () {
                    console.log('IndexedDB cleared');
                };
                request.onerror = function (error) {
                    console.error('Error clearing IndexedDB:', error);
                };
            }
    
            // Clear CacheStorage if needed (can be optional)
            if (window.caches) {
                caches.keys().then((cacheNames) => {
                    cacheNames.forEach((cacheName) => {
                        caches.delete(cacheName);
                    });
                });
            }
    
            // Navigate to the homepage or login page after clearing everything
            navigate('/');
        } catch (err) {
            console.log("Error during logout:", err);
            // In case of an error, clear all stored data and navigate anyway
            localStorage.clear();
            sessionStorage.clear();
            navigate('/');
        }
    };
    
    const [open, setOpen] = useState(true);

    return (
        <>
            {/* Top Navbar - Transparent */}
            <div className="flex fixed w-screen h-14 bg-transparent">
                <div className="py-3 bg-[#b7b8bb8f] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500">
                    <HiMenuAlt1
                        size={26}
                        className="cursor-pointer mx-auto"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>

            {/* Left-side Navbar - Black Background */}
            <section className={`max-md:mt-16 max-md:fixed flex gap-6 fixed`}>
                <div
                    className={`bg-black shadow-2xl flex flex-col justify-between max-md:h-full h-screen w-16 max-md:${open && "hidden"} duration-500 rounded-r-2xl text-gray-100 px-4`}
                >
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                state={menu?.data}
                                key={i}
                                className={`${menu?.margin && "mt-5"} group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
                            >
                                <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500`}
                                >
                                </h2>
                                <h2
                                    className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>

                    {/* Logout Button */}
                    <div
                        className={`group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
                    >
                        <div>
                            <BiLogOut size={25} className="my-10 mx-auto hover:text-blue-700 cursor-pointer" onClick={logout} />
                        </div>
                        <h2
                            style={{
                                transitionDelay: `${13}00ms`,
                            }}
                            className={`whitespace-pre duration-500`}
                        >
                        </h2>
                        <h2
                            className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                        >
                            Logout
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;



// import React, { useEffect, useState } from "react";
// import { HiMenuAlt1 } from 'react-icons/hi';
// import { FaUserCircle, FaHome } from 'react-icons/fa';
// import { CgImport } from 'react-icons/cg';
// import { MdPendingActions } from 'react-icons/md';
// import { BiLogOut, BiHistory } from 'react-icons/bi';
// import { FaHandshake } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { RiAddCircleLine } from 'react-icons/ri'; // Import for "Influencer Consolidation" icon

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [brandData, setBrandData] = useState({});

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

//     useEffect(() => {
//         getBrandData();
//     }, []);

//     const menus = [
//         { name: "Home", link: "/BrandPendingRequest", icon: FaHome, data: brandData },
//         { name: "Campaign Ideas", link: "/BrandPendingRequest", icon: MdPendingActions, data: brandData },
//         { name: "Influencers Comparison", link: "/compare", icon: CgImport }, // Changed route to /compare
//         { name: "Plan and List", link: "/BrandConsignments", icon: FaHandshake, data: brandData },
//         { name: "Campaign Reports", link: "/BrandHistory", icon: BiHistory, data: brandData },
//         { name: "Profile", link: "/BrandProfile", icon: FaUserCircle, data: brandData },
//         { name: "Influencer Consolidation", link: "/consolidation", icon: RiAddCircleLine }, // New menu for Influencer Consolidation
//     ];

//     // Logout function
//     const logout = async () => {
//         try {
//             const res = await axios.get('/logout');
//             console.log(res.data);
//             if (res.data.success === true) {
//                 navigate('/');
//             }
//         } catch (err) {
//             console.log(err);
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
//                                     {menu?.name}
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
