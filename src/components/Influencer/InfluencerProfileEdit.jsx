// import React from "react";
// import InfluencerHeader from "./InfluencerHeader";
// import { Navigate, NavLink, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { IoCall } from "react-icons/io5";
// import { CgDetailsMore } from "react-icons/cg";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./Navbar";

// const InfluencerProfileEdit = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//   const [image, setImage] = useState("");
//   const [url, setUrl] = useState("");
//   const [dimage, setDImage] = useState("");
//   const [durl, setDUrl] = useState("");
//   const [loading, setLoading] = useState(false);

//   const Baseurl = "https://api.cloudinary.com/v1_1/djhql8xzq/image/upload/";
//   const preset = "adcosign_img";

//   const [userdata, setuserdata] = useState({});

//   let name, value;
//   const handleInput = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     setuserdata({ ...userdata, [name]: value });
//   };

//   const imageupload = async (e) => {

//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", preset);
//     data.append("cloud_name", "djhql8xzq");
//     console.log(image)
//     console.log(data);
//     try {
//       // setLoading(true);
//       await axios.post(Baseurl, data).then((res) => {
//         console.log(res.data.secure_url);
//         setUrl(res.data.secure_url);
//       });
//     } catch (err) {
//       toast.error("image not uploaded");
//       console.error(err);
//       return;
//     }
//   };
//   const dimageupload = async (e) => {
//     const data = new FormData();
//     data.append("file", dimage);
//     data.append("upload_preset", preset);
//     data.append("cloud_name", "djhql8xzq");
//     try {
//       // setLoading(true);
//       await axios.post(Baseurl, data).then((res) => {
//         setDUrl(res.data.secure_url);
//       });
//     } catch (err) {
//       toast.error("image not uploaded");
//       console.error(err);
//       return;
//     }
//     console.log(durl);
//   };
//   const imagestore = async () => {
//     try {
//       setuserdata({ ...userdata, profile: url });
//       const res = await axios.put("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//         profile: url,
//         type: 1,
//       });
//       console.log(res.data);
//       const data = res.data;
//       // console.log(data);
//       if (data.success == true) {
//         toast.success(data.message);
//         await sleep(1500);
//         setUrl("");
//         // window.location.reload();
//         // navigate("/InfluencerProfile")
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const dimagestore = async () => {
//     try {
//       setuserdata({ ...userdata, photo: durl });
//       const res = await axios.put("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//         photo: durl,
//         type: 2,
//       });
//       console.log(res.data);
//       const data = res.data;
//       // console.log(data);
//       if (data.success == true) {
//         toast.success(data.message);
//         await sleep(1500);
//         setDUrl("");
//         // window.location.reload();
//         // navigate("/InfluencerProfile")
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     // e.preventDefault();

//     if (url) {
//       console.log(url);
//       imagestore();
//     }
//     if (durl) {
//       dimagestore();
//     }
//   }, [url || durl]);

//   const updateProfile = async (e) => {
//     e.preventDefault();

//     console.log(url);

//     try {
//       const res = await axios.put("https://server-side-influencer-1.onrender.com/influencer/updateprofile", userdata);
//       const data = res.data;
//       // console.log(data);
//       if (data.success == true) {
//         toast.success(data.message);
//         await sleep(1500)
//         navigate("/InfluencerProfile")
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     // console.log(userdata);
//   };

//   useEffect(() => {
//     setuserdata(location.state);
//     // console.log(location.state);
//   }, []);

//   return (
//     <div className="flex h-[screen]">
//       <Navbar />
//       <div className="max-sm:ml-0  ml-14 w-screen">
//         <InfluencerHeader page="Edit Profile" />

//         <div>
//           <div className=" px-3  items-center">
//             <div className="bg-white w-full max-w-4xl p-8 mx-auto lg:px-12 lg:w-3/5">
//               <div>
//                 <div className="flex items-center justify-center">
//                   <div className="bg-gray-200 max-sm:w-5/6 w-1/2 mt-10 rounded-lg">
//                     <div className="flex items-center justify-center pt-10 flex-col">
//                       <img
//                         //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
//                         src={userdata.profile}
//                         alt="No Profile"
//                         className="rounded-full w-32"
//                       ></img>

//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
//                         {userdata.fname + " " + userdata.lname}
//                       </h1>
//                       <h3 className="text-gray-400 text-sm"> Influencer</h3>
//                       <h3 className="text-gray-500 text-sm">
//                         {userdata.city +
//                           ", " +
//                           userdata.state +
//                           ", " +
//                           userdata.country}
//                       </h3>
//                       <h3 className="text-gray-500 text-sm pb-10">
//                         {userdata.email}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center mb-10">
//                   <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
//                     <div className="flex items-center justify-center pt-7 flex-col">
//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
//                         Upload image
//                       </h1>

//                       <form className="flex items-center max-sm:flex-col space-x-6">
//                         <div className="shrink-0">
//                           <img
//                             className="h-16 w-16 object-cover rounded-full"
//                             src={userdata.profile}
//                             alt="Current pictures"
//                           />
//                         </div>
//                         <label className="block">
//                           {/* <span className="sr-only">Choose profile photo</span> */}
//                           <input
//                             type="file"
//                             enctype="multipart/form-data"
//                             className="block w-full text-sm text-slate-500
//                                     file:mr-4 file:py-2 file:px-4
//                                     file:rounded-full file:border-0
//                                     file:text-sm file:font-semibold
//                                     file:bg-blue-50 file:text-blue-700
//                                     hover:file:bg-violet-100
//                                   "
//                             name="profile"
//                             onChange={(e) => {
//                               // console.log(e.target.files[0]);
//                               setImage(e.target.files[0]);
//                               // console.log(image);
//                             }}
//                           />
//                         </label>
//                       </form>
//                       <div className="flex-justify-between p-3 px-14">
//                         <button
//                           onClick={imageupload}
//                           className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                         >
//                           Upload
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
//                     <div className="flex items-center justify-center pt-7 flex-col">
//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
//                         Upload display image
//                       </h1>

//                       <form className="flex  max-sm:flex-col items-center space-x-6">
//                         <div className="shrink-0">
//                           <img
//                             className="h-16 w-16 object-cover rounded-full"
//                             src={userdata.photo}
//                             alt="Current pictures"
//                           />
//                         </div>
//                         <label className="block">
//                           {/* <span className="sr-only">Choose profile photo</span> */}
//                           <input
//                             type="file"
//                             enctype="multipart/form-data"
//                             className="block w-full text-sm text-slate-500
//                                     file:mr-4 file:py-2 file:px-4
//                                     file:rounded-full file:border-0
//                                     file:text-sm file:font-semibold
//                                     file:bg-blue-50 file:text-blue-700
//                                     hover:file:bg-violet-100
//                                   "
//                             name="photo"
//                             onChange={(e) => {
//                               // console.log(e.target.files[0]);
//                               setDImage(e.target.files[0]);
//                               // console.log(image);
//                             }}
//                           />
//                         </label>
//                       </form>
//                       <div className="flex-justify-between p-3 px-14">
//                         <button
//                           onClick={dimageupload}
//                           className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                         >
//                           Upload
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <hr></hr>
//                 <br></br>
//                 <div className="px-2 flex">
//                   <div>
//                     <h2 className="absolute text-lg font-semibold bg-white px-3">
//                       User Details :
//                     </h2>
//                   </div>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div>
//                   <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
//                     <div className="col-span-6 relative ">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your FirstName
//                       </span>

//                       <input
//                         type="text"
//                         name="fname"
//                         defaultValue={userdata.fname}
//                         // value={userdata.fname}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative ">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your LastName
//                       </span>

//                       <input
//                         type="text"
//                         name="lname"
//                         defaultValue={userdata.lname}
//                         // value={userdata.lname}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>

//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your City
//                       </span>
//                       <input
//                         type="text"
//                         name="city"
//                         defaultValue={userdata.city}
//                         // value={userdata.city}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>

//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your State
//                       </span>
//                       <input
//                         type="text"
//                         name="state"
//                         defaultValue={userdata.state}
//                         // value={userdata.state}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>

//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Country
//                       </span>
//                       <input
//                         type="text"
//                         name="country"
//                         defaultValue={userdata.country}
//                         // value={userdata.country}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Age
//                       </span>
//                       <input
//                         type="text"
//                         name="age"
//                         defaultValue={userdata.age}
//                         // value={userdata.age}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                   </div>
//                   <br></br>
//                   <div className="justify-center item-center">
//                     <button
//                       onClick={updateProfile}
//                       className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                     >
//                       Update Details
//                     </button>
//                   </div>
//                 </div>

//                 <br></br>
//                 <hr></hr>
//                 <br></br>
//                 <div>
//                   <div className="px-2 flex">
//                     <div>
//                       <h2 className="absolute text-lg font-semibold bg-white px-3">
//                         Social Details :
//                       </h2>
//                     </div>
//                   </div>
//                   <br></br>
//                   <br></br>

//                   <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram Handle
//                       </span>
//                       <input
//                         type="text"
//                         name="instagram"
//                         defaultValue={userdata.instagram}
//                         // value={userdata.instagram}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram Followers
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramFollowers"
//                         defaultValue={userdata.instagramFollowers}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram URL
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramURL"
//                         defaultValue={userdata.instagramURL}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram EngagementRate
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramEngagementRate"
//                         defaultValue={userdata.instagramEngagementRate}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram Total Comments
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramComments"
//                         defaultValue={userdata.instagramComments}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div></div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook Handle
//                       </span>
//                       <input
//                         type="text"
//                         name="facebook"
//                         defaultValue={userdata.facebook}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook Followers
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookFollowers"
//                         defaultValue={userdata.facebookFollowers}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook URL
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookURL"
//                         defaultValue={userdata.facebookURL}
//                         // value={userdata.facebookURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook EngagementRate
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookEngagementRate"
//                         defaultValue={userdata.facebookEngagementRate}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
                   
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook Total Comments
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookComments"
//                         defaultValue={userdata.facebookComments}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                    <div></div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter Handle
//                       </span>
//                       <input
//                         type="text"
//                         name="twitter"
//                         defaultValue={userdata.twitter}
//                         // value={userdata.twitter}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter Followers
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterFollowers"
//                         defaultValue={userdata.twitterFollowers}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter URL
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterURL"
//                         defaultValue={userdata.twitterURL}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter twitterEngagementRate
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterEngagementRate"
//                         defaultValue={userdata.twitterEngagementRate}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter Comments
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterComments"
//                         defaultValue={userdata.twitterComments}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div></div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Catogary 1
//                       </span>
//                       <input
//                         type="text"
//                         name="cat1"
//                         defaultValue={userdata.cat1}
//                         // value={userdata.cat1}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Catogary 2
//                       </span>
//                       <input
//                         type="text"
//                         name="cat2"
//                         defaultValue={userdata.cat2}
//                         // value={userdata.cat2}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Catogary 3
//                       </span>
//                       <input
//                         type="text"
//                         name="cat3"
//                         defaultValue={userdata.cat3}
//                         // value={userdata.cat3}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div className="flex-justify-between">
//                   <button
//                     onClick={updateProfile}
//                     className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                   >
//                     Update Details
//                   </button>
//                 </div>
//               </div>
//               <br></br>
//               <hr></hr>
//               <br></br>
//               <div className="px-2 flex">
//                 <div>
//                   <h2 className="absolute text-lg font-semibold bg-white px-3">
//                     User Description :
//                   </h2>
//                 </div>
//               </div>
//               <div className="col-span-6 relative mt-16">
//                 <span className="absolute bg-white left-3 -top-[12px] px-2">
//                   Description
//                 </span>

//                 <textarea
//                   type="textbox"
//                   name="discription"
//                   defaultValue={userdata.discription}
//                   // value={userdata.fname}
//                   onChange={handleInput}
//                   className="pt-3 text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                 />
//               </div>
//               <br></br>
//               <div className="flex-justify-between">
//                 <button
//                   onClick={updateProfile}
//                   className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                 >
//                   Update Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer autoClose={1000} />
//     </div>
//   );
// };

// export default InfluencerProfileEdit;







// import React from "react";
// import InfluencerHeader from "./InfluencerHeader";
// import { Navigate, NavLink, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { IoCall } from "react-icons/io5";
// import { CgDetailsMore } from "react-icons/cg";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./Navbar";

// const InfluencerProfileEdit = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//   const [image, setImage] = useState("");
//   const [url, setUrl] = useState("");
//   const [dimage, setDImage] = useState("");
//   const [durl, setDUrl] = useState("");
//   const [loading, setLoading] = useState(false);

//   const Baseurl = "https://api.cloudinary.com/v1_1/djhql8xzq/image/upload/";
//   const preset = "adcosign_img";

//   const [userdata, setuserdata] = useState({});

//   let name, value;
//   const handleInput = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     setuserdata({ ...userdata, [name]: value });
//   };

//   const imageupload = async (e) => {

//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", preset);
//     data.append("cloud_name", "djhql8xzq");
//     console.log(image)
//     console.log(data);
//     try {
//       // setLoading(true);
//       await axios.post(Baseurl, data).then((res) => {
//         console.log(res.data.secure_url);
//         setUrl(res.data.secure_url);
//       });
//     } catch (err) {
//       toast.error("image not uploaded");
//       console.error(err);
//       return;
//     }
//   };
//   const dimageupload = async (e) => {
//     const data = new FormData();
//     data.append("file", dimage);
//     data.append("upload_preset", preset);
//     data.append("cloud_name", "djhql8xzq");
//     try {
//       // setLoading(true);
//       await axios.post(Baseurl, data).then((res) => {
//         setDUrl(res.data.secure_url);
//       });
//     } catch (err) {
//       toast.error("image not uploaded");
//       console.error(err);
//       return;
//     }
//     console.log(durl);
//   };


// const imagestore = async () => {
//   try {
//     const token = localStorage.getItem("influcertoken"); // Get token from localStorage

//     setuserdata({ ...userdata, profile: url });

//     const response = await fetch("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//       method: "PUT",  // Use PUT method as you're updating the resource
//       headers: {
//         "Content-Type": "application/json",  // Specify content type as JSON
//         "Authorization": `Bearer ${token}`,  // Pass the Bearer token in the Authorization header
//       },
//       body: JSON.stringify({
//         profile: url,
//         type: 1,
//       }),  // Send the data in the request body
//     });

//     const data = await response.json(); // Parse the JSON response

//     if (data.success === true) {
//       toast.success(data.message);
//       await sleep(1500);  // Delay the next action for 1.5 seconds
//       setUrl("");  // Clear the URL after successful upload
//       // window.location.reload(); // Optional: reload page
//       // navigate("/InfluencerProfile"); // Optional: navigate to another page
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

//   // const imagestore = async () => {
//   //   try {
//   //     setuserdata({ ...userdata, profile: url });
//   //     const res = await axios.put("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//   //       profile: url,
//   //       type: 1,
//   //     });
//   //     console.log(res.data);
//   //     const data = res.data;
//   //     // console.log(data);
//   //     if (data.success == true) {
//   //       toast.success(data.message);
//   //       await sleep(1500);
//   //       setUrl("");
//   //       // window.location.reload();
//   //       // navigate("/InfluencerProfile")
//   //     }
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };
  

