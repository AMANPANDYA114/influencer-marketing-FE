




// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { BsFacebook, BsInstagram } from "react-icons/bs";
// import { FaInstagram, FaUserEdit } from "react-icons/fa";
// import { FiTwitter } from "react-icons/fi";
// import { RiFacebookBoxLine } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import BrandHeader from "./BrandHeader";
// import Navbar from "./Navbar";

// import Slider from "react-slick";
// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import styled from "styled-components";
// import loader from "../../Images/loader.gif";

// const BrandProfile = () => {
//   const navigate = useNavigate();
//   const [brandData, setbrandData] = useState({});
//   const [influencerData, setInfluencerData] = useState([]);
//   const [date, setDate] = useState();
//   const [loading, setLoading] = useState(true);


  

//   const getBrandData = async () => {
//     try {
//       // Retrieve the brandId from localStorage
//       const brandId = localStorage.getItem("brandID");

//       if (!brandId) {
//         console.log("Brand ID not found in localStorage");
//         return;
//       }

//       // Make the API call with the brandId from localStorage
//       const { data } = await axios.get(`/brand/getBrandData/${brandId}`);
      
//       // Set the response data to the state
//       setbrandData(data.data);
//       console.log("Logged in brand is adta:- ", brandData);
//     } catch (err) {
//       console.log(err.response.status);
//       if (err.response.status === 422) {
//         navigate('/');
//       }
//     }
//   };

//   // Call getBrandData when the component mounts
//   useEffect(() => {
//     getBrandData();
//   }, []);

//   const getConnectedInf = async () => {
//     console.log();
//     try {
//       setLoading(true)
//       const res = await axios.post('influencer/getconnectedinf', { id: brandData._id });
//       const data = res.data;
//       console.log(data);
//       setInfluencerData(data.data);
//       setDate(data.date)
//       setLoading(false)
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   // const getBrandData = async () => {
//   //   try {

//   //     const { data } = await axios.get("/brand/getBrandData");
//   //     // const data = res.data;
//   //     // console.log(data);
//   //     setbrandData(data.data);
//   //     console.log("Logged in brand is:- ");
//   //     console.log(brandData);
//   //   } catch (err) {
//   //     console.log(err.response.status);
//   //     if (err.response.status == 422) {
//   //       navigate('/')
//   //     }
//   //   }
//   // };


//   // useEffect(() => {
//   //   getBrandData();
//   // }, []);



//   useEffect(() => {

//     getConnectedInf();
//   }, [brandData._id])
//   const editprofile = () => {
//     navigate('/BrandProfileEdit', { state: brandData })
//   }

//   const images = brandData.images;
//   const divStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     height: "200px",
//     borderRadius: "12px",
//     margin: "10px",
//   };
//   let settings = {
//     // dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//   };
//   return (
//     <div className="flex ">
//       <Navbar />

//       <div className=" ml-14 w-screen max-sm:ml-0 h-screen">
//         <BrandHeader page="Profile" />
//         <div class="h-full py-8 w-5/6 m-auto">
//           <div class="bg-white border-2 w-5/6 m-auto rounded-lg shadow-xl pb-8">
//             <div class="w-full h-[300px]">
//               <img
//                 src={brandData.photo1}
//                 class="w-full h-full rounded-tl-lg rounded-tr-lg"
//               />
//             </div>
//             <div class="flex flex-col items-center -mt-20">
//               <img
//                 //src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
//                 src={brandData.logo}
//                 class="w-40 h-40 border-4 border-white bg-gray-50 rounded-sm "
//               />
//               <div class="flex items-center space-x-2 mt-2">
//                 <p class="text-2xl">{brandData.uname}</p>
//                 <span class="bg-blue-500 rounded-full p-1" title="Verified">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     class="text-gray-100 h-2.5 w-2.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="4"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                 </span>
//               </div>
//               <p class="text-gray-700">Brand</p>
//               <p class="text-sm text-gray-500">
//                 {brandData.city + " , " + brandData.country}
//               </p>

//               <button
//                 onClick={editprofile}
//                 class="mt-5 flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
//                 <FaUserEdit size={17} />
//                 <span>Edit Profile</span>
//               </button>

