import calculate from '../logic/calculate';

let data;
beforeEach(() => {
  data = { total: null, next: null, operation: null };
});

describe("calculate function when no operation", ()=> {
    it("concatenates the button value to total when next is null", ()=> {
        data = { total: "2", next: null, operation: null }
        let btnValue = "5"
        let result = calculate(data, btnValue);
        expect(result.total).toEqual("25");
    })

    it("concatenates the button value to next ", ()=> {
        data = { total: "2", next: "48", operation: "+" }
        let btnValue = "5"
        let result = calculate(data, btnValue);
        expect(result.next).toEqual("485");
    })
})

describe("calculate function when there is  operation", ()=> {
    it("adds two numbers when the operation is + ", ()=> {
        data = { total: "2", next: "8", operation: "+" }
        let btnValue = "="
        let result = calculate(data, btnValue);
        console.log(result);
        expect(result.total).toEqual("10");
    })

    it("subtracts two numbers when the operation is -  ", ()=> {
        data = { total: "2", next: "48", operation: "-" }
        let btnValue = "="
        let result = calculate(data, btnValue);
        expect(result.total).toEqual("-46");
    })
})