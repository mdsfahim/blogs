import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blogs.msf.pro.bd',
  integrations: [sitemap()],
});