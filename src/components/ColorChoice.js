import React from 'react';
import './ColorChoice.css';

const ColorChoice = (props) => {
    const colors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];

    const onColorButtonClick = () => {
        const updatedColor  = {
          
        };
        props.setColorCallback(updatedColor);
      };

    const colorButtons = colors.map(entry => {
        return (
            <button> </button>
        )
    })
    
    return (
       {colorButtons}
    );
}