import { Component } from '@angular/core';
import { companyData, contactData } from '../../../../utils/constants';

@Component({
  selector: 'app-page-company',
  templateUrl: './page-company.component.html',
  styleUrl: './page-company.component.css'
})
export class PageCompanyComponent {

  public company = companyData;
  public contact = contactData;

}
