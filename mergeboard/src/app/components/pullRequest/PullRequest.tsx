import { Badge } from "@/components/ui/badge";
import Card from "../card";
import { Body2, Subheading1 } from "../typography";
import { Button } from "@/components/ui/button";
import { GitPullRequestIcon } from "lucide-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Divider } from "../divider";

dayjs.extend(utc);

export const PullRequest = ({
  PRNumber,
  title,
  CreatedBy,
  CreatedAt,
  url,
  reviewers = [],
  lastEvent,
  lastEventAt,
}: {
  PRNumber: number;
  title: string;
  CreatedBy: string;
  CreatedAt: string;
  status: "open" | "closed";
  url: string;
  reviewers?: string[];
  lastEvent?: string;
  lastEventAt?: string;
}) => {
  return (
    <Card
      className="w-md"
      title={
        <div className="min-h-18 line-clamp-2 overflow-hidden text-ellipsis">
          <Subheading1 className="break-all">
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
          <Divider />
          <Body2>
            Created by <span className="font-bold">{CreatedBy}</span>
          </Body2>
          <Body2>
            Created on {dayjs(CreatedAt).utc().format("D/M/YYYY HH:mm")}
          </Body2>
          <Divider />
          <Body2 className="">
            Reviewers:{" "}
            <span className="font-bold italic">
              {reviewers?.join(", ") || "None"}
            </span>
          </Body2>
          <Divider />
          <Body2>
            Last Event:{" "}
            <span className="font-bold italic">{lastEvent || "N/A"}</span>
          </Body2>
          <Body2>
            Last Event At:{" "}
            <span className="font-bold italic">
              {lastEventAt
                ? dayjs(lastEventAt).utc().format("D/M/YYYY HH:mm")
                : "N/A"}
            </span>
          </Body2>
          <Divider />
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
