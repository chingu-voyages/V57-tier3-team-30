'use server'

import octokit from "."
import { components } from "@octokit/openapi-types";

type Pull = components["schemas"]["pull-request"]



function getPullRequests({
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
}): Promise<{ data: Pull[] }> {
  const queryParams = `?sort=${sort}&state=${state}&per_page=${per_page}&page=${page}`
  const pullRequests = octokit.request(`GET /repos/${owner}/${repo}/pulls${queryParams}`)
  return pullRequests
}

export { getPullRequests }