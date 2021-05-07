/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>
    <div>
      <Button value="AC" clickHandler />
      <Button value="+/-" clickHandler />
      <Button value="%" clickHandler />
      <Button value="÷" clickHandler />
    </div>
    <div>
      <Button value="7" clickHandler />
      <Button value="8" clickHandler />
      <Button value="9" clickHandler />
      <Button value="X" clickHandler />
    </div>
    <div>
      <Button value="4" clickHandler />
      <Button value="5" clickHandler />
      <Button value="6" clickHandler />
      <Button value="-" clickHandler />
    </div>
    <div>
      <Button value="1" clickHandler />
      <Button value="2" clickHandler />
      <Button value="3" clickHandler />
      <Button value="+" clickHandler />
    </div>
    <div>
      <Button value="0" clickHandler />
      <Button value="." clickHandler />
      <Button value="=" clickHandler />
    </div>
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
