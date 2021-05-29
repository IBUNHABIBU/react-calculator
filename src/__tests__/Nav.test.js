/* globals describe, expect, it, beforeEach */
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Nav from '../Components/Nav';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Nav />);
});

describe('Menu navigation', () => {
  it('display the logo', () => {
    expect(wrapper.find('.logo').text()).toContain('MathMagician');
  });
});

describe('snapshots', () => {
  it('renders App component correctly', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
