



import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const InfluencerProfileEdit = () => {
  const navigate = useNavigate();
  const influencerId = localStorage.getItem("influencerID");

  // Form Data State
  const [formData, setFormData] = useState({
    fullname: "",
    instagramProfile: "",
    followers: "",
    youtubeLink: "",
    subscribers: "",
    category: "",
    contactNumber: "",
    location: "",
    state: "",
    city: "",
    costingPerSegment: "",
    notes: "",
    hashtags: "",
    managedBy: "",
    lifestyle: "",
    email: "",
    commercial: "",
    profileImage: "", // Profile Image URL
    backgroundImage: "", // Background Image URL
  });

  // Image Upload States
  const [profileImage, setProfileImage] = useState(null); // Profile picture image file
  const [backgroundImage, setBackgroundImage] = useState(null); // Background image file
  const [uploading, setUploading] = useState(false); // To track upload state

  const uploadProfileImageUrl = `https://server-side-influencer.onrender.com/influencer/profilepic/${influencerId}`;
  const uploadBackgroundImageUrl = `https://server-side-influencer.onrender.com/influencer/backgroundimageinfluecer/${influencerId}`;

  // Handle Profile Picture Upload
  const handleProfileImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        setUploading(true);
        const response = await fetch(uploadProfileImageUrl, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (response.ok) {
          toast.success("Profile image uploaded successfully!");
          setFormData((prevData) => ({
            ...prevData,
            profileImage: data.imageUrl, // Assuming API returns updated profile image URL
          }));
        } else {
          toast.error("Failed to upload profile image.");
        }
      } catch (error) {
        toast.error("Error uploading profile image.");
      } finally {
        setUploading(false);
      }
    }
  };

  // Handle Background Image Upload
  const handleBackgroundImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        setUploading(true);
        const response = await fetch(uploadBackgroundImageUrl, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (response.ok) {
          toast.success("Background image uploaded successfully!");
          setFormData((prevData) => ({
            ...prevData,
            backgroundImage: data.imageUrl, // Assuming API returns updated background image URL
          }));
        } else {
          toast.error("Failed to upload background image.");
        }
      } catch (error) {
        toast.error("Error uploading background image.");
      } finally {
        setUploading(false);
      }
    }
  };

  // Fetch Influencer Data on Component Mount
  useEffect(() => {
    if (influencerId) {
      fetch(`https://server-side-influencer.vercel.app/influencer/getInfluencer/${influencerId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data) {
            setFormData(data.data); // Set form data from API
          }
        })
        .catch((error) => {
          console.error("Error fetching influencer data:", error);
        });
    }
  }, [influencerId]);

  // Handle Form Input Changes
  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("influcertoken");
console.log("infliere datav ", token)
    try {
      const response = await fetch(
        "https://server-side-influencer.onrender.com/influencer/updateprofile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Profile updated successfully!");
        setTimeout(() => {
          navigate("/InfluencerProfile");
        }, 4000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update profile.");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      navigate("/");
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      {/* Back Button */}
      <button
        className="text-blue-500 hover:text-blue-700 mb-4"
        onClick={() => navigate("/InfluencerProfile")}
      >
        <ArrowBackIcon /> Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Update Profile</h1>

      {/* Profile Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Profile Image</label>
        <input
          type="file"
          onChange={handleProfileImageUpload}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
        {uploading && <p>Uploading...</p>}
      </div>

      {/* Background Image Upload */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Upload Background Image</label>
        <input
          type="file"
          onChange={handleBackgroundImageUpload}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
        {uploading && <p>Uploading...</p>}
      </div>

      {/* Form for other profile data */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={(e) => handleChange("fullname", e.target.value)}
          />
        </div>

        {/* Instagram Profile */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Instagram Profile</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Instagram Profile"
            value={formData.instagramProfile}
            onChange={(e) => handleChange("instagramProfile", e.target.value)}
          />
        </div>

        {/* Followers */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Followers</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="number"
            placeholder="Followers"
            value={formData.followers}
            onChange={(e) => handleChange("followers", e.target.value)}
          />
        </div>

        {/* YouTube Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700">YouTube Link</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="url"
            placeholder="YouTube Link"
            value={formData.youtubeLink}
            onChange={(e) => handleChange("youtubeLink", e.target.value)}
          />
        </div>

        {/* Subscribers */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Subscribers</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="number"
            placeholder="Subscribers"
            value={formData.subscribers}
            onChange={(e) => handleChange("subscribers", e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={(e) => handleChange("contactNumber", e.target.value)}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>

        {/* Costing per Segment */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Costing per Segment</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="number"
            placeholder="Costing per Segment"
            value={formData.costingPerSegment}
            onChange={(e) => handleChange("costingPerSegment", e.target.value)}
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Notes"
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>

        {/* Hashtags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Hashtags</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Hashtags"
            value={formData.hashtags}
            onChange={(e) => handleChange("hashtags", e.target.value)}
          />
        </div>

        {/* Managed By */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Managed By</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Managed By"
            value={formData.managedBy}
            onChange={(e) => handleChange("managedBy", e.target.value)}
          />
        </div>

        {/* Lifestyle */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Lifestyle</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Lifestyle"
            value={formData.lifestyle}
            onChange={(e) => handleChange("lifestyle", e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        {/* Commercial */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Commercial</label>
          <input
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            type="text"
            placeholder="Commercial"
            value={formData.commercial}
            onChange={(e) => handleChange("commercial", e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md text-lg"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default InfluencerProfileEdit;
