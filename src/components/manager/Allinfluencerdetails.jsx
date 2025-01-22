

// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Instagram, YouTube, Mail, ArrowBack } from "@mui/icons-material";
// import Navbar from './Navbar'; // Ensure Navbar component is imported

// const AllInfluencerDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const influencer = location.state?.influencer; // Get influencer data passed from previous page

//   useEffect(() => {
//     if (influencer) {
//       console.log("Influencer Details:", influencer);
//     }
//   }, [influencer]);

//   if (!influencer) {
//     return <div>No influencer data available.</div>;
//   }

//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
//         {/* Left Content */}
//         <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//             {influencer?.name || "Influencer Name"}
//           </h2>

//           {/* Influencer Details */}
//           <div className="space-y-4">
//             <div>
//               <span className="font-semibold">Category:</span> {influencer?.category || "No category"}
//             </div>
//             <div>
//               <span className="font-semibold">Location:</span> {influencer?.location || "No location"}
//             </div>
//             <div>
//               <span className="font-semibold">Commercial:</span> {influencer?.commercial || "No commercial"} |{" "}
//               <span className="font-semibold">Followers:</span> {influencer?.followers || "No followers"}
//             </div>
//             <div>
//               <span className="font-semibold">Contact:</span> {influencer?.contactNumber || "No contact number"}
//             </div>
//             <div>
//               <span className="font-semibold">Email:</span> {influencer?.email || "No email"}
//             </div>
//           </div>

//           {/* Social Media Links */}
//           <div className="mb-4">
//             <h4 className="text-lg font-semibold text-center mb-2">Social Media Links</h4>
//             <div className="flex justify-center space-x-4">
//               {influencer?.instagramProfile && (
//                 <a
//                   href={influencer.instagramProfile}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   <Instagram />
//                 </a>
//               )}
//               {influencer?.youtubeLink && (
//                 <a
//                   href={influencer.youtubeLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   <YouTube />
//                 </a>
//               )}
//               {influencer?.email && (
//                 <a href={`mailto:${influencer.email}`} className="text-gray-600 hover:text-gray-800">
//                   <Mail />
//                 </a>
//               )}
//             </div>
//           </div>

//           {/* Notes */}
//           <div>
//             <span className="font-semibold">Notes:</span> {influencer?.notes || "No notes"}
//           </div>
//         </div>

//         {/* Right Content - Centered Dummy Image */}
//         <div className="flex justify-center mt-8 lg:mt-0">
//           <img
//             className="w-36 h-36 rounded-full object-cover"
//             src="https://via.placeholder.com/150"
//             alt="Influencer"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllInfluencerDetails;



import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Instagram, YouTube, Mail, ArrowBack } from "@mui/icons-material";
import Navbar from './Navbar'; // Ensure Navbar component is imported

const AllInfluencerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const influencer = location.state?.influencer; // Get influencer data passed from previous page

  useEffect(() => {
    if (influencer) {
      console.log("Influencer Details:", influencer);
    }
  }, [influencer]);

  if (!influencer) {
    return <div>No influencer data available.</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Left Navbar */}
      <div className="fixed top-0 left-0 w-64 h-full z-10">
        <Navbar /> {/* Your Navbar component goes here */}
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-8 overflow-y-auto">
        <section className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          {/* Left Content - Influencer Details */}
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {influencer?.name || "Influencer Name"}
            </h2>

            {/* Influencer Details */}
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Category:</span> {influencer?.category || "No category"}
              </div>
              <div>
                <span className="font-semibold">Location:</span> {influencer?.location || "No location"}
              </div>
              <div>
                <span className="font-semibold">Commercial:</span> {influencer?.commercial || "No commercial"} |{" "}
                <span className="font-semibold">Followers:</span> {influencer?.followers || "No followers"}
              </div>
              <div>
                <span className="font-semibold">Contact:</span> {influencer?.contactNumber || "No contact number"}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {influencer?.email || "No email"}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-center mb-2">Social Media Links</h4>
              <div className="flex justify-center space-x-4">
                {influencer?.instagramProfile && (
                  <a
                    href={influencer.instagramProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Instagram />
                  </a>
                )}
                {influencer?.youtubeLink && (
                  <a
                    href={influencer.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800"
                  >
                    <YouTube />
                  </a>
                )}
                {influencer?.email && (
                  <a href={`mailto:${influencer.email}`} className="text-gray-600 hover:text-gray-800">
                    <Mail />
                  </a>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <span className="font-semibold">Notes:</span> {influencer?.notes || "No notes"}
            </div>
          </div>

          {/* Right Content - Centered Dummy Image */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <img
              className="w-36 h-36 rounded-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Influencer"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllInfluencerDetails;

