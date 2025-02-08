


// // import React from 'react';
// // import { Button } from '@mui/material';
// // import EmailIcon from '@mui/icons-material/Email';
// // import { useLocation } from 'react-router-dom';
// // import Navbar from './Navbar';

// // const SendPostRequest = () => {
// //   const { state } = useLocation();  // Access the passed data via state
// //   const { brandData } = state || {}; // Destructure the brand data

// //   if (!brandData) {
// //     return <div>Loading...</div>; // Fallback if no brand data is available
// //   }

// //   const {
// //     brandLogo,
// //     brandbackgroundimage,
// //     message,
// //     shopName,
// //     platform,
// //     influencerFollowersCount,
// //     youtubeCount,
// //     budget,
// //     whatsappNumber,
// //     location,
// //     category,
// //     language,
// //     influencerCount,
// //   } = brandData;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <Navbar /> {/* Navbar in left corner as requested */}

// //       <div
// //         className="relative h-[50vh] rounded-lg mb-8"
// //         style={{ backgroundImage: `url(${brandbackgroundimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
// //       >
// //         <div
// //           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-28 h-28 bg-cover bg-center border-4 border-white"
// //           style={{ backgroundImage: `url(${brandLogo})` }}
// //         />
// //       </div>

// //       <div className="text-center mb-12">
// //         {/* Larger font size for shopName */}
// //         <h2 className="text-4xl font-bold mb-2">{shopName}</h2>
     

// //       </div>

// //       <div className="mb-12">
// //         {/* Align all details to the left */}
// //         <div className="space-y-2">
    
// //         <p className="text-gray-600"> <strong>Requirement:</strong> {message}</p>
// //           <p className="text-gray-600"><strong>Platform:</strong> {platform}</p>
// //           <p className="text-gray-600"><strong>Followers:</strong> {influencerFollowersCount}</p>
// //           <p className="text-gray-600"><strong>YouTube Count:</strong> {youtubeCount}</p>
// //           <p className="text-gray-600"><strong>Budget:</strong> ₹{budget}</p>
// //           <p className="text-gray-600"><strong>Location:</strong> <a href={location} target="_blank" rel="noopener noreferrer">{location}</a></p>
// //           <p className="text-gray-600"><strong>Category:</strong> {category}</p>
// //           <p className="text-gray-600"><strong>Language:</strong> {language}</p>
// //           <p className="text-gray-600"><strong>Required Influencers:</strong> {influencerCount}</p>
// //         </div>
// //       </div>

// //       <div className="text-left">
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           size="large"
// //           endIcon={<EmailIcon />}
// //           className="px-8 py-3 rounded-full text-white"
// //         >
// //           Send Request
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SendPostRequest;






// import React from 'react';
// import { Button } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import { useLocation } from 'react-router-dom';
// import Navbar from './Navbar';
// import Swal from 'sweetalert2';

// // Function to send the message (trigger the API call)
// const sendMessage = async (messageId) => {
//   const managerId = localStorage.getItem('managerID'); // Get manager ID from local storage

//   if (!managerId) {
//     Swal.fire({
//       title: "Error",
//       text: "Manager ID not found. Please login again.",
//       icon: "error",
//       confirmButtonText: "OK",
//     });
//     return;
//   }

//   // Send the GET request to the backend
//   try {
//     const response = await fetch(
//       `https://server-side-influencer-1.onrender.com/manager/send-email/${messageId}/${managerId}`,
//       {
//         method: "GET",
//       }
//     );
//     const data = await response.json();

//     // Check if the email was sent successfully
//     if (data.success) {
//       Swal.fire({
//         title: "Request Sent",
//         text: "Your request has been sent. You will be contacted through email for this post.",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//     } else {
//       Swal.fire({
//         title: "Error",
//         text: "There was an error sending your request. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   } catch (error) {
//     console.error("Error sending request:", error);
//     Swal.fire({
//       title: "Error",
//       text: "There was an issue with the server. Please try again later.",
//       icon: "error",
//       confirmButtonText: "OK",
//     });
//   }
// };

// const SendPostRequest = () => {
//   const { state } = useLocation();  // Access the passed data via state
//   const { brandData } = state || {}; // Destructure the brand data

//   if (!brandData) {
//     return <div>Loading...</div>; // Fallback if no brand data is available
//   }

//   const {
//     brandLogo,
//     brandbackgroundimage,
//     message,
//     shopName,
//     platform,
//     influencerFollowersCount,
//     youtubeCount,
//     budget,
//     whatsappNumber,
//     location,
//     category,
//     language,
//     influencerCount,
//     _id, // Assuming _id is the messageId you want to pass to the API
//   } = brandData;

//   return (
//     <div className="container mx-auto p-4">


