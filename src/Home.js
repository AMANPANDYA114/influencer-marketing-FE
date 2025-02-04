// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';
// import Header from './components/Header'
// import homepage from './homepage.jpg'
// import FooterPage from './components/FooterPage';

// // import dropDown from './components/dropDown'
// import homegif from './Images/homegif.gif'
// const Home = () => {

//   let commonClass = "w-30 mx-20 bg-white my-20 p-5 rounded-2xl";
//   // from ss
//   return (

//     <div className=' bg-white'>
//       <Header />


//       {/*                                             Hero section banner                                    */}
//       <div className='Hero-Section w-5/6 m-auto  mt-24'>

//         <div className=' flex  items-center  '>
//           <div className='text-left'>
//             <div className='text-5xl font-medium'>
//               Adcosign generates sales to brands via micro-influencers
//             </div>
//             <div className='text-2xl py-10'>
//               Generate sales, attract customers and increase brand awareness. <b className='font-semibold'>Pay only for results.</b>

//             </div>

//             <div className='flex pt-8 text-lg'>

//               <NavLink to='/BrandIntro'>
//                 <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '  >I'm a Brand</div>
//               </NavLink>
//               <NavLink to='/InfluencerIntro'>

//                 <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>I'm a Creater </div>
//               </NavLink>

//             </div>
//           </div>
//           <img src={homegif} className='w-1/3 ml-auto  ' />

//         </div>

//       </div>
//       <div className='mt-20'></div>
//       {/*                                brand intro abnner                                    */}

//       <div className=''>

//         <div className='w-5/6 m-auto text-left'>
//           <div className='text-2xl text-bold'>
//             FOR BRANDS...

//           </div>
//           <div className='text-5xl font-medium mt-10'>
//             <div className=''>Pay influencers only when
//             </div>
//             <span>you get results
//             </span>

//           </div>
//           <div className='text-2xl pt-8'>
//             {/* Influencers are a performance-marketing channel */}
//           </div>
//         </div>

//         <div className='w-5/6 m-auto text-left'>

//           <div className='text-4xl font-medium mt-10'>
//             <div className=''>Get sales while best-in-class
//             </div>
//             <span>analytics do the rest
//             </span>

//           </div>
//           <div className='text-2xl py-10 max-w-4xl'>
//             With our 25k+ micro-influencers you can choose from a variety of payment models and control the ROI on your campaigns
//           </div>
//           <div className='flex'>
//             <NavLink to='/BrandSignUp'>
//               <div className='my-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>Get Started-it's free   </div>
//             </NavLink>
//           </div>

//         </div>
//         <div className='w-5/6 m-auto text-left  bg-blue-600 rounded-xl'>
//           <div className='my-10 text-2xl text-white ml-20 pt-10'>
//             Adcosign for brands
//           </div>
//           <div className='flex  justify-between'>


//             <div className='w-30 mx-20 bg-white my-20 p-5 rounded-2xl '><div className='text-blue-700 text-2xl'>25k+</div><div className=''>Micro-influencers on the platform</div></div>
//             <div className='w-30 mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-2xl'>12M+</div><div className=''>Leads and sales generated for clients  </div></div>
//             <div className='w-30 mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-2xl'>4</div><div className=''>Influence Marketing Managers</div></div>
//             <div className='w-30 mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-2xl'>120+</div><div className=''>Happy clients with always-on campaigns</div></div>
//           </div>
//         </div>
//       </div>

//       {/*     influencer intro banner                                                           */}


//       <div className=''>

//         <div className='w-5/6 m-auto text-left mt-20'>
//           <div className='text-2xl text-bold'>
//             FOR INFLUENCERS...

//           </div>
//           <div className='text-5xl font-medium mt-10'>
//             <div className=''>Choose top-tier companies
//             </div>
//             <span>to work with
//             </span>

//           </div>
//           <div className='text-2xl pt-8'>
//             {/* You choose who to work with even if you have only 1500 followers */}
//           </div>
//         </div>

