import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://beer-talk.github.io', // Dynamically passed by GitHub Actions
  base: process.env.BASE || undefined, // Defaults to root, overridden by GH Pages subpaths if any
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [tailwind()],
});
