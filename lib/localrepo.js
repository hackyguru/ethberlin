export const saveRepository = (repo) => {
    const repositories = JSON.parse(localStorage.getItem('repositories')) || [];
    repositories.push(repo);
    localStorage.setItem('repositories', JSON.stringify(repositories));
  };
  
  export const getRepositories = () => {
    const repositories = JSON.parse(localStorage.getItem('repositories')) || [];
    return repositories;
  };