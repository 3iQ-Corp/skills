# Installing the 3iQ brand skill

Pick the path that matches your setup. The zip install works on any machine — no git, no admin, no terminal skills beyond copy-paste. Use it first; switch to the symlink install later only if you want `git pull` to update the skill automatically.

---

## Option 1 — Zip install (easiest, works everywhere)

Works on **Windows (including locked-down Checkpoint laptops)**, **macOS**, and **Linux**. No git, no symlinks, no admin rights.

### Step 1 — Download the repo as a zip

Open this URL in a browser:

**https://github.com/3iQ-Corp/design-system/archive/refs/heads/main.zip**

(or go to [github.com/3iQ-Corp/design-system](https://github.com/3iQ-Corp/design-system), click the green **Code** button, then **Download ZIP**.)

You'll get `design-system-main.zip`.

### Step 2 — Extract it

Double-click the zip. You'll get a folder called `design-system-main/`.

### Step 3 — Rename the folder to `3iq-brand`

Rename `design-system-main` → `3iq-brand`. The folder name matters — it's what the skill is registered as.

### Step 4 — Move it into your skills directory

Paste the `3iq-brand` folder into:

| OS | Path |
|---|---|
| **macOS / Linux** | `~/.config/opencode/skills/` |
| **Windows** | `%APPDATA%\opencode\skills\` (paste that into File Explorer's address bar) |

If the `skills` folder doesn't exist yet, create it.

### Step 5 — Verify

Open the folder. Inside `3iq-brand/` you should see `SKILL.md`, `README.md`, `colors_and_type.css`, and folders named `reference`, `tokens`, `assets`, `fonts`, `preview`, `ui_kits`. If everything's there, you're done — start a new opencode session and the skill will trigger on mentions of 3iQ.

### How to update

Delete the `3iq-brand` folder, redo steps 1–4. Takes a minute.

### How to uninstall

Delete the `3iq-brand` folder.

---

## Option 2 — Symlink install (auto-updates via git pull)

Use this if you already have git and want the skill to update automatically whenever the design system changes. **macOS/Linux only** — Windows symlinks require Developer Mode and often don't play nicely with Checkpoint.

### Prerequisites

```sh
git clone https://github.com/3iQ-Corp/design-system.git ~/Sites/design-system
```

Any path works; the rest of this doc assumes `~/Sites/design-system`.

### Install

```sh
mkdir -p ~/.config/opencode/skills
ln -s ~/Sites/design-system ~/.config/opencode/skills/3iq-brand
```

### Verify

```sh
ls -la ~/.config/opencode/skills/3iq-brand
# Should print:  3iq-brand -> /Users/you/Sites/design-system

head -4 ~/.config/opencode/skills/3iq-brand/SKILL.md
# Should print YAML frontmatter starting with `name: 3iq-brand`
```

### Update

```sh
cd ~/Sites/design-system && git pull
```

No other step. The symlink always points at the current working copy.

### Uninstall

```sh
rm ~/.config/opencode/skills/3iq-brand
```

Removes only the symlink, not the repo.

---

## OpenWork (workspace-local install)

OpenWork workspaces ship their own skills in `.opencode/skills/` at the workspace root. Same two options as above:

### Zip version (easiest)

Drop the renamed `3iq-brand` folder (from Option 1, step 3) into `.opencode/skills/` inside your workspace:

```
your-workspace/
  .opencode/
    skills/
      3iq-brand/       ← extracted + renamed folder goes here
        SKILL.md
        README.md
        …
```

Add it to the workspace's `.gitignore` so teammates don't end up with a 30MB copy per checkout:

```
.opencode/skills/3iq-brand
```

### Symlink version (macOS/Linux, with a local clone)

```sh
cd /path/to/your/workspace
mkdir -p .opencode/skills
ln -s ~/Sites/design-system .opencode/skills/3iq-brand
echo ".opencode/skills/3iq-brand" >> .opencode/.gitignore
```

### When the workspace *is* the design system repo

If you're working directly inside `~/Sites/design-system` as an OpenWork workspace (the case for anyone maintaining the design system), nothing to install — `SKILL.md` at the root is already discoverable.

---

## Troubleshooting

**Skill doesn't trigger.** Check that the folder is named exactly `3iq-brand` (lowercase, hyphenated) and that `SKILL.md` sits directly inside it, not inside a nested folder like `3iq-brand/design-system-main/SKILL.md`.

**Reference paths 404.** The skill expects the repo's root-level layout: `reference/` (singular), `tokens/`, `assets/`, `fonts/`, `ui_kits/`, `preview/`, `colors_and_type.css`. If you see `references/` (plural) or a nested `design-system-main/` folder inside `3iq-brand/`, the extraction left an extra level — move the inner contents up one level.

**Windows: symlink creation fails.** Use Option 1 (zip install). Windows symlinks need Developer Mode enabled and often fail silently under Checkpoint endpoint protection; the zip install avoids the problem entirely.

**Name conflicts with an existing skill.** If a `3iq-brand` folder is already there, rename the old one (e.g. to `3iq-brand-old`), install the new one, verify it works, then delete the old folder.

**Hardlinked or sparse-checkout skill clones.** Some opencode distributions ship a pre-populated skills clone (e.g. `~/.config/opencode/_anthropic-skills-repo/`) whose contents are hardlinked into `~/.config/opencode/skills/`. If you see a `3iq-brand` entry you didn't create, check whether it's hardlinked into that clone before deleting — moving one copy moves both.
