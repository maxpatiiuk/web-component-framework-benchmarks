import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * @fires countChanged - Indicates when the count changes
 */
@customElement('lit-counter')
export class LitCounter extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      gap: 1rem;
    }
  `;

  @property({ type: Number }) initialCount = 0;

  @state() count = 0;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('count'))
      this.dispatchEvent(new CustomEvent('countChanged'));
  }

  connectedCallback() {
    super.connectedCallback();
    this.count = this.initialCount;
    console.log('Connected', this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('Disconnected', this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  override render() {
    return html`
      <button @click=${this.decrement}>-</button>
      <p>${this.count}</p>
      <button @click=${this.increment}>+</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-counter': LitCounter;
  }
}
