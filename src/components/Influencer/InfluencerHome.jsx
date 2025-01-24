

import React, { useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import Card from "./Card";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

const InfluencerHome = () => {
  const navigate = useNavigate();
  const [brandCard, setBrandCard] = useState([
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
    {
      shopName: "Brand C",
      brandType: "Accessories",
      phone: "+1122334455",
      email: "contact@brandC.com",
      city: "Paris",
      country: "France",
      logo: "https://via.placeholder.com/150",
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="h-[screen] flex ">
      <Navbar />
      <div className="ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Home" />
        <div className="">
          {loading === true ? (
            <img src={loader} alt="loading" className="h-52 mx-auto" />
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5 max-md:px-10">
              {brandCard.length > 0 &&
                brandCard.map((item, index) => (
                  <Card item={item} key={index} />
                ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mb-3 bottom-3 mx-auto left-0 right-0">
          <div className="flex justify-center">
            <nav aria-label="Page navigation example">
              <ul className="flex list-style-none">
                <li className="page-item disabled">
                  <a
                    className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href={`?page=${(parseInt(searchParams.get("page")) - 1) < 1 ? 1 : parseInt(searchParams.get("page")) - 1}`}
                  >
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page") == 1 ? `bg-sky-600 text-white` : `bg-transparent text-gray-800`} outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                    href="?page=1"
                  >
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a
                    className={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page") == 2 ? `bg-sky-600 text-white` : `bg-transparent text-gray-800`} outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                    href="?page=2"
                  >
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page") > 2 ? `bg-sky-600 text-white` : `bg-transparent text-gray-800`} outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                  >
                    {searchParams.get("page") <= 2 ? "..." : searchParams.get("page")}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href={`?page=${(parseInt(searchParams.get("page")) + 1)}`}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHome;