//   const dimagestore = async () => {
//     try {
//       setuserdata({ ...userdata, photo: durl });
  
//       const token = localStorage.getItem("influcertoken");  // Get token from localStorage
  
//       // Using fetch API to make the PUT request
//       const response = await fetch("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//         method: "PUT",  // HTTP method PUT for updating the image
//         headers: {
//           'Content-Type': 'application/json',  // Specify content type as JSON
//           'Authorization': `Bearer ${token}`,  // Include the Bearer token in the headers
//         },
//         body: JSON.stringify({
//           photo: durl,  // Send photo URL (durl)
//           type: 2,  // Specify type 2 for the image
//         }),
//       });
  
//       // Check if the response is OK (status 200-299)
//       if (!response.ok) {
//         throw new Error('Failed to upload image');
//       }
  
//       // Parse the response JSON
//       const data = await response.json();
//       console.log(data);
  
//       // Check the success status and handle accordingly
//       if (data.success === true) {
//         toast.success(data.message);
//         await sleep(1500);
//         setDUrl("");  // Clear the uploaded image URL after success
//         // window.location.reload();  // Optionally reload the page
//         // navigate("/InfluencerProfile");  // Optionally navigate to the profile page
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to upload the image.");
//     }
//   };
  
//   useEffect(() => {
//     // e.preventDefault();

