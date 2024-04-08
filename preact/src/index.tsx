import register from 'preact-custom-element';
import { Counter } from './counter';
import { Root } from './root';

register(Root, 'preact-root', []);
register(Counter, 'preact-counter', ['initial-count']);

type ToComponent<Component extends (props: any) => unknown> =
  Parameters<Component>[0];

export declare namespace JSX {
  export interface IntrinsicElements {
    'preact-root': ToComponent<typeof Root>;
    'preact-counter': ToComponent<typeof Counter>;
  }
}
