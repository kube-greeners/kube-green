import './App.css';
import { Col, Row, Card } from 'antd'
import data from './Mockdata/c02emission.json';
import LineChart from './Components/Line/LineChart';

function App() {

  data.sort((a, b) => {
    return new Date(a.Date) - new Date(b.Date)
    }) 

  return (
    <div className="container">
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card title="Line chart"><LineChart data = {data} /> </Card>
        </Col>
        <Col span={8} className="flexcolumn">
            
            <Card style={{flex:'1'}} title="Saved Emission">test</Card>
            <Card style={{flex:'1'}} title="CPU Usage and Allocation">test</Card>
            <Card style={{flex:'1'}} title="Memory Usage  and Allocation">test</Card>
            <Card style={{flex:'1'}} title="N Active Pod">test</Card>
            
        </Col>
      </Row>
    </div>
  );
}

export default App;
