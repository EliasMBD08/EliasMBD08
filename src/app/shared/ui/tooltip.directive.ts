import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

let nextId = 0;

@Directive({
  selector: '[appTooltip]',
  host: {
    '[attr.aria-describedby]': 'describedById()',
  },
})
export class TooltipDirective implements OnInit, OnDestroy {
  appTooltip = input.required<string>();
  appTooltipPosition = input<TooltipPosition>('top');
  appTooltipDelay = input<number>(120);

  private hostEl = inject<ElementRef<HTMLElement>>(ElementRef);
  private tooltipEl: HTMLSpanElement | null = null;
  private id = `app-tooltip-${++nextId}`;
  private showTimer: ReturnType<typeof setTimeout> | null = null;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  visible = signal(false);
  describedById = signal<string | null>(null);

  ngOnInit(): void {
    if (!this.hostEl.nativeElement.hasAttribute('tabindex')) {
      this.hostEl.nativeElement.setAttribute('tabindex', '0');
    }
  }

  ngOnDestroy(): void {
    this.clearTimers();
    this.removeTooltip();
  }

  @HostListener('mouseenter')
  onEnter(): void {
    this.scheduleShow();
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.scheduleHide();
  }

  @HostListener('focus')
  onFocus(): void {
    this.scheduleShow(0);
  }

  @HostListener('blur')
  onBlur(): void {
    this.scheduleHide(0);
  }

  private scheduleShow(delay = this.appTooltipDelay()): void {
    this.clearTimers();
    this.showTimer = setTimeout(() => this.show(), delay);
  }

  private scheduleHide(delay = 80): void {
    this.clearTimers();
    this.hideTimer = setTimeout(() => this.hide(), delay);
  }

  private clearTimers(): void {
    if (this.showTimer) clearTimeout(this.showTimer);
    if (this.hideTimer) clearTimeout(this.hideTimer);
    this.showTimer = null;
    this.hideTimer = null;
  }

  private show(): void {
    if (this.visible()) return;
    this.createTooltip();
    requestAnimationFrame(() => {
      this.visible.set(true);
      this.describedById.set(this.id);
    });
  }

  private hide(): void {
    if (!this.visible()) return;
    this.visible.set(false);
    this.describedById.set(null);
    setTimeout(() => this.removeTooltip(), 120);
  }

  private createTooltip(): void {
    if (this.tooltipEl) return;
    const el = this.hostEl.nativeElement;
    const tip = document.createElement('span');
    tip.id = this.id;
    tip.role = 'tooltip';
    tip.textContent = this.appTooltip();
    tip.style.position = 'absolute';
    tip.style.zIndex = '50';
    tip.style.padding = '0.375rem 0.625rem';
    tip.style.fontSize = '0.75rem';
    tip.style.fontWeight = '500';
    tip.style.lineHeight = '1';
    tip.style.whiteSpace = 'nowrap';
    tip.style.color = 'var(--color-ink-inverse)';
    tip.style.background = 'var(--color-ink)';
    tip.style.borderRadius = 'var(--radius-sm)';
    tip.style.boxShadow = 'var(--shadow-soft)';
    tip.style.opacity = '0';
    tip.style.transform = 'translateY(2px)';
    tip.style.transition = 'opacity 120ms ease, transform 120ms ease';
    tip.style.pointerEvents = 'none';

    document.body.appendChild(tip);

    const position = this.appTooltipPosition();
    const hostRect = el.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let top = 0;
    let left = 0;
    switch (position) {
      case 'top':
        top = hostRect.top + scrollY - tipRect.height - 8;
        left = hostRect.left + scrollX + (hostRect.width - tipRect.width) / 2;
        break;
      case 'bottom':
        top = hostRect.bottom + scrollY + 8;
        left = hostRect.left + scrollX + (hostRect.width - tipRect.width) / 2;
        break;
      case 'left':
        top = hostRect.top + scrollY + (hostRect.height - tipRect.height) / 2;
        left = hostRect.left + scrollX - tipRect.width - 8;
        break;
      case 'right':
        top = hostRect.top + scrollY + (hostRect.height - tipRect.height) / 2;
        left = hostRect.right + scrollX + 8;
        break;
    }
    tip.style.top = `${top}px`;
    tip.style.left = `${left}px`;

    requestAnimationFrame(() => {
      tip.style.opacity = '1';
      tip.style.transform = 'translateY(0)';
    });

    this.tooltipEl = tip;
  }

  private removeTooltip(): void {
    if (this.tooltipEl && this.tooltipEl.parentNode) {
      this.tooltipEl.parentNode.removeChild(this.tooltipEl);
    }
    this.tooltipEl = null;
  }
}