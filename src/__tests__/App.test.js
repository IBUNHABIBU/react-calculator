/* globals describe, expect, it, beforeEach */
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../Components/App';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('Combine all components', () => {
  it('should have Display component', () => {
    expect(wrapper.find('.app-container').text()).toContain('<Display />');
  });

  it('should have ButtonPanel component', () => {
    expect(wrapper.find('.app-container').text()).toContain('<ButtonPanel />');
  });
});

describe("snapshots", () => {
  it("renders App component correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
