import React, { useState } from "react";
import { FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import "./UserForm";
import "./Github";
import UserForm from "./UserForm";
import Github from "./Github";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [showUserForm, setShowUserForm] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);

  const handleUserFormClick = () => {
    setShowUserForm(true);
    setShowGitHub(false);
  };

  const handleGitHubClick = () => {
    setShowUserForm(false);
    setShowGitHub(true);
  };

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
            <Link
              to="/home"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="/github"
              className="text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Try Generator
            </Link>
            <Link
              href="/profilesList"
              className="text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Connect
            </Link>
            <Link
              to="/projects"
              className="text-white hover:bg-yellow-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Collaborate
            </Link>
            <Link
              to="/learningResources"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Learn
            </Link>
            <Link
              to="/testimonials"
              className="text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Testimonials
            </Link>
            <Link
              to="/showcase"
              className="text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Events
            </Link>
            <Link
              to="/progressTracker"
              className="text-white hover:bg-yellow-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Progress Tracker
            </Link>
            <Link
              to="/interactiveQuizzes"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Quiz
            </Link>
            <Link
              to="/resourceLibrary"
              className="text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Library
            </Link>
            <Link
              to="/communityForum"
              className="text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Forum
            </Link>
            {isAuthenticated && (
              <p>
                <Link
                  to="/userform"
                  className="text-white hover:text-blue-200"
                  onClick={handleUserFormClick}
                >
                  <FaUserCircle
                    className="nav-icon inline-block mr-1"
                    color="white"
                  />
                  {user.name}
                </Link>
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
                <FaUserCircle className="login-icon inline-block mr-1" />
                Log In
              </Button>
            )}
          </div>
        </div>
      </div>
      {isAuthenticated && (
        <div className="container mx-auto px-8 py-4">
          {showUserForm && <UserForm />}
          {showGitHub && <Github />}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
