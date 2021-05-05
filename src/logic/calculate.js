/* eslint-disable no-unused-vars */
import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  switch (btnName) {
    case 'AC':
      total = 0;
      next = 0;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '%':
      total = operate(total, 100, btnName);
      break;
    case 'x': case '÷': case '+': case '-':
      operation = btnName;
      break;
    default:
      total = null;
  }
};

export default calculate;
