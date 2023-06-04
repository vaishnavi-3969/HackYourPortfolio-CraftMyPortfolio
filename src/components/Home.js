import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-800 h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-white mb-8">Craft My Portfolio</h1>
      <p className="text-white text-xl mb-16">Unleash Your Creativity and Showcase Your Skills</p>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/userform" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg transition-colors">
          Create Your Portfolio
        </Link>
        <Link to="/learningResources" className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-4 px-8 rounded-lg transition-colors">
          Explore Learning Resources
        </Link>
      </div>
      <div className="mt-16">
        <Link to="/testimonials" className="text-white font-medium underline">
          See What Others Are Saying
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/communityForum" className="text-white font-medium underline">
          Join Our Community Forum
        </Link>
      </div>
    </div>
  );
};

export default Home;
