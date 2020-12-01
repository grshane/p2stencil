import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwind from 'stencil-tailwind'
import tailwindcss from 'tailwindcss'

import autoprefixer from 'autoprefixer'

export const config: Config = {
  namespace: 'p2stencil',
   globalStyle: './node_modules/tailwindcss/dist/base.css',
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
  devServer: {
    reloadStrategy: 'pageReload'
  },
  plugins: [
    // tailwind({tailwind: tailwindcss('./tailwind.config.js')}),
    tailwind(),
    postcss({
      plugins: [
        require('postcss-import'),
        // tailwindcss('./tailwind.config.js'),
        // autoprefixer(),
      ]}),
  ],
};
