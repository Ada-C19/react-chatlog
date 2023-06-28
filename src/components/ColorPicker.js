import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ColorPicker = ({ onUpdateColor, user }) => {
  return (
    <section className="color-picker-container">
      <button onClick={() => onUpdateColor('red', user)}>🔴</button>
      <button onClick={() => onUpdateColor('orange', user)}>🟠</button>
      <button onClick={() => onUpdateColor('yellow', user)}>🟡</button>
      <button onClick={() => onUpdateColor('green', user)}>🟢</button>
      <button onClick={() => onUpdateColor('blue', user)}>🔵</button>
      <button onClick={() => onUpdateColor('purple', user)}>🟣</button>
    </section>
  )
  
};

ColorPicker.propTypes = {
  onUpdateColor: PropTypes.func.isRequired
};

export default ColorPicker;