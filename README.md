# Web Component framework comparison

Comparing Web Component frameworks in terms of initial bundle size and page load
performance.

## Arcgis Maps SDK for JavaScript: Mapping Components

Simplest possible usage: just `<arcgis-map>` without any arguments or children.

Stencil's `dist-custom-elements` is faster to build (50%), faster to load (30%),
with slightly smaller bundle size (4%) and fewer network requests (50%) compared
to the `dist` output target.

### Stencil's `dist` output target

Larger bundle, slower load, slower build, more requests:

- `2.785mb` transferred - `8.728mb` resources
- `DOMContentLoaded` in `130ms` (average of 152.2, 115.2, 130.7, 132.3, 120.5)
- `First Contentful Paint` in `567ms` (average of 569.2, 518.3, 672.7, 547.3,
  529.6)
- `473` network requests
- Vite build in a consuming application took `20.67s`

### Stencil's `dist-custom-elements` output target

Smaller bundle, fewer network requests, faster build:

- `2.574mb` transferred - `8.361mb` resources ⭐
- `DOMContentLoaded` in `117ms` (average of 122.3, 125.7, 111.1, 109.5, 117.4)
  ⭐
- `First Contentful Paint` in `422ms` (average of 469.3, 473.5, 372.8, 339.3,
  457.0) ⭐
- `310` network requests ⭐
- Vite build in a consuming application took `13.60s` ⭐

## Comparing frameworks

### Methodology

In the following cases I had a Counter component that uses most features from
Stencil, and a Root component that consumers the counter.

Benchmarked all in production build with cash disabled, in a "Guest" mode in
Chrome (to disable all Chrome Extensions). Performance metrics are averages of 5
runs.

Network transfer was consistent between runs.

### Stencil

#### `dist` output target

- `7.9kb` transferred - `15.6kb` resources ⭐
- `DOMContentLoaded` in `19.8ms` (average of 30.8, 14.5, 13.1, 10.2, 30.8)
- `First Contentful Paint` in `41.3ms` (average of 40.7, 40.7, 36.7, 42.4, 46.0)
- `3` network requests
- Vite build in a consuming application took `161ms`

Note, loading each component takes a separate network request. Since I am using
`localhost`, network request too just `1ms`. With Esri CDN, it will take about
`70-80ms` per request on a fast network connection.

#### `dist-custom-elements` output target

- `8.8kb` transferred - `19.7kb` resources
- `DOMContentLoaded` in `17.14ms` (average of 26.5, 26.2, 11.2, 12.2, 9.6) ⭐
- `First Contentful Paint` in `36.62ms` (average of 42.8, 32.5, 36.1, 37.7,
  34.0) ⭐
- `2` network requests ⭐
- Vite build in a consuming application took `142ms` ⭐

Bundle size is a bit larger in this case, but as more components are added, this
output target becomes more efficient - see map components example further down.

### Lit

(no lazy loading - similar to Stencil's `dist-custom-elements` output target)

- `8.0kb` transferred - `19.6kb` resources
- `DOMContentLoaded` in `20.1ms` (average of 12.6, 15.2, 12.9, 31.0, 29.1)
- `First Contentful Paint` in `35.6ms` (average of 30.5, 31.7, 30.9, 40.6, 44.6)
- `2` network requests
- Vite build in a consuming application took `94ms`

Cool part I found out: Lit supports
[`Custom Elements Manifest`](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/) -
an open standard for documenting web components (including their events and
slots). This project also provides a CLI for extracting the component metadata.

### Solid.js

Like React, but with much better performance, tiny bundle size, and signals 🥳.

- `6.3kb` transferred - `13.2kb` resources
- `DOMContentLoaded` in `27.18ms` (average of 28.2, 30.9, 29.7, 33.7, 13.4)
- `First Contentful Paint` in `39.38ms` (average of 34.9, 43.1, 43.1, 41.4,
  34.4)
- `3` network requests
- Vite build in a consuming application took `78ms`

### Preact

(no lazy loading - similar to Stencil's `dist-custom-elements` output target)

- `7.8kb` transferred - `17.4kb` resources
- `DOMContentLoaded` in `20.82ms` (average of 23.2, 12.1, 12.5, 30.2, 26.1)
- `First Contentful Paint` in `36.2ms` (average of 29.3, 31.8, 32.3, 44.8, 42.8)
- `2` network requests
- Vite build in a consuming application took `94ms`

The above is if using react-style hooks. If using
[`@preact/signals`](https://preactjs.com/guide/v10/signals/), the transferred
size is `9.6kb` and `22.8kb` of resources.

Some concerns:

- No standard way to document props, events and slots (though, it's not very
  opinionated so we can use any solution we like)
- Web component wrapping is very light weight - does not offer css
- No build-in way to expose methods on the component - we would have to do some
- No support for scoped styles in shadow root - but adding it ourself is
  possible

Note however that
[Preact's Web Component wrapper](https://github.com/preactjs/preact-custom-element/blob/master/src/index.js)
is absolutely tiny - we could easily build our own on top of it, with more
feature that we require.

Also, Preact is closely compatible with React, which is the largest ecosystem
out there.

### Vue

(no lazy loading - similar to Stencil's `dist-custom-elements` output target)

- `24.4kb` transferred - `58.7kb` resources
- `DOMContentLoaded` in `30.2ms` (average of 31.8, 20.7, 35.0, 31.7, 31.9)
- `First Contentful Paint` in `42.4ms` (average of 44.1, 35.8, 42.0, 45.4, 44.9)
- `2` network requests
- Vite build in a consuming application took `272ms`

However, Vue's web component authoring experience is less than ideal

- Getting typings to generate was a pain. TypeScript is definitely not a
  first-class citizen in Vue.
- Web-component output target in Vue is quite limited - i.e you can't declare
  what attributes you wish to reflect (it reflects all).
- Composing Vue components is not really supported if the root Vue component is
  used as a web component.

  - [Children won't have styles](https://github.com/vuejs/core/issues/7941)
  - [Children's events won't bubble](https://github.com/vuejs/core/issues/7605)
    - You have to use dispatchEvent

- No concept of "Host" element, so have to manually emit a useless `<div>` so
  that you can call `dispatchEvent` on it and etc.

- No existing solution for documenting web components

  - Actually,
    [there isn't even official ways to document Vue components](https://github.com/vuejs/vue/issues/7186)

- No existing solution for exposing methods on a component

## Installation

Clone this repository:

```sh
git clone https://github.com/maxpatiiuk/web-component-framework-comparison
```

Install dependencies for all packages:

```sh
npm run install:all
```

Build all packages:

```sh
npm run build:all
```
