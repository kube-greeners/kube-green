import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import LineChart from "./Line/LineChart";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCO2EmissionData } from "../Utilities/dataFetching";
import { useEffect } from 'react';


function Co2Emission() {
  const data = useSelector((state) => state.dashboard.co2.data);
  const loadingStatus = useSelector(state => state.dashboard.co2.status);

  const dispatch = useDispatch();

  useEffect(() => {
    const namespace = "production"
    const interval = "5d"
    const step = "1h"

    //Make sure we only fetch the data once. 
    //TODO: check edge cases for failed when we have the correct endpoint
    if (loadingStatus === 'idle') {
      dispatch(fetchCO2EmissionData({ namespace, interval, step }))
    }

  }, [dispatch, loadingStatus])

  return loadingStatus === 'succeeded' ?
    <LineChart data={data} loadingStatus={loadingStatus} />
    : <div style={{ height: 500, display: 'flex', justifyContent:'center',alignItems:'center'}}>
      <LoadingSpinner />
    </div>;

}

export default Co2Emission;
