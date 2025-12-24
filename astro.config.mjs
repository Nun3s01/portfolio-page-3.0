import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://nun3s01.github.io/',
  base: '/portfolio-page-3.0',
  integrations: [react()],
});