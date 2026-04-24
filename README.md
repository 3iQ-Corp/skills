# 3iQ skills hub

A [GitHub-backed skills hub](https://github.com/anthropics/skills) for
[3iQ Corp](https://3iq.io) — a Toronto-based institutional digital-asset
manager. This repo hosts the skills we install into [OpenCode][opencode],
[OpenWork][openwork], and [Claude][claude] to keep everything on brand.

[opencode]: https://opencode.ai
[openwork]: https://differentai.com
[claude]: https://claude.com

Layout follows the [Agent Skills][spec] convention: each skill lives in
its own folder under `skills/`, and each folder contains a `SKILL.md` with
YAML frontmatter plus any supporting files the skill needs.

[spec]: https://agentskills.io

```
skills/
└── 3iq-brand/      ← the canonical 3iQ brand skill
    ├── SKILL.md
    ├── README.md
    ├── colors_and_type.css
    ├── assets/      ← logos, favicon
    ├── fonts/       ← licensed Denton + Neue Haas Grotesk
    ├── tokens/      ← design tokens (css/json/yaml)
    ├── reference/   ← logo + gradient + typography rules
    ├── ui_kits/     ← ready-made JSX components
    └── preview/     ← rendered style-guide HTML
```

## Skills in this hub

### [`3iq-brand`](./skills/3iq-brand/)

The full 3iQ brand system — palette, typography, gradients (Forge /
Growth / Warmth), logo rules, voice guidelines, and ready-made JSX
components. Triggers on mentions of 3iQ, 3iq.io, or any 3iQ fund. See
[`skills/3iq-brand/README.md`](./skills/3iq-brand/README.md) for the
full brand overview.

## Installing

See [`INSTALL.md`](./INSTALL.md) for all install paths:

- **OpenWork Hub** — add `3iQ-Corp/skills@main` as a hub in the OpenWork
  UI, pick which skills to install per workspace.
- **OpenCode global** — symlink or zip-extract the skill folder into
  `~/.config/opencode/skills/`.
- **Claude Code plugin marketplace** — register this repo as a
  marketplace and install skills per project.

## Sources

All brand content in this hub is derived from:

- **GitHub** — the repo you're reading now (formerly
  `3iQ-Corp/design-system`, renamed to `3iQ-Corp/skills` in April 2026
  to match the Agent Skills convention). GitHub auto-redirects from the
  old URL.
- **Live site** — [3iq.io](https://3iq.io) — the Webflow stylesheet was
  the upstream source for every color, type, and spacing value.
  Favicon, webclip, and the licensed Denton-Light and Neue Haas Grotesk
  Display webfonts were pulled from the Webflow CDN
  (`cdn.prod.website-files.com`).

Nothing in this hub is invented. If you find a decision that doesn't
trace back to one of those two sources, flag it — it's a bug.

## License

The skills in this hub are for internal 3iQ Corp use. Licensed fonts
(`skills/3iq-brand/fonts/`) are covered by their respective EULAs and
must not be redistributed outside 3iQ.
</content>
</invoke>