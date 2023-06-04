import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import ProfileCard from './ProfileCard';
import { initializeApp } from 'firebase/app';

const ProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "hackathon-c9376.firebaseapp.com",
    databaseURL: "https://hackathon-c9376-default-rtdb.firebaseio.com",
    projectId: "hackathon-c9376",
    storageBucket: "hackathon-c9376.appspot.com",
    messagingSenderId: "751812655538",
    appId: "1:751812655538:web:c61a458c22cf130e740cab",
    measurementId: "G-XLD119ZCQY"
  };

  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const db = getFirestore(app);
    const profilesCollection = collection(db, 'users');
    const querySnapshot = await getDocs(profilesCollection);
    const profilesData = querySnapshot.docs.map((doc) => doc.data());
    setProfiles(profilesData);
    setFilteredProfiles(profilesData);
  };

  const handleTagFilter = (tag) => {
    if (filterTags.includes(tag)) {
      const updatedTags = filterTags.filter((t) => t !== tag);
      setFilterTags(updatedTags);
    } else {
      setFilterTags([...filterTags, tag]);
    }
  };

  useEffect(() => {
    const filteredProfiles = profiles.filter((profile) =>
      filterTags.every((tag) => profile.techStack.includes(tag))
    );
    setFilteredProfiles(filteredProfiles);
  }, [filterTags, profiles]);

  const handleConnect = (profile) => {
    window.location.href = `/portfolio/${profile.username}`;
  };

  const handleUpvote = (profile) => {
    console.log('Upvoting', profile.username);
  };

  const handleMessage = (profile) => {
    console.log('Messaging', profile.username);
  };

  const handleViewProfile = (profile) => {
    console.log('Viewing profile of', profile.username);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.username}
            profile={profile}
            onConnect={() => handleConnect(profile)}
            onUpvote={() => handleUpvote(profile)}
            onMessage={() => handleMessage(profile)}
            onViewProfile={() => handleViewProfile(profile)}
          />
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Filter Profiles</h2>
        <div className="flex space-x-2">
          {Array.from(new Set(profiles.flatMap((profile) => profile.techStack))).map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagFilter(tag)}
              className={`px-4 py-2 rounded-full ${
                filterTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesList;
