import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
  site: 'https://lxizaxi.github.io',
  base: '/lxizaxi.github.io/',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'shota',
      openGraph: {
        home: {
          title: "shota",
          description: "simple shota's homepage."
        },
        blog: {
          title: 'Blog',
          description: 'News and guides for Spectre.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: false
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});

export default config;