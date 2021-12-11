import NavBar from "./NavBar"
import renderer from 'react-test-renderer'

test("matches snapshot", () => {
  const tree = renderer.create(<NavBar/>).toJSON();
  expect(tree).toMatchSnapshot();
});
