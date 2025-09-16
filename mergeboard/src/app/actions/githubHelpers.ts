'use server'

import octokit from ".";
import { components } from "@octokit/openapi-types";

import { RequestError } from "@octokit/request-error";

type Pull = components["schemas"]["pull-request-simple"];
type Repo = components["schemas"]["repository"];

// get PRs for a specific repository
const DEFAULTS = {
  owner: "chingu-voyages",
  repo: "V57-tier3-team-30",
  org: "chingu-voyages"
};

export async function getPullRequests({
  owner = DEFAULTS.owner,
  repo = DEFAULTS.repo,
  sort = "created",
  state = "open",
  per_page = 10,
  page = 1,
}: {
  owner?: string;
  repo?: string;
  sort?: "created" | "updated" | "popularity" | "long-running";
  state?: "open" | "closed" | "all";
  per_page?: number;
  page?: number;
} = {}): Promise<{ data: Pull[] }> {
  const pullRequests = await octokit.request("GET /repos/{owner}/{repo}/pulls", {
    owner,
    repo,
    sort,
    state,
    per_page,
    page,
  });

  return pullRequests as { data: Pull[] };
}

//get all repo in chingu-voyages
export async function getRepos({
  org = DEFAULTS.org
} = {}): Promise<Repo[]> {
  const repos = await octokit.request(`GET /orgs/${org}/repos`);
  return repos.data;
}

//check if a specific PR is merged

export async function isPullRequestMerged(
  owner: string,
  repo: string,
  pull_number: number
): Promise<boolean> {
  try {
    await octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}/merge", {
     owner,
     repo,
     pull_number,
    });
    return true;
  } catch (error: unknown) {
  if (error instanceof RequestError && error.status === 404) {
    return false;
  }
  throw error;
}
};

//Get all repo for a specific user
export async function getUserRepos(username:string): Promise<{data: Repo[]}>{
 const repos = await octokit.request("GET /users/{username}/repos", {username});
  return repos as {data: Repo[]};
}

// Get all pull requests from all repos of a user
export async function getUserPullRequests(username:string): Promise<Pull[]> {
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

// Get all repos for an organisation
export async function getOrgRepos(org: string): Promise<{ data: Repo[] }> {
  const repos = await octokit.request("GET /orgs/{org}/repos", { org });
  return repos as { data: Repo[] };
}


// Get all pull requests for an organisation
export async function getOrgPullRequests(org: string): Promise<Pull[]> {
  const repos = await getOrgRepos(org);
  const pulls: Pull[] = [];

  for (const repo of repos.data) {
    const prs = await getPullRequests({
      owner: org,
      repo: repo.name,
      state: "all",
    });
    pulls.push(...prs.data);
  }

  return pulls;
}
