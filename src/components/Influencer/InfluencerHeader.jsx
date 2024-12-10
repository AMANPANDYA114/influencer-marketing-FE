// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FiSettings } from "react-icons/fi";

// const InfluencerHeader = (props) => {
//   const navigate = useNavigate();
//   const [userdata, setuserdata] = useState([]);

  



  


//   // Fetch Instagram stats
// const fetchInstagramStats = async (url) => {
//   try {
//     const res = await fetch(`https://server-side-influencer.vercel.app/influencer/stats?url=${encodeURIComponent(url)}`);
//     const data = await res.json();

//     // Log the usersCount value
//     console.log("Influencer details in profile header:", data);
//     console.log("Full name:", data?.data?.data?.name);

//     // Extract and save fullname and followers count to localStorage
//     const fullname = data?.data?.data?.name;
//     localStorage.setItem('fullname', fullname);  // Save fullname to localStorage
//     const followersCount = data?.data?.data?.usersCount;
//     localStorage.setItem('followersCount', followersCount);  // Save followersCount to localStorage
//     console.log("Followers count:", followersCount);

//     if (res.ok) {
//       console.log("Instagram Stats API Response:", data.usersCount);
//       console.log("Followers count:", data?.data?.data?.usersCount);

//       // Extract pctFakeFollowers value from API response
//       const fakeFollowers = data?.data?.data?.pctFakeFollowers;

//       // Convert the value to a percentage
//       const fakeFollowersPercentage = (fakeFollowers * 100).toFixed(2); // Format as percentage with 2 decimal places

//       // Log the fake followers percentage
//       console.log("Fake Followers Percentage:", fakeFollowersPercentage); // Output like 8.57%

//       return fakeFollowersPercentage; // Return the percentage for further checks
//     } else {
//       console.error("Error fetching Instagram stats:", data.error);
//       return null;
//     }
//   } catch (error) {
//     console.error("Error in Instagram stats API call:", error);
//     return null;
//   }
// };

//   const getInfluencerData = () => {
//     const influencerId = localStorage.getItem("influencerID");
  
//     if (!influencerId) {
//       console.log("No influencer ID found in localStorage.");
//       return;
//     }
  
//     // API call to fetch influencer data
//     fetch(`https://server-side-influencer.vercel.app/influencer/getInfluencer/${influencerId}`)
//       .then(response => response.json())
//       .then(data => {
//         setuserdata(data.data);
//         console.log("Logged in influencer data is:", data.data);
//       })
//       .catch(err => {
//         console.error("Error fetching influencer data:", err);
//       });
//   };
  


//   useEffect(() => {
//     fetchInstagramStats()
//     getInfluencerData()
//   }, [])



//   return (
//     <div className="h-20 flex items-center justify-between mx-20 max-sm:mx-2 w-[screen] border-b-2 ">
//       <nav className="">
//         <p className="font-bold">Influencer  &gt; {props.page}</p>
//       </nav>
//       <div className="flex items-center">
//         {/* <div className="flex mx-5">
//           <FiSettings />
//         </div> */}
//         <NavLink to='/InfluencerProfile'>
//           <div class="flex items-center space-x-4">
//             <div className="">

//               <img class="w-10 h-10 rounded-full group" src={userdata.profile} alt="" />
//             </div>
//             <div className="font-medium hover:text-blue-700 cursor-pointer ">
//               <div>Hi,{userdata.fullname}</div>
//             </div>
//           </div>
//         </NavLink>
//       </div>
//     </div >
//   );
// };

// export default InfluencerHeader;




import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

const InfluencerHeader = (props) => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState([]);

  // Fetch Instagram stats
  const fetchInstagramStats = async (url) => {
    try {
      const res = await fetch(`https://server-side-influencer.vercel.app/influencer/stats?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      // Log the usersCount value
      console.log("Influencer details in profile header:", data);
      console.log("Full name:", data?.data?.data?.name);

      // Extract and save fullname and followers count to localStorage
      const fullname = data?.data?.data?.name;
      localStorage.setItem('fullname', fullname);  // Save fullname to localStorage
      const followersCount = data?.data?.data?.usersCount;
      localStorage.setItem('followersCount', followersCount);  // Save followersCount to localStorage
      console.log("Followers count:", followersCount);

      if (res.ok) {
        console.log("Instagram Stats API Response:", data.usersCount);
        console.log("Followers count:", data?.data?.data?.usersCount);

        // Extract pctFakeFollowers value from API response
        const fakeFollowers = data?.data?.data?.pctFakeFollowers;

        // Convert the value to a percentage
        const fakeFollowersPercentage = (fakeFollowers * 100).toFixed(2); // Format as percentage with 2 decimal places

        // Log the fake followers percentage
        console.log("Fake Followers Percentage:", fakeFollowersPercentage); // Output like 8.57%

        return fakeFollowersPercentage; // Return the percentage for further checks
      } else {
        console.error("Error fetching Instagram stats:", data.error);
        return null;
      }
    } catch (error) {
      console.error("Error in Instagram stats API call:", error);
      return null;
    }
  };

  // Fetch influencer data
  const getInfluencerData = () => {
    const influencerId = localStorage.getItem("influencerID");

    if (!influencerId) {
      console.log("No influencer ID found in localStorage.");
      return;
    }

    // API call to fetch influencer data
    fetch(`https://server-side-influencer.vercel.app/influencer/getInfluencer/${influencerId}`)
      .then(response => response.json())
      .then(data => {
        setuserdata(data.data);
        console.log("Logged in influencer data is:", data.data);

        // After retrieving influencer data, pass the Instagram URL to the stats API
        const instagramURL = data.data.instagramURL;  // Get Instagram URL from influencer data
        if (instagramURL) {
          fetchInstagramStats(instagramURL);  // Pass the Instagram URL to fetchInstagramStats
        }
      })
      .catch(err => {
        console.error("Error fetching influencer data:", err);
      });
  };

  useEffect(() => {
    getInfluencerData(); // Call getInfluencerData when the component mounts
  }, []);

  return (
    <div className="h-20 flex items-center justify-between mx-20 max-sm:mx-2 w-[screen] border-b-2 ">
      <nav className="">
        <p className="font-bold">Influencer &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        {/* <div className="flex mx-5">
          <FiSettings />
        </div> */}
        <NavLink to='/InfluencerProfile'>
          <div className="flex items-center space-x-4">
            <div className="">
              <img className="w-10 h-10 rounded-full group" src={userdata.profile} alt="" />
            </div>
            <div className="font-medium hover:text-blue-700 cursor-pointer ">
              <div>Hi, {userdata.fullname}</div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default InfluencerHeader;

