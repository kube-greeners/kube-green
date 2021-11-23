import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCO2EmissionData = createAsyncThunk('dashboard/fetchco2emissions', async ({namespace,interval,step}) => {
   return await fetch(`${process.env.REACT_APP_API_BASE_URL}/cpu?namespace=${namespace}&interval=${interval}}&step=${step}`)
   .then(res => res.json()) 
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