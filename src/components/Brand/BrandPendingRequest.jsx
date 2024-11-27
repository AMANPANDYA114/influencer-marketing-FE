



import React from "react";
import Navbar from "./Navbar";

const BrandPendingRequest = () => {
  return (
    <div className="flex flex-row h-screen">
      <Navbar />
      <div className="h-screen ml-14 w-full max-sm:ml-0">
        <div className="relative">
          <img
            src="https://i.postimg.cc/dtXqB3tb/bgorange.jpg"
            alt="Top Image"
            style={{ width: "99%", height: "200px" }}
            className="mx-auto object-cover"
          />
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center"
            style={{ top: "30%" }}
          >
           <div className="text-black font-bold" style={{ fontSize: "20px" }}>
  Access 7,450 Campaigns from 1000+ Brands
</div>

         
<div className="text-white mt-2" style={{ fontSize: "15px" }}>
  Explore campaigns from top brands, uncovering the ideas, campaign objectives, content themes, and top influencers that drive them. Powered by Qoruz AI qoruz ai icon
</div>


           
            <button
  className="mt-4 px-6 py-2 bg-black text-white text-lg rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
  style={{ marginTop: "20px" }}
>
  Browse Campaigns
</button>

          </div>
        </div>



<div className="absolute left-0 top-[calc(200px+10px)] w-full flex justify-between items-center px-4"  style={{ marginLeft: "1%" }}>
  {/* Tabs positioned on the left */}
  <div>
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
          <a
            href="#"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            {/* Tab Content */}
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
            aria-current="page"
          >
            Brand
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Industry
          </a>
        </li>
        <li className="me-2">
          <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Occasion
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Search Box positioned on the right side */}
  <form className="flex items-center" style={{ marginLeft: "auto" }}>
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search branch name..."
        required
      />
    </div>
    <button
      type="submit"
      className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
  </form>
</div>



        {/* Browse by brand section */}
        <div className="p-4 mt-10">
          <h2 className="text-xl font-bold">Browse by industry</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-4">
            {/* Category 1: Airlines */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">✈️Airlines</h3>
              <div className="text-sm text-gray-600">
                <p>16 campaigns</p>
                <p>7 brands</p>
              </div>
            </div>

            {/* Category 2: Automotive */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">✈️Automotive</h3>
              <div className="text-sm text-gray-600">
                <p>212 campaigns</p>
                <p>35 brands</p>
              </div>
            </div>

            {/* Category 3: Banking & Finance */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">💰Banking & Finance</h3>
              <div className="text-sm text-gray-600">
                <p>61 campaigns</p>
                <p>17 brands</p>
              </div>
            </div>

            {/* Category 4: Beauty */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">💄Beauty</h3>
              <div className="text-sm text-gray-600">
                <p>1,940 campaigns</p>
                <p>205 brands</p>
              </div>
            </div>
          </div>
        </div>





        {/* Browse by brand section */}
        <div className="p-4 mt-10">
          <h2 className="text-xl font-bold">Browse by Brand</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-4">
            {/* Category 1: Airlines */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">✈️Airlines</h3>
              <div className="text-sm text-gray-600">
                <p>16 campaigns</p>
                <p>7 brands</p>
              </div>
            </div>

            {/* Category 2: Automotive */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">✈️Automotive</h3>
              <div className="text-sm text-gray-600">
                <p>212 campaigns</p>
                <p>35 brands</p>
              </div>
            </div>

            {/* Category 3: Banking & Finance */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">💰Banking & Finance</h3>
              <div className="text-sm text-gray-600">
                <p>61 campaigns</p>
                <p>17 brands</p>
              </div>
            </div>

            {/* Category 4: Beauty */}
            <div className="text-center">
              <h3 className="text-lg font-semibold">💄Beauty</h3>
              <div className="text-sm text-gray-600">
                <p>1,940 campaigns</p>
                <p>205 brands</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other content here */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 px-10 grid-cols-1">
          {/* Your other content */}
        </div>
      </div>
    </div>
  );
};

export default BrandPendingRequest;
