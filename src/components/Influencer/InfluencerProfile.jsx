// import React, { useEffect, useState } from "react";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { BsFacebook, BsInstagram } from "react-icons/bs";
// import { FaInstagram, FaUserEdit } from "react-icons/fa";
// import { FiTwitter } from "react-icons/fi";
// import { RiFacebookBoxLine } from "react-icons/ri";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import InfluencerHeader from "./InfluencerHeader";

// import axios from "axios";
// import { NavLink, useLocation } from "react-router-dom";
// import loader from "../../Images/loader.gif";
// import Navbar from "./Navbar";

// const InfluencerProfile = () => {
//   const location = useLocation();
//   const [userdata, setuserdata] = useState({});
//   const [adrequired, setAdrequired] = useState(userdata.Adsrequired);
//   const [brandData, setbrandData] = useState([]);
//   const [date, setDate] = useState();
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   setuserdata(location.state)
//   //   // console.log(userdata);
//   // }, [])



//   const getInfluencerData = async () => {
//     // Retrieve the influencer ID from localStorage
//     const influencerId = localStorage.getItem("influencerID");
  
//     // Log it to the console
//     console.log("Influencer ID from localStorage:", influencerId);
  
//     // Ensure influencerId exists in localStorage
//     if (!influencerId) {
//       console.log("No influencer ID found in localStorage.");
//       return;
//     }
  
//     try {
//       // Pass the influencerId dynamically in the URL
//       const res = await axios.get(`https://server-side-influencer-1.onrender.com/influencer/getInfluencer/${influencerId}`);
  
//       // Get the data from the response
//       const data = res.data;
  
//       // Set the user data (assuming you're using React's useState for userdata)
//       setuserdata(data.data);
  
//       // Optionally log the data for debugging
//       console.log("Logged in influencer data is:", data.data);
//     } catch (err) {
//       console.error("Error fetching influencer data:", err);
//     }
//   };
  
//   const getConnectedBrand = async () => {
//     // console.log(userdata._id);
//     try {
//       setLoading(true)
//       const res = await axios.post('brand/getconnectedbrand', { id: userdata._id });
//       const data = res.data;
//       console.log(data);
//       setbrandData(data.data);
//       setDate(data.date)
//       setLoading(false)
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     getInfluencerData()

//   }, [])
//   useEffect(() => {
//     getConnectedBrand()
//   }, [userdata._id])
//   return (
//     <div className='flex h-[screen]'>
//       <Navbar />
//       <div className=' ml-14 w-screen'>
//         <InfluencerHeader page="Profile" />
//         <div class="h-full py-8 w-5/6 m-auto">
//           <div class="bg-white w-5/6 m-auto rounded-lg border-2  shadow-xl pb-8">
      
              
//             <div class="w-full h-[300px]">
//               <img src={userdata.photo} class="w-full h-full rounded-tl-lg rounded-tr-lg" />
//             </div>
//             <div class="flex flex-col items-center -mt-20">
//               <img
//                 // src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" 
//                 src={userdata.profile}
//                 class="w-40 h-40 border-4 border-white bg-gray-50 rounded-full" />
//               <div class="flex items-center space-x-2 mt-2">
//                 <p class="text-2xl">{userdata.fname + " " + userdata.lname}</p>
//                 <span class="bg-blue-500 rounded-full p-1" title="Verified">
//                   <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                 </span>
//               </div>
//               <p class="text-gray-700">Influencer</p>
//               <p class="text-sm text-gray-500">{userdata.city + ", " + userdata.country}</p>
//             </div>
//             <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
//               <div class="flex items-center space-x-4 mt-2">
//                 <NavLink to='/InfluencerProfileEdit' state={userdata}>

