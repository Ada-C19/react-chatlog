import React from 'react';
import './ColorChoice.css';

const ColorChoice = (props) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    // const onColorButtonClick = () => {
    //     const updatedColor  = {
          
    //     };
    //     props.setColorCallback(updatedColor);
    //   };

    const colorButtons = colors.map(color => {
        let buttonContent = undefined;
        if (color === 'red') {
            buttonContent = '🔴';
        } else if (color === 'orange') {
            buttonContent = '🟠';
        } else if (color === 'yellow') {
            buttonContent = '🟡';
        } else if (color === 'green') {
            buttonContent = '🟢';
        } else if (color === 'blue') {
            buttonContent = '🔵';
        } else {
            buttonContent = '🟣';
        }
        return (
            <button /*onClick={onColorButtonClick}*/>{buttonContent}</button>
        )
    });
    
    return (
        <div>
       {colorButtons}
       </div>
    );
}

export default ColorChoice;