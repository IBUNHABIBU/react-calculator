import Nav from '../Components/Nav';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(()=> {
    wrapper = shallow(<Nav />)
})

describe("Menu navigation", () => {
    it("display the logo", () => {
        expect(wrapper.find('.logo').text()).toContain('MathMagician');
    })
})