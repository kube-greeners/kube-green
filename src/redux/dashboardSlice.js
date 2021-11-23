import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCO2EmissionData = createAsyncThunk('dashboard/fetchco2emissions', async () => {
   //TODO Fetch 
})

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    exampleValue: "initialExampleValue",
  },
  reducers: {
    changeExampleValue: (state, action) => {
      state.exampleValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeExampleValue } = dashboardSlice.actions

export default dashboardSlice.reducer