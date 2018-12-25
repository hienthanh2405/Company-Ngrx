import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { Company } from "../models/company.model";


@Injectable()
export class CompanySelectors {
  public companyList$ : Observable<Company[]>;

  constructor(
    private store: Store<any>
  ) {
    this.companyList$ = store.select('companyList');
    console.log(store.select('companyList'), "companylist");
  }
}
