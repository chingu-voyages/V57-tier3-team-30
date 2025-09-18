import { getPullRequests } from "@/app/actions/getPullRequests";
import { DEFAULT_REPO } from "@/app/constants";

export default async function GithubTest() {
  const pulls = await getPullRequests({
    state: "closed",
    owner: DEFAULT_REPO.owner,
    repo: DEFAULT_REPO.repo,
  });
  return (
    <div>
      <h1>My Github Repos</h1>
      <ul>
        {pulls.map((pull) => (
          <li key={pull.id}>
            <a href={pull.html_url} target="_blank" rel="noopener noreferrer">
              {pull.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
