import * as Types from "./actionTypes";

export const addAilment = ailment => {
  return { type: Types.ADD_AILMENT, payload: ailment };
};

export const removeAilment = ailment => {
  return { type: Types.REMOVE_AILMENT, payload: ailment };
};

export const addStrain = strain => {
  return { type: Types.ADD_STRAIN, payload: strain };
};

export const removeStrain = strain => {
  return { type: Types.REMOVE_STRAIN, payload: strain };
};
