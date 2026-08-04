import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'elias-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly themeSignal = signal<Theme>(this.resolveInitial());
  readonly theme = this.themeSignal.asReadonly();

  constructor() {
    effect(() => {
      const value = this.themeSignal();
      if (typeof window === 'undefined') return;
      const html = this.document.documentElement;
      if (html?.dataset) {
        html.dataset['theme'] = value;
        html.style.colorScheme = value;
      }
      try {
        localStorage.setItem(STORAGE_KEY, value);
      } catch {
        /* quota — ignore */
      }
    });
  }

  toggle(): void {
    this.themeSignal.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  set(theme: Theme): void {
    this.themeSignal.set(theme);
  }

  private resolveInitial(): Theme {
    if (typeof window === 'undefined') return 'dark';
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      /* ignore */
    }
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }
}