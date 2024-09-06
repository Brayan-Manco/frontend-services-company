import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageArticlesComponent } from './page-articles/page-articles.component';
import { CollaboratorRoutingModule } from './articles-routing.module';



@NgModule({
  declarations: [
    PageArticlesComponent
  ],
  imports: [
    CommonModule,
    CollaboratorRoutingModule
  ]
})
export class ArticlesModule { }
