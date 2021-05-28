/* globals describe, expect, it, beforeEach */
import { shallow } from 'enzyme';
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
