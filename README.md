# DDOSS Meetup - Organizer Guide

Welcome to the static site repository for the DDOSS Meetup. This project is built using Astro and Tailwind CSS. It is designed to be purely **content-driven**—you only need to edit Markdown (`.md`/`.mdx`) and configuration files to update the entire site. No coding is required!

---

## 🚀 Quick Start

### 1. How to run the project locally
1. Install dependencies: `npm install`
2. Start the local server: `npm run dev`
3. View the site in your browser at `http://localhost:4321`

### 2. How to build the project
To manually compile the static site (to check for errors before pushing):
- Run: `npm run build`
- This outputs the final static HTML/CSS to the `dist/` directory.

### 3. How GitHub Pages deployment works
The site is automatically deployed to GitHub Pages! Any changes pushed to the `main` branch will trigger a GitHub Action (`.github/workflows/deploy.yml`) that builds the site. The deployment action dynamically resolves your site URL and base paths so that no broken links occur regardless of your project or organization name!

**Important Configuration Steps:**
Before your first GitHub Action deployment will succeed, follow these steps in your repository:
1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages** (on the left sidebar).
3. Under **Build and deployment** > **Source**, change the dropdown from "Deploy from a branch" to **GitHub Actions**.
4. Push your next commit, or manually run the action in the **Actions** tab.

*Note: Your site's paths natively adapt based on whether you deploy as a User/Organization page (`https://username.github.io`) or a Project page (`https://username.github.io/repo/`).*

---

## 📁 Content Organization

All site content lives inside the `src/content/` directory.

- **`site-config.ts`**: Global settings (Site Name, URLs, active edition).
- **`editions/`**: Details about each meetup (date, time, venue, highlights).
- **`speakers/`**: Speaker profiles and talk abstracts.
- **`sessions/`**: The schedule/agenda items.
- **`posts/`**: Articles, recaps, and deep dives.

### What content is placeholder and should be replaced?
The repository currently contains placeholder files demonstrating the features (e.g., `example-speaker.md`, `example-session.md`, `2026-q1.md`, and `scaling-llms-deep-dive.mdx`). These should be deleted or replaced with your actual real-world event data.

### Conventions organizers must follow
- **Slugs & Filenames**: Always stick to a consistent lowercase slug pattern without spaces (e.g. `2026-q1.md`, `alice-johnson.md`). The filename (without `.md`) becomes the exact **slug** used to link content together.
- **Draft Status**: Content like Speakers, Sessions, and Posts use a `status` field. Set it to `"draft"` while preparing, and change to `"published"` when you want it visible on the website.

---

## 🛠️ Common Update Workflows

Here are step-by-step instructions for the tasks you'll do most often:

### Update site-wide settings
1. Open `src/content/site-config.ts`. 
2. Edit global parameters like the `name`, `tagline`, `url`, and most importantly, the `currentEditionSlug` (which dictates what single event powers the homepage).

### Edit the current edition information (e.g., Venue)
1. Find the active edition file in `src/content/editions/` (e.g., `2026-q1.md`).
2. Update the YAML frontmatter at the top of the file (e.g., change `venueName` or `venueAddress`).
3. Save and commit. The homepage will automatically update.

### Publish a new speaker
1. Create a markdown file for the speaker in `src/content/speakers/` (e.g., `jane-doe.md`).
2. Add their info and explicitly connect them to an edition by setting: `edition: "2026-q1"`.
3. To keep them hidden until the announcement is ready, set `status: "draft"`. 
4. When you're ready to announce, change it to `status: "published"`, and save.

### Add a new session to the agenda
1. Create a file in `src/content/sessions/` (e.g., `opening-keynote.md`).
2. Set the `edition` (e.g., `2026-q1`), `startTime`, `endTime`, and `sessionType`.
3. To attach speakers to this session, add their exact filenames (without `.md`) to the `speakers` list in the frontmatter. For example:
   ```yaml
   speakers:
     - jane-doe
   ```
4. Set `status: "published"`. It will automatically appear on the agenda sorted by Time.

### Publish a post-event recap article
1. Create an `.mdx` file in `src/content/posts/` (e.g., `event-recap-2026-q1.mdx`).
2. Fill out the frontmatter. You can optionally link the article to a specific edition, session, or speaker to cross-link them.
3. Write your recap content in standard Markdown.
4. Set `status: "published"`. It will appear on the global `/posts` feed!

### Create a new edition for the next quarter (Rollover Workflow)
Scaling the site for your next meetup requires *no component code changes*. Just follow these rollover steps:
1. **Duplicate the Blueprint**: Copy `src/content/editions/_blueprint/template.md` into `src/content/editions/` and rename it (e.g., `2026-q2.md`).
2. **Setup the New Edition**: Edit `2026-q2.md` with the new theme, time, and venue details.
3. **Rollover the Homepage**: Open `src/content/site-config.ts` and change `currentEditionSlug: "2026-q2"`. Handled automatically, the old edition gracefully moves to the `/editions` Archive logic.
4. **Draft Content**: As speakers and sessions are accepted, create their files and set their edition to `"2026-q2"`. The active homepage will immediately reflect them!
