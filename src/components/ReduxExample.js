import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { exampleAction } from "../redux/dashboard/dashboard.actions";

function ReduxExample() {
  // Setup of store-actions
  const dispatch = useDispatch();
  const exampleDispatchForOurExampleStoredValue = (newValue) => dispatch(exampleAction(newValue));

  // Setup of store-variables
  const ourExampleStoredValue = useSelector(
    (state) => state.dashboard.ourExampleStoredValue
  );

  const handleClick = () => {
    //Example showing how you change the redux value
    exampleDispatchForOurExampleStoredValue("This is the new example value")
  };

  return (
    <div>
    {/* Example how you display/use the redux value */}
      <div>This is the state: {ourExampleStoredValue} </div>
      <button onClick={handleClick}>Change the state</button>
    </div>
  );
}

export default connect()(ReduxExample);