//         <div className='w-5/6 m-auto text-left'>

//           <div className='text-4xl font-medium mt-10 max-w-3xl'>
//             <div className=''>Platform for influencers to join
//             </div>


//           </div>
//           <div className='text-2xl pt-8 max-w-4xl'>
//             More than 200+ brands world-wide cooperate with Adcosign influencers. No matter how many followers you have - you can earn with us </div>
//           <div className='flex'>
//             <NavLink to='/InfluencerSignUp'>


//               <div className='my-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>Get Started-it's free   </div>
//             </NavLink>
//           </div>


//         </div>
//         <div className='w-5/6 m-auto text-left  bg-blue-600 rounded-xl mb-10 '>
//           <div className='my-10 text-2xl text-white ml-20 pt-10'>
//             Adcosign for influencers
//           </div>
//           <div className='flex  justify-between'>

//             <div className={commonClass}><div className='text-blue-700 text-2xl'>25k+</div><div className=''>influencers on the platform</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>12M+</div><div className=''>Minimum number of followers to work with  </div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>4</div><div className=''>Max earnings in a single month by a single influencer so far</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>120+</div><div className=''>Micro-influencers on the platform</div></div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home




// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Header from './components/Header';
// import homegif from './Images/homegif.gif';
// import FooterPage from './components/FooterPage'; // Import FooterPage
// import TestimonialsCarousel from './components/Testimonials';
// import "../TestimonialsCarousel.cs"; // For custom styles
// const Home = () => {

//   let commonClass = "w-30 mx-20 bg-white my-20 p-5 rounded-2xl";

//   return (
//     <div className='bg-white'>
//       <Header />

//       {/* Hero section banner */}
//       <div className='Hero-Section w-5/6 m-auto mt-24'>
//         <div className='flex items-center'>
//           <div className='text-left'>
//             <div className='text-5xl font-medium'>
//               Adcosign generates sales to brands via micro-influencers
//             </div>
//             <div className='text-2xl py-10'>
//               Generate sales, attract customers and increase brand awareness. <b className='font-semibold'>Pay only for results.</b>
//             </div>

//             <div className='flex pt-8 text-lg'>
//               <NavLink to='/BrandIntro'>
//                 <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded'>I'm a Brand</div>
//               </NavLink>
//               <NavLink to='/InfluencerIntro'>
//                 <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded'>I'm a Creator</div>
//               </NavLink>
//             </div>
//           </div>
//           <img src={homegif} className='w-1/3 ml-auto' />
//         </div>
//       </div>

//       {/* Additional Content */}
//       <div className='mt-20'>
//         <div className='w-5/6 m-auto text-left'>
//           <div className='text-2xl font-bold'>FOR BRANDS...</div>
//           <div className='text-5xl font-medium mt-10'>
//             <div>Pay influencers only when</div>
//             <span>you get results</span>
//           </div>
//           <div className='text-2xl pt-8'> {/* More info here */}</div>
//         </div>

//         {/* Brand Adcosign Features */}
//         <div className='w-5/6 m-auto text-left bg-blue-600 rounded-xl'>
//           <div className='my-10 text-2xl text-white ml-20 pt-10'>Adcosign for brands</div>
//           <div className='flex justify-between'>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>25k+</div><div>Micro-influencers on the platform</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>12M+</div><div>Leads and sales generated for clients</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>4</div><div>Influence Marketing Managers</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>120+</div><div>Happy clients with always-on campaigns</div></div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <FooterPage /> {/* Add FooterPage component here */}
//     </div>
//   );
// };

// export default Home;




// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Header from './components/Header';
// import homegif from './Images/homegif.gif';
// import FooterPage from './components/FooterPage'; // Import FooterPage
// import TestimonialsCarousel from './components/Testimonials';
// import './components/TestimonialsCarousel.css'; // Correctly import the CSS file

