



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';
// //import { Diversity1Sharp, Download, Instagram, YouTube } from '@mui/icons-material';
// import { Download, Instagram, YouTube } from '@mui/icons-material';
// import { Slider } from '@mui/material';
// import { toast } from 'react-toastify';
// import CsvUploader from './CsvUploader';
// import Swal from 'sweetalert2';
// import List from './List';
// const ManagerHome=() => {

//   const [cities, setCities] = useState([]);
 
//     const [apiData, setApiData] = useState([]); // Store API data separately
//     const [csvData, setCsvData] = useState([]); // Store uploaded CSV data separately
//     const [data, setData] = useState([]); // Initialize state for fetched data
//     const [states, setStates] = useState([]);
//     //const [data, setData] = useState(dummyData); // Initialize state with dummy data
//     const [searchQuery, setSearchQuery] = useState({
//       name: '',
//       category: '',
//       subCategory: '',
//       location: '',
//       stateCity: '',
//       state: '', // Added state
//       city: '' ,// Added city
//       followersRange: '', // New property for followers range
//       priceRange: [0, 5000000], // Default price range [0, 50 lakh]
//   });


//     const [loading, setLoading] = useState(true); // Track loading state
//     const [error, setError] = useState(null); // Track error state


//     const navigate = useNavigate();


//     useEffect(() => {
//       const token = localStorage.getItem('mangertoken');
//       if (!token) {
//         navigate('/ManagerLogin'); // Redirect to login if no token is found
//       }
//     }, [navigate]);
  
//     // Fetch data from backend API
//     const fetchData = async () => {
//         try {
//           // http://localhost:8000
//             setLoading(true);
//             const response = await fetch('https://server-side-influencer-1.onrender.com/influencer/all'); // Replace with your API endpoint
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const result = await response.json();
//             console.log('API Data:', result); // Debugging line
//             setApiData(result); // Only store API data here
//             setLoading(false);
//         } catch (err) {
//             console.error('Fetch error:', err.message); // Debugging line
//             setError(err.message);
//             setLoading(false);
//         }
//     };


//     // Load data on component mount
//     useEffect(() => {
//         fetchData();
//     }, []);


//     const handlePriceChange = (event, newValue) => {
//       setSearchQuery({
//           ...searchQuery,
//           priceRange: newValue,
//       });
//   };
//     // subcatorygries 

//     const categoryOptions = {
//         Fashion: ['Clothing', 'Accessories', 'Footwear'],
//         Beauty: ['Skincare', 'Makeup', 'Haircare'],
//         HealthFitness: ['Gym', 'Yoga', 'Nutrition'],
//         Sports: ['Cricket', 'Football', 'Basketball'],
//         HomeDecor: ['Furniture', 'Wall Art', 'Lighting'],
//     };


  

//   useEffect(() => {
//     if (apiData.length > 0) {
//       // Normalize state names to handle any case variations, ensuring it's a string
//       const uniqueStates = [
//         ...new Set(apiData.map(item => (typeof item.state === 'string' ? item.state.toLowerCase() : item.state)))
//       ]; 
  
//       // Update states with unique states (case-insensitive)
//       setStates(uniqueStates);
//     }
//   }, [apiData]); // Re-run whenever apiData changes
  


//   useEffect(() => {
//     if (searchQuery.stateCity) {
//       // Log the original data before filtering
//       console.log('API Data before filtering:', apiData);
  
//       // Filter the cities based on the selected state (searchQuery.stateCity)
//       const filteredCities = [
//         ...new Set(
//           apiData
//             .filter(item => 
//               item.state && 
//               item.state.toLowerCase() === searchQuery.stateCity.toLowerCase()
//             ) // Check case insensitivity for state
//             .map(item => item.city.toLowerCase()) // Convert city to lowercase for case-insensitivity
//         )
//       ];
      
//       // Log the filtered cities array
//       console.log('Filtered cities:', filteredCities);
  
//       // Set the filtered cities in the state
//       setCities(filteredCities);
//     }
//   }, [searchQuery.stateCity, apiData]); // Re-run whenever searchQuery.stateCity or apiData changes
  
  

  
  
  

