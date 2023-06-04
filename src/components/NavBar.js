import React,{useState} from 'react';
import { FaHome, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import './UserForm';
import './Github';
import UserForm from './UserForm';
import Github from './Github';

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
            <a
              href="/home"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Home
            </a>
            <a
              href="/github"
              className="text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
            Try Generator
            </a>
            <a
              href="/profilesList"
              className="text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Connect
            </a>
            <a
              href="/projects"
              className="text-white hover:bg-yellow-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Collaborate
            </a>
            <a
              href="/learningResources"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Learn
            </a>
            <a
              href="/testimonials"
              className="text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Testimonials
            </a>
            <a
              href="/showcase"
              className="text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Events
            </a>
            <a
              href="/progressTracker"
              className="text-white hover:bg-yellow-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Progress Tracker
            </a>
            <a
              href="/interactiveQuizzes"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Quiz
            </a>
            <a
              href="/resourceLibrary"
              className="text-white hover:bg-green-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Library
            </a>
            <a
              href="/communityForum"
              className="text-white hover:bg-purple-500 px-4 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Forum
            </a>
           {isAuthenticated && (
              <p>
                <a
                  href="/userform"
                  className="text-white hover:text-blue-200"
                  onClick={handleUserFormClick}
                >
                  <FaUserCircle className="nav-icon inline-block mr-1" color='white'/>
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
