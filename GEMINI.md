# Adi Aulia Rahman - Portfolio Website (`adi-porto`)

## 📋 Project Overview
This project is the personal portfolio website of **Adi Aulia Rahman**, a Software Engineer & IT Consultant. It is a modern, static site built with **Astro**, designed to showcase projects, skills, and professional experience.

The site features internationalization (English/Indonesian), a responsive design powered by **Tailwind CSS**, and interactive components using **Preact** and **Alpine.js**.

## 🛠️ Tech Stack
- **Core Framework:** [Astro v5](https://astro.build/)
- **Language:** TypeScript (`.ts`, `.tsx`, `.astro`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **UI Components:**
  - **Preact:** For complex interactive components (via `@astrojs/preact`).
  - **Alpine.js:** For simple DOM manipulations (loaded via CDN in `Layout.astro`).
  - **Lucide:** Icon set (via CDN).
- **Visualization:** `cal-heatmap` for GitHub contribution visualization.
- **Bundler:** Vite (Astro default).

## 📂 Project Structure
```
D:\PROJECTS\FE\ADI-PORTO
├── src/
│   ├── assets/           # Static assets (images, svgs)
│   ├── components/       # Reusable UI components (.astro, .jsx)
│   │   ├── ui/           # Low-level UI primitives (Buttons, Cards)
│   │   ├── HeatMap/      # React/Preact components for visualizations
│   │   └── ...           # Section-specific components
│   ├── css/              # Global styles (index.css)
│   ├── data/             # Static data files (e.g., projects.ts)
│   ├── i18n/             # Localization logic (en.json, id.json)
│   ├── layouts/          # Astro layouts (Layout.astro is the main shell)
│   ├── pages/            # File-based routing
│   │   ├── index.astro   # Main entry (root)
│   │   ├── en/           # English localized routes
│   │   ├── id/           # Indonesian localized routes
│   │   └── ...           # Other pages (blog, projects, etc.)
│   ├── types/            # TypeScript definitions
│   └── utils/            # Helper functions
├── public/               # Public static assets (favicons, images, etc.)
├── astro.config.mjs      # Astro configuration
└── package.json          # Project dependencies and scripts
```

## 🚀 Building and Running

### Prerequisites
- Node.js (Latest LTS recommended)
- NPM

### Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server (usually at `http://localhost:4321`) |
| `npm run build` | Build the site for production (outputs to `dist/`) |
| `npm run preview` | Preview the built site locally |
| `npm run astro` | Run the Astro CLI directly |

## 📐 Development Conventions

### Styling
- **Tailwind First:** Use Tailwind utility classes for styling whenever possible.
- **Global Styles:** Defined in `src/css/index.css`.
- **Fonts:** Uses 'Plus Jakarta Sans', 'Anton', and 'DM Mono' (loaded via Google Fonts).

### Components
- **Astro Components:** Preferred for static content and layout (`.astro`).
- **Preact Components:** Use when client-side state or interactivity is needed (`.jsx`/`.tsx`).
- **Icons:** Uses Lucide icons (via CDN script in `Layout.astro` or `@lucide/astro`).

### Internationalization (i18n)
- **Strategy:** Route-based i18n (`/en/...`, `/id/...`).
- **Data:** Translations are stored in `src/i18n/en.json` and `src/i18n/id.json`.
- **Helper:** Use `t(lang, key)` from `src/i18n/index.ts` to retrieve strings.

### Routing
- **File-based:** Follows Astro's standard file-based routing in `src/pages`.
- **Localized Pages:** Distinct folders for languages (`src/pages/en`, `src/pages/id`).

## 📝 Key Files
- `src/layouts/Layout.astro`: The main HTML shell. Handles SEO tags, scripts (Alpine, Lucide), and global layout.
- `src/pages/index.astro`: The homepage entry point.
- `astro.config.mjs`: Configuration for integrations (Tailwind, Sitemap, Preact).
