import { useSelector } from "react-redux";
import data from './../Mockdata/c02emission.json';
import LineChart from "./Line/LineChart";

function CO2Emission() {
  const { CO2Emission } = useSelector((state) => state.dashboard);

  //Later this should be moved so that the fetching handles the sorting, ie. redux is already sorted
  data.sort((a, b) => {
    return new Date(a.data) - new Date(b.data);
  });

  return <LineChart data={CO2Emission} />;
}

export default CO2Emission;
