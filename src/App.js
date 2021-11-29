import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Col, Row, Card } from 'antd'

import './App.css';
import data from './Mockdata/c02emission.json';
import LineChart from './Components/Line/LineChart';
import { fetchCO2EmissionData, fetchActivePods, fetchCpuUsage, fetchCpuAllocation, fetchMemoryUsage, fetchMemoryAllocation } from './Utilities/dataFetching';


function App() {

  const statusCo2 = useSelector(state => state.dashboard.co2.status);
  const statusCpuUsage = useSelector(state => state.dashboard.cpu.statusUsage);
  const statusCpuAllocation = useSelector(state => state.dashboard.cpu.statusAllocation);
  const statusMemoryUsage = useSelector(state => state.dashboard.memory.statusUsage);
  const statusMemoryAllocation = useSelector(state => state.dashboard.memory.statusAllocation);

  const statusPods = useSelector(state => state.dashboard.pods.status);
  const active_pods = useSelector(state => state.dashboard.pods.currentValue);
  const cpu_usage = useSelector(state => state.dashboard.cpu.currentUsage);
  const cpu_allocation = useSelector(state => state.dashboard.cpu.currentAllocated);
  const memory_usage = useSelector(state => state.dashboard.memory.currentUsage);
  const memory_allocation = useSelector(state => state.dashboard.memory.currentAllocated);



  const dispatch = useDispatch();

    useEffect(() => {
      const namespace = "production"
      const interval = "30m"
      const step = "10s"
      
      //Make sure we only fetch the data once. 
      //TODO: check edge cases for failed when we have the correct endpoint
      if(statusCo2 === 'idle') {
        dispatch(fetchCO2EmissionData({namespace,interval,step}))
      }
      if(statusCpuUsage === 'idle') {
        dispatch(fetchCpuUsage({namespace,interval,step}))
      }
      if(statusCpuAllocation === 'idle') {
        dispatch(fetchCpuAllocation({namespace,interval,step}))
      }
      if(statusPods === 'idle') {
        dispatch(fetchActivePods({namespace,interval,step}))
      }
      if(statusMemoryUsage === 'idle') {
        dispatch(fetchMemoryUsage({namespace,interval,step}))
      }
      if(statusMemoryAllocation === 'idle') {
        dispatch(fetchMemoryAllocation({namespace,interval,step}))
      }

    }, [dispatch,statusCo2, statusCpuAllocation, statusCpuUsage, statusPods, statusMemoryUsage, statusMemoryAllocation])
 
  return (
    <div className="container">
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card title="Line chart"><LineChart data = {data}/> </Card>
        </Col>
        <Col span={8} className="flexcolumn">  
          <Card style={{flex:'1'}} title="Saved Emission"></Card>
          <Card style={{flex:'1'}} title="CPU Usage and Allocation">{cpu_usage} / {cpu_allocation} </Card>
          <Card style={{flex:'1'}} title="Memory Usage  and Allocation">{memory_usage} / {memory_allocation} </Card>
          <Card style={{flex:'1'}} title="N Active Pod">{active_pods}</Card>  
        </Col>
      </Row>
    </div>
  );
}

export default App;
