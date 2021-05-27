import Quote from '../Components/Quote';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(()=> {
    wrapper = shallow(<Quote />)
})

describe("Show the quote of the day", () => {
    it("should display the Quote heading", () => {
        expect(wrapper.find('h1').text()).toContain('Quote');
    })
})