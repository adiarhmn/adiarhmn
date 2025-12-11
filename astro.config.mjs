// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// const BASE_URL = '/';
const BASE_URL = '/adiarhmn';

// https://astro.build/config
export default defineConfig({
  site: 'https://adiarhmn.github.io',
  base: BASE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
})
