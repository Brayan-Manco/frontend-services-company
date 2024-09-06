import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./modules/home/home.module').then(m =>m.HomeModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./modules/company/company.module').then(m =>m.CompanyModule)
  },
  {
    path: 'collaborator',
    loadChildren: () => import('./modules/collaborator/collaborator.module').then(m =>m.CollaboratorModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./modules/articles/articles.module').then(m =>m.ArticlesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
