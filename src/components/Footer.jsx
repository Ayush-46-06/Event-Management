import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/70 text-black pt-16 pb-10 relative rounded-lg overflow-hidden rounded-2xl  hover:shadow-[0_8px_40px_rgba(255,105,0,0.25)]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <img
            src="/images/logo.png"
            alt="Graphura Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm mb-6 leading-relaxed">
            Early take-off offers valuable learning prospects in high-end
            growth sectors.
          </p>

          <div className="space-y-3 text-sm">
            

            <div className="flex items-center space-x-3">
              <div className="bg-yellow-500 p-2 rounded-full">
                <FaEnvelope className="text-white" />
              </div>
              <p>
                Email us any time: <br />
                <span className="text-black font-semibold">
                  Official@graphura.in
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-blue-500 after:mt-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Our Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/policy"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Internship Policy
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-blue-500 after:mt-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/domains"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Our Domains
              </Link>
            </li>
            <li>
              <Link
                to="/verify"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Verify Interns
              </Link>
            </li>
            <li>
              <Link
                to="/intern"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Intern Corner
              </Link>
            </li>
            <li>
              <Link
                to="/sitemap"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> Site Map
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <FaArrowRight size={12} /> FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-blue-500 after:mt-1">
            Newsletter
          </h3>
          <p className="text-sm mb-4">
            Stay updated with internship openings, training workshops, and
            career opportunities.
          </p>

          <div className="flex bg-white rounded-full overflow-hidden mb-5">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-4 py-2 text-sm text-gray-700 outline-none"
            />
            <button className="bg-blue-500 hover:bg-yellow-600 text-white px-4 flex items-center justify-center transition">
              <FaPaperPlane size={16} />
            </button>
          </div>

          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#064e43] mt-10 py-4">
        <p className="text-center text-sm text-gray-200">
          Copyright © 2025{" "}
          <span className="text-blue-400 font-semibold">
            Graphura India Private Limited
          </span>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
