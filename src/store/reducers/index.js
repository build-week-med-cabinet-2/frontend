import { combineReducers } from "redux";

import { strainReducer as strains } from "./strainReducer";
import { ailmentReducer as ailments } from "./ailmentReducer";

export default combineReducers({
  strains,
  ailments
});
