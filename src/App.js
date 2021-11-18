import './App.css';
import { Card, Col, Layout, Row } from 'antd';

const {Content } = Layout;

function App() {
  return (
    <>

    <Layout>
      <Content className="content">
        <Row className="spacing"></Row>
        <Row justify="space-around">
          <Col span={22}>
            <Row gutter={16}>
              <Col>Namespace</Col>
              <Col> Time interval</Col>
            </Row>
            <Row className="spacing"></Row>
            <Row justify="space-around">
              <Col span={20}>
                  <Row justify="space-between">
                    <Col span={18}> <Card>Main diagram</Card></Col>
                    <Col span={5}> 
                      <Row gutter={[0,20]}>
                        <Col flex="auto"> <Card>Saved emission</Card></Col>
                        <Col flex="auto"> <Card>Actual CPU usage and Allocation</Card></Col> 
                        <Col flex="auto"> <Card>Actual Memory usage and Allocation</Card></Col> 
                        <Col flex="auto"> <Card>Actual Number of active pods</Card></Col> 
                      </Row> 
                    </Col>
                  </Row>
                  <Row className="spacing"></Row>
                  <Row justify="space-between">
                    <Col span={7}> <Card>Memory usage</Card></Col>
                    <Col span={7}> <Card>CPU usage</Card></Col>
                    <Col span={7}> <Card>Active Pods</Card></Col>
                  </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  </>
  );
}

export default App;
