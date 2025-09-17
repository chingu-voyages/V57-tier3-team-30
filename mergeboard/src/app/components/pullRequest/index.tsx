import { Badge } from "@/components/ui/badge";
import Card from "../card";
import { Body2, Subheading1 } from "../typography";
import { Button } from "@/components/ui/button";
import { GitPullRequestIcon } from "lucide-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

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
    <Card
      className="w-md"
      title={
        <div className="min-h-18 line-clamp-2 overflow-hidden text-ellipsis">
          <Subheading1>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              #{PRNumber}: {title}
            </a>
          </Subheading1>
        </div>
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
          <Body2>
            Created at {dayjs(CreatedAt).utc().format("MMM D, YYYY [at] HH:mm")}
          </Body2>
          <Body2 className="">
            Reviewers:{" "}
            <span className="font-bold italic">
              {reviewers?.join(", ") || "None"}
            </span>
          </Body2>
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
  );
};
