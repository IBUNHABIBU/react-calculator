import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);
  return (
    <>
      <button type="button" onClick={() => handleClick(value)}>
        { value }
      </button>
    </>
  );
};
Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
