import { createSlice } from '@reduxjs/toolkit'
import { fetchCO2EmissionData } from '../Utilities/dataFetching'


const initialState = {
  status:'idle',
  Co2DiagramData: [],
  CpuStats: [],
  MemoryStats: [],
  ActivePodsStats: []
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
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