import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageCollaboratorComponent } from './page-collaborator/page-collaborator.component';


const routes: Routes = [
  {
    path: '',
    component:PageCollaboratorComponent,
    outlet:'page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaboratorRoutingModule { }
