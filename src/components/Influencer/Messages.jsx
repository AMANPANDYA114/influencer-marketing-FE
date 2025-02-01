



import React from 'react';
import Navbar from "./Navbar";

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
    },
    {
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      name: 'Michael Brown',
      message: 'What’s up? Long time no see!',
    },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '' }}>
      
      {/* Sidebar (Navbar) */}
      <div style={{
        width: '20px', // Fixed width for the sidebar
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white background
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'fixed', // Keeps it fixed on the left
        top: '0',
        left: '0',
        height: '100vh', // Full height
        backdropFilter: 'blur(5px)', // Optional: adds blur effect behind the navbar
      }}>
        <Navbar />
      </div>

      {/* Main content area */}
      <div style={{
        flex: 1,
        padding: '20px',
        marginLeft: '40px', // Ensures the content doesn't overlap with the navbar
      }}>
        {/* Heading for Influencers to Connect with Brands */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px', // Space between heading and message boxes
        }}>
          <h1 style={{
  fontSize: '17px', // Large font size
  fontWeight: '700', // Bold text
  color: '#000', // Black text color
  textTransform: 'uppercase', // Uppercase letters for emphasis
  letterSpacing: '2px', // Slight letter spacing for readability
  padding: '20px 0', // Padding to give space above and below the text
}}>
           Connect with Top Brands and Start Messaging to Build Powerful Partnerships Today!
          </h1>
        </div>

        {/* Message Boxes */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {users.map((user, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}>
                <img src={user.profileImage} alt={user.name} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }} />
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                }}>{user.name}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#333',
                  flex: 1,
                  paddingRight: '10px',
                }}>{user.message}</span>
                <button style={{
                  padding: '6px 12px',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}>Message</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;

