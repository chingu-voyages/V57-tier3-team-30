'use server'

import octokit from "."

const DEFAULTS = {
  owner: "chingu-voyages",
  repo: "V57-tier3-team-30",
  page: 0,
  per_page: 0
}

function getPullRequests({
  owner = DEFAULTS.owner,
  repo = DEFAULTS.repo,
} = {}) {
  const pullRequests = octokit.request(`GET /repos/${owner}/${repo}/pulls`, {

  })
  return pullRequests
}

export { getPullRequests }