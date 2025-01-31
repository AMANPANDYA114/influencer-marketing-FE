


// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { IoMdArrowBack } from "react-icons/io"; // Importing back icon

// // const UpdateBrandProfile = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [formData, setFormData] = useState({
// //     uname: "",
// //     email: "",
// //     city: "",
// //     country: "",
// //     about: "",
// //     shopName: "",
// //     phone: "",
// //     address: "",
// //     instagramUrl: "",
// //     facebookUrl: "",
// //     twitterUrl: "",
// //     description: "",
// //   });

// //   const [logo, setLogo] = useState("");
// //   const [logourl, setLogourl] = useState("");
// //   const [dimage, setDImage] = useState("");
// //   const [durl, setDUrl] = useState("");
// //   const [image, setImage] = useState("");
// //   const [url, setUrl] = useState("");
// //   const [brandData, setBrandData] = useState({});

// //   const Baseurl = "https://api.cloudinary.com/v1_1/djhql8xzq/image/upload/";
// //   const preset = "adcosign_img";
// //   const brandId = localStorage.getItem("brandID");
// //   const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// //   useEffect(() => {
// //     setFormData(location.state || {});
// //   }, [location]);

// //   const handleChange = (name, value) => {
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const imageUpload = async () => {
// //     const data = new FormData();
// //     data.append("file", image);
// //     data.append("upload_preset", preset);
// //     data.append("cloud_name", "djhql8xzq");
// //     try {
// //       const res = await axios.post(Baseurl, data);
// //       setUrl(res.data.secure_url);
// //     } catch (err) {
// //       toast.error("Image not uploaded");
// //       console.error(err);
// //     }
// //   };

// //   const logoUpload = async () => {
// //     const data = new FormData();
// //     data.append("file", logo);
// //     data.append("upload_preset", preset);
// //     data.append("cloud_name", "djhql8xzq");
// //     try {
// //       const res = await axios.post(Baseurl, data);
// //       setLogourl(res.data.secure_url);
// //     } catch (err) {
// //       toast.error("Logo not uploaded");
// //       console.error(err);
// //     }
// //   };

// //   const displayImageUpload = async () => {
// //     const data = new FormData();
// //     data.append("file", dimage);
// //     data.append("upload_preset", preset);
// //     data.append("cloud_name", "djhql8xzq");
// //     try {
// //       const res = await axios.post(Baseurl, data);
// //       setDUrl(res.data.secure_url);
// //     } catch (err) {
// //       toast.error("Image not uploaded");
// //       console.error(err);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const updatedData = { ...formData, logo: logourl, image: url, photo1: durl };
// //       const res = await axios.put(`https://server-side-influencer.vercel.app/brand/${brandId}/updateprofile`, updatedData);
// //       const data = res.data;
// //       if (data.success) {
// //         toast.success(data.message);
// //         setTimeout(() => {
// //           navigate("/BrandProfile");
// //           window.location.reload();
// //         }, 1500);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to update profile.");
// //     }
// //   };

// //   const logostore = async () => {
// //     try {
// //       setBrandData({ ...brandData, logo: logourl });
// //       const res = await axios.put(`https://server-side-influencer.vercel.app/brand/${brandId}/logoupload`, {
// //         logo: logourl,
// //         type: 1,
// //       });
// //       const data = res.data;
// //       if (data.success) {
// //         toast.success(data.message);
// //         await sleep(1500);
// //         setLogourl("");
// //         navigate("/BrandProfile");
// //         window.location.reload();
// //       }
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const imagestore = async () => {
// //     const brandId = localStorage.getItem("brandID");
// //     try {
// //       const requestData = { image: url };
// //       const response = await fetch(`https://server-side-influencer.vercel.app/brand/${brandId}/imageupload`, {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(requestData),
// //       });
// //       const data = await response.json();
// //       if (data.success) {
// //         toast.success(data.message);
// //         setUrl(""); 
// //       } else {
// //         toast.error(data.message || "Image upload failed");
// //       }
// //     } catch (err) {
// //       console.error("Error uploading image:", err);
// //       toast.error("Error uploading image");
// //     }
// //   };

// //   const dimagestore = async () => {
// //     try {
// //       const brandId = localStorage.getItem("brandID");
// //       if (!durl) {
// //         console.log("Display image URL is not set!");
// //         return;
// //       }
// //       setBrandData({ ...brandData, photo1: durl });
// //       fetch(`https://server-side-influencer.vercel.app/brand/${brandId}/logoupload`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           photo1: durl,
// //           type: 2,
// //         }),
// //       })
// //         .then((response) => response.json())
// //         .then((data) => {
// //           if (data.success === true) {
// //             toast.success(data.message);
// //             setTimeout(() => {
// //               setDUrl("");
// //               navigate("/BrandProfile");
// //               window.location.reload();
// //             }, 1500);
// //           }
// //         })
// //         .catch((error) => {
// //           console.error("Error uploading image:", error);
// //         });
// //     } catch (err) {
// //       console.error("Unexpected error:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     if (durl) {
// //       dimagestore();
// //     }
// //   }, [durl]);

// //   useEffect(() => {
// //     if (logourl) {
// //       logostore();
// //     }
// //   }, [logourl]);

// //   useEffect(() => {
// //     if (url) {
// //       imagestore();
// //     }
// //   }, [url]);

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 font-sans">
// //       <div className="flex items-center">
// //         <button onClick={() => navigate(-1)} className="p-2 text-gray-700">
// //           <IoMdArrowBack size={24} /> {/* Back Icon */}
// //         </button>
// //         <h1 className="text-2xl font-bold mb-6 ml-4">Update Brand Profile</h1>
// //       </div>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         {/* All input fields */}

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Username</label>
// //           <input
// //             type="text"
// //             value={formData.uname}
// //             onChange={(e) => handleChange("uname", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Email</label>
// //           <input
// //             type="email"
// //             value={formData.email}
// //             onChange={(e) => handleChange("email", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">City</label>
// //           <input
// //             type="text"
// //             value={formData.city}
// //             onChange={(e) => handleChange("city", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Country</label>
// //           <input
// //             type="text"
// //             value={formData.country}
// //             onChange={(e) => handleChange("country", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">About</label>
// //           <textarea
// //             value={formData.about}
// //             onChange={(e) => handleChange("about", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Shop Name</label>
// //           <input
// //             type="text"
// //             value={formData.shopName}
// //             onChange={(e) => handleChange("shopName", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Phone</label>
// //           <input
// //             type="text"
// //             value={formData.phone}
// //             onChange={(e) => handleChange("phone", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Address</label>
// //           <input
// //             type="text"
// //             value={formData.address}
// //             onChange={(e) => handleChange("address", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
// //           <input
// //             type="url"
// //             value={formData.instagramUrl}
// //             onChange={(e) => handleChange("instagramUrl", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
// //           <input
// //             type="url"
// //             value={formData.facebookUrl}
// //             onChange={(e) => handleChange("facebookUrl", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Twitter URL</label>
// //           <input
// //             type="url"
// //             value={formData.twitterUrl}
// //             onChange={(e) => handleChange("twitterUrl", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Description</label>
// //           <textarea
// //             value={formData.description}
// //             onChange={(e) => handleChange("description", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Logo Upload Section */}
// //         <div className="flex flex-col mt-6">
// //           <label className="block text-sm font-medium text-gray-700">Upload Logo</label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setLogo(e.target.files[0])}
// //             className="mt-1 p-2"
// //           />
// //           <button
// //             type="button"
// //             onClick={logoUpload}
// //             className="mt-2 bg-blue-600 text-white p-2 rounded-md text-xs w-32 whitespace-nowrap"
// //           >
// //             Upload Logo
// //           </button>
// //         </div>

// //         {/* Display Image Upload Section */}
// //         <div className="flex flex-col mt-6">
// //           <label className="block text-sm font-medium text-gray-700">Upload Display Image</label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setDImage(e.target.files[0])}
// //             className="mt-1 p-2"
// //           />
// //           {/* <button
// //             type="button"
// //             onClick={displayImageUpload}
// //             className="mt-2 bg-blue-600 text-white p-2 rounded-md"
// //           >
// //             Upload Display Image
// //           </button> */}
// // <button
// //   type="button"
// //   onClick={displayImageUpload}
// //   className="mt-2 bg-blue-600 text-white p-2 rounded-md text-xs w-32 whitespace-nowrap"
// // >
// //   Upload Display Image
// // </button>


// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="mt-4 bg-blue-600 text-white p-2 rounded-md w-full"
// //         >
// //           Update Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateBrandProfile;









// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { IoMdArrowBack } from "react-icons/io"; // Importing back icon

// // const UpdateBrandProfile = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // Form data state
// //   const [formData, setFormData] = useState({
// //     uname: "",
// //     email: "",
// //     city: "",
// //     country: "",
// //     about: "",
// //     shopName: "",
// //     phone: "",
// //     address: "",
// //     instagramUrl: "",
// //     facebookUrl: "",
// //     twitterUrl: "",
// //     description: "",
// //   });

// //   // Brand ID from localStorage
// //   const brandId = localStorage.getItem("brandID");

// //   // On initial load, populate form with location state
// //   useEffect(() => {
// //     setFormData(location.state || {});
// //   }, [location]);

// //   // Handle form field changes
// //   const handleChange = (name, value) => {
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   // Submit form
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const updatedData = { ...formData };
// //       const res = await axios.put(
// //         `https://server-side-influencer.vercel.app/brand/${brandId}/updateprofile`,
// //         updatedData
// //       );
// //       const data = res.data;
// //       if (data.success) {
// //         toast.success(data.message);
// //         setTimeout(() => {
// //           navigate("/BrandProfile");
// //           window.location.reload();
// //         }, 1500);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to update profile.");
// //     }
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 font-sans">
// //       <div className="flex items-center">
// //         <button onClick={() => navigate(-1)} className="p-2 text-gray-700">
// //           <IoMdArrowBack size={24} /> {/* Back Icon */}
// //         </button>
// //         <h1 className="text-2xl font-bold mb-6 ml-4">Update Brand Profile</h1>
// //       </div>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         {/* Username */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Username</label>
// //           <input
// //             type="text"
// //             value={formData.uname}
// //             onChange={(e) => handleChange("uname", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Email */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Email</label>
// //           <input
// //             type="email"
// //             value={formData.email}
// //             onChange={(e) => handleChange("email", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* City */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">City</label>
// //           <input
// //             type="text"
// //             value={formData.city}
// //             onChange={(e) => handleChange("city", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Country */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Country</label>
// //           <input
// //             type="text"
// //             value={formData.country}
// //             onChange={(e) => handleChange("country", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* About */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">About</label>
// //           <textarea
// //             value={formData.about}
// //             onChange={(e) => handleChange("about", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Shop Name */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Shop Name</label>
// //           <input
// //             type="text"
// //             value={formData.shopName}
// //             onChange={(e) => handleChange("shopName", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Phone */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Phone</label>
// //           <input
// //             type="text"
// //             value={formData.phone}
// //             onChange={(e) => handleChange("phone", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Address */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Address</label>
// //           <input
// //             type="text"
// //             value={formData.address}
// //             onChange={(e) => handleChange("address", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Instagram URL */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
// //           <input
// //             type="url"
// //             value={formData.instagramUrl}
// //             onChange={(e) => handleChange("instagramUrl", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Facebook URL */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
// //           <input
// //             type="url"
// //             value={formData.facebookUrl}
// //             onChange={(e) => handleChange("facebookUrl", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Twitter URL */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Twitter URL</label>
// //           <input
// //             type="url"
// //             value={formData.twitterUrl}
// //             onChange={(e) => handleChange("twitterUrl", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Description */}
// //         <div className="flex flex-col">
// //           <label className="block text-sm font-medium text-gray-700">Description</label>
// //           <textarea
// //             value={formData.description}
// //             onChange={(e) => handleChange("description", e.target.value)}
// //             className="mt-1 p-2 border rounded-md"
// //           />
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="mt-4 bg-blue-600 text-white p-2 rounded-md w-full"
// //         >
// //           Update Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateBrandProfile;








import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io"; // Importing back icon

const UpdateBrandProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Form data state
  const [formData, setFormData] = useState({
    uname: "",
    email: "",
    city: "",
    country: "",
    about: "",
    shopName: "",
    phone: "",
    address: "",
    instagramUrl: "",
    facebookUrl: "",
    twitterUrl: "",
    description: "",
  });

  // State to hold the image files
  const [profileImage, setProfileImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Brand ID from localStorage
  const brandId = localStorage.getItem("brandID");

  // On initial load, populate form with location state
  useEffect(() => {
    setFormData(location.state || {});
  }, [location]);

  // Handle form field changes
  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle profile image selection
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      uploadProfileImage(file); // Automatically upload the profile image when selected
    }
  };

  // Handle background image selection
  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackgroundImage(file);
      uploadBackgroundImage(file); // Automatically upload the background image when selected
    }
  };

  // Function to upload the profile image
  const uploadProfileImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(
        `https://server-side-influencer.onrender.com/brand/uploadbrandimage/${brandId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        toast.success("Profile image uploaded successfully!");
      } else {
        toast.error("Failed to upload profile image.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading profile image.");
    }
  };

  // Function to upload the background image
  const uploadBackgroundImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(
        `https://server-side-influencer.onrender.com/brand/uploadbrandimages2/${brandId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        toast.success("Background image uploaded successfully!");
      } else {
        toast.error("Failed to upload background image.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error uploading background image.");
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...formData };
      const res = await axios.put(
        `https://server-side-influencer.vercel.app/brand/${brandId}/updateprofile`,
        updatedData
      );
      const data = res.data;
      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/BrandProfile");
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <div className="flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 text-gray-700">
          <IoMdArrowBack size={24} /> {/* Back Icon */}
        </button>
        <h1 className="text-2xl font-bold mb-6 ml-4">Update Brand Profile</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={formData.uname}
            onChange={(e) => handleChange("uname", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* About */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">About</label>
          <textarea
            value={formData.about}
            onChange={(e) => handleChange("about", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Shop Name */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Shop Name</label>
          <input
            type="text"
            value={formData.shopName}
            onChange={(e) => handleChange("shopName", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Instagram URL */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
          <input
            type="url"
            value={formData.instagramUrl}
            onChange={(e) => handleChange("instagramUrl", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Facebook URL */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
          <input
            type="url"
            value={formData.facebookUrl}
            onChange={(e) => handleChange("facebookUrl", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Twitter URL */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Twitter URL</label>
          <input
            type="url"
            value={formData.twitterUrl}
            onChange={(e) => handleChange("twitterUrl", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Profile Image Upload */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Upload Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Background Image Upload */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700">Upload Background Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageChange}
            className="mt-1 p-2 border rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white p-2 rounded-md w-full"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateBrandProfile;



