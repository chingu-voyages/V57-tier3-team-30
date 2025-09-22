import octokit from "."
import { components } from "@octokit/openapi-types";
import { unstable_noStore } from "next/cache";

type Pull = components["schemas"]["pull-request"]

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

export { getPullRequests }