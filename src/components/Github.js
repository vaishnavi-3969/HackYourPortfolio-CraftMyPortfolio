import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GitHub = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);

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
      fetchRepoData(data.login);
    } catch (error) {
      console.log('Error fetching GitHub data:', error);
    }
  };

  const fetchRepoData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const data = response.data;
      setRepoData(data);
    } catch (error) {
      console.log('Error fetching repository data:', error);
    }
  };

  const renderRepoCards = () => {
    return repoData.map((repo) => (
      <div className="bg-white rounded-md shadow-md p-4 mb-4" key={repo.id}>
        <h4 className="text-xl font-semibold mb-2">{repo.name}</h4>
        <p className="text-gray-500">{repo.description}</p>
        <div className="flex justify-between mt-4">
          <div>
            <p>
              <strong>Language:</strong> {repo.language || 'Not specified'}
            </p>
            <p>
              <strong>Stars:</strong> {repo.stargazers_count}
            </p>
            <p>
              <strong>Watchers:</strong> {repo.watchers_count}
            </p>
            <p>
              <strong>Forks:</strong> {repo.forks_count}
            </p>
          </div>
          <div>
            <p>
              <strong>Last Updated:</strong> {formatDistanceToNow(new Date(repo.updated_at), { addSuffix: true })}
            </p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    ));
  };

  const renderCommitChart = () => {
    const chartData = repoData.map((repo) => ({
      name: repo.name,
      commits: repo.commits || 0,
    }));

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h4 className="text-xl font-semibold mb-4">Commits per Repository</h4>
        <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="commits" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    );
  };

  if (!userData) {
    return (
      <div className="github-portfolio">
        <h2 className="text-4xl font-bold mb-4">GitHub Portfolio</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="flex flex-col">
            <span className="text-lg font-semibold mb-2">Enter your GitHub username:</span>
            <input
              type="text"
              value={username}
              onChange={handleChange}
              className="border rounded-md py-2 px-3"
              required
            />
          </label>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            Fetch Data
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="github-portfolio">
      <h2 className="text-4xl font-bold mb-4">GitHub Portfolio</h2>
      <div className="profile mb-8">
        <h3 className="text-2xl font-bold">Profile</h3>
        <div className="profile-info flex items-center mt-4">
          <img src={userData.avatar_url} alt="Profile Avatar" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <p className="text-xl font-semibold">{userData.name}</p>
            <p className="text-gray-500">@{userData.login}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-4">{userData.bio}</p>
        <div className="flex mt-4">
          <div className="mr-8">
            <p className="font-semibold">{userData.followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="mr-8">
            <p className="font-semibold">{userData.following}</p>
            <p className="text-gray-500">Following</p>
          </div>
          <div>
            <p className="font-semibold">{repoData.length}</p>
            <p className="text-gray-500">Repositories</p>
          </div>
        </div>
      </div>

      {repoData.length > 0 && (
        <>
          {renderCommitChart()}
          <div className="repositories">
            <h3 className="text-2xl font-bold">Repositories</h3>
            {renderRepoCards()}
          </div>
        </>
      )}
    </div>
  );
};

export default GitHub;
