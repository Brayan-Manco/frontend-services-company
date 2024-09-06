import { RouterModule, Routes } from '@angular/router';
import { PageCompanyComponent } from './page-company/page-company.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component:PageCompanyComponent,
    outlet:'page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
