'use server'

import octokit from ".";
import { components } from "@octokit/openapi-types";
import { RequestError } from "@octokit/request-error";

export type Pull = components["schemas"]["pull-request-simple"];
export type Repo = components["schemas"]["repository"];

// get PRs for a specific repository
export async function getPullRequests ({
  owner,
  repo,
  sort = "created",
  state = "open",
  per_page = 10,
  page = 1,
}: {
  owner: string;
  repo: string;
  sort?: "created" | "updated" | "popularity" | "long-running";
  state?: "open" | "closed" | "all";
  per_page?: number;
  page?: number;
}): Promise<{ data: Pull[] }> {
  const pullRequests = await octokit.request(`GET /repos/${owner}/${repo}/pulls`, {

    sort,
    state,
    per_page,
    page,
  });

  return pullRequests;
}

//get all repo in org
export async function getReposByOrg (org: string): Promise<Repo[]> {
  const response = await octokit.request(`GET /orgs/${org}/repos`);
  return response.data as Repo[];
}

//Get all repo for a specific user
export async function getUserRepos (username: string): Promise<{ data: Repo[] }> {
  const repos = await octokit.request(`GET /users/${username}/repos`);
  return repos as { data: Repo[] };
}

//check if a specific PR is merged
export async function isPullRequestMerged (
  owner: string,
  repo: string,
  pull_number: number
): Promise<boolean> {
  try {
    await octokit.request(`GET /repos/${owner}/${repo}/pulls/${pull_number}/merge`);
    return true;
  } catch (error: unknown) {
    if (error instanceof RequestError && error.status === 404) {
      return false;
    }
    throw error;
  }
};

// Get all pull requests from all repos of a user
export async function getUserPullRequests (username: string): Promise<Pull[]> {
  const repos = await getUserRepos(username);
  const pulls: Pull[] = [];

  for (const repo of repos.data) {
    const prs = await getPullRequests({
      owner: username,
      repo: repo.name,
      state: "all",
    });
    pulls.push(...prs.data);
  }

  return pulls;
}

// Get all pull requests for an organisation
export async function getOrgPullRequests (org: string): Promise<Pull[]> {
  const repos = await getReposByOrg(org);
  const pulls: Pull[] = [];

  for (const repo of repos) {
    const prs = await getPullRequests({
      owner: org,
      repo: repo.name,
      state: "all",
    });
    pulls.push(...prs.data);
  }
  return pulls;
}

