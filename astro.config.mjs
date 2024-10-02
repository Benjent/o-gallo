// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://benjent.github.io/o-gallo/',
  base: '/o-gallo',
  integrations: [tailwind()]
});
