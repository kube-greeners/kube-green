import "./App.css";
import { Layout } from "antd";
import ReduxExample from "./components/ReduxExample";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <>
      <ReduxExample />
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
