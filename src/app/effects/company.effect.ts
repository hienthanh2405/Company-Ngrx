import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as CompanyActions from '../actions/company.actions';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetListCompanyAction, GetListCompanyActionSucces } from '../actions/company.actions';
import { CompanyToAdd } from '../models/companytoadd.model';


export type Action = CompanyActions.ALL;

@Injectable()
export class CompanyEffect {

  constructor(
    private actions: Actions,
    private companyService: CompanyService
  ) { }

  @Effect()
  companyList$ = this.actions.pipe(
    ofType(CompanyActions.ACTION_GET_LIST_COMPANY),
    switchMap((action: CompanyActions.GetListCompanyAction) => {
      return this.companyService
        .getCompanies()
        .pipe(map(companyList => {
          //  console.log("effect", companyList);
          return new GetListCompanyActionSucces(companyList);
        }))
    })
  )


  @Effect()
  addCompany$ = this.actions.pipe(
    ofType(CompanyActions.ACTION_ADD_COMPANY_SUCCESS),
    switchMap((action: CompanyActions.AddCompanyActionSucces) => {
      return this.companyService
        .createCompany(CompanyToAdd)
        .pipe(map(companyList => {
          return new GetListCompanyActionSucces(companyList);
        }))
    })
  )

}
