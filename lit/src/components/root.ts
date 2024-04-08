import { LitElement, html } from 'lit';
import './counter';

export class LitRoot extends LitElement {
  override render() {
    return html`<lit-counter initialCount="10"></lit-counter>`;
  }
}

customElements.define('lit-root', LitRoot);

declare global {
  interface HTMLElementTagNameMap {
    'lit-root': LitRoot;
  }
}
