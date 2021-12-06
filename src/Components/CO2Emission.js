import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import LineChart from "./Line/LineChart";
import React from 'react';
import { useGetCO2EmissionQuery } from "../redux/apiSlice";
import { convertDate } from "../Utilities/utilityFunctions";



function Co2Emission() {
  const {
    data: usage,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCO2EmissionQuery({namespace:"production",interval:"5d",step:"1h"});

  
  let data;
  if(isSuccess) {
    data = usage[0].values.map(d=>({Date: convertDate(d[0]*1000),"Grams of CO2": parseFloat(d[1])}))
  }
  


  return isSuccess ?
    <LineChart data={data} />
    : <div style={{ height: 500, display: 'flex', justifyContent:'center',alignItems:'center'}}>
      <LoadingSpinner />
    </div>;

}

export default Co2Emission;
