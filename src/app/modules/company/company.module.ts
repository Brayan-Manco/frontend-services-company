import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCompanyComponent } from './page-company/page-company.component';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    PageCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