//       <div
//         className="relative h-[50vh] rounded-lg mb-8"
//         style={{ backgroundImage: `url(${brandbackgroundimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//       >
//         <div
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-28 h-28 bg-cover bg-center border-4 border-white"
//           style={{ backgroundImage: `url(${brandLogo})` }}
//         />
//       </div>

//       <div className="text-center mb-12">
//         {/* Larger font size for shopName */}
//         <h2 className="text-4xl font-bold mb-2">{shopName}</h2>
//       </div>

//       <div className="mb-12">
//         {/* Align all details to the left */}
//         <div className="space-y-2">
//           <p className="text-gray-600"><strong>Requirement:</strong> {message}</p>
//           <p className="text-gray-600"><strong>Platform:</strong> {platform}</p>
//           <p className="text-gray-600"><strong>Followers:</strong> {influencerFollowersCount}</p>
//           <p className="text-gray-600"><strong>YouTube Count:</strong> {youtubeCount}</p>
//           <p className="text-gray-600"><strong>Budget:</strong> ₹{budget}</p>
//           <p className="text-gray-600"><strong>Location:</strong> <a href={location} target="_blank" rel="noopener noreferrer">{location}</a></p>
//           <p className="text-gray-600"><strong>Category:</strong> {category}</p>
//           <p className="text-gray-600"><strong>Language:</strong> {language}</p>
//           <p className="text-gray-600"><strong>Required Influencers:</strong> {influencerCount}</p>
//         </div>
//       </div>

//       <div className="text-left">
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           endIcon={<EmailIcon />}
//           className="px-8 py-3 rounded-full text-white"
//           onClick={() => sendMessage(_id)} // Pass the message ID here
//         >
//           Send Request
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SendPostRequest;




import React from 'react';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ManagerHeader from './ManagerHeader'; // Import ManagerHeader
import Swal from 'sweetalert2';

// Function to send the message (trigger the API call)
const sendMessage = async (messageId) => {
  const managerId = localStorage.getItem('managerID'); // Get manager ID from local storage

  if (!managerId) {
    Swal.fire({
      title: "Error",
      text: "Manager ID not found. Please login again.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  // Send the GET request to the backend
  try {
    const response = await fetch(
      `https://server-side-influencer.onrender.com/manager/send-email/${messageId}/${managerId}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();

    // Check if the email was sent successfully
    if (data.success) {
      Swal.fire({
        title: "Request Sent",
        text: "Your request has been sent. You will be contacted through email for this post.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "There was an error sending your request. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  } catch (error) {
    console.error("Error sending request:", error);
    Swal.fire({
      title: "Error",
      text: "There was an issue with the server. Please try again later.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

const SendPostRequest = () => {
  const { state } = useLocation();  // Access the passed data via state
  const { brandData } = state || {}; // Destructure the brand data

  if (!brandData) {
    return <div>Loading...</div>; // Fallback if no brand data is available
  }

  const {
    brandLogo,
    brandbackgroundimage,
    message,
    shopName,
    platform,
    influencerFollowersCount,
    youtubeCount,
    budget,
    whatsappNumber,
    location,
    category,
    language,
    influencerCount,
    _id, // Assuming _id is the messageId you want to pass to the API
  } = brandData;

  return (
    <div className="flex h-screen">
      <Navbar /> {/* Include the Navbar component */}
      <div className="ml-14 w-full flex flex-col flex-grow">
        <ManagerHeader page="Send Post Request" /> {/* Include the ManagerHeader component */}
        <div className="container mx-auto p-4">
          <div
            className="relative h-[50vh] rounded-lg mb-8"
            style={{ backgroundImage: `url(${brandbackgroundimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-28 h-28 bg-cover bg-center border-4 border-white"
              style={{ backgroundImage: `url(${brandLogo})` }}
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">{shopName}</h2>
          </div>

          <div className="mb-12">
            <div className="space-y-2">
              <p className="text-gray-600"><strong>Requirement:</strong> {message}</p>
              <p className="text-gray-600"><strong>Platform:</strong> {platform}</p>
              <p className="text-gray-600"><strong>Followers:</strong> {influencerFollowersCount}</p>
              <p className="text-gray-600"><strong>YouTube Count:</strong> {youtubeCount}</p>
              <p className="text-gray-600"><strong>Budget:</strong> ₹{budget}</p>
              <p className="text-gray-600"><strong>Location:</strong> <a href={location} target="_blank" rel="noopener noreferrer">{location}</a></p>
              <p className="text-gray-600"><strong>Category:</strong> {category}</p>
              <p className="text-gray-600"><strong>Language:</strong> {language}</p>
              <p className="text-gray-600"><strong>Required Influencers:</strong> {influencerCount}</p>
            </div>
          </div>

          <div className="text-left">
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<EmailIcon />}
              className="px-8 py-3 rounded-full text-white"
              onClick={() => sendMessage(_id)} // Pass the message ID here
            >
              Send Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendPostRequest;
