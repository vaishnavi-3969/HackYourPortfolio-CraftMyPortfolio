import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Parrot from '../assets/parrot.png';

const NewProjectForm = () => {
  const [projectData, setProjectData] = useState({ title: '', description: '', skills: '' });

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

  const handleInputChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    alert("Congratulations! Project Added");
    e.preventDefault();
    saveProjectToDatabase();
    setProjectData({ title: '', description: '', skills: '' });
  };

  const saveProjectToDatabase = async () => {
    try {
      await addDoc(collection(db, 'projects'), projectData);
      console.log('Project added to Firestore');
    } catch (error) {
      console.log('Error adding project to Firestore:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white w-96 rounded-lg shadow-xl p-8">
        <div className="flex items-center mb-6">
          <img src={Parrot} alt="Parrot" className="w-12 h-12 mr-3" />
          <h2 className="text-2xl font-bold">Start a New Project</h2>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="text-sm font-medium text-gray-700 block mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={projectData.title}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-sm font-medium text-gray-700 block mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={projectData.description}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full h-24 resize-none"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="skills" className="text-sm font-medium text-gray-700 block mb-1">
              Skills:
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={projectData.skills}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProjectForm;