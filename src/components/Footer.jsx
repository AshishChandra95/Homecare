import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">Home<span className="text-green-500">Care</span></h2>
            <p className="text-gray-400 mt-2">
              Making your home care easier and more efficient. Trust us to handle it all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-green-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-green-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-green-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-green-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12v-9.294H9.579v-3.622H12V8.413c0-2.406 1.469-3.722 3.62-3.722 1.028 0 1.912.076 2.168.11v2.517h-1.487c-1.163 0-1.387.553-1.387 1.364v1.785h2.769l-.362 3.622h-2.407V24h4.72c.732 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.196 4.917 4.917 0 00-8.379 4.482A13.944 13.944 0 011.671 3.149a4.917 4.917 0 001.523 6.573 4.897 4.897 0 01-2.228-.616v.062a4.917 4.917 0 003.946 4.827 4.897 4.897 0 01-2.224.084 4.917 4.917 0 004.598 3.417A9.867 9.867 0 010 21.539a13.94 13.94 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.637A9.993 9.993 0 0024 4.557z" />
                </svg>
              </a>
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-400">&copy; 2024 HomeCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
