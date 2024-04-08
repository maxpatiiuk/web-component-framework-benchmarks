import { defineCustomElements } from 'stencil/dist/loader';

defineCustomElements(window);

document.body.addEventListener('countChanged', console.log);
