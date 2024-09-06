import { Component } from '@angular/core';
import { SideBarService } from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  public isSidebarOpen!: boolean;
  public isOpenCompanyBotton = false;
  public isOpenArticleBotton = false;
  public isOpenColaboBotton = false;

  toggleDropdown() {
    this.isOpenCompanyBotton = !this.isOpenCompanyBotton;
  }

  toggleDropdownArt() {
    this.isOpenArticleBotton = !this.isOpenArticleBotton;
  }

  toggleDropdownColl() {
    this.isOpenColaboBotton = !this.isOpenColaboBotton;
  }

  constructor(private sidebarService: SideBarService) {
    this.sidebarService.isSidebarOpen$.subscribe(state => this.isSidebarOpen = state);
  }



  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

}
