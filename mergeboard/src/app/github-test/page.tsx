"use client"

import { useEffect, useState } from "react";


interface Repo {
  id: number;
  name: string;
}

export default function GithubTest() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("/api/github")
    .then((res)=> res.json())
    .then((data) =>setRepos(data));
  }, []);

  return (
    <div>
      <h1>My Github Repos</h1>
      <ul>
        {repos.map((repo) => (
          <li key = {repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

