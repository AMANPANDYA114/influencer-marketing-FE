import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const ApplyToCampaign = () => {
  const location = useLocation();
  const campaignId = location.state?.campaignId;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [followers, setFollowers] = useState('');
  const [email, setEmail] = useState('');
  const [taskLink, setTaskLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [approvedBudget, setApprovedBudget] = useState('');
  const [image, setImage] = useState(null);

  if (!campaignId) {
    return (
      <div className="text-center mt-5">
        <p className="text-red-600">Campaign ID is missing! Please make sure it's provided correctly.</p>
      </div>
    );
  }

  const influencerID = localStorage.getItem('influencerID');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store only one image
  };

  const validateFields = () => {
    const fields = [
      { value: name, message: 'Full Name is required' },
      { value: age, message: 'Age is required' },
      { value: followers, message: 'Followers count is required' },
      { value: email, message: 'Email is required' },
      { value: taskLink, message: 'Task Link is required' },
      { value: instagramLink, message: 'Instagram Link is required' },
      { value: approvedBudget, message: 'Approved Budget is required' },
      { value: image, message: 'Please upload an image' }
    ];
    
    for (let field of fields) {
      if (!field.value) {
        toast.error(field.message);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('followers', followers);
    formData.append('email', email);
    formData.append('campaignId', campaignId);
    formData.append('taskLink', taskLink);
    formData.append('instagramLink', instagramLink);
    formData.append('approvedBudget', approvedBudget);
    formData.append('applicantRealId', influencerID);
    if (image) {
      formData.append('image', image); // Pass only one image
    }

    try {
      const response = await fetch('https://server-side-influencer-1.onrender.com/influencer/apply-to-campaign', {
        method: 'PUT',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Application submitted successfully!');
      } else {
        toast.error(result.error || result.message || 'Error submitting application!');
      }
    } catch (error) {
      toast.error(`Network Error: ${error.message}`);
    }
  };

  return (
    <div>
      <ToastContainer position="bottom-center" autoClose={3000} />
      <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 100 }}>
        <Navbar />
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Apply to Campaign</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="number" placeholder="Followers" value={followers} onChange={(e) => setFollowers(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="url" placeholder="Task Link" value={taskLink} onChange={(e) => setTaskLink(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="url" placeholder="Instagram Link" value={instagramLink} onChange={(e) => setInstagramLink(e.target.value)} className="w-full p-3 border rounded-md" />
            <input type="number" placeholder="Approved Budget in rupees" value={approvedBudget} onChange={(e) => setApprovedBudget(e.target.value)} className="w-full p-3 border rounded-md" />
            <p>* Add an image or screenshot related to this campaign</p>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-3 border rounded-md" />
            {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-16 h-16 object-cover border rounded mt-2" />}
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyToCampaign;
