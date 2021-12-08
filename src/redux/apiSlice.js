import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getCO2Emission: builder.query({
      query: ({namespace,interval,step}) => `/co2_emission_with_kube_green?namespace=${namespace}&interval=${interval}&step=${step}`
    }),
  }),
})


export const { useGetCO2EmissionQuery } = apiSlice



