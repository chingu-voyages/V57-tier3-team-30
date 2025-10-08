"use client";

import { useEffect } from "react";
import { sendReminderEmail } from "@/lib/sendReminder";
import { getPullRequests, mapPRs } from "@/app/actions/getPullRequests";
import { DEFAULT_REPO } from "@/app/constants";
export default function ReminderScheduler() {
  useEffect(() => {
    async function checkStalePRs() {
      const email = localStorage.getItem("userEmail");
      if (!email) return;

      try {
        const rawPRs = await getPullRequests({
          owner: DEFAULT_REPO.owner,
          repo: DEFAULT_REPO.repo,
          state: "open",
        });

        const prs = mapPRs(rawPRs);

        // Find PRs older than 24 hours and still open
        const stalePRs = prs.filter((pr) => {
          const createdAt = new Date(pr.CreatedAt).getTime();
          const now = Date.now();
          const ageHours = (now - createdAt) / (1000 * 60 * 60);
          return ageHours > 24 && pr.status === "open";
        });

        if (stalePRs.length > 0) {
          // Build a summary message for all stale PRs
          const message = stalePRs
            .map(
              (pr) =>
                `• [#${pr.PRNumber}] ${pr.title}\n${pr.url}\nCreated: ${new Date(
                  pr.CreatedAt
                ).toLocaleString()}`
            )
            .join("\n\n");

          await sendReminderEmail({
            to_name: "Team",
            to_email: email, // fetched from localStorage
            subject: "Reminder: Stale Pull Requests (24h+)",
            message: `The following PRs have been open for more than 24 hours:\n\n${message}`,
          });

          console.log("Reminder email sent for stale PRs:", stalePRs.length);
        } else {
          console.log("No stale PRs found.");
        }
      } catch (error) {
        console.error("Error checking stale PRs:", error);
      }
    }

    // Run once daily 
    checkStalePRs();

    // Optional: schedule it (once every 24 hours)
    const interval = setInterval(checkStalePRs, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return null;
}