//     if (url) {
//       console.log(url);
//       imagestore();
//     }
//     if (durl) {
//       dimagestore();
//     }
//   }, [url || durl]);



//   const updateProfile = async (e) => {
//     e.preventDefault();
  
//     console.log(url);
  
//     try {
//       const token = localStorage.getItem("influcertoken");  // Get token from localStorage
  
//       // Using fetch API to make the PUT request
//       const response = await fetch("https://server-side-influencer-1.onrender.com/influencer/updateprofile", {
//         method: "PUT",  // HTTP method PUT for updating the profile
//         headers: {
//           'Content-Type': 'application/json',  // Specify content type as JSON
//           'Authorization': `Bearer ${token}`,  // Include the Bearer token in the headers
//         },
//         body: JSON.stringify(userdata),  // Send the userdata object as JSON
//       });
  
//       // Check if the response is OK (status 200-299)
//       if (!response.ok) {
//         throw new Error('Failed to update profile');
//       }
  
//       // Parse the response JSON
//       const data = await response.json();
//       console.log(data);
  
//       // Check the success status and handle accordingly
//       if (data.success === true) {
//         toast.success(data.message);
//         await sleep(1500);  // Wait before doing the next actions
//         navigate("/InfluencerProfile");  // Navigate to the profile page
//         window.location.reload();  // Reload the page to reflect changes
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to update the profile.");
//     }
//   };
  

//   useEffect(() => {
//     setuserdata(location.state);
//     // console.log(location.state);
//   }, []);

 


  
//   return (
//     <div className="flex h-[screen]">
//       <Navbar />
//       <div className="max-sm:ml-0  ml-14 w-screen">
//         <InfluencerHeader page="Edit Profile" />

//         <div>
//           <div className=" px-3  items-center">
//             <div className="bg-white w-full max-w-4xl p-8 mx-auto lg:px-12 lg:w-3/5">
//               <div>
//                 <div className="flex items-center justify-center">
//                   <div className="bg-gray-200 max-sm:w-5/6 w-1/2 mt-10 rounded-lg">
//                     <div className="flex items-center justify-center pt-10 flex-col">
//                       <img
//                         //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
//                         src={userdata.profile}
//                         alt="No Profile"
//                         className="rounded-full w-32"
//                       ></img>

//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
//                         {userdata.fullname}
//                       </h1>
//                       <h3 className="text-gray-400 text-sm"> Influencer</h3>
//                       <h3 className="text-gray-500 text-sm">
//                         {userdata.city +
//                           ", " +
//                           userdata.state +
//                           ", " +
//                           userdata.country}
//                       </h3>
//                       <h3 className="text-gray-500 text-sm pb-10">
//                         {userdata.email}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center mb-10">
//                   <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
//                     <div className="flex items-center justify-center pt-7 flex-col">
//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
//                         Upload image
//                       </h1>

//                       <form className="flex items-center max-sm:flex-col space-x-6">
//                         <div className="shrink-0">
//                           <img
//                             className="h-16 w-16 object-cover rounded-full"
//                             src={userdata.profile}
//                             alt="Current pictures"
//                           />
//                         </div>
//                         <label className="block">
//                           {/* <span className="sr-only">Choose profile photo</span> */}
//                           <input
//                             type="file"
//                             enctype="multipart/form-data"
//                             className="block w-full text-sm text-slate-500
//                                     file:mr-4 file:py-2 file:px-4
//                                     file:rounded-full file:border-0
//                                     file:text-sm file:font-semibold
//                                     file:bg-blue-50 file:text-blue-700
//                                     hover:file:bg-violet-100
//                                   "
//                             name="profile"
//                             onChange={(e) => {
//                               // console.log(e.target.files[0]);
//                               setImage(e.target.files[0]);
//                               // console.log(image);
//                             }}
//                           />
//                         </label>
//                       </form>
//                       <div className="flex-justify-between p-3 px-14">
//                         <button
//                           onClick={imageupload}
//                           className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                         >
//                           Upload
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
//                     <div className="flex items-center justify-center pt-7 flex-col">
//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
//                         Upload display image
//                       </h1>

