import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyToAdd } from 'src/app/models/companytoadd.model';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms'
import { AddCompanyActionSucces } from 'src/app/actions/company.actions';
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

  ngOnInit() {
    this.store.select('companyList').subscribe((data) => { 
      this.listCompany = data, console.log(data[0],"dto")
    });
  }

  onSubmit(form){
    let com = {
      nameCompany : form.value.nameCompany,
      titleCompany : form.value.titleCompany
    };

    this.store.dispatch(new AddCompanyActionSucces(com));
    this.router.navigate(['listcompany']);

    // this.companyService.createCompany(com).subscribe(
    //   data => {
    //     this.companyService.getCompanies().subscribe(res => {
    //       console.log("chay roi, mung qua");
    //       // this.store.dispatch(new CompanyActions.DeleteCompany(res)),
    //       this.router.navigate(['listcompany']);
    //     });
        
    //   },
    //   error => {
    //     console.log("Error", error);
    //   });
    // }
  }
}
