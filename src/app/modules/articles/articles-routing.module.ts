import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageArticlesComponent } from './page-articles/page-articles.component';


const routes: Routes = [
  {
    path: '',
    component:PageArticlesComponent,
    outlet:'page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaboratorRoutingModule { }
