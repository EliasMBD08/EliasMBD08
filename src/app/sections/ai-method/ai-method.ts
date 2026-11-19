import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SectionHeading } from '../../shared/ui/section-heading/section-heading';
import { Tag } from '../../shared/ui/tag/tag';

@Component({
  selector: 'app-ai-method',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading, Tag],
  templateUrl: './ai-method.html',
})
export class AiMethod {
  protected i18n = inject(I18nService);

  protected t = computed(() => this.i18n.t());
}
