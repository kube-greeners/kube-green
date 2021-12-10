import StatComponent from './Components/StatComponent';
import Co2Emission from './Components/CO2Emission'
import NavBar from './Components/NavBar/NavBar';
import { Card,Divider } from 'antd'
import './App.css';
import {
  useGetPodsQuery,
  useGetCpuUsageQuery,
  useGetCpuAllocationQuery,
  useGetMemoryUsageQuery,
  useGetMemoryAllocationQuery,
  useGetSavedEmissionQuery
} from './redux/apiSlice';
import Selectors from './Layout/Selectors/Selectors';


const queryParams = {namespace:"production",interval:"5d",step:"1h"}

function App() {

  const podFetch = useGetPodsQuery(queryParams);
  const cpuUsageFetch = useGetCpuUsageQuery(queryParams);
  const cpuAllocationFetch = useGetCpuAllocationQuery(queryParams);
  const memoryUsageFetch = useGetMemoryUsageQuery(queryParams);
  const memoryAllocationFetch = useGetMemoryAllocationQuery(queryParams);
  const savedEmissionFetch = useGetSavedEmissionQuery({interval:queryParams.interval,step:queryParams.step});


  return (
    <>
      <NavBar />
      <div className="container">
      <Selectors/>
      <Divider/>
        <div className="layout-grid">
          <Card style={{  gridArea: 'lc' }} title="Estimated CO2 emission"><Co2Emission /></Card>
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
