import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Parrot from '../assets/parrot.png';

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
const db = getFirestore(app);

const UserForm = () => {
  const { user, isLoading } = useAuth0();
  const [briefBio, setBriefBio] = useState('');
  const [username, setUsername] = useState('');
  const [techStack, setTechStack] = useState([]);
  const [techStackInput, setTechStackInput] = useState('');
  const [name,setName] = useState('');
    
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, 'users'), {
      username,
      name,
      briefBio,
      techStack,
    });

    console.log('Form submitted');
    console.log('Username:', username);
    console.log('Name:', user.name);
    console.log('Brief Bio:', briefBio);
    console.log('Tech Stack:', techStack.join(', '));
    console.log('Document written with ID: ', docRef.id);
    
  };

  const handleAddTechStack = () => {
    if (techStackInput.trim() !== '') {
      setTechStack([...techStack, techStackInput]);
      setTechStackInput('');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-100">
      <img src={Parrot} alt="parrot" />
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {user ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Hey Junior Pirate! Let's fill this to be a part of an amazing journey and conquer the entire Tresure Land
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-1">
                  Github Username:
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bio" className="block mb-1">
                  Brief Bio:
                </label>
                <textarea
                  id="bio"
                  value={briefBio}
                  onChange={(e) => setBriefBio(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="profileTag" className="block mb-1">
                  Tech Stack:
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="profileTag"
                    value={techStackInput}
                    onChange={(e) => setTechStackInput(e.target.value)}
                    className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddTechStack}
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add
                  </button>
                </div>
                <ul className="mt-2">
                  {techStack.map((item, index) => (
                    <li
                      key={index}
                      className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Profile
              </button>
            </form>
          </>
        ) : (
          <div>Please log in to access the form.</div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
