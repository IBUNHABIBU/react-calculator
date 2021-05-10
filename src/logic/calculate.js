/* eslint-disable no-unused-vars */
import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;

    case 'x': case '÷': case '+': case '-': case '%':
      total = operate(total, next, operation);
      break;
    case '=':
      return next ? operate(total, next, operation) : total;
    default:
      total = null;
  }
  return total;
};

export default calculate;
