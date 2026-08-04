import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './sidebar-link.html',
})
export class SidebarLink {
  item = input.required<{ title: string; linkto: string }>();
}