// const Home = () => {

//   let commonClass = "w-30 mx-20 bg-white my-20 p-5 rounded-2xl";

//   return (
//     <div className='bg-white'>
//       <Header />

//       {/* Hero section banner */}
//       <div className='Hero-Section w-5/6 m-auto mt-24'>
//         <div className='flex items-center'>
//           <div className='text-left'>
//             <div className='text-5xl font-medium'>
//               Adcosign generates sales to brands via micro-influencers
//             </div>
//             <div className='text-2xl py-10'>
//               Generate sales, attract customers and increase brand awareness. <b className='font-semibold'>Pay only for results.</b>
//             </div>

//             <div className='flex pt-8 text-lg'>
//               <NavLink to='/BrandIntro'>
//                 <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded'>I'm a Brand</div>
//               </NavLink>
//               <NavLink to='/InfluencerIntro'>
//                 <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded'>I'm a Creator</div>
//               </NavLink>
//             </div>
//           </div>
//           <img src={homegif} className='w-1/3 ml-auto' />
//         </div>
//       </div>

//       {/* Additional Content */}
//       <div className='mt-20'>
//         <div className='w-5/6 m-auto text-left'>
//           <div className='text-2xl font-bold'>FOR BRANDS...</div>
//           <div className='text-5xl font-medium mt-10'>
//             <div>Pay influencers only when</div>
//             <span>you get results</span>
//           </div>
//           <div className='text-2xl pt-8'> {/* More info here */}</div>
//         </div>

//         {/* Brand Adcosign Features */}
//         <div className='w-5/6 m-auto text-left bg-blue-600 rounded-xl'>
//           <div className='my-10 text-2xl text-white ml-20 pt-10'>Adcosign for brands</div>
//           <div className='flex justify-between'>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>25k+</div><div>Micro-influencers on the platform</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>12M+</div><div>Leads and sales generated for clients</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>4</div><div>Influence Marketing Managers</div></div>
//             <div className={commonClass}><div className='text-blue-700 text-2xl'>120+</div><div>Happy clients with always-on campaigns</div></div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <TestimonialsCarousel />

//       {/* Footer Section */}
//       <FooterPage /> {/* Add FooterPage component here */}
//     </div>
//   );
// };

// export default Home;






// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Header from './components/Header';
// import homegif from './Images/homegif.gif';
// import FooterPage from './components/FooterPage'; // Import FooterPage
// import TestimonialsCarousel from './components/Testimonials';
// import './components/TestimonialsCarousel.css'; // Correctly import the CSS file
// import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaUsers, FaWallet, FaLock, FaBell } from 'react-icons/fa';

// const Home = () => {

//   let commonClass = "w-30 mx-20 bg-white my-20 p-5 rounded-2xl";
//   const Images = [
//     "https://www.upfluence.com/wp-content/uploads/elementor/thumbs/Client-Logo-Netflix-quah560nq2rlgrugsu9vf81sgznpnc8uqcmrp27vbs.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGtStAl2CAgEhUqKJFPnsHKrFKxUht2t68F2VkzO8xXeAqToU",
//     "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUInxJIkq804HsNOPJcuiYQXDO1AtknAjnnsHAoiauZee27x6J",
//     "https://res-5.cloudinary.com/drw5mayau/image/upload/c_thumb,g_center,h_200,w_200/tnltbvjbxrzz7vjysqes"
//   ];

//   return (
//     <div className='bg-white'>
//       <Header />

