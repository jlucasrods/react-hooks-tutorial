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

  const handleFavorite = (repoId) => {
    setRepos(repos.map(repo => {
      return repo.id === repoId 
        ? { ...repo,  favorite: !repo.favorite} 
        : repo
    }));
  }

  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span>[FAVORITO]</span>}
        <button onClick={() => handleFavorite(repo.id)}> S2 </button>
        </li>
      ))}
    </ul>
  );
}