import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCO2EmissionData = createAsyncThunk('dashboard/fetchco2emissions', async ({namespace,interval,step}) => {
    //This url will fetch the CPU usage for each pod. It should be changed when KG-121 is done to the correct URL 
     return await fetch(`${process.env.REACT_APP_API_BASE_URL}/co2_emission_with_kube_green?namespace=${namespace}&interval=${interval}}&step=${step}`)
     .then(res => res.json()) 
  })

export const fetchActivePods = createAsyncThunk('dashboard/fetchpods', async ({namespace,interval,step}) => {
     return await fetch(`${process.env.REACT_APP_API_BASE_URL}/all_active_pods?namespace=${namespace}&interval=${interval}}&step=${step}`)
     .then(res => res.json()) 
})

export const fetchCpuUsage = createAsyncThunk('dashboard/cpuUsage', async ({namespace,interval,step}) => {
     return await fetch(`${process.env.REACT_APP_API_BASE_URL}/cpu_usage?namespace=${namespace}&interval=${interval}}&step=${step}`)
     .then(res => res.json()) 
})

export const fetchCpuAllocation = createAsyncThunk('dashboard/cpuAllocation', async ({namespace,interval,step}) => {
     return await fetch(`${process.env.REACT_APP_API_BASE_URL}/cpu_allocation?namespace=${namespace}&interval=${interval}}&step=${step}`)
     .then(res => res.json()) 
})

export const fetchMemoryUsage = createAsyncThunk('dashboard/memoryUsage', async ({namespace,interval,step}) => {
     return await fetch(`${process.env.REACT_APP_API_BASE_URL}/memory_usage?namespace=${namespace}&interval=${interval}}&step=${step}`)
     .then(res => res.json()) 
})

export const fetchMemoryAllocation = createAsyncThunk('dashboard/memoryAllocation', async ({namespace,interval,step}) => {
     return await fetch(`${process.env.REACT_APP_API_BASE_URL}/memory_allocation?namespace=${namespace}&interval=${interval}}&step=${step}`)
     .then(res => res.json()) 
})
