import { Col, Row, Card } from 'antd'
import Co2Emission from './Components/Co2Emission'
import './App.css';

function App() {

  return (
    <div className="container">
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card title="Line chart"><Co2Emission/> </Card>
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
