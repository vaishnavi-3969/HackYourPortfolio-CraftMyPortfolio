import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: 'hackathon-c9376.firebaseapp.com',
  databaseURL: 'https://hackathon-c9376-default-rtdb.firebaseio.com',
  projectId: 'hackathon-c9376',
  storageBucket: 'hackathon-c9376.appspot.com',
  messagingSenderId: '751812655538',
  appId: '1:751812655538:web:c61a458c22cf130e740cab',
  measurementId: 'G-XLD119ZCQY'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PortfolioGenerator = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const usersCollectionRef = collection(db, 'users');
      const q = query(usersCollectionRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const data = querySnapshot.docs[0].data();
        setUserData(data);
      } else {
        // Handle case when user data doesn't exist
      }
    } catch (error) {
      console.error(error);
      // Handle error fetching user data
    }
  };

  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfo(event.target.value);
  };

  const saveAdditionalInfo = async () => {
    try {
      const usersCollectionRef = collection(db, 'users');
      const q = query(usersCollectionRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await docRef.update({ additionalInfo });
      } else {
        // Handle case when user data doesn't exist
      }
    } catch (error) {
      console.error(error);
      // Handle error saving additional info
    }
  };

  if (!userData) {
    return <p>Loading {username}...</p>;
  }

  const { name, email, techStack } = userData;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Portfolio Generator</h1>
      <h2 className="text-2xl font-bold mb-2">User: {username}</h2>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Name: {name}</h3>
          <p className="text-gray-500">Email: {email}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Tech Stack</h3>
          <ul className="list-disc list-inside">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Additional Info</h3>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="4"
            value={additionalInfo}
            onChange={handleAdditionalInfoChange}
            placeholder="Enter additional information"
          ></textarea>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
            onClick={saveAdditionalInfo}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGenerator;
