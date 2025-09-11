"use server";

import octokit from ".";
import { components } from "@octokit/openapi-types";
type Repo = components["schemas"]["repository"];

const DEFAULTS = {
  org: "chingu-voyages"
}

export async function getRepos({
  org = DEFAULTS.org
} = {}): Promise<Repo[]> {
  const repos = await octokit.request(`GET /orgs/${org}/repos`);
  return repos.data;
}
