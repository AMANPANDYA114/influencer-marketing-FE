import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

const InfluencerPendingRequest = () => {
  const navigate = useNavigate();
  
  // Static data for demonstration purposes (replace with real data if needed)
  const profilecard = [
    {
      shopName: "Brand A",
      brandType: "Clothing",
      phone: "+1234567890",
      email: "contact@brandA.com",
      city: "New York",
      country: "USA",
      logo: "https://via.placeholder.com/150",
    },
    {
      shopName: "Brand B",
      brandType: "Footwear",
      phone: "+0987654321",
      email: "contact@brandB.com",
      city: "London",
      country: "UK",
      logo: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="PendingRequests" />
        {/* Static loading placeholder */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5 max-md:px-10">
          {profilecard.length === 0 ? (
            <h1 className="text-3xl font-bold text-center">No Request Found</h1>
          ) : (
            profilecard.map((item, index) => (
              <div key={index} className="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl">
                <img src={item.logo} className="h-1/3 w-1/3 m-auto mt-5" alt="image" />
                <div className="px-5">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold font-dmserif text-neutral-700">{item.shopName}</h3>
                    <p className="text-xl text-gray-700 font-dmserif">{item.brandType}</p>
                  </div>
                  <div className="border-y-2 py-3">
                    <div className="flex space-x-2.5 items-center">
                      <FiPhoneCall size={20} />
                      <p className="mb-1 text-lg">{item.phone}</p>
                    </div>
                    <div className="flex space-x-2.5 items-center">
                      <MdEmail size={20} />
                      <p className="mb-1 text-lg">{item.email}</p>
                    </div>
                    <div className="flex space-x-2.5 items-center">
                      <TiLocation size={20} />
                      <p className="mb-1 text-lg hover:text-blue-500">
                        {item.city + ", " + item.country}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-5">
                  <div>
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to reject this request?")) {
                          toast.success("Request removed");
                        }
                      }}
                      className="flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md"
                    >
                      <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                      </svg>
                      <span className="text-white">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <ToastContainer autoClose={500} />
      </div>
    </div>
  );
};

export default InfluencerPendingRequest;
