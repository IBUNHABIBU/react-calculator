import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  value,
  wide,
  color,
  clickHandler,
}) => {
  const handleClick = (btnName) => clickHandler(btnName);
  return (
    <>
      <button className={`${color} ${wide} btn`} type="button" onClick={() => handleClick(value)}>
        { value }
      </button>
    </>
  );
};
Button.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
