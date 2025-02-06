

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import Navbar from "./Navbar";
// import PayIcon from '@mui/icons-material/AttachMoney';

// const Applicant = () => {
//   const { campaignId } = useParams();
//   const [applicants, setApplicants] = useState([]);
//   const [selectedApplicant, setSelectedApplicant] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [showPaymentPopup, setShowPaymentPopup] = useState(false);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       try {
//         const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/applicants/${campaignId}`);
//         const data = await response.json();
//         if (data.success) {
//           setApplicants(data.data);
//         } else {
//           console.error("Failed to fetch applicants");
//         }
//       } catch (error) {
//         console.error("Error fetching applicants:", error);
//       }
//     };
//     fetchApplicants();
//   }, [campaignId]);

//   const handleReject = async (applicantId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, reject it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const response = await fetch(
//             `https://server-side-influencer-1.onrender.com/brand/delete/${applicantId}`,
//             { method: "DELETE" }
//           );

//           const data = await response.json();
//           if (data.success) {
//             Swal.fire("Rejected!", "The application has been rejected.", "success");
//             setApplicants((prev) => prev.filter((applicant) => applicant._id !== applicantId));
//           } else {
//             Swal.fire("Error", "Failed to reject the applicant.", "error");
//           }
//         } catch (error) {
//           Swal.fire("Error", "An error occurred while rejecting the applicant.", "error");
//         }
//       }
//     });
//   };

//   const handleApproveClick = (applicant) => {
//     setSelectedApplicant(applicant);
//     setIsModalOpen(true);
//   };

//   const handleConfirmApprove = () => {
//     setIsModalOpen(false);
//     setShowPaymentPopup(true);
//     console.log(`Applicant with ID ${selectedApplicant._id} approved.`);
//   };

//   const handlePaymentSuccess = () => {
//     Swal.fire("Payment Success", "The payment has been processed successfully!", "success");
//     setShowPaymentPopup(false);
//   };

//   return (
//     <div className="flex">
//       {/* Navbar */}
//       <Navbar />
//     <div className="bg-white min-h-screen p-6">
 
//       <h1 className="text-3xl font-bold text-center mt-16">Applicants for This Campaign</h1>

//       {applicants.length === 0 ? (
//         <p className="text-center text-xl mt-10">No applicants for this campaign</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {applicants.map((applicant) => (
//             <div key={applicant._id} className="bg-white shadow-md border border-black rounded-lg p-6 flex flex-col">
//               <p className="text-lg font-semibold"><strong>Name:</strong> {applicant.name}</p>
//               <p className="text-gray-700"><strong>Age:</strong> {applicant.age}</p>
//               <p className="text-gray-700"><strong>Followers:</strong> {applicant.followers}</p>
//               <p className="text-gray-600 text-sm"><strong>Email:</strong> {applicant.email}</p>
//               <p className="text-gray-600 text-sm"><strong>Status:</strong> {applicant.status}</p>
        
//               <p className="text-blue-500 text-sm underline mt-2 break-all">                
//                 <strong>Task Link:</strong> <a href={applicant.taskLink} target="_blank" rel="noopener noreferrer">{applicant.taskLink}</a>
//               </p>
//               <p className="text-blue-500 text-sm underline mt-2 break-all">
//                 <strong>Instagram Link:</strong> <a href={applicant.instagramLink} target="_blank" rel="noopener noreferrer">{applicant.instagramLink}</a>
//               </p>

//               {applicant.submittedImages && applicant.submittedImages.length > 0 && (
//                 <div className="mt-4">
//                   <strong>Submitted Images or screenshots:</strong>
//                   <a href={applicant.submittedImages[0]} target="_blank" rel="noopener noreferrer">
//                     <img src={applicant.submittedImages[0]} alt="submitted" className="w-20 h-20 object-cover mt-2" />
//                   </a>
//                 </div>
//               )}
//               <p className="text-gray-700 mt-2"><strong>Approved Budget:</strong> ₹{applicant.approvedBudget}</p>
              
//               <div className="flex justify-between mt-4">
//                 <button className="bg-red-500 text-white px-6 py-2 w-32 rounded-lg hover:bg-red-600" onClick={() => handleReject(applicant._id)}>Reject</button>
//                 <button className="bg-green-500 text-white px-6 py-2 w-32 rounded-lg hover:bg-green-600" onClick={() => handleApproveClick(applicant)}>Approve</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal for Terms & Conditions */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold text-center mb-4">Terms and Conditions</h2>
//             <p className="text-sm text-gray-700">
//               By approving this influencer, you agree to pay them the approved budget before finalizing the agreement.
//               Failure to comply may result in penalties and loss of campaign privileges.
//             </p>
//             <p className="text-sm text-gray-700 mt-2">
//               Please ensure you have the funds ready before proceeding. Once approved, the influencer will be notified,
//               and payment should be processed immediately.
//             </p>
//             <p className="text-sm text-gray-700 mt-2">
//               All payment transactions must be completed through the designated payment portal to ensure transparency and security.
//               Any disputes will be resolved according to our standard payment dispute resolution policies.
//             </p>
//             <div className="flex items-center mt-4">
//               <input type="checkbox" id="agree" className="mr-2" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
//               <label htmlFor="agree" className="text-sm">I agree to the terms and conditions</label>
//             </div>
//             <div className="flex justify-between mt-4">
//               <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(false)}>Cancel</button>
//               <button className={`px-4 py-2 rounded-lg ${isChecked ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}`} disabled={!isChecked} onClick={handleConfirmApprove}>
//                 Proceed to Approve
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Payment Popup */}
//       {showPaymentPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold text-center mb-4">Payment Information</h2>
//             <p className="text-sm text-gray-700">
//               Please ensure you pay the approved budget of ₹{selectedApplicant.approvedBudget} to the influencer before proceeding.
//             </p>
//             <div className="flex justify-between mt-4">
//               <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowPaymentPopup(false)}>Cancel</button>
//               <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handlePaymentSuccess}>Pay Now</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Applicant;






