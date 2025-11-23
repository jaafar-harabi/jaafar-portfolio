import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jaafar-harabi.github.io/jaafar-portfolio',
  base: '/jaafar-portfolio/',
  integrations: [mdx(), sitemap(), tailwind()],
});
