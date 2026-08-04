import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { SidebarLink } from '../sidebar-link/sidebar-link';
import { sidebarItems, profile } from '../../data/dataPortafolio';

@Component({
  selector: 'app-sidebar-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidebarLink],
  templateUrl: './sidebar-content.html',
})
export class SidebarContent {
  protected i18n = inject(I18nService);
  protected items = sidebarItems;
  protected profile = profile;
}