//                   <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
//                     <FaUserEdit size={17} />
//                     <span>Edit Profile</span>
//                   </button>
//                 </NavLink>
//                 {
//                   adrequired == false ?
//                     <button
//                       onClick={async (e) => {
//                         e.preventDefault();
//                         try {
//                           const res = await axios.put('influencer/adsrequired', userdata.email)
//                           console.log(res);
//                           const data = res.data;
//                           if (data.success === true) {
//                             toast.success(data.message);
//                           }
//                           // setuserdata({ ...userdata, Adsrequired: false })
//                           // location.reload();
//                           setAdrequired(true)

//                         } catch (err) {
//                           console.log(err);
//                         }
//                       }}
//                       class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">

//                       <span>Request Ads</span>
//                     </button> :
//                     <button
//                       onClick={async (e) => {
//                         e.preventDefault();
//                         console.log(adrequired);
//                         try {
//                           const res = await axios.put('influencer/adsrequiredremove', userdata.email)
//                           console.log(res);
//                           const data = res.data;
//                           if (data.success === true) {
//                             toast.success(data.message);
//                           }
//                           // setuserdata({ ...userdata, Adsrequired: true })
//                           // location.reload();
//                           setAdrequired(false)
//                         } catch (err) {
//                           console.log(err);
//                         }
//                       }}
//                       class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
//                       <span>Remove Request</span>
//                     </button>
//                 }

//               </div>
//             </div>
//           </div>


//           <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
//             <div class="w-full flex flex-col 2xl:w-1/3">
//               {/*                 Personal Info                      */}
//               <div class="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
//                 <h4 class="text-xl text-gray-900 font-bold">Personal Information</h4>
//                 <ul class="mt-2 text-gray-700">
//                   <li class="flex border-y py-2">
//                     <span class="font-bold w-24">Full name:</span>
//                     <span class="text-gray-700">{userdata.fname + " " + userdata.lname}
//                     </span>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Age:</span>
//                     <span class="text-gray-700">{userdata.age}</span>
//                   </li>
//                   {/* <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Joined:</span>
//                     <span class="text-gray-700">10 Jan 2022 (25 days ago)</span>
//                   </li> */}
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Mobile:</span>
//                     <span class="text-gray-700">{userdata.phone}</span>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Email:</span>
//                     <span class="text-gray-700">{userdata.email}</span>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Location:</span>
//                     <span class="text-gray-700">{userdata.city + ", " + userdata.state + ", " + userdata.country}</span>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Languages:</span>
//                     <span class="text-gray-700">English, Hindi</span>
//                   </li>
//                   <li class="flex items-center border-b py-2 space-x-2">
//                     <span class="font-bold w-24">Elsewhere:</span>
//                     <a
//                       target="_blank"
//                       href={userdata.facebookURL}
//                       title="Facebook">
//                       <BsFacebook size={20} color='#3b5998' />
//                     </a>
//                     <a target="_blank"
//                       href={userdata.twitterURL}
//                       title="Twitter">
//                       <AiFillTwitterCircle size={24} color='#1da1f2' />

//                     </a>
//                     {/* <a href="#" title="LinkedIn">
//                       <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#0077b5"></path></svg>
//                     </a> */}
//                     <a
//                       target="_blank"
//                       href={userdata.instagramURL}
//                       title="Instagram">
//                       <BsInstagram size={20} color="#E1306C" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               {/*                 activity                      */}
//               <div class="flex-1 bg-white border-2 rounded-lg shadow-xl mt-4 p-8">
//                 <h4 class="text-xl text-gray-900 font-bold">My Activity Logs</h4>
//                 <div class="relative px-4">
//                   <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

//                   {/* <!-- start::Timeline item --> */}
//                   {loading === true ?
//                     <img src={loader} alt="laoding" className="h-52 mx-auto"
//                     />
//                     :
//                     <div>

//                       {brandData.length == 0 ? <div>No Brands connected</div> :
//                         brandData?.map((data, index) => (
//                           <div class="flex items-center w-full my-1 -ml-1.5">
//                             <div class="w-1/12 z-10">
//                               <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <img src={data.logo} className="w-8 h-8 rounded-full mx-5 " alt="profile" />
//                             <div class="w-11/12">
//                               <a href={data.instagramUrl} target="_blank" title="Instagram">
//                                 <div class="text-sm font-semibold cursor-pointer">{data.shopName}</div>
//                               </a>
//                               <p class="text-xs text-gray-500">{date[index]}</p>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   }

