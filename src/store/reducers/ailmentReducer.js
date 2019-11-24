import * as Types from "../actions";

const initialState = {
  ailments: [
    {
      ailmentName: "AilmentTest",
      yearsUse: 1,
      painLevel: 1,
      id: 0
    }
  ]
};

export const ailmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_AILMENT:
      const { ailmentName, yearsUse, painLevel } = action.payload;
      const newAilment = {
        ailmentName: ailmentName,
        yearsUse: yearsUse,
        painLevel: painLevel,
        id: Date.now()
      };
      return {
        ...state,
        ailments: [...state.ailments, newAilment]
      };
    case Types.REMOVE_AILMENT:
      return {
        ...state,
        ailments: [
          ...state.ailments.filter(obj => obj.id !== action.payload.id)
        ]
      };
    case Types.UPDATE_AILMENT:
      const { id, changes } = action.payload;
      const changedAilment = {
        ailmentName: changes.ailmentName,
        yearsUse: changes.yearsUse,
        painLevel: changes.painLevel
      };
      return {
        ...state
      };
    default:
      return state;
  }
};