//   const handleEdit = (item, fetchData) => {
//     console.log("items in mnager homne ",item)
//     // Log the specific details of the row
 
  
//     // Navigate to the edit page and pass the item data and fetchData function
//     navigate('/edit', { state: { item, fetchData } });
//   };
  
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setSearchQuery({
//             ...searchQuery,
//             [name]: value,
//             ...(name === 'category' && { subCategory: '' }), // Reset subCategory if category changes
//         });
//     };


//     // Combine API data and CSV data for display
//     const combinedData = [...apiData, ...csvData];




//     const followersRangeOptions = [
//       { label: '0 - 1000', min: 0, max: 1000 },
//       { label: '1000 - 5000', min: 1000, max: 5000 },
//       { label: '5000 - 10000', min: 5000, max: 10000 },
//       { label: '10000 - 50000', min: 10000, max: 50000 },
//       { label: '50000 - 100000', min: 50000, max: 100000 },
//       { label: '100000 - 500000', min: 100000, max: 500000 },
//       { label: '500000 - 1000000', min: 500000, max: 1000000 },
//       { label: '1000000 - 5000000', min: 1000000, max: 5000000 },
//   ];


// const filteredData = apiData.filter((item) => {
//   const followersRange = searchQuery.followersRange
//   ? followersRangeOptions.find((r) => r.label === searchQuery.followersRange)
//   : null; // Ensure followersRange is defined or null if not selected
// const followers = parseInt(item.followers || 0, 10);
// const price = parseFloat(item.costingPerSegment || 0);

//   return (
//     // Ensure item.name exists and is a string before calling toLowerCase()
//     (searchQuery.name === '' || (item.name && item.name.toLowerCase().includes(searchQuery.name.toLowerCase()))) &&

//     // Ensure item.category exists and is a string before calling toLowerCase()
//     (searchQuery.category === '' || (item.category && item.category.toLowerCase() === searchQuery.category.toLowerCase())) &&

//     // Ensure item.subCategory exists and is a string before calling toLowerCase()
//     (searchQuery.subCategory === '' || (item.subCategory && item.subCategory.toLowerCase() === searchQuery.subCategory.toLowerCase())) &&

//     // Ensure item.location exists and is a string before calling toLowerCase()
//     (searchQuery.location === '' || (item.location && item.location.toLowerCase().includes(searchQuery.location.toLowerCase()))) &&

//     // Ensure item.state exists and is a string before calling toLowerCase()
//     (searchQuery.stateCity === '' || (item.state && item.state.toLowerCase().includes(searchQuery.stateCity.toLowerCase()))) &&

//     // Ensure item.city exists and is a string before calling toLowerCase()
//     (searchQuery.city === '' || (item.city && item.city.toLowerCase().includes(searchQuery.city.toLowerCase())) ) &&
    
//     (!followersRange || (followers >= followersRange.min && followers <= followersRange.max))  &&
//     (price >= searchQuery.priceRange[0] && price <= searchQuery.priceRange[1])
//   );
// });


//     console.log(filteredData); // Debug to verify data is being filtered correctly


//     //const [data] = useState(dummyData);
//     const [selectedRows, setSelectedRows] = useState([]);

//     // Toggle checkbox selection
//     const toggleRowSelection = (index) => {
//         if (selectedRows.includes(index)) {
//             setSelectedRows(selectedRows.filter((i) => i !== index));
//         } else {
//             setSelectedRows([...selectedRows, index]);
//         }
//     };

  

//     // Utility function to handle null, undefined, and non-array values
// const safeValue = (value) => {
//   return value == null ? '' : value; // Returns empty string if value is null or undefined
// };


// const handleAdd = async (id) => {
//   try {
//     const managerId = localStorage.getItem('managerID');
    
//     // Check if managerId exists in localStorage
//     if (!managerId) {
//       toast.error('Manager ID not found in localStorage');
//       return;
//     }
//     const response = await fetch(`https://server-side-influencer-1.onrender.com/manager/influencer/add/${managerId}/${id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       toast.success(`Added successfully!`);
//     } else {
//       const errorData = await response.json();
//       console.error('Error:', errorData.message);
      
//       // Show error toast once, as expected
//       toast.error(` ${errorData.message}`);
//     }
//   } catch (error) {
//     console.error('Error occurred:', error);
//   }
// };

// const handleDelete = async (id) => {
//   console.log("Item ID to delete:", id);

//   try {
//     const response = await fetch(`https://server-side-influencer-1.onrender.com/influencers/delete/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       console.log(`Item with ID ${id} deleted successfully.`);
      
//       // Show success toast once, as expected
//       toast.success(`deleted successfully!`);
//       fetchData();
//       // Remove the deleted item from the client-side (UI)
//       setApiData(prevData => prevData.filter(item => item.id !== id));

//       // Re-fetch data after successful delete (optional)
//       try {
//         setLoading(true); // Set loading state to true before fetching new data
//         const fetchResponse = await fetch('/influencer/all'); // Replace with your actual API endpoint for fetching the updated list

//         if (!fetchResponse.ok) {
//           throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
//         }

//         const result = await fetchResponse.json();
//         console.log('API Data:', result); // Debugging line
//         setApiData(result); // Store the updated API data
//         setLoading(false); // Set loading state to false after data is fetched
//       } catch (err) {
//         console.error('Fetch error:', err.message); // Debugging line
//         setError(err.message); // Capture and display error if fetching fails
//         setLoading(false); // Set loading state to false in case of error
//       }
//     } else {
//       // This handles the case when deletion fails
//       console.error(`Failed to delete item with ID ${id}.`);
//       const errorData = await response.json();
//       console.error('Error:', errorData.message);
      
//       // Show error toast once, as expected
//       toast.error(`Failed to delete item: ${errorData.message}`);
//     }
//   } catch (error) {
//     console.error("Error deleting item:", error);
    
//     // Show error toast for unexpected errors
//     toast.error("An error occurred while deleting the item.");
//   }
// };



//     // Followers range options
  



// const safeHashtags = (hashtags) => {
//   if (typeof hashtags === 'string') {
//     // Split hashtags by commas and wrap each with quotes (escape quotes inside the string if needed)
//     return hashtags
//       .split(',')
//       .map(tag => `"${tag.trim().replace(/"/g, '""')}"`) // Escape quotes inside hashtags
//       .join(' '); // Join hashtags with a space
//   }
//   return '';
// };

// const safeEmail = (email) => {
//   if (typeof email === 'string') {
//     // Ensure the email is wrapped in quotes and escape any internal quotes
//     return `"${email.trim().replace(/"/g, '""')}"`; // Escape quotes inside email
//   }
//   return '';
// };

// // Export selected rows to CSV
// const exportToCSV = () => {
//   if (!selectedRows || selectedRows.length === 0) {
//     // Show a toast error if no rows are selected
//     // toast.error("Please select at least one row to export Csv file.");
//     Swal.fire({
//       title: "Error",
//       text: "Please select at least one row to export the CSV file.",
//       icon: "error",
//       confirmButtonText: "OK",
//     });
//     return;
//   }
//   const selectedData = selectedRows.map((index) => filteredData[index]);

//   // Prepare CSV content
//   const csvContent = [
//       // CSV Header
//       [
//           'Name',
//           'Instagram Profile',
//           'Followers',
//           'YouTube Link',
//           'Subscribers',
//           'Category',
//           'Contact Number',
//           'Location',
//           'State',
//           'City',
//           'Costing Per Segment',
//           'Notes',
//           'Hashtags',
//           'Managed By',
//           'Lifestyle',
//           'Email',
//       ].join(','), // Join headers with commas
//       ...selectedData.map((item) =>
//           [
//               safeValue(item.name),
//               safeValue(item.instagramProfile),
//               safeValue(item.followers),
//               safeValue(item.youtubeLink),
//               safeValue(item.subscribers),
//               safeValue(item.category),
//               safeValue(item.contactNumber),
//               safeValue(item.location),
//               safeValue(item.state),
//               safeValue(item.city),
//               safeValue(item.costingPerSegment),
//               safeValue(item.notes),
//               safeHashtags(item.hashtags), // Hashtags
//               safeValue(item.managedBy),
//               safeValue(item.lifestyle),
//               safeEmail(item.email), // Ensure emails are properly formatted
//           ].join(',') // Join each row with commas
//       ),
//   ].join('\n'); // Join the header and data with a new line

//   // Create a Blob and trigger the download
//   const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//   const link = document.createElement('a');
//   link.href = URL.createObjectURL(blob);
//   link.download = 'selected_data.csv';
//   link.click();
// };

//     return (
//         <div className="h-screen flex">
//             <Navbar />
//             <div className="h-screen ml-14 max-sm:ml-0  w-full flex flex-col">
//                 <div className="text-center font-bold text-2xl mt-4 ml-6">
//                     Influencer Searching...
//                 </div>

//                 {/* <CsvUploader />

// <List/>  */}



// <div className="flex justify-between items-start mb-[-250px]">
//   <div className="flex-1">
//     <CsvUploader  fetchData={fetchData}  /> {/* This will be on the left */}
//   </div>
//   <div>
//     <List /> {/* This will be on the right as a drawer */}
//   </div>
// </div>




//                 <div className="flex flex-col gap-6 p-1">
//                     {/* Action Buttons */}
//                     <div className="flex justify-end gap-2">



//                         <button
//                             className="bg-orange-500 text-white px-1 py-2 rounded shadow hover:bg-orange-600 transition"
//                             onClick={exportToCSV}
//                         >
//                             <Download className="mr-2" />
//                             Export Selected to CSV
//                         </button>
//                     </div>








//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-5">
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Search by Name"
//                             className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={searchQuery.name}
//                             onChange={handleInputChange}
//                         />

//                         {/* Category Dropdown */}
//                         <select
//                             name="category"
//                             className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={searchQuery.category}
//                             onChange={handleInputChange}
//                         >
//                             <option value="">Select Category</option>
//                             {Object.keys(categoryOptions).map((category) => (
//                                 <option key={category} value={category}>
//                                     {category}
//                                 </option>
//                             ))}
//                         </select>

//                         {/* Subcategory Dropdown */}
//                         {searchQuery.category && (
//                             <select
//                                 name="subCategory"
//                                 className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={searchQuery.subCategory}
//                                 onChange={handleInputChange}
//                             >
//                                 <option value="">Select Subcategory</option>
//                                 {categoryOptions[searchQuery.category].map((subCategory) => (
//                                     <option key={subCategory} value={subCategory}>
//                                         {subCategory}
//                                     </option>
//                                 ))}
//                             </select>
//                         )}

//                         <input
//                             type="text"
//                             name="location"
//                             placeholder="Search by Location"
//                             className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={searchQuery.location}
//                             onChange={handleInputChange}
//                         />


                       



// <select
//                             name="stateCity"
//                             className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             value={searchQuery.stateCity}
//                             onChange={handleInputChange}
//                         >
//                             <option value="">Select State</option>
//                             {states.map((state) => (
//                                 <option key={state} value={state}>
//                                     {state}
//                                 </option>
//                             ))}
//                         </select>



               
//               <select
//                 name="city"
//                 className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={searchQuery.city}
//                 onChange={handleInputChange}
//               >
//                 <option value="">Select City</option>
//                 {cities.map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>

//               <select
//                         name="followersRange"
//                         className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 followerRange"
//                         value={searchQuery.followersRange}
//                         onChange={handleInputChange}
//                     >
//                         <option value="">Select Followers Range</option>
//                         {followersRangeOptions.map((range, index) => (
//                             <option key={index} value={range.label}>
//                                 {range.label}
//                             </option>
//                         ))}
//                     </select>
        



        
//                      {/* Price Range Slider */}
//                      <div className="w-full flex flex-col">
//                             <label className="text-sm font-medium slidercostfilter">Price Range (₹):</label>
//                             <Slider
//                                 value={searchQuery.priceRange}
//                                 onChange={handlePriceChange}
//                                 valueLabelDisplay="auto"
//                                 min={0}
//                                 max={5000000} // 50 lakh
//                                 step={50000} // Step of 50k
//                             />
//                         </div>


                        
// </div>





//                     {/* Scrollable Table */}
//                     <div className="layout">

//                         <div className="content ">
//                             {/* Table container */}
//                             <div className="table-container flex-1 overflow-auto border shadow rounded-lg bg-white">
//                                 <div className="overflow-auto" style={{ maxHeight: '440px', maxWidth: '1030px' }}>
//                                     <table className="table-auto w-full border-collapse border border-gray-300">
//                                         <thead className="sticky top-0 bg-gray-200">
//                                             <tr className="bg-gray-100">
//                                                 <th className="border px-4 py-2">Select</th>
//                                                 <th className="border px-4 py-2">Name</th>
//                                                 <th className="border px-4 py-2">Instagram Profile</th>
//                                                 <th className="border px-4 py-2">Followers</th>
//                                                 <th className="border px-4 py-2">YouTube Link</th>
//                                                 <th className="border px-4 py-2">Subscribers</th>
//                                                 <th className="border px-4 py-2">Category</th>
//                                                 <th className="border px-4 py-2">Contact Number</th>
//                                                 <th className="border px-4 py-2">Location</th>
//                                                 <th className="border px-4 py-2">state</th>
//                                                 <th className="border px-4 py-2">city</th>
//                                                 <th className="border px-4 py-2">Commercial</th>
//                                                 <th className="border px-4 py-2">Email</th>
//                                                 <th className="border px-4 py-2">Cost</th>
//                                                 <th className="border px-4 py-2">Notes</th>
//                                                 <th className="border px-4 py-2">Hashtags</th>
//                                                 <th className="border px-4 py-2">Managed By</th>
//                                                 <th className="border px-4 py-2">Lifestyle</th>
//                                                 <th className="border px-4 py-2">Action</th>
//                                                 <th className="border px-4 py-2">edit</th>
//                                                 <th className="border px-4 py-2">Add</th>
//                                             </tr>
//                                         </thead>


//                                         <tbody>
//                                             {filteredData.length > 0 ? (
//                                                 filteredData.map((item, index) => (
//                                                     <tr key={index}>
//                                                         <td className="border px-4 py-2 text-center">
//                                                             <input
//                                                                 type="checkbox"
//                                                                 checked={selectedRows.includes(index)}
//                                                                 onChange={() => toggleRowSelection(index)}
//                                                             />
//                                                         </td>
//                                                         <td className="border px-4 py-2">{item.name || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">
//                                                             <a
//                                                                 href={item.instagramProfile || '#'}
//                                                                 target="_blank"
//                                                                 rel="noopener noreferrer"
//                                                                 className="text-blue-500"
//                                                             >
//                                                                 <Instagram />
//                                                             </a>
//                                                         </td>
//                                                         <td className="border px-4 py-2">{item.followers || 0}</td>
//                                                         <td className="border px-4 py-2">
//                                                             {/* <a
//                                                                 href={item.youtubeLink || '#'}
//                                                                 target="_blank"
//                                                                 rel="noopener noreferrer"
//                                                                 className="text-blue-500"
//                                                             >
//                                                                 <YouTube />
//                                                             </a> */}
//                                                             <a
//   href={item.youtubeLink && !item.youtubeLink.startsWith('http') ? `https://${item.youtubeLink}` : item.youtubeLink || '#'}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-blue-500"
// >
//   <YouTube />
// </a>

//                                                         </td>
//                                                         <td className="border px-4 py-2">{item.subscribers || 'No'}</td>
//                                                         <td className="border px-4 py-2">{item.category || 'Unknown'}</td>
//                                                         <td className="border px-4 py-2">{item.contactNumber || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">{item.location || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">{item.state || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">{item.city || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">{item.commercial || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">{item.email || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">₹{item.costingPerSegment || 0}</td>
//                                                         <td className="border px-4 py-2">{item.notes || 'NO'}</td>
                                                      
//                                                         <td className="border px-4 py-2">
//   {Array.isArray(item.hashtags) 
//     ? item.hashtags.length > 0 
//       ? item.hashtags.join(', ') 
//       : 'N/A'
//     : (typeof item.hashtags === 'string' && item.hashtags.length > 0) 
//       ? item.hashtags 
//       : 'N/A'
//   }
// </td>


//                                                         <td className="border px-4 py-2">{item.managedBy || 'N/A'}</td>
//                                                         <td className="border px-4 py-2">{item.lifestyle || 'N/A'}</td>
//                                                         {/* <td className="border px-4 py-2">{item.id || 'N/A'}</td> */}
//                                                         <td className="border px-4 py-2">
//   <button
//     onClick={() => handleDelete(item.id)} // Call the function with the ID
//     className="text-red-500 hover:text-red-700 focus:outline-none"
//   >
//    delete
//   </button>
// </td>

// <td className="border px-4 py-2">
//   <button
//     onClick={() => handleEdit(item)} // Pass the entire item to the function
//     className="text-green-500 hover:text-green-700 focus:outline-none"
//   >
//     edit
//   </button>
// </td>

// <td className="border px-4 py-2">
//   <button
//     onClick={() => handleAdd(item.id)} // Call the function with the ID
//     className="text-green-500 hover:text-red-700 focus:outline-none"
//   >
//    Add
//   </button>
// </td>


//                                                     </tr>
//                                                 ))
//                                             ) : (
//                                                 <tr>
//                                                     <td className="border px-4 py-2 text-center" colSpan="16">
//                                                         No data found
//                                                     </td>
//                                                 </tr>
//                                             )}
//                                         </tbody>




//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>




//                 </div>
            
//             </div>
          
//         </div>
     
//     );
// };

// export default ManagerHome;












import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
//import { Diversity1Sharp, Download, Instagram, YouTube } from '@mui/icons-material';
import { Download, Instagram, YouTube } from '@mui/icons-material';
import { Slider } from '@mui/material';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import CsvUploader from './CsvUploader';
import List from './List';
const ManagerHome=() => {

  const [cities, setCities] = useState([]);
 
    const [apiData, setApiData] = useState([]); // Store API data separately
    const [csvData, setCsvData] = useState([]); // Store uploaded CSV data separately
    const [data, setData] = useState([]); // Initialize state for fetched data
    const [states, setStates] = useState([]);
    //const [data, setData] = useState(dummyData); // Initialize state with dummy data
    const [searchQuery, setSearchQuery] = useState({
      name: '',
      category: '',
      subCategory: '',
      location: '',
      stateCity: '',
      state: '', // Added state
      city: '' ,// Added city
      followersRange: '', // New property for followers range
      priceRange: [0, 5000000], // Default price range [0, 50 lakh]
  });


    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track error state


    const navigate = useNavigate();


    useEffect(() => {
      const token = localStorage.getItem('mangertoken');
      if (!token) {
        navigate('/ManagerLogin'); // Redirect to login if no token is found
      }
    }, [navigate]);
  
    // Fetch data from backend API
    const fetchData = async () => {
        try {
          // http://localhost:8000
            setLoading(true);
            const response = await fetch('https://server-side-influencer.onrender.com/influencer/allss'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log('API Data:', result); // Debugging line
            setApiData(result); // Only store API data here
            setLoading(false);
        } catch (err) {
            console.error('Fetch error:', err.message); // Debugging line
            setError(err.message);
            setLoading(false);
        }
    };


    // Load data on component mount
    useEffect(() => {
        fetchData();
    }, []);


    const handlePriceChange = (event, newValue) => {
      setSearchQuery({
          ...searchQuery,
          priceRange: newValue,
      });
  };
    // subcatorygries 

    const categoryOptions = {
        Fashion: ['Clothing', 'Accessories', 'Footwear'],
        Beauty: ['Skincare', 'Makeup', 'Haircare'],
        HealthFitness: ['Gym', 'Yoga', 'Nutrition'],
        Sports: ['Cricket', 'Football', 'Basketball'],
        HomeDecor: ['Furniture', 'Wall Art', 'Lighting'],
    };


  

  useEffect(() => {
    if (apiData.length > 0) {
      // Normalize state names to handle any case variations, ensuring it's a string
      const uniqueStates = [
        ...new Set(apiData.map(item => (typeof item.state === 'string' ? item.state.toLowerCase() : item.state)))
      ]; 
  
      // Update states with unique states (case-insensitive)
      setStates(uniqueStates);
    }
  }, [apiData]); // Re-run whenever apiData changes
  


  useEffect(() => {
    if (searchQuery.stateCity) {
      // Log the original data before filtering
      console.log('API Data before filtering:', apiData);
  
      // Filter the cities based on the selected state (searchQuery.stateCity)
      const filteredCities = [
        ...new Set(
          apiData
            .filter(item => 
              item.state && 
              item.state.toLowerCase() === searchQuery.stateCity.toLowerCase()
            ) // Check case insensitivity for state
            .map(item => item.city.toLowerCase()) // Convert city to lowercase for case-insensitivity
        )
      ];
      
      // Log the filtered cities array
      console.log('Filtered cities:', filteredCities);
  
      // Set the filtered cities in the state
      setCities(filteredCities);
    }
  }, [searchQuery.stateCity, apiData]); // Re-run whenever searchQuery.stateCity or apiData changes
  
  

  
  
  

  const handleEdit = (item, fetchData) => {
    console.log("items in mnager homne ",item)
    // Log the specific details of the row
 
  
    // Navigate to the edit page and pass the item data and fetchData function
    navigate('/edit', { state: { item, fetchData } });
  };
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchQuery({
            ...searchQuery,
            [name]: value,
            ...(name === 'category' && { subCategory: '' }), // Reset subCategory if category changes
        });
    };


    // Combine API data and CSV data for display
    const combinedData = [...apiData, ...csvData];




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


const filteredData = apiData.filter((item) => {
  const followersRange = searchQuery.followersRange
  ? followersRangeOptions.find((r) => r.label === searchQuery.followersRange)
  : null; // Ensure followersRange is defined or null if not selected
const followers = parseInt(item.followers || 0, 10);
const price = parseFloat(item.costingPerSegment || 0);

  return (
    // Ensure item.name exists and is a string before calling toLowerCase()
    (searchQuery.name === '' || (item.name && item.name.toLowerCase().includes(searchQuery.name.toLowerCase()))) &&

    // Ensure item.category exists and is a string before calling toLowerCase()
    (searchQuery.category === '' || (item.category && item.category.toLowerCase() === searchQuery.category.toLowerCase())) &&

    // Ensure item.subCategory exists and is a string before calling toLowerCase()
    (searchQuery.subCategory === '' || (item.subCategory && item.subCategory.toLowerCase() === searchQuery.subCategory.toLowerCase())) &&

    // Ensure item.location exists and is a string before calling toLowerCase()
    (searchQuery.location === '' || (item.location && item.location.toLowerCase().includes(searchQuery.location.toLowerCase()))) &&

    // Ensure item.state exists and is a string before calling toLowerCase()
    (searchQuery.stateCity === '' || (item.state && item.state.toLowerCase().includes(searchQuery.stateCity.toLowerCase()))) &&

    // Ensure item.city exists and is a string before calling toLowerCase()
    (searchQuery.city === '' || (item.city && item.city.toLowerCase().includes(searchQuery.city.toLowerCase())) ) &&
    
    (!followersRange || (followers >= followersRange.min && followers <= followersRange.max))  &&
    (price >= searchQuery.priceRange[0] && price <= searchQuery.priceRange[1])
  );
});


    console.log(filteredData); // Debug to verify data is being filtered correctly


    //const [data] = useState(dummyData);
    const [selectedRows, setSelectedRows] = useState([]);

    // Toggle checkbox selection
    const toggleRowSelection = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

  

    // Utility function to handle null, undefined, and non-array values
const safeValue = (value) => {
  return value == null ? '' : value; // Returns empty string if value is null or undefined
};


const handleAdd = async (_id) => {
  try {
    const managerId = localStorage.getItem('managerID');
    
    // Check if managerId exists in localStorage
    if (!managerId) {
      toast.error('Manager ID not found in localStorage');
      return;
    }
    const response = await fetch(`https://server-side-influencer.onrender.com/manager/influencer/add/${managerId}/${_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      toast.success(`Added successfully!`);
    } else {
      const errorData = await response.json();
      console.error('Error:', errorData.message);
      
      // Show error toast once, as expected
      toast.error(` ${errorData.message}`);
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
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
      console.log(`Item with ID ${_id} deleted successfully.`);
      toast.success(`Deleted successfully!`);

      // Update the state to remove the deleted item from the list
      setApiData(prevData => prevData.filter(item => item._id !== _id));

    } else {
      const errorData = await response.json();
      console.error('Error:', errorData.message);
      toast.error(`Failed to delete item: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error deleting item:", error);
    toast.error("An error occurred while deleting the item.");
  }
};


    // Followers range options
  



const safeHashtags = (hashtags) => {
  if (typeof hashtags === 'string') {
    // Split hashtags by commas and wrap each with quotes (escape quotes inside the string if needed)
    return hashtags
      .split(',')
      .map(tag => `"${tag.trim().replace(/"/g, '""')}"`) // Escape quotes inside hashtags
      .join(' '); // Join hashtags with a space
  }
  return '';
};

const safeEmail = (email) => {
  if (typeof email === 'string') {
    // Ensure the email is wrapped in quotes and escape any internal quotes
    return `"${email.trim().replace(/"/g, '""')}"`; // Escape quotes inside email
  }
  return '';
};

// Export selected rows to CSV
const exportToCSV = () => {
  if (!selectedRows || selectedRows.length === 0) {
    // Show a toast error if no rows are selected
    // toast.error("Please select at least one row to export Csv file.");
    Swal.fire({
      title: "Error",
      text: "Please select at least one row to export the CSV file.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }
  const selectedData = selectedRows.map((index) => filteredData[index]);

  // Prepare CSV content
  const csvContent = [
      // CSV Header
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
      ].join(','), // Join headers with commas
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
              safeHashtags(item.hashtags), // Hashtags
              safeValue(item.managedBy),
              safeValue(item.lifestyle),
              safeEmail(item.email), // Ensure emails are properly formatted
          ].join(',') // Join each row with commas
      ),
  ].join('\n'); // Join the header and data with a new line

  // Create a Blob and trigger the download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'selected_data.csv';
  link.click();
};

    return (
        <div className="h-screen flex">
            <Navbar />
            <div className="h-screen ml-14 max-sm:ml-0  w-full flex flex-col">
                <div className="text-center font-bold text-2xl mt-4 ml-6">
                    Influencer Searching...
                </div>

                {/* <CsvUploader />

<List/>  */}



<div className="flex justify-between items-start mb-[-250px]">
  <div className="flex-1">
    <CsvUploader  fetchData={fetchData}  /> {/* This will be on the left */}
  </div>
  <div>
    <List /> {/* This will be on the right as a drawer */}
  </div>
</div>




                <div className="flex flex-col gap-6 p-1">
                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2">



                        <button
                            className="bg-orange-500 text-white px-1 py-2 rounded shadow hover:bg-orange-600 transition"
                            onClick={exportToCSV}
                        >
                            <Download className="mr-2" />
                            Export Selected to CSV
                        </button>
                    </div>








                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Search by Name"
                            className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery.name}
                            onChange={handleInputChange}
                        />

                        {/* Category Dropdown */}
                        <select
                            name="category"
                            className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery.category}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Category</option>
                            {Object.keys(categoryOptions).map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>

                        {/* Subcategory Dropdown */}
                        {searchQuery.category && (
                            <select
                                name="subCategory"
                                className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchQuery.subCategory}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Subcategory</option>
                                {categoryOptions[searchQuery.category].map((subCategory) => (
                                    <option key={subCategory} value={subCategory}>
                                        {subCategory}
                                    </option>
                                ))}
                            </select>
                        )}

                        <input
                            type="text"
                            name="location"
                            placeholder="Search by Location"
                            className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery.location}
                            onChange={handleInputChange}
                        />


                       



<select
                            name="stateCity"
                            className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery.stateCity}
                            onChange={handleInputChange}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>



               
              <select
                name="city"
                className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery.city}
                onChange={handleInputChange}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <select
                        name="followersRange"
                        className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 followerRange"
                        value={searchQuery.followersRange}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Followers Range</option>
                        {followersRangeOptions.map((range, index) => (
                            <option key={index} value={range.label}>
                                {range.label}
                            </option>
                        ))}
                    </select>
        



        
                     {/* Price Range Slider */}
                     <div className="w-full flex flex-col">
                            <label className="text-sm font-medium slidercostfilter">Price Range (₹):</label>
                            <Slider
                                value={searchQuery.priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={5000000} // 50 lakh
                                step={50000} // Step of 50k
                            />
                        </div>


                        
</div>





                    {/* Scrollable Table */}
                    <div className="layout">

                        <div className="content ">
                            {/* Table container */}
                            <div className="table-container flex-1 overflow-auto border shadow rounded-lg bg-white">
                                <div className="overflow-auto" style={{ maxHeight: '440px', maxWidth: '1030px' }}>
                                    <table className="table-auto w-full border-collapse border border-gray-300">
                                        <thead className="sticky top-0 bg-gray-200">
                                            <tr className="bg-gray-100">
                                                <th className="border px-4 py-2">Select</th>
                                                <th className="border px-4 py-2">Name</th>
                                                <th className="border px-4 py-2">Instagram Profile</th>
                                                <th className="border px-4 py-2">Followers</th>
                                                <th className="border px-4 py-2">YouTube Link</th>
                                                <th className="border px-4 py-2">Subscribers</th>
                                                <th className="border px-4 py-2">Category</th>
                                                <th className="border px-4 py-2">Contact Number</th>
                                                <th className="border px-4 py-2">Location</th>
                                                <th className="border px-4 py-2">state</th>
                                                <th className="border px-4 py-2">city</th>
                                                <th className="border px-4 py-2">Commercial</th>
                                                <th className="border px-4 py-2">Email</th>
                                                <th className="border px-4 py-2">Cost</th>
                                                <th className="border px-4 py-2">Notes</th>
                                                <th className="border px-4 py-2">Hashtags</th>
                                                <th className="border px-4 py-2">Managed By</th>
                                                <th className="border px-4 py-2">Lifestyle</th>
                                                <th className="border px-4 py-2">Action</th>
                                                <th className="border px-4 py-2">edit</th>
                                                <th className="border px-4 py-2">Add</th>
                                            </tr>
                                        </thead>


                                        <tbody>
                                            {filteredData.length > 0 ? (
                                                filteredData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="border px-4 py-2 text-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedRows.includes(index)}
                                                                onChange={() => toggleRowSelection(index)}
                                                            />
                                                        </td>
                                                        <td className="border px-4 py-2">{item.name || 'N/A'}</td>
                                                        <td className="border px-4 py-2">
                                                            <a
                                                                href={item.instagramProfile || '#'}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-500"
                                                            >
                                                                <Instagram />
                                                            </a>
                                                        </td>
                                                        <td className="border px-4 py-2">{item.followers || 0}</td>
                                                        <td className="border px-4 py-2">
                                                            {/* <a
                                                                href={item.youtubeLink || '#'}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-500"
                                                            >
                                                                <YouTube />
                                                            </a> */}
                                                            <a
  href={item.youtubeLink && !item.youtubeLink.startsWith('http') ? `https://${item.youtubeLink}` : item.youtubeLink || '#'}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500"
>
  <YouTube />
</a>

                                                        </td>
                                                        <td className="border px-4 py-2">{item.subscribers || 'No'}</td>
                                                        <td className="border px-4 py-2">{item.category || 'Unknown'}</td>
                                                        <td className="border px-4 py-2">{item.contactNumber || 'N/A'}</td>
                                                        <td className="border px-4 py-2">{item.location || 'N/A'}</td>
                                                        <td className="border px-4 py-2">{item.state || 'N/A'}</td>
                                                        <td className="border px-4 py-2">{item.city || 'N/A'}</td>
                                                        <td className="border px-4 py-2">{item.commercial || 'N/A'}</td>
                                                        <td className="border px-4 py-2">{item.email || 'N/A'}</td>
                                                        <td className="border px-4 py-2">₹{item.costingPerSegment || 0}</td>
                                                        <td className="border px-4 py-2">{item.notes || 'NO'}</td>
                                                      
                                                        <td className="border px-4 py-2">
  {Array.isArray(item.hashtags) 
    ? item.hashtags.length > 0 
      ? item.hashtags.join(', ') 
      : 'N/A'
    : (typeof item.hashtags === 'string' && item.hashtags.length > 0) 
      ? item.hashtags 
      : 'N/A'
  }
</td>


                                                        <td className="border px-4 py-2">{item.managedBy || 'N/A'}</td>
                                                        <td className="border px-4 py-2">{item.lifestyle || 'N/A'}</td>
                                                        {/* <td className="border px-4 py-2">{item.id || 'N/A'}</td> */}
                                                        <td className="border px-4 py-2">
  <button
    onClick={() => handleDelete(item._id)} // Call the function with the ID
    className="text-red-500 hover:text-red-700 focus:outline-none"
  >
   delete
  </button>
</td>

<td className="border px-4 py-2">
  <button
    onClick={() => handleEdit(item)} // Pass the entire item to the function
    className="text-green-500 hover:text-green-700 focus:outline-none"
  >
    edit
  </button>
</td>

<td className="border px-4 py-2">
  <button
    onClick={() => handleAdd(item._id)} // Call the function with the ID
    className="text-green-500 hover:text-red-700 focus:outline-none"
  >
   Add
  </button>
</td>


                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td className="border px-4 py-2 text-center" colSpan="16">
                                                        No data found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>




                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            
            </div>
          
        </div>
     
    );
};

export default ManagerHome;




