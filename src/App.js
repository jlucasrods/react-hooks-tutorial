import { useState, useEffect } from 'react';

export default function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch('https://api.github.com/users/jlucasrods/repos');
      setRepos(await response.json());
    }
    fetchRepos();
  }, []);

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}