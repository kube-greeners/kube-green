import { createSlice } from '@reduxjs/toolkit'
import { fetchCO2EmissionData,fetchActivePods,fetchCPU } from '../Utilities/dataFetching'
import { convertDate } from '../Utilities/utilityFunctions'





const initialState = {
  co2: {
    status: "idle",
    data: [
      {
        Date: "10/28/2021",
        "Grams of C02": 477,
      },
      {
        Date: "4/27/2021",
        "Grams of C02": 505,
      },
      {
        Date: "10/2/2021",
        "Grams of C02": 401,
      },
    ],
  },
  cpu: {
    status:'idle',
    allocated:[],
    usage:[],
    currentAllocated:0,
    currentUsage:0
  },
  memory: {
    status: "idle",
    data: [],
  },
  pods: {
    status: "idle",
    data: [],
    currentValue:0
  }
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
        state.co2.status = 'failed'
      })
      .addCase(fetchActivePods.pending, (state, action) => {
        state.pods.status = 'loading'
      })
      .addCase(fetchActivePods.fulfilled, (state, action) => {
        state.pods.status = 'succeeded';
        state.pods.currentValue = action.payload[0].values.pop().pop();
        state.pods.data = action.payload[0].values;
        
      })
      .addCase(fetchActivePods.rejected, (state, action) => {
        state.pods.status = 'failed'
      })
      .addCase(fetchCPU.pending, (state, action) => {
        state.cpu.status = 'loading'
      })
      .addCase(fetchCPU.fulfilled, (state, action) => {
        state.cpu.status = 'succeeded';
        state.cpu.currentUsage = action.payload[0].values.pop().pop();
        state.cpu.usage = action.payload[0].values;
        
      })
      .addCase(fetchCPU.rejected, (state, action) => {
        state.cpu.status = 'failed'
      })
  }
})

export default dashboardSlice.reducer;
