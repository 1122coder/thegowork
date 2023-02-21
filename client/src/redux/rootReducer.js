import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import { generalReducer } from "./general/reducer";
import { pricingReducer } from "./pricing/reducer";
import authAdminReducer from "./AdminAuth/reducer";
export default combineReducers({ authReducer,
        generalReducer,
        pricingReducer,
        authAdminReducer,
     });
