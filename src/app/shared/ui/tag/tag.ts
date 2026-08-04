import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-muted"
    >
      @if (icon(); as ic) {
        <span class="inline-flex h-4 w-4 items-center justify-center" [innerHTML]="ic"></span>
      }
      <ng-content />
    </span>
  `,
})
export class Tag {
  icon = input<string | null>(null);
}