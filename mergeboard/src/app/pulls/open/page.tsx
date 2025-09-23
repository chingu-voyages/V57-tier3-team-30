import { PageWrapper } from "@/app/components/layouts/PageWrapper";
import { Headline, Subheading2 } from "@/app/components/typography";
import { DEFAULT_REPO } from "@/app/constants";
import { BookMarkedIcon, GitPullRequestArrow } from "lucide-react";
import PullRequests from "./components/PullRequests";
import { Suspense } from "react";
import { PullRequestSkeletons } from "@/app/components/pullRequest";
import { SaveSnapshotButton } from "@/app/components/snapShots/SnapshotControls";
import { getPullRequests, mapPRs, MappedPR } from "@/app/actions/getPullRequests";


export default async function OpenPRsPage() {
  const rawPrs = await getPullRequests({
    owner: DEFAULT_REPO.owner,
    repo: DEFAULT_REPO.repo
  });
  const prs: MappedPR[] = mapPRs(rawPrs);
  return (
    <PageWrapper>
      <div className="flex items-center gap-2 mb-24">
        <GitPullRequestArrow />
        <Headline>Open Pull Requests</Headline>
      </div>
      <div className="flex items-center gap-1 mb-5">
        <BookMarkedIcon className="inline size-6" />
        <Subheading2 className="">{`${DEFAULT_REPO.owner}/${DEFAULT_REPO.repo}`}</Subheading2>
      </div>
      <div className="mb-6">
         <SaveSnapshotButton
          prs={prs}
          repoName={`${DEFAULT_REPO.owner}/${DEFAULT_REPO.repo}`}
        />
      </div>

      <ul className="flex gap-8 flex-wrap">
        <Suspense fallback={<PullRequestSkeletons />}>
          <PullRequests />
        </Suspense>
      </ul>
    </PageWrapper>
  );
}
