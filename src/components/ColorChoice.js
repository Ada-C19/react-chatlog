import React from 'react';
import './ColorChoice.css'

const ColorChoice = ({ setColorCallback }) => {
    return (
        <div id="color-picker">color:
            <ul>
                <li>🔴</li>
                <li>🟠</li>
                <li>🟡</li>
                <li>🟢</li>
                <li>🔵</li>
                <li>🟣</li>
            </ul>
        </div>
    )
}

export default ColorChoice