//                 </div>

//               </div>
//             </div>
//             {/*                 Avout                        */}
//             <div class="flex flex-col w-full 2xl:w-2/3">
//               <div class="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
//                 <h4 class="text-xl text-gray-900 font-bold">About</h4>
//                 <p class="mt-2 text-gray-700">{userdata.discription}</p>
//               </div>
//               {/*                 Social Information                     */}
//               <div class="flex-1 bg-white border-2 rounded-lg shadow-xl mt-4 p-8">
//                 <h4 class="text-xl text-gray-900 font-bold">Social Media</h4>

//                 <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4  ">
//                   <div className="items-center mt-10 ">
//                     <div
//                       class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//                     >
//                       <div className=" flex justify-between items-center">
//                         <RiFacebookBoxLine size={25} className="text-[#3b5998] " />
//                         <a href={userdata.facebookURL}
//                           target="_blank"
//                           className="hover:text-blue-600" >Click here...</a>
//                       </div>

//                       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
//                       <div className="flex justify-between font-bold">
//                         {userdata?.facebookFollowers ?
//                           <div className="justify-center align-middle text-center">{userdata.facebookFollowers}<div className="text-xs font-normal">Followers</div></div>
//                           : ""}
//                         {userdata?.facebookComments ?
//                           <div className="justify-center align-middle text-center">{userdata.facebookComments}<div className="text-xs font-normal">Comments</div></div>
//                           : ""}
//                         {userdata?.facebookEngagementRate ?
//                           <div className="justify-center align-middle text-center">{userdata.facebookEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
//                           : ""}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="items-center mt-10">
//                     <div
//                       class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//                     >
//                       <div className="flex justify-between items-center">
//                         <FaInstagram size={25} className="text-[#d62976] " />
//                         <a href={userdata.instagramURL}
//                           target="_blank"
//                           className="hover:text-blue-600" >Click here...</a>
//                       </div>

//                       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
//                       <div className="flex justify-between font-bold">
//                         {userdata?.instagramFollowers ?
//                           <div className="justify-center align-middle text-center">{userdata.instagramFollowers}<div className="text-xs font-normal">Followers</div></div>
//                           : ""}
//                         {userdata?.instagramComments ?
//                           <div className="justify-center align-middle text-center">{userdata.instagramComments}<div className="text-xs font-normal">Comments</div></div>
//                           : ""}
//                         {userdata?.instagramEngagementRate ?
//                           <div className="justify-center align-middle text-center">{userdata.instagramEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
//                           : ""} </div>
//                     </div>
//                   </div>
//                   <div className="items-center mt-10">
//                     <div
//                       class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//                     >
//                       <div className="flex justify-between items-center">
//                         <FiTwitter size={25} className="text-[#00acee] " />
//                         <a href={userdata.twitterURL}
//                           target="_blank"
//                           className="hover:text-blue-600" >Click here...</a>
//                       </div>

//                       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
//                       <div className="flex justify-between font-bold">
//                         {userdata?.twitterFollowers ?
//                           <div className="justify-center align-middle text-center">{userdata.twitterFollowers}<div className="text-xs font-normal">Followers</div></div>
//                           : ""}
//                         {userdata?.twitterComments ?
//                           <div className="justify-center align-middle text-center">{userdata.twitterComments}<div className="text-xs font-normal">Comments</div></div>
//                           : ""}
//                         {userdata?.twitterEngagementRate ?
//                           <div className="justify-center align-middle text-center">{userdata.twitterEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
//                           : ""} </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>


//         </div>
//       </div>

//       <ToastContainer autoClose={800} />

//     </div>

//   );
// };

