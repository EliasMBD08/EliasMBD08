import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import type { Translations } from './translations/translations';
import { es } from './translations/es';
import { en } from './translations/en';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'elias-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  private readonly langSignal = signal<Lang>(this.resolveInitial());
  readonly lang = this.langSignal.asReadonly();

  private readonly dict: Record<Lang, Translations> = { es, en };

  constructor() {
    effect(() => {
      const lang = this.langSignal();
      if (typeof window === 'undefined') return;
      const html = this.document.documentElement;
      html.lang = lang;
      const dict = this.dict[lang];
      this.document.title = dict.meta.title;
      const description = this.document.querySelector('meta[name="description"]');
      description?.setAttribute('content', dict.meta.description);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* ignore */
      }
    });
  }

  toggle(): void {
    this.langSignal.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  set(lang: Lang): void {
    this.langSignal.set(lang);
  }

  t(): Translations {
    return this.dict[this.langSignal()];
  }

  private resolveInitial(): Lang {
    if (typeof window === 'undefined') return 'es';
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'es' || stored === 'en') return stored;
    } catch {
      /* ignore */
    }
    const browser = navigator.language?.toLowerCase() ?? 'es';
    return browser.startsWith('en') ? 'en' : 'es';
  }
}