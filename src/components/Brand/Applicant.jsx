


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import Navbar from "./Navbar"; // Ensure Navbar component is correctly imported
import PayIcon from '@mui/icons-material/AttachMoney'; // Import MUI Pay icon

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

  // Handle reject (delete) functionality
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

            // Update the UI by removing the rejected applicant
            setApplicants((prevApplicants) =>
              prevApplicants.filter((applicant) => applicant._id !== applicantId)
            );
          } else {
            Swal.fire("Error", "Failed to reject the applicant.", "error");
          }
        } catch (error) {
          Swal.fire("Error", "An error occurred while rejecting the applicant.", "error");
        }
      }
    });
  };

  // Handle approve functionality
  const handleApprove = (applicantId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to approve this applicant.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Simulate approve action
        Swal.fire("Approved!", "The application has been approved.", "success");
        console.log(`Applicant with ID ${applicantId} approved.`);
      }
    });
  };

  return (
    <div className="bg-white min-h-screen p-6">
      {/* Navbar positioned in the top-left corner */}
      <div className="absolute top-4 left-4">
        <Navbar />
      </div>

      <h1 className="text-3xl font-bold text-center mt-16">Applicants for This Campaign</h1>

      {/* Conditional rendering for no applicants */}
      {applicants.length === 0 ? (
        <p className="text-center text-xl mt-10">No applicants for this campaign</p>
      ) : (
        // Display applicants if they exist
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {applicants.map((applicant) => (
            <div
              key={applicant._id}
              className="bg-white shadow-md border border-black rounded-lg p-6 flex flex-col justify-between"
            >
              <p className="text-lg font-semibold">
                <strong>Name:</strong> {applicant.name}
              </p>
              <p className="text-gray-700">
                <strong>Age:</strong> {applicant.age}
              </p>
              <p className="text-gray-700">
                <strong>Followers:</strong> {applicant.followers}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Email:</strong> {applicant.email}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Status:</strong> {applicant.status}
              </p>
              <p className="text-blue-500 text-sm underline mt-2 break-all">
                <strong>Task Link:</strong>{" "}
                <a href={applicant.taskLink} target="_blank" rel="noopener noreferrer">
                  {applicant.taskLink}
                </a>
              </p>
              <p className="text-blue-500 text-sm underline mt-2 break-all">
                <strong>Instagram Link:</strong>{" "}
                <a href={applicant.instagramLink} target="_blank" rel="noopener noreferrer">
                  {applicant.instagramLink}
                </a>
              </p>

              {/* Displaying approved budget */}
              {applicant.approvedBudget && (
                <p className="text-gray-700 mt-2">
                  <strong>Approved Budget:</strong> ₹{applicant.approvedBudget}
                </p>
              )}
              
              {/* Displaying submitted image as a clickable element */}
              {applicant.submittedImages && applicant.submittedImages.length > 0 && (
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <strong>Submitted Image or screenshots:</strong>
                    <a href={applicant.submittedImages[0]} target="_blank" rel="noopener noreferrer">
                      <img
                        src={applicant.submittedImages[0]}
                        alt="submitted"
                        className="w-20 h-20 object-cover mt-2"
                      />
                    </a>
                  </div>
                  {/* Pay button with MUI Pay Icon */}
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
                    onClick={() => console.log(`Paying for applicant ${applicant._id}`)} // Add your pay functionality here
                  >
                    <PayIcon className="mr-2" /> {/* Add the Pay icon */}
                    Pay
                  </button>
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => handleReject(applicant._id)}
                >
                  Reject Application
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => handleApprove(applicant._id)}
                >
                  Approve Application
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applicant;


