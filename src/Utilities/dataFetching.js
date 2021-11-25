import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCO2EmissionData = createAsyncThunk('dashboard/fetchco2emissions', async ({namespace,interval,step}) => {
    //This url will fetch the CPU usage for each pod. It should be changed when KG-121 is done to the correct URL 
     return await fetch(`${process.env.REACT_APP_API_BASE_URL}/cpu?namespace=${namespace}&interval=${interval}}&step=${step}`)
     .then(res => res.json()) 
  })
