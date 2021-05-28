import calculate from '../logic/calculate';

let data;
beforeEach(() => {
  data = { total: null, next: null, operation: null };
});

describe('calculate function when no operation', () => {
  it('concatenates the button value to total when next is null', () => {
    data = { total: '2', next: null, operation: null };
    const btnValue = '5';
    const result = calculate(data, btnValue);
    expect(result.total).toEqual('25');
  });

  it('concatenates the button value to next ', () => {
    data = { total: '2', next: '48', operation: '+' };
    const btnValue = '5';
    const result = calculate(data, btnValue);
    expect(result.next).toEqual('485');
  });
});

describe('calculate function when there is  operation', () => {
  it('adds two numbers when the operation is + ', () => {
    data = { total: '2', next: '8', operation: '+' };
    const btnValue = '=';
    const result = calculate(data, btnValue);
    expect(result.total).toEqual('10');
  });

  it('subtracts two numbers when the operation is -  ', () => {
    data = { total: '2', next: '48', operation: '-' };
    const btnValue = '=';
    const result = calculate(data, btnValue);
    expect(result.total).toEqual('-46');
  });

  it('multiplies two numbers when the operation is x ', () => {
    data = { total: '2', next: '8', operation: 'X' };
    const btnValue = '=';
    const result = calculate(data, btnValue);
    expect(result.total).toEqual('16');
  });

  it('devides two numbers when the operation is ÷ ', () => {
    data = { total: '192', next: '48', operation: '÷' };
    const btnValue = '=';
    const result = calculate(data, btnValue);
    expect(result.total).toEqual('4');
  });

  it('gives the percentage when the operation is % ', () => {
    data = { total: '12', next: 100, operation: '%' };
    const btnValue = '=';
    const result = calculate(data, btnValue);
    expect(result.total).toEqual('0.12');
  });
});

describe('Clear the display', () => {
  it('resets the display to zeror when AC button is pressed', () => {
    data = { total: '172', next: 100, operation: '+' };
    const btnValue = 'AC';
    const result = calculate(data, btnValue);
    expect(result.total).toEqual(null);
  });
});
