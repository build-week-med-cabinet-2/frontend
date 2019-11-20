import * as Types from "../actions";
import { types } from "@babel/core";

const initialState = {
  strains: [
    {
      id: 0,
      name: "OG Kush",
      type: "hybrid",
      description: "mild stuff",
      benefit: "helps with pain",
      dosageRec: "5mg"
    },
    {
      id: 1,
      name: "Tangie",
      type: "sativa",
      description: "strong stuff",
      benefit: "helps with pain a lot",
      dosageRec: "3mg"
    },
    {
      name: "Bubba Kush",
      type: "indica",
      description: "pretty mild stuff",
      benefit: "helps with anxiety",
      dosageRec: "8mg"
    }
  ],
  savedStrains: []
};

export const strainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_STRAIN_TO_USER_SAVED:
      const strain = action.payload;
      console.log(strain);
      return {
        ...state,
        savedStrains: [...state.savedStrains, strain]
      };
    case Types.REMOVE_STRAIN_FROM_USER_SAVED:
      return {
        ...state,
        savedStrains: [
          ...state.savedStrains.filter(obj => obj.id !== action.payload.id)
        ]
      };
    default:
      return state;
  }
};
