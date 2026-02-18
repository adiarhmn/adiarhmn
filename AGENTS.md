# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project Overview

This is an Astro 5.x portfolio website with Preact integration and Tailwind CSS 4.x. It supports bilingual content (English/Indonesian) with static site generation.

## Build/Lint/Test Commands

```bash
npm run dev        # Start development server (localhost:4321)
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run astro      # Run Astro CLI commands
```

**Note**: No lint or test commands are currently configured. Consider adding ESLint and a testing framework if needed.

## Code Style Guidelines

### Formatting (Prettier)

Configuration in `.prettierrc`:
- **printWidth**: 120
- **tabWidth**: 4
- **useTabs**: false (spaces)
- **semi**: false (no semicolons)
- **singleQuote**: true

Run formatting:
```bash
npx prettier --write .
```

### TypeScript

- Strict mode enabled (extends `astro/tsconfigs/strict`)
- JSX with Preact (`jsxImportSource: "preact"`)
- Always use `type` keyword for type-only imports:
  ```typescript
  import type { Project } from '../types/project'
  ```

### Imports

Order imports as follows (separated by blank lines):
1. External packages (astro, preact, etc.)
2. Internal aliases (components, utils)
3. Relative imports
4. Type imports

Example:
```typescript
---
import { defineConfig } from 'astro/config'
import Header from '../components/Header.astro'
import { staticPaths } from '../../i18n/index.ts'
import type { Project } from '../types/project'
---
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Hero.astro`, `CardPrimary.astro` |
| Pages | kebab-case or `[param]` | `about-me.astro`, `[lang]/index.astro` |
| TypeScript interfaces | PascalCase | `Project`, `FeaturedProjectsDataInterface` |
| Functions | camelCase | `switchLangPath()`, `staticPaths()` |
| Variables | camelCase | `topProjects`, `baseUrl` |
| Constants | SCREAMING_SNAKE_CASE or camelCase | `BASE_URL`, `SITE` |
| CSS classes | kebab-case (Tailwind) | `bg-sky-600`, `font-anton` |

### File Organization

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Generic UI elements (Button, Card, etc.)
│   └── *.astro        # Page-specific components
├── features/          # Feature-based modules
│   └── LandingPage/
│       ├── Hero/
│       │   ├── Hero.astro
│       │   ├── content.json
│       │   └── data.ts
├── layouts/           # Page layouts
├── pages/             # File-based routing
│   └── [lang]/        # Dynamic language routes
├── types/             # TypeScript type definitions
├── data/              # Static data files
├── utils/             # Utility functions
├── i18n/              # Internationalization
│   ├── en.json
│   └── id.json
└── css/               # Global styles
```

### Astro Components

Use the frontmatter script fence (`---`) for imports and logic:

```astro
---
import Layout from '../../layouts/Layout.astro'
import content from './content.json'

interface Props {
    lang: 'en' | 'id'
}

const { lang } = Astro.props
const t = content[lang]
---

<Layout lang={lang}>
    <section class="...">
        {t.title}
    </section>
</Layout>
```

### Internationalization (i18n)

- Supported languages: `'en' | 'id'`
- Each feature can have its own `content.json` with language keys
- Use `staticPaths()` for generating static pages per language:

```typescript
export function getStaticPaths() {
    return staticPaths()
}
```

- Access translated content:
```typescript
const t = content[lang]  // content from feature's content.json
```

### Styling

- Use Tailwind CSS utility classes
- Custom utilities defined in `src/css/index.css`:
  - `font-anton` - Anton font family
  - `font-jakarta` - Plus Jakarta Sans
  - `text-stroke` - Text outline effect
  - `scan-text` - Animated scan effect
- Custom animations available: `floating`, `floating-icon`, `marquee`

### Error Handling

For invalid route parameters, redirect to a valid path:

```typescript
if (lang !== 'en' && lang !== 'id') {
    return Astro.redirect(`${BASE_URL}en/`)
}
```

### Props Interfaces

Always define Props interface for components with props:

```typescript
interface Props {
    lang: 'en' | 'id'
    title?: string
}

const { lang, title = 'Default Title' } = Astro.props
```

### Data Files

- Type data arrays explicitly:
```typescript
export const topProjects: Project[] = [...]
```

- Use optional chaining for optional properties:
```typescript
project.stackIcons?.map((icon) => ...)
```

### Environment Variables

Access via `import.meta.env`:
- `BASE_URL` - Site base path
- `SITE` - Site URL (from `astro.config.mjs`)

## Best Practices

1. **Keep components small** - Extract reusable UI elements to `components/ui/`
2. **Feature-based organization** - Group related files in `features/`
3. **Type safety** - Define interfaces for all data structures
4. **No semicolons** - Match project style
5. **Single quotes** - Use `'` not `"` for strings
6. **Early returns** - Validate params at the start of components
7. **Responsive design** - Use Tailwind responsive prefixes (`lg:`, `md:`)
8. **Accessibility** - Include `aria-label` for interactive elements

## Common Patterns

### Card Component with Slot

```astro
<div class="p-px bg-linear-to-br from-blue-200 to-blue-950 rounded-xl">
    <div class="bg-black rounded-xl">
        <slot />
    </div>
</div>
```

### Conditional Rendering

```astro
{project.link ? (
    <a href={project.link}>View Details</a>
) : (
    <div>In Progress</div>
)}
```

### Iteration with Map

```astro
{items.map((item) => (
    <CardPrimary>
        <h3>{item.title}</h3>
    </CardPrimary>
))}
```