//       {/* Hero section banner */}
//       <div className='Hero-Section w-5/6 m-auto mt-24'>
//         <div className='flex items-center'>
//           <div className='text-left'>
//             <div className='text-5xl font-medium'>
//               Hypebox generates sales to brands via micro-influencers
//             </div>
//             <div className='text-xl py-10'>
//               Generate sales, attract customers and increase brand awareness. <b className='font-semibold'>Pay only for results.</b>
//             </div>
//             <div className='flex pt-8 text-lg'>
//               <NavLink to='/BrandIntro'>
//                 <div className='mr-5 bg-yellow-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded'>
//                   I'm a Brand
//                 </div>
//               </NavLink>
//               <NavLink to='/InfluencerIntro'>
//                 <div className='mr-5 bg-yellow-800 px-7 py-3 hover:bg-gray-400 ease-in duration-200 text-white rounded'>
//                   I'm a Creator
//                 </div>
//               </NavLink>
//             </div>
//           </div>
//           <img src={homegif} className='w-1/3 ml-auto' />
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div className="slider-container" style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
//         <div className="slider-track" style={{ display: 'flex', width: 'max-content', animation: 'slide 15s linear infinite' }}>
//           {Images.concat(Images).map((logo, index) => (
//             <div className="slide" key={index} style={{ marginRight: '10px' }}>
//               <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '200px', height: 'auto' }} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Golden Background Section */}
//       <div className="golden-background">
//         <div className='my-10 text-2xl text-white ml-20 pt-0 text-align:center'>
//           Hypebox for brands
//         </div>
//         <div className="icon-box-container">
//           <div className="icon-box">
//             <FaUsers size={50} />
//             <h3>25k+</h3>
//             <p>Micro-influencers on the platform.</p>
//           </div>
//           <div className="icon-box">
//             <FaWallet size={50} />
//             <h3>12M+</h3>
//             <p>Leads and sales generated for clients.</p>
//           </div>
//           <div className="icon-box">
//             <FaLock size={50} />
//             <h3>4</h3>
//             <p>Influence Marketing Managers.</p>
//           </div>
//           <div className="icon-box">
//             <FaBell size={50} />
//             <h3>120+</h3>
//             <p>Happy clients with always-on campaigns.</p>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <TestimonialsCarousel />

//       {/* Footer */}
//       <FooterPage />
//     </div>
//   );
// }

// export default Home;







// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Header from './components/Header';
// import homegif from './Images/homegif.gif';
// import FooterPage from './components/FooterPage'; // Import FooterPage
// import './components/TestimonialsCarousel.css'; // Correctly import the CSS file
// import { FaInstagram, FaYoutube, FaUsers, FaWallet, FaLock, FaBell } from 'react-icons/fa'; // Import Instagram and YouTube icons;
// import { FaTwitter, FaFacebook } from 'react-icons/fa'; // Import icons
// import TestimonialsCarousel from './components/Testimonials';
// import Carousel from '@mui/material/Carousel'; // Import Carousel component

// const Home = () => {
//   let commonClass = "w-30 mx-20 bg-white my-20 p-5 rounded-2xl";

//   const Images = [
//     "https://www.upfluence.com/wp-content/uploads/elementor/thumbs/Client-Logo-Netflix-quah560nq2rlgrugsu9vf81sgznpnc8uqcmrp27vbs.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGtStAl2CAgEhUqKJFPnsHKrFKxUht2t68F2VkzO8xXeAqToU",
//     "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvVO6uW1MoLAPZcNxJK22DT9AE85EO3boos7ZZTThXc2iLOtnL"
//     // Add other images
//   ];

//   return (
//     <div className="bg-white">
//       <Header />

//       {/* Hero section banner */}
//       <div className="Hero-Section w-5/6 m-auto mt-24">
//         <div className="flex items-center">
//           <div className="text-left">
//             <div className="text-5xl font-medium">
//               Hypebox generates sales to brands via micro-influencers
//             </div>
//             <div className="text-xl py-10">
//               Generate sales, attract customers and increase brand awareness. <b className="font-semibold">Pay only for results.</b>
//             </div>

