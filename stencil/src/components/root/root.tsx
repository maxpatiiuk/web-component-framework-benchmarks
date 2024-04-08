import { Component, h } from '@stencil/core';

@Component({
  tag: 'stencil-root',
  shadow: false,
})
export class StencilRoot {
  render() {
    return <stencil-counter initialCount={10} />;
  }
}
