import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { profile } from '../../data/dataPortafolio';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  protected i18n = inject(I18nService);
  protected profile = profile;

  protected t = computed(() => this.i18n.t());

  protected year = new Date().getFullYear();

  protected copyright(): string {
    return this.t().footer.copyright.replace('{year}', String(this.year));
  }
}