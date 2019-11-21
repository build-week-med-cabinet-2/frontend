import {createSlice} from '@reduxjs/toolkit'

const strainsSlice = createSlice({
  name:'strains',
  initialState: [],
  reducers:{
    getStrains(state, action){}
  }
})

export {getStrains} = strainsSlice.actions;

export default strainsSlice.reducer