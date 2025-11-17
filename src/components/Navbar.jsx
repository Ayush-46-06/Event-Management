import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      hasDropdown: true,
      dropdown: [
        { label: "About", path: "/about" },
        { label: "FAQ", path: "/faq" },
        { label: "Testimonial", path: "/testimonial" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      name: "Events",
      hasDropdown: true,
      dropdown: [
        { label: "Cultural Events", path: "/event/cultural" },
        { label: "Corporate Events", path: "/event/corporateevents" },
        { label: "Wedding", path: "/event/wedding" },
        { label: "Upcoming Events", path: "/event/upcoming" },
      ],
    },
    {
      name: "Dashboard",
      path: "/products",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] bg-white/80 backdrop-blur-xl border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 hover:shadow-[0_8px_40px_rgba(255,105,0,0.25)] overflow-visible">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/images/logo.png"
          alt="Graphura Logo"
          className="h-9 w-auto object-contain hover:scale-110 transition-transform duration-300"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 relative overflow-visible">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div key={link.name} className="relative group">
              {/* Dropdown trigger */}
              <button className="flex items-center text-gray-800 font-semibold text-sm tracking-wide hover:text-indigo-600 transition duration-300">
                {link.name}
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              {/* Dropdown menu */}
              <div className="absolute left-0 top-full mt-3 w-56 bg-white/90 backdrop-blur-md border border-gray-100 rounded-xl shadow-lg py-3 flex flex-col opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-[100]">
                {link.dropdown.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-200"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-gray-800 font-semibold text-sm tracking-wide hover:text-indigo-600 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300 ${
                  isActive ? "text-indigo-600 after:w-full" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          )
        )}

        {/* Book Now Button */}
        <Link
          to="/booking"
          className="ml-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Book Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 hover:text-indigo-600 transition duration-300"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white/90 backdrop-blur-xl shadow-lg rounded-2xl py-6 flex flex-col items-center space-y-4 transition-all duration-500 z-[99]">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <details
                key={link.name}
                className="w-full flex flex-col items-center open:bg-indigo-50 rounded-md"
              >
                <summary className="flex items-center justify-center cursor-pointer text-gray-700 font-semibold hover:text-indigo-600 transition duration-300 list-none">
                  {link.name}
                  <ChevronDown size={18} className="ml-1" />
                </summary>
                <div className="mt-2 flex flex-col space-y-2">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 hover:text-indigo-600 text-sm transition"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </details>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-gray-700 font-semibold hover:text-indigo-600 transition duration-300 ${
                    isActive ? "text-indigo-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          {/* Book Now (Mobile) */}
          <Link
            to="/booking"
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
