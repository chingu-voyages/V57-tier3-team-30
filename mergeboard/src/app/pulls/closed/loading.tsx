import { PullRequestSkeletons } from "@/app/components/pullRequest";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 p-4">
     <PullRequestSkeletons />
    </div>
  );
}
