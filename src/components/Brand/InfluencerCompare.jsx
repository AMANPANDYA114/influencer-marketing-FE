


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import loader from "../../Images/loader.gif";

// const InfluencerCompare = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [loading, setLoading] = useState(true);
//   const [profileCard, setProfileCard] = useState([]);
//   const [faq, setFaq] = useState([
//     { question: "PAID PARTNERSHIPS - ENGAGEMENTS & VIEWS", answer: "Details about paid partnerships and how engagements and views are measured." },
//     { question: "Content", answer: "Best practices for creating engaging content." },
//     { question: "Audience", answer: "How to identify and grow your target audience." },
//     { question: "Growth", answer: "Strategies for growing your influence and reach." }
//   ]);
//   const [openIndex, setOpenIndex] = useState(null);

//   const getBrandRequest = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("consignment/getbrandreq");
//       const data = res.data;
//       setProfileCard(data.data);
//       setLoading(false);
//     } catch (err) {
//       if (err.response && err.response.status === 422) {
//         toast.error(err.response.data.message);
//         navigate("/InfluencerLogin");
//       }
//     }
//   };

//   useEffect(() => {
//     getBrandRequest();
//   }, []);

//   const handleRemove = (id) => {
//     const updatedItems = profileCard.filter(item => item._id !== id);
//     setProfileCard(updatedItems);
//   };

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="flex">
//       <Navbar />
//       <div className="h-screen ml-14 max-sm:ml-0 w-screen">
//         {/* Title Section */}
//         <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-6 ml-4">Compare Influencer</h1>

//         {loading ? (
//           <img src={loader} alt="loading" className="h-52 mx-auto" />
//         ) : (
//           <div className="px-10 max-sm:px-5 max-md:px-10">
//             {/* Tab Navigation */}
//             <ul className="flex justify-start text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 mx-4">
//               <li className="me-2">
//                 <a 
//                   href="#" 
//                   className="inline-block px-4 py-2 h-10 text-white bg-black rounded-lg active whitespace-nowrap" 
//                   aria-current="page"
//                 >
//                   Instagram
//                 </a>
//               </li>
//               <li className="me-2">
//                 <a 
//                   href="#" 
//                   className="inline-block px-4 py-2 h-10 rounded-lg text-gray-500 hover:bg-black hover:text-white transition duration-300 whitespace-nowrap"
//                 >
//                   YouTube
//                 </a>
//               </li>
//               <li className="me-2">
//                 <a 
//                   href="#" 
//                   className="inline-block px-4 py-2 h-10 rounded-lg text-gray-500 hover:bg-black hover:text-white transition duration-300 whitespace-nowrap"
//                 >
//                   Twitter
//                 </a>
//               </li>
//               <li className="me-2">
//                 <a 
//                   href="#" 
//                   className="inline-block px-4 py-2 h-10 rounded-lg text-gray-500 hover:bg-black hover:text-white transition duration-300 whitespace-nowrap"
//                 >
//                   Facebook
//                 </a>
//               </li>
//             </ul>

//             {/* Cards Section */}
//             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4 mt-6">
//               {/* Simple Cards with Image */}
//               {[...Array(4)].map((_, index) => (
//                 <div key={index} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
//                   <img src="https://i.postimg.cc/4d5nfryy/prf.png" alt="Profile" className="w-16 h-16 rounded-full mt-6 mb-2" />
//                   <a 
//                     href="#" 
//                     className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8 flex items-center"
//                   >
//                     <span className="mr-2">+</span> Add Influencer
//                   </a>
//                 </div>
//               ))}

//               {/* Render additional profile cards if available */}
//               {profileCard.map((item) => (
//                 <div key={item._id} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
//                   {/* Display the influencer data here */}
//                   <img src={item.image || "https://i.postimg.cc/4d5nfryy/prf.png"} alt="Profile" className="w-16 h-16 rounded-full mt-6 mb-2" />
//                   <a 
//                     href="#" 
//                     className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8 flex items-center"
//                   >
//                     <span className="mr-2">+ Add Influencer</span>
//                   </a>
//                 </div>
//               ))}
//             </div>

//             {/* FAQ Section */}
//             <div className="mt-10">
//               {faq.map((item, index) => (
//                 <div key={index} className="mb-4">
//                   <button
//                     className="flex justify-between items-center w-full p-4 text-left bg-white border border-gray-200 rounded-lg focus:outline-none text-black font-normal"
//                     onClick={() => toggleFAQ(index)}
//                   >
//                     <span className="text-black font-bold">{item.question}</span>
//                     <svg className={`w-5 h-5 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
//                     </svg>
//                   </button>
//                   {openIndex === index && <div className="p-4 text-black bg-white border border-gray-200 rounded-lg mt-2">{item.answer}</div>}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         <ToastContainer autoClose={500} />
//       </div>
//     </div>
//   );
// };

// export default InfluencerCompare;



import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

const InfluencerCompare = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [faq, setFaq] = useState([
    { question: "PAID PARTNERSHIPS - ENGAGEMENTS & VIEWS", answer: "Details about paid partnerships and how engagements and views are measured." },
    { question: "Content", answer: "Best practices for creating engaging content." },
    { question: "Audience", answer: "How to identify and grow your target audience." },
    { question: "Growth", answer: "Strategies for growing your influence and reach." }
  ]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        {/* Title Section */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-6 ml-4">Compare Influencer</h1>

        {loading ? (
          <img src={loader} alt="loading" className="h-52 mx-auto" />
        ) : (
          <div className="px-10 max-sm:px-5 max-md:px-10">
            {/* Tab Navigation */}
            <ul className="flex justify-start text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 mx-4">
              <li className="me-2">
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 h-10 text-white bg-black rounded-lg active whitespace-nowrap" 
                  aria-current="page"
                >
                  Instagram
                </a>
              </li>
              <li className="me-2">
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 h-10 rounded-lg text-gray-500 hover:bg-black hover:text-white transition duration-300 whitespace-nowrap"
                >
                  YouTube
                </a>
              </li>
              <li className="me-2">
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 h-10 rounded-lg text-gray-500 hover:bg-black hover:text-white transition duration-300 whitespace-nowrap"
                >
                  Twitter
                </a>
              </li>
              <li className="me-2">
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 h-10 rounded-lg text-gray-500 hover:bg-black hover:text-white transition duration-300 whitespace-nowrap"
                >
                  Facebook
                </a>
              </li>
            </ul>

            {/* Cards Section */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-6 gap-x-4 mt-6">
              {/* Simple Cards with Image */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
                  <img src="https://i.postimg.cc/4d5nfryy/prf.png" alt="Profile" className="w-16 h-16 rounded-full mt-6 mb-2" />
                  <a 
                    href="#" 
                    className="text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8 flex items-center"
                  >
                    <span className="mr-2">+</span> Add Influencer
                  </a>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-10">
              {faq.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white border border-gray-200 rounded-lg focus:outline-none text-black font-normal"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-black font-bold">{item.question}</span>
                    <svg className={`w-5 h-5 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
                    </svg>
                  </button>
                  {openIndex === index && <div className="p-4 text-black bg-white border border-gray-200 rounded-lg mt-2">{item.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
        <ToastContainer autoClose={500} />
      </div>
    </div>
  );
};

export default InfluencerCompare;


