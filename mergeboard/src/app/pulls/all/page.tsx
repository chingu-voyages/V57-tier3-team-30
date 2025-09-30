import { getPullRequests, mapPRs, Pull, PullsWithEvents} from "@/app/actions/getPullRequests"
import { DEFAULT_REPO } from "@/app/constants"
import { DataTable } from '../data-table'
import { columns } from '../columns'
import { getLastPullRequestEvent } from '@/app/actions/getPullRequestLastEvent'

export default async function PullRequestsPage() {
  const pullsWithEvents: PullsWithEvents = [];
  const prs = await getPullRequests({
    owner: DEFAULT_REPO.owner,
    repo: DEFAULT_REPO.repo,
    state: "open",
  })

 await Promise.all(
    prs.map(async (pr) => {
      const { lastEvent, createdAt } = await getLastPullRequestEvent({
        owner: DEFAULT_REPO.owner,
        repo: DEFAULT_REPO.repo,
        pull_number: pr.number,
      });

      pullsWithEvents.push({ ...pr, lastEvent, createdAt });
    })
  );
  // map the prs to the shape expected by the table
  const mappedPrs = mapPRs(pullsWithEvents)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Open Pull Requests</h1>
      <DataTable columns={columns} data={mappedPrs} />
    </div>
  )
}
