import octokit from "."
import { components } from "@octokit/openapi-types";
import { unstable_noStore } from "next/cache";

export type Pull = components["schemas"]["pull-request"]
export type requested_reviewers = components["schemas"]["simple-user"]

export type MappedPR = {
  PRNumber: number;
  title: string;
  CreatedBy: string;
  CreatedAt: string;
  status: "open" | "closed";
  url: string;
  reviewers?: requested_reviewers[];
  lastEvent?: string;
  lastEventAt?: string;
  labels?: { name: string }[];
  
};
export type PullsWithEvents = (Awaited<
  ReturnType<typeof getPullRequests>
>[number] & { lastEvent?: string; createdAt?: string })[]


async function getPullRequests ({
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
export function mapPRs (rawPRs: PullsWithEvents): MappedPR[] {
  return rawPRs.map(pr => ({
    PRNumber: pr.number,
    title: pr.title,
    CreatedBy: pr.user?.login || "Unknown",
    CreatedAt: pr.created_at,
    status: pr.state as "open" | "closed",
    url: pr.html_url,
    reviewers: pr.requested_reviewers || [],
    lastEvent: pr.lastEvent,
    lastEventAt: pr.updated_at,
  }));
}

export { getPullRequests }