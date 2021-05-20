import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

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
      <div className="app-container">
        <Display result={`${total || ''} ${operation || ''} ${next || ''}`} className="dis" />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
