import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitHub = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGitHubData();
  };

  const fetchGitHubData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const data = response.data;
      setUserData(data);
    } catch (error) {
      console.log('Error fetching GitHub data:', error);
    }
  };

  if (!userData) {
    return (
      <div className="github-portfolio">
        <h2 className="text-4xl font-bold mb-4">GitHub Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your GitHub username:
            <input type="text" value={username} onChange={handleChange} />
          </label>
          <button type="submit">Fetch Data</button>
        </form>
      </div>
    );
  }

  return (
    <div className="github-portfolio">
      <h2 className="text-4xl font-bold mb-4">GitHub Portfolio</h2>
      <div className="profile">
        <h3 className="text-2xl font-bold">Profile</h3>
        <div className="profile-info">
          <img src={userData.avatar_url} alt="Profile Avatar" className="avatar" />
          <div>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Username:</strong> {userData.login}
            </p>
            <p>
              <strong>Bio:</strong> {userData.bio}
            </p>
            <p>
              <strong>Followers:</strong> {userData.followers}
            </p>
            <p>
              <strong>Following:</strong> {userData.following}
            </p>
          </div>
        </div>
      </div>

      <div className="repositories">
        <h3 className="text-2xl font-bold">Repositories</h3>
        <ul>
          {userData.public_repos > 0 ? (
            userData.repositories?.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))
          ) : (
            <li>No repositories found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GitHub;
