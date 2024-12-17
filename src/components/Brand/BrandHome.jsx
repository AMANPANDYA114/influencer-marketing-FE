





import React, { useState } from "react";
import BrandHeader from "./BrandHeader";
import Navbar from './Navbar';
import influencerData from './influencersData.json';
import { useEffect } from "react";
const BrandHome = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedHashtags, setSelectedHashtags] = useState([]);
  const [selectedManagedBy, setSelectedManagedBy] = useState("");  // For agency/manager contact number
  const [filtersApplied, setFiltersApplied] = useState(false);  // Track if filters are applied

  


  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [influencers, setInfluencers] = useState([]); 
  const [allInfluencers, setAllInfluencers] = useState([]); // To store all fetched influencers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleInfluencers, setVisibleInfluencers] = useState([]); // Track influencers displayed

  // Fetch influencers data initially (unconditionally)
  useEffect(() => {
    fetchInfluencers(searchQuery); // Pass the search query to the function
  }, [searchQuery]); // Re-fetch on searchQuery change

  const fetchInfluencers = (query = "", limit = 6) => {
    setLoading(true);
    const searchParam = query ? `&search=${query}` : ""; // Use the query in the API call
    fetch(`http://localhost:8000/influencer/all?limit=${limit}${searchParam}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch influencer data');
        }
        return response.json();
      })
      .then((data) => {
        // Filter influencers by search query matching name or tags
        const filteredData = data.filter((influencer) => {
          const nameMatch = influencer.name.toLowerCase().includes(query.toLowerCase());
          const tagMatch = influencer.profileTags.some(tag =>
            tag.toLowerCase().includes(query.toLowerCase())
          );
          return nameMatch || tagMatch;
        });

        setAllInfluencers(filteredData); // Store filtered influencers
        setVisibleInfluencers(filteredData.slice(0, limit)); // Show first 'limit' influencers
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Handle loading state or error
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query as user types
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  // Handle hashtag selection
  const handleHashtagChange = (hashtag) => {
    setSelectedHashtags((prevHashtags) =>
      prevHashtags.includes(hashtag)
        ? prevHashtags.filter((item) => item !== hashtag)
        : [...prevHashtags, hashtag]
    );
  };

  // Handle "Managed By" selection
  const handleManagedByChange = (event) => {
    setSelectedManagedBy(event.target.value);
  };

  // Handle location change
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Apply the filters
  const handleApplyFilters = () => {
    setFiltersApplied(true);
    console.log("Filters applied:", {
      selectedCategories,
      selectedHashtags,
      selectedManagedBy,
      selectedLocation,
    });
  };

  return (
    <div className="flex flex-row h-screen">
      <Navbar />
      <div className="ml-14 w-screen h-screen relative">
        <BrandHeader page="Home" />
        {/* <button
  onClick={handleApplyFilters}
  className="mt-0 bg-blue-600 text-white rounded-lg ms-5 whitespace-nowrap"
  style={{ marginLeft: "90%" }}
>
  Export csv
</button> */}


<button
  onClick={() => {
    // Trigger API request to download CSV
    fetch("http://localhost:8000/influencer/download-csv", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch CSV file");
        }
        return response.blob(); // Get the file content as a blob
      })
      .then((blob) => {
        // Create a temporary link element to download the file
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "influencers.csv"; // Set the default file name
        document.body.appendChild(a);
        a.click(); // Trigger the click
        window.URL.revokeObjectURL(url); // Clean up the URL
        document.body.removeChild(a); // Clean up the link element
      })
      .catch((error) => {
        console.error("Error downloading CSV:", error);
      });
  }}
  className="mt-0 bg-blue-600 text-white rounded-lg ms-5 whitespace-nowrap mt-5"
  style={{ marginLeft: "90%" }}
>
  Export CSV
</button>

        {/* Wrapper for both filter and search box */}
        <div className="absolute top-16 left-4 right-4 flex justify-between items-start space-x-4" style={{ marginTop: "50px" }}>
       
          {/* Filter Section on the Left */}
          <div className="bg-white p-4 shadow-lg rounded-lg w-72">

            
          
            <h2 className="text-lg font-semibold mb-4">Filter</h2>

            {/* Hashtags Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Hashtags</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes("#fashion")}
                    onChange={() => handleHashtagChange("#fashion")}
                    className="mr-2"
                  />
                  #Fashion
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes("#beauty")}
                    onChange={() => handleHashtagChange("#beauty")}
                    className="mr-2"
                  />
                  #Beauty
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes("#travel")}
                    onChange={() => handleHashtagChange("#travel")}
                    className="mr-2"
                  />
                  #Travel
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes("#food")}
                    onChange={() => handleHashtagChange("#food")}
                    className="mr-2"
                  />
                  #Food
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes("#fitness")}
                    onChange={() => handleHashtagChange("#fitness")}
                    className="mr-2"
                  />
                  #Fitness
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes("#home")}
                    onChange={() => handleHashtagChange("#home")}
                    className="mr-2"
                  />
                  #Home
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedHashtags.includes("#parenting")}
                    onChange={() => handleHashtagChange("#parenting")}
                    className="mr-2"
                  />
                  #Parenting
                </label>
              </div>
            </div>

          

            {/* Lifestyle Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Lifestyle</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Fashion & Beauty")}
                    onChange={() => handleCategoryChange("Fashion & Beauty")}
                    className="mr-2"
                  />
                  Fashion & Beauty
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Travel")}
                    onChange={() => handleCategoryChange("Travel")}
                    className="mr-2"
                  />
                  Travel
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Food")}
                    onChange={() => handleCategoryChange("Food")}
                    className="mr-2"
                  />
                  Food
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Home & Decor")}
                    onChange={() => handleCategoryChange("Home & Decor")}
                    className="mr-2"
                  />
                  Home & Decor
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Parenting")}
                    onChange={() => handleCategoryChange("Parenting")}
                    className="mr-2"
                  />
                  Parenting
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Fitness & Wellness")}
                    onChange={() => handleCategoryChange("Fitness & Wellness")}
                    className="mr-2"
                  />
                  Fitness & Wellness
                </label>
              </div>
            </div>

            {/* Tech Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Tech</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Product Reviews")}
                    onChange={() => handleCategoryChange("Product Reviews")}
                    className="mr-2"
                  />
                  Product Reviews
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Gaming")}
                    onChange={() => handleCategoryChange("Gaming")}
                    className="mr-2"
                  />
                  Gaming
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Software & Apps")}
                    onChange={() => handleCategoryChange("Software & Apps")}
                    className="mr-2"
                  />
                  Software & Apps
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Gadgets & Tech Accessories")}
                    onChange={() => handleCategoryChange("Gadgets & Tech Accessories")}
                    className="mr-2"
                  />
                  Gadgets & Tech Accessories
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("AI & Machine Learning")}
                    onChange={() => handleCategoryChange("AI & Machine Learning")}
                    className="mr-2"
                  />
                  AI & Machine Learning
                </label>
              </div>
            </div>

            {/* Finance Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Finance</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Personal Finance")}
                    onChange={() => handleCategoryChange("Personal Finance")}
                    className="mr-2"
                  />
                  Personal Finance
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Investing")}
                    onChange={() => handleCategoryChange("Investing")}
                    className="mr-2"
                  />
                  Investing
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Cryptocurrencies")}
                    onChange={() => handleCategoryChange("Cryptocurrencies")}
                    className="mr-2"
                  />
                  Cryptocurrencies
                </label>
              </div>
            </div>

            {/* Education Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Education</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Academic Subjects")}
                    onChange={() => handleCategoryChange("Academic Subjects")}
                    className="mr-2"
                  />
                  Academic Subjects
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Life Skills & Personal Development")}
                    onChange={() => handleCategoryChange("Life Skills & Personal Development")}
                    className="mr-2"
                  />
                  Life Skills & Personal Development
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Parenting & Child Development")}
                    onChange={() => handleCategoryChange("Parenting & Child Development")}
                    className="mr-2"
                  />
                  Parenting & Child Development
                </label>
              </div>
            </div>

            {/* Health & Fitness Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Health & Fitness</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Fitness & Exercise")}
                    onChange={() => handleCategoryChange("Fitness & Exercise")}
                    className="mr-2"
                  />
                  Fitness & Exercise
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Nutrition & Diet")}
                    onChange={() => handleCategoryChange("Nutrition & Diet")}
                    className="mr-2"
                  />
                  Nutrition & Diet
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Mental Health")}
                    onChange={() => handleCategoryChange("Mental Health")}
                    className="mr-2"
                  />
                  Mental Health
                </label>
              </div>
            </div>

            {/* Travel & Adventure Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Travel & Adventure</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Travel Destinations")}
                    onChange={() => handleCategoryChange("Travel Destinations")}
                    className="mr-2"
                  />
                  Travel Destinations
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Outdoor Activities")}
                    onChange={() => handleCategoryChange("Outdoor Activities")}
                    className="mr-2"
                  />
                  Outdoor Activities
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Adventure Sports")}
                    onChange={() => handleCategoryChange("Adventure Sports")}
                    className="mr-2"
                  />
                  Adventure Sports
                </label>
              </div>
            </div>

            {/* Entertainment Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Entertainment</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Movies & TV")}
                    onChange={() => handleCategoryChange("Movies & TV")}
                    className="mr-2"
                  />
                  Movies & TV
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Music")}
                    onChange={() => handleCategoryChange("Music")}
                    className="mr-2"
                  />
                  Music
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Gaming")}
                    onChange={() => handleCategoryChange("Gaming")}
                    className="mr-2"
                  />
                  Gaming
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Comedy")}
                    onChange={() => handleCategoryChange("Comedy")}
                    className="mr-2"
                  />
                  Comedy
                </label>
              </div>
            </div>

            {/* Social Cause Filter */}
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Social Cause</h3>
              <div>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Environmental Awareness")}
                    onChange={() => handleCategoryChange("Environmental Awareness")}
                    className="mr-2"
                  />
                  Environmental Awareness
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Social Justice")}
                    onChange={() => handleCategoryChange("Social Justice")}
                    className="mr-2"
                  />
                  Social Justice
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Philanthropy")}
                    onChange={() => handleCategoryChange("Philanthropy")}
                    className="mr-2"
                  />
                  Philanthropy
                </label>
              </div>
            </div>


   {/* Location Filter */}
   <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Location</h3>
              <input
                type="text"
                value={selectedLocation}
                onChange={handleLocationChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter location"
              />
            </div>
            {/* Apply Filters Button */}
            <button
              onClick={handleApplyFilters}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Apply Filters
            </button>
          </div>


          {/* Search Box on the Right */}


          <form className="flex items-center max-w-xs mt-5" style={{ marginTop: "3%" }} >


         
        
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search category"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

        </div>

{/*  */}



{/* Table displaying filtered influencer data */}
<div className="overflow-x-auto">
        <table className="table-auto border-separate border border-gray-300 mx-auto w-[600px] max-w-full h-[300px]" style={{ marginTop: "130px" }}>
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Profile Picture</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Location</th>
              <th className="px-4 py-2 border-b">Tags</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleInfluencers.map((influencer) => (
              <tr key={influencer.id}>
                <td className="px-4 py-2 border-b text-center">
                  <img
                    src={influencer.profilePicUrl}
                    alt={influencer.name}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="px-4 py-2 border-b">{influencer.name}</td>
                <td className="px-4 py-2 border-b">{influencer.location}</td>
                <td className="px-4 py-2 border-b">{influencer.profileTags.join(', ')}</td>
                <td className="px-4 py-2 border-b text-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 whitespace-nowrap">
                    View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

{/*  */}
      </div>
    </div>
  );
};

export default BrandHome;



