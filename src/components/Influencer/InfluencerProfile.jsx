import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

const InfluencerProfile = () => {
  const [userdata, setuserdata] = useState({});
  const [adrequired, setAdrequired] = useState(false); // Set to false by default
  const [brandData, setbrandData] = useState([]);
  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dummy Data
  const dummyUserData = {
    photo: "https://example.com/photo.jpg",
    profile: "https://example.com/profile.jpg",
    fname: "John",
    lname: "Doe",
    city: "New York",
    country: "USA",
    age: 25,
    phone: "123-456-7890",
    email: "john.doe@example.com",
    state: "NY",
    facebookURL: "https://facebook.com/johndoe",
    twitterURL: "https://twitter.com/johndoe",
    instagramURL: "https://instagram.com/johndoe",
    facebookFollowers: 1000,
    instagramFollowers: 1500,
    twitterFollowers: 2000,
    facebookComments: 150,
    instagramComments: 200,
    twitterComments: 250,
    facebookEngagementRate: 0.05,
    instagramEngagementRate: 0.06,
    twitterEngagementRate: 0.07,
    discription: "I am an influencer with a passion for fashion and lifestyle.",
  };

  const dummyBrandData = [
    { shopName: "Brand A", logo: "https://example.com/logo1.jpg", instagramUrl: "https://instagram.com/brandA" },
    { shopName: "Brand B", logo: "https://example.com/logo2.jpg", instagramUrl: "https://instagram.com/brandB" },
  ];

  const dummyDate = ["2024-11-25", "2024-11-24"];

  // Set dummy data on mount
  useEffect(() => {
    setLoading(true);
    setuserdata(dummyUserData);
    setbrandData(dummyBrandData);
    setDate(dummyDate);
    setLoading(false);
  }, []);

  return (
    <div className='flex h-[screen]'>
      <Navbar />
      <div className=' ml-14 w-screen'>
        <InfluencerHeader page="Profile" />
        <div class="h-full py-8 w-5/6 m-auto">
          <div class="bg-white w-5/6 m-auto rounded-lg border-2 shadow-xl pb-8">
            <div class="w-full h-[300px]">
              <img src={userdata.photo} class="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div class="flex flex-col items-center -mt-20">
              <img
                src={userdata.profile}
                class="w-40 h-40 border-4 border-white bg-gray-50 rounded-full" />
              <div class="flex items-center space-x-2 mt-2">
                <p class="text-2xl">{userdata.fname + " " + userdata.lname}</p>
                <span class="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </div>
              <p class="text-gray-700">Influencer</p>
              <p class="text-sm text-gray-500">{userdata.city + ", " + userdata.country}</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div class="flex items-center space-x-4 mt-2">
                <NavLink to='/InfluencerProfileEdit' state={userdata}>
                  <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <FaUserEdit size={17} />
                    <span>Edit Profile</span>
                  </button>
                </NavLink>
                {
                  adrequired === false ?
                    <button
                      onClick={() => setAdrequired(true)}
                      class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                      <span>Request Ads</span>
                    </button> :
                    <button
                      onClick={() => setAdrequired(false)}
                      class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                      <span>Remove Request</span>
                    </button>
                }
              </div>
            </div>
          </div>

          <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div class="w-full flex flex-col 2xl:w-1/3">
              <div class="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">Personal Information</h4>
                <ul class="mt-2 text-gray-700">
                  <li class="flex border-y py-2">
                    <span class="font-bold w-24">Full name:</span>
                    <span class="text-gray-700">{userdata.fname + " " + userdata.lname}</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Age:</span>
                    <span class="text-gray-700">{userdata.age}</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Mobile:</span>
                    <span class="text-gray-700">{userdata.phone}</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Email:</span>
                    <span class="text-gray-700">{userdata.email}</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Location:</span>
                    <span class="text-gray-700">{userdata.city + ", " + userdata.state + ", " + userdata.country}</span>
                  </li>
                </ul>
              </div>
              <div class="flex-1 bg-white border-2 rounded-lg shadow-xl mt-4 p-8">
                <h4 class="text-xl text-gray-900 font-bold">My Activity Logs</h4>
                <div class="relative px-4">
                  <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                  {loading ? <img src={loader} alt="loading" className="h-52 mx-auto" /> :
                    <div>
                      {brandData.length === 0 ? <div>No Brands connected</div> :
                        brandData.map((data, index) => (
                          <div class="flex items-center w-full my-1 -ml-1.5">
                            <div class="w-1/12 z-10">
                              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <img src={data.logo} className="w-8 h-8 rounded-full mx-5 " alt="profile" />
                            <div class="w-11/12">
                              <a href={data.instagramUrl} target="_blank" title="Instagram">
                                <div class="text-sm font-semibold cursor-pointer">{data.shopName}</div>
                              </a>
                              <p class="text-xs text-gray-500">{date[index]}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  }
                </div>
              </div>
            </div>

            <div class="flex flex-col w-full 2xl:w-2/3">
              <div class="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">Social Media Stats</h4>
                <ul class="mt-2 text-gray-700">
                  <li class="flex items-center justify-between border-b py-2">
                    <div class="flex items-center space-x-4">
                      <div class="text-2xl"><RiFacebookBoxLine /></div>
                      <div>
                        <p class="font-semibold">Facebook</p>
                        <p class="text-sm text-gray-500">Followers: {userdata.facebookFollowers}</p>
                        <p class="text-sm text-gray-500">Comments: {userdata.facebookComments}</p>
                        <p class="text-sm text-gray-500">Engagement Rate: {userdata.facebookEngagementRate}</p>
                      </div>
                    </div>
                    <a href={userdata.facebookURL} target="_blank" class="text-sm text-blue-600 hover:text-blue-800">View</a>
                  </li>
                  <li class="flex items-center justify-between border-b py-2">
                    <div class="flex items-center space-x-4">
                      <div class="text-2xl"><FaInstagram /></div>
                      <div>
                        <p class="font-semibold">Instagram</p>
                        <p class="text-sm text-gray-500">Followers: {userdata.instagramFollowers}</p>
                        <p class="text-sm text-gray-500">Comments: {userdata.instagramComments}</p>
                        <p class="text-sm text-gray-500">Engagement Rate: {userdata.instagramEngagementRate}</p>
                      </div>
                    </div>
                    <a href={userdata.instagramURL} target="_blank" class="text-sm text-blue-600 hover:text-blue-800">View</a>
                  </li>
                  <li class="flex items-center justify-between border-b py-2">
                    <div class="flex items-center space-x-4">
                      <div class="text-2xl"><FiTwitter /></div>
                      <div>
                        <p class="font-semibold">Twitter</p>
                        <p class="text-sm text-gray-500">Followers: {userdata.twitterFollowers}</p>
                        <p class="text-sm text-gray-500">Comments: {userdata.twitterComments}</p>
                        <p class="text-sm text-gray-500">Engagement Rate: {userdata.twitterEngagementRate}</p>
                      </div>
                    </div>
                    <a href={userdata.twitterURL} target="_blank" class="text-sm text-blue-600 hover:text-blue-800">View</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default InfluencerProfile;
