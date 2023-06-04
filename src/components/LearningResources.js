import React from 'react';
import achievement1 from '../assets/achievement1.png';
import achievement2 from '../assets/achievement2.png';
import achievement3 from '../assets/achievement3.png';

const LearningResources = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ahoy, Matey! Improve Your Portfolio Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Web Development Bootcamp</h3>
            <p className="text-gray-600 mb-4">Learn the essentials of web development and build stunning websites like a true pirate.</p>
            <a href="/" className="text-blue-500 font-medium hover:text-blue-700">Start Course</a>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">JavaScript for Pirates</h3>
            <p className="text-gray-600 mb-4">Unlock the power of JavaScript to sail through interactive web development.</p>
            <a href="/" className="text-blue-500 font-medium hover:text-blue-700">Start Course</a>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">CSS Styling Secrets</h3>
            <p className="text-gray-600 mb-4">Master the art of CSS to make your websites look shipshape and fancy.</p>
            <a href="/" className="text-blue-500 font-medium hover:text-blue-700">Start Course</a>
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Pirate Achievements</h3>
          <div className="flex space-x-6">
            <div className="flex items-center">
              <img src={achievement1} alt="Achievement" className="w-12 h-12" />
              <p className="text-gray-600 ml-2">Master of the High Seas</p>
            </div>
            
            <div className="flex items-center">
              <img src={achievement2} alt="Achievement" className="w-12 h-12" />
              <p className="text-gray-600 ml-2">Code Treasure Hunter</p>
            </div>
            
            <div className="flex items-center">
              <img src={achievement3} alt="Achievement" className="w-12 h-12" />
              <p className="text-gray-600 ml-2">CSS Buccaneer</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Pirate Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={achievement1} alt="Certification" className="w-32 h-32 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Certified Web Developer</h4>
              <p className="text-gray-600">Become a certified web developer and sail the seas of code with confidence.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={achievement3} alt="Certification" className="w-32 h-32 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">CSS Master</h4>
              <p className="text-gray-600">Earn the title of CSS Master and conquer the world of styling.</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={achievement2} alt="Certification" className="w-32 h-32 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">JavaScript Ninja</h4>
              <p className="text-gray-600">Prove your JavaScript skills and become a fearsome JavaScript Ninja.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningResources;