//                       <form className="flex  max-sm:flex-col items-center space-x-6">
//                         <div className="shrink-0">
//                           <img
//                             className="h-16 w-16 object-cover rounded-full"
//                             src={userdata.photo}
//                             alt="Current pictures"
//                           />
//                         </div>
//                         <label className="block">
//                           {/* <span className="sr-only">Choose profile photo</span> */}
//                           <input
//                             type="file"
//                             enctype="multipart/form-data"
//                             className="block w-full text-sm text-slate-500
//                                     file:mr-4 file:py-2 file:px-4
//                                     file:rounded-full file:border-0
//                                     file:text-sm file:font-semibold
//                                     file:bg-blue-50 file:text-blue-700
//                                     hover:file:bg-violet-100
//                                   "
//                             name="photo"
//                             onChange={(e) => {
//                               // console.log(e.target.files[0]);
//                               setDImage(e.target.files[0]);
//                               // console.log(image);
//                             }}
//                           />
//                         </label>
//                       </form>
//                       <div className="flex-justify-between p-3 px-14">
//                         <button
//                           onClick={dimageupload}
//                           className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                         >
//                           Upload
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <hr></hr>
//                 <br></br>
//                 <div className="px-2 flex">
//                   <div>
//                     <h2 className="absolute text-lg font-semibold bg-white px-3">
//                       User Details :
//                     </h2>
//                   </div>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div>
//                   <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
//                     <div className="col-span-6 relative ">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your FirstName
//                       </span>

//                       <input
//                         type="text"
//                         name="fname"
//                         defaultValue={userdata.fullname}
//                         // value={userdata.fname}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     {/* <div className="col-span-6 relative ">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your LastName
//                       </span>

//                       <input
//                         type="text"
//                         name="lname"
//                         defaultValue={userdata.lname}
//                         // value={userdata.lname}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div> */}

//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your City
//                       </span>
//                       <input
//                         type="text"
//                         name="city"
//                         defaultValue={userdata.city}
//                         // value={userdata.city}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>

//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your State
//                       </span>
//                       <input
//                         type="text"
//                         name="state"
//                         defaultValue={userdata.state}
//                         // value={userdata.state}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>

//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Country
//                       </span>
//                       <input
//                         type="text"
//                         name="country"
//                         defaultValue={userdata.country}
//                         // value={userdata.country}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Age
//                       </span>
//                       <input
//                         type="text"
//                         name="age"
//                         defaultValue={userdata.age}
//                         // value={userdata.age}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                   </div>
//                   <br></br>
//                   <div className="justify-center item-center">
//                     <button
//                       onClick={updateProfile}
//                       className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                     >
//                       Update Details
//                     </button>
//                   </div>
//                 </div>

//                 <br></br>
//                 <hr></hr>
//                 <br></br>
//                 <div>
//                   <div className="px-2 flex">
//                     <div>
//                       <h2 className="absolute text-lg font-semibold bg-white px-3">
//                         Social Details :
//                       </h2>
//                     </div>
//                   </div>
//                   <br></br>
//                   <br></br>

//                   <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram Handle
//                       </span>
//                       <input
//                         type="text"
//                         name="instagram"
//                         defaultValue={userdata.instagram}
//                         // value={userdata.instagram}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram Followers
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramFollowers"
//                         defaultValue={userdata.instagramFollowers}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram URL
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramURL"
//                         defaultValue={userdata.instagramURL}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram EngagementRate
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramEngagementRate"
//                         defaultValue={userdata.instagramEngagementRate}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Instagram Total Comments
//                       </span>
//                       <input
//                         type="text"
//                         name="instagramComments"
//                         defaultValue={userdata.instagramComments}
//                         // value={userdata.instagramURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div></div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook Handle
//                       </span>
//                       <input
//                         type="text"
//                         name="facebook"
//                         defaultValue={userdata.facebook}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook Followers
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookFollowers"
//                         defaultValue={userdata.facebookFollowers}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook URL
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookURL"
//                         defaultValue={userdata.facebookURL}
//                         // value={userdata.facebookURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook EngagementRate
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookEngagementRate"
//                         defaultValue={userdata.facebookEngagementRate}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
                   
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Facebook Total Comments
//                       </span>
//                       <input
//                         type="text"
//                         name="facebookComments"
//                         defaultValue={userdata.facebookComments}
//                         // value={userdata.facebook}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                    <div></div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter Handle
//                       </span>
//                       <input
//                         type="text"
//                         name="twitter"
//                         defaultValue={userdata.twitter}
//                         // value={userdata.twitter}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter Followers
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterFollowers"
//                         defaultValue={userdata.twitterFollowers}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter URL
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterURL"
//                         defaultValue={userdata.twitterURL}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter twitterEngagementRate
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterEngagementRate"
//                         defaultValue={userdata.twitterEngagementRate}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Twitter Comments
//                       </span>
//                       <input
//                         type="text"
//                         name="twitterComments"
//                         defaultValue={userdata.twitterComments}
//                         // value={userdata.twitterURL}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div></div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Catogary 1
//                       </span>
//                       <input
//                         type="text"
//                         name="cat1"
//                         defaultValue={userdata.cat1}
//                         // value={userdata.cat1}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Catogary 2
//                       </span>
//                       <input
//                         type="text"
//                         name="cat2"
//                         defaultValue={userdata.cat2}
//                         // value={userdata.cat2}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                     <div className="col-span-6 relative">
//                       <span className="absolute bg-white left-3 -top-[12px] px-2">
//                         Your Catogary 3
//                       </span>
//                       <input
//                         type="text"
//                         name="cat3"
//                         defaultValue={userdata.cat3}
//                         // value={userdata.cat3}
//                         onChange={handleInput}
//                         className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div className="flex-justify-between">
//                   <button
//                     onClick={updateProfile}
//                     className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                   >
//                     Update Details
//                   </button>
//                 </div>
//               </div>
//               <br></br>
//               <hr></hr>
//               <br></br>
//               <div className="px-2 flex">
//                 <div>
//                   <h2 className="absolute text-lg font-semibold bg-white px-3">
//                     User Description :
//                   </h2>
//                 </div>
//               </div>
//               <div className="col-span-6 relative mt-16">
//                 <span className="absolute bg-white left-3 -top-[12px] px-2">
//                   Description
//                 </span>

//                 <textarea
//                   type="textbox"
//                   name="discription"
//                   defaultValue={userdata.discription}
//                   // value={userdata.fname}
//                   onChange={handleInput}
//                   className="pt-3 text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                 />
//               </div>
//               <br></br>
//               <div className="flex-justify-between">
//                 <button
//                   onClick={updateProfile}
//                   className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                 >
//                   Update Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer autoClose={1000} />
//     </div>
//   );
// };

// export default InfluencerProfileEdit;













// import React from "react";
// import InfluencerHeader from "./InfluencerHeader";
// import { Navigate, NavLink, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { IoCall } from "react-icons/io5";
// import { CgDetailsMore } from "react-icons/cg";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./Navbar";

// const InfluencerProfileEdit = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
//   const [image, setImage] = useState("");
//   const [url, setUrl] = useState("");
//   const [dimage, setDImage] = useState("");
//   const [durl, setDUrl] = useState("");
//   const [loading, setLoading] = useState(false);

