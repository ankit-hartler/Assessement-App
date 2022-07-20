import React, { useEffect, useState } from 'react'
import RepositoryTable from '../components/RepositoryTable';
import { getRepositories } from '../services/repositoryService';
import {  repository } from '../types';

const RepositoryList = () => {
  const [repoList, setRepoList] = useState([]);
  useEffect(() => {
    repository();
  }, []);

  const repository = async () => {
    const { edges } = await getRepositories();
    const modifiedList = edges.map((ele: repository) => ({...ele.node}))
    setRepoList(modifiedList);
  };
  
  return (
    <div>
      <h2>List of public repositories</h2>
     <RepositoryTable list={repoList} />
    </div>
  )
}

export default RepositoryList