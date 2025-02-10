

// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import Card from "./Card";
// import ManagerHeader from "./ManagerHeader";
// import Navbar from "./Navbar";

// const AddNewBrand = () => {
//   const [profilecard, setProfilecard] = useState([]);
//   const navigate = useNavigate();

//   const callgetInfluencerPage = async () => {
//     // Retrieve the manager token from localStorage
//     const token = localStorage.getItem("mangertoken");

//     if (!token) {
//       navigate('/ManagerLogin'); // Redirect to login if no token found
//     }

//     try {
//       // Fetch data with Authorization header containing the token
//       const res = await fetch("https://server-side-influencer.onrender.com/manager/getunverifiedbrand", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`,  // Send the token as Bearer token
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//         }
//       });

//       const data = await res.json();
//       console.log(data);

//       if (data.success === false) {
//         // If the response indicates failure (e.g., invalid token), redirect to login
//         navigate("/ManagerLogin");
//       } else {
//         setProfilecard(data.data);  // Update the state with the response data
//       }

//     } catch (err) {
//       console.log("Error fetching data:", err);
//       navigate("/ManagerLogin");  // Redirect if there's an error (e.g., network issues)
//     }
//   };

//   // Fetch data when the component mounts
//   useEffect(() => {
//     callgetInfluencerPage();
//   }, []);

//   const removeBrand = (id) => {
//     const updatedItems = profilecard.filter(item => item._id !== id);
//     setProfilecard(updatedItems);  // Remove the brand from the state
//   };

//   return (
//     <div className="h-[screen] flex">
//       <Navbar />
//       <div className="ml-14 w-screen max-sm:ml-0">
//         <ManagerHeader page="Add Brand" />
//         <div className="grid mt-10 px-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {profilecard.length === 0 ? (
//             <h1 className="text-center text-3xl font-bold mt-10">No New Request</h1>
//           ) : (
//             profilecard.map((item) => (
//               <Card item={item} onData={removeBrand} key={item._id} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewBrand;






import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import ManagerHeader from "./ManagerHeader";
import Navbar from "./Navbar";

const AddNewBrand = () => {
  const [profilecard, setProfilecard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6); // Default to 6 cards per page
  const navigate = useNavigate();

  const callgetInfluencerPage = async () => {
    // Retrieve the manager token from localStorage
    const token = localStorage.getItem("mangertoken");

    if (!token) {
      navigate('/ManagerLogin'); // Redirect to login if no token found
    }

    try {
      // Fetch data with Authorization header containing the token
      const res = await fetch("https://server-side-influencer.onrender.com/manager/getunverifiedbrand", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,  // Send the token as Bearer token
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        // If the response indicates failure (e.g., invalid token), redirect to login
        navigate("/ManagerLogin");
      } else {
        setProfilecard(data.data);  // Update the state with the response data
      }

    } catch (err) {
      console.log("Error fetching data:", err);
      navigate("/ManagerLogin");  // Redirect if there's an error (e.g., network issues)
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    callgetInfluencerPage();
  }, []);

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = profilecard.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(profilecard.length / cardsPerPage);

  const removeBrand = (id) => {
    const updatedItems = profilecard.filter(item => item._id !== id);
    setProfilecard(updatedItems);  // Remove the brand from the state
  };

  return (
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen max-sm:ml-0">
        <ManagerHeader page="Add Brand" />
        <div className="grid mt-10 px-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profilecard.length === 0 ? (
            <h1 className="text-center text-3xl font-bold mt-10">No New Request</h1>
          ) : (
            currentCards.map((item) => (
              <Card item={item} onData={removeBrand} key={item._id} />
            ))
          )}
        </div>

        {/* Pagination */}
        {profilecard.length > cardsPerPage && (
          <div className="flex justify-center mt-6 space-x-2">
            {currentPage > 1 && (
              <button
                onClick={() => paginate(currentPage - 1)}
                className="px-4 py-2 border rounded-md text-gray-800 hover:bg-gray-200"
              >
                &lt;
              </button>
            )}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-indigo-500 text-white' : 'text-gray-800 hover:bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => paginate(currentPage + 1)}
                className="px-4 py-2 border rounded-md text-gray-800 hover:bg-gray-200"
              >
                &gt;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddNewBrand;
