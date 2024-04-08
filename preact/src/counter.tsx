import { useEffect, useRef, useState } from 'preact/hooks';

export function Counter({ initialCount }: { readonly initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    ref.current?.dispatchEvent(
      new CustomEvent('countChanged', { bubbles: true, composed: true })
    );
  }, [count]);

  return (
    <div ref={ref} style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
