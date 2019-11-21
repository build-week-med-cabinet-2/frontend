import { createSlice } from "@reduxjs/toolkit";

const recomendationSlice = createSlice({
  name: "recommendations",
  initialState: {
    recommendedStrains: [
      {
        id: 0,
        name: "OG Kush",
        type: "hybrid",
        rating: 4.4,
        effects: "Relaxed, Hungry, Uplifted",
        description:
          "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness."
      },
      {
        id: 1,
        name: "Tangie",
        type: "sativa",
        rating: 4.1,
        effects: "Happy, Hungry, Focused",
        description:
          "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness."
      },
      {
        name: "Bubba Kush",
        type: "indica",
        rating: 4.7,
        effects: "Sleepy, Hungry, Uplifted",
        description:
          "The potency of this strain gives the consumer a one-two punch to the head and body. Its effects may help with managing nausea, stress, minor body aches, and sleeplessness."
      }
    ],
    savedStrains: []
  },
  reducers: {
    saveRecommendation(state, action) {
      const strain = action.paylod;
      console.log(strain);
      state.savedStrains.push(strain);
    },
    removeRecommendation(state, action) {
      state.savedStrains.filter(obj => obj.id !== action.payload.id);
    }
  }
});

export const {
  addRecommendation,
  removeRecommendation
} = recomendationSlice.actions;

export default recomendationSlice.reducer;
