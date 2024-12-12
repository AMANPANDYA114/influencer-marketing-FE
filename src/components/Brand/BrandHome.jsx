import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate to pass the URL
import BrandHeader from "./BrandHeader";
import Navbar from './Navbar';
import loader from "../../Images/loader.gif";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BrandHome = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for storing the search term
  const [profilecard, setProfileCard] = useState([]);
  const [loading, setLoading] = useState(false);  // We use loading to manage the loader
  const [error, setError] = useState(null);  // To handle errors

  const navigate = useNavigate();  // Initialize useNavigate

  // Function to format numbers into K or M
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // If the number is over a million, format it as M
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"; // If the number is over a thousand, format it as K
    } else {
      return num; // If the number is below a thousand, return it as is
    }
  };

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to fetch data from API
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (!searchTerm) return; // Don't fetch if search term is empty

    setLoading(true); // Start the loading state

    // Make the API call using the search term
    fetch(`https://server-side-influencer.onrender.com/influencer/searchInstagramUsers?searchTerm=${searchTerm}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("fullame ",data.fullName);  // Log the response data to the console
        setProfileCard(data); // Set the response data into the profilecard state
        setLoading(false); // Stop the loading spinner
      })
      .catch((error) => {
        setError(error.message); // Set error message in case of failure
        setLoading(false); // Stop the loading spinner
      });
  };

  // Handle card click to navigate to the details page and pass the URL
  const handleCardClick = (item) => {
    navigate("/getdetails", { state: {
      influencerUrl: item.url,
      profilePicUrl: item.profilePicUrl,
      fullName: item.fullName,
      followersCount: item.followersCount,
      followsCount: item.followsCount,
      username: item.username,
    } });  // Pass influencer data to the details page
  };

  return (
    <div className="flex flex-row h-screen">
      <Navbar />
      <div className="ml-14 w-screen h-screen">
        <BrandHeader page="Home" />

        {/* Search Box */}
        <form className="flex justify-center mb-6" onSubmit={handleSearchSubmit}>
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-1/2 max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search influencer name..."
              value={searchTerm} // Set the value to the state
              onChange={handleSearchChange} // Update the state as user types
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

        {/* Display Influencer Cards */}
        {loading ? (
          <img src={loader} alt="loading" className="h-52 mx-auto" />
        ) : error ? (
          <div className="text-red-500 text-center">Error: {error}</div>
        ) : (
          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5 max-md:px-10">
              {profilecard.length > 0 &&
                profilecard.map((item) => (
                  <div key={item.id} className="bg-white shadow-md rounded-lg p-4 m-2" onClick={() => handleCardClick(item)}>
                    <img
                      src={item.profilePicUrl}
                      alt={item.name}
                      className="w-24 h-24 rounded-full mx-auto"
                    />
                    <p className="text-gray-600">Full Name: {item.fullName}</p>
                    <p className="text-gray-600">Username: {item.username}</p>
                    <p className="text-gray-600">Followers: {formatNumber(item.followersCount)}</p>
                    <p className="text-gray-600">Following: {formatNumber(item.followsCount)}</p>

                    <p className="text-gray-600 text-[14px] w-full overflow-hidden text-ellipsis">
                      Account:
                      <a href={item.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        {item.url}
                      </a>
                    </p>

                    <p className="text-gray-600">
                      Verified:{" "}
                      <img
                        src="https://i.postimg.cc/R0Fjd6pB/Verified-badge.png"
                        alt="Verified Badge"
                        className="w-5 h-5 inline-block ml-1"
                      />
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default BrandHome;

