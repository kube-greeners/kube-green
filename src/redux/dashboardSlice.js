import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    exampleValue: "initialExampleValue",
    CO2Emission: [
      {
          "Date": "10/28/2021",
          "Grams of C02": 477
      },
      {
          "Date": "4/27/2021",
          "Grams of C02": 505
      },
      { 
          "Date": "10/2/2021",
          "Grams of C02": 401
      },]
  },
  reducers: {
    changeExampleValue: (state, action) => {
      state.exampleValue = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeExampleValue } = dashboardSlice.actions

export default dashboardSlice.reducer