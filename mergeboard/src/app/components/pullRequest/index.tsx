import { Badge } from "@/components/ui/badge";
import Card from "../card";
import { PageWrapper } from "../layouts/PageWrapper";
import { Body1, Body2, Subheading1 } from "../typography";
import { Button } from "@/components/ui/button";
import { GitPullRequestIcon } from "lucide-react";

export const PullRequest = ({
  PRNumber,
  title,
  CreatedBy,
  CreatedAt,
  url,
  reviewers = [],
}: {
  PRNumber: number;
  title: string;
  CreatedBy: string;
  CreatedAt: string;
  status: "open" | "closed";
  url: string;
  reviewers?: string[];
}) => {
  return (
    <PageWrapper>
      <Card
        className="w-md"
        title={
          <Subheading1>
            #{PRNumber}: {title}
          </Subheading1>
        }
        action={
          <Badge className="bg-primary dark:bg-primary [&>svg]:size-5 rounded-3xl px-4 py-1">
            <GitPullRequestIcon />
            <Body2>Open</Body2>
          </Badge>
        }
        content={
          <div>
            <Body2>Created by {CreatedBy}</Body2>
            <Body2>Created at {new Date(CreatedAt).toLocaleDateString()}</Body2>
            <Body2>Reviewers: {reviewers?.join(", ") || "None"}</Body2>
          </div>
        }
        footer={
          <div className="flex justify-end w-full">
            <Button variant={"link"} asChild className="mt-2">
              <a href={url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        }
      />
    </PageWrapper>
  );
};
