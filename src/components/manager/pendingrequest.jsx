



// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import ManagerHeader from "./ManagerHeader";
// import Navbar from "./Navbar";

// const PendingRequest = () => {
//   const [profilecard, setProfilecard] = useState([]);
//   const navigate = useNavigate();

//   // Check if the manager is authenticated
//   useEffect(() => {
//     const token = localStorage.getItem("mangertoken");
//     if (!token) {
//       navigate('/ManagerLogin');
//       return;
//     }
//   }, [navigate]);

//   // Fetch data to display in the profile cards
//   useEffect(() => {
//     fetch("https://server-side-influencer.onrender.com/brand/messages")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setProfilecard(data.data);
//         }
//       });
//   }, []);

//   // Handler for clicking on a card
//   const handleCardClick = (brandData) => {
//     navigate('/requestpage', { state: { brandData } }); // Pass brandData to the new page
//   };

//   return (
//     <div className="flex h-screen">
//       <Navbar /> {/* Sidebar/Navbar component */}
//       <div className="ml-14 w-full flex flex-col flex-grow">
//         <ManagerHeader page="Influencer Requirements" />
//         <div className="flex flex-col w-full flex-grow p-8 items-center">
//           <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 text-shadow">
//             Unlock Exclusive Influencer Requirements from Leading Brands
//           </h2>
//           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center w-full">
//             {profilecard.length === 0 ? (
//               <h1 className="text-2xl font-bold text-center text-gray-600">No Requirements Found</h1>
//             ) : (
//               profilecard.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 w-full max-w-md ml-[13%]"
//                   onClick={() => handleCardClick(item)} // Pass the item to the handler
//                 >
//                   <div
//                     className="relative"
//                     style={{
//                       backgroundImage: `url(${item.brandbackgroundimage})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       height: "150px",
//                       borderRadius: "1rem 1rem 0 0",
//                     }}
//                   >
//                     <div className="flex justify-center mb-6">
//                       <img
//                         src={item.brandLogo}
//                         alt="Brand Logo"
//                         className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4 text-center">
//                     <h3 className="text-2xl font-semibold text-gray-800">{item.shopName}</h3>
//                     <p className="text-sm text-gray-500 mt-2">{item.brandType}</p>
//                   </div>
//                   <div className="border-t border-gray-300 py-4">
//                     <div className="space-y-2">
//                       <div className="flex items-center justify-start space-x-2 text-gray-700">
//                         <p className="font-bold text-xs">Requirement:</p>
//                         <p className="text-xs">{item.message}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PendingRequest;






import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ManagerHeader from "./ManagerHeader";
import Navbar from "./Navbar";

const PendingRequest = () => {
  const [profilecard, setProfilecard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);  // Default to 6 cards per page
  const navigate = useNavigate();

  // Check if the manager is authenticated
  useEffect(() => {
    const token = localStorage.getItem("mangertoken");
    if (!token) {
      navigate('/ManagerLogin');
      return;
    }
  }, [navigate]);

  // Fetch data to display in the profile cards
  useEffect(() => {
    fetch("https://server-side-influencer.onrender.com/brand/messages")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProfilecard(data.data);
        }
      });
  }, []);

  // Calculate number of cards to display based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerPage(6);  // Large screens show 6 cards
      } else {
        setCardsPerPage(3);  // Mobile screens show 3 cards
      }
    };
    handleResize(); // Initial resize on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handler for clicking on a card
  const handleCardClick = (brandData) => {
    navigate('/requestpage', { state: { brandData } }); // Pass brandData to the new page
  };

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = profilecard.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(profilecard.length / cardsPerPage);

  return (
    <div className="flex h-screen">
      <Navbar /> {/* Sidebar/Navbar component */}
      <div className="ml-14 w-full flex flex-col flex-grow">
        <ManagerHeader page="Influencer Requirements" />
        <div className="flex flex-col w-full flex-grow p-8 items-center">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 text-shadow">
            Unlock Exclusive Influencer Requirements from Leading Brands
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center w-full">
            {profilecard.length === 0 ? (
              <h1 className="text-2xl font-bold text-center text-gray-600">No Requirements Found</h1>
            ) : (
              currentCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-105 w-full max-w-md ml-[13%]"
                  onClick={() => handleCardClick(item)} // Pass the item to the handler
                >
                  <div
                    className="relative"
                    style={{
                      backgroundImage: `url(${item.brandbackgroundimage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "150px",
                      borderRadius: "1rem 1rem 0 0",
                    }}
                  >
                    <div className="flex justify-center mb-6">
                      <img
                        src={item.brandLogo}
                        alt="Brand Logo"
                        className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">{item.shopName}</h3>
                    <p className="text-sm text-gray-500 mt-2">{item.brandType}</p>
                  </div>
                  <div className="border-t border-gray-300 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-start space-x-2 text-gray-700">
                        <p className="font-bold text-xs">Requirement:</p>
                        <p className="text-xs">{item.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

export default PendingRequest;
