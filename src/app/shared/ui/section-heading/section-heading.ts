import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type HeadingLevel = 2 | 3;

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (level() === 2) {
      <h2
        class="group flex items-baseline gap-3 text-[var(--text-h1)] font-semibold leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)]"
      >
        <span
          aria-hidden="true"
          class="text-brand font-mono text-base font-normal"
          >{{ index() }}.</span
        >
        <span class="text-ink">{{ title() }}</span>
        <span
          aria-hidden="true"
          class="ml-2 hidden h-px flex-1 translate-y-[-2px] bg-gradient-to-r from-brand/40 to-transparent md:block"
        ></span>
      </h2>
      @if (subtitle()) {
        <p class="mt-2 text-sm text-ink-subtle">{{ subtitle() }}</p>
      }
    } @else {
      <h3
        class="text-[var(--text-h2)] font-semibold leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink"
      >
        {{ title() }}
      </h3>
    }
  `,
})
export class SectionHeading {
  title = input.required<string>();
  subtitle = input<string>('');
  level = input<HeadingLevel>(2);
  index = input<string>('');
}