//             </div>
//           </div>

//           <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
//             <div class="w-full flex flex-col 2xl:w-1/3">
//               {/*                  Personal Info                      */}
//               <div class="flex-1 border-2 bg-white rounded-lg shadow-xl p-8">
//                 <h4 class="text-xl text-gray-900 font-bold">Brand Information</h4>
//                 <ul class="mt-2 text-gray-700">
//                   <li class="flex border-y py-2">
//                     <span class="font-bold w-54">Brand name:</span>
//                     <span class="text-gray-700">{brandData.shopName}</span>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Brand Type:</span>
//                     <span class="text-gray-700">{brandData.brandType}</span>
//                   </li>
//                   {/* <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Joined:</span>
//                     <span class="text-gray-700">10 Jan 2022 (25 days ago)</span>
//                   </li> */}
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Mobile:</span>
//                     <span class="text-gray-700">{brandData.phone}</span>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Email:</span>
//                     <span class="text-gray-700">{brandData.email}</span>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Location:</span>
//                     <a href={brandData.location} className="text-gray-700">Click here...</a>
//                   </li>
//                   <li class="flex border-b py-2">
//                     <span class="font-bold w-24">Languages:</span>
//                     <span class="text-gray-700">English, Hindi</span>
//                   </li>
//                   <li class="flex items-center border-b py-2 space-x-2">
//                     <span class="font-bold w-24">Elsewhere:</span>
//                     <a
//                       target="_blank"
//                       href={brandData.facebookUrl}
//                       title="Facebook"
//                     >
//                       <BsFacebook size={20} color="#3b5998" />
//                     </a>
//                     <a
//                       target="_blank"
//                       href={brandData.twitterUrl}
//                       title="Twitter"
//                     >
//                       <AiFillTwitterCircle size={24} color="#1da1f2" />
//                     </a>
//                     <a href="#" title="LinkedIn">
//                       <svg
//                         class="w-5 h-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 333333 333333"
//                         shape-rendering="geometricPrecision"
//                         text-rendering="geometricPrecision"
//                         image-rendering="optimizeQuality"
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                       >
//                         <path
//                           d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
//                           fill="#0077b5"
//                         ></path>
//                       </svg>
//                     </a>
//                     <a
//                       target="_blank"
//                       href={brandData.instagramUrl}
//                       title="Instagram"
//                     >
//                       <BsInstagram size={20} color="#E1306C" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               {/*                 activity                      */}
//               <div class="flex-1 border-2 bg-white rounded-lg shadow-xl mt-4 p-8">
//                 <h4 class="text-xl text-gray-900 font-bold">My Activity</h4>
//                 <div class="relative px-4">
//                   <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

//                   {loading === true ?
//                     <img src={loader} alt="laoding" className="h-52 mx-auto"
//                     />
//                     :
//                     <div>

//                       {influencerData.length == 0 ? <div>No Influencer connected</div> :
//                         influencerData?.map((data, index) => (
//                           <div class="flex items-center w-full my-1 -ml-1.5">
//                             <div class="w-1/12 z-10">
//                               <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
//                             </div>
//                             <img src={data.profile} className="w-8 h-8 rounded-full mx-5 " alt="profile" />
//                             <div class="w-11/12">
//                               <p class="text-sm font-semibold">{data.fname + " " + data.lname}</p>
//                               <p class="text-xs text-gray-500">{date[index]}</p>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   }
//                 </div>
//               </div>
//             </div>
//             {/*                 About                        */}
//             <div class="flex flex-col w-full 2xl:w-2/3">
//               <div class="flex-1 border-2 bg-white rounded-lg shadow-xl p-8">
//                 <h4 class="text-xl text-gray-900 font-bold">About</h4>
//                 <p class="mt-2 text-gray-700">{brandData.description}</p>
//                 <h4 class="text-xl text-gray-900 font-bold mt-5">Social Media</h4>

//                 <div class="flex  justify-between mt-5 mx-10 max-sm:w-5/6 max-md:w-full max-sm:gap-y-5  max-sm:flex-col ">
//                   {brandData.facebook?<div className="bg-gray-200 px-3 py-4 rounded-md items-center  ">
                    
