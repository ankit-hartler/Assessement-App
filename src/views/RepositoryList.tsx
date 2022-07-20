import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import RepositoryTable from '../components/RepositoryTable';
import { getRepositories } from '../services/repositoryService';
import { repository } from '../types';

const RepositoryList = () => {
  const [repoList, setRepoList] = useState([]);
  const [repoName, setRepoName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    repository('is:public');
  }, []);

  const repository = async (query: string) => {
    setLoading(true);
    const { edges } = await getRepositories(query);
    const modifiedList = edges.map((ele: repository) => ({ ...ele.node }))
    setRepoList(modifiedList);
    setLoading(false);
  };

  const handleSearch = () => {
    const query = `is:public keyword:${repoName}`;
    repository(query);
  }

  return (
    <div>
      <h2>List of public repositories</h2>
      <div><Input placeholder='Search by repository name' value={repoName} onChange={(evt) => setRepoName(evt.target.value)} /> <Button onClick={() => handleSearch()} >Search</Button> </div>
      <RepositoryTable list={repoList} loading={loading} />
    </div>
  )
}

export default RepositoryList