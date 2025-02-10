



// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, IconButton } from "@mui/material";
// import EditIcon from '@mui/icons-material/Edit'; // MUI Edit Icon
// import DeleteIcon from '@mui/icons-material/Delete'; // MUI Delete Icon

// const MyRequest = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [cardsPerPage, setCardsPerPage] = useState(6);
//   const [open, setOpen] = useState(false);
//   const [currentMessage, setCurrentMessage] = useState(null);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const brandId = localStorage.getItem("brandID");
//         const response = await fetch(`http://localhost:8000/brand/${brandId}/messages`);
//         const result = await response.json();

//         if (result.success) {
//           setData(result.data);
//         } else {
//           setData([]);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setData([]);
//       }
//     };

//     fetchMessages();
//   }, []);

//   const handleClickOpen = (message) => {
//     setCurrentMessage(message); // Set the current message to edit
//     setOpen(true); // Open the dialog box
//   };

//   const handleClose = () => {
//     setOpen(false); // Close the dialog box
//   };

//   const handleUpdateMessage = async () => {
//     const {
//       _id,
//       brandId,
//       message,
//       category,
//       language,
//       location,
//       platform,
//       influencerCount,
//       influencerFollowersCount,
//       budget,
//       youtubeCount
//     } = currentMessage;

//     const updatedMessage = {
//       message,
//       category,
//       language,
//       location,
//       platform,
//       influencerCount,
//       influencerFollowersCount,
//       budget,
//       youtubeCount
//     };

//     try {
//       const response = await fetch(`http://localhost:8000/brand/message/${_id}/${brandId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedMessage),
//       });

//       const result = await response.json();
//       if (result.success) {
//         toast.success("Message updated successfully!");
//         setData(prevData =>
//           prevData.map(item =>
//             item._id === _id ? { ...item, ...updatedMessage } : item
//           )
//         ); // Update the UI with the new data
//         handleClose(); // Close the modal
//       } else {
//         toast.error("Failed to update the message.");
//       }
//     } catch (error) {
//       console.error("Error updating message:", error);
//       toast.error("An error occurred while updating the message.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentMessage(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const deleteMessage = async (messageId) => {
//     try {
//       const response = await fetch(`http://localhost:8000/brand/message/${messageId}`, {
//         method: "DELETE",
//       });
//       const result = await response.json();

//       if (result.success) {
//         toast.success("Message deleted successfully!");
//         setData((prevData) => prevData.filter((item) => item._id !== messageId)); // Remove deleted message from UI
//       } else {
//         toast.error("Failed to delete the message: " + result.error);
//       }
//     } catch (error) {
//       console.error("Error deleting message:", error);
//       toast.error("An error occurred while deleting the message.");
//     }
//   };

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const totalPages = Math.ceil(data.length / cardsPerPage);

//   useEffect(() => {
//     const updateCardsPerPage = () => {
//       if (window.innerWidth <= 768) {
//         setCardsPerPage(4);
//       } else {
//         setCardsPerPage(6);
//       }
//     };

//     updateCardsPerPage();
//     window.addEventListener("resize", updateCardsPerPage);

//     return () => {
//       window.removeEventListener("resize", updateCardsPerPage);
//     };
//   }, []);

//   return (
//     <div className="flex h-screen">
//       <Navbar />

//       <div className="flex-1 ml-10 p-6">
//         <ToastContainer />
//         <h1 className="text-center mb-6 text-3xl font-bold">My REQUESTS</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {currentCards.length > 0 ? (
//             currentCards.map((item) => (
//               <div
//                 key={item._id}
//                 className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
//               >
//                 <div
//                   className="w-20 h-20 bg-cover bg-center rounded-full mx-auto mt-4"
//                   style={{
//                     backgroundImage: `url(${item.brandLogo})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>

//                 <div className="p-5">
//                   <a href="#">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                       {item.shopName}
//                     </h5>
//                   </a>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     <strong>Message:</strong> {item.message}
//                   </p>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     <strong>Category:</strong> {item.category}
//                   </p>
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     <strong>Budget:</strong> ₹{item.budget}
//                   </p>

//                   {/* Edit Button */}
//                   <IconButton
//                     onClick={() => handleClickOpen(item)} // Open the dialog with current data
//                     className="absolute top-3 right-3"
//                     color="primary"
//                   >
//                     <EditIcon />
//                   </IconButton>

