// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap';

const BASE_URL = '/';
// const BASE_URL = '/adiauliarahman.dev/';

const URL = 'https://adiarhmn.github.io';
// const URL = "https://adiauliarahman.dev/"

// https://astro.build/config
export default defineConfig({
  site: URL,
  base: BASE_URL,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
})