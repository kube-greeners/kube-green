import './App.css';
import { Layout } from 'antd';
import { Col, Row, Card } from 'antd'
import data from './Mockdata/c02emission.json';
import LineChart from './Components/Line/LineChart';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  data.sort((a, b) => {
    return new Date(a.Date) - new Date(b.Date)
    }) 
  return (
    <div className="container">
      <Row gutter={[24, 24]}>
        <Col span={16} style={{height:'100%'}}>
          <Card title="Line chart"><LineChart data = {data} /> </Card>
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
