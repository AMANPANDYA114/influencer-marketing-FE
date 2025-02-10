


import React, { useState } from 'react';
import Navbar from "./Navbar"; // Assuming Navbar is a separate component
import InfluencerHeader from './InfluencerHeader';

const MessageBox = () => {
  const users = [
    {
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Alex Johnson',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'Emily Davis',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      name: 'Michael Brown',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/6.jpg',
      name: 'David Wilson',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/7.jpg',
      name: 'Sarah Lee',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/8.jpg',
      name: 'James Parker',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/9.jpg',
      name: 'Linda Adams',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/10.jpg',
      name: 'Robert Green',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/10.jpg',
      name: 'Robert Green',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/10.jpg',
      name: 'Robert Green',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;

  // Calculate the indexes of the users to be shown on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate total number of pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Handle page changes
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="ml-14 w-screen max-sm:ml-0 h-screen">
        {/* Influencer Header */}
        <InfluencerHeader page="Messages" />

        {/* Heading for Influencers to Connect with Brands */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{
            fontSize: '17px',
            fontWeight: '700',
            color: '#000',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            padding: '20px 0',
          }}>
            Start Building Your Brand Campaign and Invite Influencers for Maximum Impact!
          </h1>
        </div>

        {/* Message Boxes */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {currentUsers.map((user, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'row', // Make it horizontal
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              position: 'relative', // Make the parent container relative to position the button absolutely
              alignItems: 'center',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '10px',
              }}>
                <img src={user.profileImage} alt={user.name} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                }} />
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                }}>{user.name}</span>
              </div>

              {/* Invite Button positioned in top-right corner of profile image */}
              <button style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '6px 12px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}>
                Invite
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={prevPage} style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px',
          }} disabled={currentPage === 1}>Previous</button>

          {/* Page Numbers */}
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              style={{
                padding: '10px 20px',
                backgroundColor: currentPage === number ? '#0056b3' : '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                margin: '0 5px',
              }}
            >
              {number}
            </button>
          ))}

          <button onClick={nextPage} style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: '10px',
          }} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;






// import React, { useState } from 'react';
// import Navbar from "./Navbar"; 
// import InfluencerHeader from './InfluencerHeader';

// const MessageBox = () => {
//   const users = [
//     // (Your user data here...)
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 7;

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(users.length / usersPerPage);

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="flex">
//       <Navbar />

//       <div className="ml-14 w-screen max-sm:ml-0 h-screen">
//         <InfluencerHeader page="Messages" />

//         <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//           <h1 style={{
//             fontSize: '17px',
//             fontWeight: '700',
//             color: '#000',
//             textTransform: 'uppercase',
//             letterSpacing: '2px',
//             padding: '20px 0',
//           }}>
//             Start Building Your Brand Campaign and Invite Influencers for Maximum Impact!
//           </h1>
//         </div>

//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '15px',
//         }}>
//           {currentUsers.map((user, index) => (
//             <div key={index} style={{
//               display: 'flex',
//               flexDirection: 'row',
//               backgroundColor: '#fff',
//               borderRadius: '8px',
//               padding: '10px',
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//               position: 'relative',
//               alignItems: 'center',
//             }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 marginRight: '10px',
//               }}>
//                 <img src={user.profileImage} alt={user.name} style={{
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                 }} />
//                 <span style={{
//                   fontSize: '16px',
//                   fontWeight: '600',
//                 }}>{user.name}</span>
//               </div>

//               <button style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 padding: '6px 12px',
//                 backgroundColor: '#007BFF',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//               }}>
//                 Invite
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Only render pagination controls if there are more than 7 users */}
//         {users.length > usersPerPage && (
//           <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//             <button onClick={prevPage} style={{
//               padding: '10px 20px',
//               backgroundColor: '#007BFF',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               marginRight: '10px',
//             }} disabled={currentPage === 1}>Previous</button>

//             {pageNumbers.map((number) => (
//               <button
//                 key={number}
//                 onClick={() => goToPage(number)}
//                 style={{
//                   padding: '10px 20px',
//                   backgroundColor: currentPage === number ? '#0056b3' : '#007BFF',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                   margin: '0 5px',
//                 }}
//               >
//                 {number}
//               </button>
//             ))}

//             <button onClick={nextPage} style={{
//               padding: '10px 20px',
//               backgroundColor: '#007BFF',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               marginLeft: '10px',
//             }} disabled={currentPage === totalPages}>Next</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MessageBox;
