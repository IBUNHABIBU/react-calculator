import Home from '../Components/Home';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(()=> {
    wrapper = shallow(<Home />)
})

describe("Show the home page element", () => {
    it("should display the Home page paragraphs", () => {
        expect(wrapper.find('h1').text()).toContain('Welcome to Math-magician Calculator');
    })
})