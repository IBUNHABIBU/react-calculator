import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setnext] = useState(null);
  const [operation, setoperation] = useState(null);
  const handleClick = (btnName) => {
    const data = {
      total,
      next,
      operation,
    };
    const modifiedData = calculate(data, btnName);
    setTotal(modifiedData.total);
    setnext(modifiedData.next);
    setoperation(modifiedData.operation);
  };
  return (
    <>
      <div className="display-container">
        <Display result={`${total || ''} ${operation || ''} ${next || ''}`} />
      </div>
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
