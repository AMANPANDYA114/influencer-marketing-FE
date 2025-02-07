


import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming Navbar is a separate component
import ManagerHeader from './ManagerHeader';

const Notifications = () => {
  const location = useLocation();
  const notifications = location.state || []; // Get notification data from state, fallback to empty array if undefined

  return (
    <div className="flex">
      {/* Sidebar/Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="ml-14 w-screen max-sm:ml-0 h-screen p-5">
        {/* Brand Header */}
        <ManagerHeader  page="Notifications" />

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-black uppercase tracking-wider py-4">
            Check Your Notifications
          </h1>
        </div>

        {/* Notification Cards */}
        <div className="space-y-6">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-lg flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  {/* Optional: Add Profile Image if available */}
                  
                  <span className="font-semibold text-lg">{notification.shopName}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-700">{notification.message}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{`Platform: ${notification.platform}`}</span>
                  <span>{`Budget: ${notification.budget}`}</span>
                </div>
                <div className="flex justify-end">
                 
                </div>
              </div>
            ))
          ) : (
            <p>No notifications available.</p> // Display a message if no notifications are passed
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
