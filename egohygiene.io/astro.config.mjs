// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { visualizer } from "rollup-plugin-visualizer";
import react from '@astrojs/react';
import db from '@astrojs/db';
import { remarkModifiedTime } from './plugins/remark-modified-time.mjs';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';

export default defineConfig({
  site: 'https://egohygiene.io',
  base: '/',
  integrations: [mdx(), sitemap(), react(), db()],
  publicDir: path.resolve('./public'),
  trailingSlash: "ignore",
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
      },
    },
    plugins: [visualizer({
        emitFile: true,
        filename: "stats.html",
    })]
  },
  markdown: {
      remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
});