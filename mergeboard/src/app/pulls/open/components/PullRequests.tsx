import { getLastPullRequestEvent } from "@/app/actions/getPullRequestLastEvent";
import { getPullRequests } from "@/app/actions/getPullRequests";
import { PullRequest } from "@/app/components/pullRequest";
import { DEFAULT_REPO } from "@/app/constants";

export default async function PullRequests() {
  const pullsWithEvents: (Awaited<
    ReturnType<typeof getPullRequests>
  >[number] & { lastEvent?: string })[] = [];

  const pulls = await getPullRequests({
    owner: DEFAULT_REPO.owner,
    repo: DEFAULT_REPO.repo,
    state: "open",
  });

  await Promise.all(
    pulls.map(async (pr) => {
      const lastEvent = await getLastPullRequestEvent({
        owner: DEFAULT_REPO.owner,
        repo: DEFAULT_REPO.repo,
        pull_number: pr.number,
      });

      pullsWithEvents.push({ ...pr, lastEvent });
    })
  );

  return pullsWithEvents.map((pull) => (
    <PullRequest
      key={pull.id}
      PRNumber={pull.number}
      title={pull.title}
      CreatedBy={pull.user?.login || "Unknown"}
      CreatedAt={pull.created_at}
      status={pull.state as "open" | "closed"}
      url={pull.html_url}
      reviewers={pull.requested_reviewers?.map((reviewer) => reviewer.login)}
      lastEvent={pull.lastEvent}
    />
  ));
}
