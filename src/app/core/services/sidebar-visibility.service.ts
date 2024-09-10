import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarVisibilityService {

  constructor() { }

  visibility: boolean = false;

  doVisible(visibility: boolean) {
    this.visibility = visibility
  }
}
