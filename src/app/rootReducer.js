import { combineReducers } from "redux";

import ailmentsReducer from "../features/ailments/ailmentsSlice";
import { strainReducer as strains } from "../redux/reducers/strainReducer";
import { dosageReducer as dosages } from "../redux/reducers/dosageReducer";
import { loginReducer as logon } from "../redux/reducers/loginReducer";

export default combineReducers({
  ailments: ailmentsReducer,
  strains,
  dosages,
  logon
});
