// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://egohygiene.io',
  base: '/',
  integrations: [mdx(), sitemap(), react()],
  publicDir: path.resolve('./public'),
  trailingSlash: "ignore",
});