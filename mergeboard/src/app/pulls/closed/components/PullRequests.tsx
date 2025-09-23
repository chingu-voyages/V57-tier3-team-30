export const revalidate = 0; // no caching

import { getLastPullRequestEvent } from "@/app/actions/getPullRequestLastEvent";
import { getPullRequests } from "@/app/actions/getPullRequests";
import { PullRequest } from "@/app/components/pullRequest";
import { DEFAULT_REPO } from "@/app/constants";
import { unstable_noStore } from "next/cache";

export default async function PullRequests() {
  unstable_noStore();
  const pullsWithEvents: (Awaited<
    ReturnType<typeof getPullRequests>
  >[number] & { lastEvent?: string; createdAt?: string })[] = [];

  const pulls = await getPullRequests({
    owner: DEFAULT_REPO.owner,
    repo: DEFAULT_REPO.repo,
    state: "closed",
  });

  await Promise.all(
    pulls.map(async (pr) => {
      const { lastEvent, createdAt } = await getLastPullRequestEvent({
        owner: DEFAULT_REPO.owner,
        repo: DEFAULT_REPO.repo,
        pull_number: pr.number,
      });

      pullsWithEvents.push({ ...pr, lastEvent, createdAt });
    })
  );

   if (pullsWithEvents.length === 0) {
    return <p className="text-gray-500">No closed PRs</p>;
  }

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
      lastEventAt={pull.createdAt}
    />
  ));
}
