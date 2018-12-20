import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyToAdd } from 'src/app/models/companytoadd.model';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms'
import { DeleteCompanyActionSucces } from 'src/app/actions/company.actions';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  constructor(
    private companyService : CompanyService ,
    private router : Router,
    private store: Store<AppState>,
    private location: Location
    ) { }

  ngOnInit() {
  }



  onClickCreate(createCompanyForm){

    console.log(createCompanyForm,"abc");

    let com = {
      nameCompany : createCompanyForm.value.nameCompany,
      titleCompany : createCompanyForm.value.titleCompany
    };

    console.log(com);

    this.companyService.createCompany(com).subscribe(
      data => {
        console.log("POST Request is successful ");
        this.companyService.getCompanies().subscribe(res => {
          console.log("chay duoc roi" , data);
          // this.store.dispatch(new DeleteCompanyActionSucces()),
          this.router.navigate(['\company']);
        });
        
      },
      error => {
        console.log("Error", error);
      });
    }
    

}
