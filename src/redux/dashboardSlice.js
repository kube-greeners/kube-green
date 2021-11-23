import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCO2EmissionData = createAsyncThunk('dashboard/fetchco2emissions', async ({namespace,interval,step}) => {
   return await fetch(`${process.env.REACT_APP_API_BASE_URL}/cpu?namespace=${namespace}&interval=${interval}}&step=${step}`)
   .then(res => res.json()) 
})

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    exampleValue: "initialExampleValue",
    status:'idle',

  },
  reducers: {
    changeExampleValue: (state, action) => {
      state.exampleValue = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCO2EmissionData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCO2EmissionData.fulfilled, (state, action) => {
        state.status = 'succeeded'
      })
      .addCase(fetchCO2EmissionData.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

// Action creators are generated for each case reducer function
export const { changeExampleValue } = dashboardSlice.actions

export default dashboardSlice.reducer