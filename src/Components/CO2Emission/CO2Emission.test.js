import Co2Emission from "./CO2Emission";
import renderer from 'react-test-renderer'
import store from "../../redux/store";
import { Provider } from "react-redux";

test("matches snapshot", () => {
  const tree = renderer.create(<Provider store={store}><Co2Emission/></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
