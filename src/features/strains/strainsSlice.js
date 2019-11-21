import {createSlice} from '@reduxjs/toolkit'

//strain constants
const GET_STRAINS_START = 'GET_STRAINS_START'
const GET_STRAINS_FAIL = 'GET_STRAINS_FAIL'
const GET_STRAINS_SUCCESS = 'GET_STRAINS_SUCCESS'



const strainsSlice = createSlice({
  name:'strains',
  initialState: [],
  reducers:{
    getStrains = () => dispatch => {
      console.log('helloword')
    }
  }
})

export {getStrains} = strainsSlice.actions;

export default strainsSlice.reducer

