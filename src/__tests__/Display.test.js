import Home from '../Components/Home';
import { shallow } from 'enzyme';
import Display from '../Components/Display';

let wrapper;
beforeEach(()=> {
    wrapper = shallow(<Display />)
})

describe("Show the home page element", () => {
    it("should display the Home page paragraphs", () => {
        expect(wrapper.find('h1').text()).toContain('Welcome to Math-magician Calculator');
    })
})