// export default InfluencerProfile;








import React, { useEffect, useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfluencerHeader from "./InfluencerHeader";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

const InfluencerProfile = () => {
  const [userdata, setuserdata] = useState({});
  const [adrequired, setAdrequired] = useState(userdata.Adsrequired);
  const [loading, setLoading] = useState(true);

  // Fetch influencer data using fetch API
  const getInfluencerData = () => {
    const influencerId = localStorage.getItem("influencerID");

    if (!influencerId) {
      console.log("No influencer ID found in localStorage.");
      return;
    }

    // API call to fetch influencer data
    fetch(`https://server-side-influencer-1.onrender.com/influencer/getInfluencer/${influencerId}`)
      .then(response => response.json())
      .then(data => {
        setuserdata(data.data);
        setLoading(false);
        console.log("Logged in influencer data is:", data.data);
      })
      .catch(err => {
        console.error("Error fetching influencer data:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getInfluencerData();
  }, []);

  return (
    <div className='flex h-[screen]'>
      <Navbar />
      <div className=' ml-14 w-screen'>
        <InfluencerHeader page="Profile" />
        <div className="h-full py-8 w-5/6 m-auto">
          <div className="bg-white w-5/6 m-auto rounded-lg border-2 shadow-xl pb-8">
            <div className="w-full h-[300px]">
              <img src={userdata.photo} className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div className="flex flex-col items-center -mt-20">
              <img
                src={userdata.profile}
                className="w-40 h-40 border-4 border-white bg-gray-50 rounded-full" />
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{userdata.fname + " " + userdata.lname}</p>
                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </div>
              <p className="text-gray-700">Influencer</p>
              <p className="text-sm text-gray-500">{userdata.city + ", " + userdata.country}</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                  <FaUserEdit size={17} />
                  <span>Edit Profile</span>
                </button>
                {
                  adrequired === false ?
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          const res = await fetch('influencer/adsrequired', {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: userdata.email })
                          })
                          const data = await res.json();
                          if (data.success === true) {
                            toast.success(data.message);
                          }
                          setAdrequired(true);
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                      <span>Request Ads</span>
                    </button> :
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          const res = await fetch('influencer/adsrequiredremove', {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: userdata.email })
                          });
                          const data = await res.json();
                          if (data.success === true) {
                            toast.success(data.message);
                          }
                          setAdrequired(false);
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                      <span>Remove Request</span>
                    </button>
                }
              </div>
            </div>
          </div>

          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
              <div className="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">Personal Information</h4>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Full name:</span>
                    <span className="text-gray-700">{userdata.fname + " " + userdata.lname}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Age:</span>
                    <span className="text-gray-700">{userdata.age}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Mobile:</span>
                    <span className="text-gray-700">{userdata.phone}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Email:</span>
                    <span className="text-gray-700">{userdata.email}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Location:</span>
                    <span className="text-gray-700">{userdata.city + ", " + userdata.state + ", " + userdata.country}</span>
                  </li>
                  <li className="flex border-b py-2">
                    <span className="font-bold w-24">Languages:</span>
                    <span className="text-gray-700">English, Hindi</span>
                  </li>
                  <li className="flex items-center border-b py-2 space-x-2">
                    <span className="font-bold w-24">Elsewhere:</span>
                    <a target="_blank" href={userdata.facebookURL} title="Facebook">
                      <BsFacebook size={20} color='#3b5998' />
                    </a>
                    <a target="_blank" href={userdata.twitterURL} title="Twitter">
                      <AiFillTwitterCircle size={24} color='#1da1f2' />
                    </a>
                    <a target="_blank" href={userdata.instagramURL} title="Instagram">
                      <BsInstagram size={20} color="#E1306C" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col w-full 2xl:w-2/3">
              <div className="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">About</h4>
                <p className="mt-2 text-gray-700">{userdata.discription}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ToastContainer autoClose={800} />
    </div>
  );
};

export default InfluencerProfile;
