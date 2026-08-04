import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="flex items-baseline gap-3">
      <!-- <span
        aria-hidden="true"
        class="font-mono text-base text-accent"
        >#{{ title() }}</span
      > -->
      <h2 class="text-2xl font-bold text-accent md:text-3xl">
        {{ title() }}
      </h2>
    </div>
  `,
})
export class SectionTitle {
  title = input.required<string>();
}