//             {/* Search bar with icons */}
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 border: '1px solid #ccc',
//                 borderRadius: '5px',
//                 padding: '5px',
//                 maxWidth: '600px',
//                 margin: '0',
//                 backgroundColor: '#fff',
//                 borderRadius: '40px',
//               }}
//             >
//               {/* Social Media Icons */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px' }}>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', fontSize: '24px' }}>
//                   <FaInstagram />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000', fontSize: '24px' }}>
//                   <FaYoutube />
//                 </a>
//               </div>

//               {/* Search Input and Button */}
//               <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     border: 'none',
//                     borderRadius: '5px 0 0 5px',
//                     color: '#000000',
//                     outline: 'none',
//                   }}
//                 />
//                 <button
//                   style={{
//                     border: 'none',
//                     padding: '10px 15px',
//                     backgroundColor: '#007bff',
//                     color: '#fff',
//                     borderRadius: '0 5px 5px 0',
//                     cursor: 'pointer',
//                     alignItems: 'center',
//                     fontSize: '16px',
//                     borderRadius: '25px',
//                   }}
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>

//             <div className="flex pt-8 text-lg">
//               <NavLink to="/BrandIntro">
//                 <div className="mr-5 bg-yellow-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded">
//                   I'm a Brand
//                 </div>
//               </NavLink>
//               <NavLink to="/InfluencerIntro">
//                 <div className="mr-5 bg-yellow-800 px-7 py-3 hover:bg-gray-400 ease-in duration-200 text-white rounded">
//                   I'm a Creator
//                 </div>
//               </NavLink>
//             </div>
//           </div>
//           <img src={homegif} className="w-1/3 ml-auto" />
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="slider-container">
//         <Carousel
//           autoPlay
//           interval={3000} // Change interval as needed
//           infinite
//           indicatorIconButtonProps={{
//             style: {
//               padding: 10, // Customize the indicator size
//               color: 'black',
//             },
//           }}
//         >
//           {Images.map((logo, index) => (
//             <div key={index} className="slide">
//               <img src={logo} alt={`Logo ${index + 1}`} />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Additional Content */}
//       <div className="golden-background">
//         <div className="my-10 text-2xl text-white ml-20 pt-0 text-align:center">Hypebox for brands</div>
//         <div className="icon-box-container">
//           <div className="icon-box">
//             <FaUsers size={50} />
//             <h3>25k+</h3>
//             <p>Micro-influencers on the platform.</p>
//           </div>
//           <div className="icon-box">
//             <FaWallet size={50} />
//             <h3>12M+</h3>
//             <p>Leads and sales generated for clients.</p>
//           </div>
//           <div className="icon-box">
//             <FaLock size={50} />
//             <h3>4</h3>
//             <p>Influence Marketing Managers.</p>
//           </div>
//           <div className="icon-box">
//             <FaBell size={50} />
//             <h3>120+</h3>
//             <p>Happy clients with always-on campaigns.</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <FooterPage />
//     </div>
//   );
// };

// export default Home;




// import React from 'react';
// import Slider from 'react-slick';
// import { NavLink } from 'react-router-dom';
// import Header from './components/Header';
// import FooterPage from './components/FooterPage';
// import homegif from './Images/homegif.gif';
// import { FaInstagram, FaYoutube, FaUsers, FaWallet, FaLock, FaBell } from 'react-icons/fa';

// const Home = () => {
//   const Images = [
//     "https://www.upfluence.com/wp-content/uploads/elementor/thumbs/Client-Logo-Netflix-quah560nq2rlgrugsu9vf81sgznpnc8uqcmrp27vbs.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGtStAl2CAgEhUqKJFPnsHKrFKxUht2t68F2VkzO8xXeAqToU",
//     "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvVO6uW1MoLAPZcNxJK22DT9AE85EO3boos7ZZTThXc2iLOtnL",
//     "https://cdn.dribbble.com/userupload/4239565/file/original-335442382efc15db6525c08d4207c7a5.png?format=webp&resize=400x300&vertical=center",
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Show 4 images in a row
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div style={{ backgroundColor: '#fff', padding: '20px' }}>
//       <Header />

