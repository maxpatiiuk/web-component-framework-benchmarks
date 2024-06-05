# Stencil

Calcite component types for Stencil JSX do not work by default (not just
Calcite's fault - seems to apply to all libraries written using Stencil)

Open [./src/components/root/root.tsx](./src/components/root/root.tsx) in your
IDE to thee example.

I developed a workaround. See
[src/workaround.ts.disabled](./src/workaround.ts.disabled) (rename that file to
`workaround.ts` to enable it and see correct type-checking).

## Installation

1. Clone this repository and run `npm install` in the current directory
2. Do a production build:

   ```sh
   npm run build
   ```
