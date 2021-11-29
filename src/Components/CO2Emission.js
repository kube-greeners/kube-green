import { useSelector } from "react-redux";
import LineChart from "./Line/LineChart";
// import data from "../Mockdata/c02emission.json"

function Co2Emission() {
  const data = useSelector((state) => state.dashboard.co2.data);
  const loadingStatus = useSelector(state => state.dashboard.co2.status);

  return <LineChart data = {data} loadingStatus ={loadingStatus} />;
}

export default Co2Emission;
