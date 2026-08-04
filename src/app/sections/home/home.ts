import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { profile } from '../../data/dataPortafolio';
import { Button } from '../../shared/ui/button/button';
import { LinkButton } from '../../shared/ui/link-button/link-button';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button, LinkButton],
  templateUrl: './home.html',
})
export class Home {
  protected i18n = inject(I18nService);
  protected profile = profile;

  protected t = computed(() => this.i18n.t());

  protected scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}