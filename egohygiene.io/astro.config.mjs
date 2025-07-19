// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';

export default defineConfig({
  site: 'https://egohygiene.io',
  integrations: [mdx(), sitemap()],
  alias: {
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@pages': './src/pages',
    '@content': './src/content',
  },
});
