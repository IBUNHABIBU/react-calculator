import { shallow } from 'enzyme';
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
