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
  const orangeBtns = ['+', 'X', '-', '=', '÷'];
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>

      {
          btnGroups.map((group) => (
            <div className="btn-panel">
              {
                group.map((item) => {
                  const wide = item === '0' ? true : undefined;
                  const color = orangeBtns.includes(item) ? true : undefined;
                  return (
                    <Button
                      wide={wide}
                      color={color}
                      value={item}
                      clickHandler={() => handleClick(item)}
                    />
                  );
                })
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
