import React from 'react';
import './ColorChoice.css';

const ColorChoice = (props) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let buttonContent = null;
    const user = props.user;

    const colorButtons = colors.map(color => {
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
            <button key={color} onClick={() => {props.updateColor(user, color)}}>{buttonContent}</button>
        )
    });

    
    return (
        <div>
       {colorButtons}
       </div>
    );
}

export default ColorChoice;