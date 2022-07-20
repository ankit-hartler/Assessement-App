import React, { useEffect, useState } from 'react'
import { getRepositories } from '../services/repositoryService';

const RepositoryList = () => {
  const [repoList, setRepoList] = useState([]);
  useEffect(() => {
    repository();
  }, []);

  const repository = async () => {
    const { edges } = await getRepositories();
    setRepoList(edges);
  };
  
  return (
    <div>
      <h2>List of public repositories</h2>
    </div>
  )
}

export default RepositoryList