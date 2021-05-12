/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import operate from './operate';

const calculate = (data, btnName) => {
  if (!data) { return { total: null, next: null, operation: null }; }
  let { total, next, operation } = data;
  if (!parseInt(btnName, 10) && btnName !== '0') {
    if (!total) {
      return false;
    }
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

      case 'X': case '÷': case '+': case '-': case '%':
        operation = btnName;
        break;
      case '=':
        return next ? operate(total, next, operation) : total;
      default:
        total = null;
    }
  } else if (operation && operation !== '=') {
    next ? next += btnName : next = btnName;
  } else if (operation === '=') {
    total = btnName;
    operation = null;
  } else {
    total ? total += btnName : total = btnName;
  }
  return { total, next, operation };
};

export default calculate;
