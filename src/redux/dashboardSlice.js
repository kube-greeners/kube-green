import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selects: {
    namespaces: {
      currentlySelected: 'production',
      data: [
        'production',
        'namespace1',
        'namespace2',
        'namespace3',
        'namespace4',
      ]
    },
    resources: {
      currentlySelected: 'Estimated CO2 Emission',
      data: [
        'CPU allocation',
        'CPU usage',
        'Memory usage',
        'Memory allocation',
        'Active Pods',
        'Estimated CO2 Emission',
      ]
    }
  }
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCurrentlySelectedNamespace: (state, action) => {
      state.selects.namespaces.currentlySelected = action.payload
    },
    setCurrentlySelectedResource: (state, action) => {
      state.selects.resources.currentlySelected = action.payload
    },
  },

})

export default dashboardSlice.reducer;
