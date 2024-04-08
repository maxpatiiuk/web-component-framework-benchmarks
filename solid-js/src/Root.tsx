import { customElement, noShadowDOM } from 'solid-element';
import { CounterElement } from './Counter';

export const Root = customElement('solid-root', {}, () => {
  noShadowDOM();
  return <CounterElement initialCount={10} />;
});
