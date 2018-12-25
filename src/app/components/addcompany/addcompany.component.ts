import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyToAdd } from 'src/app/models/companytoadd.model';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms'
import { AddCompanyActionSucces, GetListCompanyAction } from 'src/app/actions/company.actions';
import { CompanySelectors } from 'src/app/selectors/company.selectors';
// import { DeleteCompanyActionSucces } from 'src/app/actions/company.actions';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  form : FormGroup;
  listCompany: Company[];

  constructor(
    private companyService : CompanyService,
    private router : Router,
    private store: Store<AppState>,
    private location: Location
    ) {}

  ngOnInit() { }

  onSubmit(form){
    let com = {
      nameCompany : form.value.nameCompany,
      titleCompany : form.value.titleCompany
    };

    this.store.dispatch(new AddCompanyActionSucces(com));
    new CompanySelectors(this.store).companyList$.subscribe(data => this.listCompany = data);
    this.router.navigate(['listcompany']);
    
  }
}
