import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const GitHub = ({githuUserName}) => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [shareableLink, setShareableLink] = useState('');
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
      <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-4 mb-4" key={repo.id}>
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

  const renderCollaborationChart = () => {
    const collaboratorsData = repoData.map((repo) => ({
      name: repo.name,
      collaborators: repo.collaborators || 0,
    }));

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h4 className="text-xl font-semibold mb-4">Collaborators per Repository</h4>
        <BarChart width={600} height={300} data={collaboratorsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="collaborators" fill="#8884d8" />
        </BarChart>
      </div>
    );
  };

  const renderCommitGraph = () => {
    const data = [
      { name: 'Jan', commits: 10 },
      { name: 'Feb', commits: 8 },
      { name: 'Mar', commits: 12 },
      { name: 'Apr', commits: 15 },
      { name: 'May', commits: 20 },
      { name: 'Jun', commits: 18 },
      { name: 'Jul', commits: 25 },
      { name: 'Aug', commits: 22 },
      { name: 'Sep', commits: 28 },
      { name: 'Oct', commits: 30 },
      { name: 'Nov', commits: 35 },
      { name: 'Dec', commits: 32 },
    ];

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h4 className="text-xl font-semibold mb-4">Commits per Month</h4>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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

  const renderTimeSpentChart = () => {
    const data = [
      { name: 'Project 1', time: 20 },
      { name: 'Project 2', time: 25 },
      { name: 'Project 3', time: 18 },
      { name: 'Project 4', time: 15 },
      { name: 'Project 5', time: 22 },
    ];

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h4 className="text-xl font-semibold mb-4">Time Spent per Project</h4>
        <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="time" fill="#8884d8" />
        </BarChart>
      </div>
    );
  };

  const renderBadgeChart = () => {
    const data = [
      { name: 'Bronze', value: 10 },
      { name: 'Silver', value: 5 },
      { name: 'Gold', value: 2 },
    ];

    const COLORS = ['#FFD700', '#C0C0C0', '#CD7F32'];

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h4 className="text-xl font-semibold mb-4">Badges Earned</h4>
        <PieChart width={600} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
  };

  if (!userData) {
    return (
      <div className="github-portfolio mx-auto p-4">
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Fetch Data
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="github-portfolio mx-auto p-4">
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
      <div className="repositories mb-8">
        <h3 className="text-2xl font-bold mb-4">Repositories</h3>
        {renderRepoCards()}
      </div>
      {repoData.length > 0 && (
        <div className="statistics">
          <h3 className="text-2xl font-bold mb-4">Statistics</h3>
          {renderCommitChart()}
          {renderCollaborationChart()}
          {renderCommitGraph()}
          {renderTimeSpentChart()}
          {renderBadgeChart()}
        </div>
      )}
  
      <div className="share-button">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          
        >
          Generate Shareable Link
        </button>
        </div>
    </div>
    
  );
};

export default GitHub;
