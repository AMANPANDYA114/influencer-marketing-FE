// import React, { useState } from "react";
// import { HiMenuAlt1 } from 'react-icons/hi';
// import { FaUserCircle, FaHome } from 'react-icons/fa';
// import { BiLogOut, BiHistory } from 'react-icons/bi'
// import { BsPersonPlusFill } from 'react-icons/bs';
// import { AiTwotoneShop } from 'react-icons/ai';

// // import { IoPersonAdd, IoPersonAddSharp } from 'react-icons/Io';  
// import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";

// const Navbar = () => {
//     const navigate = useNavigate();
//     const menus = [
//         { name: "Home", link: "/ManagerHome", icon: FaHome },
//         { name: "Add Brand", link: "/AddNewBrand", icon: AiTwotoneShop },
//         { name: "Add Influencer", link: "/AddNewInfluencer", icon: BsPersonPlusFill },
//         { name: "Profile", link: "/ManagerProfile", icon: FaUserCircle },
//     ];

//     const [open, setOpen] = useState(true);
//     const logout = async () => {
//         try {

//             const res = await axios.get('https://server-side-influencer-1.onrender.com/logout')
//             console.log(res.data);
//             if (res.data.success == true) {
//                 navigate('/');
//             }
//         } catch (err) {
//             console.log(err);
//             navigate('/');

//         }

//     }
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
//                     className={`bg-gray-400 shadow-2xl flex flex-col justify-between max-md:h-full h-screen w-14 max-md:${open && "hidden"} duration-500 rounded-r-2xl text-gray-100 px-4`}
//                 >
//                     <div className="mt-4 flex flex-col gap-4 relative">
//                         {menus?.map((menu, i) => (
//                             <Link
//                                 to={menu?.link}
//                                 key={i}
//                                 className={`${menu?.margin && "mt-5"} group flex items-center
//                                cursor-pointer        text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                             >
//                                 <div >{React.createElement(menu?.icon, { size: "25" })}</div>
//                                 <h2
//                                     style={{
//                                         transitionDelay: `${i + 3}00ms`,
//                                     }}
//                                     className={`whitespace-pre duration-500 `}
//                                 >
//                                 </h2>
//                                 <h2
//                                     className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
//                                 >
//                                     {menu?.name}
//                                 </h2>
//                             </Link>
//                         ))}
//                     </div>
//                     <div
//                         className={`group flex items-center
//                     cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
//                     >
//                         <div  ><BiLogOut size={25} className="my-10 mx-auto  hover:text-blue-700 cursor-pointer          " onClick={logout} /></div>
//                         <h2
//                             style={{
//                                 transitionDelay: `${13}00ms`,
//                             }}
//                             className={`whitespace-pre duration-500 `}
//                         >
//                         </h2>
//                         <h2
//                             className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
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






import React, { useState } from "react";
import { AiTwotoneShop, AiOutlineFileSearch } from 'react-icons/ai'; // Updated import for "Pending Requests" icon
import { BiLogOut } from 'react-icons/bi';
import { BsPersonPlusFill } from 'react-icons/bs';
import { FaHome, FaUserCircle } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const menus = [
        { name: "Home", link: "/ManagerHome", icon: FaHome },
        { name: "Requests", link: "/request", icon: AiOutlineFileSearch },  // Replaced with AiOutlineFileSearch
        { name: "Add Brand", link: "/AddNewBrand", icon: AiTwotoneShop },
        { name: "Add Influencer", link: "/AddNewInfluencer", icon: BsPersonPlusFill },
        { name: "Profile", link: "/ManagerProfile", icon: FaUserCircle },
    ];

    const [open, setOpen] = useState(true);

    // const logout = async () => {
    //     try {
    //         // Send logout request to server
    //         const res = await axios.get('https://server-side-influencer.vercel.app/logout');
    //         console.log(res.data);
    //         if (res.data.success === true) {
    //             // Clear localStorage and sessionStorage
    //             localStorage.clear();   // Clears all data stored in localStorage
    //             sessionStorage.clear(); // Clears all data stored in sessionStorage
                
    //             // Navigate to the homepage or login page after logout
    //             navigate('/');
    //         }
    //     } catch (err) {
    //         console.log(err);
    //         // If there's an error, clear the storage and navigate anyway
    //         localStorage.clear();
    //         sessionStorage.clear();
    //         navigate('/');
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
    
    return (
        <>
            <div className="flex fixed w-screen h-14">
                <div className="py-3 bg-[#b7b8bb8f] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500">
                    <HiMenuAlt1
                        size={26}
                        className="cursor-pointer mx-auto"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>

            <section className={`max-md:mt-16 max-md:fixed flex gap-6 fixed`}>
                <div
                    className={`bg-black shadow-2xl flex flex-col justify-between max-md:h-full h-screen w-14 max-md:${open && "hidden"} duration-500 rounded-r-2xl text-gray-100 px-4`}
                >
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                key={i}
                                className={`${menu?.margin && "mt-5"} group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
                            >
                                <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500`}
                                />
                                <h2
                                    className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>

                    <div
                        className={`group flex items-center cursor-pointer text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-700`}
                    >
                        <div>
                            <BiLogOut 
                                size={25} 
                                className="my-10 mx-auto hover:text-blue-700 cursor-pointer" 
                                onClick={logout} 
                            />
                        </div>
                        <h2
                            style={{
                                transitionDelay: `${13}00ms`,
                            }}
                            className={`whitespace-pre duration-500`}
                        />
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