//       {/* Hero Section */}
//       <div style={{ width: '80%', margin: 'auto', marginTop: '40px' }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <div style={{ flex: 1 }}>
//             <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
//               Hypebox generates sales to brands via micro-influencers
//             </h1>
//             <p style={{ fontSize: '18px', marginTop: '20px' }}>
//               Generate sales, attract customers and increase brand awareness.{' '}
//               <b style={{ fontWeight: 'bold' }}>Pay only for results.</b>
//             </p>

//             {/* Search Bar */}
//             <div
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 border: '1px solid #ccc',
//                 borderRadius: '40px',
//                 padding: '5px',
//                 maxWidth: '600px',
//                 backgroundColor: '#fff',
//               }}
//             >
//               {/* Social Media Icons */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px' }}>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', fontSize: '24px' }}>
//                   <FaInstagram />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000', fontSize: '24px' }}>
//                   <FaYoutube />
//                 </a>
//               </div>

//               {/* Search Input and Button */}
//               <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   style={{
//                     width: '100%',
//                     padding: '10px',
//                     border: 'none',
//                     borderRadius: '5px 0 0 5px',
//                     color: '#000000',
//                     outline: 'none',
//                   }}
//                 />
//                 <button
//                   style={{
//                     border: 'none',
//                     padding: '10px 15px',
//                     backgroundColor: '#007bff',
//                     color: '#fff',
//                     borderRadius: '0 5px 5px 0',
//                     cursor: 'pointer',
//                     fontSize: '16px',
//                   }}
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div style={{ display: 'flex', marginTop: '20px' }}>
//               <NavLink to="/BrandIntro">
//                 <div style={{ marginRight: '10px', backgroundColor: '#FFD700', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' }}>
//                   I'm a Brand
//                 </div>
//               </NavLink>
//               <NavLink to="/InfluencerIntro">
//                 <div style={{ backgroundColor: '#D2691E', color: 'white', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' }}>
//                   I'm a Creator
//                 </div>
//               </NavLink>
//             </div>
//           </div>

//           <img src={homegif} style={{ width: '30%', marginLeft: 'auto' }} alt="Home GIF" />
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div style={{ width: '90%', margin: '30px auto' }}>
//         <Slider {...settings}>
//           {Images.map((logo, index) => (
//             <div key={index} className="slide">
//               <img
//                 src={logo}
//                 alt={`Logo ${index + 1}`}
//                 style={{
//                   width: '100px', // Small size
//                   height: '50px', // Small size
//                   objectFit: 'contain',
//                   display: 'block',
//                   margin: 'auto',
//                 }}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Stats Section */}
//       <div style={{ backgroundColor: '#FFD700', padding: '40px 20px', textAlign: 'center' }}>
//         <h2 style={{ color: 'white', marginBottom: '20px' }}>Hypebox for Brands</h2>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
//           <div>
//             <FaUsers size={50} />
//             <h3>25k+</h3>
//             <p>Micro-influencers on the platform.</p>
//           </div>
//           <div>
//             <FaWallet size={50} />
//             <h3>12M+</h3>
//             <p>Leads and sales generated for clients.</p>
//           </div>
//           <div>
//             <FaLock size={50} />
//             <h3>4</h3>
//             <p>Influence Marketing Managers.</p>
//           </div>
//           <div>
//             <FaBell size={50} />
//             <h3>120+</h3>
//             <p>Happy clients with always-on campaigns.</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <FooterPage />
//     </div>
//   );
// };

// export default Home;




// import React from 'react';
// import Slider from 'react-slick';
// import { NavLink } from 'react-router-dom';
// import Header from './components/Header';
// import FooterPage from './components/FooterPage';
// import homegif from './Images/homegif.gif';
// import { FaInstagram, FaYoutube, FaUsers, FaWallet, FaLock, FaBell } from 'react-icons/fa';

