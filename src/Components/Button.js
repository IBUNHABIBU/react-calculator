import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => (
  <>
    <div>
      { value }
    </div>
  </>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
