/* globals describe, expect, it, beforeEach */
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Quote from '../Components/Quote';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Quote />);
});

describe('Show the quote of the day', () => {
  it('should display the Quote heading', () => {
    expect(wrapper.find('h1').text()).toContain('Quote');
  });
});

describe('snapshots', () => {
  it('renders App component correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
