import { Component } from '@angular/core';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SidebarContentComponent } from '../../shared/components/sidebar-content/sidebar-content.component';
import { SidebarVisibilityService } from '../../core/services/sidebar-visibility.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, SidebarContentComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(public sidebarVisibilityService: SidebarVisibilityService) {}

  // sidebarVisible: boolean = this.sidebarVisibilityService.visibility;
}
