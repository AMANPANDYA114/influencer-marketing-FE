

import React from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import NotificationsIcon from '@mui/icons-material/Notifications'; // Importing Notification Icon
import InfluencerHeader from "./InfluencerHeader";
const MessageBox = () => {
  const users = [
    {
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      message: 'Hello, how are you?',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      message: 'Hi, I hope you are doing well!',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Alex Johnson',
      message: 'Good morning! How’s everything?',
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'Emily Davis',
      message: 'It’s great to see you!',
    }
  ];

  return (
    <div className="flex h-screen">
      

        <Navbar />
 

      {/* Main content area */}
      <div className="ml-0 w-full p-6">
        
        {/* Header */}
        <InfluencerHeader page="Message" />
        {/* Main content area */}
        <div>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-black uppercase tracking-wide py-6">
              Connect with Top Brands and Start Messaging to Build Powerful Partnerships Today!
            </h1>
          </div>

          {/* Message Boxes */}
          <div className="space-y-4">
            {users.map((user, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-3">
                  <img src={user.profileImage} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
                  <span className="font-semibold text-lg">{user.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 flex-1 pr-4">{user.message}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Message</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
