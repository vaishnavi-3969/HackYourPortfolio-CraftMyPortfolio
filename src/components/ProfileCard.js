import React, { useState, useEffect } from 'react';

const ProfileCard = ({ profile, onConnect, onUpvote, onMessage, onViewProfile }) => {
  const { username, name, techStack, github, linkedin, instagram, hashnode } = profile;
  const [profilePhoto, setProfilePhoto] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  const fetchProfileDetails = async () => {
    const githubUsername = username;
    try {
      const response = await fetch(`https://api.github.com/users/${githubUsername}`);
      if (response.ok) {
        const data = await response.json();
        setProfilePhoto(data.avatar_url);
        setBio(data.bio);
      } else {
        throw new Error('Failed to fetch profile details');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-700 p-4">
          <h2 className="text-lg font-bold text-white">{name}</h2>
          <p className="text-gray-200">@{username}</p>
        </div>
        <div className="p-4">
          <img
            src={profilePhoto || 'https://randomuser.me/api/portraits/women/1.jpg'}
            alt="Profile"
            className="rounded-full h-20 w-20 mx-auto mb-4"
          />
          <p className="text-gray-800 text-center">{bio || 'No bio available'}</p>
          <h3 className="text-md font-bold mb-2 text-blue-700">Tech Stack</h3>
          <div className="flex space-x-2">
            {techStack.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-2 bg-blue-200">
          <button
            onClick={onConnect}
            className="px-4 py-2 rounded-full bg-yellow-500 text-white text-sm font-semibold"
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
          <h3 className="text-md font-bold mb-2 text-blue-700">Social Links</h3>
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
