import { Component } from '@angular/core';
import { articles, companyData, contactData } from '../../../../utils/constants';

@Component({
  selector: 'app-page-articles',
  templateUrl: './page-articles.component.html',
  styleUrl: './page-articles.component.css'
})
export class PageArticlesComponent {

  public contact = contactData;

  public articles = articles;

}