//   const Baseurl = "https://api.cloudinary.com/v1_1/djhql8xzq/image/upload/";
//   const preset = "adcosign_img";

//   const [userdata, setuserdata] = useState({});

//   let name, value;
//   const handleInput = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     setuserdata({ ...userdata, [name]: value });
//   };

//   const imageupload = async (e) => {

//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", preset);
//     data.append("cloud_name", "djhql8xzq");
//     console.log(image)
//     console.log(data);
//     try {
//       // setLoading(true);
//       await axios.post(Baseurl, data).then((res) => {
//         console.log(res.data.secure_url);
//         setUrl(res.data.secure_url);
//       });
//     } catch (err) {
//       toast.error("image not uploaded");
//       console.error(err);
//       return;
//     }
//   };
//   const dimageupload = async (e) => {
//     const data = new FormData();
//     data.append("file", dimage);
//     data.append("upload_preset", preset);
//     data.append("cloud_name", "djhql8xzq");
//     try {
//       // setLoading(true);
//       await axios.post(Baseurl, data).then((res) => {
//         setDUrl(res.data.secure_url);
//       });
//     } catch (err) {
//       toast.error("image not uploaded");
//       console.error(err);
//       return;
//     }
//     console.log(durl);
//   };


// const imagestore = async () => {
//   try {
//     const token = localStorage.getItem("influcertoken"); // Get token from localStorage

//     setuserdata({ ...userdata, profile: url });

//     const response = await fetch("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//       method: "PUT",  // Use PUT method as you're updating the resource
//       headers: {
//         "Content-Type": "application/json",  // Specify content type as JSON
//         "Authorization": `Bearer ${token}`,  // Pass the Bearer token in the Authorization header
//       },
//       body: JSON.stringify({
//         profile: url,
//         type: 1,
//       }),  // Send the data in the request body
//     });

//     const data = await response.json(); // Parse the JSON response

//     if (data.success === true) {
//       toast.success(data.message);
//       await sleep(1500);  // Delay the next action for 1.5 seconds
//       setUrl("");  // Clear the URL after successful upload
//       // window.location.reload(); // Optional: reload page
//       // navigate("/InfluencerProfile"); // Optional: navigate to another page
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

//   // const imagestore = async () => {
//   //   try {
//   //     setuserdata({ ...userdata, profile: url });
//   //     const res = await axios.put("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//   //       profile: url,
//   //       type: 1,
//   //     });
//   //     console.log(res.data);
//   //     const data = res.data;
//   //     // console.log(data);
//   //     if (data.success == true) {
//   //       toast.success(data.message);
//   //       await sleep(1500);
//   //       setUrl("");
//   //       // window.location.reload();
//   //       // navigate("/InfluencerProfile")
//   //     }
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };
  

//   const dimagestore = async () => {
//     try {
//       setuserdata({ ...userdata, photo: durl });
  
//       const token = localStorage.getItem("influcertoken");  // Get token from localStorage
  
//       // Using fetch API to make the PUT request
//       const response = await fetch("https://server-side-influencer-1.onrender.com/influencer/imageupload", {
//         method: "PUT",  // HTTP method PUT for updating the image
//         headers: {
//           'Content-Type': 'application/json',  // Specify content type as JSON
//           'Authorization': `Bearer ${token}`,  // Include the Bearer token in the headers
//         },
//         body: JSON.stringify({
//           photo: durl,  // Send photo URL (durl)
//           type: 2,  // Specify type 2 for the image
//         }),
//       });
  
//       // Check if the response is OK (status 200-299)
//       if (!response.ok) {
//         throw new Error('Failed to upload image');
//       }
  
//       // Parse the response JSON
//       const data = await response.json();
//       console.log(data);
  
//       // Check the success status and handle accordingly
//       if (data.success === true) {
//         toast.success(data.message);
//         await sleep(1500);
//         setDUrl("");  // Clear the uploaded image URL after success
//         // window.location.reload();  // Optionally reload the page
//         // navigate("/InfluencerProfile");  // Optionally navigate to the profile page
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to upload the image.");
//     }
//   };
  
//   useEffect(() => {
//     // e.preventDefault();

//     if (url) {
//       console.log(url);
//       imagestore();
//     }
//     if (durl) {
//       dimagestore();
//     }
//   }, [url || durl]);



//   const updateProfile = async (e) => {
//     e.preventDefault();
  
//     console.log(url);
  
//     try {
//       const token = localStorage.getItem("influcertoken");  // Get token from localStorage
  
//       // Using fetch API to make the PUT request
//       const response = await fetch("https://server-side-influencer-1.onrender.com/influencer/updateprofile", {
//         method: "PUT",  // HTTP method PUT for updating the profile
//         headers: {
//           'Content-Type': 'application/json',  // Specify content type as JSON
//           'Authorization': `Bearer ${token}`,  // Include the Bearer token in the headers
//         },
//         body: JSON.stringify(userdata),  // Send the userdata object as JSON
//       });
  
//       // Check if the response is OK (status 200-299)
//       if (!response.ok) {
//         throw new Error('Failed to update profile');
//       }
  
//       // Parse the response JSON
//       const data = await response.json();
//       console.log(data);
  
//       // Check the success status and handle accordingly
//       if (data.success === true) {
//         toast.success(data.message);
//         await sleep(1500);  // Wait before doing the next actions
//         navigate("/InfluencerProfile");  // Navigate to the profile page
//         window.location.reload();  // Reload the page to reflect changes
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to update the profile.");
//     }
//   };
  

//   useEffect(() => {
//     setuserdata(location.state);
//     // console.log(location.state);
//   }, []);

 


  
//   return (
//     <div className="flex h-[screen]">
//       <Navbar />
//       <div className="max-sm:ml-0  ml-14 w-screen">
//         <InfluencerHeader page="Edit Profile" />

//         <div>
//           <div className=" px-3  items-center">
//             <div className="bg-white w-full max-w-4xl p-8 mx-auto lg:px-12 lg:w-3/5">
//               <div>
//                 <div className="flex items-center justify-center">
//                   <div className="bg-gray-200 max-sm:w-5/6 w-1/2 mt-10 rounded-lg">
//                     <div className="flex items-center justify-center pt-10 flex-col">
//                       <img
//                         //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
//                         src={userdata.profile}
//                         alt="No Profile"
//                         className="rounded-full w-32"
//                       ></img>

//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
//                         {userdata.fullname}
//                       </h1>
//                       <h3 className="text-gray-400 text-sm"> Influencer</h3>
//                       <h3 className="text-gray-500 text-sm">
//                         {userdata.city +
//                           ", " +
//                           userdata.state +
//                           ", " +
//                           userdata.country}
//                       </h3>
//                       <h3 className="text-gray-500 text-sm pb-10">
//                         {userdata.email}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center mb-10">
//                   <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
//                     <div className="flex items-center justify-center pt-7 flex-col">
//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
//                         Upload image
//                       </h1>

