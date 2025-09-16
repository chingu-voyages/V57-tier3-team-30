import { getPullRequests } from "@/app/actions/getPullRequests";
import { PageWrapper } from "@/app/components/layouts/PageWrapper";
import { PullRequest } from "@/app/components/pullRequest";
import { Headline, Subheading2 } from "@/app/components/typography";
import { BookMarkedIcon, GitPullRequestArrow } from "lucide-react";

const DEFAULTS = {
  owner: "chingu-voyages",
  repo: "V57-tier3-team-30",
};

export default async function OpenPRsPage() {
  const pulls = await getPullRequests({
    owner: DEFAULTS.owner,
    repo: DEFAULTS.repo,
    state: "open",
  });

  return (
    <PageWrapper>
      <div className="flex items-center gap-2 mb-8 justify-center">
        <GitPullRequestArrow />
        <Headline>Open Pull Requests</Headline>
      </div>
      <div className="flex items-center gap-1 mb-5">
        <BookMarkedIcon className="inline size-6" />
        <Subheading2 className="">{`${DEFAULTS.owner}/${DEFAULTS.repo}`}</Subheading2>
      </div>
      <ul className="flex flex-col gap-4">
        {pulls.data.map((pull) => (
          <PullRequest
            key={pull.id}
            PRNumber={pull.number}
            title={pull.title}
            CreatedBy={pull.user?.login || "Unknown"}
            CreatedAt={pull.created_at}
            status={pull.state as "open" | "closed"}
            url={pull.html_url}
            reviewers={pull.requested_reviewers?.map(
              (reviewer) => reviewer.login
            )}
          />
        ))}
      </ul>
    </PageWrapper>
  );
}
