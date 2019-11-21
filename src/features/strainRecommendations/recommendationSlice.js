import { createSlice } from "@reduxjs/toolkit";

const recomendationSlice = createSlice({
  name: "recommendations",
  initialState: [],
  reducers: {
    addRecommendation(state, action) {},
    removeRecommendation(state, action) {}
  }
});

export const {
  addRecommendation,
  removeRecommendation
} = recomendationSlice.actions;

export default recomendationSlice.reducer;
