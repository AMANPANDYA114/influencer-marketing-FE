

import React, { useState, useEffect } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Modal from 'react-modal';
import loader from "../../Images/loader.gif";

const InfluencerConsignments = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // Set to false since we are not fetching data from the API
  const [profilecard, setProfileCard] = useState([]);
  const [cons, setCons] = useState([]);

  // Dummy Data to replace the API call
  useEffect(() => {
    // Simulate loading and setting dummy data
    setLoading(true);
    setTimeout(() => {
      const dummyProfileData = [
        {
          _id: "1",
          shopName: "Brand X",
          brandType: "Fashion",
          logo: "https://via.placeholder.com/150",
          phone: "+1234567890",
          email: "contact@brandx.com",
          city: "New York",
          country: "USA"
        },
        {
          _id: "2",
          shopName: "Brand Y",
          brandType: "Tech",
          logo: "https://via.placeholder.com/150",
          phone: "+0987654321",
          email: "info@brandy.com",
          city: "San Francisco",
          country: "USA"
        }
      ];

      const dummyConsData = [
        {
          _id: "1",
          detailSend: 0,  // 0 means not sent, 1 means sent
          AgreementDetail: {
            name: "John Doe",
            email: "johndoe@example.com",
            Remarks: "Great partnership!",
            contact: "1234567890",
            startDate: "2024-01-01",
            endDate: "2024-12-31",
            adsType: "Banner Ads",
            termsAndConditions: "Terms and conditions here...",
            amount: "5000"
          }
        },
        {
          _id: "2",
          detailSend: 1,
          AgreementDetail: {
            name: "Jane Smith",
            email: "janesmith@example.com",
            Remarks: "Looking forward to the collaboration.",
            contact: "0987654321",
            startDate: "2024-02-01",
            endDate: "2024-11-30",
            adsType: "Social Media",
            termsAndConditions: "Terms and conditions here...",
            amount: "3000"
          }
        }
      ];

      setProfileCard(dummyProfileData);
      setCons(dummyConsData);
      setLoading(false);
    }, 1000); // Simulating delay for fetching data
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Remarks: '',
    contact: "",
    startDate: "",
    endDate: "",
    adsType: "",
    termsAndConditions: "",
    amount: ""
  });

  const [brandId, setBrandId] = useState("");
  const [index, setIndex] = useState();

  const openModal = (data, id, index) => {
    setIndex(index);
    setFormData(data.AgreementDetail);
    setBrandId(id);
    setIsOpen(true);
  };

  const openModal2 = (data, index) => {
    setFormData(data.AgreementDetail);
    setIsOpen2(true);
  };

  const closeModal = () => {
    setFormData({
      name: '',
      email: '',
      Remarks: '',
      contact: "",
      startDate: "",
      endDate: "",
      adsType: "",
      termsAndConditions: "",
      amount: ""
    });
    setIsOpen(false);
    setIsOpen2(false);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to send agreement details?")) {
      try {
        // Simulate API response for agreement submission
        const resdata = { success: true, message: "Agreement details sent successfully." };

        if (resdata.success === true) {
          closeModal();
          const updatedItem = { ...cons[index], detailSend: 1, AgreementDetail: formData };
          const updatedItems = [...cons];
          updatedItems[index] = updatedItem;
          setCons(updatedItems);
          toast.success(resdata.message);
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    }
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Agreements" />
        {loading === true ? (
          <img src={loader} alt="loading" className="h-52 mx-auto" />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 px-10 grid-cols-1 max-sm:px-5 max-md:px-10">
            {profilecard.length === 0 ? (
              <h1 className="text-3xl font-bold ml-40">No Any Agreements</h1>
            ) : (
              profilecard.map((data, index) => (
                <div className="my-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl">
                  <img src={data.logo} className="h-1/3 w-1/3 m-auto mt-5" alt="image" />

                  <div className="px-5">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold font-dmserif text-neutral-700">
                        {data.shopName}
                      </h3>

                      <p className=" text-xl text-gray-700 font-dmserif">{data.brandType}</p>
                    </div>

                    <div className="border-y-2 py-3">
                      <div className="flex space-x-2.5 items-center">
                        <FiPhoneCall size={20} />
                        <p className="mb-1 text-lg ">{data.phone}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <MdEmail size={20} />
                        <p className="mb-1 text-lg">{data.email}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <TiLocation size={20} />
                        <p className="mb-1 text-lg hover:text-blue-500 ">
                          {data.city + ", " + data.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-3 items-center mx-10">
                      {cons[index].detailSend === 0 ? (
                        <button
                          className="mx-auto flex space-x-2 items-center px-3 py-2 bg-green-500 hover:bg-green-800 rounded-md drop-shadow-md"
                          onClick={() => openModal(cons[index], data._id, index)}
                        >
                          <span className="text-white">Send Details</span>
                        </button>
                      ) : (
                        <button
                          className="mx-auto flex space-x-2 items-center px-3 py-2 bg-green-500 hover:bg-green-800 rounded-md drop-shadow-md"
                          onClick={() => openModal2(cons[index], index)}
                        >
                          <span className="text-white">View Details</span>
                        </button>
                      )}
                      <button
                        onClick={async (e) => {
                          e.preventDefault();
                          if (window.confirm("Are you sure you want to delete this consignment?")) {
                            const updatedItems = [...profilecard];
                            updatedItems.splice(index, 1);
                            setProfileCard(updatedItems);
                            toast.success("Agreement Removed Successfully");
                          }
                        }}
                        className="mx-auto flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md"
                      >
                        <svg
                          className="fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4 5 L 5 20 C 5 20.553 5.447 21 6 21 L 18 21 C 18.553 21 19 20.553 19 20 L 20 5 L 21 5 L 21 3 L 15 3 L 14 2 Z M 14 4 L 15 4 L 16 19 L 8 19 L 9 4 Z M 11 6 L 13 6 L 13 17 L 11 17 Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Modal Content */}
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
          <h2>Agreement Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <textarea
              id="Remarks"
              value={formData.Remarks}
              onChange={handleChange}
              placeholder="Remarks"
            />
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact"
            />
            <input
              type="date"
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
            <input
              type="date"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
            <input
              type="text"
              id="adsType"
              value={formData.adsType}
              onChange={handleChange}
              placeholder="Ads Type"
            />
            <textarea
              id="termsAndConditions"
              value={formData.termsAndConditions}
              onChange={handleChange}
              placeholder="Terms and Conditions"
            />
            <input
              type="number"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
            />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default InfluencerConsignments;

