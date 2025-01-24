

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Notifications = () => {
  const location = useLocation();
  const notifications = location.state || []; // Get notification data from state, fallback to empty array if undefined

  return (
    <div style={styles.container}>
      {/* Navbar at the top-left corner */}
      <Navbar />

      {/* Notifications section */}
      <div style={styles.notificationsContainer}>
        <h2 style={{ marginLeft: '70px' }}>Notifications</h2>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} style={styles.notificationItem}>
              <strong>{notification.shopName}</strong>: {notification.message}
              <div>{`Platform: ${notification.platform} | Budget: ${notification.budget}`}</div>
            </div>
          ))
        ) : (
          <p>No notifications available.</p> // Display a message if no notifications are passed
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    paddingTop: '10px',
    paddingLeft: '1px',
  },
  notificationsContainer: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  notificationItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
    marginLeft: '70px', // Added margin-left here
  },
};

export default Notifications;
