// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// const BASE_URL = '/adiarhmn';
const BASE_URL = '/';

// const URL = 'https://adiarhmn.github.io';
const URL = "https://adiauliarahman.dev"

// https://astro.build/config
export default defineConfig({
  site: URL,
  base: BASE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
})
