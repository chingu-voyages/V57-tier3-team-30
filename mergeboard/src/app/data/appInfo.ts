export const appInfo = `
MergeBoard connects directly to your GitHub repository and gives you a clear, organized view of your team’s open and closed PRs. No more digging through GitHub notifications, your team can now track, review, and manage pull requests faster, all in one place!
Users can:
- View open and closed PRs at a glance.
- See who created each PR, who’s reviewing it, and the latest updates.
- Save PR data as JSON for offline testing.
- Ship quality code as a team whithin minutes.
- Use AI to summarize PRs and suggest next steps.
MergeBoard is perfect for teams looking to streamline their code review process and improve collaboration. Try it out today and see how much easier managing pull requests can be!
1. Summary
The app is a Pull Request (PR) Status Board for GitHub repositories. It provides teams a centralized dashboard to track open and closed PRs (reviews pending, past activity) across one or more repos. It queries GitHub’s REST API (read-only) to fetch data, caches it to avoid rate limits, and presents it in a user-friendly UI. Optionally, it can include AI assistance (chatbot) to help users understand features or ask questions about usage.

2. Benefits
Visibility & transparency
 Team members and project leads can see at a glance which PRs are awaiting review, who is responsible, and how long things have been pending.

Avoid bottlenecks
By surfacing PRs stuck waiting, the app helps prevent “code queues” and encourages faster reviews, reducing wasted developer waiting time.

Historical records & analytics
 Closed PRs view gives historical insight: how long reviews generally took, which team members handled reviews, patterns over time.

Developer teamwork & accountability
 Each PR and its assigned reviewers is visible; team members can self-organize to cover waiting reviews or nudge colleagues.

Reduced friction in development & testing
 Caching / storing JSON snapshots helps development (avoiding GitHub rate limits). Also helps in offline or test mode.

Lower learning curve / accessible help
 If the AI chatbot is included, users don’t need to dig through docs — they can ask the app itself for guidance.

 3. How to Use It (Typical Flow)

Here's a likely user journey:

Landing / Setup
 User lands on the Home page, reads about what the app does, and sees a prompt to select a repository (or repos) to monitor.

Select Repository(s)
 User inputs or selects the GitHub repo(s) whose PRs they want to track (public repos, since no auth is required for publicly visible info).

Open PRs View
 User navigates to “Open PRs” page. The app fetches (or loads from cache) the list of open pull requests for the selected repo(s).
 User sees each PR’s number, title (click → GitHub), creator, assigned reviewers, creation date, last action & date.

Filtering / Sorting
 Optionally, user can filter by author, reviewer, or combination. Sorting might be applied (e.g. oldest first, most recent activity).

Closed PRs View
 User switches to “Closed PRs” tab/page to see PRs that have been merged or rejected. Same fields (plus closed date). Filtering / sorting options similarly apply.

Caching / JSON Save / Replay Mode
 If the user (or developer) wants to avoid hitting API limits, they can save the JSON responses (snapshot) and tell the app to load from the stored data. This is especially useful during dev or when rate limits are reached.

AI Help (if included)
 User clicks the chat icon; a popup opens. Inside, they can type, e.g. “How do I filter by reviewer?” or “What’s a PR that’s been waiting longest?” The AI responds, referencing context from the app.

Maintenance & Updates
 When the app is live, it periodically fetches updates (or when the user reloads) to display fresh PR status. If backend is included, it might handle caching, triggering API fetches, sending notifications, etc.
`;