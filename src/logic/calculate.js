/* eslint-disable no-unused-vars */

import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  if (!parseInt(btnName, 10) && btnName !== '0') {
    switch (btnName) {
      case '+': case 'X': case '-': case '÷':
        operation = btnName;
        break;
      case '%':
        operation = btnName;
        total = operate(total, 100, operation);
        operation = null;
        break;
      case '=':
        total = operate(total, next, operation);
        next = null;
        operation = null;
        break;
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;
      case '+/-':
        if (next) {
          next *= -1;
        } else {
          total *= -1;
        }
        break;
      case '.':
        if (next && !next.includes('.')) {
          next += btnName;
        }
        if (total && !total.includes('.')) {
          total += btnName;
        }
        break;
      default:
        total = null;
        break;
    }
  } else if (!total) {
    total = btnName;
  } else if (!operation) {
    total += btnName;
    next = null;
    operation = null;
  } else if (!next) {
    next = btnName;
  } else if (operation === '÷' && next === '0') {
    return null;
  } else {
    next += btnName;
  }

  return { total, next, operation };
};

export default calculate;
