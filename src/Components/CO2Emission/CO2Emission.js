import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import LineChart from "../LineChart/LineChart";
import React from 'react';
import { useGetCO2EmissionQuery } from "../../redux/apiSlice";



function Co2Emission() {
  const {
    data: usage,
    // isLoading,
    isFetching,
    isSuccess,
    // isError,
    // error
  } = useGetCO2EmissionQuery({namespace:"production",interval:"5d",step:"1h"});

  


  return !isFetching && isSuccess ?
    <LineChart data={usage} />
    : <div style={{ height: 500, display: 'flex', justifyContent:'center',alignItems:'center'}}>
      <LoadingSpinner />
    </div>;

}

export default Co2Emission;
