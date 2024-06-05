import { Component, h, Fragment } from '@stencil/core';

/**
 * Calcite component types for Stencil JSX do not work by default
 * (not just Calcite's fault - seems to apply to all libraries written using Stencil)
 *
 * I developed a workaround. See "../../workaround.ts.disabled" (rename that
 * file to "workaround.ts" to enable it and see correct type-checking).
 *
 */

@Component({
  tag: 'stencil-root',
  shadow: false,
})
export class StencilRoot {
  render() {
    /**
     * If you hover over "calcite-button", it is typed as "any".
     * None of the props are type-checked. You don't get autocomplete
     * either.
     */
    return (
      <>
        <calcite-button
          // If you get a TypeScript error here, that means types are loaded:
          alignment={1.5}
          unknownProp={1}
          title="1"
        />
        <calcite-button
          // If you get a TypeScript error here, that means types are loaded:
          unknownProp={1}
          title="1"
        />
        1
        <calcite-does-not-exist />
        {/** TypeScript errors for native elements are always working: */}
        <div unknownProp={console.log} />
        <div title={1} />
      </>
    );
  }
}
