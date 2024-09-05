import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {


  //para globalizar el estado del sidebar
  private sidebarOpen = new BehaviorSubject<boolean>(false);

  isSidebarOpen$ = this.sidebarOpen.asObservable();

  toggleSidebar() {
    this.sidebarOpen.next(!this.sidebarOpen.value);
  }

  setSidebarState(isOpen: boolean) {
    this.sidebarOpen.next(isOpen);
  }
}
