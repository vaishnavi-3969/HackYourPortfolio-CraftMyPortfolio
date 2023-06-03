import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white flex items-center">
              Craft My Portfolio
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="text-gray-300 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Home
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Projects
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              About
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white hover:bg-yellow-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
