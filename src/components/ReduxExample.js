import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeExampleValue } from "../redux/dashboardSlice";

export default function ReduxExample() {
  // Setup of store-variables
  const { exampleValue } = useSelector((state) => state.dashboard);

  // Setup of store-actions
  const dispatch = useDispatch();
  const exampleDispatch = (newValue) => dispatch(changeExampleValue(newValue));

  return (
    <div>
      {/* Example how you display/use the redux value */}
      <div>This is the state: {exampleValue} </div>
      {/* Example how you change the redux value */}
      <button onClick={() => exampleDispatch("This is the new example value")}>
        Change the state
      </button>
    </div>
  );
}