// const Home = () => {
//   const Images = [
//     "https://www.upfluence.com/wp-content/uploads/elementor/thumbs/Client-Logo-Netflix-quah560nq2rlgrugsu9vf81sgznpnc8uqcmrp27vbs.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGtStAl2CAgEhUqKJFPnsHKrFKxUht2t68F2VkzO8xXeAqToU",
//     "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvVO6uW1MoLAPZcNxJK22DT9AE85EO3boos7ZZTThXc2iLOtnL",
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div style={{ backgroundColor: '#fff', padding: '20px' }}>
//       <Header />

//       {/* Hero Section */}
//       <div style={{ width: '80%', margin: 'auto', marginTop: '40px' }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <div style={{ flex: 1 }}>
//             <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
//               Hypebox generates sales to brands via micro-influencers
//             </h1>
//             <p style={{ fontSize: '18px', marginTop: '20px' }}>
//               Generate sales, attract customers and increase brand awareness.{' '}
//               <b style={{ fontWeight: 'bold' }}>Pay only for results.</b>
//             </p>
//           </div>
//           <img src={homegif} style={{ width: '30%', marginLeft: 'auto' }} alt="Home GIF" />
//         </div>
//       </div>

//       {/* Slider Section */}
//       <div style={{ width: '90%', margin: '30px auto' }}>
//         <Slider {...settings}>
//           {Images.map((logo, index) => (
//             <div key={index} className="slide">
//               <img
//                 src={logo}
//                 alt={`Logo ${index + 1}`}
//                 style={{
//                   width: '100px',
//                   height: '50px',
//                   objectFit: 'contain',
//                   display: 'block',
//                   margin: 'auto',
//                 }}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Hypebox for Brands Section */}
//       <div style={{ backgroundColor: '#FFD700', padding: '50px 20px', textAlign: 'center' }}>
//         <h2 style={{ fontSize: '32px', color: '#000', fontWeight: 'bold', marginBottom: '20px' }}>
//           HYPEBOX FOR BRANDS
//         </h2>

//         {/* Cards Container */}
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
//           {[
//             { icon: <FaUsers size={50} />, title: '25k+', text: 'Micro-influencers on the platform.' },
//             { icon: <FaWallet size={50} />, title: '12M+', text: 'Leads and sales generated for clients.' },
//             { icon: <FaLock size={50} />, title: '4', text: 'Influence Marketing Managers.' },
//             { icon: <FaBell size={50} />, title: '120+', text: 'Happy clients with always-on campaigns.' }
//           ].map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: '#fff',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 textAlign: 'center',
//                 width: '250px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                 transition: 'transform 0.3s ease-in-out',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
//             >
//               {item.icon}
//               <h3 style={{ fontWeight: 'bold', color: '#333', marginTop: '10px' }}>{item.title}</h3>
//               <p style={{ color: '#555', fontSize: '14px' }}>{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <FooterPage />
//     </div>
//   );
// };

// export default Home;






import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './components/Header';
import FooterPage from './components/FooterPage';
import homegif from './Images/homegif.gif';
import { FaInstagram, FaYoutube } from 'react-icons/fa'; // Import Instagram and YouTube icons
import Slider from 'react-slick';
import { FaUsers, FaWallet, FaLock, FaBell } from 'react-icons/fa';

