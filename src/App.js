import { Col, Layout, Row, Card } from 'antd'
import './App.css';
const { Content } = Layout;




function App() {
  return (
    <div className="container">
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card title="Line chart">test</Card>
        </Col>
        <Col span={8}>
          <Row gutter={[0,24]}>
            <Col flex="0 0 100%"><Card title="Saved Emission">test</Card></Col>
            <Col flex="0 0 100%"><Card title="CPU Usage and Allocation">test</Card></Col>
            <Col flex="0 0 100%"><Card title="Memory Usage  and Allocation">test</Card></Col>
            <Col flex="0 0 100%"><Card title="N Active Pod">test</Card></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
