/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>
      <div>
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
      </div>
      <div>
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
        <Button value="AC" clickHandler={handleClick} />
      </div>
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
