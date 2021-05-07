/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div>
      <Button value="AC" />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="÷" />
    </div>
    <div>
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button value="X" />
    </div>
    <div>
      <Button value="4" />
      <Button value="5" />
      <Button value="6" />
      <Button value="-" />
    </div>
    <div>
      <Button value="1" />
      <Button value="2" />
      <Button value="3" />
      <Button value="+" />
    </div>
    <div>
      <Button value="0" />
      <Button value="." />
      <Button value="=" />
    </div>
  </>
);

export default ButtonPanel;
