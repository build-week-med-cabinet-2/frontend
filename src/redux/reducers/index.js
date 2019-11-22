import { combineReducers } from "redux";

import { strainReducer as strains } from "./strainReducer";
import { ailmentReducer as ailments } from "./ailmentReducer";
import { dosageReducer as dosages } from "./dosageReducer";
import { loginReducer as logon } from "./loginReducer";

export default combineReducers({
  strains,
  ailments,
  dosages,
  logon
});
