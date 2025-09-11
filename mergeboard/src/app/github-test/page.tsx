import { getRepos } from "../actions/getRepos";


interface Repo {
  id: number;
  name: string;
}

export default async function GithubTest() {
   const repos: Repo[] = await getRepos();
 
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