//                   {/* Delete Button */}
//                   <IconButton
//                     onClick={() => deleteMessage(item._id)} // Call the delete function with the message ID
//                     className="absolute bottom-3 right-3"
//                     color="secondary"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 italic text-center">No pending requests found.</p>
//           )}
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 border rounded-l-md"
//           >
//             &lt;
//           </button>
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`px-4 py-2 border ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 border rounded-r-md"
//           >
//             &gt;
//           </button>
//         </div>
//       </div>

//       {/* Modal Form for Editing Message */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Edit Request</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Message"
//             name="message"
//             value={currentMessage?.message || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Category"
//             name="category"
//             value={currentMessage?.category || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Language"
//             name="language"
//             value={currentMessage?.language || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Location"
//             name="location"
//             value={currentMessage?.location || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Platform"
//             name="platform"
//             value={currentMessage?.platform || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Influencer Count"
//             name="influencerCount"
//             type="number"
//             value={currentMessage?.influencerCount || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Influencer Followers Count"
//             name="influencerFollowersCount"
//             value={currentMessage?.influencerFollowersCount || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Budget"
//             name="budget"
//             type="number"
//             value={currentMessage?.budget || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="YouTube Count"
//             name="youtubeCount"
//             value={currentMessage?.youtubeCount || ""}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="secondary">Cancel</Button>
//           <Button onClick={handleUpdateMessage} color="primary">Save</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default MyRequest;





import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'; // MUI Edit Icon
import DeleteIcon from '@mui/icons-material/Delete'; // MUI Delete Icon

const MyRequest = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [open, setOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const brandId = localStorage.getItem("brandID");
        const response = await fetch(`https://server-side-influencer.onrender.com/brand/${brandId}/messages`);
        const result = await response.json();

        if (result.success) {
          setData(result.data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchMessages();
  }, []);

  const handleClickOpen = (message) => {
    setCurrentMessage(message); // Set the current message to edit
    setOpen(true); // Open the dialog box
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog box
  };

  const handleUpdateMessage = async () => {
    const {
      _id,
      brandId,
      message,
      category,
      language,
      location,
      platform,
      influencerCount,
      influencerFollowersCount,
      budget,
      youtubeCount
    } = currentMessage;

    const updatedMessage = {
      message,
      category,
      language,
      location,
      platform,
      influencerCount,
      influencerFollowersCount,
      budget,
      youtubeCount
    };

    try {
      const response = await fetch(`https://server-side-influencer.onrender.com/brand/message/${_id}/${brandId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMessage),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message updated successfully!");
        setData(prevData =>
          prevData.map(item =>
            item._id === _id ? { ...item, ...updatedMessage } : item
          )
        ); // Update the UI with the new data
        handleClose(); // Close the modal
      } else {
        toast.error("Failed to update the message.");
      }
    } catch (error) {
      console.error("Error updating message:", error);
      toast.error("An error occurred while updating the message.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMessage(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const deleteMessage = async (messageId) => {
    try {
      const response = await fetch(`https://server-side-influencer.onrender.com/brand/message/${messageId}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (result.success) {
        toast.success("Message deleted successfully!");
        setData((prevData) => prevData.filter((item) => item._id !== messageId)); // Remove deleted message from UI
      } else {
        toast.error("Failed to delete the message: " + result.error);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("An error occurred while deleting the message.");
    }
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(data.length / cardsPerPage);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth <= 768) {
        setCardsPerPage(4);
      } else {
        setCardsPerPage(6);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  return (
    <div className="flex h-screen">
      <Navbar />

      <div className="flex-1 ml-10 p-6">
        <ToastContainer />
        <h1 className="text-center mb-6 text-3xl font-bold">My Requirements</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.length > 0 ? (
            currentCards.map((item) => (
              <div
                key={item._id}
                className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
              >
                <div
                  className="w-20 h-20 bg-cover bg-center rounded-full mx-auto mt-4"
                  style={{
                    backgroundImage: `url(${item.brandLogo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.shopName}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>Message:</strong> {item.message}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <strong>Budget:</strong> ₹{item.budget}
                  </p>

                  {/* Icon Container */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {/* Edit Button */}
                    <IconButton
                      onClick={() => handleClickOpen(item)} // Open the dialog with current data
                      color="primary"
                    >
                      <EditIcon />
                    </IconButton>

                    {/* Delete Button */}
                    <IconButton
                      onClick={() => deleteMessage(item._id)} // Call the delete function with the message ID
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-center">No pending requests found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-l-md"
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 border ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-r-md"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Modal Form for Editing Message */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your requirement</DialogTitle>
        <DialogContent>
          <TextField
            label="Message"
            name="message"
            value={currentMessage?.message || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={currentMessage?.category || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Language"
            name="language"
            value={currentMessage?.language || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={currentMessage?.location || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Platform"
            name="platform"
            value={currentMessage?.platform || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Influencer Count"
            name="influencerCount"
            type="number"
            value={currentMessage?.influencerCount || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Influencer Followers Count"
            name="influencerFollowersCount"
            value={currentMessage?.influencerFollowersCount || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Budget"
            name="budget"
            type="number"
            value={currentMessage?.budget || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="YouTube Count"
            name="youtubeCount"
            value={currentMessage?.youtubeCount || ""}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleUpdateMessage} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyRequest;
