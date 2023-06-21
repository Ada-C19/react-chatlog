import React from 'react';

const ColorChoice = (props) => {

    return (
        <span>
            <button onClick={() => props.setColorCallback('red')}>'🔴'</button>
            <button onClick={() => props.setColorCallback('orange')}>'🟠'</button>
            <button onClick={() => props.setColorCallback('yellow')}>'🟡'</button>
            <button onClick={() => props.setColorCallback('green')}>'🟢'</button>
            <button onClick={() => props.setColorCallback('blue')}>'🔵'</button>
            <button onClick={() => props.setColorCallback('purple')}>'🟣'</button>
        </span>
    );
};

export default ColorChoice;