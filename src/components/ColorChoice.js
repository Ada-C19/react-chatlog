import React from 'react';
import PropTypes from 'prop-types'

const ColorChoice= ( { setColorCallback } ) => {

    const handleColorChange = (color) => {
        setColorCallback(color);
    }

    
    return (
    <span>
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
    setColorCallback: PropTypes.func.isRequired, 
}

export default ColorChoice;