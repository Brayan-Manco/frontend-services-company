import { Component, HostListener } from '@angular/core';
import { SideBarService } from './shared/components/side-bar/side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSidebarOpen!: boolean;
  isMobile: boolean = false;

  constructor(private sidebarService: SideBarService) {
    this.sidebarService.isSidebarOpen$.subscribe(state => this.isSidebarOpen = state);
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkMobile();
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth <= 767;
  }
}