//                       <div className=" flex justify-between space-x-5  items-center">
//                         <RiFacebookBoxLine size={25} className="text-[#3b5998] " />
//                         <a href={brandData.facebookUrl}
//                           target="_blank"
//                           className="hover:text-blue-600" >{brandData.facebook}</a>
//                       </div>
//                   </div>:""}
//                   {brandData.instagram?<div className="bg-gray-200 px-3 py-4 rounded-md items-center ">
                    
//                       <div className="flex justify-between space-x-5  items-center">
//                         <FaInstagram size={25} className="text-[#d62976] " />
//                         <a href={brandData.instagramUrl}
//                           target="_blank"
//                           className="hover:text-blue-600" >{brandData.instagram}</a>
//                       </div>

//                   </div>:""}
//                   {
//                     brandData.twitter?
//                   <div className="bg-gray-200 px-3 py-4 rounded-md items-center ">
                    
//                       <div className="flex justify-between space-x-5  items-center">
//                         <FiTwitter size={25} className="text-[#00acee] " />
//                         <a href={brandData.twitterUrl}
//                           target="_blank"
//                           className="hover:text-blue-600" >{brandData.twitter}</a>
//                       </div>
//                   </div>:""
//                   }
                
//               </div>
               
//               </div>
//               {/*                 Social Information                     */}
//               <div class="flex-1 border-2 bg-white rounded-lg shadow-xl mt-4 p-8">
//               <h4 class="text-xl text-gray-900 font-bold">Images</h4>
//                 <div className="w-3/4 max-sm:w-full mx-auto">
//                   <Carousel {...settings}>
//                     {
//                       images?.map((slideImage, index) => (
//                         <Wrap>
//                           <div key={index}>
//                             <div
//                               style={{
//                                 ...divStyle,
//                                 backgroundImage: `url(${slideImage.url})`,
//                               }}
//                             ></div>
//                           </div>
//                         </Wrap>
//                       ))
//                     }
//                   </Carousel>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div >
//   );
// };

// const Carousel = styled(Slider)`
//   il li button {
//     &:before {
//       font-size: 50px;
//       color: white;
//     }
//   }

//   .slick-list {
//     overflow: hidden;
//     color: white;
//   }
//   button {
//     z-index: 1;
//     color: white;
//   }
//   .slick-dots li button:before {
//     color: white;
//   }
//   .slick-next {
//     right: 15px;
//   }
//   .slick-prev {
//     left: 15px;
//   }
// `;

// const Wrap = styled.div`
//   // transition-duration: 300ms;
//   // &:hover {
//   //   border: 4px solid rgba(249, 249, 249, 0.8);
//   // }
// `;

// export default BrandProfile;



// import React, { useEffect, useState } from "react";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { BsFacebook, BsInstagram } from "react-icons/bs";
// import { FaUserEdit } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import BrandHeader from "./BrandHeader";
// import Navbar from "./Navbar";

// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// const BrandProfile = () => {
//   const navigate = useNavigate();
//   const [brandData, setBrandData] = useState({});
//   const [loading, setLoading] = useState(true);

//   const getBrandData = async () => {
//     try {
//       // Retrieve the brandId from localStorage
//       const brandId = localStorage.getItem("brandID");

//       if (!brandId) {
//         console.log("Brand ID not found in localStorage");
//         return;
//       }

//       // Make the API call with the brandId from localStorage
//       const response = await fetch(`https://server-side-influencer.vercel.app/brand/getBrandData/${brandId}`);
//       const data = await response.json();
      
//       // Set the response data to the state
//       setBrandData(data.data);
//       console.log("Logged in brand is data:- ", data.data);
//     } catch (err) {
//       console.log(err);
//       if (err.response.status === 422) {
//         navigate('/');
//       }
//     }
//   };

//   // Call getBrandData when the component mounts
//   useEffect(() => {
//     getBrandData();
//   }, []);

//   const editProfile = () => {
//     navigate('/BrandProfileEdit', { state: brandData });
//   };

//   const images = brandData.images;
//   const divStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundSize: "cover",
//     height: "200px",
//     borderRadius: "12px",
//     margin: "10px",
//   };

