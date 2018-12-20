import { Company } from '../models/company.model';
import { Action } from '@ngrx/store';

export const ACTION_GET_LIST_COMPANY = 'Company_Get_List';
export const ACTION_GET_LIST_COMPANY_SUCCESS = 'Company_Get_List_Succes';
export const ACTION_ADD_COMPANY_SUCCESS = 'Company_Add_Succes';
export const ACTION_DELETE_COMPANY_SUCCES = 'Company_Delete_Succes';

export class GetListCompanyAction implements Action {
    readonly type = ACTION_GET_LIST_COMPANY;
    constructor() { }
}

export class GetListCompanyActionSucces implements Action {
    readonly type = ACTION_GET_LIST_COMPANY_SUCCESS;
    constructor(public payload: any) { }
}

export class AddCompanyActionSucces implements Action {
    readonly type = ACTION_ADD_COMPANY_SUCCESS;
    constructor(public payload: any) { }
}


export class DeleteCompanyActionSucces implements Action {
    readonly type = ACTION_DELETE_COMPANY_SUCCES;
    constructor(public id: string) { }
}

export type ALL = GetListCompanyAction | DeleteCompanyActionSucces | GetListCompanyActionSucces | AddCompanyActionSucces;
