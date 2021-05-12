/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const btnGroups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>

      {
          btnGroups.map((group) => (
            <div className="btn-panel">
              {
                group.map((item) => <Button value={item} clickHandler={() => handleClick(item)} />)
              }
            </div>
          ))
        }
    </>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
