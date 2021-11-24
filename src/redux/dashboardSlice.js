import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCO2EmissionData = createAsyncThunk('dashboard/fetchco2emissions', async ({namespace,interval,step}) => {
  //This url will fetch the CPU usage for each pod. It should be changed when KG-121 is done to the correct URL 
   return await fetch(`${process.env.REACT_APP_API_BASE_URL}/cpu?namespace=${namespace}&interval=${interval}}&step=${step}`)
   .then(res => res.json()) 
})

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    status:'idle',
    Co2DiagramData: [],
    CpuStats: [],
    MemoryStats: [],
    ActivePodsStats: [], 
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCO2EmissionData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCO2EmissionData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        //We are just using the CPU data from first pod in the array. When when KG-121 it should just be state.Co2DiagramData = action.payload.values 
        state.Co2DiagramData = action.payload[0].values;
      })
      .addCase(fetchCO2EmissionData.rejected, (state, action) => {
        state.status = 'failed'
      })
  }
})

export default dashboardSlice.reducer