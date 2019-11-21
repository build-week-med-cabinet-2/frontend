import { combineReducers } from "redux";

import { strainReducer as strains } from "./strainReducer";
import { ailmentReducer as ailments } from "./ailmentReducer";
import { dosageReducer as dosages } from "./dosageReducer";

export default combineReducers({
  strains,
  ailments,
  dosages
});
