import React from 'react';
import PropTypes from 'prop-types'
import './ColorChoice.css'

const ColorChoice= ( { sender, color, setColorCallback } ) => {

    const handleColorChange = (color) => {
        setColorCallback(sender, color);
    }

    
    return (
    <span>
        <label>Pick a color for {sender}:</label>
        <button onClick={() => handleColorChange('green')} >🟢</button>
        <button onClick={() => handleColorChange('yellow')}>🟡</button>
        <button onClick={() => handleColorChange('red')}>🔴</button>
        <button onClick={() => handleColorChange('blue')}>🔵</button>
        <button onClick={() => handleColorChange('purple')}>🟣</button>
        <button onClick={() => handleColorChange('orange')}>🟠</button>
    </span> 
    )
};

ColorChoice.propTypes= {
    handleColorChange: PropTypes.func, 
}

export default ColorChoice;