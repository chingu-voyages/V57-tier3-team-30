import { getPullRequests } from "@/app/actions/getPullRequests";



export default async function GithubTest() {

  const pulls = await getPullRequests({
    state: "open"
  });
  return (
    <div>
      <h1>My Github Repos</h1>
      <ul>
        {pulls.data.map((pull) => (
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

