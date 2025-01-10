



import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toasts

const BrandPendingRequest = () => {
  const [formData, setFormData] = useState({
    message: "",
    whatsappNumber: "",
    category: "",
    language: "",
    location: "",
    platform: "",
    influencerCount: "",
    influencerFollowersCount: "",
    budget: "",
    youtubeCount: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const brandId = localStorage.getItem("brandID");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/brand/message/${brandId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Your request has been submitted successfully!");
      } else {
        toast.error(data.message || "Failed to submit the request. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit the request. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Navbar />
      <div style={{ height: "100vh", marginLeft: "56px", width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Add a Request</h1>
          <button
            onClick={() => navigate("/myrequest")}
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "10px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            My Requests
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
            <form
              onSubmit={handleSubmit}
              style={{
                padding: "24px",
                backgroundColor: "#f3f4f6",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Form Inputs */}
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))}
              <button
                type="submit"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "12px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "16px",
                  marginTop: "16px",
                }}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BrandPendingRequest;

