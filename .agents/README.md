# 🤖 AI Agent Skills System

The `.agents/` folder is the "brain" for AI assistants (such as Gemini CLI, Claude Code, or Cursor) operating within this repository. It contains structured instructions that enable AI to work consistently, correctly, and in accordance with the Engineering team's standards without needing to reverse-engineer the codebase repeatedly.

## 📁 Directory Structure

- **`skills/`**: Contains subdirectories for each specific capability (skill).
  - **`SKILL.md`**: The main entry point for each skill.
  - **`rules/`**, **`references/`**, **`templates/`**: Supporting documentation and code patterns.

---

## 📚 Skill Catalogue

There are currently **13 skills** available. Use the relevant skill based on the task at hand:

| Skill | When to Use |
| :--- | :--- |
| `monorepo-workspace` | When touching package boundaries, imports, or monorepo structure. |
| `react-query` | Writing/reviewing `useQuery`, `useMutation` hooks, or API services. |
| `forms-validation` | Working with forms (react-hook-form, zod). |
| `design-system` | Building components in `packages/ui` or using Tailwind tokens. |
| `impeccable` | Designing, reviewing UX/UI, or polishing frontend interfaces. |
| `next-best-practices` | Writing App Router code (RSC, async APIs, metadata). |
| `turborepo` | Configuring `turbo.json` or using the turbo CLI. |
| `systematic-debugging` | Investigating bugs or test failures (before attempting a fix). |
| `vercel-react-best-practices` | Performance optimization (waterfalls, bundle size, re-renders). |
| `next-cache-components` | Using Next.js 16+ PPR features and `use cache`. |

---

## 🛠️ Usage Guide by Tool

### 1. Gemini CLI / Antigravity
Skills will be detected automatically. You can explicitly invoke specific skills using the `$` prefix:
```bash
$react-query — write a hook for the claims service
$systematic-debugging — investigate why the build is failing
```

### 2. Claude Code
Claude will automatically read the `CLAUDE.md` file which references this folder. You can also load skills manually:
```bash
/skill .agents/skills/react-query/SKILL.md
```

### 3. Cursor
Cursor uses rules defined in `.cursor/rules/*.mdc` which reference the `.agents/skills/` directory.

---

## 💡 Best Practices

- ✅ **Load Early**: Read the skill before starting the task, not halfway through.
- ✅ **Load Multiple Skills**: If a task spans multiple concerns (e.g., Form + API), load both relevant skills.
- ✅ **Trust the Skill**: Instructions here are project standards that override the AI's general training defaults.
- ❌ **Don't Load Everything**: Loading too many irrelevant skills will add noise and confuse the AI.

---

## ➕ Adding a New Skill

1. Create a directory: `.agents/skills/<skill-name>`
2. Create `SKILL.md` with standard frontmatter:
   ```markdown
   ---
   name: <skill-name>
   version: 1.0.0
   description: Use when...
   tags: [tag1, tag2]
   ---
   # Skill Title
   ...
   ```
3. Register it in the main catalogue inside `.agents/skills/README.md`.

---

*This system is designed to ensure the AI is not just a typing assistant, but a collaborative developer that deeply understands our architecture.*