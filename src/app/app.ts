import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { Body } from './layout/body/body';
import { Footer } from './layout/footer/footer';
import { SkipLink } from './shared/a11y/skip-link';
import { I18nService } from './i18n/i18n.service';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Header, Sidebar, Body, Footer, SkipLink],
  templateUrl: './app.html',
})
export class App {
  protected readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);
}