import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    exampleValue: "initialExampleValue",
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