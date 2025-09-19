"use server";

import octokit from ".";
import { components } from "@octokit/openapi-types";
export type Repo = components["schemas"]["repository"];

const DEFAULTS = {
  org: "chingu-voyages"
}

export async function getRepos ({
  org = DEFAULTS.org
} = {}): Promise<Repo[]> {
  const repos = await octokit.request(`GET /orgs/${org}/repos`);
  return repos.data;
}

export async function getReposByOwner (
  { owner }: { owner: string }
): Promise<Repo[]> {
  const repos = await octokit.request(`GET /users/${owner}/repos`);
  return repos.data;
}
