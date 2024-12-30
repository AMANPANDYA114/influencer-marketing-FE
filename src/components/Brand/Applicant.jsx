

// import { FaTrashAlt } from "react-icons/fa"; // Import trash icon for delete button
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Applicant = () => {
//   const { campaignId } = useParams(); // Get the campaignId from URL
//   const [applicants, setApplicants] = useState([]); // State to store applicants data

//   useEffect(() => {
//     // Function to fetch applicant data
//     const fetchApplicants = async () => {
//       try {
//         const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/applicants/${campaignId}`);
//         const data = await response.json();
        
//         if (data.success) {
//           setApplicants(data.data); // Set the applicants data to state
//         } else {
//           console.error("Failed to fetch applicants");
//         }
//       } catch (error) {
//         console.error("Error fetching applicants:", error);
//       }
//     };

//     fetchApplicants(); // Fetch applicants when campaignId changes
//   }, [campaignId]);

//   // Handle delete functionality (this is just a mock for now)
//   const handleDelete = (applicantId) => {
//     console.log("Delete applicant with ID:", applicantId);
//     // You can implement the actual delete logic here (e.g., making an API call)
//   };

//   return (
//     <div className="bg-white h-screen flex flex-col items-center justify-start p-4">
//       <h1 className="text-2xl font-bold mt-4">Applicants for this campaign</h1>
      
//       {/* Display applicants */}
//       <div className="flex flex-wrap gap-6 mt-6">
//         {applicants.map((applicant) => (
//           <div
//             key={applicant._id}
//             className="border-2 border-black p-6 rounded shadow-md w-80 h-72 flex flex-col justify-between relative"
//           >
//             <FaTrashAlt
//               className="absolute top-2 right-2 text-xl cursor-pointer"
//               onClick={() => handleDelete(applicant._id)} // Handle delete click
//             />
//             <p>Name: {applicant.name}</p>
//             <p>Age: {applicant.age}</p>
//             <p>Followers: {applicant.followers}</p>
//             <p className="text-sm">Email: {applicant.email}</p>
//             <p>Status: {applicant.status}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Applicant;





import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Import trash icon for delete button
import { useParams } from "react-router-dom";

const Applicant = () => {
  const { campaignId } = useParams(); // Get the campaignId from URL
  const [applicants, setApplicants] = useState([]); // State to store applicants data

  useEffect(() => {
    // Function to fetch applicant data
    const fetchApplicants = async () => {
      try {
        const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/applicants/${campaignId}`);
        const data = await response.json();
        
        if (data.success) {
          setApplicants(data.data); // Set the applicants data to state
        } else {
          console.error("Failed to fetch applicants");
        }
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchApplicants(); // Fetch applicants when campaignId changes
  }, [campaignId]);

  // Handle delete functionality
  const handleDelete = async (applicantId) => {
    try {
      // Make the DELETE API request
      const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/delete/${applicantId}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        // On success, remove the deleted applicant from the state
        setApplicants(applicants.filter(applicant => applicant._id !== applicantId));
        console.log(`Applicant with ID ${applicantId} deleted successfully`);
      } else {
        console.error("Failed to delete applicant");
      }
    } catch (error) {
      console.error("Error deleting applicant:", error);
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-start p-4">
      <h1 className="text-2xl font-bold mt-4">Applicants for this campaign</h1>
      
      {/* Display applicants */}
      <div className="flex flex-wrap gap-6 mt-6">
        {applicants.map((applicant) => (
          <div
            key={applicant._id}
            className="border-2 border-black p-6 rounded shadow-md w-80 h-72 flex flex-col justify-between relative"
          >
            <FaTrashAlt
              className="absolute top-2 right-2 text-xl cursor-pointer"
              onClick={() => handleDelete(applicant._id)} // Handle delete click
            />
            <p>Name: {applicant.name}</p>
            <p>Age: {applicant.age}</p>
            <p>Followers: {applicant.followers}</p>
            <p className="text-sm">Email: {applicant.email}</p>
            <p>Status: {applicant.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applicant;
