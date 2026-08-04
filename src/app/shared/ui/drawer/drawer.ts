import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <dialog
      #dlg
      class="m-0 ml-auto h-screen max-h-screen w-[min(20rem,85vw)] border-l border-line bg-surface p-0 text-ink backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      (close)="onNativeClose()"
      (click)="onBackdropClick($event, dlg)"
    >
      <div class="flex h-full flex-col overflow-y-auto p-5">
        <div class="mb-4 flex items-center justify-between">
          <span class="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            {{ title() }}
          </span>
          <button
            type="button"
            class="rounded-md p-2 text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Cerrar menú"
            (click)="close()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <ng-content />
      </div>
    </dialog>
  `,
})
export class Drawer {
  open = input<boolean>(false);
  title = input<string>('Menú');
  closed = output<void>();

  private dlgRef = viewChild.required<ElementRef<HTMLDialogElement>>('dlg');

  constructor() {
    effect(() => {
      const isOpen = this.open();
      const el = this.dlgRef().nativeElement;
      if (isOpen && !el.open) {
        el.showModal();
      } else if (!isOpen && el.open) {
        el.close();
      }
    });
  }

  close(): void {
    const el = this.dlgRef().nativeElement;
    if (el.open) el.close();
    this.closed.emit();
  }

  onNativeClose(): void {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent, dlg: HTMLDialogElement): void {
    if (event.target === dlg) {
      this.close();
    }
  }
}