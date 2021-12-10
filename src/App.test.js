import App from "./App";
import renderer from 'react-test-renderer'
import store from "./redux/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

test("matches snapshot", () => {
  const tree = renderer.create(<Provider store={store}><App/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
