import { createSlice } from '@reduxjs/toolkit'
import { fetchCO2EmissionData,fetchActivePods, fetchCpuUsage, fetchCpuAllocation, fetchMemoryUsage, fetchMemoryAllocation } from '../Utilities/dataFetching'
import { convertDate } from '../Utilities/utilityFunctions'

const initialState = {
  co2: {
    status: "idle",
    data: [],
  },
  cpu: {
    statusUsage:'idle',
    statusAllocation:'idle',
    allocated:[],
    usage:[],
    currentAllocated:0,
    currentUsage:0
  },
  memory:{
    statusUsage:'idle',
    statusAllocation:'idle',
    allocated:[],
    usage:[],
    currentAllocated:0,
    currentUsage:0
  },
  pods: {
    status: "idle",
    data: [],
    currentValue: 0,
  },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //Co2Emission
      .addCase(fetchCO2EmissionData.pending, (state, action) => {
        state.co2.status = "loading";
      })
      .addCase(fetchCO2EmissionData.fulfilled, (state, action) => {
        state.co2.status = "succeeded";
        //We are just using the CPU data from first pod in the array. When when KG-121 it should just be state.Co2DiagramData = action.payload.values
        console.log(action.payload[0]);
        const transformedData = action.payload[0].values.map(d=>({Date: convertDate(d[0]*1000),"Grams of C02": parseFloat(d[1])}));
        state.co2.data = transformedData;
      })
      .addCase(fetchCO2EmissionData.rejected, (state, action) => {
        state.co2.status = "failed";
      })
      //Active pods
      .addCase(fetchActivePods.pending, (state, action) => {
        state.pods.status = "loading";
      })
      .addCase(fetchActivePods.fulfilled, (state, action) => {
        state.pods.status = "succeeded";
        state.pods.currentValue = action.payload[0].values.pop().pop();
        state.pods.data = action.payload[0].values;
      })
      .addCase(fetchActivePods.rejected, (state, action) => {
        state.pods.status = "failed";
      })
      //Cpu usage
      .addCase(fetchCpuUsage.pending, (state, action) => {
        state.cpu.statusUsage = 'loading'
      })
      .addCase(fetchCpuUsage.fulfilled, (state, action) => {
        state.cpu.statusUsage = 'succeeded';
        state.cpu.currentUsage = action.payload[0].values.pop().pop();
        state.cpu.usage = action.payload[0].values;
      })
      .addCase(fetchCpuUsage.rejected, (state, action) => {
        state.cpu.statusUsage = 'failed'
      })
      //cpu allocation
      .addCase(fetchCpuAllocation.pending, (state, action) => {
        state.cpu.statusAllocation = 'loading'
      })
      .addCase(fetchCpuAllocation.fulfilled, (state, action) => {
        state.cpu.statusAllocation = 'succeeded';
        if(action.payload.values.length !== 0){
          state.cpu.currentAllocated = action.payload[0].values.pop().pop();
          state.cpu.allocated = action.payload[0].values;
        }
      })
      .addCase(fetchCpuAllocation.rejected, (state, action) => {
        state.cpu.statusAllocation = 'failed'
      })
      //memory usage
      .addCase(fetchMemoryUsage.pending, (state, action) => {
        state.memory.statusUsage = 'loading'
      })
      .addCase(fetchMemoryUsage.fulfilled, (state, action) => {
        state.memory.statusUsage = 'succeeded';
        state.memory.currentUsage = action.payload[0].values.pop().pop();
        state.memory.usage = action.payload[0].values;
      })
      .addCase(fetchMemoryUsage.rejected, (state, action) => {
        state.memory.statusUsage = 'failed'
      })
      //memory allocation
      .addCase(fetchMemoryAllocation.pending, (state, action) => {
        state.cpu.statusAllocation = 'loading'
      })
      .addCase(fetchMemoryAllocation.fulfilled, (state, action) => {
        state.memory.statusAllocation = 'succeeded';
        if(action.payload[0].values.length !== 0){
          state.memory.currentAllocated = action.payload[0].values.pop().pop();
          state.memory.allocated = action.payload[0].values;
        }
      })
      .addCase(fetchMemoryAllocation.rejected, (state, action) => {
        state.memory.statusAllocation = 'failed'
      })
  }
})

export default dashboardSlice.reducer;
