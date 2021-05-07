/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>
      <div>
        <Button clickHandler={handleClick} />
        <Button clickHandler={handleClick}>+/-</Button>
        <Button clickHandler={handleClick}>%</Button>
        <Button clickHandler={handleClick}>÷</Button>
      </div>
      <div>
        <Button clickHandler={handleClick}>7</Button>
        <Button clickHandler={handleClick}>8</Button>
        <Button clickHandler={handleClick}>9</Button>
        <Button clickHandler={handleClick}>X</Button>
      </div>
      <div>
        <Button clickHandler={handleClick}>4</Button>
        <Button clickHandler={handleClick}>5</Button>
        <Button clickHandler={handleClick}>6</Button>
        <Button clickHandler={handleClick}>-</Button>
      </div>
      <div>
        <Button clickHandler={handleClick}>1</Button>
        <Button clickHandler={handleClick}>2</Button>
        <Button clickHandler={handleClick}>3</Button>
        <Button clickHandler={handleClick}>+</Button>
      </div>
      <div>
        <Button clickHandler={handleClick}>+/-</Button>
        <Button clickHandler={handleClick}>+/-</Button>
        <Button clickHandler={handleClick}>+/-</Button>
      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
