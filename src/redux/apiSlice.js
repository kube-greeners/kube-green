import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { convertDate } from '../Utilities/utilityFunctions'


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
  }),
})


export const { useGetCO2EmissionQuery } = apiSlice



