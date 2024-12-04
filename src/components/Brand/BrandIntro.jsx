


import React from 'react';
import { NavLink } from 'react-router-dom';
import card from '../../../src/Images/profilecard.gif';

const BrandIntro = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="h-20 justify-center flex font-black">
        <div className="w-5/6 bg-white-50 flex">
          <div className="logo">
            <NavLink to="/">
              <img
                src="https://i.postimg.cc/dtNHgnZh/Litadzmedia-logoblack.webp"
                className="h-20 pr-10"
                alt="Logo"
                style={{ width: '120px', height: '40px', marginTop: '15px' }} // Custom width in pixels
              />
            </NavLink>
          </div>

          <nav className="menubar my-auto">
            <ul className="menu flex max-sm:flex-col max-md:flex-col items-center text-lg">
              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
                <NavLink to="/BrandIntro">For Brand</NavLink>
              </li>
              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
                <NavLink to="/InfluencerIntro">For Influencers</NavLink>
              </li>
              <li className="menu-item py-3 px-4 ease-in duration-300">
                <div>
                  <div className="group inline-block">
                    <button className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                      <span className="pr-1 font-semibold flex-1 hover:text-blue-500 cursor-pointer">More</span>
                      <span>
                        <svg
                          className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                      <NavLink to="/ManagerLogin">
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">Work as manager</li>
                      </NavLink>
                      <NavLink to="/NewToSite">
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">New To Site</li>
                      </NavLink>
                      <NavLink to="/AboutUs">
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer">About Us</li>
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Login and Signup Buttons */}
          <div className="login-buttons flex ml-auto my-auto">
            <div>
              <div className="group inline-block">
                <NavLink to="/BrandLogin">
                  <button className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                    <span className="pr-1 font-semibold flex-1 cursor-pointer">
                      <div className="ml-5 my-1 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200 rounded cursor-pointer">
                        Log in
                      </div>
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
            <div>
              <div className="group inline-block">
                <NavLink to="/BrandSignUp">
                  <button className="outline-none focus:outline-none px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                    <span className="pr-1 font-semibold flex-1 cursor-pointer">
                      <div className="ml-1 my-1 text-white bg-sky-400 px-7 py-3 hover:bg-sky-500 ease-in duration-200 rounded cursor-pointer">
                        Sign Up
                      </div>
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Intro Content */}
      <div className="pt-10">
        <div className="w-5/6 m-auto header flex">
          <div className="text-left">
            <div className="">
              <div className="text-2xl">For Brands...</div>
              <div className="text-5xl font-medium mt-20">
                <div className="">Pay influencers only when</div>
                <span>you get results</span>
              </div>
            </div>

            <div className="">
              <div className="text-3xl font-medium mt-10">
                <div className="">Get sales while best-in-class</div>
                <span>analytics do the rest</span>
              </div>
              <div className="text-2xl pt-8 max-w-4xl">
                With our 25k+ micro-influencers you can choose from a variety of payment models and control the ROI on your campaigns
              </div>
              <div className="flex">
                <NavLink to="/BrandSignUp">
                  <div className="my-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded ">
                    Get Started-it's free
                  </div>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="gif w-1/3 ml-auto">
            <img src={card} className="" />
          </div>
        </div>

        <div className="w-5/6 m-auto text-left bg-blue-600 rounded-xl mb-10 ">
          <div className="my-10 text-2xl text-white ml-20 pt-10">Adcosign for brands</div>
          <div className="flex justify-between">
            <div className="w-30 mx-20 bg-white my-20 p-5 rounded-2xl ">
              <div className="text-blue-700 text-3xl">25k+</div>
              <div className="">Micro-influencers on the platform</div>
            </div>
            <div className="w-30 mx-20 bg-white my-20 p-5 rounded-2xl">
              <div className="text-blue-700 text-3xl">12M+</div>
              <div className="">Leads and sales generated for clients</div>
            </div>
            <div className="w-30 mx-20 bg-white my-20 p-5 rounded-2xl">
              <div className="text-blue-700 text-3xl">4</div>
              <div className="">Influence Marketing Managers</div>
            </div>
            <div className="w-30 mx-20 bg-white my-20 p-5 rounded-2xl">
              <div className="text-blue-700 text-3xl">120+</div>
              <div className="">Happy clients with always-on campaigns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntro;