//   let settings = {
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

//   return (
//     <div className="flex">
//       <Navbar />

//       <div className="ml-14 w-screen max-sm:ml-0 h-screen">
//         <BrandHeader page="Profile" />
//         <div className="h-full py-8 w-5/6 m-auto">
//           <div className="bg-white border-2 w-5/6 m-auto rounded-lg shadow-xl pb-8">
//             <div className="w-full h-[300px]">
//               <img
//                 src={brandData.brandbackgroundimage2}
//                 className="w-full h-full rounded-tl-lg rounded-tr-lg"
//               />
//             </div>
//             <div className="flex flex-col items-center -mt-20">
//               <img
//                 src={brandData.brandbackgroundimage}
//                 className="w-40 h-40 border-4 border-white bg-gray-50 rounded-sm "
//               />
//               <div className="flex items-center space-x-2 mt-2">
//                 <p className="text-2xl">{brandData.uname}</p>
//                 <span className="bg-blue-500 rounded-full p-1" title="Verified">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="text-gray-100 h-2.5 w-2.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="4"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                 </span>
//               </div>
//               <p className="text-gray-700">Brand</p>
//               <p className="text-sm text-gray-500">
//                 {brandData.city + " , " + brandData.country}
//               </p>

//               <button
//                 onClick={editProfile}
//                 className="mt-5 flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
//                 <FaUserEdit size={17} />
//                 <span>Edit Profile</span>
//               </button>
//             </div>
//           </div>

//           <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
//             <div className="w-full flex flex-col 2xl:w-1/3">
//               <div className="flex-1 border-2 bg-white rounded-lg shadow-xl p-8">
//                 <h4 className="text-xl text-gray-900 font-bold">Brand Information</h4>
//                 <ul className="mt-2 text-gray-700">
//                   <li className="flex border-y py-2">
//                     <span className="font-bold w-54">Brand name:</span>
//                     <span className="text-gray-700">{brandData.shopName}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Brand Type:</span>
//                     <span className="text-gray-700">{brandData.brandType}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Mobile:</span>
//                     <span className="text-gray-700">{brandData.phone}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Email:</span>
//                     <span className="text-gray-700">{brandData.email}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Location:</span>
//                     <a href={brandData.location} className="text-gray-700">Click here...</a>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Languages:</span>
//                     <span className="text-gray-700">English, Hindi</span>
//                   </li>
//                   <li className="flex items-center border-b py-2 space-x-2">
//                     <span className="font-bold w-24">Elsewhere:</span>
//                     <a
//                       target="_blank"
//                       href={brandData.facebookUrl}
//                       title="Facebook"
//                     >
//                       <BsFacebook size={20} color="#3b5998" />
//                     </a>
//                     <a
//                       target="_blank"
//                       href={brandData.twitterUrl}
//                       title="Twitter"
//                     >
//                       <AiFillTwitterCircle size={24} color="#1da1f2" />
//                     </a>
//                     <a href="#" title="LinkedIn">
//                       <svg
//                         className="w-5 h-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 333333 333333"
//                         shapeRendering="geometricPrecision"
//                         textRendering="geometricPrecision"
//                         imageRendering="optimizeQuality"
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                       >
//                         <path
//                           d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
//                           fill="#0077b5"
//                         ></path>
//                       </svg>
//                     </a>
//                     <a
//                       target="_blank"
//                       href={brandData.instagramUrl}
//                       title="Instagram"
//                     >
//                       <BsInstagram size={20} color="#E1306C" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div className="flex-1 border-2 bg-white rounded-lg shadow-xl mt-4 p-8">
//                 <h4 className="text-xl text-gray-900 font-bold">About</h4>
//                 <p className="mt-4 text-gray-700">{brandData.about}</p>
//               </div>
//             </div>

//             <div className="w-full 2xl:w-2/3 flex flex-col">
//               <div className="flex-1 border-2 bg-white rounded-lg shadow-xl mt-4 p-8">
             
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandProfile;







