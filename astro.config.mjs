// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap';

const BASE_URL = '/';
// const BASE_URL = '/adiauliarahman.dev/';

const SITE = 'https://adiarhmn.github.io';
// const SITE = "https://adiauliarahman.dev/"

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE_URL,

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
})