import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loader from "../../Images/loader.gif";
import InfluencerHeader from "./InfluencerHeader";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const InfluencerHistory = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCampaigns = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://server-side-influencer.onrender.com/brand/getAllCampaigns"
        );
        const data = response.data.data;
        setCampaigns(data);
        setLoading(false);
      } catch (err) {
        toast.error("Error fetching campaign data.");
        setLoading(false);
      }
    };

    getCampaigns();
  }, []);

  const filteredCampaigns = campaigns.filter((campaign) => {
    return campaign.tags.some((tag) =>
      tag.toLowerCase().startsWith(searchQuery.toLowerCase().slice(0, 2))
    );
  });

  const displayedCampaigns = searchQuery ? filteredCampaigns : campaigns;

  const handleCardClick = (campaign) => {
    navigate("/campaigndetails", {
      state: { campaignDetails: campaign },
    });
  };

  const handleMyCampaignClick = () => {
    navigate("/myapplications");
  };

  return (
    <div className="flex h-screen relative">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Profile" />

        {/* My Campaigns Button */}
        


        {/* Search bar */}
        <div className="mx-10 mb-5 mt-2">
          <form className="flex justify-center items-center space-x-2 w-full">
            <div className="relative w-[69%] ml-5">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Campaigns by Tags..."
              />
            </div>
          </form>

          <button
  onClick={handleMyCampaignClick}
  className="absolute right-10 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600"
  style={{ marginTop: '6%' }}
>
  My Campaigns
</button>
        </div>

        {/* Campaigns grid */}
        <p className="text-center font-bold text-2xl mb-5">Join Campaigns</p>

        {loading ? (
          <img src={loader} alt="loading" className="h-52 mx-auto" />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-10 max-sm:px-5 ">
            {displayedCampaigns.length > 0 ? (
              displayedCampaigns.map((campaign) => (
                <div
                  key={campaign._id}
                  className="cursor-pointer mt-10 items-center justify-center border-2 border-gray-300 shadow-2xl bg-gray-100 rounded-2xl overflow-hidden mb-10 ml-5 h-[350px]" // Increased height
                  onClick={() => handleCardClick(campaign)}
                >
                  <img
                    className="w-full object-cover h-[250px]" // Increased height for image
                    src={campaign.backgroundImage}
                    alt="Campaign Background"
                  />
                  <div className="p-4 text-center text-sm">
                    <h3 className="text-xl font-bold font-dmserif text-neutral-700">
                      Brand Name: {campaign.brandName}
                    </h3>
                  </div>

                  {campaign.followerRange && (
                    <div className="flex space-x-2.5 items-center">
                      <p className="mb-1 text-md">
                        Follower Range: {campaign.followerRange[0]} - {campaign.followerRange[1]}
                      </p>
                    </div>
                  )}

                  {campaign.tags?.length > 0 && (
                    <div className="mt-2">
                      <p className="text-md">Tags: </p>
                      <ul className="flex space-x-3">
                        {campaign.tags.map((tag, index) => (
                          <li key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">{tag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center">No campaigns found.</p>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default InfluencerHistory;