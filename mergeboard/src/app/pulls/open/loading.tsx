import { PageWrapper } from '@/app/components/layouts/PageWrapper';
import { PullRequestSkeleton } from "@/app/components/pullRequest";

export default function Loading () {
  return (
    <PageWrapper>
      <PullRequestSkeleton />
    </PageWrapper>
  );
}
