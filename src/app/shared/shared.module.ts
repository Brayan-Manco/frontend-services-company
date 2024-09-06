import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    FooterComponent,
    SideBarComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    SideBarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
