



import React, { useEffect, useState } from "react";
import { toast } from "react-toastify"; // Importing toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Include this for styling
const List = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [influencers, setInfluencers] = useState([]);
  const [selectedInfluencers, setSelectedInfluencers] = useState([]);

  // Fetch Influencers function
  const fetchInfluencers = async () => {
    try {
      const response = await fetch("https://server-side-influencer.vercel.app/influencer/added");
      const data = await response.json();
      setInfluencers(data.influencers);
    } catch (error) {
      console.error("Error fetching influencers:", error);
    }
  };

  // Initial fetch when the component mounts
  useEffect(() => {
    fetchInfluencers();
  }, []);

  // Call API every time the drawer is toggled (opened or closed)
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => {
      const newState = !prev;
      if (newState) {
        // Call the API again when the drawer is opened
        fetchInfluencers();
      }
      return newState;
    });
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleCheckboxChange = (influencerId) => {
    setSelectedInfluencers((prevSelected) => {
      const updatedSelected = prevSelected.includes(influencerId)
        ? prevSelected.filter((id) => id !== influencerId)
        : [...prevSelected, influencerId];
      return updatedSelected;
    });
  };

  // Function to delete influencer
  const handleDeleteInfluencer = async (influencerId) => {
    try {
      const response = await fetch(`https://server-side-influencer-1.onrender.com/influencer/delete/${influencerId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("Influencer deleted successfully!");
        // Refresh the list of influencers after deletion
        fetchInfluencers();
      } else {
        toast.error("Error deleting influencer.");
      }
    } catch (error) {
      toast.error("Error deleting influencer.");
      console.error("Error deleting influencer:", error);
    }
  };

  const safeHashtags = (hashtags) => {
    if (typeof hashtags === 'string') {
      return hashtags
        .split(',')
        .map(tag => `"${tag.trim().replace(/"/g, '""')}"`)
        .join(' ');
    }
    return '';
  };

  const safeEmail = (email) => {
    if (typeof email === 'string') {
      return `"${email.trim().replace(/"/g, '""')}"`;
    }
    return '';
  };

  const safeValue = (value) => {
    if (typeof value === 'string') {
      return `"${value.trim().replace(/"/g, '""')}"`;
    }
    return '';
  };

  const exportToCSV = () => {
    const selectedData = influencers.filter((influencer) =>
      selectedInfluencers.includes(influencer._id)
    );

    const csvContent = [
      [
        'Name',
        'Instagram Profile',
        'Followers',
        'YouTube Link',
        'Subscribers',
        'Category',
        'Contact Number',
        'Location',
        'State',
        'City',
        'Costing Per Segment',
        'Notes',
        'Hashtags',
        'Managed By',
        'Lifestyle',
        'Email',
      ].join(','),
      ...selectedData.map((item) =>
        [
          safeValue(item.name),
          safeValue(item.instagramProfile),
          safeValue(item.followers),
          safeValue(item.youtubeLink),
          safeValue(item.subscribers),
          safeValue(item.category),
          safeValue(item.contactNumber),
          safeValue(item.location),
          safeValue(item.state),
          safeValue(item.city),
          safeValue(item.costingPerSegment),
          safeValue(item.notes),
          safeHashtags(item.hashtags),
          safeValue(item.managedBy),
          safeValue(item.lifestyle),
          safeEmail(item.email),
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'selected_data.csv';
    link.click();
  };

  return (
    <div>
         
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={toggleDrawer}
        >
          Show influencer list
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 z-40 h-screen w-80 p-4 transition-transform transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"} bg-white dark:bg-gray-800`}
        role="dialog"
        aria-labelledby="drawer-right-label"
      >
        {/* <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-black-400"
        >
          Influencer List
        </h5> */}
        <h5
  id="drawer-right-label"
  className="inline-flex items-center mb-4 text-base font-bold text-black text-center"
>
  Influencer List
</h5>

        <button
          type="button"
          onClick={closeDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        {/* Conditionally render message when there are no influencers */}
        {influencers.length === 0 ? (
          <p className="text-center text-gray-500 mb-5">Add influencers in the list</p>
        ) : (
          <div className="mb-4">
            <ul className="text-gray-900 dark:text-gray-400">
              {influencers.map((influencer) => (
                <li
                  key={influencer._id}
                  className="flex items-center justify-between mb-2 cursor-pointer"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedInfluencers.includes(influencer._id)}
                      onChange={() => handleCheckboxChange(influencer._id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="ml-2 text-sm font-medium">{influencer.name}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteInfluencer(influencer._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={exportToCSV}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Export CSV
          </button>
        </div>
   
      </div>
    </div>
  );
};

export default List;

