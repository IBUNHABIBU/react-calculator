/* eslint-disable no-unused-vars */
const calculate = ( data, btnName ) => {
  let { total, next, operation } = data;
  switch (btnName) {
    case 'AC':
      total = 0
      next = 0
    break;
    case '+/-':
      total *= -1
      next *= -1
    break;
    default:
          total = null;
  }
}


export default calculate;