const Home = () => {
  const Images = [
    "https://www.upfluence.com/wp-content/uploads/elementor/thumbs/Client-Logo-Netflix-quah560nq2rlgrugsu9vf81sgznpnc8uqcmrp27vbs.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGtStAl2CAgEhUqKJFPnsHKrFKxUht2t68F2VkzO8xXeAqToU",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvVO6uW1MoLAPZcNxJK22DT9AE85EO3boos7ZZTThXc2iLOtnL",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px' }}>
      <Header />

      {/* Hero Section */}
      <div style={{ width: '80%', margin: 'auto', marginTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
              Hypebox generates sales to brands via micro-influencers
            </h1>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>
              Generate sales, attract customers and increase brand awareness.{' '}
              <b style={{ fontWeight: 'bold' }}>Pay only for results.</b>
            </p>
          </div>
          <img src={homegif} style={{ width: '30%', marginLeft: 'auto' }} alt="Home GIF" />
        </div>
      </div>

      {/* Search Bar with Icons and Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '5px',
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '40px',
        }}
      >
        {/* Social Media Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#E4405F', fontSize: '24px' }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FF0000', fontSize: '24px' }}
          >
            <FaYoutube />
          </a>
        </div>

        {/* Search Input and Button */}
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '5px 0 0 5px',
              color: '#000000',
              outline: 'none',
            }}
          />
          <button
            style={{
              border: 'none',
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer',
              alignItems: 'center',
              fontSize: '16px',
              borderRadius: '25px',
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex pt-8 text-lg" style={{ justifyContent: 'center' }}>
        <NavLink to="/BrandIntro">
          <div
            className="mr-5 bg-yellow-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded"
            style={{ textAlign: 'center' }}
          >
            I'm a Brand
          </div>
        </NavLink>
        <NavLink to="/InfluencerIntro">
          <div
            className="mr-5 bg-yellow-800 px-7 py-3 hover:bg-gray-400 ease-in duration-200 text-white rounded"
            style={{ textAlign: 'center' }}
          >
            I'm a Creator
          </div>
        </NavLink>
      </div>

      {/* Slider Section */}
      <div style={{ width: '90%', margin: '30px auto' }}>
        <Slider {...settings}>
          {Images.map((logo, index) => (
            <div key={index} className="slide">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  width: '100px',
                  height: '50px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: 'auto',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Hypebox for Brands Section */}
      <div style={{ backgroundColor: '#FFD700', padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', color: '#000', fontWeight: 'bold', marginBottom: '20px' }}>
          HYPEBOX FOR BRANDS
        </h2>

        {/* Cards Container */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {[
            { icon: <FaUsers size={50} />, title: '25k+', text: 'Micro-influencers on the platform.' },
            { icon: <FaWallet size={50} />, title: '12M+', text: 'Leads and sales generated for clients.' },
            { icon: <FaLock size={50} />, title: '4', text: 'Influence Marketing Managers.' },
            { icon: <FaBell size={50} />, title: '120+', text: 'Happy clients with always-on campaigns.' }
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                width: '250px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {item.icon}
              <h3 style={{ fontWeight: 'bold', color: '#333', marginTop: '10px' }}>{item.title}</h3>
              <p style={{ color: '#555', fontSize: '14px' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Discover Influencers Section */}
      <section
        id="section1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '50px 10%',
        }}
      >
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Discover Influencers</h2>
          <p style={{ fontSize: '16px', marginTop: '10px' }}>
            Explore thousands of influencers that match your brand’s style and goals. Use advanced filters to refine your search.
          </p>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Search by niche</li>
            <li>Audience demographics</li>
            <li>Platform performance</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <img
            src="https://cdn.dribbble.com/userupload/4239565/file/original-335442382efc15db6525c08d4207c7a5.png?format=webp&resize=400x300&vertical=center"
            alt="Discover Influencers"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </section>

      {/* Manage Campaigns Section */}
      <section
        id="section2"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '50px 10%',
          backgroundColor: '#f8f8f8',
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src="https://cdn.dribbble.com/users/3517342/screenshots/20506922/media/dfec782cfc6e9d1e784aaaa7ee1e9201.png?format=webp&resize=400x300&vertical=center"
            alt="Manage Campaigns"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Manage Campaigns</h2>
          <p style={{ fontSize: '16px', marginTop: '10px' }}>
            Track and manage influencer marketing campaigns seamlessly with real-time data and insights.
          </p>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Track key metrics</li>
            <li>Collaborate effectively</li>
            <li>Optimize campaigns</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <FooterPage />
    </div>
  );
};

export default Home;
