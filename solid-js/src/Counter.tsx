import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';

import styles from './Counter.module.css';
import { customElement, noShadowDOM } from 'solid-element';
import { ICustomElement } from 'component-register';

export function CounterElement(
  props: { initialCount: number | undefined },
  { element }: { element?: ICustomElement } = {}
) {
  noShadowDOM();
  const [count, setCount] = createSignal(props.initialCount ?? 0);

  let ref!: HTMLDivElement;

  createEffect(() => {
    count();
    (element ?? ref).dispatchEvent(
      new CustomEvent('countChanged', { bubbles: true, composed: true })
    );
  });

  onMount(() => console.log('Connected', ref));
  onCleanup(() => console.log('Disconnected', ref));

  const increment = (): void => void setCount(count() + 1);
  const decrement = (): void => void setCount(count() - 1);

  return (
    <div ref={ref} class={styles.Counter}>
      <button onClick={decrement}>-</button>
      <p>{count()}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export const Counter = customElement(
  'solid-counter',
  { initialCount: undefined },
  CounterElement
);
