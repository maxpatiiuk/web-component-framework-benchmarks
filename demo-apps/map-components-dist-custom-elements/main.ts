import './styles.css';
import '@arcgis/map-components/dist/components/arcgis-map';

document
  .querySelector('arcgis-map')
  ?.addEventListener('arcgisViewReadyChange', console.log);