//                       <form className="flex items-center max-sm:flex-col space-x-6">
//                         <div className="shrink-0">
//                           <img
//                             className="h-16 w-16 object-cover rounded-full"
//                             src={userdata.profile}
//                             alt="Current pictures"
//                           />
//                         </div>
//                         <label className="block">
//                           {/* <span className="sr-only">Choose profile photo</span> */}
//                           <input
//                             type="file"
//                             enctype="multipart/form-data"
//                             className="block w-full text-sm text-slate-500
//                                     file:mr-4 file:py-2 file:px-4
//                                     file:rounded-full file:border-0
//                                     file:text-sm file:font-semibold
//                                     file:bg-blue-50 file:text-blue-700
//                                     hover:file:bg-violet-100
//                                   "
//                             name="profile"
//                             onChange={(e) => {
//                               // console.log(e.target.files[0]);
//                               setImage(e.target.files[0]);
//                               // console.log(image);
//                             }}
//                           />
//                         </label>
//                       </form>
//                       <div className="flex-justify-between p-3 px-14">
//                         <button
//                           onClick={imageupload}
//                           className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                         >
//                           Upload
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
//                     <div className="flex items-center justify-center pt-7 flex-col">
//                       <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
//                         Upload display image
//                       </h1>

//                       <form className="flex  max-sm:flex-col items-center space-x-6">
//                         <div className="shrink-0">
//                           <img
//                             className="h-16 w-16 object-cover rounded-full"
//                             src={userdata.photo}
//                             alt="Current pictures"
//                           />
//                         </div>
//                         <label className="block">
//                           {/* <span className="sr-only">Choose profile photo</span> */}
//                           <input
//                             type="file"
//                             enctype="multipart/form-data"
//                             className="block w-full text-sm text-slate-500
//                                     file:mr-4 file:py-2 file:px-4
//                                     file:rounded-full file:border-0
//                                     file:text-sm file:font-semibold
//                                     file:bg-blue-50 file:text-blue-700
//                                     hover:file:bg-violet-100
//                                   "
//                             name="photo"
//                             onChange={(e) => {
//                               // console.log(e.target.files[0]);
//                               setDImage(e.target.files[0]);
//                               // console.log(image);
//                             }}
//                           />
//                         </label>
//                       </form>
//                       <div className="flex-justify-between p-3 px-14">
//                         <button
//                           onClick={dimageupload}
//                           className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                         >
//                           Upload
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>


//                   <div className="justify-center item-center">
//                     <button
//                       onClick={updateProfile}
//                       className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                     >
//                       Update Details
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex-justify-between">
//                   <button
//                     onClick={updateProfile}
//                     className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                   >
//                     Update Details
//                   </button>
//                 </div>
//               </div>
//               <br></br>
//               <hr></hr>
//               <br></br>
//               <div className="px-2 flex">
//                 <div>
//                   <h2 className="absolute text-lg font-semibold bg-white px-3">
//                     User Description :
//                   </h2>
//                 </div>
//               </div>
//               <div className="col-span-6 relative mt-16">
//                 <span className="absolute bg-white left-3 -top-[12px] px-2">
//                   Description
//                 </span>

//                 <textarea
//                   type="textbox"
//                   name="discription"
//                   defaultValue={userdata.discription}
//                   // value={userdata.fname}
//                   onChange={handleInput}
//                   className="pt-3 text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
//                 />
//               </div>
//               <br></br>
//               <div className="flex-justify-between">
//                 <button
//                   onClick={updateProfile}
//                   className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
//                 >
//                   Update Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer autoClose={1000} />
//     </div>
//   );
// };

// export default InfluencerProfileEdit;







// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const InfluencerProfileEdit = () => {
//   const navigate = useNavigate();
//   const influencerId = localStorage.getItem("influencerID");

//   // Form Data State
//   const [formData, setFormData] = useState({
//     fullname: "",
//     instagramProfile: "",
//     followers: "",
//     youtubeLink: "",
//     subscribers: "",
//     category: "",
//     contactNumber: "",
//     location: "",
//     state: "",
//     city: "",
//     costingPerSegment: "",
//     notes: "",
//     hashtags: "",
//     managedBy: "",
//     lifestyle: "",
//     email: "",
//     commercial: "",
//   });

//   // Image Upload States
//   const [image, setImage] = useState(null); // To store the selected image
//   const [url, setUrl] = useState(""); // To store the uploaded image URL
//   const [loading, setLoading] = useState(true); // To check loading state

//   const Baseurl = "https://api.cloudinary.com/v1_1/djhql8xzq/image/upload/";
//   const preset = "adcosign_img";

  

// // // Handle Image Upload
// const imageupload = async () => {
//   if (!image) return;

//   const data = new FormData();
//   data.append("file", image);
//   data.append("upload_preset", preset);
//   data.append("cloud_name", "djhql8xzq");

//   try {
//     const res = await axios.post(Baseurl, data);
//     setUrl(res.data.secure_url); // Save the uploaded image URL
//   } catch (err) {
//     toast.error("Image not uploaded");
//     console.error(err);
//   }
// };

//   // Store the Image URL to Backend
//   const imagestore = async () => {
//     if (!url) return;

//     try {
//       const res = await axios.put(
//         "https://server-side-influencer-1.onrender.com/influencer/imageupload",
//         {
//           profile: url,
//           type: 1,
//         }
//       );
//       if (res.data.success) {
//         toast.success(res.data.message);
//         setUrl(""); // Clear the URL after successful upload
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to update image.");
//     }
//   };

//   useEffect(() => {
//     if (url) {
//       imagestore(); // Store the image only after URL is set
//     }
//   }, [url]);

//   // Fetch Influencer Data
//   useEffect(() => {
//     if (influencerId) {
//       fetch(`https://server-side-influencer.vercel.app/influencer/getInfluencer/${influencerId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data && data.data) {
//             setFormData(data.data); // Set the form data from API
//             setLoading(false); // Set loading to false once data is fetched
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching influencer data:", error);
//           setLoading(false); // Set loading to false if an error occurs
//         });
//     }
//   }, [influencerId]);

//   // Handle Input Field Changes
//   const handleChange = (name, value) => {
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle Image File Change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; // Get the selected file
//     if (file) {
//       setImage(file); // Set the image to state
//     }
//   };

//   // Handle Form Submission for Profile Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("influcertoken");

//     // Modify the form data to pass 'instagramProfile' as 'instagramURL'
//     const modifiedFormData = {
//       ...formData,
//       instagramURL: formData.instagramProfile,
//     };

//     // Remove the 'instagramProfile' field
//     delete modifiedFormData.instagramProfile;

//     try {
//       const response = await fetch(
//         "https://server-side-influencer.onrender.com/influencer/updateprofile",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(modifiedFormData), // Send the form data
//         }
//       );

//       if (response.ok) {
//         toast.success("Profile updated successfully!");
//         setTimeout(() => {
//           navigate("/InfluencerProfile"); // Redirect to the profile after a successful update
//         }, 4000);
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   // Show Loading until data is fetched
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6 font-sans">
//       <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

//       {/* Profile Image Display */}
//       <div className="flex justify-center items-center">
//         <img
//           src={formData.profile || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"}
//           alt="Profile"
//           className="rounded-full w-32 h-32 object-cover"
//         />
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Full Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Full Name</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Full Name"
//             value={formData.fullname}
//             onChange={(e) => handleChange("fullname", e.target.value)}
//           />
//         </div>

