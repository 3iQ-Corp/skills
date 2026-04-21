# Installing the 3iQ brand skill

The `3iq-brand` skill lives in this repo. `SKILL.md` at the root is its entry point; every path it references (`README.md`, `reference/gradients.md`, `tokens/*`, `colors_and_type.css`, `ui_kits/website/*.jsx`, `assets/`, `fonts/`, `preview/`) resolves relative to the repo root.

The simplest install is a single symlink from your agent's skills directory to a local clone of this repo. That way every `git pull` updates the skill — no re-installs, no drift.

## Prerequisites

```sh
git clone https://github.com/3iQ-Corp/design-system.git ~/Sites/design-system
```

Use any path you like; the examples below assume `~/Sites/design-system`.

---

## opencode

opencode discovers skills in `~/.config/opencode/skills/<skill-name>/`. Each subdirectory is a skill; the loader reads `SKILL.md` at its root.

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
# Should print the YAML frontmatter starting with `name: 3iq-brand`
```

Then start a new opencode session and ask it to design or write anything 3iQ-flavoured — the skill triggers on mentions of *3iQ*, *3iq.io*, *Forge/Growth/Warmth*, *Denton*, *Neue Haas*, or any 3iQ fund name.

### Update

```sh
cd ~/Sites/design-system && git pull
```

No other step. The symlink always points at the current working copy.

### Uninstall

```sh
rm ~/.config/opencode/skills/3iq-brand
```

This removes only the symlink, not the repo.

---

## OpenWork

OpenWork workspaces ship their own local skills in a `.opencode/skills/` folder at the workspace root. Two install patterns, depending on what you want:

### Workspace-local install (recommended when the workspace *is* the design system)

Inside a workspace that should have the skill available to every session in that workspace:

```sh
cd /path/to/your/workspace
mkdir -p .opencode/skills
ln -s ~/Sites/design-system .opencode/skills/3iq-brand
```

Add the symlink to the workspace's `.gitignore` if teammates clone the design-system repo to different paths:

```sh
echo ".opencode/skills/3iq-brand" >> .opencode/.gitignore
```

### When the workspace repo *is* the design system

If you're working directly inside `~/Sites/design-system` as your OpenWork workspace (as in this repo), you don't need to install anything — the `SKILL.md` at the repo root is already discoverable. Just make sure the workspace's OpenWork config doesn't scope skill discovery to `.opencode/skills/` only. If it does, add the same symlink to itself:

```sh
mkdir -p .opencode/skills
ln -s .. .opencode/skills/3iq-brand
```

### Verify

```sh
ls -la .opencode/skills/3iq-brand
head -4 .opencode/skills/3iq-brand/SKILL.md
```

### Update

```sh
cd ~/Sites/design-system && git pull
```

### Uninstall

```sh
rm .opencode/skills/3iq-brand
```

---

## Windows

The symlink approach works on Windows but requires Developer Mode enabled or an admin shell. From PowerShell:

```powershell
New-Item -ItemType SymbolicLink `
  -Path "$env:APPDATA\opencode\skills\3iq-brand" `
  -Target "$HOME\Sites\design-system"
```

If you can't use symlinks, clone the repo directly into the skills directory:

```powershell
git clone https://github.com/3iQ-Corp/design-system.git `
  "$env:APPDATA\opencode\skills\3iq-brand"
```

Update with `git pull` inside that directory.

---

## Troubleshooting

**Skill doesn't trigger.** Confirm the symlink resolves (`ls -la` should show the `->` arrow pointing at the repo) and that `SKILL.md` is at the root of what the link resolves to, not inside a subfolder.

**Reference paths 404.** The skill expects the repo's root-level layout: `reference/` (singular), `tokens/`, `assets/`, `fonts/`, `ui_kits/`, `preview/`, `colors_and_type.css`. If you see `references/` (plural) or a nested `design-system/` folder inside the skill dir, the symlink is pointing at the wrong place — recreate it pointing one level higher.

**Name conflicts with an existing skill.** If `~/.config/opencode/skills/3iq-brand` already exists, rename the old one first (`mv ~/.config/opencode/skills/3iq-brand ~/.config/opencode/skills/3iq-brand.bak`), create the symlink, verify, then delete the backup.

**Install source contains a sparse-checkout or hardlinked clone.** Some opencode distributions include a pre-populated skills clone (e.g. `~/.config/opencode/_anthropic-skills-repo/`) whose `skills/` directory is hardlinked into the public `~/.config/opencode/skills/`. If you already have a `3iq-brand` entry there, `mv` both before linking; moving one moves both.
