import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as CompanyActions from '../actions/company.actions';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetListCompanyActionSucces, GetListCompanyAction } from '../actions/company.actions';


export type Action = CompanyActions.ALL;

@Injectable()
export class CompanyEffect {

  constructor(
    private actions: Actions,
    private companyService: CompanyService
  ) { }

  //Get List Company
  @Effect()
  companyList$ = this.actions.pipe(
    ofType(CompanyActions.ACTION_GET_LIST_COMPANY),
    switchMap((action: CompanyActions.GetListCompanyAction) => {
      return this.companyService
        .getCompanies()
        .pipe(map(companyList => {
          return new GetListCompanyActionSucces(companyList);
        }))
    })
  )

  // Add Company
  @Effect()
  addCompany$ = this.actions.pipe(
    ofType(CompanyActions.ACTION_ADD_COMPANY_SUCCESS),
    switchMap((action: CompanyActions.AddCompanyActionSucces) => {
      return this.companyService
        .createCompany(action.payload)
        .pipe(map(result => {
          return new GetListCompanyAction();
        }))
    })
  )

  //Update Company
  @Effect()
  updateCompany$ = this.actions.pipe(
    ofType(CompanyActions.ACTION_UPDATE_COMPANY_SUCCESS),
    switchMap((action: CompanyActions.UpdateCompanyActionSucces) => {
      // console.log(action.globalId, action.payload)
      return this.companyService
        .updateCompamy(action.globalId, action.payload)
        .pipe(map(result => {
          return new GetListCompanyAction();
        }))
    })
  )

  //Delete Company
  @Effect()
  deleteCompany$ = this.actions.pipe(
    ofType(CompanyActions.ACTION_DELETE_COMPANY_SUCCESS),
    switchMap((action: CompanyActions.DeleteCompanyActionSucces) => {
      return this.companyService
        .deleteCompany(action.globalId)
        .pipe(map(result => {
          return new GetListCompanyAction();
        }))
    })
  )

}
