import { Company } from '../models/company.model';
import { AppState} from '../app.state';

import * as CompanyActions from '../actions/company.actions';
import { from } from 'rxjs';

export function CompanyReducer(
   state : Company[] = [],
    action: CompanyActions.ALL) {

    switch (action.type) {
        case CompanyActions.ACTION_GET_LIST_COMPANY:
            return state;
        case CompanyActions.ACTION_GET_LIST_COMPANY_SUCCESS:
            state = [];
            return [...state, action.payload];
        case CompanyActions.ACTION_GET_COMPANY_SUCCESS:
            return [...state, action.payload];
        case CompanyActions.ACTION_ADD_COMPANY_SUCCESS:
            return [...state];
        case CompanyActions.ACTION_UPDATE_COMPANY_SUCCESS:
            return [...state];
        case CompanyActions.ACTION_DELETE_COMPANY_SUCCESS:
            return [...state];
        
            
        default:
            return state;
    }

}
