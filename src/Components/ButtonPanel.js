/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>
      <div>
        <Button clickHandler={() => handleClick(btnName)}>AC</Button>
        <Button clickHandler={() => handleClick(btnName)}>+/-</Button>
        <Button clickHandler={() => handleClick(btnName)} >%</Button>
        <Button clickHandler={() => handleClick(btnName)} >÷</Button>
      </div>
      <div>
        <Button clickHandler={() => handleClick(btnName)} >7</Button>
        <Button value="8" clickHandler={() => handleClick(btnName)} >8</Button>
        <Button value="9" clickHandler={() => handleClick(btnName)} >9</Button>
        <Button value="X" clickHandler={() => handleClick(btnName)} >X</Button>
      </div>
      <div>
        <Button  clickHandler={() => handleClick(btnName)} >4</Button>
        <Button  clickHandler={() => handleClick(btnName)} >5</Button>
        <Button  clickHandler={() => handleClick(btnName)} >6</Button>
        <Button  clickHandler={() => handleClick(btnName)} >-</Button>
      </div>
      <div>
        <Button  clickHandler={() => handleClick(btnName)} >1</Button>
        <Button  clickHandler={() => handleClick(btnName)} >2</Button>
        <Button  clickHandler={() => handleClick(btnName)} >3</Button>
        <Button  clickHandler={() => handleClick(btnName)} >+</Button>
      </div>
      <div>
        <Button  clickHandler={() => handleClick(btnName)} >+/-</Button>
        <Button  clickHandler={() => handleClick(btnName)} >+/-</Button>
        <Button  clickHandler={() => handleClick(btnName)} >+/-</Button>
      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
