import * as Types from "./actionTypes";

export const addAilment = ailment => {
  console.log(ailment);
  return { type: Types.ADD_AILMENT, payload: ailment };
};

export const removeAilment = ailment => {
  return { type: Types.REMOVE_AILMENT, payload: ailment };
};

export const addStrainToSaved = strain => {
  return { type: Types.ADD_STRAIN_TO_USER_SAVED, payload: strain };
};

export const removeStrainFromSaved = strain => {
  return { type: Types.REMOVE_STRAIN_FROM_USER_SAVED, payload: strain };
};

export const addEntryToLog = entry => {
  return { type: Types.ADD_LOG_TO_DOSAGE_LOGS, payload: entry };
};