// import React, { useEffect, useState } from "react";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { BsFacebook, BsInstagram } from "react-icons/bs";
// import { FaUserEdit } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import BrandHeader from "./BrandHeader";
// import Navbar from "./Navbar";

// import "react-slideshow-image/dist/styles.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// const BrandProfile = () => {
//   const navigate = useNavigate();
//   const [brandData, setBrandData] = useState({});
//   const [loading, setLoading] = useState(true);

//   const getBrandData = async () => {
//     try {
//       const brandId = localStorage.getItem("brandID");

//       if (!brandId) {
//         console.log("Brand ID not found in localStorage");
//         return;
//       }

//       const response = await fetch(`https://server-side-influencer.vercel.app/brand/getBrandData/${brandId}`);
//       const data = await response.json();
//       setBrandData(data.data);
//       console.log("Logged in brand is data:- ", data.data);
//     } catch (err) {
//       console.log(err);
//       if (err.response.status === 422) {
//         navigate('/');
//       }
//     }
//   };

//   useEffect(() => {
//     getBrandData();
//   }, []);

//   const editProfile = () => {
//     navigate('/BrandProfileEdit', { state: brandData });
//   };

//   return (
//     <div className="flex">
//       <Navbar />

//       <div className="ml-14 w-screen max-sm:ml-0 h-screen">
//         <BrandHeader page="Profile" />
//         <div className="h-full py-8 w-5/6 m-auto">
//           <div className="bg-white border-2 w-5/6 m-auto rounded-lg shadow-xl pb-8">
//             {/* Background Image */}
//             <div className="w-full h-[250px]">
//               <img
//                 src={brandData.brandbackgroundimage2}
//                 className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
//                 alt="Brand Background"
//               />
//             </div>

//             {/* Profile Info */}
//             <div className="flex flex-col items-center -mt-16 relative z-10">
//               <img
//                 src={brandData.brandbackgroundimage}
//                 className="w-32 h-32 border-4 border-white bg-gray-50 rounded-full"
//                 alt="Profile"
//               />
//               <div className="flex items-center space-x-2 mt-2">
//                 <p className="text-2xl">{brandData.uname}</p>
//                 <span className="bg-blue-500 rounded-full p-1" title="Verified">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="text-gray-100 h-2.5 w-2.5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="4"
//                       d="M5 13l4 4L19 7"
//                     ></path>
//                   </svg>
//                 </span>
//               </div>
//               <p className="text-gray-700">Brand</p>
//               <p className="text-sm text-gray-500">{brandData.city + " , " + brandData.country}</p>

//               <button
//                 onClick={editProfile}
//                 className="mt-5 flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
//                 <FaUserEdit size={17} />
//                 <span>Edit Profile</span>
//               </button>
//             </div>
//           </div>

//           <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
//             <div className="w-full flex flex-col 2xl:w-1/3">
//               <div className="flex-1 border-2 bg-white rounded-lg shadow-xl p-8">
//                 <h4 className="text-xl text-gray-900 font-bold">Brand Information</h4>
//                 <ul className="mt-2 text-gray-700">
//                   <li className="flex border-y py-2">
//                     <span className="font-bold w-54">Brand name:</span>
//                     <span className="text-gray-700">{brandData.shopName}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Brand Type:</span>
//                     <span className="text-gray-700">{brandData.brandType}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Mobile:</span>
//                     <span className="text-gray-700">{brandData.phone}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Email:</span>
//                     <span className="text-gray-700">{brandData.email}</span>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Location:</span>
//                     <a href={brandData.location} className="text-gray-700">Click here...</a>
//                   </li>
//                   <li className="flex border-b py-2">
//                     <span className="font-bold w-24">Languages:</span>
//                     <span className="text-gray-700">English, Hindi</span>
//                   </li>
//                   <li className="flex items-center border-b py-2 space-x-2">
//                     <span className="font-bold w-24">Elsewhere:</span>
//                     <a
//                       target="_blank"
//                       href={brandData.facebookUrl}
//                       title="Facebook"
//                     >
//                       <BsFacebook size={20} color="#3b5998" />
//                     </a>
//                     <a
//                       target="_blank"
//                       href={brandData.twitterUrl}
//                       title="Twitter"
//                     >
//                       <AiFillTwitterCircle size={24} color="#1da1f2" />
//                     </a>
//                     <a href="#" title="LinkedIn">
//                       <svg
//                         className="w-5 h-5"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 333333 333333"
//                         shapeRendering="geometricPrecision"
//                         textRendering="geometricPrecision"
//                         imageRendering="optimizeQuality"
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                       >
//                         <path
//                           d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
//                           fill="#0077b5"
//                         ></path>
//                       </svg>
//                     </a>
//                     <a
//                       target="_blank"
//                       href={brandData.instagramUrl}
//                       title="Instagram"
//                     >
//                       <BsInstagram size={20} color="#E1306C" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div className="flex-1 border-2 bg-white rounded-lg shadow-xl mt-4 p-8">
//                 <h4 className="text-xl text-gray-900 font-bold">About</h4>
//                 <p className="mt-4 text-gray-700">{brandData.about}</p>
//               </div>
//             </div>

