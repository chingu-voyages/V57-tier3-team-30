// Octokit.js

import { Octokit } from "octokit"

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export default octokit

// Example usage
// const response = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
//   owner: 'OWNER',
//   repo: 'REPO',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })
