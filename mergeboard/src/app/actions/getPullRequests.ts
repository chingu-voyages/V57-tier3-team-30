'use server'
export const revalidate = 0
// no caching
import octokit from "."
import { components } from "@octokit/openapi-types";

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
  const pullRequests = await octokit.request(`GET /repos/${owner}/${repo}/pulls`, {
    sort,
    state,
    per_page,
    page,
  })
  return pullRequests.data
}

export { getPullRequests }