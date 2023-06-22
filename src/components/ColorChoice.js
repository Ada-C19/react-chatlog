import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice =(props)=>{
    // const handleColorSelection = (color) => {
    //     setColorCallback(color);
    // };
    
    return (
      <div className='color-picker-container'>
        <span className="circle red" onClick={() => handleColorSelection('red')}></span>
        <span className="circle orange" onClick={() => handleColorSelection('orange')}></span>
        <span className="circle yellow" onClick={() => handleColorSelection('yellow')}></span>
        <span className="circle green" onClick={() => handleColorSelection('green')}></span>
        <span className="circle blue" onClick={() => handleColorSelection('blue')}></span>
        <span className="circle purple" onClick={() => handleColorSelection('purple')}></span>
      </div>
    );
};

ColorChoice.propTypes = {
    sender: PropTypes.string.isRequired,
  };

export default ColorChoice;