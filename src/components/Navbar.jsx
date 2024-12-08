import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg py-2 mx-5">
      <div className="container mx-auto py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold text-gray-800">
          Home<span className="text-green-700">Care</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 gap-10">
          <ul className="flex space-x-6 text-gray-700 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-700' : 'text-gray-700'}`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-700' : 'text-gray-700'}`
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-700' : 'text-gray-700'}`
                }>
                Services
              </NavLink>
            </li>
          </ul>

          {/* Contact Button */}
          <div>
            <Link to="/contact">
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg py-4">
          <ul className="space-y-4 text-gray-700 font-semibold px-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-700' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-700' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-700' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}>
                Services
              </NavLink>
            </li>
          </ul>
          <div className="mt-4 px-4">
            <Link to="/contact">
              <button
                className="bg-black text-white px-6 py-2 rounded-lg w-full"
                onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
