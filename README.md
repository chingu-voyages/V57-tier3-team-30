# voyage-tasks

Your project's `readme` is as important to success as your code. For
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point -
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Setup GitHub API (Local Development)

This project uses the GitHub REST API to fetch repository data.
Each developer needs to create their own personal access token and store it in a local environment file.

### 1. Create a GitHub Token

1. Go to GitHub → **Settings → Developer settings → Personal Access Tokens → Tokens (classic)**.
2. Click **Generate new token (classic)**.
3. Select scopes:
   - For **public repos** → no scopes required.
   - For **private repos** → check  `repo`.
4. Copy your token and keep it safe.


---

### 2. Add token to `.env.local`

Create a `.env.local` file in the root of the project:

```env
GITHUB_TOKEN=ghp_yourtokenhere

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

## Our Team

- Ruth Igwe-Oruta #1: [GitHub](https://github.com/Xondacc) / [LinkedIn](https://www.linkedin.com/in/ruthigwe-oruta/)

- Fouad Tabbara #2: [GitHub](https://github.com/fmtabbara) / [LinkedIn](https://www.linkedin.com/in/fouad-tabbara-1b754461/)

- Bisola .S. Ogunsina #3: [GitHub](https://github.com/skellynb) / [LinkedIn](https://www.linkedin.com/in/bisola-s-ogunsina/)

- Isslem Ouederni #4: [GitHub](https://github.com/EslemOuederni) / [LinkedIn](https://www.linkedin.com/in/isslem-ouederni-858a13182/)

- Shaimaa Kamel #5: [GitHub](https://github.com/Shaimaa01) / [LinkedIn](https://www.linkedin.com/in/shaimaa-kamel-818bab31b/)
