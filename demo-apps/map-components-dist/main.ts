import './styles.css';
import { defineCustomElements } from '@arcgis/map-components/dist/loader';

defineCustomElements(window, {
  resourcesUrl: 'https://js.arcgis.com/map-components/4.29/assets',
});

document
  .querySelector('arcgis-map')
  ?.addEventListener('arcgisViewReadyChange', console.log);
