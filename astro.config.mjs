import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || 'https://ddoss-meetup.github.io', // Dynamically passed by GitHub Actions
  base: process.env.BASE || '/ddoss_meetup', // Defaults to local, overrides on GH Pages
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [tailwind()],
});
