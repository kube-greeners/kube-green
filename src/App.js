import { Col, Layout, Row, Card } from 'antd'
import './App.css';
const { Content } = Layout;




function App() {
  return (
    <div className="container">
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card title="Line chart">lorem</Card>
        </Col>
        <Col span={8}>
          <Row gutter={[0,24]}>
            <Col flex="0 0 100%"><Card title="Line chart">lorem</Card></Col>
            <Col flex="0 0 100%"><Card title="Line chart">lorem</Card></Col>
            <Col flex="0 0 100%"><Card title="Line chart">lorem</Card></Col>
            <Col flex="0 0 100%"><Card title="Line chart">lorem</Card></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
