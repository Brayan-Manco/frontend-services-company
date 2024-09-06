import { Component } from '@angular/core';
import { articles, companyData, contactData } from '../../../../utils/constants';

@Component({
  selector: 'app-page-articles',
  templateUrl: './page-articles.component.html',
  styleUrl: './page-articles.component.css'
})
export class PageArticlesComponent {

  public img = 'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063632976943&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fropaimg%2F&docid=y2kpPgPx8CwQiM&tbnid=lcXVQBY68M2ncM&vet=12ahUKEwj2haGvxq2IAxV5TDABHSbnAckQM3oECBUQAA..i&w=1925&h=1925&hcb=2&ved=2ahUKEwj2haGvxq2IAxV5TDABHSbnAckQM3oECBUQAA'
  public contact = contactData;

  public articles = articles;

}
