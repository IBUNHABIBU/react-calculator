/* globals describe, expect, it, beforeEach */ 
import { mount, shallow } from 'enzyme';
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
