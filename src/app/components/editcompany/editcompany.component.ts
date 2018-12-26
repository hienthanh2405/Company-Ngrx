import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Store, select } from '@ngrx/store';
import { Company } from 'src/app/models/company.model';
import { GetListCompanyAction, GetCompanyActionSucces, UpdateCompanyActionSucces, GetCompanyAction } from 'src/app/actions/company.actions';
import { CompanySelectors } from 'src/app/selectors/company.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {
  globalId: any;
  company: Company;
  listCompany : Company[];

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private store: Store<AppState>
  ) { 
    this.route.paramMap.subscribe((params: ParamMap) =>
      {this.globalId =  params.get('globalId');
    });
  }

  ngOnInit() {
    this.store.dispatch(new GetCompanyAction(this.globalId));
    new CompanySelectors(this.store).companyDetail$
    .subscribe((data: any) => {this.company = data.company});
   }

  onClickEdit(form){
    let com = {
      nameCompany : form.value.nameCompany,
      titleCompany : form.value.titleCompany
    };

    this.store.dispatch(new UpdateCompanyActionSucces(this.globalId, com));
    this.router.navigate(['listcompany']);
  }
}
