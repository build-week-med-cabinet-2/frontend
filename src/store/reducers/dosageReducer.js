import * as Types from "../actions";

const initialState = {
  entries: [
    {
      id: 1,
      dosageDate: "11/19/2019",
      strain: "Trainwreck Haze",
      dosageAmount: 100,
      intakeMethod: "vape"
    }
  ]
};

export const dosageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_LOG_TO_DOSAGE_LOGS:
      const newEntry = action.payload;
      const entry = { ...newEntry, id: Date.now() };
      return { ...state, entries: [...state.entries, entry] };
    default:
      return state;
  }
};
