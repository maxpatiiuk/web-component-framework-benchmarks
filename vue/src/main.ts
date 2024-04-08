import { defineCustomElement } from 'vue';
import RootSFC from './components/Root.ce.vue';
import CounterSFC from './components/Counter.ce.vue';

export const Root = defineCustomElement(RootSFC);
export const Counter = defineCustomElement(CounterSFC);

export function register() {
  customElements.define('vue-root', Root);
  customElements.define('vue-counter', Counter);
}

export declare namespace JSX {
  export interface IntrinsicElements {
    Counter: typeof Counter;
    Root: typeof Root;
  }
}
