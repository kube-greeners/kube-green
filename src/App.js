import StatComponent from './Components/StatComponent/StatComponent';
import Co2Emission from './Components/CO2Emission/CO2Emission'
import NavBar from './Components/NavBar/NavBar';
import { Card,Divider } from 'antd'
import LineChartCard from './Components/LineChartCard/LineChartCard';
import { useSelector } from 'react-redux';
import './App.css';
import {
  useGetPodsQuery,
  useGetCpuUsageQuery,
  useGetCpuAllocationQuery,
  useGetMemoryUsageQuery,
  useGetMemoryAllocationQuery,
  useGetSavedEmissionQuery,
  useGetCO2EmissionQuery
} from './redux/apiSlice';
import Selectors from './Components/Selectors';


const queryParams = {namespace:"production",interval:"5d",step:"1h"}

function App() {

  const {namespaces,resources} = useSelector(state => state.dashboard.selects);

  const podFetch = useGetPodsQuery(queryParams);
  const cpuUsageFetch = useGetCpuUsageQuery(queryParams);
  const cpuAllocationFetch = useGetCpuAllocationQuery(queryParams);
  const memoryUsageFetch = useGetMemoryUsageQuery(queryParams);
  const memoryAllocationFetch = useGetMemoryAllocationQuery(queryParams);
  const co2EmissionQuery = useGetCO2EmissionQuery(queryParams);
  const savedEmissionFetch = useGetSavedEmissionQuery({interval:queryParams.interval,step:queryParams.step});

  let currentLinecart;
  switch(resources.currentlySelected) {
    case 'Active Pods':
      currentLinecart = <LineChartCard currentlyShowing="Active Pods" dataFetching={podFetch}/>
      break;
    case 'CPU allocation':
      currentLinecart = <LineChartCard currentlyShowing="CPU allocation" dataFetching={cpuAllocationFetch}/>
      break;
    case 'CPU usage':
      currentLinecart = <LineChartCard currentlyShowing="CPU usage" dataFetching={cpuUsageFetch}/>
      break;
    case 'Memory usage':
      currentLinecart = <LineChartCard currentlyShowing="Memory usage" dataFetching={memoryUsageFetch}/>
      break;
    case 'Memory allocation':
      currentLinecart = <LineChartCard currentlyShowing="Memory allocation" dataFetching={memoryAllocationFetch}/>
      break;
    case 'Estimated CO2 Emission':
      currentLinecart = <LineChartCard currentlyShowing="Estimated CO2 Emission" dataFetching={co2EmissionQuery}/>
      break;

  }



  return (
    <>
      <NavBar />
      <div className="container">
      <Selectors/>
      <Divider/>
        <div className="layout-grid">
          {currentLinecart}
          <StatComponent
            gridArea="b1"
            title="Saved Emission"
            loaded1={savedEmissionFetch.isSuccess}
            stat1={savedEmissionFetch.data} unit={'grams'}
          />
          <StatComponent
            gridArea="b2"
            title="CPU Usage and Allocation"
            loaded1={cpuAllocationFetch.isSuccess}
            loaded2={cpuUsageFetch.isSuccess}
            stat1={cpuAllocationFetch.data?.currentValue}
            stat2={cpuUsageFetch.data?.currentValue} unit={'core'}
          />
          <StatComponent
            gridArea="b3"
            title="Memory Usage  and Allocation"
            loaded1={memoryAllocationFetch.isSuccess}
            loaded2={memoryUsageFetch.isSuccess} stat1={memoryAllocationFetch.data?.currentValue}
            stat2={memoryUsageFetch.data?.currentValue} unit={'GB'}
          />
          <StatComponent
            gridArea="b4"
            title="N Active Pod"
            loaded1={podFetch.isSuccess}
            stat1={podFetch.data?.currentValue}
          />
        </div>
      </div>
    </>
  );
}

export default App;
