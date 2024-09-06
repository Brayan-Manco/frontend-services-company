import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCollaboratorComponent } from './page-collaborator/page-collaborator.component';
import { CollaboratorRoutingModule } from './collaborator-routing.module';



@NgModule({
  declarations: [
    PageCollaboratorComponent
  ],
  imports: [
    CommonModule,
    CollaboratorRoutingModule
  ]
})
export class CollaboratorModule { }
