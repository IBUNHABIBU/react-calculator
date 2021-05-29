/* globals describe, expect, it, beforeEach */
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Display from '../Components/Display';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Display result="48" />);
});

describe('Display the result', () => {
  it('should display the result of the calculation', () => {
    expect(wrapper.find('.display-container').text()).toContain('48');
  });
});

describe('snapshots', () => {
  it('renders App component correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