//         {/* Instagram Profile */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Instagram Profile</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Instagram Profile"
//             value={formData.instagramProfile}
//             onChange={(e) => handleChange("instagramProfile", e.target.value)}
//           />
//         </div>

//         {/* Followers */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Followers</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="number"
//             placeholder="Followers"
//             value={formData.followers}
//             onChange={(e) => handleChange("followers", e.target.value)}
//           />
//         </div>

//         {/* YouTube Link */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">YouTube Link</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="url"
//             placeholder="YouTube Link"
//             value={formData.youtubeLink}
//             onChange={(e) => handleChange("youtubeLink", e.target.value)}
//           />
//         </div>

//         {/* Subscribers */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Subscribers</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="number"
//             placeholder="Subscribers"
//             value={formData.subscribers}
//             onChange={(e) => handleChange("subscribers", e.target.value)}
//           />
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Category"
//             value={formData.category}
//             onChange={(e) => handleChange("category", e.target.value)}
//           />
//         </div>

//         {/* Contact Number */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Contact Number</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Contact Number"
//             value={formData.contactNumber}
//             onChange={(e) => handleChange("contactNumber", e.target.value)}
//           />
//         </div>

//         {/* Location */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Location</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => handleChange("location", e.target.value)}
//           />
//         </div>

//         {/* State */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">State</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="State"
//             value={formData.state}
//             onChange={(e) => handleChange("state", e.target.value)}
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">City</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="City"
//             value={formData.city}
//             onChange={(e) => handleChange("city", e.target.value)}
//           />
//         </div>

//         {/* Costing Per Segment */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Costing Per Segment</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Costing Per Segment"
//             value={formData.costingPerSegment}
//             onChange={(e) => handleChange("costingPerSegment", e.target.value)}
//           />
//         </div>

//         {/* Notes */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Notes</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Notes"
//             value={formData.notes}
//             onChange={(e) => handleChange("notes", e.target.value)}
//           />
//         </div>

//         {/* Hashtags */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Hashtags</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Hashtags"
//             value={formData.hashtags}
//             onChange={(e) => handleChange("hashtags", e.target.value)}
//           />
//         </div>

//         {/* Managed By */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Managed By</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Managed By"
//             value={formData.managedBy}
//             onChange={(e) => handleChange("managedBy", e.target.value)}
//           />
//         </div>

//         {/* Lifestyle */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Lifestyle</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Lifestyle"
//             value={formData.lifestyle}
//             onChange={(e) => handleChange("lifestyle", e.target.value)}
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//           />
//         </div>

