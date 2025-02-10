



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar"; // Assuming Navbar is a separate component
// import BrandHeader from "./BrandHeader"; // Assuming BrandHeader is a separate component
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const BrandPendingRequest = () => {
//   const [formData, setFormData] = useState({
//     message: "",
//     category: "",
//     language: "",
//     location: "",
//     platform: "",
//     influencerCount: "",
//     influencerFollowersCount: "",
//     budget: "",
//     youtubeCount: "",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("Brandtoken");
//     if (!token) {
//       navigate('/BrandLogin');
//       return;
//     }
//   }, [navigate]);

//   const brandId = localStorage.getItem("brandID");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `https://server-side-influencer-1.onrender.com/brand/message/${brandId}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Your request has been submitted successfully!");
//       } else {
//         toast.error(data.message || "Failed to submit the request. Please try again.");
//       }
//     } catch (error) {
//       toast.error("Failed to submit the request. Please try again.");
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content Area */}
//       <div className="ml-14 w-screen max-sm:ml-0 h-screen">
//         {/* BrandHeader */}
//         <BrandHeader page="Pending Request" /> 

//         {/* Form Section */}
//         <div className="flex-grow flex justify-center items-center mt-[10%] h-[70vh]">
//           <div
//             style={{ width: '84%' }} // Ensure full width
//             className="bg-white p-8 rounded-lg shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
//               Add your post requirement for influencers
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 {Object.keys(formData).map((key) => (
//                   <div key={key}>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       {key.charAt(0).toUpperCase() + key.slice(1)}
//                     </label>
//                     <input
//                       type="text"
//                       name={key}
//                       value={formData[key]}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//                       placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
//               >
//                 Submit Request
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default BrandPendingRequest;












// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar"; // Assuming Navbar is a separate component
// import BrandHeader from "./BrandHeader"; // Assuming BrandHeader is a separate component
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const BrandPendingRequest = () => {
//   const [formData, setFormData] = useState({
//     message: "",
//     category: "",
//     language: "",
//     location: "",
//     platform: "",
//     influencerCount: "",
//     influencerFollowersCount: "",
//     budget: "",
//     youtubeCount: "",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("Brandtoken");
//     if (!token) {
//       navigate('/BrandLogin');
//       return;
//     }
//   }, [navigate]);

//   const brandId = localStorage.getItem("brandID");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         `https://server-side-influencer-1.onrender.com/brand/message/${brandId}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Your request has been submitted successfully!");
//       } else {
//         // Check if the API returns an error message
//         const errorMessage = data.error || "Failed to submit the request. Please try again.";
//         toast.error(errorMessage);
//       }
//     } catch (error) {
//       // Handle network-related errors or other errors
//       const errorMessage = error.message || "An unexpected error occurred. Please try again.";
//       toast.error(errorMessage);
//     }
//   };

  
//   return (
//     <div className="flex">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content Area */}
//       <div className="ml-14 w-screen max-sm:ml-0 h-screen">
//         {/* BrandHeader */}
//         <BrandHeader page="Pending Request" /> 

//         {/* Form Section */}
//         <div className="flex-grow flex justify-center items-center mt-[10%] h-[70vh]">
//           <div
//             style={{ width: '84%' }} // Ensure full width
//             className="bg-white p-8 rounded-lg shadow-lg"
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
//               Add your post requirement for influencers
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 {Object.keys(formData).map((key) => (
//                   <div key={key}>
//                     <label className="block text-gray-700 font-semibold mb-2">
//                       {key.charAt(0).toUpperCase() + key.slice(1)}
//                     </label>
//                     <input
//                       type="text"
//                       name={key}
//                       value={formData[key]}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
//                       placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
//               >
//                 Submit Request
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default BrandPendingRequest;






import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Assuming Navbar is a separate component
import BrandHeader from "./BrandHeader"; // Assuming BrandHeader is a separate component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrandPendingRequest = () => {
  const [formData, setFormData] = useState({
    message: "",
    category: "",
    language: "",
    location: "",
    platform: "",
    influencerCount: "",
    influencerFollowersCount: "",
    budget: "",
    youtubeCount: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Brandtoken");
    if (!token) {
      navigate('/BrandLogin');
      return;
    }
  }, [navigate]);

  const brandId = localStorage.getItem("brandID");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://server-side-influencer.onrender.com/brand/message/${brandId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Your request has been submitted successfully!");
      } else {
        // Check if the API returns an error message
        const errorMessage = data.error || "Failed to submit the request. Please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      // Handle network-related errors or other errors
      const errorMessage = error.message || "An unexpected error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="ml-14 w-screen max-sm:ml-0 h-screen relative">
        {/* BrandHeader */}
        <BrandHeader page="influencer requirement" />

        {/* My Request Button - Positioned below the header */}
        <button
          onClick={() => navigate('/myrequest')} // Navigate to a specific page, replace '/my-request' with the desired route
          className="absolute top-[12%] right-5 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          My Request
        </button>

        {/* Form Section */}
        <div className="flex-grow flex justify-center items-center mt-[10%] h-[70vh]">
          <div
            style={{ width: '84%' }} // Ensure full width
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
              Add your post requirement for influencers
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.keys(formData).map((key) => (
                  <div key={key}>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    />
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BrandPendingRequest;
