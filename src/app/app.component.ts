import { Component } from '@angular/core';
import { SideBarService } from './shared/components/side-bar/side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen!: boolean;

  constructor(private sidebarService: SideBarService) {
    this.sidebarService.isSidebarOpen$.subscribe(state => this.isSidebarOpen = state);
  }
}
