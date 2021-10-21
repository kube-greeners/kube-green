import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content, Button } = Layout;

function App() {
  return (
    <>

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
  );
}

export default App;
