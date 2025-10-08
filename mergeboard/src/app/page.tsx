import { Button } from "@/components/ui/button";
import EmailReminderPrompt from "./components/emailReminder/EmailReminderPrompt";
import ReminderScheduler from "./components/emailReminder/ReminderScheduler";

import {
  EyeIcon,
  FileJsonIcon,
  GithubIcon,
  GitPullRequestIcon,
  MergeIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="hero-section flex flex-col items-center p-7 mt-6 text-center w-full">
        <div className="flex flex-col justify-center items-center md:w-1/2 gap-8">
          <div>
            <h1 className=" text-4xl text-center font-semibold">
              Stay on top of your team’s GitHub Pull Requests!{" "}
            </h1>
          </div>
          <div>
            <p>
              MergeBoard connects directly to your GitHub repository and gives
              you a clear, organized view of your team’s open and closed PRs. No
              more digging through GitHub notifications, your team can now
              track, review, and manage pull requests faster, all in one place!{" "}
            </p>
          </div>
          <div>
            <Link href="/pulls/open">
              <Button
                size="lg"
                className="rounded-[40px] px-4 py-2 bg-secondary-green-700 font-semibold cursor-pointer"
              >
                <GithubIcon />
                Start Tracking here
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <EmailReminderPrompt />
      <ReminderScheduler />

      <h2 className="text-center text-4xl pb-20 pt-9 font-semibold">
        MergeBoard allows you to
      </h2>
      <div className="keyFeatures flex flex-row flex-wrap justify-center gap-16 mb-4">
        <Card className="dark:bg-secondary-green-300 dark:text-primary-black-100 w-xs">
          <CardHeader className="px-0 flex items-center justify-center">
            <GitPullRequestIcon className="h-8 w-8" />
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="font-semibold">
              View open and closed PRs at a glance.
            </h3>
          </CardContent>
        </Card>
        <Card className="dark:bg-secondary-green-300 dark:text-primary-black-100 w-xs">
          <CardHeader className="px-0 flex items-center justify-center">
            <EyeIcon className="h-8 w-8" />
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="font-semibold">
              See who created each PR, who’s reviewing it, and the latest
              updates.
            </h3>
          </CardContent>
        </Card>
        <Card className="dark:bg-secondary-green-300 dark:text-primary-black-100 w-xs">
          <CardHeader className="px-0 flex items-center justify-center">
            <FileJsonIcon className="h-8 w-8" />
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="font-semibold">
              Save PR data as JSON for offline testing.
            </h3>
          </CardContent>
        </Card>
        <Card className="dark:bg-secondary-green-300 dark:text-primary-black-100 w-xs">
          <CardHeader className="px-0 flex items-center justify-center">
            <MergeIcon className="h-8 w-8" />
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="font-semibold">
              Ship quality code as a team whithin minutes.
            </h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
