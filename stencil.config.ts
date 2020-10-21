import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'stencil-tailwind'

import autoprefixer from 'autoprefixer'

export const config: Config = {
  namespace: 'p2stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    tailwind(),
    postcss({
      plugins: [
        require('postcss-import'),
        // tailwindcss('./tailwind.config.js'),
        autoprefixer(),
      ]}),
  ],
};
