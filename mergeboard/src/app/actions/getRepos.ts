"use server";

import octokit from ".";

const DEFAULTS = {
  org: "chingu-voyages"
}

export async function getRepos({
  org = DEFAULTS.org
} = {}) {
  const repos = await octokit.request(`GET /orgs/${org}/repos`);
  return repos.data;
}
