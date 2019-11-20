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
  ]
};

export const strainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
