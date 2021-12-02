import StatComponent from './Components/StatComponent';
import Co2Emission from './Components/CO2Emission'
import { fetchActivePods, fetchCpuUsage, fetchCpuAllocation, fetchMemoryUsage, fetchMemoryAllocation } from './Utilities/dataFetching';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react';
import { Card } from 'antd'
import './App.css';


function App() {

  const statusCpuUsage = useSelector(state => state.dashboard.cpu.statusUsage);
  const statusCpuAllocation = useSelector(state => state.dashboard.cpu.statusAllocation);
  const statusMemoryUsage = useSelector(state => state.dashboard.memory.statusUsage);
  const statusMemoryAllocation = useSelector(state => state.dashboard.memory.statusAllocation);
  const statusPods = useSelector(state => state.dashboard.pods.status);

  const fetchingCpuUsageRef = useRef(false)
  const fetchingCpuAllocationRef = useRef(false)
  const fetchingMemoryUsageRef = useRef(false)
  const fetchingMemoryAllocationRef = useRef(false)
  const fetchingPods = useRef(false)

  const active_pods = useSelector(state => state.dashboard.pods.currentValue);
  const cpu_usage = useSelector(state => state.dashboard.cpu.currentUsage);
  const cpu_allocation = useSelector(state => state.dashboard.cpu.currentAllocated);
  const memory_usage = useSelector(state => state.dashboard.memory.currentUsage);
  const memory_allocation = useSelector(state => state.dashboard.memory.currentAllocated);

  const dispatch = useDispatch();

  useEffect(() => {
    const namespace = "production"
    const interval = "10d"
    const step = "1h"

    //Make sure we only fetch the data once. 
    //TODO: check edge cases for failed when we have the correct endpoint
    if (statusCpuUsage === 'idle' && !fetchingCpuUsageRef.current) {
      dispatch(fetchCpuUsage({ namespace, interval, step }))
      fetchingCpuUsageRef.current = true;
    }
    if (statusCpuAllocation === 'idle' && !fetchingCpuAllocationRef.current) {
      dispatch(fetchCpuAllocation({ namespace, interval, step }))
      fetchingCpuAllocationRef.current = true;
    }
    if (statusPods === 'idle' && !fetchingPods.current) {
      dispatch(fetchActivePods({ namespace, interval, step }))
      fetchingPods.current = true;
    }
    if (statusMemoryUsage === 'idle' && !fetchingMemoryUsageRef.current) {
      dispatch(fetchMemoryUsage({ namespace, interval, step }))
      fetchMemoryUsage.current = true;
    }
    if (statusMemoryAllocation === 'idle' && !fetchingMemoryAllocationRef.current) {
      dispatch(fetchMemoryAllocation({ namespace, interval, step }))
      fetchingMemoryAllocationRef.current = true;
    }

  }, [dispatch, statusCpuAllocation, statusCpuUsage, statusPods, statusMemoryUsage, statusMemoryAllocation])

  return (
    <div className="container">
      <div className="layout-grid">
        <Card style={{ height: '100%', gridArea: 'lc' }} title="Estimated CO2 emission"><Co2Emission/></Card>
        <StatComponent gridArea="b1" title="Saved Emission" loaded1="idle"/>
        <StatComponent gridArea="b2" title="CPU Usage and Allocation" loaded1={statusCpuUsage} loaded2={statusCpuAllocation} stat1={cpu_usage} stat2={cpu_allocation} unit={'core'}/>
        <StatComponent gridArea="b3" title="Memory Usage  and Allocation" loaded1={statusMemoryAllocation} loaded2={statusMemoryUsage} stat1={memory_usage} stat2={memory_allocation} unit={'GB'}/>
        <StatComponent gridArea="b4" title="N Active Pod" loaded1={statusPods} stat1={active_pods}/>
      </div>
    </div>
  );
}

export default App;
