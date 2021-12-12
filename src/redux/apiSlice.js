import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { convertDate } from '../Utilities/utilityFunctions'

//Converts the historical data to a format that the linechart can use
const convertHistoricalData = (data,xAxisName) => {

  const res = [];

  for (const d of data) {
    const o = {};
    o["Date"] = convertDate(d[0]*1000)
    o[xAxisName] = parseFloat(d[1])

    res.push(o)
  }

  return res
}

const transformResponse = resData => {
  const currentValue = parseFloat(resData[0].values.pop().pop());
  const data = resData[0].values;
  return {currentValue,data};
}


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getCO2Emission: builder.query({
      query: ({namespace,interval,step}) => `/co2_emission_with_kube_green?namespace=${namespace}&interval=${interval}&step=${step}`,
      transformResponse: resData => {
        return resData[0].values.map(d=>({Date: convertDate(d[0]*1000),"Grams of CO2": parseFloat(d[1])}))
      }
    }),
    getPods: builder.query({
      query: ({namespace,interval,step}) => `/all_active_pods?namespace=${namespace}&interval=${interval}&step=${step}`,
      transformResponse
    }),
    getCpuUsage: builder.query({
      query: ({namespace,interval,step}) => `/cpu_usage?namespace=${namespace}&interval=${interval}&step=${step}`,
      transformResponse
    }),
    getCpuAllocation: builder.query({
      query: ({namespace,interval,step}) => `cpu_allocation?namespace=${namespace}&interval=${interval}&step=${step}`,
      transformResponse
    }),
    getMemoryUsage: builder.query({
      query: ({namespace,interval,step}) => `/memory_usage?namespace=${namespace}&interval=${interval}&step=${step}`,
      transformResponse
    }),
    getMemoryAllocation: builder.query({
      query: ({namespace,interval,step}) => `/memory_allocation?namespace=${namespace}&interval=${interval}&step=${step}`,
      transformResponse
    }),
    getSavedEmission: builder.query({
      query: ({interval,step}) => `saved_co2_emission?interval=${interval}}&step=${step}`,
      transformResponse: resData => {
        return parseFloat(resData[0].values.pop().pop())
      }
    }),
  }),
})


export const { 
  useGetCO2EmissionQuery,
  useGetPodsQuery, 
  useGetCpuUsageQuery,
  useGetCpuAllocationQuery,
  useGetMemoryUsageQuery,
  useGetMemoryAllocationQuery,
  useGetSavedEmissionQuery
} = apiSlice



