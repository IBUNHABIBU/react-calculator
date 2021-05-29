/* globals describe, expect, it, beforeEach */
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from '../Components/Home';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe('Show the home page element', () => {
  it('should display the Home page paragraphs', () => {
    expect(wrapper.find('h1').text()).toContain('Welcome to Math-magician Calculator');
  });
});

describe("snapshots", () => {
  it("renders App component correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
