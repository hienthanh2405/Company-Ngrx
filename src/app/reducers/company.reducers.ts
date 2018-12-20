import { Company } from '../models/company.model';
import { AppState} from '../app.state';

import * as CompanyActions from '../actions/company.actions';
import { from } from 'rxjs';

// export const initialAppState: AppState = {
//     companyList: Array<Company>()
//   };

export function CompanyReducer(
   // state: AppState = initialAppState,
   state : Company[] = [],
    action: CompanyActions.ALL) {

    switch (action.type) {
        case CompanyActions.ACTION_GET_LIST_COMPANY:
            return state;
        case CompanyActions.ACTION_ADD_COMPANY_SUCCESS:
            return [...state, action.payload];
        case CompanyActions.ACTION_GET_LIST_COMPANY_SUCCESS:
            state = [];
            return [...state, action.payload];

        // case ACTION_DELETE_COMPANY:
        //     return state.filter(({ id }) => id !== action.id);
        
        default:
            return state;
    }

}


// Section 2
// export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

//     // Section 3
//     switch(action.type) {
//         case TutorialActions.ADD_TUTORIAL:
//             return [...state, action.payload];
//         default:
//             return state;
//     }
//   }