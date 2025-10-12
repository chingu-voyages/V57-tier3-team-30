
import { NextResponse } from "next/server";
import { getPullRequests, mapPRs } from "@/app/actions/getPullRequests";
import { teamEmails } from "@/lib/teamEmails";
import {sendReminderEmail} from "@/lib/sendReminder";
import octokit from "@/app/actions";
import { DEFAULT_REPO } from "@/app/constants";

const SCHEDULER_SECRET = process.env.SCHEDULER_SECRET;

export async function GET(request: Request) {
  
  const secret = request.headers.get("x-scheduler-secret");
  if (!SCHEDULER_SECRET || secret !== SCHEDULER_SECRET) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    
    const rawPRs = await getPullRequests({
      owner: DEFAULT_REPO.owner,
      repo: DEFAULT_REPO.repo,
      state: "open",
    });

    const prs = mapPRs(rawPRs);
    const now = Date.now();

    let sent = 0;

    for (const pr of prs) {
      const createdAt = new Date(pr.CreatedAt).getTime();
      const ageHours = (now - createdAt) / (1000 * 60 * 60);

      if (ageHours < 24 || pr.status !== "open") continue;
      const prLabels = (pr.labels || []).map((l: { name?: string } | string) =>
  typeof l === "string" ? l : l.name || ""
);
if (prLabels.includes("reminder-sent")) continue;

      
      const reviewers = pr.reviewers || [];
      const recipients = reviewers
        .map((r: string) => ({
          username: r,
          email: teamEmails[r],
        }))
        .filter((r) => r.email);

      if (recipients.length === 0) continue;

     // Send email to each reviewer
for (const rec of recipients) {
  await sendReminderEmail({
    to_email: rec.email,
    user_name: rec.username,
    repo_name: DEFAULT_REPO.repo, 
    pr_title: pr.title,
    pr_url: pr.url,
  });
  sent++;
}
// Add reminder-sent label to PR
await octokit.request(
  "POST /repos/{owner}/{repo}/issues/{issue_number}/labels",
  {
    owner: DEFAULT_REPO.owner,
    repo: DEFAULT_REPO.repo,
    issue_number: pr.PRNumber,
    labels: ["reminder-sent"],
  }
);
}
    return NextResponse.json({ ok: true, sent });
  } catch (err) {
    console.error("Scheduler error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
