


// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

// const MyRequest = () => {
//   const [data, setData] = useState([]); // Initialize state for API data

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const brandId = localStorage.getItem("brandID");
//         const response = await fetch(`http://localhost:8000/brand/${brandId}/messages`);
//         const result = await response.json();

//         if (result.success) {
//           setData(result.data); // Set data if API response is successful
//         } else {
//           setData([]); // Set empty array if success is false
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setData([]); // Reset to empty array on error
//       }
//     };

//     fetchMessages();
//   }, []);

//   const deleteMessage = async (messageId) => {
//     try {
//       const response = await fetch(`http://localhost:8000/brand/message/${messageId}`, {
//         method: "DELETE",
//       });
//       const result = await response.json();

//       if (result.success) {
//         toast.success("Message deleted successfully!"); // Show success toast
//         setData((prevData) => prevData.filter((item) => item._id !== messageId)); // Remove deleted message from UI
//       } else {
//         toast.error("Failed to delete the message: " + result.error); // Show error toast
//       }
//     } catch (error) {
//       console.error("Error deleting message:", error);
//       toast.error("An error occurred while deleting the message."); // Show error toast
//     }
//   };

//   return (
//     <div>
//       {/* Toast Container */}
//       <ToastContainer />

//       <div style={{ padding: "20px" }}>
//         <h1 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
//           My REQUESTS
//         </h1>

//         {/* Card Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data && data.length > 0 ? (
//             data.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//               >
//                 {/* Brand Logo */}
//                 <a href="#">
//                   <img
//                     className="rounded-t-lg"
//                     src={item.brandLogo}
//                     alt="Brand Logo"
//                     style={{ height: "200px", objectFit: "contain", width: "100%" }}
//                   />
//                 </a>

//                 {/* Card Details */}
//                 <div className="p-5">
//                   <a href="#">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                       {item.shopName}
//                     </h5>
//                   </a>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     <strong>Message:</strong> {item.message}
//                   </p>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     <strong>WhatsApp:</strong> {item.whatsappNumber}
//                   </p>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     <strong>Category:</strong> {item.category}
//                   </p>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     <strong>Budget:</strong> ₹{item.budget}
//                   </p>

//                   {/* Delete Button */}
//                   <button
//                     onClick={() => deleteMessage(item._id)}
//                     className="absolute bottom-3 right-3 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none"
//                   >
//                     🗑
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p style={{ color: "gray", fontStyle: "italic", textAlign: "center" }}>
//               No pending requests found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyRequest;











import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const MyRequest = () => {
  const [data, setData] = useState([]); // Initialize state for API data

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const brandId = localStorage.getItem("brandID");
        const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/${brandId}/messages`);
        const result = await response.json();

        if (result.success) {
          setData(result.data); // Set data if API response is successful
        } else {
          setData([]); // Set empty array if success is false
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Reset to empty array on error
      }
    };

    fetchMessages();
  }, []);

  const deleteMessage = async (messageId) => {
    try {
      const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/message/${messageId}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (result.success) {
        toast.success("Message deleted successfully!"); // Show success toast
        setData((prevData) => prevData.filter((item) => item._id !== messageId)); // Remove deleted message from UI
      } else {
        toast.error("Failed to delete the message: " + result.error); // Show error toast
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("An error occurred while deleting the message."); // Show error toast
    }
  };

  return (
    <div>
      {/* Toast Container */}
      <ToastContainer />

      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
          My REQUESTS
        </h1>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                {/* Brand Logo */}
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={item.brandLogo}
                    alt="Brand Logo"
                    style={{ height: "200px", objectFit: "contain", width: "100%" }}
                  />
                </a>

                {/* Card Details */}
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.shopName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>Message:</strong> {item.message}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>WhatsApp:</strong> {item.whatsappNumber}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>Budget:</strong> ₹{item.budget}
                  </p>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteMessage(item._id)}
                    className="absolute bottom-3 right-3 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none"
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "gray", fontStyle: "italic", textAlign: "center" }}>
              No pending requests found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRequest;

