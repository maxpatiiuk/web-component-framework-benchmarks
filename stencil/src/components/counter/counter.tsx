import {
  Component,
  EventEmitter,
  Event,
  Method,
  Watch,
  Prop,
  State,
  Element,
  Host,
  h,
} from '@stencil/core';

@Component({
  tag: 'stencil-counter',
  styleUrl: 'counter.css',
  shadow: false,
  scoped: true,
})
export class StencilCounter {
  @Prop() initialCount = 0;
  @State() count = 0;

  @Watch('count')
  countWatcher() {
    this.countChanged.emit();
  }

  @Method()
  async increment() {
    this.count++;
  }

  @Method()
  async decrement() {
    this.count--;
  }

  @Event() countChanged!: EventEmitter<void>;

  @Element() el!: HTMLElement;

  connectedCallback() {
    this.count = this.initialCount;
    console.log('Connected', this, this.el);
  }

  disconnectedCallback() {
    console.log('Disconnected', this, this.el);
  }

  render() {
    return (
      <Host>
        <button onClick={() => void this.decrement()}>-</button>
        <p>{this.count}</p>
        <button onClick={() => void this.increment()}>+</button>
      </Host>
    );
  }
}
