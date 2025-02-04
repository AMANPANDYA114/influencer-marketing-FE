

import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12">
        {/* Column 1: Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Hybox</h2>
          <p className="text-sm mb-4">
            HYPBOX  helps brands connect with micro-influencers to drive sales and build brand awareness. Pay only for results.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-yellow-500"><FaLinkedin size={24} /></a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="/BrandIntro" className="hover:underline">Brand Introduction</a></li>
            <li><a href="/InfluencerIntro" className="hover:underline">Influencer Introduction</a></li>
            <li><a href="/Pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/FAQs" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3: Additional Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">More Links</h3>
          <ul className="space-y-2">
            <li><a href="/AboutUs" className="hover:underline">About Us</a></li>
            <li><a href="/Careers" className="hover:underline">Careers</a></li>
            <li><a href="/Blog" className="hover:underline">Blog</a></li>
            <li><a href="/Contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Contact or Other Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">123 Marketing Lane, City, Country</p>
          <p className="text-sm my-2">Email: support@adcosign.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright text-center py-3 text-black">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#" target="_blank" className="text-bold" style={{ color: "black" }}>
            Adcosign.com
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;