import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const Applicant = () => {
  const { campaignId } = useParams();
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch(`https://server-side-influencer-1.onrender.com/brand/applicants/${campaignId}`);
        const data = await response.json();
        if (data.success) {
          setApplicants(data.data);
        } else {
          console.error("Failed to fetch applicants");
        }
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };
    fetchApplicants();
  }, [campaignId]);

  const handleReject = async (applicantId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, reject it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://server-side-influencer-1.onrender.com/brand/delete/${applicantId}`,
            { method: "DELETE" }
          );

          const data = await response.json();
          if (data.success) {
            Swal.fire("Rejected!", "The application has been rejected.", "success");
            setApplicants((prev) => prev.filter((applicant) => applicant._id !== applicantId));
          } else {
            Swal.fire("Error", "Failed to reject the applicant.", "error");
          }
        } catch (error) {
          Swal.fire("Error", "An error occurred while rejecting the applicant.", "error");
        }
      }
    });
  };

  const handleApproveClick = (applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const handleConfirmApprove = () => {
    setIsModalOpen(false);
    setShowPaymentPopup(true);
    console.log(`Applicant with ID ${selectedApplicant._id} approved.`);
  };

  const handlePaymentSuccess = () => {
    Swal.fire("Payment Success", "The payment has been processed successfully!", "success");
    setShowPaymentPopup(false);
  };

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="bg-white min-h-screen p-6 w-full">
        <h1 className="text-3xl font-bold text-center mt-16">Applicants for This Campaign</h1>

        {applicants.length === 0 ? (
          <p className="text-center text-xl mt-10">No applicants for this campaign</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {applicants.map((applicant) => (
              <div key={applicant._id} className="bg-white shadow-md border border-black rounded-lg p-4 flex flex-col">
                {/* Display Profile Image */}
                <div className="flex justify-center mb-4">
                  <img src={applicant.profileImage || "/default-profile.png"} alt="Applicant" className="w-24 h-24 object-cover rounded-full" />
                </div>

                <p className="text-sm font-semibold"><strong>Name:</strong> {applicant.name}</p>
                <p className="text-sm"><strong>Age:</strong> {applicant.age}</p>
                <p className="text-sm"><strong>Followers:</strong> {applicant.followers}</p>
                <p className="text-sm"><strong>Email:</strong> {applicant.email}</p>
                <p className="text-sm"><strong>Status:</strong> {applicant.status}</p>

                {/* Task Link */}
                <p className="text-blue-500 text-sm underline mt-2 break-all">
                  <strong>Task Link:</strong> <a href={applicant.taskLink} target="_blank" rel="noopener noreferrer">{applicant.taskLink}</a>
                </p>

                {/* Instagram Link */}
                <p className="text-blue-500 text-sm underline mt-2 break-all">
                  <strong>Instagram Link:</strong> <a href={applicant.instagramLink} target="_blank" rel="noopener noreferrer">{applicant.instagramLink}</a>
                </p>

                {/* Submitted Images */}
                {applicant.submittedImages && applicant.submittedImages.length > 0 && (
                  <div className="mt-4">
                    <strong>Submitted Images or screenshots:</strong>
                    <a href={applicant.submittedImages[0]} target="_blank" rel="noopener noreferrer">
                      <img src={applicant.submittedImages[0]} alt="submitted" className="w-20 h-20 object-cover mt-2" />
                    </a>
                  </div>
                )}

                <p className="text-sm mt-2"><strong>Approved Budget:</strong> ₹{applicant.approvedBudget}</p>
                
                <div className="flex justify-between mt-4">
                  <button className="bg-red-500 text-white px-6 py-2 w-32 rounded-lg hover:bg-red-600" onClick={() => handleReject(applicant._id)}>Reject</button>
                  <button className="bg-green-500 text-white px-6 py-2 w-32 rounded-lg hover:bg-green-600" onClick={() => handleApproveClick(applicant)}>Approve</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for Terms & Conditions */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold text-center mb-4">Terms and Conditions</h2>
              <p className="text-sm text-gray-700">
                By approving this influencer, you agree to pay them the approved budget before finalizing the agreement.
                Failure to comply may result in penalties and loss of campaign privileges.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Please ensure you have the funds ready before proceeding. Once approved, the influencer will be notified,
                and payment should be processed immediately.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                All payment transactions must be completed through the designated payment portal to ensure transparency and security.
                Any disputes will be resolved according to our standard payment dispute resolution policies.
              </p>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="agree" className="mr-2" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                <label htmlFor="agree" className="text-sm">I agree to the terms and conditions</label>
              </div>
              <div className="flex justify-between mt-4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button className={`px-4 py-2 rounded-lg ${isChecked ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}`} disabled={!isChecked} onClick={handleConfirmApprove}>
                  Proceed to Approve
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Payment Popup */}
        {showPaymentPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold text-center mb-4">Payment Information</h2>
              <p className="text-sm text-gray-700">
                Please ensure you pay the approved budget of ₹{selectedApplicant.approvedBudget} to the influencer before proceeding.
              </p>
              <div className="flex justify-between mt-4">
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowPaymentPopup(false)}>Cancel</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handlePaymentSuccess}>Pay Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applicant;
