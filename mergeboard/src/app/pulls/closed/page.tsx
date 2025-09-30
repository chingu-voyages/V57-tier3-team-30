import { getPullRequests, mapPRs, Pull, PullsWithEvents} from "@/app/actions/getPullRequests"
import { DEFAULT_REPO } from "@/app/constants"
import { DataTable } from '../open/components/data-table'
import { columns } from '../open/components/columns'
import { getLastPullRequestEvent } from '@/app/actions/getPullRequestLastEvent'
import { unstable_noStore } from 'next/cache'
import { GitPullRequestArrowIcon } from 'lucide-react'
import { Headline } from '@/app/components/typography'
import { PageWrapper } from '@/app/components/layouts/PageWrapper'

export default async function PullRequestsPage() {
  unstable_noStore();
  const pullsWithEvents: PullsWithEvents = [];
  const prs = await getPullRequests({
    owner: DEFAULT_REPO.owner,
    repo: DEFAULT_REPO.repo,
    state: "closed",
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
        <GitPullRequestArrowIcon size={32}/>
        <Headline>Closed Pull Requests</Headline>
      </div>
      <DataTable columns={columns} data={mappedPrs} />
    </PageWrapper>
  )
}

