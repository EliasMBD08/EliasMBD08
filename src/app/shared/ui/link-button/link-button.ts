import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import {
  type ButtonSize,
  type ButtonVariant,
  buttonClasses,
} from '../button/button-tokens';

@Component({
  selector: 'app-link-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      [class]="classes()"
      [attr.aria-label]="ariaLabel()"
      [attr.aria-disabled]="disabled() || null"
      [attr.download]="downloadAttr()"
      [attr.target]="external() ? '_blank' : null"
      [attr.rel]="external() ? 'noopener noreferrer' : null"
      [attr.href]="href()"
      (click)="handleClick($event)"
    >
      <ng-content></ng-content>
    </a>
  `,
})
export class LinkButton {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly href = input<string>('');
  readonly external = input<boolean>(false);
  readonly download = input<string | boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly ariaLabel = input<string | null>(null);

  readonly classes = computed(() => buttonClasses(this.variant(), this.size()));

  readonly downloadAttr = computed<string | null>(() => {
    const v = this.download();
    if (v === true) return '';
    if (v === false) return null;
    return v;
  });

  handleClick(event: MouseEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}