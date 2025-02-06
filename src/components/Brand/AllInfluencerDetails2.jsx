

// import React, { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Instagram, YouTube, Mail } from "@mui/icons-material";
// import Navbar from "./Navbar"; // Ensure Navbar component is correctly imported

// const AllInfluencerDetails2 = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const influencer = location.state?.influencer;

//   useEffect(() => {
//     if (influencer) {
//       console.log("Influencer Details:", influencer);
//     }
//   }, [influencer]);

//   if (!influencer) {
//     return <div>No influencer data available.</div>;
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Left Section - Navbar */}
//       <div style={{ width: "170px", backgroundColor: "white" }}>
//   <Navbar />
// </div>

//       {/* Right Section - Main Content */}
//       <div className="w-3/4 p-8 overflow-y-auto">
//         <div className="flex flex-col lg:flex-row justify-between gap-16 lg:items-center">
//           {/* Left Section - Influencer Image */}
//           <div className="flex flex-col items-center lg:w-2/4">
//             <img
//               src="https://i.postimg.cc/Dz1BGyyP/profile5.png"
//               alt="Influencer"
//               className="w-48 h-48 object-cover rounded-full border-4 border-violet-600"
//             />
//           </div>

//           {/* Right Section - Influencer Details */}
//           <div className="flex flex-col gap-4 lg:w-2/4">
//             <div>
//               <span className="text-violet-600 font-semibold">Influencer</span>
//               <h1 className="text-3xl font-bold">{influencer?.name || "Influencer Name"}</h1>
//             </div>
           
//             <div className="space-y-2">
//               <div>
//                 <span className="font-semibold">Category:</span> {influencer?.category || "No category"}
//               </div>
//               <div>
//                 <span className="font-semibold">Location:</span> {influencer?.location || "No location"}
//               </div>
//               <div>
//                 <span className="font-semibold">Commercial:</span> {influencer?.commercial || "No commercial"}
//               </div>
//               <div>
//                 <span className="font-semibold">Followers:</span> {influencer?.followers || "No followers"}
//               </div>
//               <div>
//                 <span className="font-semibold">Contact:</span> {influencer?.contactNumber || "No contact number"}
//               </div>
//               <div>
//                 <span className="font-semibold">Email:</span> {influencer?.email || "No email"}
//               </div>
//             </div>

//             {/* Social Media Links */}
//             <div>
//               <h4 className="text-lg font-semibold mb-2">Social Media Links</h4>
//               <div className="flex space-x-4">
//                 {influencer?.instagramProfile && (
//                   <a
//                     href={influencer.instagramProfile}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800"
//                   >
//                     <Instagram />
//                   </a>
//                 )}
//                 {influencer?.youtubeLink && (
//                   <a
//                     href={influencer.youtubeLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     <YouTube />
//                   </a>
//                 )}
//                 {influencer?.email && (
//                   <a href={`mailto:${influencer.email}`} className="text-gray-600 hover:text-gray-800">
//                     <Mail />
//                   </a>
//                 )}
//               </div>
//             </div>

           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllInfluencerDetails2;





import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Instagram, YouTube, Mail } from "@mui/icons-material";
import Navbar from "./Navbar"; // Ensure Navbar component is correctly imported

const AllInfluencerDetails2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const influencer = location.state?.influencer;

  useEffect(() => {
    if (influencer) {
      console.log("Influencer Details:", influencer);
    }
  }, [influencer]);

  if (!influencer) {
    return <div>No influencer data available.</div>;
  }

  return (
    
    <div className="flex">
      {/* Navbar */}
      <Navbar />
  

      {/* Right Section - Main Content */}
      <div className="w-3/4 ml-[170px] p-8 overflow-y-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:items-center">
          {/* Left Section - Influencer Image */}
          <div className="flex flex-col items-center lg:w-2/4">
            <img
              src="https://i.postimg.cc/Dz1BGyyP/profile5.png"
              alt="Influencer"
              className="w-48 h-48 object-cover rounded-full border-4 border-violet-600"
            />
          </div>

          {/* Right Section - Influencer Details */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className="text-violet-600 font-semibold">Influencer</span>
              <h1 className="text-3xl font-bold">{influencer?.name || "Influencer Name"}</h1>
            </div>

            <div className="space-y-2">
              <div>
                <span className="font-semibold">Category:</span> {influencer?.category || "No category"}
              </div>
              <div>
                <span className="font-semibold">Location:</span> {influencer?.location || "No location"}
              </div>
              <div>
                <span className="font-semibold">Commercial:</span> {influencer?.commercial || "No commercial"}
              </div>
              <div>
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
            <div>
              <h4 className="text-lg font-semibold mb-2">Social Media Links</h4>
              <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInfluencerDetails2;
