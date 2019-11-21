import { combineReducers } from "redux";

import ailmentsReducer from "../features/ailments/ailmentsSlice";
import recommendationReducer from "../features/strainRecommendations/recommendationSlice";
import { strainReducer as strains } from "../features/strains/strainsSlice";
import { dosageReducer as dosages } from "../redux/reducers/dosageReducer";
import { loginReducer as logon } from "../redux/reducers/loginReducer";

export default combineReducers({
  ailments: ailmentsReducer,
  strains,
  recommendations: recommendationReducer,
  dosages,
  logon
});
