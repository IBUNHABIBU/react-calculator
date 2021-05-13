import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(parseFloat(numberOne));
  const secondNumber = Big(parseFloat(numberTwo));
  let result;
  switch (operation) {
    case '%':
      result = firstNumber.div(100);
      break;
    case '÷':
      if (secondNumber.toNumber() === 0) {
        return 'You cannot devide any number by zero';
      }
      result = firstNumber.div(secondNumber);
      break;
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case 'X':
      result = firstNumber.times(secondNumber);
      break;
    default:
      result = null;
      break;
  }
  return result.toString();
};

export default operate;
