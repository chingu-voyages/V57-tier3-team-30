import { getPullRequests, mapPRs,PullsWithEvents} from "@/app/actions/getPullRequests"
import { DEFAULT_REPO } from "@/app/constants"
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { getLastPullRequestEvent } from '@/app/actions/getPullRequestLastEvent'
import { unstable_noStore } from 'next/cache'
import { GitPullRequestArrow } from 'lucide-react'
import { Headline } from '@/app/components/typography'
import { PageWrapper } from '@/app/components/layouts/PageWrapper'

export default async function PullRequestsPage() {
  unstable_noStore();
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
    <PageWrapper>
      <div className="flex items-center gap-2 mb-8">
        <GitPullRequestArrow size={32} />
        <Headline>Open Pull Requests</Headline>
      </div>
      <DataTable columns={columns} data={mappedPrs} />
    </PageWrapper>
  )
}
