
import React from "react";
import Navbar from "./Navbar";

const InfluencerPendingRequest = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">No Request</h1>
      </div>
    </div>
  );
};

export default InfluencerPendingRequest;

