


import React from "react";

import Navbar from "./Navbar";

const InfluencerHistory = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        {/* <InfluencerHeader page="History" /> */}
        
        {/* Added section for Monitor Your Campaign Performance */}
        <div className="text-center font-bold text-2xl mt-4">
          Monitor Your Campaign Performance
        </div>
        <div className="text-center text-gray-600 mt-2">
          Track influencer performance in real-time, measure campaign success, and instantly monitor individual influencer results.
        </div>
        <div className="flex justify-center space-x-4 mt-4" style={{ marginBottom: '70px' }}>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Create Plan
          </button>
          <button className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded">
            Watch Demo
          </button>
        </div>
        
        {/* Cards Section */}
        <div className="flex flex-wrap justify-center mt-8">
          {/* Card 1 */}
          <div className="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col items-center text-center">
            <img src="https://app.qoruz.com/b38bd5ef0b0d187ef88c80c61af92017.svg" alt="Card 1" className="w-50 h-100 mx-auto mb-4" />
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Measure Campaign Success</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col items-center text-center">
            <img src="https://app.qoruz.com/86cf8cb4e4b7f6ccae5e9d9d7392bfdd.svg" alt="Card 2" className="w-50 h-100 mx-auto mb-4" />
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Track Link Clicks</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Explore the latest trends shaping influencer marketing in 2023.</p>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm p-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col items-center text-center">
            <img src="https://app.qoruz.com/1074b23a496fb8cc05abfca161f97818.svg" alt="Card 3" className="w-50 h-100 mx-auto mb-4" />
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Top Influencers & Posts</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Learn how to forge successful partnerships with influencers.</p>
          </div>
        </div>

        <img src="https://i.postimg.cc/QNKVMpJk/landing-page.png" alt="Landing Page" className="w-full h-80 object-cover mt-16" />

        {/* Additional Card with Margin Top */}
        <div 
          className="w-11/12 sm:w-9/12 mx-auto p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10" 
          style={{ backgroundColor: '#E6E6FA', marginBottom: '50px' }} // Added margin-bottom here
        >
          <div className="flex flex-col sm:flex-row sm:items-start">
            <div className="flex-grow">
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Need set-up advice, help with onboarding?</h5>
              <p className="mb-5 text-sm text-gray-500 sm:text-base dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 w-1/2"> {/* Set to 50% width */}
              <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 flex items-center w-full">
                <img src="https://app.qoruz.com/9c8c73c495e8e2677e52cd51ab1ee23e.svg" alt="Quick Access Icon" className="w-8 h-8 rounded-full mr-2" />
                <div className="flex flex-col">
                  <h6 className="text-lg font-semibold text-gray-900 dark:text-white">Eswaran Sundareshwaran</h6>
                  <p className="text-sm text-gray-700 dark:text-gray-400">Customer Success Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mt-4">
            {/* Other items can be added here if needed */}
          </div>
        </div>
        {/* Card end */}
      </div>
    </div>
  );
};

export default InfluencerHistory;
