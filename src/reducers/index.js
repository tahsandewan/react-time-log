import { combineReducers } from "redux";
// import { IntlReducer as Intl } from "react-redux-multilingual";
import authReducer from "./authReducer";
// Import custom reducers
// import foreignerRegistrationReducer from "./foreignerReducer";


const rootReducer = combineReducers({
  auth: authReducer,
//   foreignerReg: foreignerRegistrationReducer,
});

export default rootReducer;
