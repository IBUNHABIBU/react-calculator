/* globals describe, expect, it */ 
import { shallow } from 'enzyme';
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
