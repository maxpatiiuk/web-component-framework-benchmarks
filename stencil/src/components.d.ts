/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StencilCounter {
        "decrement": () => Promise<void>;
        "increment": () => Promise<void>;
        "initialCount": number;
    }
    interface StencilRoot {
    }
}
export interface StencilCounterCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLStencilCounterElement;
}
declare global {
    interface HTMLStencilCounterElementEventMap {
        "countChanged": void;
    }
    interface HTMLStencilCounterElement extends Components.StencilCounter, HTMLStencilElement {
        addEventListener<K extends keyof HTMLStencilCounterElementEventMap>(type: K, listener: (this: HTMLStencilCounterElement, ev: StencilCounterCustomEvent<HTMLStencilCounterElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLStencilCounterElementEventMap>(type: K, listener: (this: HTMLStencilCounterElement, ev: StencilCounterCustomEvent<HTMLStencilCounterElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLStencilCounterElement: {
        prototype: HTMLStencilCounterElement;
        new (): HTMLStencilCounterElement;
    };
    interface HTMLStencilRootElement extends Components.StencilRoot, HTMLStencilElement {
    }
    var HTMLStencilRootElement: {
        prototype: HTMLStencilRootElement;
        new (): HTMLStencilRootElement;
    };
    interface HTMLElementTagNameMap {
        "stencil-counter": HTMLStencilCounterElement;
        "stencil-root": HTMLStencilRootElement;
    }
}
declare namespace LocalJSX {
    interface StencilCounter {
        "initialCount"?: number;
        "onCountChanged"?: (event: StencilCounterCustomEvent<void>) => void;
    }
    interface StencilRoot {
    }
    interface IntrinsicElements {
        "stencil-counter": StencilCounter;
        "stencil-root": StencilRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencil-counter": LocalJSX.StencilCounter & JSXBase.HTMLAttributes<HTMLStencilCounterElement>;
            "stencil-root": LocalJSX.StencilRoot & JSXBase.HTMLAttributes<HTMLStencilRootElement>;
        }
    }
}
