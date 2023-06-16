import React from 'react';
import ColorButton from './ColorButton.js';
import PropTypes from 'prop-types';

const ColorButtons = ({ sender, onUpdateColor }) => {
  const buttons = [
    { color: 'red', icon: '🔴' },
    { color: 'orange', icon: '🟠' },
    { color: 'yellow', icon: '🟡' },
    { color: 'green', icon: '🟢' },
    { color: 'blue', icon: '🔵' },
    { color: 'purple', icon: '🟣' },
    /* { color: '#222', icon: '⚫' }, */
  ];
  return buttons.map((entry) => {
    return (
      <ColorButton
        colorName={entry.color}
        icon={entry.icon}
        sender={sender}
        onUpdate={onUpdateColor}
      />
    );
  });
};

ColorButtons.propTypes = {
  sender: PropTypes.string.isRequired,
  onUpdateColor: PropTypes.func.isRequired,
};

export default ColorButtons;
