import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Store, select } from '@ngrx/store';
import { Company } from 'src/app/models/company.model';
import { GetListCompanyAction, GetCompanyActionSucces, UpdateCompanyActionSucces } from 'src/app/actions/company.actions';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {

  globalId: any;
  conpanySelected: Company;
  // companySelected = this.store.pipe(select())

  constructor(
    private companyService : CompanyService,
    private route : ActivatedRoute,
    private router : Router,
    private store: Store<AppState>
  ) { 
    this.route.paramMap.subscribe((params: ParamMap) =>
      {this.globalId =  params.get('globalId');
    });
  }

  ngOnInit() {
   }

  onClickEdit(form){
    let com = {
      nameCompany : form.value.nameCompany,
      titleCompany : form.value.titleCompany
    };

    this.store.dispatch(new UpdateCompanyActionSucces(this.globalId, com));
    this.store.dispatch(new GetListCompanyAction());
    this.router.navigate(['listcompany']);

  }
}
