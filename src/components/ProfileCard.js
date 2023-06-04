import React from 'react';

const ProfileCard = ({ profile, onConnect, onUpvote, onMessage, onViewProfile }) => {
  const { username, name, techStack, github, linkedin, instagram, hashnode } = profile;

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600">@{username}</p>
        </div>
        <div className="p-4">
          <h3 className="text-md font-bold mb-2">Tech Stack</h3>
          <div className="flex space-x-2">
            {techStack.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
          <button
            onClick={onConnect}
            className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold"
          >
            Connect
          </button>
          <div className="flex space-x-2">
            <button
              onClick={onUpvote}
              className="px-2 py-1 rounded-full bg-green-500 text-white text-xs font-semibold"
            >
              Upvote
            </button>
            <button
              onClick={onMessage}
              className="px-2 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold"
            >
              Message
            </button>
            <button
              onClick={onViewProfile}
              className="px-2 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold"
            >
              View Profile
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-md font-bold mb-2">Social Links</h3>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              LinkedIn
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Instagram
            </a>
          )}
          {hashnode && (
            <a href={hashnode} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Hashnode
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
