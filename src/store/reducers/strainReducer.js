const initialState = {
  strains: [
    {
      id: 0,
      name: "Northern Lights",
      type: "Indica",
      desc: "The Cannabis Choice Of Creed Bratton",
      benefits: "Comedy, Musical Talent, being forever turning 30 next November"
    }
  ]
};

export const strainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
