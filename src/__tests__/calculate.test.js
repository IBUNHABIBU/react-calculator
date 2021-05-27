import calculate from '../logic/calculate';

let data;
beforeEach(() => {
  data = { total: null, next: null, operation: null };
});
describe('Calculate ', () => {
    test('Number concatenation when no operation', () => {
        it('should concatenate the first items', () => {
            data = { total: '2', next: null, operation: null}
            const btnName = '5'
            const result = calculate(data,btnName);
            expect(result.total).toEqual(8);
        })
    })
})