// في astro.config.mjs
import { defineConfig } from 'astro/config';
import { fontsource } from '@astrojs/font';

export default defineConfig({
  integrations: [
    fontsource({
      // ...
    })
  ],
  experimental: {
    fonts: [
      {
        provider: 'google',
        name: 'Sora',
        cssVariable: '--font-sora',
        weights: [400, 500, 600, 700],
        subsets: ['latin'],
      },
      {
        provider: 'google',
        name: 'Space Grotesk',
        cssVariable: '--font-space-grotesk',
        weights: [400, 500, 600, 700],
        subsets: ['latin'],
      },
    ],
  },
});