import { combineReducers } from "redux";

import ailmentsReducer from "../features/ailments/ailmentsSlice";
import { strainReducer as strains } from "./strainReducer";
import { dosageReducer as dosages } from "./dosageReducer";
import { loginReducer as logon } from "./loginReducer";

export default combineReducers({
  ailments: ailmentsReducer,
  strains,
  dosages,
  logon
});
