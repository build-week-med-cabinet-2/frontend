import { createSlice } from "@reduxjs/toolkit";

const ailmentsSlice = createSlice({
  name: "ailments",
  initialState: [],
  reducers: {
    addAilment(state, action) {
      const { ailment, ailment_description } = action.payload;
      const newAilment = {
        ailment,
        ailment_description,
        id: Date.now()
      };
      state.push(newAilment);
    },
    removeAilment(state, action) {
      state.filter(obj => obj.id !== action.payload.id);
    }
  }
});

export const { addAilment, removeAilment } = ailmentsSlice.actions;

export default ailmentsSlice.reducer;
