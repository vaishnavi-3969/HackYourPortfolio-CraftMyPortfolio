import React from 'react';
import { FaHome, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white flex items-center">
              Craft My Portfolio
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Home
            </a>
            <a
              href="/"
              className="text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Projects
            </a>
            <a
              href="/"
              className="text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              About
            </a>
            <a
              href="/"
              className="text-white hover:bg-yellow-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Contact
            </a>
            {isAuthenticated && (
              <p>
                <a href="/profile" className="text-white hover:text-blue-200">
                  <FaUserCircle className="nav-icon inline-block mr-1" />
                  {user.name}
                </a>
              </p>
            )}
            {isAuthenticated ? (
              <>
                <Button
                  className="login-button text-white animate__animated animate__fadeIn"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  <FaSignOutAlt className="logout-icon" />
                </Button>
              </>
            ) : (
              <Button
                className="login-button text-white animate__animated animate__fadeIn"
                onClick={() => loginWithRedirect()}
              >
                <FaUserCircle className="login-icon inline-block mr-1" color='white'/>
                Log In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
