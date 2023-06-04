import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const OpenSourceProject = () => {
  const [projects, setProjects] = useState([]);
  const [showRequestDialog, setShowRequestDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectList = querySnapshot.docs.map((doc) => doc.data());
      setProjects(projectList);
    } catch (error) {
      console.log('Error fetching projects from Firestore:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleRequestJoin = (project) => {
    setSelectedProject(project);
    setShowRequestDialog(true);
  };

  const handleAddProject = () => {
    window.location.href = '/newProjectForm';
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
      {showRequestDialog && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white w-96 rounded-lg shadow-xl p-8">
            <h2 className="text-xl font-bold mb-4">Request to Join</h2>
            <p className="text-gray-600 mb-4">Send a request to join the project:</p>
            <button
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => setShowRequestDialog(false)}
            >
              Send Request
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Skills: {project.skills}</p>
              <button
                className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => handleRequestJoin(project)}
              >
                Request to Join
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2">Users Working on this Project:</h3>
              <ul className="list-disc pl-6">
                {project.users && project.users.map((user, index) => <li key={index}>{user}</li>)}
              </ul>
            </div>
          </div>
        ))}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
          <button
            className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            onClick={handleAddProject}
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceProject;
