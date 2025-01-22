

import { AddCircle, Delete, Edit, Instagram, YouTube ,ArrowUpward  } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import List from './List';
import ManagerHeader from './ManagerHeader';
import Navbar from './Navbar';
import { Slider } from '@mui/material'; // Import Slider component from MUI
import CsvUploader from './CsvUploader';
const  ManagerHome= () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchState, setSearchState] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchFollowersRange, setSearchFollowersRange] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [searchCostingRange, setSearchCostingRange] = useState([0, 100000]);
  const navigate = useNavigate();

  // Followers Range options
  const followersRangeOptions = [
    { label: '0 - 1000', min: 0, max: 1000 },
    { label: '1000 - 5000', min: 1000, max: 5000 },
    { label: '5000 - 10000', min: 5000, max: 10000 },
    { label: '10000 - 50000', min: 10000, max: 50000 },
    { label: '50000 - 100000', min: 50000, max: 100000 },
    { label: '100000 - 500000', min: 100000, max: 500000 },
    { label: '500000 - 1000000', min: 500000, max: 1000000 },
    { label: '1000000 - 5000000', min: 1000000, max: 5000000 },
  ];

  // Fetch API data
  const fetchData = async () => {
    try {


      const token = localStorage.getItem("mangertoken");

    if (!token) {
      // If no token found, redirect to login page
      navigate("/ManagerLogin");
      return;
    }
      const response = await fetch('https://server-side-influencer.onrender.com/influencer/allss');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result); // Store the fetched data
      const uniqueCategories = [...new Set(result.map(item => item.category))]; // Extract unique categories
      const uniqueStates = [...new Set(result.map(item => item.state))]; // Extract unique states
      const uniqueCities = [...new Set(result.map(item => item.city))]; // Extract unique cities
      setCategories(uniqueCategories); // Set unique categories
      setStates(uniqueStates); // Set unique states
      setCities(uniqueCities); // Set unique cities
    } catch (err) {
      setError(err.message); // Set error state
    } finally {
      setLoading(false); // Stop loading
    }
  };




  const handleExportCSV = () => {
    const selectedRowsData = selectedRows.map((index) => filteredData[index]);
    exportCSV(selectedRowsData);
  };
  
  const exportCSV = (selectedRowsData) => {
    // All required headers
    const headers = [
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
      'Commercial'
    ];
  
    const csvRows = [];
    
    // Add the header row to the CSV
    csvRows.push(headers.join(','));
    
    // Add rows for selected data
    selectedRowsData.forEach(row => {
      const rowData = [
        row.name,
        row.instagramProfile,
        row.followers,
        row.youtubeLink,
        row.subscribers,
        row.category,
        row.contactNumber,
        row.location,
        row.state || 'No State',
        row.city || 'No City',
        row.costingPerSegment,
        row.notes || 'No Notes',  // If no notes, use 'No Notes'
        row.hashtags || 'No Hashtags',  // If no hashtags, use 'No Hashtags'
        row.managedBy || 'No Manager',  // If no manager, use 'No Manager'
        row.lifestyle || 'No Lifestyle',  // If no lifestyle, use 'No Lifestyle'
        row.email || 'No Email',  // If no email, use 'No Email'
        row.commercial || 'No Commercial',  // Default to 'No Commercial' if empty
      ];
      
      // Push the row data to the CSV
      csvRows.push(rowData.join(','));
    });
  
    // Create a Blob with the CSV data
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  
    // Create a link to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'selected_influencers.csv';  // CSV file name
    link.click();  // Trigger the download
  };
  
  

  const handleResetFilters = () => {
    setSearchName('');
    setSearchCategory('');
    setSearchLocation('');
    setSearchState('');
    setSearchCity('');
    setSearchFollowersRange('');
    setSearchCostingRange([0, 100000]);
  };


  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(searchName.toLowerCase()) &&
      row.category.toLowerCase().includes(searchCategory.toLowerCase()) &&
      row.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      row.state.toLowerCase().includes(searchState.toLowerCase()) &&
      row.city.toLowerCase().includes(searchCity.toLowerCase()) &&
      (searchFollowersRange
        ? row.followers >= followersRangeOptions[searchFollowersRange].min &&
          row.followers <= followersRangeOptions[searchFollowersRange].max
        : true) &&
      (row.costingPerSegment >= searchCostingRange[0] && row.costingPerSegment <= searchCostingRange[1]) // Filter based on costing range
  );

  // Handler for costing range change
  const handleCostingRangeChange = (event, newValue) => {
    setSearchCostingRange(newValue);
  };
  

  const handleDelete = async (_id) => {
    console.log("Item ID to delete:", _id);

    try {
      const response = await fetch(`https://server-side-influencer.onrender.com/influencers/delete/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Deleted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        fetchData(); // After successful deletion, fetch the updated data
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error",
          text: `Failed to delete item: ${errorData.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the item.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleRowSelect = (index) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((id) => id !== index)
        : [...prevSelected, index]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, index) => index)); // Select all rows
    }
  };

 

  const handleUpArrow = (row) => {
    // Log the entire row data (or use it as needed)
    console.log("Up arrow clicked for row:", row);
    console.log("Name:", row.name);
    console.log("Location:", row.location);
    console.log("Followers:", row.followers);
    // Add more logs or logic as necessary for the other fields
  };
  
  
  const handleLinkClick = (link) => {
    window.open(link, '_blank');
  };

  const handleEdit = (item) => {
    navigate('/edit', { state: { item } });
  };

  const handleAddItem = async (_id) => {
    try {
      const managerId = localStorage.getItem('managerID');
      if (!managerId) {
        Swal.fire({
          title: "Error",
          text: 'Manager ID not found in localStorage',
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      const response = await fetch(`https://server-side-influencer.onrender.com/manager/influencer/add/${managerId}/${_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: 'Added successfully!',
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: "Error",
          text: `${errorData.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex h-screen mb-0">
      <div className="w-[1%] bg-gray-800 text-white fixed top-0 left-0 bottom-0 z-10">
        <Navbar />
      </div>

      <div className="ml-[5%] flex-1 overflow-y-auto p-4 mb-0">
        <ManagerHeader page="Manager Home" />

        <h1 className="text-4xl font-extrabold text-center text-black mt-0 mb-0 cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105">
          Start Searching Influencers from a Large Database
          <span className="block text-xl font-normal text-gray-600 mt-0">
            Discover top influencers to elevate your brand's reach and impact.
          </span>
        </h1>

        <div className="relative mt-[-10%] mb-0">
          <div className="absolute top-0 right-0 mt-[10%]">
            <List />
          </div>
        </div>

        <div className="flex justify-center mt-[-5%] mb-0">
          <div className="text-center mt-[10%] ml-[60%] mb-5">
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
            >
              Show Search Filters
            </button>
          </div>

          {/* Drawer component */}
          {drawerOpen && (
            <div className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800">
              <h5 className="text-gray-500 dark:text-gray-400 text-lg font-semibold mb-6">Search Filters</h5>


              <button
  onClick={handleResetFilters}
  className="ml-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none py-1 px-3 rounded text-sm w-full text-center"
>
  Reset filters
</button>

              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="absolute top-2.5 right-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>

             
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="block w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg"
                  placeholder="Search by name"
                />
              </div>


              <div className="mb-4">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="block w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg"
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="block w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg"
                  placeholder="Search by location"
                />
              </div>

              {/* New State Dropdown */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-900 dark:text-white">State</label>
                <select
                  value={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                  className="block w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg"
                >
                  <option value="">Select State</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* New City Dropdown */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-900 dark:text-white">City</label>
                <select
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="block w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg"
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>




              <div className="mb-4">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Costing Per Segment</label>
                <Slider
                  value={searchCostingRange}
                  onChange={handleCostingRangeChange}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `₹${value}`}
                  min={0}
                  max={100000}
                  step={1000}
                  className="mt-2"
                />
              </div>
              {/* Followers Range Dropdown */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Followers Range</label>
                <select
                  value={searchFollowersRange}
                  onChange={(e) => setSearchFollowersRange(e.target.value)}
                  className="block w-full mt-2 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg"
                >
                  <option value="">Select Followers Range</option>
                  {followersRangeOptions.map((option, index) => (
                    <option key={index} value={index}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Table for displaying filtered influencer data */}


        <div className="mt-[-16%]">
        <CsvUploader  fetchData={fetchData}  /> 
</div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[calc(100vh-250px)] mt-[-20%] mb-0">


          
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === filteredData.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Name</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Instagram Profile</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Followers</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">YouTube Link</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Subscribers</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Category</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Contact Number</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Location</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">State</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">City</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Costing Per Segment</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Notes</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Hashtags</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Managed By</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Lifestyle</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Email</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">commercial</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">Actions</th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">More</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="17" className="text-center py-4 text-gray-500">
                    No data found
                  </td>
                </tr>
              ) : (
                filteredData.map((row, index) => (
                  <tr
                    key={index}
                    className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 ${selectedRows.includes(index) ? 'bg-blue-100 dark:bg-blue-600' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(index)}
                        onChange={() => handleRowSelect(index)}
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.name}</td>
                    <td className="px-6 py-4">
                      <Instagram
                        onClick={() => handleLinkClick(row.instagramProfile)}
                        className="cursor-pointer text-blue-600 hover:text-blue-800"
                      />
                    </td>
                    <td className="px-6 py-4">{row.followers}</td>
                    <td className="px-6 py-4">
                      <YouTube
                        onClick={() => handleLinkClick(row.youtubeLink)}
                        className="cursor-pointer text-red-600 hover:text-red-800"
                      />
                    </td>
                    <td className="px-6 py-4">{row.subscribers}</td>
                    <td className="px-6 py-4">{row.category}</td>
                    <td className="px-6 py-4">{row.contactNumber}</td>
                    <td className="px-6 py-4">{row.location}</td>
                    <td className="px-6 py-4">{row.state || 'No State'}</td>
                    <td className="px-6 py-4">{row.city || 'No City'}</td>
                    <td className="px-6 py-4">₹{row.costingPerSegment}</td>
                    <td className="px-6 py-4">{row.notes}</td>
                    <td className="px-6 py-4">{row.hashtags}</td>
                    <td className="px-6 py-4">{row.managedBy}</td>
                    <td className="px-6 py-4">{row.lifestyle}</td>
                    <td className="px-6 py-4">{row.email}</td>
                    <td className="px-6 py-4">{row.commercial}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Edit
                          onClick={() => handleEdit(row)}
                          className="cursor-pointer text-blue-600 hover:text-blue-800"
                        />
                        <Delete
                          onClick={() => handleDelete(row._id)}
                          className="cursor-pointer text-red-600 hover:text-red-800"
                        />
                        <AddCircle
                          onClick={() => handleAddItem(row._id)}
                          className="cursor-pointer text-green-600 hover:text-green-800"
                        />

                      </div>
                    </td>

                    {/* <td>
  <ArrowUpward
    onClick={() => handleUpArrow(row._id)}  // Add the appropriate function for up arrow click
    className="cursor-pointer text-gray-600 hover:text-gray-800"
    style={{ marginLeft: '30px' }}  // Apply 10px left margin using inline styles
  />
</td> */}


<td>
            <ArrowUpward
              onClick={() => handleUpArrow(row)}  // Pass the entire row to the function
              className="cursor-pointer text-gray-600 hover:text-gray-800"
              style={{ marginLeft: '30px' }}  // Apply left margin of 30px
            />
          </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>


        <div className="mt-4 text-right">
          <button
            onClick={handleExportCSV}
            className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Export Selected Rows as CSV
          </button>
        </div>


      </div>
    </div>
  );
};

export default  ManagerHome;











