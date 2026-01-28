// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://radicaai.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/_'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
