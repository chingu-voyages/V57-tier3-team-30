import { getPullRequests } from "@/app/actions/getPullRequests";
import { PullRequest } from "@/app/components/pullRequest";

export default async function GithubTest() {
  const pulls = await getPullRequests({
    state: "open",
  });
  console.log(pulls);

  return (
    <div>
      <h1>My Github Repos</h1>
      <ul>
        {pulls.data.map((pull) => (
          <PullRequest
            key={pull.id}
            PRNumber={pull.number}
            title={pull.title}
            CreatedBy={pull.user?.login || "Unknown"}
            CreatedAt={pull.created_at}
            status={pull.state as "open" | "closed"}
            url={pull.html_url}
            reviewers={pull.requested_reviewers?.map(
              (reviewer) => reviewer.login
            )}
          />
        ))}
      </ul>
    </div>
  );
}
