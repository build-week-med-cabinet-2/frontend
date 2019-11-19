import * as Types from "./actionTypes";

export const addAilment = ailment => {
  return { type: Types.ADD_AILMENT, payload: ailment };
};

export const removeAilment = ailment => {
  return { type: Types.REMOVE_AILMENT, payload: ailment };
};
