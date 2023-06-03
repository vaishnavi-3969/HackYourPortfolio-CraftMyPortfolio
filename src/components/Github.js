import React, { useEffect, useState } from 'react';

const GitHub = () => {
  const [projects, setProjects] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    // Fetch GitHub data and update state
    fetch('https://api.github.com/users/{username}/repos')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));

    fetch('https://api.github.com/users/{username}/orgs')
      .then((response) => response.json())
      .then((data) => setOrganizations(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>GitHub</h2>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
      <h3>Organizations</h3>
      <ul>
        {organizations.map((organization) => (
          <li key={organization.id}>{organization.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHub;
