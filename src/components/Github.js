import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const GitHub = () => {
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

  const renderLanguageChart = () => {
    const languageData = repoData.reduce((acc, repo) => {
      const { language } = repo;
      if (language) {
        if (acc[language]) {
          acc[language]++;
        } else {
          acc[language] = 1;
        }
      }
      return acc;
    }, {});

    const chartData = Object.keys(languageData).map((language) => ({
      name: language,
      value: languageData[language],
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF00DD'];

    return (
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h4 className="text-xl font-semibold mb-4">Languages Used</h4>
        <PieChart width={400} height={300}>
          <Pie
            data={chartData}
            cx={200}
            cy={150}
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(2)}%`}
            outerRadius={80}
            fill="#8884d8"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const sharedUser = queryParams.get('user');
    if (sharedUser) {
      setUsername(sharedUser);
      fetchGitHubData();
    }
  }, []);

  useEffect(() => {
    const url = `${window.location.origin}${window.location.pathname}?user=${username}`;
    setShareableLink(url);
  }, [username]);

  return (
    <div className="github-portfolio mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">GitHub Portfolio</h2>
      <form className="mb-4" onSubmit={handleSubmit}>
        <label htmlFor="username" className="mr-2">
          GitHub Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter a GitHub username..."
          className="border border-gray-300 rounded-md px-2 py-1"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 ml-2 rounded-md">
          Search
        </button>
      </form>

      {userData && (
        <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md p-4 mb-4">
          <div className="flex items-center mb-4">
            <img src={userData.avatar_url} alt="User Avatar" className="w-12 h-12 rounded-full mr-2" />
            <h3 className="text-xl font-semibold">{userData.name || userData.login}</h3>
          </div>
          <p>{userData.bio || 'No bio provided.'}</p>
          <p className="text-gray-500">
            <strong>Followers:</strong> {userData.followers} | <strong>Following:</strong> {userData.following}
          </p>
          <p>
            <strong>Public Repositories:</strong> {userData.public_repos} | <strong>Public Gists:</strong> {userData.public_gists}
          </p>
          <p>
            <strong>Location:</strong> {userData.location || 'Not specified'}
          </p>
          <p>
            <strong>Member Since:</strong> {formatDistanceToNow(new Date(userData.created_at), { addSuffix: true })}
          </p>
          <p>
            <strong>GitHub Profile:</strong>{' '}
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {userData.html_url}
            </a>
          </p>
        </div>
      )}

      {repoData.length > 0 && (
        <div>
          {renderRepoCards()}
          {renderCommitChart()}
          {renderLanguageChart()}
        </div>
      )}

      {shareableLink && (
        <div className="bg-white rounded-md shadow-md p-4">
          <h4 className="text-xl font-semibold mb-2">Shareable Link</h4>
          <input
            type="text"
            value={shareableLink}
            readOnly
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
      )}
    </div>
  );
};

export default GitHub;
