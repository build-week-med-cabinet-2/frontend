import * as Types from "../actions";

const initialState = {
  strains: [
    {
      id: 0,
      name: "OG Kush",
      type: "hybrid",
      rating: 4.4,
      effects: "Relaxed, Hungry, Uplifted",
      description: "mild stuff"
    },
    {
      id: 1,
      name: "Tangie",
      type: "sativa",
      rating: 4.1,
      effects: "Happy, Hungry, Focused",
      description: "strong stuff"
    },
    {
      name: "Bubba Kush",
      type: "indica",
      rating: 4.7,
      effects: "Sleepy, Hungry, Uplifted",
      description: "pretty mild stuff",
      benefit: "helps with anxiety"
    }
  ],
  savedStrains: [
    {
      name: "Bubba Kush",
      type: "indica",
      rating: 4.7,
      effects: "Relaxed, Hungry, Uplifted",
      description: "pretty mild stuff",
      benefit: "helps with anxiety"
    }
  ]
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
