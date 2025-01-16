

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure the CSS is imported

const CsvUploader = ({ fetchData }) => {  // Receive fetchData as a prop
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }
    // https://server-side-influencer-1.onrender.com/influencer/upload-csv
  
    const formData = new FormData();
    formData.append("file", file);
    // 
    try {
      const response = await fetch("http://localhost:8000/influencer/upload-csv", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("File uploaded successfully!");

        // Call the fetchData function passed as a prop after successful upload
        fetchData();
      } else {
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      toast.error("Error uploading file.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h2>Upload CSV File</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{
            marginBottom: "20px",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
            width: "200px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "darkblue")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "blue")}
        >
          Upload
        </button>
      </form>

      {/* ToastContainer positioned at the top */}
      <ToastContainer
        position="top-center"  // Toasts will appear at the top-center of the screen
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CsvUploader;
