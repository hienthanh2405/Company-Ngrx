import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { GetListCompanyAction, GetListCompanyActionSucces, GetCompanyActionSucces, DeleteCompanyActionSucces } from 'src/app/actions/company.actions';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CompanySelectors } from 'src/app/selectors/company.selectors';
import { store } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {
  companies$: Observable<Company[]>;
  listCompany: Company[];
  globalId: any;
  ;

 constructor(private store: Store<AppState>,
   private route : ActivatedRoute,
   ) {
    this.store.dispatch(new GetListCompanyAction());
    //get globalId from url for function delete
    this.route.paramMap.subscribe((params: ParamMap) =>
      {this.globalId =  params.get('globalId');
    });
  }

  ngOnInit() {
    let abc = new CompanySelectors(this.store).companyList$.subscribe((data : any) => {this.listCompany = data.companyList});
  }

  onDelete(globalId){
    if(confirm("Press a button delete")){
      this.store.dispatch(new DeleteCompanyActionSucces(globalId));
      new CompanySelectors(this.store).companyList$.subscribe((data: any) => {this.listCompany = data.companyList});
    }
    else{
      alert('Unsuccessfull');
    }
  }
}