//         {/* Commercial */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Commercial</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Commercial"
//             value={formData.commercial}
//             onChange={(e) => handleChange("commercial", e.target.value)}
//           />
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Profile Image</label>
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//           {/* Trigger Image Upload Button */}
//           <button
//             type="button"
//             onClick={imageupload}
//             className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md text-lg"
//           >
//             Upload Image
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-6 w-full bg-green-500 text-white py-2 rounded-md text-lg"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InfluencerProfileEdit;


















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const InfluencerProfileEdit = () => {
//   const navigate = useNavigate();
//   const influencerId = localStorage.getItem("influencerID");

//   // Form Data State
//   const [formData, setFormData] = useState({
//     fullname: "",
//     instagramProfile: "",
//     followers: "",
//     youtubeLink: "",
//     subscribers: "",
//     category: "",
//     contactNumber: "",
//     location: "",
//     state: "",
//     city: "",
//     costingPerSegment: "",
//     notes: "",
//     hashtags: "",
//     managedBy: "",
//     lifestyle: "",
//     email: "",
//     commercial: "",
//     profileImage: "", // Add profileImage field for URL
//   });

//   // Image Upload States
//   const [image, setImage] = useState(null); // To store the selected image
//   const [loading, setLoading] = useState(true); // To check loading state
//   const [uploading, setUploading] = useState(false); // To check uploading state

//   // API URL to upload image
//   // const uploadImageUrl = "http://localhost:8000/influencer/uploadimage/67922bc66db0bf7949bd4288";

//   const uploadImageUrl = `https://server-side-influencer.onrender.com/influencer/profilepic/${influencerId}`;
//   // Handle Image Upload
//   const uploadImage = async () => {
//     if (!image) {
//       toast.error("Please select an image first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", image); // Send image file

//     try {
//       setUploading(true); // Set uploading to true
//       const response = await axios.post(uploadImageUrl, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (response.data.success) {
//         setFormData((prevData) => ({
//           ...prevData,
//           profileImage: response.data.imageUrl, // Assuming your API returns the image URL
//         }));
//         toast.success("Image uploaded successfully!");
//       } else {
//         toast.error("Image upload failed.");
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       toast.error("Error uploading image.");
//     } finally {
//       setUploading(false); // Set uploading to false
//     }
//   };

//   // Fetch Influencer Data
//   useEffect(() => {
//     if (influencerId) {
//       fetch(`https://server-side-influencer.vercel.app/influencer/getInfluencer/${influencerId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data && data.data) {
//             setFormData(data.data); // Set the form data from API
//             setLoading(false); // Set loading to false once data is fetched
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching influencer data:", error);
//           setLoading(false); // Set loading to false if an error occurs
//         });
//     }
//   }, [influencerId]);

//   // Handle Input Field Changes
//   const handleChange = (name, value) => {
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle Image File Change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; // Get the selected file
//     if (file) {
//       setImage(file); // Set the image to state
//     }
//   };

//   // Handle Form Submission for Profile Update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("influcertoken");

//     try {
//       const response = await fetch(
//         "https://server-side-influencer.onrender.com/influencer/updateprofile",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData), // Send the form data with the uploaded image URL
//         }
//       );

//       if (response.ok) {
//         toast.success("Profile updated successfully!");
//         setTimeout(() => {
//           navigate("/InfluencerProfile"); // Redirect to the profile after a successful update
//         }, 4000);
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || "Failed to update profile.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   // Show Loading until data is fetched
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6 font-sans">
//       <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

//       {/* Profile Image Display */}
//       <div className="flex justify-center items-center">
//         <img
//           src={formData.profilepicinfluet || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"}
//           alt="Profile"
//           className="rounded-full w-32 h-32 object-cover"
//         />
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Full Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Full Name</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Full Name"
//             value={formData.fullname}
//             onChange={(e) => handleChange("fullname", e.target.value)}
//           />
//         </div>

//         {/* Instagram Profile */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Instagram Profile</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Instagram Profile"
//             value={formData.instagramProfile}
//             onChange={(e) => handleChange("instagramProfile", e.target.value)}
//           />
//         </div>

//         {/* Followers */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Followers</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="number"
//             placeholder="Followers"
//             value={formData.followers}
//             onChange={(e) => handleChange("followers", e.target.value)}
//           />
//         </div>

//         {/* YouTube Link */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">YouTube Link</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="url"
//             placeholder="YouTube Link"
//             value={formData.youtubeLink}
//             onChange={(e) => handleChange("youtubeLink", e.target.value)}
//           />
//         </div>

//         {/* Subscribers */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Subscribers</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="number"
//             placeholder="Subscribers"
//             value={formData.subscribers}
//             onChange={(e) => handleChange("subscribers", e.target.value)}
//           />
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Category"
//             value={formData.category}
//             onChange={(e) => handleChange("category", e.target.value)}
//           />
//         </div>

//         {/* Contact Number */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Contact Number</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Contact Number"
//             value={formData.contactNumber}
//             onChange={(e) => handleChange("contactNumber", e.target.value)}
//           />
//         </div>

//         {/* Location */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Location</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => handleChange("location", e.target.value)}
//           />
//         </div>

//         {/* State */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">State</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="State"
//             value={formData.state}
//             onChange={(e) => handleChange("state", e.target.value)}
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">City</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="City"
//             value={formData.city}
//             onChange={(e) => handleChange("city", e.target.value)}
//           />
//         </div>

//         {/* Costing per Segment */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Costing per Segment</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="number"
//             placeholder="Costing per Segment"
//             value={formData.costingPerSegment}
//             onChange={(e) => handleChange("costingPerSegment", e.target.value)}
//           />
//         </div>

//         {/* Notes */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Notes</label>
//           <textarea
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             placeholder="Notes"
//             value={formData.notes}
//             onChange={(e) => handleChange("notes", e.target.value)}
//           />
//         </div>

//         {/* Hashtags */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Hashtags</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Hashtags"
//             value={formData.hashtags}
//             onChange={(e) => handleChange("hashtags", e.target.value)}
//           />
//         </div>

//         {/* Managed By */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Managed By</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Managed By"
//             value={formData.managedBy}
//             onChange={(e) => handleChange("managedBy", e.target.value)}
//           />
//         </div>

//         {/* Lifestyle */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Lifestyle</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Lifestyle"
//             value={formData.lifestyle}
//             onChange={(e) => handleChange("lifestyle", e.target.value)}
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//           />
//         </div>

//         {/* Commercial */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Commercial</label>
//           <input
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             type="text"
//             placeholder="Commercial"
//             value={formData.commercial}
//             onChange={(e) => handleChange("commercial", e.target.value)}
//           />
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Profile Image</label>
//           <input
//             type="file"
//             onChange={handleImageChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//           {/* Trigger Image Upload Button */}
//           <button
//             type="button"
//             onClick={uploadImage}
//             className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md text-lg"
//           >
//             {uploading ? "Uploading..." : "Upload Image"}
//           </button>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-6 w-full bg-green-500 text-white py-2 rounded-md text-lg"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InfluencerProfileEdit;








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const InfluencerProfileEdit = () => {
  const navigate = useNavigate();
  const influencerId = localStorage.getItem("influencerID");

  // Form Data State
  const [formData, setFormData] = useState({
    fullname: "",
    instagramProfile: "",
    followers: "",
    youtubeLink: "",
    subscribers: "",
    category: "",
    contactNumber: "",
    location: "",
    state: "",
    city: "",
    costingPerSegment: "",
    notes: "",
    hashtags: "",
    managedBy: "",
    lifestyle: "",
    email: "",
    commercial: "",
    profileImage: "", // Add profileImage field for URL
  });

  // Image Upload States
  const [image, setImage] = useState(null); // To store the selected image
  const [loading, setLoading] = useState(true); // To check loading state
  const [uploading, setUploading] = useState(false); // To check uploading state

  const uploadImageUrl = `https://server-side-influencer.onrender.com/influencer/profilepic/${influencerId}`;
  
  // Handle Image Upload
  const uploadImage = async () => {
    if (!image) {
      toast.error("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image); // Send image file

    try {
      setUploading(true); // Set uploading to true
      const response = await axios.post(uploadImageUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setFormData((prevData) => ({
          ...prevData,
          profileImage: response.data.imageUrl, // Assuming your API returns the image URL
        }));
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image.");
    } finally {
      setUploading(false); // Set uploading to false
    }
  };

  // Fetch Influencer Data
  useEffect(() => {
    if (influencerId) {
      fetch(`https://server-side-influencer.vercel.app/influencer/getInfluencer/${influencerId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setFormData(data.data); // Set the form data from API
            setLoading(false); // Set loading to false once data is fetched
          }
        })
        .catch((error) => {
          console.error("Error fetching influencer data:", error);
          setLoading(false); // Set loading to false if an error occurs
        });
    }
  }, [influencerId]);

  // Handle Input Field Changes
  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle Image File Change and Upload Automatically
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setImage(file); // Set the image to state
      uploadImage(); // Automatically upload image once selected
    }
  };

  // Handle Form Submission for Profile Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("influcertoken");

    try {
      const response = await fetch(
        "https://server-side-influencer.onrender.com/influencer/updateprofile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Send the form data with the uploaded image URL
        }
      );

      if (response.ok) {
        toast.success("Profile updated successfully!");
        setTimeout(() => {
          navigate("/InfluencerProfile"); // Redirect to the profile after a successful update
        }, 4000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Show Loading until data is fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

      {/* Profile Image Display */}
      <div className="flex justify-center items-center">
        <img
          src={formData.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={(e) => handleChange("fullname", e.target.value)}
          />
        </div>

        {/* Instagram Profile */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Instagram Profile</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Instagram Profile"
            value={formData.instagramProfile}
            onChange={(e) => handleChange("instagramProfile", e.target.value)}
          />
        </div>

        {/* Followers */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Followers</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="number"
            placeholder="Followers"
            value={formData.followers}
            onChange={(e) => handleChange("followers", e.target.value)}
          />
        </div>

        {/* YouTube Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700">YouTube Link</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="url"
            placeholder="YouTube Link"
            value={formData.youtubeLink}
            onChange={(e) => handleChange("youtubeLink", e.target.value)}
          />
        </div>

        {/* Subscribers */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Subscribers</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="number"
            placeholder="Subscribers"
            value={formData.subscribers}
            onChange={(e) => handleChange("subscribers", e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={(e) => handleChange("contactNumber", e.target.value)}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>

        {/* Costing per Segment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Costing per Segment</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="number"
            placeholder="Costing per Segment"
            value={formData.costingPerSegment}
            onChange={(e) => handleChange("costingPerSegment", e.target.value)}
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Notes"
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>

        {/* Hashtags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Hashtags</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Hashtags"
            value={formData.hashtags}
            onChange={(e) => handleChange("hashtags", e.target.value)}
          />
        </div>

        {/* Managed By */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Managed By</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Managed By"
            value={formData.managedBy}
            onChange={(e) => handleChange("managedBy", e.target.value)}
          />
        </div>

        {/* Lifestyle */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Lifestyle</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Lifestyle"
            value={formData.lifestyle}
            onChange={(e) => handleChange("lifestyle", e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Commercial */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Commercial</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Commercial"
            value={formData.commercial}
            onChange={(e) => handleChange("commercial", e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md text-lg"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default InfluencerProfileEdit;



