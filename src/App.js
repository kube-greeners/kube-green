import './App.css';
import { Layout } from 'antd';
import data from './Mockdata/c02emission.json';
import LineChart from './Components/Line/LineChart';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  data.sort((a, b) => {
    return new Date(a.Date) - new Date(b.Date)
    }) 
  return (
    <>
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content><LineChart data = {data} /> </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
  );
}

export default App;