//             <div className="w-full 2xl:w-2/3 flex flex-col">
//               <div className="flex-1 border-2 bg-white rounded-lg shadow-xl mt-4 p-8">
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandProfile;







import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BrandHeader from "./BrandHeader"; // Assuming BrandHeader is the header component
import Navbar from "./Navbar";

const BrandProfile = () => {
  const navigate = useNavigate();
  const [brandData, setBrandData] = useState({});
  const [loading, setLoading] = useState(true);

  const getBrandData = async () => {
    try {
      const brandId = localStorage.getItem("brandID");
      if (!brandId) {
        console.log("Brand ID not found in localStorage");
        return;
      }
      const response = await fetch(`https://server-side-influencer.onrender.com/brand/getBrandData/${brandId}`);
      const data = await response.json();
      setBrandData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBrandData();
  }, []);

  const editProfile = () => {
    navigate('/BrandProfileEdit', { state: brandData });
  };

  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="ml-14 w-full flex flex-col flex-grow">
        {/* BrandHeader stays at the top */}
        <BrandHeader page="Profile" />

        <div className="flex flex-col items-center justify-center w-full mt-16">
          {/* Dynamically set background image */}
          <div className="w-full h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${brandData.brandbackgroundimage2 || 'https://i.postimg.cc/rwYFBbkT/agency.jpg'})` }}>
            {/* Dynamically set profile picture */}
            <img 
              src={brandData.brandbackgroundimage || "https://i.postimg.cc/rwYFBbkT/agency.jpg"} 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 bottom-[-40px]" 
            />
            <div 
              onClick={editProfile}
              className="bg-black cursor-pointer text-white p-2 rounded-full shadow-lg absolute bottom-[-30px] left-[calc(52%-15px)]"
              title="Edit Profile"
            >
              <FaUserEdit size={20} />
            </div>
          </div>

          {/* Brand Information Card */}
          <div className="w-full max-w-3xl bg-white rounded-lg border-2 shadow-xl p-6 mt-16 mx-4">
            <h4 className="text-xl text-gray-900 font-bold mb-4 text-center">Brand Information</h4>
            <ul className="text-gray-700 space-y-2">
              <li className="flex justify-between border-b pb-2">
                <span className="font-semibold">Brand Name:</span>
                <span>{brandData.shopName}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="font-semibold">Brand Type:</span>
                <span>{brandData.brandType}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="font-semibold">Phone:</span>
                <span>{brandData.phone}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="font-semibold">Email:</span>
                <span>{brandData.email}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="font-semibold">Location:</span>
                <a href={brandData.location} className="text-blue-500">Click here...</a>
              </li>
              <li className="flex justify-between pb-2">
                <span className="font-semibold">Socials:</span>
                <div className="flex space-x-2">
                  <a href={brandData.facebookUrl} target="_blank" title="Facebook">
                    <BsFacebook size={20} color="#3b5998" />
                  </a>
                  <a href={brandData.instagramUrl} target="_blank" title="Instagram">
                    <BsInstagram size={20} color="#E1306C" />
                  </a>
                  <a href={brandData.twitterUrl} target="_blank" title="Twitter">
                    <BsYoutube size={20} color="#FF0000" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProfile;
