import { Component } from '@angular/core';
import { SidebarVisibilityService } from '../../core/services/sidebar-visibility.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public sidebarVisibilityService: SidebarVisibilityService) {}

  doVisible() {
    console.log("Click en icono");
    
    this.sidebarVisibilityService.doVisible(true);
  }

}
