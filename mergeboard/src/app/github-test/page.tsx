import { getPullRequests } from "../actions/getPullRequests";
import { getRepos } from "../actions/getRepos";


interface Repo {
  id: number;
  name: string;
}

export default async function GithubTest() {
   const repos: Repo[] = await getRepos();
  const pulls = await getPullRequests();
  console.log(pulls.data);
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

