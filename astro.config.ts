import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';


import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://laboratoriogluon.github.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Lab.Gluon',
      openGraph: {
        home: {
          title: 'Laboratorio Gluon',
          description: 'Una comunidad de Makers.',
        },
        blog: {
          title: 'Blog',
          description: 'News and guides for Spectre.'
        },
        projects: {
          title: 'Proyectos'
        },
        notes: {
          title: 'Notas',
          description: 'Notas sobre temas variados.'
        }
      },
      
    })
  ]
});