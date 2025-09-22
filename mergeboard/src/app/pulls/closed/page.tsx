import { PageWrapper } from "@/app/components/layouts/PageWrapper";
import { Headline, Subheading2 } from "@/app/components/typography";
import { DEFAULT_REPO } from "@/app/constants";
import { BookMarkedIcon, GitPullRequestArrow } from "lucide-react";
import PullRequests from "./components/PullRequests";
import { Suspense } from "react";
import { PullRequestSkeletons } from "@/app/components/pullRequest";

export default async function ClosedPRsPage() {
  return (
    <PageWrapper>
      <div className="flex items-center gap-2 mb-24">
        <GitPullRequestArrow />
        <Headline>Closed Pull Requests</Headline>
        
      </div>
      <div className="flex items-center gap-1 mb-5">
        <BookMarkedIcon className="inline size-6" />
        <Subheading2 className="">{`${DEFAULT_REPO.owner}/${DEFAULT_REPO.repo}`}</Subheading2>
      </div>
      <ul className="flex gap-8 flex-wrap">
        <Suspense fallback={<PullRequestSkeletons />}>
          <PullRequests />
        </Suspense>
      </ul>
    </PageWrapper>
  );
}
