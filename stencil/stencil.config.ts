import { Config } from '@stencil/core';

const isDevBuild =
  process.argv.includes('build') &&
  process.argv.includes('--dev') &&
  !process.argv.includes('--prod');

// https://stenciljs.com/docs/config
export const config: Config = {
  namespace: 'stencil',
  buildEs5: false,
  buildDist: !isDevBuild,
  sourceMap: isDevBuild,
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'dist',
      collectionDir: '',
    },
  ],
};
