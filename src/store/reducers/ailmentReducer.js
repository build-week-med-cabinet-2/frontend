import * as Types from "../actions";

const initialState = {
  ailments: [
    { id: 0, name: "AilmentTest0", yearsUse: 1, painLevel: 1 },
    { id: 1, name: "AilmentTest1", yearsUse: 1, painLevel: 1 },
    { id: 2, name: "AilmentTes2", yearsUse: 2, painLevel: 2 }
  ]
};

export const ailmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_AILMENT:
      console.log("hello!");
    default:
      return state;
  }
};
