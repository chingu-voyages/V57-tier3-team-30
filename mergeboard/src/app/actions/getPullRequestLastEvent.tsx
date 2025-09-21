import octokit from ".";
export const revalidate = 0;
// no caching
export async function getLastPullRequestEvent({
  owner,
  repo,
  pull_number,
}: {
  owner: string;
  repo: string;
  pull_number: number;
}) {
  // Get timeline events for the PR
  const { data: timeline } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline",
    { owner, repo, issue_number: pull_number }
  );

  // Filter for relevant actions
  const relevant = timeline.filter((data) => {
    if (!data.event) return false;
    console.log(data.event);

    return [
      "opened",
      "commented",
      "merged",
      "review_requested",
      "review_request_removed",
      "reviewed",
    ].includes(data.event);
  });

  if (relevant.length === 0) {
    return { lastEvent: "No events found", createdAt: undefined };
  }
  const lastEvent = relevant[relevant.length - 1];

  return {
    lastEvent: lastEvent?.event?.replace(/_/g, " "),
    createdAt: "created_at" in lastEvent ? lastEvent.created_at : undefined,
  };
}
