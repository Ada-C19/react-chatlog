import React from 'react';
import PropTypes from 'prop-types';
import './ColorButton.css';

const ColorButton = ({ sender, colorName, icon, onUpdate }) => {
  const onColorClick = () => {
    onUpdate(sender, colorName);
  };

  return (
    <span className='colorButton' onClick={onColorClick}>
      {icon}
    </span>
  );
};

ColorButton.propTypes = {
  sender: PropTypes.string.isRequired,
  colorName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ColorButton;
