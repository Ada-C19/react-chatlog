import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice =(props)=>{

      const handleColorSelection = (color) => {
          props.onSenderColors(props.sender,color);
      };
    
      return (
        <div>
          <div className='color-picker-container'>
            <span className="dot red" onClick={() => handleColorSelection('red')}>.</span>
            <span className="dot orange" onClick={() => handleColorSelection('orange')}>.</span>
            <span className="dot yellow" onClick={() => handleColorSelection('yellow')}>.</span>
            <span className="dot green" onClick={() => handleColorSelection('green')}>.</span>
            <span className="dot blue" onClick={() => handleColorSelection('blue')}>.</span>
            <span className="dot purple" onClick={() => handleColorSelection('purple')}>.</span>
          </div>
        </div>
      );
    };
    

ColorChoice.propTypes = {
    onSenderColors: PropTypes.func.isRequired,
  };

export default ColorChoice;