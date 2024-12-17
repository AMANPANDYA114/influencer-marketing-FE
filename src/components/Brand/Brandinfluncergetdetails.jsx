


import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Don't forget to import styles
import { useLocation } from 'react-router-dom';  // Import useLocation to get passed data

// Function to format numbers with K, M, or Cr suffix
const formatNumber = (num) => {
  if (!num) return 'N/A';
  
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M'; // Format in millions
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K'; // Format in thousands
  } else {
    return num; // Return the number as is if less than 1000
  }
};

const BrandInfluencerGetDetail = () => {
  const location = useLocation();  // Access the passed data from the previous page
  const { influencerUrl, profilePicUrl, fullName, followersCount, followsCount, engagementRate, username } = location.state || {};

  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the statistics data from the provided API using the username
    if (username) {
      fetch(`https://server-side-influencer.onrender.com/influencer/newInstagramStatisticsData/${username}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched data:", data); // Log the whole data to check structure
          setStats(data); // Set the API response data into the stats object
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching the data:', error);
          setLoading(false);
        });
    }
  }, [username]);

  // Get the raw engagement rate from the API response (no need to multiply by 100)
  const engagementValue = stats.engagement_rate ? stats.engagement_rate : 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {/* Centered Card with Influencer Details */}
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6">
        {/* Influencer Profile Info */}
        <img src={profilePicUrl} alt={fullName} className="w-32 h-32 rounded-full mx-auto mb-4" />

        <a href={influencerUrl} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{fullName}</h5>
       
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{stats.biography}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Followers: {formatNumber(followersCount)} | Following: {formatNumber(followsCount)}
        </p>

        <a
          href={influencerUrl}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Visit Profile
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
       
        </a>
      </div>

      {/* Responsive Grid for Other Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Card 2 - Avg Likes */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            {loading ? 'Loading...' : formatNumber(stats.average_likes) || 'N/A'}
          </p>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Avg Likes</h5>
          </a>
        </div>

        {/* Card 3 - Avg Comments */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            {loading ? 'Loading...' : formatNumber(stats.average_comments) || 'N/A'}
          </p>
          <a href="#">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Avg Comments</h5>
          </a>
        </div>

        {/* Card 4 - Avg Views */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            {loading ? 'Loading...' : formatNumber(stats.average_views) || 'N/A'}
          </p>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Avg Views</h5>
          </a>
        </div>

        {/* Card 5 - Number of Posts */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            {loading ? 'Loading...' : formatNumber(stats.posts_count) || 'N/A'}
          </p>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Number of Posts</h5>
          </a>
        </div>
      </div>

      {/* Circular Progress Bar below the cards */}
      <div className="mt-8">
        <div className="w-36 h-36 mx-auto">
        <CircularProgressbar
  value={engagementValue}  // Directly use the raw engagement rate from the API
  text={`${engagementValue.toFixed(2)}`} // Display the raw engagement rate with 2 decimal places
  styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(62, 152, 199, ${engagementValue})`, // Use the raw engagement rate value for color intensity
    textColor: '#f88',
    trailColor: 'green',
    backgroundColor: 'white',
  })}
/>

        </div>
        <p className="text-center mt-2 text-xl font-semibold text-gray-900">Engagement Rate</p>
      </div>

      {/* Latest Posts Section */}
      <p className="text-center mt-2 text-xl font-semibold text-gray-900 mt-6" style={{ marginTop: "10%" }}>Latest Post</p>
    </div>
  );
};

export default BrandInfluencerGetDetail;

