import { Component } from '@angular/core';
import { SideBarService } from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  public isSidebarOpen!: boolean;

  constructor(private sidebarService: SideBarService) {
    this.sidebarService.isSidebarOpen$.subscribe(state => this.isSidebarOpen = state);
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
