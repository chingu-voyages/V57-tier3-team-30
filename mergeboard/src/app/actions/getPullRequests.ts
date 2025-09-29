import octokit from "."
import { components } from "@octokit/openapi-types";
import { unstable_noStore } from "next/cache";

type Pull = components["schemas"]["pull-request"]


export type MappedPR = {
  PRNumber: number;
  title: string;
  CreatedBy: string;
  CreatedAt: string;
  status: "open" | "closed";
  url: string;
  reviewers?: string[];
  lastEvent?: string;
  lastEventAt?: string;
};
export type PullsWithEvents = (Awaited<
    ReturnType<typeof getPullRequests>
  >[number] & { lastEvent?: string; createdAt?: string })[]


async function getPullRequests({
  owner,
  repo,
  sort,
  state,
  per_page = 10,
  page = 1,
}: {
  owner: string
  repo: string
  sort?: "created" | "updated" | "popularity" | "long-running"
  state?: "open" | "closed" | "all"
  per_page?: number
  page?: number
}): Promise<Pull[]> {
  unstable_noStore();
  const pullRequests = await octokit.request(`GET /repos/${owner}/${repo}/pulls`, {
    sort,
    state,
    per_page,
    page,
    cache: 'no-store'
  })
  return pullRequests.data
}


// Helper to map raw PRs to the shape your components expect
export function mapPRs(rawPRs: Pull[]): MappedPR[] {
  return rawPRs.map(pr => ({
    PRNumber: pr.number,
    title: pr.title,
    CreatedBy: pr.user?.login || "Unknown",
    CreatedAt: pr.created_at,
    status: pr.state as "open" | "closed",
    url: pr.html_url,
    reviewers: pr.requested_reviewers?.map(r => r.login) || [],
    lastEvent: undefined,
    lastEventAt: pr.updated_at,
  }));
}

export { getPullRequests }