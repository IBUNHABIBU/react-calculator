/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';

const Calculate = ({ data, btnName }) => {
  let { total, next, operation } = data;
  return (
    <>
    </>
  );
}

Calculate.propTypes = {
  data: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Calculate;
