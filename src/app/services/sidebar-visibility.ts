import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarVisibilityService {
  visibility = signal<boolean>(false);
}
