import { Component, inject } from '@angular/core';
import { SidebarVisibilityService } from '../../services/sidebar-visibility';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { SidebarContent } from '../../components/sidebar-content/sidebar-content';
@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule, SidebarContent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private sidebarVisibilityService = inject(SidebarVisibilityService);

  readonly visibility = this.sidebarVisibilityService.visibility;
}
