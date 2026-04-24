# Installing 3iQ skills

This repo is a [skills hub][hub] — a collection of skill folders under
`skills/`. You pick which ones you want and install them into your
preferred host (OpenWork, OpenCode, or Claude Code).

[hub]: https://github.com/anthropics/skills

The currently shipped skills are:

- [`3iq-brand`](./skills/3iq-brand/) — the full 3iQ brand system

Pick the host you use and follow its section below.

---

## Option 1 — OpenWork Hub (recommended)

If you use [OpenWork](https://differentai.com), you can browse and
install any skill from this hub without leaving the app.

### Add the hub

1. Open the worker / workspace settings → **Available from Hub**.
2. Click **Add git repo**.
3. Enter `3iQ-Corp/skills@main` and save.
4. Click **Refresh hub**. You should see `3iq-brand` listed.
5. Click the skill → **Install** on the worker you want it active in.

The hub is a plain GitHub repo, so any `git push` to `main` makes the
updated skill available on the next **Refresh hub**.

### Update

Click **Refresh hub** and re-install the skill — OpenWork will pull the
latest `main` and overwrite the local copy.

### Uninstall

Open the skill in OpenWork and click **Remove**.

---

## Option 2 — OpenCode (global, all projects)

For the CLI [OpenCode](https://opencode.ai), skills live under
`~/.config/opencode/skills/`. You install each skill folder individually.

### Symlink install (macOS / Linux, auto-updates via `git pull`)

```sh
git clone https://github.com/3iQ-Corp/skills.git ~/Sites/3iq-skills
mkdir -p ~/.config/opencode/skills
ln -s ~/Sites/3iq-skills/skills/3iq-brand ~/.config/opencode/skills/3iq-brand
```

Verify:

```sh
ls -la ~/.config/opencode/skills/3iq-brand
# 3iq-brand -> /Users/you/Sites/3iq-skills/skills/3iq-brand

head -4 ~/.config/opencode/skills/3iq-brand/SKILL.md
# Should print YAML frontmatter starting with `name: 3iq-brand`
```

Update:

```sh
cd ~/Sites/3iq-skills && git pull
```

The symlink always points at the current working copy — nothing else to do.

### Zip install (Windows, or machines without git)

Works on **Windows (including locked-down Checkpoint laptops)**,
**macOS**, and **Linux**. No git, no symlinks, no admin rights.

#### Step 1 — Download the skill folder

The easiest way is to download the whole hub as a zip and then copy
only the skill folder you want:

**https://github.com/3iQ-Corp/skills/archive/refs/heads/main.zip**

(or go to [github.com/3iQ-Corp/skills](https://github.com/3iQ-Corp/skills),
click the green **Code** button, then **Download ZIP**.)

#### Step 2 — Extract

Double-click the zip. You'll get a folder called `skills-main/`.

#### Step 3 — Copy the skill folder into your skills directory

Inside `skills-main/skills/` you'll find each individual skill as its
own folder (`3iq-brand/`, etc.). Copy the one(s) you want into:

| OS | Path |
|---|---|
| **macOS / Linux** | `~/.config/opencode/skills/` |
| **Windows** | `%APPDATA%\opencode\skills\` (paste into File Explorer's address bar) |

If the `skills` folder doesn't exist yet, create it.

End result should look like:

```
~/.config/opencode/skills/
└── 3iq-brand/
    ├── SKILL.md
    ├── README.md
    ├── colors_and_type.css
    └── …
```

#### Step 4 — Verify

Inside the skill folder you should see `SKILL.md`, `README.md`,
`colors_and_type.css`, and folders named `reference`, `tokens`,
`assets`, `fonts`, `preview`, `ui_kits`. Start a new OpenCode session;
the skill will trigger on mentions of 3iQ.

### Update (zip install)

Delete the skill folder, redo steps 1–3. Takes a minute.

### Uninstall

Delete the skill folder from `~/.config/opencode/skills/`.

---

## Option 3 — OpenWork workspace-local install

OpenWork workspaces ship their own skills in `.opencode/skills/` at the
workspace root. The **OpenWork Hub** flow (Option 1) is the preferred way
to put skills there — it handles download, placement, and `.gitignore`
for you.

If you need to install manually (e.g. offline), drop the skill folder in:

```
your-workspace/
  .opencode/
    skills/
      3iq-brand/       ← copied from skills/3iq-brand/ in this repo
        SKILL.md
        README.md
        …
```

Add it to the workspace's `.gitignore` so teammates don't end up with a
30MB copy per checkout:

```
.opencode/skills/3iq-brand
```

### When the workspace *is* this repo

If you're working directly inside this repo as an OpenWork workspace
(the case for anyone maintaining the skills hub itself), no install is
needed — OpenWork auto-discovers skills under `skills/` at the workspace
root.

---

## Option 4 — Claude Code plugin marketplace

*Not yet configured.* To enable, this repo would need a
`.claude-plugin/` directory following the
[anthropics/skills][claude-plugin] layout. Open an issue if you need
this.

[claude-plugin]: https://github.com/anthropics/skills/tree/main/.claude-plugin

---

## Troubleshooting

**"Unexpected server error" when adding the hub in OpenWork.** The repo
doesn't have a top-level `skills/` directory, or the branch name is
wrong. Confirm you entered `3iQ-Corp/skills@main` (not
`3iQ-Corp/design-system@main` — the old name; GitHub redirects repo
URLs but OpenWork may not follow the redirect on API calls).

**Skill doesn't trigger.** Check that the skill folder is named exactly
`3iq-brand` (lowercase, hyphenated) and that `SKILL.md` sits directly
inside it, not inside a nested folder like
`3iq-brand/skills-main/SKILL.md`.

**Reference paths 404 after zip install.** The skill expects its own
folder layout: `reference/`, `tokens/`, `assets/`, `fonts/`, `ui_kits/`,
`preview/`, `colors_and_type.css`. If you copied the whole hub repo
instead of just the skill folder, you'll have an extra `skills/`
wrapper — move `skills/3iq-brand/*` up one level or copy only the skill
folder next time.

**Windows: symlink creation fails.** Use the zip install. Windows
symlinks need Developer Mode enabled and often fail silently under
Checkpoint endpoint protection; the zip install avoids the problem
entirely.

**Name conflicts with an existing skill.** If a `3iq-brand` folder is
already there, rename the old one (e.g. to `3iq-brand-old`), install
the new one, verify it works, then delete the old folder.

**Hardlinked or sparse-checkout skill clones.** Some OpenCode
distributions ship a pre-populated skills clone (e.g.
`~/.config/opencode/_anthropic-skills-repo/`) whose contents are
hardlinked into `~/.config/opencode/skills/`. If you see a `3iq-brand`
entry you didn't create, check whether it's hardlinked into that clone
before deleting — moving one copy moves both.

**Old references to `3iQ-Corp/design-system`.** This repo was renamed
from `3iQ-Corp/design-system` to `3iQ-Corp/skills` in April 2026.
GitHub auto-redirects the old URL for `git clone`, `git fetch`, and web
links, but update your local remote to the new name for clarity:

```sh
git remote set-url origin https://github.com/3iQ-Corp/skills.git
```
</content>
</invoke>