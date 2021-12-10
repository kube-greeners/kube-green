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
    },
  },
  interval: {
    startDate: '2021/12/01',
    endDate: '2021/12/09'
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
    setCurrentInterval: (state, action) => {
      state.interval.startDate = action.payload[0]
      state.interval.endDate = action.payload[1]
    }
  },

})

export const { setCurrentlySelectedNamespace,setCurrentlySelectedResource, setCurrentInterval } = dashboardSlice.actions

export default dashboardSlice.reducer;
